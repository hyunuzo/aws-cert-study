#!/usr/bin/env python3
"""'SOA-C03_문제풀이_툴.html' 안의 <script id="qdata"> JSON 320문항을 스터디 앱 데이터로 변환한다.

원본 도구는 문제를 20개씩 끊어 푸는 방식이라 여기서도 20문항 = 1구간으로 묶는다.
보기 순서는 절대 섞지 않는다. 해설이 "A, B, D 는 오답이다" 처럼 보기 문자를 직접 가리키기 때문이다.

    python3 scripts/parse_dump.py          # 검증만
    python3 scripts/parse_dump.py --write  # js/data/soa-c03-dump.data.js 생성
"""
import json
import os
import re
import sys

SRC = r"C:\Users\user\Documents\톡톡메신저 받은 파일\SOA-C03_문제풀이_툴\SOA-C03_문제풀이_툴.html"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "js", "data", "soa-c03-dump.data.js")

BLOCK = 20
QDATA_RE = re.compile(r'<script type="application/json" id="qdata">(.*?)</script>', re.S)


def load(src):
    html = open(src, encoding="utf-8").read()
    m = QDATA_RE.search(html)
    if not m:
        sys.exit("qdata 스크립트 블록을 찾지 못했습니다: " + src)
    return json.loads(m.group(1))


def convert(raw):
    domains, questions = [], []
    total = len(raw)
    for start in range(0, total, BLOCK):
        chunk = raw[start:start + BLOCK]
        did = "blk%02d" % (start // BLOCK + 1)
        domains.append({
            "id": did,
            "title": "%d–%d번" % (chunk[0]["num"], chunk[-1]["num"]),
            "count": len(chunk),
            "weight": round(len(chunk) / total * 100, 4),
            "tasks": [],
        })
        for q in chunk:
            letters = sorted(q["options"].keys())
            answer = sorted(letters.index(a) for a in q["answer"])
            if len(answer) != len(set(q["answer"])):
                sys.exit("정답 중복: %d번" % q["num"])
            questions.append({
                "id": "soadump-q%03d" % q["num"],
                "num": q["num"],
                "taskId": did,
                "domainId": did,
                "type": "multi" if len(answer) > 1 else "single",
                "question": q["question"].strip(),
                "choices": [q["options"][a].strip() for a in letters],
                "answer": answer,
                "explanation": q["explanation"].strip(),
            })
    return {
        "id": "soa-c03-dump",
        "kind": "bank",
        "hasExplanations": True,
        "name": "AWS CloudOps Engineer Associate (SOA-C03) 한국어 320제",
        "code": "SOA-C03 320",
        "domainNoun": "구간",
        "source": "SOA-C03_문제풀이_툴.html · [KOR_Q320] SOA-C03 Answers",
        "blurb": "구간 %d개 · 문항 %d개 · 한국어 지문 + 해설" % (len(domains), len(questions)),
        "passScore": 720,
        "maxScore": 1000,
        "examMinutes": 130,
        "totalQuestions": 65,
        "scoredQuestions": 50,
        "domains": domains,
        "questions": questions,
    }


def main():
    src = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else SRC
    raw = load(src)
    out = convert(raw)
    nmulti = sum(1 for q in out["questions"] if q["type"] == "multi")
    noexp = sum(1 for q in out["questions"] if not q["explanation"])
    print("문항 %d개 · 구간 %d개 · 복수정답 %d개 · 해설 없음 %d개"
          % (len(out["questions"]), len(out["domains"]), nmulti, noexp))
    if "--write" not in sys.argv:
        print("(검증만 했습니다. 파일을 만들려면 --write)")
        return
    body = json.dumps(out, ensure_ascii=False, indent=2)
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("// 자동 생성 파일 — scripts/parse_dump.py 가 SOA-C03_문제풀이_툴.html 을 변환합니다. 직접 편집하지 마세요.\n")
        f.write("window.APP_DATA = window.APP_DATA || {};\n")
        f.write('window.APP_DATA["soadump"] = ' + body + ";\n")
    print("wrote " + OUT)


if __name__ == "__main__":
    main()
