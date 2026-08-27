// ============================================================
// js/storage.js — LocalStorage 학습 기록 & 오답노트 관리
// ============================================================

const STORAGE_KEY = 'sparring_v1';

export class StorageManager {
  constructor() {
    this.data = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : this._defaultData();
    } catch {
      return this._defaultData();
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }

  _defaultData() {
    return {
      sessions: [],
      wrongNotes: {},  // { questionId: { count, lastWrong, userAnswers } }
      stats: { totalSessions: 0, totalCorrect: 0, totalWrong: 0, bestStreak: 0 }
    };
  }

  /** 세션 결과 저장 */
  saveSession(summary) {
    const session = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...summary
    };
    this.data.sessions.push(session);
    this.data.stats.totalSessions++;
    this.data.stats.totalCorrect += summary.correct;
    this.data.stats.totalWrong += summary.wrong;
    if (summary.maxStreak > this.data.stats.bestStreak) {
      this.data.stats.bestStreak = summary.maxStreak;
    }
    this._save();
    return session;
  }

  /** 오답 기록 추가 */
  addWrongNote(questionId, userAnswer) {
    if (!this.data.wrongNotes[questionId]) {
      this.data.wrongNotes[questionId] = { count: 0, lastWrong: null, userAnswers: [] };
    }
    const note = this.data.wrongNotes[questionId];
    note.count++;
    note.lastWrong = new Date().toISOString();
    note.userAnswers.push(userAnswer);
    // 최대 10개의 오답 이력만 보관
    if (note.userAnswers.length > 10) {
      note.userAnswers = note.userAnswers.slice(-10);
    }
    this._save();
  }

  /** 오답 빈도 높은 문제 ID 목록 반환 (상위 N개) */
  getTopWrongQuestions(limit = 10) {
    const entries = Object.entries(this.data.wrongNotes);
    entries.sort((a, b) => b[1].count - a[1].count);
    return entries.slice(0, limit).map(([id, info]) => ({ id, ...info }));
  }

  /** 전체 통계 반환 */
  getOverallStats() {
    return { ...this.data.stats };
  }

  /** 최근 세션 N개 반환 */
  getRecentSessions(limit = 5) {
    return this.data.sessions.slice(-limit).reverse();
  }

  /** 데이터 초기화 */
  reset() {
    this.data = this._defaultData();
    this._save();
  }
}
