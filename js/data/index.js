// ============================================================
// js/data/index.js — 데이터 통합 로더 및 카테고리/회차 필터링
// (기출 735문항 + 신유형 1,000문항 = 총 1,735문항 마스터 DB)
// ============================================================

import { PYTHON_QUESTIONS, PYTHON_VARIANTS } from './python.js';
import { JAVA_QUESTIONS, JAVA_VARIANTS } from './java.js';
import { SQL_QUESTIONS, SQL_VARIANTS } from './sql.js';
import { LINUX_QUESTIONS, LINUX_VARIANTS } from './linux.js';

import { PYTHON_NEW_QUESTIONS, PYTHON_NEW_VARIANTS } from './python_new.js';
import { JAVA_NEW_QUESTIONS, JAVA_NEW_VARIANTS } from './java_new.js';
import { SQL_NEW_QUESTIONS, SQL_NEW_VARIANTS } from './sql_new.js';
import { LINUX_NEW_QUESTIONS, LINUX_NEW_VARIANTS } from './linux_new.js';

// ─── 1. 전체 기출 원문 통합 (35문항) ───
const ALL_QUESTIONS = [
  ...PYTHON_QUESTIONS,
  ...JAVA_QUESTIONS,
  ...SQL_QUESTIONS,
  ...LINUX_QUESTIONS
];

// ─── 2. 기출 20배수 변형 풀 통합 (700문항) ───
const ALL_VARIANTS = [
  ...PYTHON_VARIANTS,
  ...JAVA_VARIANTS,
  ...SQL_VARIANTS,
  ...LINUX_VARIANTS
];

// ─── 3. 출제위원급 신유형 원문 200제 통합 (50 × 4) ───
const ALL_NEW_QUESTIONS = [
  ...PYTHON_NEW_QUESTIONS,
  ...JAVA_NEW_QUESTIONS,
  ...SQL_NEW_QUESTIONS,
  ...LINUX_NEW_QUESTIONS
];

// ─── 4. 신유형 4배수 변형 풀 800제 통합 (200 × 4) ───
const ALL_NEW_VARIANTS = [
  ...PYTHON_NEW_VARIANTS,
  ...JAVA_NEW_VARIANTS,
  ...SQL_NEW_VARIANTS,
  ...LINUX_NEW_VARIANTS
];

// ─── 5. 신유형 1,000제 마스터 풀 (원문 200 + 변형 800) ───
const ALL_1000_NEW_POOL = [
  ...ALL_NEW_QUESTIONS,
  ...ALL_NEW_VARIANTS
];

// ─── 6. 기출 735제 풀 (원문 35 + 변형 700) ───
const ALL_735_ORIGIN_POOL = [
  ...ALL_QUESTIONS,
  ...ALL_VARIANTS
];

// ─── 7. 전체 1,735문항 통합 마스터 데이터베이스 ───
const ALL_1735_QUESTIONS = [
  ...ALL_735_ORIGIN_POOL,
  ...ALL_1000_NEW_POOL
];

// ─── 변형 문제를 ID로 빠르게 조회하는 맵 ───
const VARIANT_MAP = {};
ALL_VARIANTS.forEach(v => { VARIANT_MAP[v.id] = v; });
ALL_NEW_VARIANTS.forEach(v => { VARIANT_MAP[v.id] = v; });

// ─── 전체 문제를 ID로 빠르게 조회하는 맵 ───
const QUESTION_MAP = {};
ALL_1735_QUESTIONS.forEach(q => { QUESTION_MAP[q.id] = q; });

// ─── 카테고리 정의 ───
const CATEGORIES = [
  { id: 'python', label: '🐍 Python', icon: '🐍', color: '#3776AB' },
  { id: 'java',   label: '☕ Java',   icon: '☕', color: '#ED8B00' },
  { id: 'sql',    label: '🗄️ SQL',    icon: '🗄️', color: '#336791' },
  { id: 'linux',  label: '🐧 Linux',  icon: '🐧', color: '#FCC624' }
];

// ─── 회차 정의 ───
const EXAM_ROUNDS = [
  { id: '신유형',   label: '🚀 출제위원급 신유형 1,000제' },
  { id: '공단예시', label: '📋 공단 예시문제' },
  { id: '2026-1',   label: '📝 2026년 1회차' },
  { id: '2026-2',   label: '📝 2026년 2회차' }
];

// ─── 필터링 유틸리티 함수들 ───

/** 카테고리별 기출 원문 (35제) */
function getQuestionsByCategory(category) {
  return ALL_QUESTIONS.filter(q => q.category === category);
}

/** 카테고리별 신유형 원문 (200제) */
function getNewQuestionsByCategory(category) {
  return ALL_NEW_QUESTIONS.filter(q => q.category === category);
}

/** 카테고리별 신유형 풀세트 (1,000제 중 해당 과목 250제) */
function getNewPoolByCategory(category) {
  if (!category || category === 'all') return ALL_1000_NEW_POOL;
  return ALL_1000_NEW_POOL.filter(q => q.category === category);
}

/** 카테고리별 기출 풀세트 (735제 중 해당 과목) */
function getOriginPoolByCategory(category) {
  if (!category || category === 'all') return ALL_735_ORIGIN_POOL;
  return ALL_735_ORIGIN_POOL.filter(q => q.category === category);
}

/** 카테고리별 마스터 전체 (1,735제 중 해당 과목) */
function getAllQuestionsByCategory(category) {
  if (!category || category === 'all') return ALL_1735_QUESTIONS;
  return ALL_1735_QUESTIONS.filter(q => q.category === category);
}

/** 회차별 필터 */
function getQuestionsByRound(round) {
  if (round === '신유형') return ALL_1000_NEW_POOL;
  return ALL_QUESTIONS.filter(q => q.examRound === round);
}

/** 카테고리 + 회차 복합 필터 */
function getQuestions(category = null, round = null) {
  let result = [...ALL_1735_QUESTIONS];
  if (category) result = result.filter(q => q.category === category);
  if (round) {
    if (round === '신유형') result = result.filter(q => q.examRound === '신유형 예상' || q.examRound === '신유형 변형');
    else result = result.filter(q => q.examRound === round);
  }
  return result;
}

/** 특정 문제의 파생 변형 문제들을 반환 */
function getVariantsForQuestion(questionId) {
  const question = QUESTION_MAP[questionId];
  if (!question || !question.variants) return [];
  return question.variants
    .map(vid => VARIANT_MAP[vid])
    .filter(v => v != null);
}

/** 랜덤 파생 변형 1문항 반환 */
function getRandomVariant(questionId) {
  const variants = getVariantsForQuestion(questionId);
  if (variants.length === 0) return null;
  return variants[Math.floor(Math.random() * variants.length)];
}

/** 전체 문제 수 통계 반환 */
function getStats() {
  return {
    totalOrigin: ALL_QUESTIONS.length,            // 35
    totalOriginVariants: ALL_VARIANTS.length,     // 700
    total735OriginPool: ALL_735_ORIGIN_POOL.length,// 735
    totalNewOrigin: ALL_NEW_QUESTIONS.length,     // 200
    totalNewVariants: ALL_NEW_VARIANTS.length,    // 800
    total1000NewPool: ALL_1000_NEW_POOL.length,   // 1000
    totalMaster: ALL_1735_QUESTIONS.length,       // 1735
    byCategory: CATEGORIES.map(c => {
      const originCnt = ALL_QUESTIONS.filter(q => q.category === c.id).length;
      const originVarCnt = ALL_VARIANTS.filter(v => v.category === c.id).length;
      const newOriginCnt = ALL_NEW_QUESTIONS.filter(q => q.category === c.id).length;
      const newVarCnt = ALL_NEW_VARIANTS.filter(v => v.category === c.id).length;
      return {
        ...c,
        originCount: originCnt,
        originVariantCount: originVarCnt,
        newOriginCount: newOriginCnt,
        newVariantCount: newVarCnt,
        newTotal: newOriginCnt + newVarCnt,       // 250
        originTotal: originCnt + originVarCnt,    // 189 / 231 / 126
        grandTotal: originCnt + originVarCnt + newOriginCnt + newVarCnt
      };
    }),
    byRound: EXAM_ROUNDS.map(r => ({
      ...r,
      count: r.id === '신유형' ? ALL_1000_NEW_POOL.length : ALL_QUESTIONS.filter(q => q.examRound === r.id).length
    }))
  };
}

export {
  ALL_QUESTIONS,
  ALL_VARIANTS,
  ALL_NEW_QUESTIONS,
  ALL_NEW_VARIANTS,
  ALL_1000_NEW_POOL,
  ALL_735_ORIGIN_POOL,
  ALL_1735_QUESTIONS,
  VARIANT_MAP,
  QUESTION_MAP,
  CATEGORIES,
  EXAM_ROUNDS,
  getQuestionsByCategory,
  getNewQuestionsByCategory,
  getNewPoolByCategory,
  getOriginPoolByCategory,
  getAllQuestionsByCategory,
  getQuestionsByRound,
  getQuestions,
  getVariantsForQuestion,
  getRandomVariant,
  getStats
};
