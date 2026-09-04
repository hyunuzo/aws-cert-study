#!/usr/bin/env python3
"""'SOA-C03_문제풀이_툴.html' 안의 <script id="qdata"> 320문항을 앱이 읽을 수 있는 파일로 옮긴다.

원본 도구의 화면과 조작을 그대로 옮겨온 독립 화면(#/soatool)이 이 데이터를 쓴다.
그래서 문항 구조도 원본 그대로 둔다 — 보기는 letter(A~F) 키를 가진 객체, 정답은 letter 배열.
해설이 "A, B, D 는 오답이다" 처럼 보기 문자를 직접 가리키므로 letter 를 버리면 안 된다.

    python3 scripts/parse_dump.py          # 검증만
    python3 scripts/parse_dump.py --write  # js/data/soa-tool.data.js 생성
"""
import json
import os
import re
import sys

SRC = r"C:\Users\user\Documents\톡톡메신저 받은 파일\SOA-C03_문제풀이_툴\SOA-C03_문제풀이_툴.html"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "js", "data", "soa-tool.data.js")

QDATA_RE = re.compile(r'<script type="application/json" id="qdata">(.*?)</script>', re.S)


def load(src):
    html = open(src, encoding="utf-8").read()
    m = QDATA_RE.search(html)
    if not m:
        sys.exit("qdata 스크립트 블록을 찾지 못했습니다: " + src)
    return json.loads(m.group(1))


def convert(raw):
    questions = []
    for q in sorted(raw, key=lambda x: x["num"]):
        letters = sorted(q["options"].keys())
        for a in q["answer"]:
            if a not in letters:
                sys.exit("보기에 없는 정답 %s: %d번" % (a, q["num"]))
        if len(q["answer"]) != len(set(q["answer"])):
            sys.exit("정답 중복: %d번" % q["num"])
        questions.append({
            "num": q["num"],
            "question": q["question"].strip(),
            "options": {a: q["options"][a].strip() for a in letters},
            "answer": sorted(set(q["answer"])),
            "explanation": q["explanation"].strip(),
        })
    return {
        "title": "SOA-C03 상황실",
        "subtitle": "CloudOps Engineer – Associate 덤프 %d문항. 문제와 보기 순서를 매번 새로 섞어서, "
                    "답을 외우는 게 아니라 실제로 아는지 확인하세요." % len(questions),
        "source": "SOA-C03_문제풀이_툴.html · [KOR_Q320] SOA-C03 Answers",
        "questions": questions,
    }


def main():
    src = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else SRC
    out = convert(load(src))
    qs = out["questions"]
    nmulti = sum(1 for q in qs if len(q["answer"]) > 1)
    noexp = sum(1 for q in qs if not q["explanation"])
    nums = [q["num"] for q in qs]
    print("문항 %d개 · 번호 %d~%d · 복수정답 %d개 · 해설 없음 %d개"
          % (len(qs), nums[0], nums[-1], nmulti, noexp))
    if len(set(nums)) != len(nums):
        sys.exit("문항 번호가 중복됩니다.")
    if "--write" not in sys.argv:
        print("(검증만 했습니다. 파일을 만들려면 --write)")
        return
    with open(OUT, "w", encoding="utf-8", newline="\n") as f:
        f.write("// 자동 생성 파일 — scripts/parse_dump.py 가 SOA-C03_문제풀이_툴.html 을 변환합니다. 직접 편집하지 마세요.\n")
        f.write("window.SOA_TOOL = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
    print("wrote " + OUT)


if __name__ == "__main__":
    main()
