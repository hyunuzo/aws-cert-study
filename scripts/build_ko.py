#!/usr/bin/env python3
"""scripts/ko/*.json 의 한국어 번역 조각을 합쳐 js/data/soa-c03-pt.ko.data.js 를 만든다.

사용법:
  python3 scripts/build_ko.py            # 병합 + 검증 + 파일 생성
  python3 scripts/build_ko.py --dump N   # N번째 배치(20문항)의 영어 원문을 출력 (번역 작업용)
  python3 scripts/build_ko.py --check    # 진행 상황만 확인
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "js", "data", "soa-c03-pt.data.js")
KO_DIR = os.path.join(ROOT, "scripts", "ko")
OUT = os.path.join(ROOT, "js", "data", "soa-c03-pt.ko.data.js")
BATCH = 20


def load_source():
    s = open(DATA, encoding="utf-8").read()
    s = s[s.index("window.APP_DATA[\"soapt\"] = ") + len('window.APP_DATA["soapt"] = '):]
    s = s.rstrip().rstrip(";")
    return json.loads(s)["questions"]


def load_ko():
    ko = {}
    for path in sorted(glob.glob(os.path.join(KO_DIR, "*.json"))):
        with open(path, encoding="utf-8") as f:
            chunk = json.load(f)
        for k, v in chunk.items():
            if k in ko:
                raise SystemExit("중복 항목 %s (%s)" % (k, path))
            ko[k] = v
    return ko


questions = load_source()
by_id = {q["id"]: q for q in questions}

if "--dump" in sys.argv:
    n = int(sys.argv[sys.argv.index("--dump") + 1])
    chunk = questions[(n - 1) * BATCH: n * BATCH]
    print("# batch %d — %d questions (%s .. %s)" % (n, len(chunk), chunk[0]["id"], chunk[-1]["id"]))
    for q in chunk:
        print("\n=== %s ===" % q["id"])
        print("Q: " + q["question"])
        for i, c in enumerate(q["choices"]):
            print("%s: %s" % (chr(65 + i), c))
    sys.exit(0)

ko = load_ko()
missing = [q["id"] for q in questions if q["id"] not in ko]
print("원문 %d문항 / 번역 %d문항 / 미번역 %d문항" % (len(questions), len(ko), len(missing)))

problems = []
for qid, tr in ko.items():
    if qid not in by_id:
        problems.append("%s: 원문에 없는 id" % qid)
        continue
    src = by_id[qid]
    if not tr.get("q"):
        problems.append("%s: 지문 누락" % qid)
    if len(tr.get("c", [])) != len(src["choices"]):
        problems.append("%s: 선택지 수 불일치 (원문 %d, 번역 %d)" % (qid, len(src["choices"]), len(tr.get("c", []))))
    if any(not c for c in tr.get("c", [])):
        problems.append("%s: 빈 선택지" % qid)
    # 선택지 순서가 뒤바뀌면 정답 인덱스가 어긋난다. 백틱 코드 토큰으로 대략 검증한다.
    for i, c in enumerate(tr.get("c", [])):
        src_codes = set(re.findall(r"`([^`]+)`", src["choices"][i]))
        tr_codes = set(re.findall(r"`([^`]+)`", c))
        lost = src_codes - tr_codes
        if lost and len(src_codes) > 0:
            problems.append("%s 선택지 %s: 원문 코드 토큰 누락 %s" % (qid, chr(65 + i), sorted(lost)))

if problems:
    print("\n검증 경고 %d건:" % len(problems))
    for p in problems[:60]:
        print(" -", p)

if "--check" in sys.argv:
    if missing:
        print("\n미번역 처음 5개:", missing[:5])
    sys.exit(1 if problems else 0)

ordered = {q["id"]: ko[q["id"]] for q in questions if q["id"] in ko}
with open(OUT, "w", encoding="utf-8") as f:
    f.write("// 자동 생성 파일 — scripts/build_ko.py 가 scripts/ko/*.json 을 병합합니다. 직접 편집하지 마세요.\n")
    f.write("// 영어 원문(soa-c03-pt.data.js)의 한국어 의역. AWS 서비스명·리소스명·코드는 원문 표기 유지.\n")
    f.write("window.APP_KO = window.APP_KO || {};\n")
    f.write('window.APP_KO["soapt"] = ')
    json.dump(ordered, f, ensure_ascii=False, indent=1)
    f.write(";\n")
print("\nwrote %s (%d문항)" % (OUT, len(ordered)))
