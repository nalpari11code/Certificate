// ============================================================
// js/queue.js — 동적 파생 오답 큐 (Dynamic Mutation Queue) 엔진
// ============================================================

import { getRandomVariant, QUESTION_MAP } from './data/index.js';

export class SparringQueue {
  constructor() {
    this.queue = [];
    this.completed = [];
    this.stats = { correct: 0, wrong: 0, streak: 0, maxStreak: 0, variantsAdded: 0 };
    this.startTime = null;
    this.onQueueChange = null;
    this.onVariantAdded = null;
  }

  /** 문제 배열로 큐를 초기화 */
  init(questions) {
    this.queue = this._shuffle([...questions]);
    this.completed = [];
    this.stats = { correct: 0, wrong: 0, streak: 0, maxStreak: 0, variantsAdded: 0 };
    this.startTime = Date.now();
    this._notify();
  }

  /** Fisher-Yates 셔플 */
  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /** 현재 출제 문제 (큐 맨 앞) */
  current() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  /** 남은 문제 수 */
  remaining() {
    return this.queue.length;
  }

  /** 세션 완료 여부 */
  isComplete() {
    return this.queue.length === 0;
  }

  /** 정답 처리 */
  markCorrect() {
    const q = this.queue.shift();
    if (q) {
      this.completed.push({ ...q, result: 'correct' });
      this.stats.correct++;
      this.stats.streak++;
      if (this.stats.streak > this.stats.maxStreak) {
        this.stats.maxStreak = this.stats.streak;
      }
    }
    this._notify();
    return q;
  }

  /** 오답 처리 — 파생 변형 문제를 큐 뒤에 삽입 */
  markWrong() {
    const q = this.queue.shift();
    if (q) {
      this.completed.push({ ...q, result: 'wrong' });
      this.stats.wrong++;
      this.stats.streak = 0;

      // 원본 문제의 ID 추적 (변형 문제일 경우 parentId 사용)
      const originId = q.parentId || q.id;
      const variant = getRandomVariant(originId);

      if (variant) {
        // 이미 큐에 같은 변형이 있는지 확인 (중복 방지)
        const alreadyInQueue = this.queue.some(item => item.id === variant.id);
        if (!alreadyInQueue) {
          this.queue.push(variant);
          this.stats.variantsAdded++;
          if (this.onVariantAdded) {
            this.onVariantAdded(variant, originId);
          }
        }
      } else {
        // 파생 변형이 없으면 원문 문제를 큐 뒤로 보냄
        this.queue.push(q);
      }
    }
    this._notify();
    return q;
  }

  /** 경과 시간 (초 단위) */
  getElapsedSeconds() {
    if (!this.startTime) return 0;
    return Math.floor((Date.now() - this.startTime) / 1000);
  }

  /** 경과 시간 포맷 (MM:SS) */
  getElapsedFormatted() {
    const total = this.getElapsedSeconds();
    const m = Math.floor(total / 60).toString().padStart(2, '0');
    const s = (total % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  /** 정답률 (%) */
  getAccuracy() {
    const total = this.stats.correct + this.stats.wrong;
    if (total === 0) return 0;
    return Math.round((this.stats.correct / total) * 100);
  }

  /** 세션 결과 요약 */
  getSummary() {
    return {
      ...this.stats,
      accuracy: this.getAccuracy(),
      elapsed: this.getElapsedFormatted(),
      elapsedSeconds: this.getElapsedSeconds(),
      totalAttempted: this.stats.correct + this.stats.wrong,
      completed: this.completed
    };
  }

  /** 큐 변경 콜백 알림 */
  _notify() {
    if (this.onQueueChange) {
      this.onQueueChange(this.remaining(), this.stats);
    }
  }
}

// ─── 채점 엔진 ───
export class GradingEngine {
  /**
   * 유연한 채점: 대소문자 무시, 공백 정규화, 세미콜론/괄호 선택적 허용
   * @param {string} userAnswer - 사용자 입력 답안
   * @param {string[]} correctAnswers - 정답 배열
   * @param {string} answerMode - 채점 모드 ('exact'|'contains_any'|'multiline')
   * @returns {boolean}
   */
  static check(userAnswer, correctAnswers, answerMode = 'exact') {
    if (!userAnswer || !correctAnswers || correctAnswers.length === 0) return false;

    const normalize = (s) => {
      return s.toString()
        .trim()
        .replace(/\s+/g, ' ')        // 연속 공백 → 단일 공백
        .replace(/;$/g, '')           // 끝의 세미콜론 제거
        .replace(/\(\)/g, '()')       // 괄호 정규화
        .toLowerCase();
    };

    const userNorm = normalize(userAnswer);

    if (answerMode === 'contains_any') {
      // 정답 키워드 중 하나라도 포함되면 정답
      return correctAnswers.some(ans => userNorm.includes(normalize(ans)));
    }

    if (answerMode === 'multiline') {
      // 줄바꿈/공백으로 분리된 다중 라인 비교
      const userLines = userAnswer.trim().split(/[\r\n]+/).map(l => l.trim());
      // correctAnswers 중 하나와 일치하면 정답
      return correctAnswers.some(ans => {
        const ansNorm = normalize(ans);
        const userJoined = normalize(userLines.join('\n'));
        return userJoined === ansNorm || normalize(userLines.join(' ')) === ansNorm;
      });
    }

    // exact 모드: 정답 배열 중 하나와 일치
    return correctAnswers.some(ans => normalize(ans) === userNorm);
  }
}
