(function () {
  "use strict";

  var STORAGE_KEY = "awsStudyApp.v1";
  var THEME_KEY = "awsStudyApp.theme";
  var LANG_KEY = "awsStudyApp.lang.v1";

  // 개념학습이 있는 자격증 세션과, 문제만 있는 문제은행(kind: "bank") 세션을 함께 다룬다.
  var CERTS = ["clf", "saa", "soa", "soapt"];

  var progress = loadProgress();
  var session = null; // active quiz/exam session
  var examTimerHandle = null;

  function data(cert) {
    return window.APP_DATA[cert];
  }

  // 문제은행 세션에는 개념학습·서비스 사전이 없고, 도메인 자리에 연습시험 세트가 들어간다.
  function isBank(cert) {
    return data(cert).kind === "bank";
  }

  // ---------- 표시 언어 ----------
  // 원문이 영어인 세션에만 한국어 번역본(window.APP_KO)이 붙는다. ko / en / both 세 가지 모드.
  var langPrefs = loadLangPrefs();
  function loadLangPrefs() {
    try { return JSON.parse(localStorage.getItem(LANG_KEY)) || {}; } catch (e) { return {}; }
  }
  function hasTranslation(cert) {
    return !!(window.APP_KO && window.APP_KO[cert]);
  }
  function langOf(cert) {
    if (!hasTranslation(cert)) return "en";
    return langPrefs[cert] || "ko";
  }
  function setLang(cert, v) {
    langPrefs[cert] = v;
    localStorage.setItem(LANG_KEY, JSON.stringify(langPrefs));
    render();
  }
  function koOf(cert, id) {
    var m = window.APP_KO && window.APP_KO[cert];
    return m ? m[id] : null;
  }
  function langControl(cert) {
    if (!hasTranslation(cert)) return "";
    var cur = langOf(cert);
    var opts = [["ko", "한국어"], ["en", "영어 원문"], ["both", "병기"]];
    return '<span class="lang-switch" role="group" aria-label="표시 언어">' + opts.map(function (o) {
      return '<button type="button" class="' + (cur === o[0] ? "active" : "") + '" data-action="lang-set" data-lang="' + o[0] + '">' + o[1] + "</button>";
    }).join("") + "</span>";
  }

  // ---------- persistence ----------
  function emptyCertProgress() {
    return { conceptsRead: {}, questionStats: {}, quizHistory: [], examHistory: [] };
  }
  function loadProgress() {
    try {
      var raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!raw) throw new Error("none");
      CERTS.forEach(function (c) {
        if (!raw[c]) raw[c] = emptyCertProgress();
      });
      return raw;
    } catch (e) {
      var p = {};
      CERTS.forEach(function (c) { p[c] = emptyCertProgress(); });
      return p;
    }
  }
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  function recordAnswer(cert, q, correct) {
    var cp = progress[cert];
    var s = cp.questionStats[q.id] || { attempts: 0, correct: 0, lastCorrect: null };
    s.attempts++;
    if (correct) s.correct++;
    s.lastCorrect = correct;
    cp.questionStats[q.id] = s;
    saveProgress();
  }

  // ---------- utils ----------
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // 원본 문제은행 텍스트에는 `백틱` 인라인 코드가 섞여 있다. 이스케이프 후 코드만 되살린다.
  function inlineMd(s) {
    return esc(s).replace(/`([^`]+)`/g, function (_, code) { return "<code>" + code + "</code>"; });
  }
  function imgList(list) {
    if (!list || !list.length) return "";
    return '<div class="q-images">' + list.map(function (src) {
      return '<img src="' + esc(src) + '" alt="문제 이미지" loading="lazy">';
    }).join("") + "</div>";
  }
  function answerLetters(q) {
    return q.answer.map(function (i) { return String.fromCharCode(65 + i); }).join(", ");
  }
  // 해설이 없는 문제은행에서는 정답 표기만이라도 남긴다.
  function explanationHtml(q) {
    if (q.explanation) return inlineMd(q.explanation);
    return '<span class="muted">정답: ' + answerLetters(q) + " · 원본 자료에 해설이 포함되어 있지 않습니다.</span>";
  }
  // 번역이 없는 문항·세션에서는 조용히 원문으로 되돌아간다.
  function questionStem(cert, q, small) {
    var no = q.num ? '<span class="q-no">원본 ' + q.num + "번</span>" : "";
    var lang = langOf(cert);
    var ko = lang === "en" ? null : koOf(cert, q.id);
    var main = ko && ko.q ? ko.q : q.question;
    var style = small ? ' style="font-size:15px;margin-top:8px;"' : "";
    var html = '<div class="q-text"' + style + ">" + no + inlineMd(main) + "</div>";
    if (ko && ko.q && lang === "both") html += '<div class="q-text-alt">' + inlineMd(q.question) + "</div>";
    return html + imgList(q.images);
  }
  function choiceBody(cert, q, i) {
    var lang = langOf(cert);
    var ko = lang === "en" ? null : koOf(cert, q.id);
    var koText = ko && ko.c && ko.c[i];
    var html = inlineMd(koText || q.choices[i]);
    if (koText && lang === "both") html += '<div class="choice-alt">' + inlineMd(q.choices[i]) + "</div>";
    return html + imgList(q.choiceImages && q.choiceImages[i]);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    var sa = a.slice().sort(function (x, y) { return x - y; });
    var sb = b.slice().sort(function (x, y) { return x - y; });
    return sa.every(function (v, i) { return v === sb[i]; });
  }
  function allocateCounts(weights, total) {
    var raw = weights.map(function (w) { return (w / 100) * total; });
    var floor = raw.map(Math.floor);
    var used = floor.reduce(function (a, b) { return a + b; }, 0);
    var remainder = total - used;
    var order = raw.map(function (r, i) { return { i: i, frac: r - Math.floor(r) }; })
      .sort(function (a, b) { return b.frac - a.frac; });
    for (var k = 0; k < remainder; k++) floor[order[k % order.length].i]++;
    return floor;
  }
  function fmtTime(sec) {
    sec = Math.max(0, Math.round(sec));
    var m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function fmtDate(iso) {
    var d = new Date(iso);
    return d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate() + " " + (d.getHours() < 10 ? "0" : "") + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  }
  function certTasksTotal(cert) {
    return data(cert).domains.reduce(function (sum, d) { return sum + d.tasks.length; }, 0);
  }
  function certTasksRead(cert) {
    var read = progress[cert].conceptsRead;
    var total = 0;
    data(cert).domains.forEach(function (d) {
      d.tasks.forEach(function (t) { if (read[t.taskId]) total++; });
    });
    return total;
  }
  function findTask(cert, domainId, taskId) {
    var d = data(cert).domains.find(function (x) { return x.id === domainId; });
    if (!d) return null;
    var t = d.tasks.find(function (x) { return x.taskId === taskId; });
    return t ? { domain: d, task: t } : null;
  }
  function flatTasks(cert) {
    var out = [];
    data(cert).domains.forEach(function (d) {
      d.tasks.forEach(function (t) { out.push({ domain: d, task: t }); });
    });
    return out;
  }

  // ---------- router ----------
  function parseHash() {
    var h = location.hash.replace(/^#\/?/, "");
    var parts = h.split("/").filter(Boolean);
    return parts;
  }

  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", function () {
    initTheme();
    render();
  });

  function navigate(hash) {
    location.hash = hash;
  }

  function render() {
    var parts = parseHash();
    var app = document.getElementById("app");
    var crumb = document.getElementById("crumb");
    var html = "";

    if (parts.length === 0) {
      crumb.textContent = "";
      html = viewHome();
    } else if (parts[0] === "glossary") {
      crumb.textContent = "서비스 사전";
      html = viewAllGlossary();
    } else if (parts[0] === "omr") {
      // 답안지는 개념·문항 데이터가 없는 별도 화면이라 CERTS 라우팅을 타지 않는다.
      if (parts[1] && !omrSet(parts[1])) {
        location.hash = "#/omr";
        return;
      }
      crumb.textContent = "실전 문제 풀이";
      html = parts[1] ? viewOmrSheet(parts[1]) : viewOmrHome();
    } else {
      var cert = parts[0];
      if (CERTS.indexOf(cert) === -1) {
        location.hash = "";
        return;
      }
      var section = parts[1] || "dashboard";
      // 문제은행에는 개념학습·서비스 사전 화면이 없다.
      if (isBank(cert) && (section === "concepts" || section === "glossary")) section = "dashboard";
      crumb.textContent = data(cert).code;
      switch (section) {
        case "dashboard":
          html = viewDashboard(cert);
          break;
        case "concepts":
          html = viewConcepts(cert, parts[2], parts[3]);
          break;
        case "quiz":
          html = viewQuiz(cert);
          break;
        case "exam":
          html = viewExam(cert);
          break;
        case "glossary":
          html = viewGlossary(cert);
          break;
        case "wrong":
          html = viewWrong(cert);
          break;
        default:
          html = viewDashboard(cert);
      }
    }
    app.innerHTML = html;
    afterRender(parts);
    window.scrollTo(0, 0);
  }

  // Shows the "swipe" label only while a compare table actually overflows, and
  // the right-edge fade only while there is more content to scroll to.
  function updateTableScrollHints() {
    var wraps = document.querySelectorAll(".table-scroll-wrap");
    Array.prototype.forEach.call(wraps, function (wrap) {
      var sc = wrap.querySelector(".table-scroll");
      if (!sc) return;
      var overflow = sc.scrollWidth - sc.clientWidth;
      var scrollable = overflow > 1;
      var block = wrap.parentNode;
      if (block && block.classList) block.classList.toggle("is-scrollable", scrollable);
      wrap.classList.toggle("hint-right", scrollable && sc.scrollLeft < overflow - 1);
    });
  }

  function bindTableScrollHints() {
    var scrollers = document.querySelectorAll(".table-scroll-wrap > .table-scroll");
    Array.prototype.forEach.call(scrollers, function (sc) {
      sc.addEventListener("scroll", updateTableScrollHints, { passive: true });
    });
    updateTableScrollHints();
  }

  window.addEventListener("resize", updateTableScrollHints);

  function afterRender(parts) {
    if (examTimerHandle) { clearInterval(examTimerHandle); examTimerHandle = null; }
    bindTableScrollHints();
    var cert = parts[0];
    var section = parts[1];
    if (cert === "glossary") bindAllGlossary();
    if (cert === "omr" && section) bindOmrSheet(section);
    if (CERTS.indexOf(cert) !== -1 && section === "glossary") bindGlossary(cert);
    if (cert && section === "exam" && session && session.kind === "exam" && session.cert === cert && session.phase === "active") {
      startExamTimer();
    }
  }

  // ---------- shared chrome ----------
  function tabs(cert, active) {
    var items = isBank(cert)
      ? [
        ["dashboard", "대시보드"],
        ["quiz", "문제 풀이"],
        ["exam", "모의고사"],
        ["wrong", "오답노트"]
      ]
      : [
        ["dashboard", "대시보드"],
        ["concepts", "개념학습"],
        ["quiz", "퀴즈"],
        ["exam", "모의고사"],
        ["glossary", "서비스 사전"],
        ["wrong", "오답노트"]
      ];
    return '<div class="tabs">' + items.map(function (it) {
      return '<a href="#/' + cert + '/' + it[0] + '" class="' + (active === it[0] ? "active" : "") + '">' + it[1] + "</a>";
    }).join("") + "</div>";
  }

  // 서비스 사전은 개념이 있는 자격증 세션만 대상으로 한다.
  function conceptCerts() {
    return CERTS.filter(function (c) { return !isBank(c); });
  }

  // 문제은행 진행률은 '읽은 개념'이 아니라 '한 번이라도 푼 문항' 기준으로 센다.
  function solvedCount(cert) {
    var stats = progress[cert].questionStats;
    return data(cert).questions.filter(function (q) { return stats[q.id] && stats[q.id].attempts > 0; }).length;
  }

  // ---------- home ----------
  function viewHome() {
    var cards = CERTS.map(function (cert) {
      var d = data(cert);
      var bank = isBank(cert);
      var total = bank ? d.questions.length : certTasksTotal(cert);
      var readN = bank ? solvedCount(cert) : certTasksRead(cert);
      var pct = total ? Math.round((readN / total) * 100) : 0;
      var lastExam = progress[cert].examHistory[0];
      return (
        '<a class="cert-card" href="#/' + cert + '/dashboard">' +
        '<span class="code">' + d.code + "</span>" +
        "<h2>" + esc(d.name) + "</h2>" +
        (bank
          ? "<p>연습시험 세트 " + d.domains.length + "개 · 문항 " + d.questions.length + "개 · 실전 기출 유형</p>"
          : "<p>도메인 " + d.domains.length + "개 · 개념 " + total + "개 · 연습문제 " + d.questions.length + "개</p>") +
        '<div class="progress-row"><div class="progress-bar"><span style="width:' + pct + '%"></span></div><div class="progress-label">' + pct + (bank ? "% 풀이" : "% 학습") + "</div></div>" +
        (lastExam
          ? '<p style="margin-top:10px;font-size:13px;">최근 모의고사: <b class="' + (lastExam.pass ? "" : "") + '">' + lastExam.scaledScore + "점</b> (" + (lastExam.pass ? "합격" : "불합격") + ")</p>"
          : '<p style="margin-top:10px;font-size:13px;color:var(--muted);">아직 응시한 모의고사가 없습니다</p>') +
        "</a>"
      );
    }).join("");

    return (
      "<h1>AWS 스터디</h1>" +
      '<p class="muted">Cloud Practitioner, Solutions Architect - Associate, CloudOps Engineer - Associate 시험을 위한 개념 학습, 퀴즈, 모의고사 도구입니다. 마지막 세션은 개념 없이 실전 문제만 모은 별도 문제은행입니다. 모든 진행 상황은 이 브라우저에 저장됩니다.</p>' +
      '<div class="cert-cards">' + cards + "</div>" +
      '<a class="home-link" href="#/omr">' +
      "<div><b>실전 문제 풀이 답안지</b><p>강의자료 PDF ‘실전 문제 풀이 1~20’(" + window.APP_OMR.totalQuestions + "문항)을 풀고 마킹하면 자동 채점합니다</p></div>" +
      '<span class="arrow">→</span>' +
      "</a>" +
      '<a class="home-link" href="#/glossary">' +
      "<div><b>서비스 사전</b><p>" + conceptCerts().length + "개 시험 범위의 AWS 서비스 " + allServices().length + "개를 한곳에서 검색합니다</p></div>" +
      '<span class="arrow">→</span>' +
      "</a>"
    );
  }

  // ---------- dashboard ----------
  function viewDashboard(cert) {
    var d = data(cert);
    var bank = isBank(cert);
    var total = bank ? d.questions.length : certTasksTotal(cert);
    var readN = bank ? solvedCount(cert) : certTasksRead(cert);
    var pct = total ? Math.round((readN / total) * 100) : 0;
    var qHist = progress[cert].quizHistory;
    var avgQuiz = qHist.length ? Math.round(qHist.reduce(function (a, h) { return a + h.scorePct; }, 0) / qHist.length) : null;
    var examHist = progress[cert].examHistory;
    var lastExam = examHist[0];

    var bars = d.domains.map(function (dom) {
      var domQ = d.questions.filter(function (q) { return q.domainId === dom.id; });
      var stats = domQ.map(function (q) { return progress[cert].questionStats[q.id]; }).filter(Boolean);
      var domPct = stats.length ? Math.round((stats.filter(function (s) { return s.lastCorrect; }).length / stats.length) * 100) : 0;
      var label = bank ? esc(dom.title) + " (" + dom.count + "문항)" : esc(dom.title) + " (" + dom.weight + "%)";
      return (
        '<div class="domain-bar-row"><div class="name">' + label + "</div>" +
        '<div class="bar"><span style="width:' + domPct + '%"></span></div>' +
        '<div class="pct">' + (stats.length ? domPct + "%" : "-") + "</div></div>"
      );
    }).join("");

    return (
      "<h1>" + esc(d.name) + '</h1><p class="muted">' + esc(d.code) + " · 합격 기준 " + d.passScore + "점/1000점 · 시험시간 " + d.examMinutes + "분 · 총 " + d.totalQuestions + "문항" +
      (bank ? " · 출처: " + esc(d.source) : "") + "</p>" +
      tabs(cert, "dashboard") +
      '<div class="grid-2">' +
      '<div class="card"><h3 class="mt-0">' + (bank ? "풀이 진행률" : "학습 진행률") + "</h3>" +
      '<div class="progress-row"><div class="progress-bar"><span style="width:' + pct + '%"></span></div><div class="progress-label">' + readN + "/" + total + "</div></div>" +
      '<div class="stat-row">' +
      '<div class="stat"><div class="n">' + (avgQuiz == null ? "-" : avgQuiz + "%") + '</div><div class="l">' + (bank ? "풀이 평균 정답률" : "퀴즈 평균 정답률") + "</div></div>" +
      '<div class="stat"><div class="n">' + qHist.length + '</div><div class="l">' + (bank ? "진행한 풀이 세션" : "응시한 퀴즈 세션") + "</div></div>" +
      '<div class="stat"><div class="n">' + (lastExam ? lastExam.scaledScore : "-") + '</div><div class="l">최근 모의고사 점수</div></div>' +
      "</div></div>" +
      '<div class="card"><h3 class="mt-0">' + (bank ? "세트별 정답률" : "도메인별 정답률") + '</h3><div class="domain-bars">' + bars + "</div></div>" +
      "</div>" +
      '<hr class="sep">' +
      '<div class="grid-2">' +
      '<div class="card"><h3 class="mt-0">빠른 시작</h3>' +
      (bank
        ? '<p class="muted">아직 풀지 않은 문항이 ' + (total - readN) + "개 남았습니다.</p>" +
          '<a class="btn" href="#/' + cert + '/quiz">문제 풀기</a> ' +
          '<a class="btn secondary" href="#/' + cert + '/wrong">오답노트 보기</a>'
        : '<p class="muted">아직 다 못 읽은 개념이 ' + (total - readN) + "개 남았습니다.</p>" +
          '<a class="btn" href="#/' + cert + '/concepts">개념학습 계속하기</a> ' +
          '<a class="btn secondary" href="#/' + cert + '/quiz">퀴즈 풀기</a>') +
      "</div>" +
      '<div class="card"><h3 class="mt-0">모의고사</h3>' +
      '<p class="muted">실제 시험과 동일하게 ' + d.totalQuestions + "문항 · " + d.examMinutes + '분 타이머로 진행됩니다.</p>' +
      '<a class="btn" href="#/' + cert + '/exam">모의고사 시작</a></div>' +
      "</div>"
    );
  }

  // ---------- concepts ----------
  function renderCompare(c) {
    if (!c || !c.headers || !c.rows) return "";
    var head = c.headers.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("");
    var body = c.rows.map(function (row) {
      var cells = row.map(function (cell, i) {
        return i === 0
          ? '<th scope="row">' + esc(cell) + "</th>"
          : "<td>" + esc(cell) + "</td>";
      }).join("");
      return "<tr>" + cells + "</tr>";
    }).join("");
    var caption = c.caption || "비교 정리";
    return (
      '<div class="concept-block compare-block">' +
      "<h3>" + esc(caption) + '<span class="scroll-hint" aria-hidden="true">↔ 좌우 스크롤</span></h3>' +
      '<div class="table-scroll-wrap">' +
      '<div class="table-scroll" tabindex="0" role="region" aria-label="' + esc(caption) + ' 표 (좌우로 스크롤할 수 있습니다)">' +
      '<table class="compare">' +
      "<thead><tr>" + head + "</tr></thead><tbody>" + body + "</tbody>" +
      "</table></div></div></div>"
    );
  }

  function renderPitfalls(list) {
    if (!list || !list.length) return "";
    var items = list.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    return (
      '<div class="concept-block pitfall-block">' +
      "<h3>시험 함정 · 혼동 포인트</h3>" +
      "<ul>" + items + "</ul></div>"
    );
  }

  function viewConcepts(cert, domainId, taskId) {
    var d = data(cert);
    if (!domainId) {
      var first = d.domains[0];
      domainId = first.id;
    }
    var dom = d.domains.find(function (x) { return x.id === domainId; }) || d.domains[0];
    if (!taskId) taskId = dom.tasks[0].taskId;
    var found = findTask(cert, dom.id, taskId);
    if (!found) found = { domain: dom, task: dom.tasks[0] };
    var task = found.task;
    var read = !!progress[cert].conceptsRead[task.taskId];
    if (!read) {
      progress[cert].conceptsRead[task.taskId] = true;
      saveProgress();
      read = true;
    }

    var side = d.domains.map(function (dm) {
      var items = dm.tasks.map(function (t) {
        var isActive = dm.id === dom.id && t.taskId === task.taskId;
        var isRead = !!progress[cert].conceptsRead[t.taskId];
        return (
          '<a class="task-link' + (isActive ? " active" : "") + (isRead ? " read" : "") + '" href="#/' + cert + "/concepts/" + dm.id + "/" + t.taskId + '">' +
          '<span class="check"></span><span>' + esc(t.taskId) + ". " + esc(t.title) + "</span></a>"
        );
      }).join("");
      return '<div class="domain-group"><div class="domain-title">' + esc(dm.title) + " · " + dm.weight + "%</div>" + items + "</div>";
    }).join("");

    var flat = flatTasks(cert);
    var curIdx = flat.findIndex(function (x) { return x.domain.id === dom.id && x.task.taskId === task.taskId; });
    var prev = flat[curIdx - 1];
    var next = flat[curIdx + 1];

    var kp = task.concept.keyPoints.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("");
    var example = task.concept.example
      ? '<blockquote class="example">' + esc(task.concept.example) + "</blockquote>"
      : "";
    var compare = renderCompare(task.concept.compare);
    var pitfalls = renderPitfalls(task.concept.pitfalls);

    return (
      "<h1>" + esc(d.name) + '</h1><p class="muted">개념학습</p>' +
      tabs(cert, "concepts") +
      '<div class="layout-sidebar">' +
      '<nav class="side-nav">' + side + "</nav>" +
      '<div class="card">' +
      '<div class="q-type-badge">도메인 ' + esc(dom.title) + " · 작업 " + esc(task.taskId) + "</div>" +
      "<h2>" + esc(task.title) + "</h2>" +
      "<p>" + esc(task.concept.summary) + "</p>" +
      '<ul class="key-points">' + kp + "</ul>" +
      compare +
      pitfalls +
      example +
      '<div class="concept-nav-btns">' +
      (prev ? '<a class="btn secondary" href="#/' + cert + "/concepts/" + prev.domain.id + "/" + prev.task.taskId + '">← ' + esc(prev.task.title) + "</a>" : "<span></span>") +
      (next ? '<a class="btn" href="#/' + cert + "/concepts/" + next.domain.id + "/" + next.task.taskId + '">' + esc(next.task.title) + " →</a>" : '<a class="btn" href="#/' + cert + '/quiz">개념학습 완료 → 퀴즈 풀러가기</a>') +
      "</div>" +
      "</div></div>"
    );
  }

  // ---------- quiz ----------
  function viewQuiz(cert) {
    if (session && session.kind === "quiz" && session.cert === cert) {
      return session.phase === "summary" ? renderQuizSummary(cert) : renderQuizSession(cert);
    }
    return renderQuizSetup(cert);
  }

  function renderQuizSetup(cert) {
    var d = data(cert);
    var bank = isBank(cert);
    var unsolvedN = d.questions.length - solvedCount(cert);
    var domainOptions = '<option value="all">' + (bank ? "전체 문항 (" : "전체 도메인 (") + d.questions.length + "문항)</option>" +
      (bank && unsolvedN ? '<option value="unsolved">아직 풀지 않은 문항 (' + unsolvedN + "문항)</option>" : "") +
      d.domains.map(function (dm) {
        var n = d.questions.filter(function (q) { return q.domainId === dm.id; }).length;
        return '<option value="' + dm.id + '">' + esc(dm.title) + " (" + n + "문항)</option>";
      }).join("");
    return (
      "<h1>" + esc(d.name) + '</h1><p class="muted">' + (bank ? "문제 풀이" : "퀴즈") + "</p>" +
      tabs(cert, "quiz") +
      '<div class="card">' +
      '<h3 class="mt-0">' + (bank ? "풀이 설정" : "퀴즈 설정") + "</h3>" +
      '<div class="grid-2">' +
      '<div><label class="field">범위</label><select id="quiz-domain">' + domainOptions + "</select></div>" +
      '<div><label class="field">문항 수</label><select id="quiz-count">' +
      [10, 20, 30, 50].map(function (n) { return '<option value="' + n + '">' + n + "문항</option>"; }).join("") +
      '<option value="all">전체</option>' +
      "</select></div>" +
      '<div><label class="field">출제 순서</label><select id="quiz-order">' +
      '<option value="shuffle">무작위</option><option value="order">원본 번호 순서</option>' +
      "</select></div>" +
      "</div>" +
      (hasTranslation(cert)
        ? '<div class="lang-field"><label class="field">표시 언어</label>' + langControl(cert) +
          '<p class="muted" style="margin:8px 0 0;font-size:12.5px;">원문은 영어입니다. 한국어는 기계적 직역이 아닌 의역이며, AWS 서비스명·리소스명·코드는 원문 표기를 유지합니다. 풀이 중에도 언제든 바꿀 수 있습니다.</p></div>'
        : "") +
      '<p class="muted" style="margin-top:14px;">' +
      (bank
        ? "제출하면 바로 정답을 확인할 수 있습니다. 이 문제은행은 원본 자료에 해설이 없어 정답만 표시됩니다."
        : "즉시 정답과 해설을 확인할 수 있는 학습용 퀴즈입니다. 실전처럼 풀고 싶다면 모의고사를 이용하세요.") +
      "</p>" +
      '<button class="btn" data-action="quiz-start">' + (bank ? "풀이 시작" : "퀴즈 시작") + "</button>" +
      "</div>"
    );
  }

  function startQuiz(cert) {
    var domainId = document.getElementById("quiz-domain").value;
    var countSel = document.getElementById("quiz-count").value;
    var orderEl = document.getElementById("quiz-order");
    var order = orderEl ? orderEl.value : "shuffle";
    var stats = progress[cert].questionStats;
    var pool = data(cert).questions.filter(function (q) {
      if (domainId === "all") return true;
      if (domainId === "unsolved") return !(stats[q.id] && stats[q.id].attempts > 0);
      return q.domainId === domainId;
    });
    if (order === "shuffle") pool = shuffle(pool);
    var n = countSel === "all" ? pool.length : Math.min(parseInt(countSel, 10), pool.length);
    session = {
      kind: "quiz", cert: cert, domainId: domainId,
      questions: pool.slice(0, n),
      index: 0, answers: {}, revealed: {}, phase: "active"
    };
    render();
  }

  function startReview(cert, ids) {
    var pool = data(cert).questions.filter(function (q) { return ids.indexOf(q.id) !== -1; });
    session = {
      kind: "quiz", cert: cert, domainId: "review",
      questions: shuffle(pool),
      index: 0, answers: {}, revealed: {}, phase: "active"
    };
    var target = "#/" + cert + "/quiz";
    if (location.hash === target) render();
    else navigate(target);
  }

  function renderQuizSession(cert) {
    var q = session.questions[session.index];
    var total = session.questions.length;
    var selected = session.answers[q.id] || [];
    var isRevealed = !!session.revealed[q.id];
    var pctDone = Math.round((session.index / total) * 100);

    var choices = q.choices.map(function (c, i) {
      var cls = "choice" + (q.type === "multi" ? " multi" : "");
      var isSel = selected.indexOf(i) !== -1;
      var isCorrectChoice = q.answer.indexOf(i) !== -1;
      if (isRevealed) {
        if (isCorrectChoice) cls += " correct";
        else if (isSel) cls += " incorrect";
      } else if (isSel) {
        cls += " selected";
      }
      var mark = q.type === "multi" ? (isSel ? "✓" : "") : (isSel ? "●" : "");
      if (isRevealed && isCorrectChoice) mark = "✓";
      if (isRevealed && isSel && !isCorrectChoice) mark = "✗";
      return (
        '<button type="button" class="' + cls + '" ' + (isRevealed ? "disabled" : "") + ' data-action="select-choice" data-idx="' + i + '">' +
        '<span class="mark">' + mark + '</span><span>' + choiceBody(cert, q, i) + "</span></button>"
      );
    }).join("");

    var explain = "";
    if (isRevealed) {
      var correct = sameSet(selected, q.answer);
      explain =
        '<div class="explain-box"><div class="verdict ' + (correct ? "correct" : "incorrect") + '">' + (correct ? "정답입니다" : "오답입니다") + "</div>" +
        "<div>" + explanationHtml(q) + "</div></div>";
    }

    var footer = isRevealed
      ? (session.index + 1 < total
        ? '<button class="btn" data-action="quiz-next">다음 문제</button>'
        : '<button class="btn" data-action="quiz-finish">결과 보기</button>')
      : '<button class="btn" data-action="quiz-submit" ' + (selected.length ? "" : "disabled") + '>제출</button>';

    return (
      "<h1>" + esc(data(cert).name) + '</h1><p class="muted">' + (isBank(cert) ? "문제 풀이 진행 중" : "퀴즈 진행 중") + "</p>" +
      tabs(cert, "quiz") +
      '<div class="card">' +
      '<div class="q-progress"><span>' + (session.index + 1) + " / " + total + '</span><div class="bar"><span style="width:' + pctDone + '%"></span></div>' + langControl(cert) + '<button class="btn ghost small" data-action="quiz-quit">그만두기</button></div>' +
      '<div class="q-type-badge">' + (q.type === "multi" ? "복수 응답 (" + q.answer.length + "개 선택)" : "단일 응답") + '</div>' +
      questionStem(cert, q) +
      '<div class="choice-list">' + choices + "</div>" +
      explain +
      '<div class="session-actions">' + footer + "</div>" +
      "</div>"
    );
  }

  function selectChoice(cert, idx) {
    var q = session.questions[session.index];
    if (session.revealed[q.id]) return;
    var sel = session.answers[q.id] || [];
    if (q.type === "single") {
      sel = [idx];
    } else {
      var pos = sel.indexOf(idx);
      if (pos === -1) sel = sel.concat([idx]); else sel = sel.filter(function (x) { return x !== idx; });
    }
    session.answers[q.id] = sel;
    render();
  }

  function submitAnswer(cert) {
    var q = session.questions[session.index];
    var sel = session.answers[q.id] || [];
    if (!sel.length) return;
    session.revealed[q.id] = true;
    var correct = sameSet(sel, q.answer);
    recordAnswer(cert, q, correct);
    render();
  }

  function nextQuestion() {
    session.index++;
    render();
  }

  function finishQuiz(cert) {
    var total = session.questions.length;
    var correctN = session.questions.filter(function (q) { return sameSet(session.answers[q.id] || [], q.answer); }).length;
    var scorePct = Math.round((correctN / total) * 100);
    progress[cert].quizHistory.unshift({ date: new Date().toISOString(), domainId: session.domainId, total: total, correct: correctN, scorePct: scorePct });
    progress[cert].quizHistory = progress[cert].quizHistory.slice(0, 30);
    saveProgress();
    session.phase = "summary";
    session.result = { total: total, correct: correctN, scorePct: scorePct };
    render();
  }

  function renderQuizSummary(cert) {
    var r = session.result;
    var wrongQs = session.questions.filter(function (q) { return !sameSet(session.answers[q.id] || [], q.answer); });
    var reviewList = session.questions.map(function (q) {
      return renderReviewItem(cert, q, session.answers[q.id] || []);
    }).join("");

    return (
      "<h1>" + esc(data(cert).name) + '</h1><p class="muted">' + (isBank(cert) ? "문제 풀이 결과" : "퀴즈 결과") + "</p>" +
      tabs(cert, "quiz") +
      '<div class="card result-hero">' +
      '<div class="score ' + (r.scorePct >= 70 ? "pass" : "fail") + '">' + r.scorePct + "%</div>" +
      '<div class="sub">' + r.correct + " / " + r.total + " 정답</div>" +
      '<div style="margin-top:18px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">' +
      '<button class="btn" data-action="quiz-restart">' + (isBank(cert) ? "새로 풀기" : "새 퀴즈 시작") + "</button>" +
      (wrongQs.length ? '<button class="btn secondary" data-action="quiz-review-wrong" data-ids="' + esc(wrongQs.map(function (q) { return q.id; }).join(",")) + '">틀린 문제만 다시 풀기 (' + wrongQs.length + ")</button>" : "") +
      "</div></div>" +
      '<hr class="sep"><h3>문항별 리뷰</h3>' + reviewList
    );
  }

  function renderReviewItem(cert, q, selected) {
    var correct = sameSet(selected, q.answer);
    var choiceLines = q.choices.map(function (c, i) {
      var tagChar = "";
      if (q.answer.indexOf(i) !== -1) tagChar = "✓ ";
      else if (selected.indexOf(i) !== -1) tagChar = "✗ ";
      var style = q.answer.indexOf(i) !== -1 ? "color:var(--success);font-weight:700;" : (selected.indexOf(i) !== -1 ? "color:var(--danger);font-weight:700;" : "");
      return '<div style="' + style + '">' + tagChar + choiceBody(cert, q, i) + "</div>";
    }).join("");
    return (
      '<div class="qa-review"><span class="tag ' + (correct ? "ok" : "bad") + '">' + (correct ? "정답" : "오답") + "</span>" +
      questionStem(cert, q, true) +
      choiceLines +
      '<div class="explain-box" style="margin-top:10px;">' + explanationHtml(q) + "</div></div>"
    );
  }

  // ---------- exam ----------
  function viewExam(cert) {
    if (session && session.kind === "exam" && session.cert === cert) {
      return session.phase === "result" ? renderExamResult(cert) : renderExamSession(cert);
    }
    return renderExamSetup(cert);
  }

  function renderExamSetup(cert) {
    var d = data(cert);
    var lastExams = progress[cert].examHistory.slice(0, 5);
    var histRows = lastExams.map(function (h) {
      return "<tr><td>" + fmtDate(h.date) + "</td><td>" + h.scaledScore + "점</td><td>" + (h.pass ? '<span style="color:var(--success);font-weight:700;">합격</span>' : '<span style="color:var(--danger);font-weight:700;">불합격</span>') + "</td></tr>";
    }).join("");
    return (
      "<h1>" + esc(d.name) + '</h1><p class="muted">모의고사</p>' +
      tabs(cert, "exam") +
      '<div class="card">' +
      '<h3 class="mt-0">실전 모의고사 안내</h3>' +
      '<div class="stat-row">' +
      '<div class="stat"><div class="n">' + d.totalQuestions + '</div><div class="l">총 문항 수</div></div>' +
      '<div class="stat"><div class="n">' + d.examMinutes + '분</div><div class="l">제한 시간</div></div>' +
      '<div class="stat"><div class="n">' + d.passScore + ' / ' + d.maxScore + '</div><div class="l">합격 기준 점수</div></div>' +
      "</div>" +
      '<p class="muted" style="margin-top:14px;">' +
      (isBank(cert)
        ? "문항은 " + d.domains.length + "개 연습시험 세트에서 문항 수 비율대로 무작위 추출됩니다."
        : "문항은 실제 시험처럼 도메인 가중치에 비례하여 무작위로 출제됩니다.") +
      " 제출 전까지는 정답을 알려주지 않으며, 시간이 다 되면 자동으로 제출됩니다.</p>" +
      '<p class="muted" style="font-size:12.5px;">※ 점수는 정답률을 100~1000점 구간으로 환산한 학습용 근사치이며, AWS의 실제 채점(문항 난이도 가중) 알고리즘과는 다를 수 있습니다.</p>' +
      (hasTranslation(cert)
        ? '<div class="lang-field"><label class="field">표시 언어</label>' + langControl(cert) +
          '<p class="muted" style="margin:8px 0 0;font-size:12.5px;">실제 시험은 영어(또는 AWS 공식 번역) 지문으로 출제됩니다. 실전 감각을 기르려면 \'영어 원문\' 또는 \'병기\'를 권합니다.</p></div>'
        : "") +
      '<button class="btn" data-action="exam-start">모의고사 시작</button>' +
      "</div>" +
      (lastExams.length ? '<hr class="sep"><div class="card"><h3 class="mt-0">최근 응시 기록</h3><table class="domain-table"><tr><th>일시</th><th>점수</th><th>결과</th></tr>' + histRows + "</table></div>" : "")
    );
  }

  function startExam(cert) {
    var d = data(cert);
    var counts = allocateCounts(d.domains.map(function (dm) { return dm.weight; }), d.totalQuestions);
    var qs = [];
    d.domains.forEach(function (dm, i) {
      var pool = d.questions.filter(function (q) { return q.domainId === dm.id; });
      var n = Math.min(counts[i], pool.length);
      qs = qs.concat(shuffle(pool).slice(0, n));
    });
    qs = shuffle(qs);
    session = {
      kind: "exam", cert: cert,
      questions: qs, index: 0, answers: {}, flags: {}, phase: "active",
      endAt: Date.now() + d.examMinutes * 60 * 1000
    };
    render();
  }

  function startExamTimer() {
    var el = document.getElementById("exam-timer");
    if (!el) return;
    function tick() {
      var remain = (session.endAt - Date.now()) / 1000;
      var elNow = document.getElementById("exam-timer");
      if (!elNow) return;
      if (remain <= 0) {
        clearInterval(examTimerHandle);
        submitExam(session.cert, true);
        return;
      }
      elNow.textContent = fmtTime(remain);
      elNow.classList.toggle("low", remain < 300);
    }
    tick();
    examTimerHandle = setInterval(tick, 1000);
  }

  function renderExamSession(cert) {
    var total = session.questions.length;
    var q = session.questions[session.index];
    var selected = session.answers[q.id] || [];

    var grid = session.questions.map(function (qq, i) {
      var cls = [];
      if (i === session.index) cls.push("current");
      if (session.answers[qq.id] && session.answers[qq.id].length) cls.push("answered");
      if (session.flags[qq.id]) cls.push("flagged");
      return '<button type="button" class="' + cls.join(" ") + '" data-action="exam-goto" data-idx="' + i + '">' + (i + 1) + "</button>";
    }).join("");

    var choices = q.choices.map(function (c, i) {
      var isSel = selected.indexOf(i) !== -1;
      return (
        '<button type="button" class="choice' + (q.type === "multi" ? " multi" : "") + (isSel ? " selected" : "") + '" data-action="exam-select" data-idx="' + i + '">' +
        '<span class="mark">' + (isSel ? (q.type === "multi" ? "✓" : "●") : "") + '</span><span>' + choiceBody(cert, q, i) + "</span></button>"
      );
    }).join("");

    var answeredCount = session.questions.filter(function (qq) { return session.answers[qq.id] && session.answers[qq.id].length; }).length;

    return (
      "<h1>" + esc(data(cert).name) + '</h1><p class="muted">모의고사 진행 중</p>' +
      '<div class="exam-toolbar">' +
      '<span id="exam-timer" class="timer">--:--</span>' +
      '<span class="muted">답변 완료: ' + answeredCount + " / " + total + "</span>" +
      '<button class="btn ghost small" data-action="exam-flag">' + (session.flags[q.id] ? "★ 표시 해제" : "☆ 나중에 다시보기") + "</button>" +
      langControl(cert) +
      '<span class="spacer"></span>' +
      '<button class="btn ghost small" data-action="exam-quit">그만두기</button>' +
      '<button class="btn danger small" data-action="exam-submit">제출하기</button>' +
      "</div>" +
      '<div class="qgrid">' + grid + "</div>" +
      '<div class="card">' +
      '<div class="q-type-badge">' + (q.type === "multi" ? "복수 응답 (" + q.answer.length + "개 선택)" : "단일 응답") + " · 문항 " + (session.index + 1) + "</div>" +
      questionStem(cert, q) +
      '<div class="choice-list">' + choices + "</div>" +
      '<div class="session-actions" style="justify-content:space-between;">' +
      '<button class="btn secondary" data-action="exam-prev" ' + (session.index === 0 ? "disabled" : "") + '>이전</button>' +
      '<button class="btn" data-action="exam-goto-next" ' + (session.index + 1 >= total ? "disabled" : "") + '>다음</button>' +
      "</div></div>"
    );
  }

  function submitExam(cert, auto) {
    if (!session || session.kind !== "exam") return;
    if (!auto) {
      var unanswered = session.questions.filter(function (q) { return !(session.answers[q.id] && session.answers[q.id].length); }).length;
      if (unanswered > 0 && !confirm("아직 답하지 않은 문항이 " + unanswered + "개 있습니다. 그래도 제출할까요?")) return;
    }
    var d = data(cert);
    var domainBreakdown = {};
    d.domains.forEach(function (dm) { domainBreakdown[dm.id] = { title: dm.title, correct: 0, total: 0 }; });
    var correctN = 0;
    session.questions.forEach(function (q) {
      var sel = session.answers[q.id] || [];
      var ok = sameSet(sel, q.answer);
      if (ok) correctN++;
      recordAnswer(cert, q, ok);
      if (domainBreakdown[q.domainId]) {
        domainBreakdown[q.domainId].total++;
        if (ok) domainBreakdown[q.domainId].correct++;
      }
    });
    var total = session.questions.length;
    var scaledScore = Math.round(100 + (correctN / total) * 900);
    var pass = scaledScore >= d.passScore;
    var entry = { date: new Date().toISOString(), total: total, correct: correctN, scaledScore: scaledScore, pass: pass, domainBreakdown: domainBreakdown };
    progress[cert].examHistory.unshift(entry);
    progress[cert].examHistory = progress[cert].examHistory.slice(0, 30);
    saveProgress();
    session.phase = "result";
    session.result = entry;
    render();
  }

  function renderExamResult(cert) {
    var r = session.result;
    var rows = Object.keys(r.domainBreakdown).map(function (k) {
      var b = r.domainBreakdown[k];
      var pct = b.total ? Math.round((b.correct / b.total) * 100) : 0;
      return "<tr><td>" + esc(b.title) + "</td><td>" + b.correct + " / " + b.total + "</td><td>" + pct + "%</td></tr>";
    }).join("");
    var reviewList = session.questions.map(function (q) { return renderReviewItem(cert, q, session.answers[q.id] || []); }).join("");

    return (
      "<h1>" + esc(data(cert).name) + '</h1><p class="muted">모의고사 결과</p>' +
      '<div class="card result-hero">' +
      '<div class="score ' + (r.pass ? "pass" : "fail") + '">' + r.scaledScore + " / " + data(cert).maxScore + "</div>" +
      '<div class="sub">' + (r.pass ? "합격 기준(" + data(cert).passScore + "점) 이상입니다 🎉" : "합격 기준(" + data(cert).passScore + "점)에 못 미칩니다") + "</div>" +
      '<div class="sub">' + r.correct + " / " + r.total + " 정답</div>" +
      '<div style="margin-top:18px;">' +
      '<button class="btn" data-action="exam-restart">다시 응시하기</button>' +
      "</div></div>" +
      '<hr class="sep"><div class="card"><h3 class="mt-0">' + (isBank(cert) ? "세트별 결과" : "도메인별 결과") + '</h3><table class="domain-table"><tr><th>' + (isBank(cert) ? "연습시험 세트" : "도메인") + "</th><th>정답</th><th>정답률</th></tr>" + rows + "</table></div>" +
      '<hr class="sep"><h3>문항별 리뷰</h3>' + reviewList
    );
  }

  // ---------- glossary ----------
  // 두 자격증의 서비스 목록을 이름 기준으로 합치고, 설명은 더 자세한 쪽을 남긴다.
  function allServices() {
    var byName = {};
    var merged = [];
    conceptCerts().forEach(function (cert) {
      data(cert).services.forEach(function (s) {
        var e = byName[s.name];
        if (!e) {
          e = byName[s.name] = { name: s.name, category: s.category, oneLiner: s.oneLiner, certs: [] };
          merged.push(e);
        } else if (s.oneLiner.length > e.oneLiner.length) {
          e.oneLiner = s.oneLiner;
        }
        if (e.certs.indexOf(cert) === -1) e.certs.push(cert);
      });
    });
    return merged.sort(function (a, b) { return a.name.localeCompare(b.name); });
  }

  function viewAllGlossary() {
    var list = allServices();
    var categories = [];
    list.forEach(function (s) { if (categories.indexOf(s.category) === -1) categories.push(s.category); });
    categories.sort(function (a, b) { return a.localeCompare(b); });
    var catOptions = '<option value="all">전체 카테고리</option>' + categories.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    var certOptions = '<option value="all">전체 자격증</option>' + conceptCerts().map(function (c) { return '<option value="' + esc(c) + '">' + esc(data(c).code) + "</option>"; }).join("");
    return (
      '<h1>서비스 사전</h1><p class="muted">' + conceptCerts().map(function (c) { return esc(data(c).code); }).join(" · ") + ' 시험 범위 · 총 ' + list.length + "개 서비스</p>" +
      '<div class="glossary-toolbar">' +
      '<input type="search" id="svc-search" placeholder="서비스 이름 또는 설명 검색...">' +
      '<select id="svc-cat">' + catOptions + "</select>" +
      '<select id="svc-cert">' + certOptions + "</select>" +
      "</div>" +
      '<div class="svc-grid" id="svc-grid">' + renderSvcCards(list) + "</div>"
    );
  }
  function bindAllGlossary() {
    var list = allServices();
    var search = document.getElementById("svc-search");
    var catSel = document.getElementById("svc-cat");
    var certSel = document.getElementById("svc-cert");
    if (!search) return;
    function refresh() {
      var term = search.value.trim().toLowerCase();
      var cat = catSel.value;
      var cert = certSel.value;
      var filtered = list.filter(function (s) {
        var matchTerm = !term || s.name.toLowerCase().indexOf(term) !== -1 || s.oneLiner.toLowerCase().indexOf(term) !== -1;
        var matchCat = cat === "all" || s.category === cat;
        var matchCert = cert === "all" || s.certs.indexOf(cert) !== -1;
        return matchTerm && matchCat && matchCert;
      });
      document.getElementById("svc-grid").innerHTML = renderSvcCards(filtered);
    }
    search.addEventListener("input", refresh);
    catSel.addEventListener("change", refresh);
    certSel.addEventListener("change", refresh);
  }

  function viewGlossary(cert) {
    var d = data(cert);
    var categories = [];
    d.services.forEach(function (s) { if (categories.indexOf(s.category) === -1) categories.push(s.category); });
    var catOptions = '<option value="all">전체 카테고리</option>' + categories.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    return (
      "<h1>" + esc(d.name) + '</h1><p class="muted">서비스 사전 · 총 ' + d.services.length + "개 서비스</p>" +
      tabs(cert, "glossary") +
      '<div class="glossary-toolbar">' +
      '<input type="search" id="svc-search" placeholder="서비스 이름 또는 설명 검색...">' +
      '<select id="svc-cat">' + catOptions + "</select>" +
      "</div>" +
      '<div class="svc-grid" id="svc-grid">' + renderSvcCards(d.services) + "</div>"
    );
  }
  function renderSvcCards(list) {
    if (!list.length) return '<div class="empty-state">검색 결과가 없습니다.</div>';
    return list.map(function (s) {
      var badges = s.certs
        ? '<span class="svc-certs">' + s.certs.map(function (c) { return "<b>" + esc(data(c).code) + "</b>"; }).join("") + "</span>"
        : "";
      return '<div class="svc-card"><div class="name">' + esc(s.name) + '</div><span class="cat">' + esc(s.category) + "</span>" + badges + '<div class="one">' + esc(s.oneLiner) + "</div></div>";
    }).join("");
  }
  function bindGlossary(cert) {
    var d = data(cert);
    var search = document.getElementById("svc-search");
    var catSel = document.getElementById("svc-cat");
    if (!search) return;
    function refresh() {
      var term = search.value.trim().toLowerCase();
      var cat = catSel.value;
      var list = d.services.filter(function (s) {
        var matchTerm = !term || s.name.toLowerCase().indexOf(term) !== -1 || s.oneLiner.toLowerCase().indexOf(term) !== -1;
        var matchCat = cat === "all" || s.category === cat;
        return matchTerm && matchCat;
      });
      document.getElementById("svc-grid").innerHTML = renderSvcCards(list);
    }
    search.addEventListener("input", refresh);
    catSel.addEventListener("change", refresh);
  }

  // ---------- wrong notebook ----------
  function viewWrong(cert) {
    var d = data(cert);
    var stats = progress[cert].questionStats;
    var wrongIds = Object.keys(stats).filter(function (id) { return stats[id].lastCorrect === false; });
    var wrongQs = d.questions.filter(function (q) { return wrongIds.indexOf(q.id) !== -1; });

    if (!wrongQs.length) {
      return (
        "<h1>" + esc(d.name) + '</h1><p class="muted">오답노트</p>' +
        tabs(cert, "wrong") +
        '<div class="empty-state">아직 기록된 오답이 없습니다. 퀴즈나 모의고사를 풀면 마지막에 틀린 문제가 여기에 모입니다.</div>'
      );
    }

    var byDomain = {};
    wrongQs.forEach(function (q) { (byDomain[q.domainId] = byDomain[q.domainId] || []).push(q); });
    var list = Object.keys(byDomain).map(function (domId) {
      var dom = d.domains.find(function (x) { return x.id === domId; });
      var items = byDomain[domId].map(function (q) {
        return '<div class="qa-review">' + questionStem(cert, q, true) +
          '<div class="muted" style="font-size:13px;">시도 ' + stats[q.id].attempts + "회 · 정답 " + stats[q.id].correct + "회</div></div>";
      }).join("");
      return '<h3>' + esc(dom ? dom.title : domId) + "</h3>" + items;
    }).join("");

    return (
      "<h1>" + esc(d.name) + '</h1><p class="muted">오답노트 · 마지막으로 틀린 문제 ' + wrongQs.length + "개</p>" +
      tabs(cert, "wrong") +
      '<div class="card" style="margin-bottom:18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">' +
      '<span class="muted">이 문제들만 모아서 다시 풀어볼 수 있습니다.</span>' + langControl(cert) +
      '<button class="btn" data-action="wrong-retry" data-ids="' + esc(wrongQs.map(function (q) { return q.id; }).join(",")) + '">오답 ' + wrongQs.length + "개 다시 풀기</button>" +
      "</div>" + list
    );
  }

  // ---------- 실전 문제 풀이 답안지(OMR) ----------
  // 문제 지문은 PDF('실전 문제 풀이 1~20')로 보고 풀고, 이 화면에는 번호별 마킹만 한다.
  // 그래서 데이터에는 보기 개수(c)와 정답(a)만 들어 있다.
  var OMR_KEY = "awsStudyApp.omr.v1";
  var omrState = loadOmr();

  function omrData() { return window.APP_OMR; }
  function omrSet(id) {
    return omrData().sets.filter(function (s) { return s.id === id; })[0];
  }
  function loadOmr() {
    try { return JSON.parse(localStorage.getItem(OMR_KEY)) || {}; } catch (e) { return {}; }
  }
  // 목록 화면만 열어도 20개 세트의 빈 상태가 만들어지므로, 저장할 때 실제 기록이 있는 것만 남긴다.
  // (메모리의 omrState 는 그대로 둔다. 참조를 들고 있는 답안지 화면이 마킹을 잃지 않도록.)
  function saveOmr() {
    var out = {};
    Object.keys(omrState).forEach(function (id) {
      var e = omrState[id];
      if (Object.keys(e.marks || {}).length || e.result || (e.history && e.history.length)) out[id] = e;
    });
    localStorage.setItem(OMR_KEY, JSON.stringify(out));
  }
  function omrEntry(id) {
    var e = omrState[id];
    if (!e) { e = omrState[id] = {}; }
    if (!e.marks) e.marks = {};
    if (!e.history) e.history = [];
    if (!("result" in e)) e.result = null;
    return e;
  }
  function omrMarkedCount(id) {
    var marks = omrEntry(id).marks;
    return Object.keys(marks).filter(function (k) { return marks[k] && marks[k].length; }).length;
  }
  // 부분 점수는 없다. 복수정답 문항은 정답 조합이 정확히 일치해야 정답 처리한다.
  function omrGrade(set, marks) {
    var correct = 0;
    set.questions.forEach(function (q) {
      if (sameSet(marks[q.n] || [], q.a)) correct++;
    });
    var total = set.questions.length;
    return { correct: correct, total: total, pct: Math.round((correct / total) * 100) };
  }
  function omrBest(id) {
    var e = omrEntry(id);
    if (!e.history.length) return null;
    return e.history.reduce(function (a, h) { return h.pct > a.pct ? h : a; });
  }

  // ---------- OMR: 세트 목록 ----------
  function viewOmrHome() {
    var d = omrData();
    var graded = d.sets.filter(function (s) { return omrEntry(s.id).result; });
    var avg = graded.length
      ? Math.round(graded.reduce(function (a, s) { return a + omrEntry(s.id).result.pct; }, 0) / graded.length)
      : null;

    var cards = d.sets.map(function (s) {
      var e = omrEntry(s.id);
      var marked = omrMarkedCount(s.id);
      var pct = Math.round((marked / s.count) * 100);
      var best = omrBest(s.id);
      var status;
      if (e.result) {
        var pass = e.result.pct >= d.passPct;
        status = '<span class="omr-score ' + (pass ? "ok" : "ng") + '">' + e.result.pct + "%</span>" +
          '<span class="muted">' + e.result.correct + " / " + e.result.total + " 정답" +
          (best && e.history.length > 1 ? " · 최고 " + best.pct + "%" : "") + "</span>";
      } else if (marked) {
        status = '<div class="progress-row" style="margin:0;"><div class="progress-bar"><span style="width:' + pct + '%"></span></div>' +
          '<div class="progress-label">' + marked + " / " + s.count + " 마킹</div></div>";
      } else {
        status = '<span class="muted">아직 마킹하지 않았습니다</span>';
      }
      return (
        '<a class="omr-set-card" href="#/omr/' + s.id + '">' +
        '<b>' + esc(s.title) + "</b>" +
        '<span class="muted omr-meta">' + s.count + "문항 · 복수정답 " + s.multi + "문항</span>" +
        '<div class="omr-status">' + status + "</div>" +
        "</a>"
      );
    }).join("");

    return (
      "<h1>실전 문제 풀이 답안지</h1>" +
      '<p class="muted">강의자료 PDF <b>‘실전 문제 풀이 1~20’</b>을 보면서 문제를 풀고, 이 화면에는 문항 번호별로 답만 마킹하세요. ' +
      "제출하면 바로 채점됩니다. 총 " + omrData().totalQuestions + "문항이며 마킹은 이 브라우저에 자동 저장됩니다.</p>" +
      (avg === null
        ? ""
        : '<div class="card" style="margin-bottom:18px;">채점을 마친 세트 <b>' + graded.length + "</b>개 · 평균 정답률 <b>" + avg + "%</b>" +
          '<span class="muted"> (합격 기준 ' + omrData().passPct + "%)</span></div>") +
      '<div class="omr-sets">' + cards + "</div>" +
      '<a class="home-link" href="#/">' +
      "<div><b>← 홈으로</b><p>다른 자격증 학습 세션으로 돌아갑니다</p></div>" +
      "</a>"
    );
  }

  // ---------- OMR: 답안지 ----------
  function omrBubbles(q, marks, reviewing) {
    var mine = marks[q.n] || [];
    var out = [];
    for (var i = 0; i < q.c; i++) {
      var cls = ["omr-bubble"];
      if (mine.indexOf(i) !== -1) cls.push("marked");
      if (reviewing) {
        if (q.a.indexOf(i) !== -1) cls.push("is-answer");
        else if (mine.indexOf(i) !== -1) cls.push("is-wrong");
      }
      out.push('<button type="button" class="' + cls.join(" ") + '" data-idx="' + i + '"' +
        (reviewing ? " disabled" : "") + ' aria-label="' + q.n + "번 " + String.fromCharCode(65 + i) + '">' +
        String.fromCharCode(65 + i) + "</button>");
    }
    return out.join("");
  }

  function omrSheet(set, marks, reviewing) {
    var rows = set.questions.map(function (q) {
      var mine = marks[q.n] || [];
      var cls = ["omr-row"];
      if (q.a.length > 1) cls.push("is-multi");
      var flag = "";
      if (reviewing) {
        var ok = sameSet(mine, q.a);
        cls.push(ok ? "is-ok" : "is-ng");
        flag = '<span class="omr-flag">' + (ok ? "○" : "✕") + "</span>";
      }
      return (
        '<div class="' + cls.join(" ") + '" data-num="' + q.n + '">' +
        '<span class="omr-num">' + q.n + "</span>" +
        '<span class="omr-bubbles">' + omrBubbles(q, marks, reviewing) + "</span>" +
        (q.a.length > 1 ? '<span class="omr-tag">2개</span>' : "") +
        flag +
        "</div>"
      );
    }).join("");
    return '<div class="omr-sheet" id="omr-sheet" data-set="' + set.id + '">' + rows + "</div>";
  }

  function viewOmrSheet(setId) {
    var d = omrData();
    var set = omrSet(setId);
    var e = omrEntry(setId);
    var reviewing = !!e.result;
    var marked = omrMarkedCount(setId);

    var head =
      '<a class="omr-back" href="#/omr">← 세트 목록</a>' +
      "<h1>" + esc(set.title) + "</h1>" +
      '<p class="muted">' + set.count + "문항 · 복수정답 " + set.multi + "문항 · PDF <b>‘" + esc(set.title) + ".pdf’</b>를 보면서 마킹하세요.</p>";

    if (reviewing) {
      var pass = e.result.pct >= d.passPct;
      var best = omrBest(setId);
      var wrong = set.questions.filter(function (q) { return !sameSet(e.marks[q.n] || [], q.a); });
      return (
        head +
        '<div class="card omr-result ' + (pass ? "ok" : "ng") + '">' +
        '<div class="omr-result-score"><b>' + e.result.pct + "%</b><span>" + e.result.correct + " / " + e.result.total + " 정답</span></div>" +
        "<div><b>" + (pass ? "합격 기준 통과" : "합격 기준 미달") + '</b><p class="muted">합격 기준 ' + d.passPct + "% · 채점 " + fmtDate(e.result.at) +
        (best && e.history.length > 1 ? " · 최고 " + best.pct + "% (" + e.history.length + "회 응시)" : "") + "</p></div>" +
        '<div class="omr-result-actions">' +
        '<button class="btn" data-action="omr-retry">다시 풀기</button>' +
        '</div></div>' +
        '<div class="omr-toolbar">' +
        '<span class="muted">틀린 문항 ' + wrong.length + "개" + (wrong.length ? " · " + wrong.map(function (q) { return q.n; }).join(", ") + "번" : "") + "</span>" +
        (wrong.length ? '<label class="omr-only-wrong"><input type="checkbox" id="omr-only-wrong"> 틀린 문항만 보기</label>' : "") +
        "</div>" +
        '<div class="omr-legend"><span><i class="lg-answer"></i> 정답</span><span><i class="lg-wrong"></i> 내가 고른 오답</span></div>' +
        omrSheet(set, e.marks, true)
      );
    }

    return (
      head +
      '<div class="omr-toolbar sticky">' +
      '<div class="progress-row omr-progress">' +
      '<div class="progress-bar"><span id="omr-bar" style="width:' + Math.round((marked / set.count) * 100) + '%"></span></div>' +
      '<div class="progress-label" id="omr-count">' + marked + " / " + set.count + "</div></div>" +
      '<button class="btn ghost small" data-action="omr-clear">마킹 지우기</button>' +
      '<button class="btn" data-action="omr-submit">제출하고 채점</button>' +
      "</div>" +
      '<p class="muted omr-hint">보기를 눌러 마킹합니다. <b>2개</b> 표시가 있는 문항은 두 개를 고르세요. 마킹은 자동 저장됩니다.</p>' +
      omrSheet(set, e.marks, false)
    );
  }

  // 40문항짜리 답안지에서 한 칸 누를 때마다 화면을 다시 그리면 스크롤이 맨 위로 튄다.
  // 그래서 마킹은 DOM만 직접 고치고 진행률 표시만 갱신한다.
  function bindOmrSheet(setId) {
    var sheet = document.getElementById("omr-sheet");
    if (!sheet) return;
    var set = omrSet(setId);
    var e = omrEntry(setId);

    var onlyWrong = document.getElementById("omr-only-wrong");
    if (onlyWrong) {
      onlyWrong.addEventListener("change", function () {
        sheet.classList.toggle("only-wrong", onlyWrong.checked);
      });
    }
    if (e.result) return; // 채점 결과 화면에서는 마킹할 수 없다.

    sheet.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".omr-bubble");
      if (!btn) return;
      var row = btn.closest(".omr-row");
      var num = parseInt(row.getAttribute("data-num"), 10);
      var q = set.questions.filter(function (x) { return x.n === num; })[0];
      var idx = parseInt(btn.getAttribute("data-idx"), 10);
      var sel = (e.marks[num] || []).slice();
      var pos = sel.indexOf(idx);
      if (pos !== -1) {
        sel.splice(pos, 1);
      } else if (q.c >= 5) {
        // 복수정답 문항은 2개까지. 세 번째를 고르면 가장 먼저 고른 것이 빠진다.
        sel.push(idx);
        while (sel.length > 2) sel.shift();
      } else {
        sel = [idx];
      }
      if (sel.length) e.marks[num] = sel; else delete e.marks[num];
      saveOmr();

      Array.prototype.forEach.call(row.querySelectorAll(".omr-bubble"), function (b) {
        b.classList.toggle("marked", sel.indexOf(parseInt(b.getAttribute("data-idx"), 10)) !== -1);
      });
      var marked = omrMarkedCount(setId);
      var label = document.getElementById("omr-count");
      var bar = document.getElementById("omr-bar");
      if (label) label.textContent = marked + " / " + set.count;
      if (bar) bar.style.width = Math.round((marked / set.count) * 100) + "%";
    });
  }

  function submitOmr(setId) {
    var set = omrSet(setId);
    var e = omrEntry(setId);
    var marked = omrMarkedCount(setId);
    if (marked < set.count && !confirm("아직 마킹하지 않은 문항이 " + (set.count - marked) + "개 있습니다. 그대로 제출할까요?")) return;
    var r = omrGrade(set, e.marks);
    r.at = new Date().toISOString();
    e.result = r;
    e.history.unshift({ at: r.at, correct: r.correct, total: r.total, pct: r.pct });
    saveOmr();
    render();
  }

  function retryOmr(setId) {
    if (!confirm("마킹을 모두 지우고 처음부터 다시 풀까요? 채점 기록은 남습니다.")) return;
    var e = omrEntry(setId);
    e.marks = {};
    e.result = null;
    saveOmr();
    render();
  }

  function clearOmrMarks(setId) {
    if (!confirm("이 세트의 마킹을 모두 지울까요?")) return;
    omrEntry(setId).marks = {};
    saveOmr();
    render();
  }

  // ---------- theme ----------
  function initTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    var btn = document.getElementById("theme-toggle");
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var isDark = cur ? cur === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // ---------- action delegation ----------
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-action]");
    if (!el) return;
    var action = el.getAttribute("data-action");
    var parts = parseHash();
    var cert = parts[0];
    switch (action) {
      case "lang-set": setLang(cert, el.getAttribute("data-lang")); break;
      case "quiz-start": startQuiz(cert); break;
      case "select-choice": selectChoice(cert, parseInt(el.getAttribute("data-idx"), 10)); break;
      case "quiz-submit": submitAnswer(cert); break;
      case "quiz-next": nextQuestion(); break;
      case "quiz-finish": finishQuiz(cert); break;
      case "quiz-quit": session = null; render(); break;
      case "quiz-restart": session = null; render(); break;
      case "quiz-review-wrong": startReview(cert, el.getAttribute("data-ids").split(",").filter(Boolean)); break;
      case "wrong-retry": startReview(cert, el.getAttribute("data-ids").split(",").filter(Boolean)); break;
      case "exam-start": startExam(cert); break;
      case "exam-select": {
        var q = session.questions[session.index];
        var idx = parseInt(el.getAttribute("data-idx"), 10);
        var sel = session.answers[q.id] || [];
        if (q.type === "single") sel = [idx];
        else {
          var pos = sel.indexOf(idx);
          sel = pos === -1 ? sel.concat([idx]) : sel.filter(function (x) { return x !== idx; });
        }
        session.answers[q.id] = sel;
        render();
        break;
      }
      case "exam-goto": session.index = parseInt(el.getAttribute("data-idx"), 10); render(); break;
      case "exam-prev": session.index--; render(); break;
      case "exam-goto-next": session.index++; render(); break;
      case "exam-flag": {
        var qq = session.questions[session.index];
        session.flags[qq.id] = !session.flags[qq.id];
        render();
        break;
      }
      case "exam-submit": submitExam(cert, false); break;
      case "exam-restart": session = null; render(); break;
      case "omr-submit": submitOmr(parts[1]); break;
      case "omr-retry": retryOmr(parts[1]); break;
      case "omr-clear": clearOmrMarks(parts[1]); break;
      case "exam-quit":
        if (confirm("모의고사를 중단할까요? 지금까지의 응답은 저장되지 않습니다.")) { session = null; render(); }
        break;
      default: break;
    }
  });
})();
