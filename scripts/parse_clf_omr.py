#!/usr/bin/env python3
"""'실전 문제 풀이 N.pdf' 20개에서 문항별 보기 개수와 정답을 뽑아 답안지(OMR) 데이터로 변환한다.

PDF 구조는 20개 파일 모두 동일하다.
  - 1페이지: 표지
  - 2페이지~: 문제 1개당 1페이지. 마지막 줄이 "QUESTION nn", 보기는 "(A). ..." 또는 "A. ..." 형식
  - 끝에서 두 번째 페이지: 정답표(10칸씩 끊은 표). 셀 하나가 "B" 또는 "B D"
  - 마지막 페이지: 빈 페이지

문제 지문은 저장하지 않는다. 사용자는 PDF를 보며 풀고 앱에는 마킹만 한다.

    python3 scripts/parse_clf_omr.py          # 검증만
    python3 scripts/parse_clf_omr.py --write  # js/data/clf-omr.data.js 생성
"""
import json
import os
import re
import sys

SRC_DIR = "/Users/cho/Downloads/AWS_ cloud_practitioner_강의자료_v6/실전 문제 풀이"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "js", "data", "clf-omr.data.js")

from pypdf import PdfReader  # noqa: E402  (선택 의존성: pip install pypdf)

NUM_CELL = re.compile(r"^\d{1,3}$")
ANS_CELL = re.compile(r"^[A-E](?:[ ,]+[A-E])*$")
# "(A). 텍스트" 와 "A. 텍스트" 두 가지 보기 표기를 모두 받는다.
CHOICE_LINE = re.compile(r"^\(?([A-E])\)?\s*[.)]\s*\S")
QUESTION_TAG = re.compile(r"QUESTION\s*(\d+)")


def choice_count(page_text):
    """A부터 연속으로 이어지는 보기 표기만 세어 보기 개수를 구한다."""
    letters = []
    for line in page_text.split("\n"):
        m = CHOICE_LINE.match(line.strip())
        if not m:
            continue
        L = m.group(1)
        if L == "A":
            letters = ["A"]
        elif letters and ord(L) == ord(letters[-1]) + 1:
            letters.append(L)
    return len(letters)


def answer_cells(page):
    """정답표 페이지의 셀을 표에 적힌 순서대로 뽑는다."""
    runs = []
    page.extract_text(visitor_text=lambda t, cm, tm, fd, fs: runs.append(t.strip()) if t.strip() else None)
    return [re.findall(r"[A-E]", t) for t in runs if ANS_CELL.match(t) and not NUM_CELL.match(t)]


def parse_pdf(path):
    reader = PdfReader(path)
    pages = reader.pages

    counts = {}
    for p in pages[:-2]:
        text = p.extract_text() or ""
        m = QUESTION_TAG.search(text)
        if m:
            counts[int(m.group(1))] = choice_count(text)

    cells = answer_cells(pages[len(pages) - 2])

    # 보기 5개 = 정답 2개, 보기 4개 = 정답 1개. 20개 파일 전부에서 성립하는 규칙이라
    # 정답 셀이 "B E" 대신 "B", "E" 두 칸으로 쪼개져 추출된 경우(11번·15번 파일)를 이걸로 복구한다.
    questions = []
    i = 0
    for num in sorted(counts):
        n_choices = counts[num]
        need = 2 if n_choices >= 5 else 1
        letters = cells[i] if i < len(cells) else []
        i += 1
        while len(letters) < need and i < len(cells):
            letters = letters + cells[i]
            i += 1
        questions.append({
            "n": num,
            "c": n_choices,
            "a": [ord(L) - 65 for L in letters],
        })
    return questions, len(cells), i


def check(set_no, questions, n_cells, consumed):
    problems = []
    if consumed != n_cells:
        problems.append("정답 셀 %d개 중 %d개만 사용" % (n_cells, consumed))
    nums = [q["n"] for q in questions]
    if nums != list(range(1, len(nums) + 1)):
        problems.append("문항 번호가 1..N 연속이 아님: %s" % nums)
    for q in questions:
        want = 2 if q["c"] >= 5 else 1
        if q["c"] not in (4, 5):
            problems.append("%d번 보기 개수 %d" % (q["n"], q["c"]))
        if len(q["a"]) != want:
            problems.append("%d번 정답 %d개 (보기 %d개)" % (q["n"], len(q["a"]), q["c"]))
        if len(set(q["a"])) != len(q["a"]):
            problems.append("%d번 정답 중복 %s" % (q["n"], q["a"]))
        if any(x >= q["c"] for x in q["a"]):
            problems.append("%d번 정답이 보기 범위를 벗어남 %s" % (q["n"], q["a"]))
    return problems


def main():
    files = sorted(
        (f for f in os.listdir(SRC_DIR) if f.endswith(".pdf")),
        key=lambda f: int(re.search(r"(\d+)\.pdf$", f).group(1)),
    )
    sets = []
    total_q = 0
    total_multi = 0
    failed = False
    for f in files:
        set_no = int(re.search(r"(\d+)\.pdf$", f).group(1))
        questions, n_cells, consumed = parse_pdf(os.path.join(SRC_DIR, f))
        problems = check(set_no, questions, n_cells, consumed)
        multi = sum(1 for q in questions if len(q["a"]) > 1)
        total_q += len(questions)
        total_multi += multi
        print("set %2d · 문항 %2d · 복수정답 %2d · %s"
              % (set_no, len(questions), multi, "OK" if not problems else "문제 있음"))
        for p in problems:
            print("        - " + p)
            failed = True
        sets.append({
            "id": "s%02d" % set_no,
            "no": set_no,
            "title": "실전 문제 풀이 %d" % set_no,
            "count": len(questions),
            "multi": multi,
            "questions": questions,
        })

    print("\n총 %d세트 · %d문항 (복수정답 %d문항)" % (len(sets), total_q, total_multi))
    if failed:
        print("검증 실패 — 파일을 쓰지 않습니다.")
        return 1
    if "--write" not in sys.argv:
        print("검증만 수행했습니다. 파일을 만들려면 --write 를 붙이세요.")
        return 0

    payload = {
        "id": "clf-omr",
        "name": "CLF-C02 실전 문제 풀이 답안지",
        "code": "CLF-C02",
        "source": "AWS cloud practitioner 강의자료 v6 · 실전 문제 풀이 1~20",
        "passPct": 70,
        "totalQuestions": total_q,
        "sets": sets,
    }
    with open(OUT, "w", encoding="utf-8") as fp:
        fp.write("// 자동 생성 파일 — scripts/parse_clf_omr.py 가 '실전 문제 풀이' PDF 20개를 변환합니다. 직접 편집하지 마세요.\n")
        fp.write("// n: 문항 번호, c: 보기 개수, a: 정답 인덱스(0=A). 문제 지문은 PDF에서 보고 풀기 때문에 담지 않습니다.\n")
        fp.write("window.APP_OMR = ")
        json.dump(payload, fp, ensure_ascii=False, indent=1)
        fp.write(";\n")
    print("wrote", OUT)
    return 0


if __name__ == "__main__":
    sys.exit(main())
