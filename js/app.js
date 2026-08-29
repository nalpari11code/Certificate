// ============================================================
// js/app.js — 메인 앱 컨트롤러 (라우팅, 렌더링, 인터랙션)
// ============================================================

import {
  ALL_QUESTIONS, ALL_VARIANTS, ALL_NEW_QUESTIONS, ALL_NEW_VARIANTS,
  ALL_1000_NEW_POOL, ALL_735_ORIGIN_POOL, ALL_1735_QUESTIONS,
  CATEGORIES, EXAM_ROUNDS,
  getQuestions, getStats, getQuestionsByCategory,
  getNewQuestionsByCategory, getNewPoolByCategory,
  getOriginPoolByCategory, getAllQuestionsByCategory,
  getQuestionsByRound
} from './data/index.js';
import { SparringQueue, GradingEngine } from './queue.js';
import { StorageManager } from './storage.js';
import { TraceViewer } from './traceViewer.js';
import { CONCEPT_DATA } from './data/concepts.js';

class App {
  constructor() {
    this.root = document.getElementById('app');
    this.toastContainer = document.getElementById('toast-container');
    this.queue = new SparringQueue();
    this.storage = new StorageManager();
    this.timerInterval = null;
    this.currentAnswers = {};
    this.currentGraded = false;

    // 큐 이벤트 바인딩
    this.queue.onQueueChange = (remaining, stats) => this.updateHUD(remaining, stats);
    this.queue.onVariantAdded = (variant) => this.showToast(`⚡ 파생 변형 문제 추가! (+1)`, 'variant');

    this.renderHome();
  }

  // ─── 유틸 ───
  $(selector) { return this.root.querySelector(selector); }
  $$(selector) { return this.root.querySelectorAll(selector); }

  showToast(message, type = 'variant') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    this.toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // ─── HUD 업데이트 ───
  updateHUD(remaining, stats) {
    const hudEl = this.$('.hud');
    if (!hudEl) return;

    const total = stats.correct + stats.wrong + remaining;
    const progress = total > 0 ? ((stats.correct + stats.wrong) / total) * 100 : 0;

    this.$('.hud-queue .hud-stat-value').textContent = remaining;
    this.$('.hud-streak .hud-stat-value').textContent = stats.streak;
    this.$('.hud-accuracy .hud-stat-value').textContent = `${this.queue.getAccuracy()}%`;
    this.$('.hud-variants .hud-stat-value').textContent = `+${stats.variantsAdded}`;
    this.$('.progress-bar-fill').style.width = `${progress}%`;
  }

  updateTimer() {
    const el = this.$('.hud-time .hud-stat-value');
    if (el) el.textContent = this.queue.getElapsedFormatted();
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  // ═══════════════════════════════════════════
  //  HOME SCREEN
  // ═══════════════════════════════════════════
  renderHome() {
    this.stopTimer();
    const stats = getStats();
    const overall = this.storage.getOverallStats();

    this.root.innerHTML = `
      <div class="home-screen">
        <div class="home-hero">
          <span class="home-hero-icon">⚔️</span>
          <h1><span class="text-gradient">Infinite Sparring</span></h1>
          <p>2026 프로그래밍기능사 실기 단기 돌파 무한 스파링 플랫폼</p>
          <div style="margin-top: 14px; display: inline-flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: var(--accent-indigo-light); font-size: 0.85rem; padding: 6px 16px; border: 1px solid var(--border-glass);">
              🔥 총 ${stats.totalMaster}문항 (기출 풀 ${stats.total735OriginPool}제 + <b>출제위원급 신유형 ${stats.total1000NewPool}제</b>)
            </span>
          </div>
        </div>

        <div class="home-stats-row">
          ${stats.byCategory.map(c => `
            <div class="glass-card home-stat-card">
              <div class="stat-num" style="color: ${c.color}">${c.grandTotal}</div>
              <div class="stat-label" style="font-weight: 700;">${c.icon} ${c.id.toUpperCase()}</div>
              <div style="font-size: 0.62rem; color: var(--text-muted); margin-top: 2px;">
                기출 ${c.originTotal}제 + 신유형 ${c.newTotal}제
              </div>
            </div>`).join('')}
        </div>

        <div class="mode-grid">
          <div class="glass-card mode-card" data-mode="new1000" style="border: 1px solid rgba(239, 68, 68, 0.4); background: rgba(239, 68, 68, 0.06);">
            <div class="mode-icon">🚀</div>
            <div class="mode-title" style="color: #f87171;">출제위원급 신유형 1,000제 특훈</div>
            <div class="mode-desc">기출에 없던 200개 신유형 + 800개 4배수 변형 풀세트(총 1,000문항) 집중 마스터!</div>
          </div>
          <div class="glass-card mode-card" data-mode="all1735">
            <div class="mode-icon">⚡</div>
            <div class="mode-title">1,735제 마스터 무한 스파링</div>
            <div class="mode-desc">기출 735제 + 신유형 1,000제 전체(1,735문항)를 큐에 적재하여 랜덤 무한 실전 훈련!</div>
          </div>
          <div class="glass-card mode-card" data-mode="origin735">
            <div class="mode-icon">🔥</div>
            <div class="mode-title">기출 735제 돌파 스파링</div>
            <div class="mode-desc">기출 35문항으로 시작 + 틀릴 때마다 700개 20배수 변형 문제가 실시간 큐 침투!</div>
          </div>
          <div class="glass-card mode-card" data-mode="category">
            <div class="mode-icon">🎯</div>
            <div class="mode-title">파트별 집중 공략</div>
            <div class="mode-desc">Python (439제) / Java (439제) / SQL (481제) / Linux (376제) 파트별 전수 스파링.</div>
          </div>
          <div class="glass-card mode-card" data-mode="mock">
            <div class="mode-icon">📜</div>
            <div class="mode-title">회차별 실전 모의고사</div>
            <div class="mode-desc">공단 예시(11문) / 1회차(12문) / 2회차(12문) / 신유형(1,000문) 회차별 풀이.</div>
          </div>
          <div class="glass-card mode-card" data-mode="wrong">
            <div class="mode-icon">🩸</div>
            <div class="mode-title">오답 노트 복습</div>
            <div class="mode-desc">틀렸던 문제와 변수 추적표(Trace Table)를 다시 확인하며 취약 유형 집중 보강.</div>
          </div>
          <div class="glass-card mode-card" data-mode="concepts" style="border: 1px solid rgba(6, 182, 212, 0.4); background: rgba(6, 182, 212, 0.06);">
            <div class="mode-icon">📘</div>
            <div class="mode-title" style="color: #67e8f9;">핵심 개념 노트</div>
            <div class="mode-desc">기출 분석 기반 4과목 핵심 개념 총정리. 함정 포인트와 암기 체크리스트 수록!</div>
          </div>
        </div>

        ${overall.totalSessions > 0 ? `
        <div class="glass-card p-lg mb-lg">
          <h3 class="mb-md">📊 누적 학습 기록</h3>
          <div class="flex gap-lg" style="flex-wrap:wrap;">
            <div><span class="text-accent" style="font-family:var(--font-mono);font-weight:800;font-size:1.2rem;">${overall.totalSessions}</span> <span class="text-muted" style="font-size:0.75rem;">세션</span></div>
            <div><span style="color:var(--accent-emerald);font-family:var(--font-mono);font-weight:800;font-size:1.2rem;">${overall.totalCorrect}</span> <span class="text-muted" style="font-size:0.75rem;">정답</span></div>
            <div><span style="color:var(--accent-rose);font-family:var(--font-mono);font-weight:800;font-size:1.2rem;">${overall.totalWrong}</span> <span class="text-muted" style="font-size:0.75rem;">오답</span></div>
            <div><span style="color:var(--accent-amber);font-family:var(--font-mono);font-weight:800;font-size:1.2rem;">${overall.bestStreak}</span> <span class="text-muted" style="font-size:0.75rem;">최대 연속</span></div>
          </div>
        </div>` : ''}
      </div>
    `;

    // 이벤트 바인딩
    this.$$('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        if (mode === 'new1000') this.renderCategorySelect('new1000');
        else if (mode === 'all1735') this.startSession(ALL_1735_QUESTIONS);
        else if (mode === 'origin735') this.renderCategorySelect('origin735');
        else if (mode === 'category') this.renderCategorySelect('category');
        else if (mode === 'mock') this.renderRoundSelect();
        else if (mode === 'wrong') this.startWrongNoteMode();
        else if (mode === 'concepts') this.renderConceptNotes();
      });
    });
  }

  // ═══════════════════════════════════════════
  //  CATEGORY / ROUND SELECT
  // ═══════════════════════════════════════════
  renderCategorySelect(mode) {
    const stats = getStats();
    let title = '과목 선택';
    if (mode === 'new1000') title = '🚀 출제위원급 신유형 1,000제 — 과목 선택';
    else if (mode === 'origin735') title = '🔥 기출 735제 돌파 — 과목 선택';
    else if (mode === 'category') title = '🎯 파트별 집중 공략 — 과목 선택';

    this.root.innerHTML = `
      <div class="home-screen">
        <div class="mb-lg">
          <button class="btn btn-ghost btn-sm" id="backBtn">← 뒤로</button>
        </div>
        <h2 class="mb-lg">${title}</h2>
        <div class="mode-grid">
          ${mode === 'new1000' ? `
          <div class="glass-card mode-card" data-cat="all">
            <div class="mode-icon">🚀</div>
            <div class="mode-title">전 과목 신유형 1,000제 풀세트</div>
            <div class="mode-desc">Python(250) + Java(250) + SQL(250) + Linux(250) 신유형 총집합!</div>
          </div>` : mode === 'origin735' ? `
          <div class="glass-card mode-card" data-cat="all">
            <div class="mode-icon">⚡</div>
            <div class="mode-title">전체 과목 기출 돌파 (735제 풀)</div>
            <div class="mode-desc">기출 35문항으로 시작 + 오답 발생 시 700개 변형 문제 자동 침투!</div>
          </div>` : `
          <div class="glass-card mode-card" data-cat="all">
            <div class="mode-icon">🌟</div>
            <div class="mode-title">전 과목 마스터 풀세트 (1,735문항)</div>
            <div class="mode-desc">기출 735 + 신유형 1,000 전체 문제를 무작위로 스파링!</div>
          </div>`}
          ${stats.byCategory.map(c => {
            let countText = '';
            if (mode === 'new1000') countText = `신유형 ${c.newTotal}제 (원문 50 + 변형 200)`;
            else if (mode === 'origin735') countText = `기출 ${c.originCount}문항 (변형 ${c.originVariantCount}풀)`;
            else countText = `전체 ${c.grandTotal}문항 (기출 ${c.originTotal} + 신유형 ${c.newTotal})`;

            return `
              <div class="glass-card mode-card" data-cat="${c.id}">
                <div class="mode-icon">${c.icon}</div>
                <div class="mode-title">${c.label} (${countText})</div>
                <div class="mode-desc">
                  ${mode === 'new1000' ? `${c.id.toUpperCase()} 신유형 50문항 + 4배수 변형 200문항 (총 250제)` :
                    mode === 'origin735' ? `기출 ${c.originCount}문항 + 오답 시 ${c.originVariantCount}개 변형 침투` :
                    `기출 ${c.originTotal}제 + 신유형 ${c.newTotal}제 전체 풀세트 (${c.grandTotal}제)`}
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>
    `;

    this.$('#backBtn').addEventListener('click', () => this.renderHome());
    this.$$('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.cat;
        let questions;
        if (mode === 'new1000') {
          questions = getNewPoolByCategory(cat);
        } else if (mode === 'origin735') {
          questions = cat === 'all' ? ALL_QUESTIONS : getQuestionsByCategory(cat);
        } else {
          questions = getAllQuestionsByCategory(cat);
        }
        this.startSession(questions);
      });
    });
  }

  renderRoundSelect() {
    this.root.innerHTML = `
      <div class="home-screen">
        <div class="mb-lg">
          <button class="btn btn-ghost btn-sm" id="backBtn">← 뒤로</button>
        </div>
        <h2 class="mb-lg">📜 회차별 모의고사 — 회차 선택</h2>
        <div class="mode-grid">
          ${EXAM_ROUNDS.map(r => {
            const count = getQuestionsByRound(r.id).length;
            return `
              <div class="glass-card mode-card" data-round="${r.id}">
                <div class="mode-icon">${r.label.split(' ')[0]}</div>
                <div class="mode-title">${r.label}</div>
                <div class="mode-desc">${count}문항 실전 테스트</div>
              </div>`;
          }).join('')}
        </div>
      </div>
    `;

    this.$('#backBtn').addEventListener('click', () => this.renderHome());
    this.$$('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        const round = card.dataset.round;
        const questions = getQuestionsByRound(round);
        this.startSession(questions);
      });
    });
  }

  startWrongNoteMode() {
    const topWrong = this.storage.getTopWrongQuestions(20);
    if (topWrong.length === 0) {
      this.showToast('아직 오답 기록이 없습니다!', 'wrong');
      return;
    }

    const questions = topWrong
      .map(w => ALL_1735_QUESTIONS.find(q => q.id === w.id))
      .filter(q => q != null);

    if (questions.length === 0) {
      this.showToast('복습할 오답 문제가 없습니다.', 'wrong');
      return;
    }

    this.startSession(questions);
  }

  // ═══════════════════════════════════════════
  //  SESSION (문제 풀이 루프)
  // ═══════════════════════════════════════════
  startSession(questions) {
    this.queue.init(questions);
    this.startTimer();
    this.renderQuestion();
  }

  renderQuestion() {
    const q = this.queue.current();
    if (!q) {
      this.renderSessionComplete();
      return;
    }

    this.currentAnswers = {};
    this.currentGraded = false;

    this.root.innerHTML = `
      <!-- HUD -->
      <div class="hud">
        <div class="hud-stat hud-queue">
          <div class="hud-stat-value">${this.queue.remaining()}</div>
          <div class="hud-stat-label">남은 큐</div>
        </div>
        <div class="hud-stat hud-streak">
          <div class="hud-stat-value">${this.queue.stats.streak}</div>
          <div class="hud-stat-label">연속 정답</div>
        </div>
        <div class="hud-stat hud-accuracy">
          <div class="hud-stat-value">${this.queue.getAccuracy()}%</div>
          <div class="hud-stat-label">정답률</div>
        </div>
        <div class="hud-stat hud-time">
          <div class="hud-stat-value">${this.queue.getElapsedFormatted()}</div>
          <div class="hud-stat-label">경과 시간</div>
        </div>
        <div class="hud-stat hud-variants">
          <div class="hud-stat-value">+${this.queue.stats.variantsAdded}</div>
          <div class="hud-stat-label">파생 추가</div>
        </div>
        <div class="hud-progress">
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: 0%"></div>
          </div>
        </div>
      </div>

      <!-- Question Card -->
      <div class="question-card glass-card" style="margin-top: var(--space-lg);">
        <div class="question-header">
          <span class="chip chip-${q.category}">${CATEGORIES.find(c => c.id === q.category)?.icon || ''} ${q.category.toUpperCase()}</span>
          ${q.examRound ? `<span class="question-round">${q.examRound}${q.originNumber ? ' #' + q.originNumber : ''}</span>` : ''}
          ${q.parentId ? '<span class="badge badge-variant">파생 변형</span>' : q.examRound === '신유형 예상' ? '<span class="badge" style="background:rgba(239,68,68,0.2);color:#f87171;border:1px solid rgba(239,68,68,0.3);">출제위원급 신유형</span>' : '<span class="badge badge-correct">기출 원문</span>'}
        </div>
        <h3 class="question-title">${this._escape(q.title)}</h3>

        ${q.code ? `
        <div class="code-viewer">
          <span class="code-lang-badge">${q.codeLang || ''}</span>
          <pre>${this._escape(q.code)}</pre>
        </div>` : ''}

        <div class="answer-section">
          ${q.questionSubItems.map((sub, idx) => `
            <div class="answer-sub-item" data-sub-idx="${idx}">
              <div class="answer-prompt">${this._escape(sub.prompt)}</div>
              <div class="answer-input-wrap">
                <input type="text" class="answer-input" data-sub-id="${sub.subId}"
                       placeholder="${sub.placeholder || '정답 입력'}"
                       autocomplete="off" spellcheck="false">
              </div>
              <div class="answer-result" id="result-${sub.subId}"></div>
            </div>
          `).join('')}
        </div>

        <div class="question-actions">
          <button class="btn btn-ghost" id="skipBtn">건너뛰기</button>
          <button class="btn btn-primary" id="submitBtn">✅ 채점하기</button>
          <button class="btn btn-success hidden" id="nextBtn">다음 문제 →</button>
        </div>

        <div id="explanationArea"></div>
      </div>
    `;

    // 이벤트 바인딩
    this.$('#submitBtn').addEventListener('click', () => this.gradeCurrentQuestion(q));
    this.$('#nextBtn').addEventListener('click', () => this.renderQuestion());
    this.$('#skipBtn').addEventListener('click', () => {
      this.queue.markWrong();
      this.renderQuestion();
    });

    // Enter 키로 채점/다음 문제
    this.$$('.answer-input').forEach((input) => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (this.currentGraded) {
            this.renderQuestion();
          } else {
            this.gradeCurrentQuestion(q);
          }
        }
      });
    });

    // 첫 번째 인풋에 자동 포커스
    const firstInput = this.$('.answer-input');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);

    this.updateHUD(this.queue.remaining(), this.queue.stats);
  }

  gradeCurrentQuestion(q) {
    if (this.currentGraded) return;
    this.currentGraded = true;

    let allCorrect = true;

    q.questionSubItems.forEach(sub => {
      const input = this.root.querySelector(`input[data-sub-id="${sub.subId}"]`);
      const resultEl = this.$(`#result-${sub.subId}`);
      const userAnswer = input ? input.value : '';
      const answerMode = sub.answerMode || 'exact';

      let isCorrect;
      if (sub.multilineAnswer) {
        const userLines = userAnswer.trim().split(/[\r\n]+/).map(l => l.trim());
        isCorrect = sub.multilineAnswer.length === userLines.length &&
          sub.multilineAnswer.every((ans, i) => GradingEngine.check(userLines[i] || '', [ans], 'exact'));
        if (!isCorrect) {
          isCorrect = GradingEngine.check(userAnswer, sub.answer, answerMode);
        }
      } else {
        isCorrect = GradingEngine.check(userAnswer, sub.answer, answerMode);
      }

      if (input) {
        input.classList.add(isCorrect ? 'input-correct' : 'input-wrong');
        input.readOnly = true;
      }

      if (resultEl) {
        if (isCorrect) {
          resultEl.innerHTML = '<span class="correct">✅ 정답!</span>';
          resultEl.className = 'answer-result correct';
        } else {
          const displayAnswer = sub.multilineAnswer ? sub.multilineAnswer.join(' / ') : sub.answer[0];
          resultEl.innerHTML = `<span class="wrong">❌ 오답</span> <span class="correct-answer-reveal">정답: ${this._escape(displayAnswer)}</span>`;
          resultEl.className = 'answer-result wrong';
          allCorrect = false;
        }
      }
    });

    // 큐 업데이트
    if (allCorrect) {
      this.queue.markCorrect();
      this.showToast('🎯 정답! 잘하고 있어요!', 'correct');
    } else {
      this.queue.markWrong();
      this.showToast('❌ 오답! 파생 변형 문제가 큐에 추가됩니다.', 'wrong');
      this.storage.addWrongNote(q.id, this.currentAnswers);
    }

    // 해설 표시
    if (q.explanation) {
      const explArea = this.$('#explanationArea');
      if (explArea) {
        explArea.innerHTML = TraceViewer.renderExplanation(q.explanation);
      }
    }

    // 버튼 전환
    this.$('#submitBtn').classList.add('hidden');
    this.$('#skipBtn').classList.add('hidden');
    this.$('#nextBtn').classList.remove('hidden');
    this.$('#nextBtn').focus();
  }

  // ═══════════════════════════════════════════
  //  SESSION COMPLETE
  // ═══════════════════════════════════════════
  renderSessionComplete() {
    this.stopTimer();
    const summary = this.queue.getSummary();
    this.storage.saveSession(summary);

    this.root.innerHTML = `
      <div class="session-complete">
        <div class="trophy">🏆</div>
        <h2><span class="text-gradient">세션 완료!</span></h2>
        <p class="text-secondary mb-lg">큐에 남은 문제가 0이 되었습니다. 수고하셨습니다!</p>

        <div class="result-grid">
          <div class="glass-card result-card">
            <div class="result-value" style="color: var(--accent-emerald);">${summary.correct}</div>
            <div class="result-label">정답</div>
          </div>
          <div class="glass-card result-card">
            <div class="result-value" style="color: var(--accent-rose);">${summary.wrong}</div>
            <div class="result-label">오답</div>
          </div>
          <div class="glass-card result-card">
            <div class="result-value" style="color: var(--accent-amber);">${summary.accuracy}%</div>
            <div class="result-label">정답률</div>
          </div>
          <div class="glass-card result-card">
            <div class="result-value" style="color: var(--accent-indigo-light);">${summary.maxStreak}</div>
            <div class="result-label">최대 연속</div>
          </div>
          <div class="glass-card result-card">
            <div class="result-value" style="color: var(--accent-violet);">+${summary.variantsAdded}</div>
            <div class="result-label">파생 문제 추가</div>
          </div>
          <div class="glass-card result-card">
            <div class="result-value" style="color: var(--text-secondary);">${summary.elapsed}</div>
            <div class="result-label">소요 시간</div>
          </div>
        </div>

        <div class="flex gap-md justify-center" style="flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" id="retryBtn">🔥 다시 스파링</button>
          <button class="btn btn-ghost btn-lg" id="homeBtn">🏠 홈으로</button>
        </div>
      </div>
    `;

    this.$('#retryBtn').addEventListener('click', () => this.renderCategorySelect('new1000'));
    this.$('#homeBtn').addEventListener('click', () => this.renderHome());
  }

  // ═══════════════════════════════════════════
  //  CONCEPT NOTES VIEWER
  // ═══════════════════════════════════════════
  renderConceptNotes(activeTab = 'python') {
    this.stopTimer();
    const tabs = Object.keys(CONCEPT_DATA);
    const data = CONCEPT_DATA[activeTab];

    this.root.innerHTML = `
      <div class="home-screen">
        <div class="mb-lg">
          <button class="btn btn-ghost btn-sm" id="backBtn">← 홈으로</button>
        </div>

        <div class="concept-header">
          <span class="concept-header-icon">📘</span>
          <h2><span class="text-gradient">핵심 개념 노트</span></h2>
          <p>기출 35문항 + 변형 1,700문항 분석 기반 — 4과목 핵심 압축 정리</p>
        </div>

        <div class="concept-tabs">
          ${tabs.map(key => {
            const t = CONCEPT_DATA[key];
            return `<div class="concept-tab ${key === activeTab ? 'active' : ''}" data-tab="${key}">
              ${t.icon} ${t.label}
            </div>`;
          }).join('')}
        </div>

        <div class="concept-controls">
          <button class="btn btn-ghost btn-sm" id="expandAllBtn">📂 전체 펼치기</button>
          <button class="btn btn-ghost btn-sm" id="collapseAllBtn">📁 전체 접기</button>
        </div>

        <div id="conceptSections">
          ${data.sections.map((sec, idx) => `
            <div class="concept-section glass-card ${idx === 0 ? 'open' : ''}" data-idx="${idx}">
              <div class="concept-section-header">
                <span class="concept-section-title">${sec.title}</span>
                <span class="concept-section-toggle">▼</span>
              </div>
              <div class="concept-section-body">
                ${sec.content}
                ${sec.trap ? `
                <div class="concept-trap">
                  <span class="concept-trap-icon">⚠️</span>
                  <div class="concept-trap-text"><b>기출 함정:</b> ${sec.trap}</div>
                </div>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Tab switching
    this.$$('.concept-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.renderConceptNotes(tab.dataset.tab);
      });
    });

    // Accordion toggle
    this.$$('.concept-section-header').forEach(header => {
      header.addEventListener('click', () => {
        const section = header.closest('.concept-section');
        section.classList.toggle('open');
      });
    });

    // Expand/Collapse all
    this.$('#expandAllBtn').addEventListener('click', () => {
      this.$$('.concept-section').forEach(s => s.classList.add('open'));
    });
    this.$('#collapseAllBtn').addEventListener('click', () => {
      this.$$('.concept-section').forEach(s => s.classList.remove('open'));
    });

    this.$('#backBtn').addEventListener('click', () => this.renderHome());
  }

  _escape(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

// ─── 앱 초기화 ───
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
