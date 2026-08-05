#!/usr/bin/env python3
"""Parse the Ditectrev SOA-C03 practice-test README into the study app's data shape."""
import json
import os
import re
import sys

SRC = "/Users/cho/Desktop/dev/aws-study/AWS-Certified-CloudOps-Engineer-Associate-SOA-C03-Practice-Tests-Exams-Questions-Answers/README.md"
OUT = "/Users/cho/Desktop/dev/aws-study/aws-cert-study/js/data/soa-c03-pt.data.js"

IMG_RE = re.compile(r"!\[[^\]]*\]\(([^)]+)\)")
CHOICE_RE = re.compile(r"^- \[( |x)\] ?(.*)$")

lines = open(SRC, encoding="utf-8").read().split("\n")

questions = []
anomalies = []
i = 0
while i < len(lines):
    line = lines[i]
    if not line.startswith("### "):
        i += 1
        continue
    qtext = line[4:].strip()
    i += 1
    q_images = []
    choices = []          # list of {text, images, correct}
    stray = []
    while i < len(lines) and not lines[i].startswith("**[⬆ Back to Top]"):
        raw = lines[i]
        s = raw.strip()
        if not s:
            i += 1
            continue
        m = CHOICE_RE.match(raw)
        if m:
            choices.append({"text": m.group(2).strip(), "images": [], "correct": m.group(1) == "x"})
            i += 1
            continue
        imgs = IMG_RE.findall(s)
        if imgs and IMG_RE.sub("", s).strip() == "":
            target = choices[-1]["images"] if choices else q_images
            target.extend(imgs)
            i += 1
            continue
        # continuation line of the previous choice (or of the question stem)
        if choices:
            choices[-1]["text"] = (choices[-1]["text"] + " " + s).strip()
        elif s.startswith("|") or s.startswith("###"):
            stray.append(s)
        else:
            qtext = (qtext + " " + s).strip()
        i += 1
    i += 1  # skip the Back-to-Top marker

    num = len(questions) + 1
    if stray:
        anomalies.append(("stray lines", num, stray[:3]))
    if len(choices) < 2:
        anomalies.append(("too few choices", num, len(choices)))
    answer = [k for k, c in enumerate(choices) if c["correct"]]
    if not answer:
        anomalies.append(("no answer marked", num, qtext[:80]))

    declared = None
    dm = re.search(r"\(Choose (two|three|four|five|TWO|THREE)\.?\)", qtext, re.I)
    if dm:
        declared = {"two": 2, "three": 3, "four": 4, "five": 5}[dm.group(1).lower()]
    if declared and len(answer) != declared:
        anomalies.append(("answer count != declared", num, (len(answer), declared, qtext[:70])))

    questions.append({
        "num": num,
        "question": qtext,
        "images": q_images,
        "choices": choices,
        "answer": answer,
    })

print("parsed questions:", len(questions))
print("multi:", sum(1 for q in questions if len(q["answer"]) > 1))
print("with question images:", sum(1 for q in questions if q["images"]))
print("with choice images:", sum(1 for q in questions if any(c["images"] for c in q["choices"])))
from collections import Counter
print("choice-count distribution:", dict(Counter(len(q["choices"]) for q in questions)))
print("answer-count distribution:", dict(Counter(len(q["answer"]) for q in questions)))
print("\nanomalies:", len(anomalies))
for a in anomalies[:40]:
    print(" -", a)

if "--write" not in sys.argv:
    sys.exit(0)

# ---- build app data ----
IMG_PREFIX = "images/soa-pt/"


def img_paths(paths):
    return [IMG_PREFIX + os.path.basename(p) for p in paths]


# 원본에 실습(lab) 지문이 하나 섞여 있는데 선택지가 1개뿐이라 객관식으로 낼 수 없다.
usable = [q for q in questions if len(q["choices"]) >= 2]
skipped = [q["num"] for q in questions if len(q["choices"]) < 2]

# 원본 순서를 유지한 채 균등한 크기의 연습시험 세트로 나눈다.
N_SETS = 6
total_q = len(usable)
bounds = [round(total_q * k / N_SETS) for k in range(N_SETS + 1)]
sets = []
out_questions = []
for s in range(N_SETS):
    chunk = usable[bounds[s]:bounds[s + 1]]
    set_id = "set%d" % (s + 1)
    sets.append({
        "id": set_id,
        "title": "Practice Test %d · 원본 %d-%d번" % (s + 1, chunk[0]["num"], chunk[-1]["num"]),
        "count": len(chunk),
        "weight": 0,          # 아래에서 문항 수 비례로 채운다
        "tasks": [],
    })
    for q in chunk:
        item = {
            "id": "soapt-q%03d" % q["num"],
            "num": q["num"],
            "taskId": set_id,
            "domainId": set_id,
            "type": "multi" if len(q["answer"]) > 1 else "single",
            "question": q["question"],
            "choices": [c["text"] for c in q["choices"]],
            "answer": q["answer"],
            "explanation": "",
        }
        if q["images"]:
            item["images"] = img_paths(q["images"])
        if any(c["images"] for c in q["choices"]):
            item["choiceImages"] = [img_paths(c["images"]) for c in q["choices"]]
        out_questions.append(item)

# 세트 가중치는 문항 수 비율(모의고사 출제 비율에 그대로 쓰인다). 합이 정확히 100이 되도록 보정.
raw = [s["count"] / total_q * 100 for s in sets]
weights = [int(r) for r in raw]
order = sorted(range(N_SETS), key=lambda k: raw[k] - int(raw[k]), reverse=True)
for k in range(100 - sum(weights)):
    weights[order[k % N_SETS]] += 1
for s, w in zip(sets, weights):
    s["weight"] = w

data = {
    "id": "soa-c03-pt",
    "kind": "bank",
    "name": "AWS CloudOps Engineer Associate (SOA-C03) Practice Tests Exams",
    "code": "SOA-C03 PT",
    "source": "Ditectrev · AWS-Certified-CloudOps-Engineer-Associate-SOA-C03-Practice-Tests-Exams-Questions-Answers",
    "passScore": 720,
    "maxScore": 1000,
    "examMinutes": 130,
    "totalQuestions": 65,
    "scoredQuestions": 50,
    "domains": sets,
    "services": [],
    "questions": out_questions,
}

with open(OUT, "w", encoding="utf-8") as f:
    f.write("// 자동 생성 파일 — scripts/parse_pt.py 가 README.md 를 변환합니다. 직접 편집하지 마세요.\n")
    f.write("window.APP_DATA = window.APP_DATA || {};\n")
    f.write('window.APP_DATA["soapt"] = ')
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write(";\n")
print("\nwrote", OUT)
print("questions in bank:", len(out_questions), "| skipped (선택지 부족):", skipped)
print("sets:", [(s["id"], s["count"], s["weight"]) for s in sets])
