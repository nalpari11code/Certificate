// ============================================================
// js/data/sql.js — SQL 파트 기출 원문 + 파생 변형 풀
// 공단 예시(3) + 2026-1회(4) + 2026-2회(4) = 11문항
// 각 기출 원문당 20개 파생 변형 = 총 220개 변형
// ============================================================

const SQL_QUESTIONS = [

  // ─── [SQL-01] 공단 예시 09번: 와일드카드 박_ ───
  {
    id: "SQL-SAMPLE-09", category: "sql", examRound: "공단예시", originNumber: 9,
    title: "와일드카드 LIKE 패턴 매칭 (박_)",
    code: `SELECT * FROM emp WHERE name LIKE '( ① )';`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "emp 테이블에서 성이 박씨이면서 이름이 1글자인 사람을 찾는 와일드카드 패턴 ①을 쓰시오.", type: "short_text", answer: ["박_"], placeholder: "와일드카드 패턴 입력" }],
    explanation: { trapPoint: "_(언더스코어)는 정확히 1글자, %는 0개 이상의 임의 문자열", onePointTip: "💡 Tip: _는 1글자 고정, %는 글자수 무제한!", description: "성이 '박'이고 이름이 1글자(총 2글자)이므로 '박_' 패턴을 사용합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-S09-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-02] 공단 예시 10번: DROP TABLE CASCADE ───
  {
    id: "SQL-SAMPLE-10", category: "sql", examRound: "공단예시", originNumber: 10,
    title: "테이블 및 연관 조건 연쇄 삭제 (DROP TABLE CASCADE)",
    code: null, codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "test 테이블의 구조와 데이터를 모두 삭제하고, 연관 조건이 있다면 해당 연관 조건까지 모두 삭제하는 SQL 쿼리를 3개의 키워드와 테이블 이름(test)만 사용하여 쓰시오.", type: "short_text", answer: ["DROP TABLE test CASCADE", "DROP TABLE test CASCADE;"], placeholder: "SQL문 입력" }],
    explanation: { trapPoint: "DROP TABLE(구조+데이터 제거) + CASCADE(연쇄 삭제)", onePointTip: "💡 Tip: DROP(테이블 통째 삭제) vs TRUNCATE(데이터만 비우기) vs DELETE(행 단위 삭제)!", description: "DROP TABLE test CASCADE 구문은 테이블과 이를 참조하는 제약조건까지 연쇄 삭제합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-S10-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-03] 공단 예시 11번: NOT IN 서브쿼리 집계 ───
  {
    id: "SQL-SAMPLE-11", category: "sql", examRound: "공단예시", originNumber: 11,
    title: "서브쿼리 NOT IN 필터링 및 SUM 집계",
    code: `-- t1: c1={A,D,F,G}, c2={5,2,3,1}\n-- t2: c1={A,C,D,H}, c2={3,7,6,2}\nSELECT SUM(c2) AS ans FROM t2\nWHERE c1 NOT IN (SELECT c1 FROM t1);`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "위 SQL 쿼리의 실행 결과를 쓰시오. (ans 컬럼의 값)", type: "short_text", answer: ["9"], placeholder: "결과값 입력" }],
    explanation: { trapPoint: "NOT IN으로 t1.c1에 없는 t2 레코드만 필터링. C(7) + H(2) = 9", onePointTip: "💡 Tip: NOT IN 서브쿼리는 서브쿼리 결과에 없는 값만 필터링!", description: "t1.c1={A,D,F,G}. t2에서 c1이 여기에 없는 행은 C(7), H(2). 합계 = 9", traceTable: [{ step: "서브쿼리", vars: { "SELECT c1 FROM t1": "{A, D, F, G}" }}, { step: "NOT IN 필터", vars: { "t2 남은 행": "C(7), H(2)" }}, { step: "SUM", vars: { ans: "7 + 2 = 9" }}] },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-S11-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-04] 2026-1회 01번: EXISTS ───
  {
    id: "SQL-2026-01-01", category: "sql", examRound: "2026-1", originNumber: 1,
    title: "상관 서브쿼리 EXISTS 연산자",
    code: `SELECT COUNT(*) FROM 사원\nWHERE ( ? ) ( SELECT * FROM 수당\nWHERE 수당.사원번호 = 사원.사원번호 );`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "서브쿼리의 행이 존재하는지를 체크해서 개수를 출력한다. 빈칸에 해당하는 명령어를 쓰시오.", type: "short_text", answer: ["EXISTS"], placeholder: "명령어 입력" }],
    explanation: { trapPoint: "EXISTS는 서브쿼리에 결과가 1건이라도 존재하면 TRUE를 반환", onePointTip: "💡 Tip: 행 존재 여부 판별은 EXISTS, 부재 판별은 NOT EXISTS!", description: "상관 서브쿼리의 결과가 존재하는 행만 필터링할 때 EXISTS 연산자를 사용합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0101-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-05] 2026-1회 02번: UNION + COUNT ───
  {
    id: "SQL-2026-01-02", category: "sql", examRound: "2026-1", originNumber: 2,
    title: "UNION 중복 제거 및 COUNT(*) 집계",
    code: `SELECT COUNT(*) FROM (\n  SELECT PM FROM prj1 WHERE REGION = '과천'\n  UNION\n  SELECT PM FROM prj2 WHERE region = '과천'\n);`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "위 SQL을 실행한 결과값(숫자)을 쓰시오.", type: "short_text", answer: ["3"], placeholder: "결과값 입력" }],
    explanation: { trapPoint: "UNION은 중복 레코드를 자동으로 제거하므로 고유값만 카운트됨", onePointTip: "💡 Tip: UNION은 중복 제거(DISTINCT 효과), UNION ALL은 중복 포함!", description: "UNION 연산으로 두 테이블의 합집합에서 중복이 제거되어 3이 반환됩니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0102-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-06] 2026-1회 08번: UPDATE ... SET ───
  {
    id: "SQL-2026-01-08", category: "sql", examRound: "2026-1", originNumber: 8,
    title: "데이터 수정 UPDATE ... SET ... WHERE",
    code: `( A ) 사원 ( B ) 부서 = '배송팀' WHERE 사번 = 1003;`,
    codeLang: "sql",
    questionSubItems: [
      { subId: 1, prompt: "(A) 빈칸에 들어갈 명령어를 쓰시오.", type: "short_text", answer: ["UPDATE"], placeholder: "명령어 입력" },
      { subId: 2, prompt: "(B) 빈칸에 들어갈 명령어를 쓰시오.", type: "short_text", answer: ["SET"], placeholder: "명령어 입력" }
    ],
    explanation: { trapPoint: "DML 수정 기본 구문: UPDATE 테이블 SET 컬럼 = 값 WHERE 조건", onePointTip: "💡 Tip: 데이터 수정은 UPDATE [테이블] SET [컬럼=값]!", description: "기존 데이터를 수정할 때는 UPDATE ... SET 구문을 사용합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0108-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-07] 2026-1회 12번: LIKE 와일드카드 + LENGTH ───
  {
    id: "SQL-2026-01-12", category: "sql", examRound: "2026-1", originNumber: 12,
    title: "LIKE 와일드카드 패턴 및 LENGTH 조건 결합",
    code: `WHERE column LIKE ' ? ' AND LENGTH(column) <= 8;`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "6글자 이상 8글자 이하 문자열이고, 2번째 글자는 '2', 4번째 글자는 'A'인 조건의 와일드카드 패턴을 쓰시오.", type: "short_text", answer: ["_2_A__%"], placeholder: "와일드카드 패턴 입력" }],
    explanation: { trapPoint: "1번째:_ + 2번째:2 + 3번째:_ + 4번째:A + 5~6번째:__ (최소 6자) + 나머지:% (가변)", onePointTip: "💡 Tip: 고정 위치 글자수는 _로 채우고 가변 글자수는 %로 처리!", description: "최소 6글자 보장을 위해 언더스코어 4개와 고정 문자 2개(_2_A__), 그 후 %를 붙여 _2_A__%", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0112-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-08] 2026-2회 02번: IN 서브쿼리 + SUM ───
  {
    id: "SQL-2026-02-02", category: "sql", examRound: "2026-2", originNumber: 2,
    title: "서브쿼리 IN 다중 조건 및 SUM 집계",
    code: `SELECT SUM(점수) AS 결과 FROM T2\nWHERE 등급 IN(\n  SELECT 등급 FROM T1 WHERE 등급 IN('A', 'C')\n);`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "위 SQL문의 실행결과를 쓰시오.", type: "short_text", answer: ["13"], placeholder: "결과값 입력" }],
    explanation: { trapPoint: "T1에서 A, C 등급을 가져와 T2에서 해당 등급의 점수 합산", onePointTip: "💡 Tip: 서브쿼리가 반환하는 다중 행 목록과 일치하는 행을 IN으로 필터링!", description: "T1의 ('A', 'C') 등급과 일치하는 T2 행의 점수들을 SUM하여 13이 도출됩니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0202-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-09] 2026-2회 03번: IS NULL ───
  {
    id: "SQL-2026-02-03", category: "sql", examRound: "2026-2", originNumber: 3,
    title: "NULL 값 비교 연산자 IS NULL",
    code: `SELECT * FROM 사원 WHERE 전화번호 (?) NULL;`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "전화번호가 NULL인 레코드를 검색하기 위해 빈칸에 들어갈 명령어를 쓰시오.", type: "short_text", answer: ["IS"], placeholder: "명령어 입력" }],
    explanation: { trapPoint: "NULL은 = 로 비교할 수 없으며 반드시 IS NULL 연산자 사용", onePointTip: "💡 Tip: NULL 비교는 = NULL이 아니라 무조건 IS NULL / IS NOT NULL!", description: "SQL에서 NULL은 부재를 의미하므로 비교 연산 시 IS 키워드를 사용해야 합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0203-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-10] 2026-2회 04번: LEFT OUTER JOIN ───
  {
    id: "SQL-2026-02-04", category: "sql", examRound: "2026-2", originNumber: 4,
    title: "기준 테이블 전체 출력을 위한 LEFT OUTER JOIN",
    code: `SELECT TEAM.TEAM_ID, TEAM.TEAM_NAME,\n       STADIUM.STADIUM_ID, STADIUM.SEATS\nFROM TEAM (?) OUTER JOIN STADIUM\nON TEAM.TEAM_ID = STADIUM.TEAM_ID;`,
    codeLang: "sql",
    questionSubItems: [{ subId: 1, prompt: "TEAM 테이블을 기준으로 모든 데이터를 출력하려면 빈칸에 들어갈 명령어를 쓰시오.", type: "short_text", answer: ["LEFT", "FULL"], placeholder: "명령어 입력" }],
    explanation: { trapPoint: "FROM절의 왼쪽 테이블(TEAM) 전체를 누락 없이 보존하려면 LEFT JOIN", onePointTip: "💡 Tip: 왼쪽 테이블 기준 전수 보존은 LEFT, 오른쪽 기준은 RIGHT!", description: "TEAM 테이블의 모든 행을 보존하여 조회하기 위해서는 LEFT OUTER JOIN을 사용합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0204-${String.fromCharCode(65+i)}`)
  },

  // ─── [SQL-11] 2026-2회 06번: ROLLBACK / RESTRICT / GRANT ───
  {
    id: "SQL-2026-02-06", category: "sql", examRound: "2026-2", originNumber: 6,
    title: "TCL/DDL/DCL 명령어 매칭 (ROLLBACK, RESTRICT, GRANT)",
    code: null, codeLang: "sql",
    questionSubItems: [
      { subId: 1, prompt: "(1) 비정상적인 종료로 원래 상태로 복구하는 명령어를 쓰시오.", type: "short_text", answer: ["ROLLBACK"], placeholder: "명령어 입력" },
      { subId: 2, prompt: "(2) 다른 개체가 제거할 요소를 참조중이면 제거 작업을 취소하는 명령어를 쓰시오.", type: "short_text", answer: ["RESTRICT"], placeholder: "명령어 입력" },
      { subId: 3, prompt: "(3) 특정 테이블에 접근하는 권한을 부여하는 명령어를 쓰시오.", type: "short_text", answer: ["GRANT"], placeholder: "명령어 입력" }
    ],
    explanation: { trapPoint: "복구: ROLLBACK(TCL), 참조 시 취소: RESTRICT(DDL 옵션), 권한 부여: GRANT(DCL)", onePointTip: "💡 Tip: ROLLBACK(취소/복구), RESTRICT(참조 시 삭제 거부), GRANT(권한 부여)!", description: "(1) ROLLBACK(트랜잭션 취소), (2) RESTRICT(참조 무결성 보호 거부 옵션), (3) GRANT(DCL 권한 부여)", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `SQL-VAR-0206-${String.fromCharCode(65+i)}`)
  }
];

// ═══════════════════════════════════════════════════════════════
// SQL 파생 변형 풀 (Variants Pool) — 11문항 × 20변형 = 220문항
// ═══════════════════════════════════════════════════════════════

function V(id, parentId, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  const q = { id, parentId, category: "sql", title, code, codeLang: codeLang || "sql",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null }
  };
  if (answerMode) { q.questionSubItems[0].answerMode = answerMode; }
  if (multilineAnswer) { q.questionSubItems[0].multilineAnswer = multilineAnswer; }
  return q;
}

const SQL_VARIANTS = [

  // ═══ SQL-SAMPLE-09 변형 (와일드카드 LIKE 패턴) ×20 ═══
  V("SQL-VAR-S09-A","SQL-SAMPLE-09","[변형] 김씨이면서 이름 2글자",`SELECT * FROM emp WHERE name LIKE '( ? )';`,"sql","김씨이면서 이름이 2글자인 사람을 찾는 와일드카드 패턴을 쓰시오.",["김__"],"성 '김' + 이름 2글자 = 전체 3글자 → 김__","💡 언더스코어 1개는 정확히 1문자!","김 + __ = 총 3글자 매칭"),
  V("SQL-VAR-S09-B","SQL-SAMPLE-09","[변형] 이씨로 시작하는 모든 사람",`SELECT * FROM emp WHERE name LIKE '( ? )';`,"sql","이씨로 시작하는 모든 사람(글자수 무제한)을 찾는 패턴을 쓰시오.",["이%"],"이%는 '이'로 시작하는 모든 길이의 문자열 매칭","💡 %는 0개 이상의 임의 문자열!","이%"),
  V("SQL-VAR-S09-C","SQL-SAMPLE-09","[변형] '길'자로 끝나는 3글자 이름",`SELECT * FROM emp WHERE name LIKE '( ? )';`,"sql","'길'자로 끝나는 3글자 이름을 찾는 패턴을 쓰시오.",["__길"],"앞 2글자(__) + 마지막 '길'","💡 __길은 정확히 3글자 매칭!","__길"),
  V("SQL-VAR-S09-D","SQL-SAMPLE-09","[변형] 중간에 '호'가 들어가는 3글자 이름",`SELECT * FROM emp WHERE name LIKE '( ? )';`,"sql","가운데 글자가 '호'인 3글자 이름을 찾는 패턴을 쓰시오.",["_호_"],"_호_는 정확히 3글자 중 가운데가 '호'","💡 _[글자]_ 패턴!","_호_"),
  V("SQL-VAR-S09-E","SQL-SAMPLE-09","[변형] '산'을 포함하는 모든 주소",`SELECT * FROM member WHERE address LIKE '( ? )';`,"sql","주소에 '산'이라는 글자가 포함된 모든 행을 찾는 패턴은?",["%산%"],"%산%는 위치 불문 '산' 포함 여부 검사","💡 %단어%는 포함 검색의 기본!","%산%"),
  V("SQL-VAR-S09-F","SQL-SAMPLE-09","[변형] 이메일 도메인 @gmail.com",`SELECT * FROM user WHERE email LIKE '( ? )';`,"sql","@gmail.com으로 끝나는 이메일을 찾는 패턴은?",["%@gmail.com"],"앞 글자수 무관 + @gmail.com으로 종료","💡 %접미사는 특정 문자열로 끝나는 조건!","%@gmail.com"),
  V("SQL-VAR-S09-G","SQL-SAMPLE-09","[변형] 와일드카드 문자 자체 이스케이프(ESCAPE)",`SELECT * FROM file WHERE name LIKE '%!_%' ESCAPE '!';`,"sql","위 SQL에서 검색하고자 하는 파일명에 반드시 포함된 특수문자는?",["_","언더스코어","밑줄"],"ESCAPE '!'를 통해 !_는 리터럴 언더스코어(_)로 취급됨","💡 ESCAPE 구문으로 와일드카드 문자 자체를 검색!","_"),
  V("SQL-VAR-S09-H","SQL-SAMPLE-09","[변형] 와일드카드 % 자체 검색",`SELECT * FROM item WHERE code LIKE '%#%%' ESCAPE '#';`,"sql","위 SQL에서 검색하고자 하는 문자열에 포함된 특수문자는?",["%","퍼센트"],"#%는 와일드카드가 아닌 문자 % 자체 매칭","💡 ESCAPE 문자 뒤의 %는 리터럴 %!","%"),
  V("SQL-VAR-S09-I","SQL-SAMPLE-09","[변형] NOT LIKE 부정 검색",`SELECT COUNT(*) FROM student WHERE name NOT LIKE '김%';`,"sql","위 SQL이 카운트하는 학생의 조건을 서술하시오.",["김씨가 아닌", "김으로 시작하지 않는", "김"],null,"contains_any","NOT LIKE는 패턴과 일치하지 않는 행 필터링","💡 NOT LIKE는 패턴 불일치 조건!","김씨가 아닌 학생 수"),
  V("SQL-VAR-S09-J","SQL-SAMPLE-09","[변형] 첫 글자가 A 또는 B인 패턴 (정규식/LIKE)",`SELECT * FROM product WHERE code LIKE 'A%' OR code LIKE 'B%';`,"sql","코드 첫 글자가 A 또는 B인 조건을 만족하는 논리 연산자는?",["OR"],"A로 시작하거나 B로 시작하는 조건은 OR로 연결","💡 다중 LIKE 조건은 OR로 연결!","OR"),
  V("SQL-VAR-S09-K","SQL-SAMPLE-09","[변형] 정확히 4글자인 상품코드",`SELECT * FROM goods WHERE code LIKE '( ? )';`,"sql","정확히 4글자로 구성된 코드를 찾는 패턴을 쓰시오.",["____"],"언더스코어 4개로 4글자 고정","💡 ____는 4글자 고정!","____"),
  V("SQL-VAR-S09-L","SQL-SAMPLE-09","[변형] 전화번호 중간 번호 패턴",`SELECT * FROM tel WHERE number LIKE '010-____-%';`,"sql","010- 뒤에 국번 4자리가 오는 패턴을 쓰시오.",["010-____-%"],"010- 뒤 4자리 고정 후 %","💡 고정 길이와 가변 길이의 혼합!","010-____-%"),
  V("SQL-VAR-S09-M","SQL-SAMPLE-09","[변형] 날짜 문자열 2026년 매칭",`SELECT * FROM log WHERE log_date LIKE '2026-%';`,"sql","2026년으로 시작하는 로그를 찾는 패턴은?",["2026-%"],"2026-로 시작하는 모든 문자열","💡 날짜 문자열 검색에도 LIKE 활용!","2026-%"),
  V("SQL-VAR-S09-N","SQL-SAMPLE-09","[변형] 대소문자 구분 ILIKE (PostgreSQL)",`SELECT * FROM user WHERE name ( ? ) 'john%';`,"sql","PostgreSQL에서 대소문자를 구분하지 않고 LIKE 검색을 수행하는 키워드는?",["ILIKE"],"ILIKE는 Case-insensitive LIKE","💡 ILIKE는 대소문자 무시 LIKE!","ILIKE"),
  V("SQL-VAR-S09-O","SQL-SAMPLE-09","[변형] 주민번호 뒷자리 첫 번째 성별(1,3)",`SELECT * FROM citizen WHERE ssn LIKE '______-1%' OR ssn LIKE '______-3%';`,"sql","앞 6자리 생년월일 뒤 성별이 1로 시작하는 패턴은?",["______-1%"],"앞 6자리(언더스코어 6개) + -1%","💡 고정 위치 추출 패턴!","______-1%"),
  V("SQL-VAR-S09-P","SQL-SAMPLE-09","[변형] 공백으로 끝나는 패턴",`SELECT * FROM text WHERE content LIKE '% ';`,"sql","문자열의 마지막 글자가 공백(스페이스)인 패턴을 쓰시오.",["% "],"% 뒤에 스페이스 1개","💡 공백 매칭 패턴!","% "),
  V("SQL-VAR-S09-Q","SQL-SAMPLE-09","[변형] 두 번째 글자가 'B'인 4자리",`SELECT * FROM code WHERE val LIKE '_B__';`,"sql","2번째 글자가 B인 정확히 4자리 코드의 패턴은?",["_B__"],"_ + B + __ = 4자리","💡 _B__","_B__"),
  V("SQL-VAR-S09-R","SQL-SAMPLE-09","[변형] A로 시작하고 Z로 끝나는 문자열",`SELECT * FROM word WHERE term LIKE 'A%Z';`,"sql","A로 시작해서 Z로 끝나는 단어 패턴은?",["A%Z"],"A%Z는 첫 글자 A, 마지막 글자 Z","💡 A%Z","A%Z"),
  V("SQL-VAR-S09-S","SQL-SAMPLE-09","[변형] 단일 문자인 레코드 검색",`SELECT * FROM char_table WHERE col LIKE '_';`,"sql","정확히 1글자만 있는 레코드를 찾는 패턴은?",["_"],"언더스코어 1개로 단일 문자 매칭","💡 _는 1글자!","_"),
  V("SQL-VAR-S09-T","SQL-SAMPLE-09","[변형] 특수문자 ? 검색 이스케이프",`SELECT * FROM qna WHERE title LIKE '%\\?%' ESCAPE '\\';`,"sql","이스케이프 문자 \\를 사용하여 물음표(?)가 포함된 제목을 찾는 패턴은?",["%\\?%"],"\\?로 물음표 이스케이프","💡 %\\?%","%\\?%"),

  // ═══ SQL-SAMPLE-10 변형 (DROP TABLE / DDL / CASCADE) ×20 ═══
  V("SQL-VAR-S10-A","SQL-SAMPLE-10","[변형] TRUNCATE TABLE",`TRUNCATE TABLE emp;`,"sql","테이블의 구조는 남기고 모든 행(데이터)을 즉시 삭제하며 롤백이 불가한 DDL 명령어를 쓰시오.",["TRUNCATE", "TRUNCATE TABLE"],"TRUNCATE TABLE은 데이터만 완전 삭제하고 구조 보존","💡 TRUNCATE는 DDL로 롤백 불가, DELETE는 DML로 롤백 가능!","TRUNCATE TABLE"),
  V("SQL-VAR-S10-B","SQL-SAMPLE-10","[변형] DELETE FROM",`DELETE FROM emp WHERE dept = 'SALES';`,"sql","조건에 맞는 특정 행만 삭제할 수 있는 DML 명령어를 쓰시오.",["DELETE", "DELETE FROM"],"DELETE는 WHERE절 조건 삭제 가능한 DML","💡 행 단위 삭제 DML은 DELETE!","DELETE"),
  V("SQL-VAR-S10-C","SQL-SAMPLE-10","[변형] ALTER TABLE ADD 컬럼",`ALTER TABLE emp ( ? ) email VARCHAR(50);`,"sql","테이블에 새로운 컬럼을 추가할 때 빈칸에 들어갈 키워드를 쓰시오.",["ADD"],"컬럼 추가는 ALTER TABLE 테이블명 ADD 컬럼명 타입;","💡 컬럼 추가는 ADD, 수정은 MODIFY/ALTER, 삭제는 DROP!","ADD"),
  V("SQL-VAR-S10-D","SQL-SAMPLE-10","[변형] ALTER TABLE DROP COLUMN",`ALTER TABLE emp ( ? ) COLUMN age;`,"sql","테이블에서 특정 컬럼을 삭제할 때 빈칸에 들어갈 키워드를 쓰시오.",["DROP"],"컬럼 삭제는 ALTER TABLE 테이블명 DROP COLUMN 컬럼명;","💡 컬럼 삭제는 DROP COLUMN!","DROP"),
  V("SQL-VAR-S10-E","SQL-SAMPLE-10","[변형] ALTER TABLE MODIFY/ALTER COLUMN",`ALTER TABLE emp ( ? ) name VARCHAR(100);`,"sql","기존 컬럼의 데이터 타입을 수정할 때 Oracle/MySQL에서 쓰이는 키워드는?",["MODIFY", "ALTER"],"컬럼 수정 키워드 MODIFY","💡 컬럼 수정은 MODIFY (Oracle/MySQL)!","MODIFY"),
  V("SQL-VAR-S10-F","SQL-SAMPLE-10","[변형] RENAME TABLE",`RENAME TABLE old_emp ( ? ) new_emp;`,"sql","테이블명을 변경할 때 쓰이는 키워드는?",["TO"],"RENAME TABLE 이전명 TO 새이름;","💡 RENAME 이전명 TO 새이름!","TO"),
  V("SQL-VAR-S10-G","SQL-SAMPLE-10","[변형] CREATE VIEW 뷰 생성",`CREATE ( ? ) v_emp AS SELECT * FROM emp WHERE dept = 10;`,"sql","가상 테이블(Virtual Table)을 생성하는 DDL 객체 키워드를 쓰시오.",["VIEW"],"가상 테이블은 VIEW","💡 CREATE VIEW 뷰이름 AS SELECT ...!","VIEW"),
  V("SQL-VAR-S10-H","SQL-SAMPLE-10","[변형] DROP VIEW",`DROP ( ? ) v_emp;`,"sql","뷰 객체를 삭제하는 명령 키워드는?",["VIEW"],"뷰 삭제는 DROP VIEW","💡 DROP VIEW 뷰명;","VIEW"),
  V("SQL-VAR-S10-I","SQL-SAMPLE-10","[변형] CREATE INDEX 인덱스 생성",`CREATE ( ? ) idx_emp_name ON emp(name);`,"sql","검색 성능 향상을 위한 인덱스를 생성하는 키워드를 쓰시오.",["INDEX"],"인덱스 생성은 CREATE INDEX","💡 CREATE INDEX 인덱스명 ON 테이블(컬럼);","INDEX"),
  V("SQL-VAR-S10-J","SQL-SAMPLE-10","[변형] UNIQUE 인덱스 생성",`CREATE ( ? ) INDEX idx_email ON user(email);`,"sql","중복 값을 허용하지 않는 인덱스를 생성할 때 붙이는 키워드는?",["UNIQUE"],"고유 인덱스는 CREATE UNIQUE INDEX","💡 UNIQUE 제약/인덱스는 중복 불허!","UNIQUE"),
  V("SQL-VAR-S10-K","SQL-SAMPLE-10","[변형] DROP TABLE RESTRICT",`DROP TABLE parent ( ? );`,"sql","자식 테이블이 참조하고 있으면 삭제를 중단/거부하는 삭제 옵션 키워드는?",["RESTRICT"],"RESTRICT는 참조 중이면 삭제 거부","💡 CASCADE는 연쇄 삭제, RESTRICT는 삭제 거절!","RESTRICT"),
  V("SQL-VAR-S10-L","SQL-SAMPLE-10","[변형] ON DELETE CASCADE 외래키 옵션",`FOREIGN KEY (dept_id) REFERENCES dept(id) ON DELETE ( ? );`,"sql","부모 행 삭제 시 연결된 자식 행도 함께 자동 삭제되도록 하는 외래키 옵션은?",["CASCADE"],"ON DELETE CASCADE는 연쇄 삭제","💡 ON DELETE CASCADE로 참조 무결성 자동 유지!","CASCADE"),
  V("SQL-VAR-S10-M","SQL-SAMPLE-10","[변형] ON DELETE SET NULL 외래키 옵션",`FOREIGN KEY (mgr_id) REFERENCES emp(id) ON DELETE SET ( ? );`,"sql","부모 행 삭제 시 자식 외래키 값을 NULL로 변경하는 옵션은?",["NULL"],"ON DELETE SET NULL","💡 ON DELETE SET NULL은 부모 삭제 시 NULL로 치환!","NULL"),
  V("SQL-VAR-S10-N","SQL-SAMPLE-10","[변형] PRIMARY KEY 기본키 제약조건",`CREATE TABLE t ( id INT ( ? ) KEY );`,"sql","유일성과 NOT NULL을 동시에 만족하는 기본키 제약조건 키워드는?",["PRIMARY"],"기본키 제약조건 PRIMARY KEY","💡 PRIMARY KEY = UNIQUE + NOT NULL!","PRIMARY"),
  V("SQL-VAR-S10-O","SQL-SAMPLE-10","[변형] FOREIGN KEY 외래키 제약조건",`CREATE TABLE orders ( user_id INT, ( ? ) KEY (user_id) REFERENCES user(id) );`,"sql","다른 테이블을 참조하는 외래키 제약조건 키워드를 쓰시오.",["FOREIGN"],"외래키 제약조건 FOREIGN KEY","💡 FOREIGN KEY (컬럼) REFERENCES 부모테이블(컬럼)!","FOREIGN"),
  V("SQL-VAR-S10-P","SQL-SAMPLE-10","[변형] CHECK 제약조건",`CREATE TABLE emp ( salary INT ( ? ) (salary >= 0) );`,"sql","컬럼 값의 유효 범위를 제한하는 제약조건 키워드를 쓰시오.",["CHECK"],"값의 범위 조건 제한은 CHECK","💡 CHECK (조건식)으로 데이터 유효성 검증!","CHECK"),
  V("SQL-VAR-S10-Q","SQL-SAMPLE-10","[변형] DEFAULT 기본값 지정",`CREATE TABLE board ( views INT ( ? ) 0 );`,"sql","값을 지정하지 않았을 때 자동으로 삽입될 기본값을 선언하는 키워드는?",["DEFAULT"],"기본값 지정 키워드 DEFAULT","💡 DEFAULT [기본값]!","DEFAULT"),
  V("SQL-VAR-S10-R","SQL-SAMPLE-10","[변형] NOT NULL 제약조건",`CREATE TABLE member ( name VARCHAR(20) ( ? ) NULL );`,"sql","NULL 값을 허용하지 않는 무결성 제약조건 키워드는?",["NOT"],"NULL 불허는 NOT NULL","💡 NOT NULL 제약조건!","NOT"),
  V("SQL-VAR-S10-S","SQL-SAMPLE-10","[변형] DROP SEQUENCE 시퀀스 삭제",`DROP ( ? ) seq_order;`,"sql","자동 증가 번호를 생성하는 시퀀스 객체를 삭제하는 키워드는?",["SEQUENCE"],"시퀀스 삭제는 DROP SEQUENCE","💡 DROP SEQUENCE 시퀀스명;","SEQUENCE"),
  V("SQL-VAR-S10-T","SQL-SAMPLE-10","[변형] CREATE SCHEMA 스키마 생성",`CREATE ( ? ) hr_schema;`,"sql","데이터베이스 내 논리적 구조 영역을 생성하는 DDL 키워드는?",["SCHEMA"],"스키마 생성은 CREATE SCHEMA","💡 CREATE SCHEMA 스키마명;","SCHEMA"),

  // ═══ SQL-SAMPLE-11 변형 (NOT IN / IN 서브쿼리 집계) ×20 ═══
  V("SQL-VAR-S11-A","SQL-SAMPLE-11","[변형] IN으로 교체 시 결과",`-- t1: c1={A,D,F,G}, c2={5,2,3,1}\n-- t2: c1={A,C,D,H}, c2={3,7,6,2}\nSELECT SUM(c2) AS ans FROM t2 WHERE c1 IN (SELECT c1 FROM t1);`,"sql","위 SQL의 실행 결과를 쓰시오.",["9"],"t2에서 c1이 {A,D}인 행의 c2 합: 3 + 6 = 9","💡 IN은 일치하는 행 선택!","A(3) + D(6) = 9"),
  V("SQL-VAR-S11-B","SQL-SAMPLE-11","[변형] COUNT 집계",`-- t1: c1={A,D,F,G}\n-- t2: c1={A,C,D,H}\nSELECT COUNT(*) FROM t2 WHERE c1 NOT IN (SELECT c1 FROM t1);`,"sql","위 SQL의 실행 결과를 쓰시오.",["2"],"t2에서 t1에 없는 행은 C, H 총 2개","💡 NOT IN 만족 행의 개수!","2개 (C, H)"),
  V("SQL-VAR-S11-C","SQL-SAMPLE-11","[변형] MAX 집계",`-- t1: c1={A,D,F,G}\n-- t2: c1={A,C,D,H}, c2={3,7,6,2}\nSELECT MAX(c2) FROM t2 WHERE c1 NOT IN (SELECT c1 FROM t1);`,"sql","위 SQL의 실행 결과를 쓰시오.",["7"],"t2의 C(7), H(2) 중 최댓값 7","💡 MAX(c2) = 7!","7"),
  V("SQL-VAR-S11-D","SQL-SAMPLE-11","[변형] MIN 집계",`-- t1: c1={A,D,F,G}\n-- t2: c1={A,C,D,H}, c2={3,7,6,2}\nSELECT MIN(c2) FROM t2 WHERE c1 NOT IN (SELECT c1 FROM t1);`,"sql","위 SQL의 실행 결과를 쓰시오.",["2"],"t2의 C(7), H(2) 중 최솟값 2","💡 MIN(c2) = 2!","2"),
  V("SQL-VAR-S11-E","SQL-SAMPLE-11","[변형] AVG 집계",`-- t1: c1={A,D,F,G}\n-- t2: c1={A,C,D,H}, c2={3,8,6,2}\nSELECT AVG(c2) FROM t2 WHERE c1 NOT IN (SELECT c1 FROM t1);`,"sql","위 SQL의 실행 결과를 쓰시오. (C의 c2=8, H의 c2=2)",["5"],"C(8) + H(2) = 10 / 2 = 5","💡 AVG = 합계 / 개수!","5"),
  V("SQL-VAR-S11-F","SQL-SAMPLE-11","[변형] 서브쿼리에 NULL 포함 시 NOT IN 공집합 함정",`-- t1: c1={1, 2, NULL}\n-- t2: c1={1, 3, 4}\nSELECT COUNT(*) FROM t2 WHERE c1 NOT IN (SELECT c1 FROM t1);`,"sql","서브쿼리 결과에 NULL이 포함된 경우 위 SQL의 실행 결과(카운트)를 쓰시오.",["0"],"NOT IN 서브쿼리에 NULL이 있으면 전체가 UNKNOWN이 되어 0건 반환","💡 NOT IN 서브쿼리에 NULL이 포함되면 결과는 무조건 0건(공집합)!","0"),
  V("SQL-VAR-S11-G","SQL-SAMPLE-11","[변형] NOT EXISTS로 변환",`SELECT SUM(t2.c2) FROM t2 WHERE NOT EXISTS (SELECT 1 FROM t1 WHERE t1.c1 = t2.c1);`,"sql","위 SQL은 NOT IN과 논리적으로 동일한 연산을 수행한다. NULL에 안전한 이 서브쿼리 연산자는?",["NOT EXISTS"],"NOT EXISTS는 NULL에 영향을 받지 않고 안전하게 처리","💡 NULL 처리에 안전한 NOT EXISTS!","NOT EXISTS"),
  V("SQL-VAR-S11-H","SQL-SAMPLE-11","[변형] ALL 연산자 비교",`-- t1: c2={2, 3, 5}\nSELECT * FROM t2 WHERE c2 > ALL (SELECT c2 FROM t1);`,"sql","위 WHERE 조건은 t2.c2가 서브쿼리의 어떤 값보다 커야 하는가?",["최댓값", "5", "모든", "all"],null,"contains_any","> ALL은 서브쿼리의 최댓값보다 커야 참","💡 > ALL은 모든 값보다 큼(즉 MAX보다 큼)!","최댓값(5)보다 큼"),
  V("SQL-VAR-S11-I","SQL-SAMPLE-11","[변형] ANY/SOME 연산자 비교",`-- t1: c2={2, 3, 5}\nSELECT * FROM t2 WHERE c2 > ANY (SELECT c2 FROM t1);`,"sql","위 WHERE 조건은 t2.c2가 서브쿼리의 어떤 값보다 크면 참인가?",["최솟값", "2", "하나라도", "any"],null,"contains_any","> ANY는 서브쿼리의 최솟값(2)보다 하나라도 크면 참","💡 > ANY는 최솟값(MIN)보다 크면 참!","최솟값(2)보다 큼"),
  V("SQL-VAR-S11-J","SQL-SAMPLE-11","[변형] 스칼라 서브쿼리(Scalar Subquery)",`SELECT name, (SELECT dept_name FROM dept WHERE dept.id = emp.dept_id) FROM emp;`,"sql","SELECT 절에 위치하여 단일 행, 단일 열을 반환하는 서브쿼리의 명칭은?",["스칼라", "스칼라 서브쿼리", "Scalar"],"SELECT 절의 서브쿼리는 스칼라 서브쿼리","💡 SELECT 절의 서브쿼리 = 스칼라 서브쿼리!","스칼라 서브쿼리"),
  V("SQL-VAR-S11-K","SQL-SAMPLE-11","[변형] 인라인 뷰(Inline View)",`SELECT * FROM (SELECT * FROM emp WHERE salary >= 3000) AS high_sal;`,"sql","FROM 절에 위치하여 가상의 동적 테이블 역할을 하는 서브쿼리의 명칭은?",["인라인 뷰", "인라인뷰", "Inline View"],"FROM 절의 서브쿼리는 인라인 뷰","💡 FROM 절의 서브쿼리 = 인라인 뷰(Inline View)!","인라인 뷰"),
  V("SQL-VAR-S11-L","SQL-SAMPLE-11","[변형] 중첩 서브쿼리(Nested Subquery)",`SELECT * FROM emp WHERE salary > (SELECT AVG(salary) FROM emp);`,"sql","WHERE 절에 위치하여 조건을 필터링하는 일반적인 서브쿼리의 명칭은?",["중첩 서브쿼리", "중첩서브쿼리", "서브쿼리"],"WHERE/HAVING 절의 서브쿼리는 중첩 서브쿼리","💡 WHERE/HAVING 절 서브쿼리 = 중첩 서브쿼리!","중첩 서브쿼리"),
  V("SQL-VAR-S11-M","SQL-SAMPLE-11","[변형] HAVING 절 서브쿼리",`SELECT dept_id, AVG(salary) FROM emp GROUP BY dept_id HAVING AVG(salary) > (SELECT AVG(salary) FROM emp);`,"sql","전체 평균 급여보다 높은 부서만 추출하기 위해 서브쿼리가 위치한 절은?",["HAVING", "HAVING절"],"그룹 집계 조건 필터링 절은 HAVING","💡 그룹 조건은 HAVING 절에 서브쿼리 사용!","HAVING"),
  V("SQL-VAR-S11-N","SQL-SAMPLE-11","[변형] 다중 컬럼 서브쿼리",`SELECT * FROM emp WHERE (dept_id, job) IN (SELECT dept_id, job FROM target);`,"sql","서브쿼리에서 2개 이상의 컬럼을 쌍으로 비교하는 방식의 명칭은?",["다중 컬럼", "다중컬럼", "다중열"],"다중 열(컬럼) 서브쿼리","💡 (A, B) IN (SELECT A, B ...) = 다중 컬럼 서브쿼리!","다중 컬럼 서브쿼리"),
  V("SQL-VAR-S11-O","SQL-SAMPLE-11","[변형] 단일 행 비교 연산자 에러",`SELECT * FROM emp WHERE salary = (SELECT salary FROM emp WHERE dept = 10);`,"sql","서브쿼리 결과가 2건 이상일 때 '=' 단일 행 비교 시 발생하는 에러 원인은?",["다중 행", "다중행", "2건", "여러 행"],null,"contains_any","단일 행 연산자(=)에 다중 행이 반환되면 런타임 에러","💡 다중 행 서브쿼리는 IN, ANY, ALL을 사용해야 함!","다중 행 반환 에러"),
  V("SQL-VAR-S11-P","SQL-SAMPLE-11","[변형] 서브쿼리 ORDER BY 정렬 제한",`SELECT * FROM emp WHERE id IN (SELECT id FROM dept ORDER BY name);`,"sql","일반적인 서브쿼리 내부에서 무의미하여 DBMS에 따라 제한되는 절은?",["ORDER BY", "ORDER BY절"],"서브쿼리 내부 ORDER BY 절","💡 서브쿼리 내부 정렬은 인라인뷰 ROWNUM 등이 아니면 무의미!","ORDER BY"),
  V("SQL-VAR-S11-Q","SQL-SAMPLE-11","[변형] 상관 서브쿼리(Correlated Subquery)",`SELECT e.name FROM emp e WHERE e.salary > (SELECT AVG(salary) FROM emp WHERE dept = e.dept);`,"sql","메인 쿼리의 컬럼(e.dept)을 서브쿼리 내부에서 참조하는 서브쿼리의 명칭은?",["상관", "상관 서브쿼리", "상관서브쿼리", "Correlated"],"외부 쿼리와 연관된 상관 서브쿼리","💡 외부 쿼리의 행마다 반복 실행되는 상관 서브쿼리!","상관 서브쿼리"),
  V("SQL-VAR-S11-R","SQL-SAMPLE-11","[변형] WITH 절 공통 테이블 표현식 (CTE)",`( ? ) DeptAvg AS (SELECT dept, AVG(sal) as avgsal FROM emp GROUP BY dept) SELECT * FROM DeptAvg;`,"sql","임시 명명된 결과 셋(CTE)을 정의하는 키워드를 쓰시오.",["WITH"],"공통 테이블 표현식 WITH 절","💡 WITH 임시테이블명 AS (SELECT ...) 문법!","WITH"),
  V("SQL-VAR-S11-S","SQL-SAMPLE-11","[변형] SELECT 1 관용구 in EXISTS",`SELECT * FROM member m WHERE EXISTS (SELECT ( ? ) FROM orders o WHERE o.member_id = m.id);`,"sql","EXISTS 서브쿼리에서 데이터 전송 비용을 줄이기 위해 관용적으로 SELECT 절에 넣는 상수는?",["1"],"SELECT 1은 행 존재 여부만 체크하는 관용구","💡 EXISTS는 SELECT 1을 쓰는 것이 관례!","1"),
  V("SQL-VAR-S11-T","SQL-SAMPLE-11","[변형] NOT IN 서브쿼리 단일 행",`SELECT * FROM t2 WHERE c1 NOT IN ('A', 'D');`,"sql","리터럴 목록 ('A', 'D')을 제외한 t2의 C(7), H(2)의 c2 합계는?",["9"],"7 + 2 = 9","💡 리터럴 NOT IN 필터링!","9"),

  // ═══ SQL-2026-01-01 변형 (EXISTS / 상관 서브쿼리) ×20 ═══
  V("SQL-VAR-0101-A","SQL-2026-01-01","[변형] NOT EXISTS 부재 조건",`SELECT COUNT(*) FROM 사원 WHERE ( ? ) ( SELECT * FROM 수당 WHERE 수당.사원번호 = 사원.사원번호 );`,"sql","수당이 존재하지 않는 사원 수를 카운트하기 위한 빈칸의 키워드는?",["NOT EXISTS"],"수당이 없는 사원은 NOT EXISTS","💡 행이 없음을 검사할 때는 NOT EXISTS!","NOT EXISTS"),
  V("SQL-VAR-0101-B","SQL-2026-01-01","[변형] EXISTS 반환 타입",`SELECT * FROM 사원 WHERE EXISTS (SELECT 1 FROM 부서 WHERE 사원.부서코드 = 부서.코드);`,"sql","EXISTS 연산자가 반환하는 논리 데이터 타입은?",["BOOLEAN", "불리언", "참거짓", "bool"],"EXISTS는 TRUE / FALSE의 boolean 반환","💡 EXISTS의 결과는 TRUE or FALSE!","BOOLEAN"),
  V("SQL-VAR-0101-C","SQL-2026-01-01","[변형] EXISTS와 IN의 동일 쿼리 변환",`SELECT * FROM 사원 WHERE 사원번호 ( ? ) (SELECT 사원번호 FROM 수당);`,"sql","EXISTS와 동일한 결과를 내기 위해 빈칸에 들어갈 연산자는?",["IN"],"WHERE 사원번호 IN (SELECT ...)","💡 EXISTS는 IN으로 상호 변환 가능!","IN"),
  V("SQL-VAR-0101-D","SQL-2026-01-01","[변형] NOT EXISTS와 LEFT JOIN NULL 검사",`SELECT COUNT(*) FROM 사원 LEFT JOIN 수당 ON 사원.사원번호 = 수당.사원번호 WHERE 수당.사원번호 ( ? ) NULL;`,"sql","NOT EXISTS와 동일하게 수당 없는 사원을 찾는 빈칸의 연산자는?",["IS"],"LEFT JOIN 후 수당.사원번호 IS NULL","💡 LEFT JOIN + IS NULL = NOT EXISTS 효과!","IS"),
  V("SQL-VAR-0101-E","SQL-2026-01-01","[변형] EXISTS 서브쿼리의 컬럼 무의미성",`SELECT * FROM emp WHERE EXISTS (SELECT ( ? ) FROM dept WHERE emp.dept_id = dept.id);`,"sql","EXISTS에서는 SELECT 뒤에 컬럼명, 1, NULL 중 무엇이 와도 결과가 동일하다. (O/X)",["O"],"EXISTS는 행의 존재 여부(카디널리티 > 0)만 확인하므로 SELECT 항목은 무관","💡 EXISTS는 SELECT 항목과 무관하게 존재 여부만 체크!","'O'"),
  V("SQL-VAR-0101-F","SQL-2026-01-01","[변형] 다중 테이블 EXISTS",`SELECT * FROM 고객 c WHERE EXISTS (SELECT 1 FROM 주문 o WHERE o.고객id = c.id AND o.금액 >= 100000);`,"sql","위 SQL이 조회하는 대상 고객의 조건을 서술하시오.",["10만", "100000", "주문", "이상"],null,"contains_any","10만원 이상 주문한 내역이 존재하는 고객","💡 조건부 주문 이력 존재 고객 필터링!","10만원 이상 주문 고객"),
  V("SQL-VAR-0101-G","SQL-2026-01-01","[변형] 상관 서브쿼리 동작 원리",`SELECT * FROM emp e WHERE EXISTS (SELECT 1 FROM proj p WHERE p.emp_id = e.id);`,"sql","상관 서브쿼리는 메인 쿼리의 몇 개 행마다 실행되는가?",["각", "매", "모든", "1개", "행마다"],null,"contains_any","상관 서브쿼리는 외부 쿼리의 각 행(row)마다 반복 실행됨","💡 외부 쿼리의 매 행마다 1회씩 실행!","각 행마다"),
  V("SQL-VAR-0101-H","SQL-2026-01-01","[변형] 2단계 중첩 EXISTS",`SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.a_id = A.id AND EXISTS (SELECT 1 FROM C WHERE C.b_id = B.id));`,"sql","A-B-C 연관 관계에서 C까지 존재하는 A를 찾는 쿼리에서 사용된 중첩 연산자는?",["EXISTS"],"중첩 EXISTS 연산자","💡 계층적 존재 검증 중첩 EXISTS!","EXISTS"),
  V("SQL-VAR-0101-I","SQL-2026-01-01","[변형] NOT EXISTS를 이용한 차집합 구현",`SELECT c1 FROM t1 WHERE NOT EXISTS (SELECT 1 FROM t2 WHERE t2.c1 = t1.c1);`,"sql","위 SQL은 집합 연산 중 어떤 집합(합/교/차)을 구하는 것인가?",["차집합", "차"],"t1 - t2 차집합 연산","💡 NOT EXISTS = 차집합(MINUS / EXCEPT)!","차집합"),
  V("SQL-VAR-0101-J","SQL-2026-01-01","[변형] EXISTS를 이용한 교집합 구현",`SELECT c1 FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE t2.c1 = t1.c1);`,"sql","위 SQL은 집합 연산 중 어떤 집합(합/교/차)을 구하는 것인가?",["교집합", "교"],"t1 ∩ t2 교집합 연산","💡 EXISTS = 교집합(INTERSECT)!","교집합"),
  V("SQL-VAR-0101-K","SQL-2026-01-01","[변형] EXISTS 조기 종료(Short-circuit)",`SELECT * FROM emp WHERE EXISTS (SELECT 1 FROM audit);`,"sql","audit 테이블에 1건이라도 데이터가 있으면 전체 emp가 출력되는가? (O/X)",["O"],"상관조건이 없는 비상관 EXISTS는 1건이라도 있으면 전체 참","💡 비상관 EXISTS는 테이블 존재 여부 즉시 판별!","'O'"),
  V("SQL-VAR-0101-L","SQL-2026-01-01","[변형] ROWNUM/LIMIT과 EXISTS 성능",`SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.id = A.id);`,"sql","EXISTS는 일치하는 행을 몇 개 찾는 순간 서브쿼리 탐색을 종료하는가?",["1", "1개", "하나"],"1건만 발견하면 즉시 TRUE를 반환하고 서브쿼리 종료","💡 1건 발견 시 즉시 종료되는 Short-circuit Evaluation!","1개"),
  V("SQL-VAR-0101-M","SQL-2026-01-01","[변형] CASE WHEN EXISTS",`SELECT name, CASE WHEN EXISTS (SELECT 1 FROM orders WHERE orders.user_id = user.id) THEN '구매자' ELSE '미구매자' END FROM user;`,"sql","CASE WHEN 구문과 EXISTS를 결합하여 분류할 때 쓰이는 키워드는?",["EXISTS"],"CASE WHEN EXISTS (...) THEN ...","💡 조건부 라벨링에 EXISTS 활용!","EXISTS"),
  V("SQL-VAR-0101-N","SQL-2026-01-01","[변형] UPDATE WHERE EXISTS",`UPDATE member m SET is_active = 'Y' WHERE ( ? ) (SELECT 1 FROM login_log l WHERE l.member_id = m.id);`,"sql","로그인 기록이 있는 회원의 상태를 갱신할 때 쓰는 연산자는?",["EXISTS"],"UPDATE ... WHERE EXISTS","💡 조건부 일괄 수정에 EXISTS 활용!","EXISTS"),
  V("SQL-VAR-0101-O","SQL-2026-01-01","[변형] DELETE WHERE NOT EXISTS",`DELETE FROM temp_user WHERE ( ? ) (SELECT 1 FROM real_user r WHERE r.id = temp_user.id);`,"sql","실제 유저에 존재하지 않는 임시 유저를 삭제할 때 쓰는 연산자는?",["NOT EXISTS"],"DELETE ... WHERE NOT EXISTS","💡 고아 레코드 정리에 NOT EXISTS 사용!","NOT EXISTS"),
  V("SQL-VAR-0101-P","SQL-2026-01-01","[변형] 서브쿼리 내 COUNT(*) > 0 vs EXISTS",`SELECT * FROM A WHERE (SELECT COUNT(*) FROM B WHERE B.id = A.id) > 0;`,"sql","위 쿼리는 모든 B를 카운트하므로 1건만 찾고 멈추는 ( ? )보다 성능이 느리다.",["EXISTS"],"COUNT(*) > 0 대신 EXISTS 사용 권장","💡 성능상 COUNT(*) > 0보다 EXISTS가 우수!","EXISTS"),
  V("SQL-VAR-0101-Q","SQL-2026-01-01","[변형] EXISTS와 그룹함수",`SELECT * FROM dept d WHERE EXISTS (SELECT AVG(sal) FROM emp e WHERE e.dept_id = d.id HAVING AVG(sal) >= 5000);`,"sql","HAVING 조건 만족 부서만 필터링하는 연산자는?",["EXISTS"],"HAVING과 결합된 EXISTS","💡 집계 조건을 만족하는 행 존재 검증!","EXISTS"),
  V("SQL-VAR-0101-R","SQL-2026-01-01","[변형] EXISTS 내 NULL 값 행",`-- t: col={NULL}\nSELECT * FROM dual WHERE EXISTS (SELECT * FROM t);`,"sql","NULL 값 단 1개만 저장된 테이블에 대해 EXISTS는 TRUE인가 FALSE인가?",["TRUE", "참"],"NULL도 1개의 유효한 행(Row)이므로 TRUE","💡 NULL 값만 있는 행도 존재(Row count = 1)하므로 TRUE!","TRUE"),
  V("SQL-VAR-0101-S","SQL-2026-01-01","[변형] 빈 테이블에 대한 NOT EXISTS",`-- empty_table: 데이터 0건\nSELECT COUNT(*) FROM member WHERE NOT EXISTS (SELECT 1 FROM empty_table);`,"sql","empty_table이 비어있을 때 member(100건)의 결과 카운트는?",["100"],"서브쿼리가 공집합이므로 NOT EXISTS는 항상 TRUE → 전체 100건","💡 서브쿼리가 비어있으면 NOT EXISTS는 무조건 참!","100"),
  V("SQL-VAR-0101-T","SQL-2026-01-01","[변형] 복합 키 상관 EXISTS",`SELECT * FROM A WHERE EXISTS (SELECT 1 FROM B WHERE B.k1 = A.k1 AND B.k2 = A.k2);`,"sql","2개 이상의 컬럼을 복합 조건으로 바인딩하는 연산자는?",["EXISTS"],"복합키 상관 서브쿼리 EXISTS","💡 다중 컬럼 바인딩 EXISTS!","EXISTS"),

  // ═══ SQL-2026-01-02 변형 (UNION / 집합 연산) ×20 ═══
  V("SQL-VAR-0102-A","SQL-2026-01-02","[변형] UNION ALL 중복 포함",`-- t1: {A, B, C}\n-- t2: {B, C, D}\nSELECT COUNT(*) FROM (SELECT col FROM t1 UNION ALL SELECT col FROM t2);`,"sql","위 SQL의 실행 결과를 쓰시오.",["6"],"UNION ALL은 중복 제거 없이 3 + 3 = 6","💡 UNION ALL은 중복을 포함한 단순 결합!","6"),
  V("SQL-VAR-0102-B","SQL-2026-01-02","[변형] UNION 중복 제거",`-- t1: {A, B, C}\n-- t2: {B, C, D}\nSELECT COUNT(*) FROM (SELECT col FROM t1 UNION SELECT col FROM t2);`,"sql","위 SQL의 실행 결과를 쓰시오.",["4"],"중복 제거 후 {A, B, C, D} 총 4개","💡 UNION은 중복 제거 합집합!","4"),
  V("SQL-VAR-0102-C","SQL-2026-01-02","[변형] INTERSECT 교집합",`-- t1: {A, B, C}\n-- t2: {B, C, D}\nSELECT COUNT(*) FROM (SELECT col FROM t1 ( ? ) SELECT col FROM t2);`,"sql","두 쿼리의 공통된 행(B, C 총 2건)만 추출하는 집합 연산자는?",["INTERSECT"],"교집합 연산자는 INTERSECT","💡 교집합은 INTERSECT!","INTERSECT"),
  V("SQL-VAR-0102-D","SQL-2026-01-02","[변형] MINUS / EXCEPT 차집합",`-- t1: {A, B, C}\n-- t2: {B, C, D}\nSELECT col FROM t1 ( ? ) SELECT col FROM t2;`,"sql","Oracle에서 t1에는 있고 t2에는 없는 행(A)을 구하는 차집합 연산자는?",["MINUS"],"Oracle 차집합은 MINUS (표준/PostgreSQL은 EXCEPT)","💡 Oracle 차집합은 MINUS, 표준 SQL은 EXCEPT!","MINUS"),
  V("SQL-VAR-0102-E","SQL-2026-01-02","[변형] EXCEPT 차집합 표준 키워드",`SELECT col FROM t1 ( ? ) SELECT col FROM t2;`,"sql","SQL 표준 및 PostgreSQL에서 쓰이는 차집합 연산자 키워드는?",["EXCEPT"],"표준 SQL 차집합은 EXCEPT","💡 표준 차집합 키워드는 EXCEPT!","EXCEPT"),
  V("SQL-VAR-0102-F","SQL-2026-01-02","[변형] 집합 연산 시 컬럼 수 불일치 에러",`SELECT id, name FROM t1 UNION SELECT id FROM t2;`,"sql","위 SQL 실행 시 오류가 발생하는 원인을 서술하시오.",["컬럼 수", "열 수", "개수", "불일치"],null,"contains_any","집합 연산자는 양쪽 SELECT 절의 컬럼 개수가 동일해야 함","💡 집합 연산자는 컬럼 개수와 데이터 타입이 일치해야 함!","컬럼 개수 불일치 에러"),
  V("SQL-VAR-0102-G","SQL-2026-01-02","[변형] 집합 연산 시 데이터 타입 불일치 에러",`SELECT id(INT) FROM t1 UNION SELECT name(VARCHAR) FROM t2;`,"sql","위 SQL 실행 시 발생하는 오류 원인은?",["데이터 타입", "타입", "자료형"],null,"contains_any","대응하는 컬럼의 데이터 타입이 호환되지 않음","💡 대응 컬럼의 데이터 타입이 상호 변환 가능해야 함!","데이터 타입 불일치"),
  V("SQL-VAR-0102-H","SQL-2026-01-02","[변형] 집합 연산의 정렬 ORDER BY 위치",`SELECT a FROM t1 UNION SELECT a FROM t2 ( ? ) a DESC;`,"sql","UNION 결과 전체를 정렬하기 위해 맨 마지막에 위치해야 하는 절은?",["ORDER BY", "ORDER BY절"],"ORDER BY 절은 쿼리 맨 마지막에 단 1번만 기술 가능","💡 ORDER BY는 전체 집합 연산의 맨 끝에만 위치 가능!","ORDER BY"),
  V("SQL-VAR-0102-I","SQL-2026-01-02","[변형] UNION 정렬과 성능 오버헤드",`SELECT * FROM big1 UNION SELECT * FROM big2;`,"sql","UNION이 UNION ALL보다 느린 이유는 어떤 내부 작업(정렬/해시) 때문인가?",["중복 제거", "중복제거", "정렬", "Sort"],null,"contains_any","중복 제거를 위한 정렬(Sort) 또는 해시 연산 오버헤드","💡 중복 제거를 위한 Sort/Hash 연산 비용 발생!","중복 제거/정렬"),
  V("SQL-VAR-0102-J","SQL-2026-01-02","[변형] UNION 결과의 컬럼명 결정",`SELECT emp_name AS 이름 FROM emp UNION SELECT user_name AS 닉네임 FROM user;`,"sql","최종 조회 결과의 컬럼 헤더 이름은 '이름'인가 '닉네임'인가?",["이름"],"첫 번째 SELECT 절의 컬럼명/별칭(Alias)이 최종 헤더명이 됨","💡 최종 컬럼명은 첫 번째 SELECT 절 기준!","이름"),
  V("SQL-VAR-0102-K","SQL-2026-01-02","[변형] 3개 쿼리 UNION 결합",`-- q1: 2건, q2: 3건, q3: 4건 (중복 없음)\nSELECT * FROM q1 UNION ALL SELECT * FROM q2 UNION ALL SELECT * FROM q3;`,"sql","위 쿼리의 최종 행 수는?",["9"],"2 + 3 + 4 = 9","💡 연속된 UNION ALL 누적!","9"),
  V("SQL-VAR-0102-L","SQL-2026-01-02","[변형] 완전 중복 테이블 UNION",`-- t1: 10건\nSELECT * FROM t1 UNION SELECT * FROM t1;`,"sql","동일한 t1을 UNION 결합했을 때 반환되는 행 수는?",["10"],"완전 중복이므로 10건만 반환","💡 동일 테이블 UNION 시 원본 건수 그대로!","10"),
  V("SQL-VAR-0102-M","SQL-2026-01-02","[변형] 완전 중복 테이블 UNION ALL",`-- t1: 10건\nSELECT * FROM t1 UNION ALL SELECT * FROM t1;`,"sql","동일한 t1을 UNION ALL 결합했을 때 반환되는 행 수는?",["20"],"10 + 10 = 20건 반환","💡 UNION ALL은 무조건 합산!","20"),
  V("SQL-VAR-0102-N","SQL-2026-01-02","[변형] 차집합의 교환법칙 불성립",`-- A={1,2}, B={2,3}\n-- Q1: A MINUS B => {1}\n-- Q2: B MINUS A => {3}`,"sql","Q1과 Q2의 결과는 동일한가? (동일/다름)",["다름", "다르다", "불일치"],"A-B={1}, B-A={3}으로 교환법칙 불성립","💡 차집합은 순서에 따라 결과가 다름(교환법칙 불성립)!","다름"),
  V("SQL-VAR-0102-O","SQL-2026-01-02","[변형] 합집합/교집합의 교환법칙 성립",`-- A UNION B 와 B UNION A`,"sql","A UNION B와 B UNION A의 결과 집합은 동일한가? (동일/다름)",["동일", "같다"],"합집합과 교집합은 교환법칙 성립","💡 UNION과 INTERSECT는 교환법칙 성립!","동일"),
  V("SQL-VAR-0102-P","SQL-2026-01-02","[변형] NULL 행의 UNION 중복 제거",`-- t1: {NULL}, t2: {NULL}\nSELECT col FROM t1 UNION SELECT col FROM t2;`,"sql","위 SQL의 최종 행 수는?",["1"],"UNION은 NULL도 동일 값으로 취급하여 중복 제거 → 1행","💡 UNION은 NULL끼리도 중복 제거!","1"),
  V("SQL-VAR-0102-Q","SQL-2026-01-02","[변형] NULL 행의 UNION ALL",`-- t1: {NULL}, t2: {NULL}\nSELECT col FROM t1 UNION ALL SELECT col FROM t2;`,"sql","위 SQL의 최종 행 수는?",["2"],"NULL 2행 모두 유지","💡 UNION ALL은 NULL도 그대로 보존!","2"),
  V("SQL-VAR-0102-R","SQL-2026-01-02","[변형] 집합 연산자와 서브쿼리 별칭",`SELECT COUNT(*) FROM (SELECT a FROM t1 UNION SELECT a FROM t2) ( ? );`,"sql","MySQL/PostgreSQL에서 인라인 뷰 뒤에 필수로 붙여야 하는 것은?",["별칭", "alias", "테이블 별칭", "이름"],"인라인 뷰 서브쿼리의 별칭(Alias)","💡 FROM절 서브쿼리는 별칭 필수!","별칭"),
  V("SQL-VAR-0102-S","SQL-2026-01-02","[변형] INTERSECT ALL",`-- 표준 SQL 교집합 중복 보존 연산자`,"sql","교집합에서 중복 건수까지 보존하여 일치시키는 표준 키워드는?",["INTERSECT ALL"],"INTERSECT ALL 키워드","💡 INTERSECT ALL!","INTERSECT ALL"),
  V("SQL-VAR-0102-T","SQL-2026-01-02","[변형] EXCEPT ALL",`-- 표준 SQL 차집합 중복 보존 연산자`,"sql","차집합에서 차감 후 남은 중복 건수를 보존하는 표준 키워드는?",["EXCEPT ALL"],"EXCEPT ALL 키워드","💡 EXCEPT ALL!","EXCEPT ALL"),

  // ═══ SQL-2026-01-08 변형 (UPDATE ... SET / DML 구문) ×20 ═══
  V("SQL-VAR-0108-A","SQL-2026-01-08","[변형] INSERT INTO VALUES 구문",`( A ) ( B ) 사원 (사번, 이름, 부서) VALUES (1004, '홍길동', '개발팀');`,"sql","(A), (B) 빈칸에 들어갈 키워드를 순서대로 쓰시오.",["INSERT INTO", "INSERT, INTO"],"INSERT INTO 테이블 (컬럼...) VALUES (값...)","💡 신규 데이터 삽입은 INSERT INTO!","INSERT INTO"),
  V("SQL-VAR-0108-B","SQL-2026-01-08","[변형] DELETE FROM WHERE",`( A ) ( B ) 사원 WHERE 사번 = 1003;`,"sql","(A), (B) 빈칸에 들어갈 키워드를 순서대로 쓰시오.",["DELETE FROM", "DELETE, FROM"],"DELETE FROM 테이블 WHERE 조건","💡 데이터 삭제는 DELETE FROM!","DELETE FROM"),
  V("SQL-VAR-0108-C","SQL-2026-01-08","[변형] UPDATE 다중 컬럼 수정",`UPDATE 사원 SET 부서 = '기획팀', 직급 = '대리' WHERE 사번 = 1005;`,"sql","여러 컬럼을 동시 수정할 때 컬럼 간의 구분자는?",["콤마", ",", "쉼표"],"SET col1 = val1, col2 = val2 (콤마 구분)","💡 SET 절 다중 컬럼은 쉼표(,)로 나열!","콤마(,)"),
  V("SQL-VAR-0108-D","SQL-2026-01-08","[변형] UPDATE WHERE절 생략 시 대참사",`UPDATE 사원 SET 급여 = 0;`,"sql","WHERE 절 없이 실행했을 때의 결과를 서술하시오.",["전체", "모든", "모든 사원", "전체 사원"],null,"contains_any","테이블의 모든 행(전체 레코드)의 급여가 0으로 수정됨","💡 UPDATE/DELETE 시 WHERE 생략은 전체 행 적용!","전체 행 수정"),
  V("SQL-VAR-0108-E","SQL-2026-01-08","[변형] INSERT INTO SELECT 서브쿼리 삽입",`INSERT INTO 백업_사원 SELECT * FROM 사원;`,"sql","다른 테이블의 데이터를 조회하여 즉시 삽입할 때 생략되는 키워드는?",["VALUES"],"INSERT INTO ... SELECT 구문에서는 VALUES 키워드 생략","💡 서브쿼리 INSERT는 VALUES 생략!","VALUES"),
  V("SQL-VAR-0108-F","SQL-2026-01-08","[변형] MERGE INTO 구문",`( ? ) INTO target USING source ON (target.id = source.id) WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT ...;`,"sql","조건에 따라 INSERT 또는 UPDATE를 동시 수행하는 SQL 명령어를 쓰시오.",["MERGE", "MERGE INTO"],"UPSERT를 수행하는 MERGE INTO 구문","💡 조건부 삽입/수정은 MERGE INTO!","MERGE"),
  V("SQL-VAR-0108-G","SQL-2026-01-08","[변형] UPDATE 연산식 적용",`UPDATE 상품 SET 가격 = 가격 * 1.1 WHERE 카테고리 = '전자';`,"sql","위 SQL이 수행하는 가격 변동은 몇 % 인상인가?",["10", "10%"],"가격 * 1.1 = 10% 인상","💡 기존 값 기반 연산 갱신!","10% 인상"),
  V("SQL-VAR-0108-H","SQL-2026-01-08","[변형] UPDATE 서브쿼리 수정",`UPDATE 사원 SET 급여 = (SELECT AVG(급여) FROM 사원) WHERE 사번 = 1001;`,"sql","사번 1001의 급여를 전체 평균 급여로 수정할 때 SET 절에 위치한 것은?",["서브쿼리", "스칼라 서브쿼리"],"SET 절의 서브쿼리","💡 SET 컬럼 = (서브쿼리) 형태!","서브쿼리"),
  V("SQL-VAR-0108-I","SQL-2026-01-08","[변형] INSERT 컬럼 리스트 생략",`INSERT INTO emp VALUES (1, 'Kim', 5000);`,"sql","컬럼 목록을 생략할 때 VALUES 절의 값들은 테이블의 어떤 순서와 일치해야 하는가?",["테이블 정의", "컬럼 순서", "스키마 순서", "선언 순서"],null,"contains_any","테이블 생성 시 정의된 컬럼 순서 및 개수와 완전 일치해야 함","💡 컬럼 생략 시 테이블 원본 컬럼 순서/개수 준수!","컬럼 순서"),
  V("SQL-VAR-0108-J","SQL-2026-01-08","[변형] INSERT 다중 행 삽입",`INSERT INTO t VALUES (1, 'A'), (2, 'B'), (3, 'C');`,"sql","단일 INSERT 문으로 한 번에 삽입되는 행 수는?",["3", "3개", "3행"],"3개 튜플 일괄 삽입","💡 다중 VALUES로 여러 행 동시 삽입!","3"),
  V("SQL-VAR-0108-K","SQL-2026-01-08","[변형] DELETE WHERE IN 다중 삭제",`DELETE FROM emp WHERE id IN (101, 102, 103);`,"sql","위 SQL로 삭제되는 최대 사원 수는?",["3", "3명"],"IN 절에 지정된 3명","💡 IN으로 다중 행 일괄 삭제!","3"),
  V("SQL-VAR-0108-L","SQL-2026-01-08","[변형] UPDATE JOIN (MySQL/Oracle)",`UPDATE emp e JOIN dept d ON e.dept_id = d.id SET e.loc = d.loc;`,"sql","조인을 활용하여 다른 테이블의 값으로 갱신하는 UPDATE문의 특징은?",["조인", "JOIN"],"UPDATE JOIN 구문","💡 조인을 활용한 일괄 컬럼 갱신!","JOIN UPDATE"),
  V("SQL-VAR-0108-M","SQL-2026-01-08","[변형] INSERT NULL 값 삽입",`INSERT INTO member (id, name, tel) VALUES (1, 'Lee', ( ? ));`,"sql","전화번호가 없을 때 명시적으로 빈 값을 삽입하는 예약어는?",["NULL"],"명시적 NULL 삽입","💡 명시적 NULL 키워드 삽입!","NULL"),
  V("SQL-VAR-0108-N","SQL-2026-01-08","[변형] INSERT DEFAULT 값 삽입",`INSERT INTO board (id, title, views) VALUES (1, '공지', ( ? ));`,"sql","컬럼의 기본값(DEFAULT)으로 삽입되도록 지정하는 키워드는?",["DEFAULT"],"DEFAULT 키워드 명시 삽입","💡 DEFAULT 키워드로 정의된 기본값 삽입!","DEFAULT"),
  V("SQL-VAR-0108-O","SQL-2026-01-08","[변형] DML 트랜잭션 수동 커밋",`UPDATE emp SET sal = 1000; COMMIT;`,"sql","DML 변경 사항을 데이터베이스에 영구 반영하는 명령어는?",["COMMIT"],"COMMIT으로 DML 확정","💡 DML은 COMMIT 전까지 임시 반영!","COMMIT"),
  V("SQL-VAR-0108-P","SQL-2026-01-08","[변형] DML 트랜잭션 롤백",`DELETE FROM emp; ROLLBACK;`,"sql","실수로 실행한 DELETE 작업을 취소하고 원상 복구하는 명령어는?",["ROLLBACK"],"ROLLBACK으로 DML 취소","💡 ROLLBACK으로 변경 취소!","ROLLBACK"),
  V("SQL-VAR-0108-Q","SQL-2026-01-08","[변형] UPDATE NULL로 초기화",`UPDATE user SET last_login = NULL WHERE status = 'SLEEP';`,"sql","특정 컬럼 값을 비우기 위해 SET 컬럼 = 뒤에 쓰는 값은?",["NULL"],"SET 컬럼 = NULL","💡 컬럼 값을 비울 때는 = NULL 대입!","NULL"),
  V("SQL-VAR-0108-R","SQL-2026-01-08","[변형] RETURNING 절 (DML 반환)",`INSERT INTO user (name) VALUES ('Kim') ( ? ) id;`,"sql","PostgreSQL/Oracle에서 INSERT/UPDATE된 행의 값을 즉시 반환하는 절은?",["RETURNING"],"RETURNING 절","💡 RETURNING 컬럼으로 DML 결과 즉시 수신!","RETURNING"),
  V("SQL-VAR-0108-S","SQL-2026-01-08","[변형] SELECT FOR UPDATE 동시성 제어",`SELECT * FROM account WHERE id = 1 ( ? ) UPDATE;`,"sql","조회한 행에 배타적 잠금(X-Lock)을 걸어 동시 수정을 방지하는 구문은?",["FOR"],"SELECT ... FOR UPDATE 비관적 락","💡 FOR UPDATE로 동시성 잠금 획득!","FOR"),
  V("SQL-VAR-0108-T","SQL-2026-01-08","[변형] DML과 DDL 구분",`-- (1) INSERT (2) CREATE (3) UPDATE (4) DELETE`,"sql","위 보기 중 데이터 정의어(DDL)에 해당하는 번호를 쓰시오.",["2", "(2)"],"CREATE는 DDL, 나머지는 DML","💡 CREATE/ALTER/DROP/TRUNCATE는 DDL!","2"),

  // ═══ SQL-2026-01-12 변형 (LIKE 와일드카드 + LENGTH 결합) ×20 ═══
  V("SQL-VAR-0112-A","SQL-2026-01-12","[변형] 3번째 B, 5글자 이상 7글자 이하",`WHERE col LIKE ' ? ' AND LENGTH(col) <= 7;`,"sql","5글자 이상 7글자 이하이고, 3번째 글자가 'B'인 와일드카드 패턴은?",["__B__%"],"__ + B + __(최소 5자) + % = __B__%","💡 __B__%","__B__%"),
  V("SQL-VAR-0112-B","SQL-2026-01-12","[변형] 1번째 K, 4글자 이상",`WHERE col LIKE ' ? ';`,"sql","'K'로 시작하고 최소 4글자 이상인 와일드카드 패턴을 쓰시오.",["K___%"],"K + ___(최소 4자) + %","💡 K___%","K___%"),
  V("SQL-VAR-0112-C","SQL-2026-01-12","[변형] 마지막에서 2번째가 '9'",`WHERE col LIKE ' ? ';`,"sql","뒤에서 2번째 글자가 '9'인 문자열의 와일드카드 패턴은?",["%9_"],"% + 9 + _ (뒤에서 2번째)","💡 %9_","%9_"),
  V("SQL-VAR-0112-D","SQL-2026-01-12","[변형] 정확히 5글자이면서 3번째가 'X'",`WHERE col LIKE ' ? ';`,"sql","정확히 5글자이며 3번째 글자가 'X'인 패턴을 쓰시오.",["__X__"],"__ + X + __ = 정확히 5자리","💡 __X__","__X__"),
  V("SQL-VAR-0112-E","SQL-2026-01-12","[변형] LENGTH() 함수 반환값",`SELECT LENGTH('KOREA');`,"sql","위 SQL의 실행 결과(숫자)를 쓰시오.",["5"],"5글자이므로 5 반환","💡 LENGTH는 문자열의 길이 반환!","5"),
  V("SQL-VAR-0112-F","SQL-2026-01-12","[변형] LENGTHB() 바이트 수 (Oracle)",`SELECT LENGTHB('ABC');`,"sql","영문 3글자 'ABC'의 바이트 길이는?",["3"],"영문 1자 = 1바이트 → 3바이트","💡 LENGTHB는 바이트 단위 길이!","3"),
  V("SQL-VAR-0112-G","SQL-2026-01-12","[변형] SUBSTR / SUBSTRING 함수",`SELECT SUBSTR('DATABASE', 5, 4);`,"sql","5번째 위치부터 4글자를 추출한 결과를 쓰시오.",["BASE"],"5번째('B')부터 4글자 → BASE","💡 SUBSTR(문자열, 시작위치, 길이)!","BASE"),
  V("SQL-VAR-0112-H","SQL-2026-01-12","[변형] INSTR 함수 위치 검색",`SELECT INSTR('CORPORATE FLOOR', 'OR', 1, 2);`,"sql","'OR'이 2번째로 등장하는 인덱스 위치(숫자)는?",["5"],"C-O-R-P-O-R (5번째 'O'에서 2번째 'OR' 시작)","💡 INSTR(문자열, 찾을문자, 시작, 발생횟수)!","5"),
  V("SQL-VAR-0112-I","SQL-2026-01-12","[변형] UPPER / LOWER 대소문자 변환",`SELECT UPPER('sql');`,"sql","위 SQL의 실행 결과를 쓰시오.",["SQL"],"대문자 변환 SQL","💡 UPPER는 대문자, LOWER는 소문자!","SQL"),
  V("SQL-VAR-0112-J","SQL-2026-01-12","[변형] LPAD 패딩 함수",`SELECT LPAD('7', 4, '0');`,"sql","왼쪽에 0을 채워 총 4자리로 만드는 위 SQL의 결과는?",["0007"],"왼쪽 0 패딩 → 0007","💡 LPAD(문자열, 전체길이, 채울문자)!","0007"),
  V("SQL-VAR-0112-K","SQL-2026-01-12","[변형] RPAD 패딩 함수",`SELECT RPAD('DATA', 6, '*');`,"sql","오른쪽에 *를 채워 총 6자리로 만드는 위 SQL의 결과는?",["DATA**"],"오른쪽 * 패딩 → DATA**","💡 RPAD는 오른쪽 패딩!","DATA**"),
  V("SQL-VAR-0112-L","SQL-2026-01-12","[변형] TRIM 공백 및 문자 제거",`SELECT TRIM('x' FROM 'xxHOLDxx');`,"sql","앞뒤의 'x' 문자를 제거한 결과는?",["HOLD"],"앞뒤 'x' 제거 → HOLD","💡 TRIM(제거할문자 FROM 원본문자열)!","HOLD"),
  V("SQL-VAR-0112-M","SQL-2026-01-12","[변형] CONCAT 문자열 결합",`SELECT CONCAT('Hello', ' ', 'World');`,"sql","위 SQL의 실행 결과를 쓰시오.",["Hello World"],"문자열 연결 Hello World","💡 CONCAT(s1, s2, ...)로 결합!","Hello World"),
  V("SQL-VAR-0112-N","SQL-2026-01-12","[변형] 파이프(||) 문자열 결합 (Oracle/PostgreSQL)",`SELECT '2026' || '-' || '01';`,"sql","위 SQL의 실행 결과를 쓰시오.",["2026-01"],"|| 연산자로 결합 → 2026-01","💡 || 연산자는 문자열 결합!","2026-01"),
  V("SQL-VAR-0112-O","SQL-2026-01-12","[변형] REPLACE 문자열 치환",`SELECT REPLACE('JACK and JUE', 'J', 'BL');`,"sql","'J'를 'BL'로 치환한 실행 결과를 쓰시오.",["BLACK and BLUE"],"JACK→BLACK, JUE→BLUE","💡 REPLACE는 전체 치환!","BLACK and BLUE"),
  V("SQL-VAR-0112-P","SQL-2026-01-12","[변형] LTRIM / RTRIM",`SELECT LTRIM('  SQL');`,"sql","왼쪽 공백만 제거된 결과를 쓰시오.",["SQL"],"왼쪽 공백 제거","💡 LTRIM은 왼쪽 공백 제거!","SQL"),
  V("SQL-VAR-0112-Q","SQL-2026-01-12","[변형] 4글자 이상 6글자 이하",`WHERE LENGTH(col) BETWEEN 4 AND 6;`,"sql","4글자 이상 6글자 이하를 지정하는 범위 연산자는?",["BETWEEN", "BETWEEN AND"],"BETWEEN 4 AND 6","💡 BETWEEN A AND B!","BETWEEN"),
  V("SQL-VAR-0112-R","SQL-2026-01-12","[변형] 첫 글자 대문자 INITCAP",`SELECT INITCAP('the soap');`,"sql","단어 첫 글자만 대문자로 변환하는 Oracle 함수의 실행 결과는?",["The Soap"],"각 단어 첫 글자 대문자","💡 INITCAP은 단어 첫 글자 대문자화!","The Soap"),
  V("SQL-VAR-0112-S","SQL-2026-01-12","[변형] 정규표현식 REGEXP_LIKE",`SELECT * FROM t WHERE REGEXP_LIKE(col, '^[0-9]{3}$');`,"sql","위 정규표현식이 찾는 컬럼 값의 형태는 몇 자리 숫자인가?",["3", "3자리", "3자리 숫자"],"3자리 숫자 ^[0-9]{3}$","💡 정규식 일치 검색 REGEXP_LIKE!","3자리 숫자"),
  V("SQL-VAR-0112-T","SQL-2026-01-12","[변형] 1번째와 5번째가 'A'인 5자리",`WHERE col LIKE 'A___A';`,"sql","1번째와 5번째 글자가 A인 정확히 5자리 패턴은?",["A___A"],"A + ___ + A = 5자리","💡 A___A","A___A"),

  // ═══ SQL-2026-02-02 변형 (IN 서브쿼리 + SUM) ×20 ═══
  V("SQL-VAR-0202-A","SQL-2026-02-02","[변형] 등급 'B' 점수 평균",`SELECT AVG(점수) FROM T2 WHERE 등급 IN (SELECT 등급 FROM T1 WHERE 등급 = 'B');`,"sql","서브쿼리가 'B'를 반환할 때 T2에서 등급이 B인 점수 평균을 구하는 집계함수는?",["AVG"],"평균 함수는 AVG","💡 평균은 AVG!","AVG"),
  V("SQL-VAR-0202-B","SQL-2026-02-02","[변형] 등급 COUNT 카운트",`SELECT COUNT(점수) FROM T2 WHERE 등급 IN (SELECT 등급 FROM T1 WHERE 등급 = 'A');`,"sql","A 등급에 해당하는 데이터 건수를 세는 집계함수는?",["COUNT"],"개수 카운트는 COUNT","💡 건수 집계는 COUNT!","COUNT"),
  V("SQL-VAR-0202-C","SQL-2026-02-02","[변형] 점수 MAX 최댓값",`SELECT MAX(점수) FROM T2 WHERE 등급 IN ('A', 'B');`,"sql","A, B 등급의 최고 점수를 구하는 집계함수는?",["MAX"],"최댓값은 MAX","💡 최댓값은 MAX!","MAX"),
  V("SQL-VAR-0202-D","SQL-2026-02-02","[변형] 점수 MIN 최솟값",`SELECT MIN(점수) FROM T2 WHERE 등급 IN ('A', 'B');`,"sql","A, B 등급의 최저 점수를 구하는 집계함수는?",["MIN"],"최솟값은 MIN","💡 최솟값은 MIN!","MIN"),
  V("SQL-VAR-0202-E","SQL-2026-02-02","[변형] GROUP BY 등급별 합계",`SELECT 등급, SUM(점수) FROM T2 GROUP BY ( ? );`,"sql","등급별로 그룹화하여 점수 합계를 내기 위해 빈칸에 들어갈 컬럼명은?",["등급"],"GROUP BY 등급","💡 GROUP BY 컬럼명!","등급"),
  V("SQL-VAR-0202-F","SQL-2026-02-02","[변형] HAVING 합계 조건",`SELECT 등급, SUM(점수) FROM T2 GROUP BY 등급 ( ? ) SUM(점수) >= 10;`,"sql","그룹화 후 집계 점수가 10 이상인 그룹만 필터링하는 절은?",["HAVING"],"그룹 필터링은 HAVING","💡 그룹 조건절은 HAVING!","HAVING"),
  V("SQL-VAR-0202-G","SQL-2026-02-02","[변형] ORDER BY 정렬",`SELECT * FROM T2 ORDER BY 점수 ( ? );`,"sql","점수가 높은 순서(내림차순)로 정렬할 때 붙이는 키워드는?",["DESC"],"내림차순은 DESC (오름차순은 ASC)","💡 내림차순 DESC, 오름차순 ASC!","DESC"),
  V("SQL-VAR-0202-H","SQL-2026-02-02","[변형] SUM(DISTINCT 점수)",`-- 점수 컬럼: {5, 5, 10}\nSELECT SUM(DISTINCT 점수) FROM T2;`,"sql","위 SQL의 실행 결과를 쓰시오.",["15"],"중복 제거 후 5 + 10 = 15","💡 DISTINCT로 중복 제거 후 합산!","15"),
  V("SQL-VAR-0202-I","SQL-2026-02-02","[변형] COUNT(*) vs COUNT(컬럼)",`-- 테이블: 5행 중 점수가 NULL인 행 1개\nSELECT COUNT(*), COUNT(점수) FROM T2;`,"sql","위 SQL의 실행 결과 2개 숫자를 순서대로 쓰시오.",["5 4", "5, 4", "5,4"],"COUNT(*)는 5, COUNT(점수)는 NULL 제외 4","💡 COUNT(*)는 전체 행, COUNT(컬럼)은 NULL 제외!","5 4"),
  V("SQL-VAR-0202-J","SQL-2026-02-02","[변형] SUM에서 NULL 무시 특성",`-- 컬럼 값: {10, NULL, 20}\nSELECT SUM(val) FROM t;`,"sql","위 SQL의 합계 실행 결과는?",["30"],"집계함수는 NULL을 자동 무시하고 10+20=30","💡 집계함수는 NULL 값을 연산에서 제외!","30"),
  V("SQL-VAR-0202-K","SQL-2026-02-02","[변형] 모든 행이 NULL일 때 SUM 결과",`-- 컬럼 값: {NULL, NULL}\nSELECT SUM(val) FROM t;`,"sql","모든 행이 NULL일 때 SUM()의 실행 결과는?",["NULL"],"모든 행이 NULL이면 집계 결과는 NULL","💡 대상이 모두 NULL이면 SUM 결과도 NULL!","NULL"),
  V("SQL-VAR-0202-L","SQL-2026-02-02","[변형] 모든 행이 NULL일 때 COUNT 결과",`-- 컬럼 값: {NULL, NULL}\nSELECT COUNT(val) FROM t;`,"sql","모든 행이 NULL일 때 COUNT(val)의 실행 결과는?",["0"],"유효한 값이 0개이므로 0 반환","💡 COUNT는 대상 없으면 0 반환!","0"),
  V("SQL-VAR-0202-M","SQL-2026-02-02","[변형] NVL / IFNULL 집계 결합",`SELECT SUM(NVL(점수, 0)) FROM T2;`,"sql","Oracle에서 NULL을 0으로 치환하는 함수의 이름은?",["NVL"],"Oracle의 NULL 치환 함수 NVL","💡 Oracle은 NVL, MySQL은 IFNULL, 표준은 COALESCE!","NVL"),
  V("SQL-VAR-0202-N","SQL-2026-02-02","[변형] COALESCE 표준 함수",`SELECT COALESCE(NULL, NULL, 5, 10);`,"sql","첫 번째로 NULL이 아닌 값을 반환하는 표준 함수의 실행 결과는?",["5"],"첫 번째 non-null 값 5 반환","💡 COALESCE는 나열된 값 중 첫 번째 non-null 반환!","5"),
  V("SQL-VAR-0202-O","SQL-2026-02-02","[변형] 다중 컬럼 GROUP BY",`SELECT dept, job, COUNT(*) FROM emp GROUP BY dept, job;`,"sql","부서와 직급 2개 컬럼을 기준으로 집계할 때 GROUP BY 뒤 컬럼 구분자는?",["콤마", ",", "쉼표"],"GROUP BY dept, job","💡 쉼표로 다중 그룹화 기준 지정!","콤마(,)"),
  V("SQL-VAR-0202-P","SQL-2026-02-02","[변형] ROLLUP 소계 함수",`SELECT dept, job, SUM(sal) FROM emp GROUP BY ROLLUP(dept, job);`,"sql","계층적 소계와 총합계를 자동으로 산출해주는 그룹 함수 키워드는?",["ROLLUP"],"소계 산출 그룹 함수 ROLLUP","💡 ROLLUP(A, B)는 계층적 소계/총계 생성!","ROLLUP"),
  V("SQL-VAR-0202-Q","SQL-2026-02-02","[변형] CUBE 모든 조합 집계",`SELECT dept, job, SUM(sal) FROM emp GROUP BY ( ? )(dept, job);`,"sql","지정된 모든 컬럼의 다차원 조합 집계를 생성하는 함수 키워드는?",["CUBE"],"모든 조합 집계 CUBE","💡 CUBE는 2^N개 모든 다차원 집계 생성!","CUBE"),
  V("SQL-VAR-0202-R","SQL-2026-02-02","[변형] GROUPING SETS 특정 조합 집계",`SELECT dept, job, SUM(sal) FROM emp GROUP BY ( ? )((dept), (job));`,"sql","원하는 그룹화 조합을 개별 지정하는 함수 키워드는?",["GROUPING SETS"],"개별 그룹화 집합 GROUPING SETS","💡 GROUPING SETS로 필요한 집계만 선별!","GROUPING SETS"),
  V("SQL-VAR-0202-S","SQL-2026-02-02","[변형] GROUPING 함수",`SELECT dept, GROUPING(dept) FROM emp GROUP BY ROLLUP(dept);`,"sql","ROLLUP 결과에서 소계/합계 행이면 1, 일반 행이면 0을 반환하는 함수는?",["GROUPING"],"소계 판별 함수 GROUPING","💡 GROUPING()은 소계 행 식별에 사용!","GROUPING"),
  V("SQL-VAR-0202-T","SQL-2026-02-02","[변형] WHERE vs HAVING 필터링 순서",`SELECT dept, AVG(sal) FROM emp WHERE sal > 1000 GROUP BY dept HAVING AVG(sal) > 3000;`,"sql","위 쿼리에서 그룹화(GROUP BY) 이전에 개별 행을 먼저 필터링하는 절은?",["WHERE", "WHERE절"],"개별 행 필터는 WHERE, 그룹 필터는 HAVING","💡 WHERE는 그룹화 전 개별 행, HAVING은 그룹화 후 집계값 필터!","WHERE"),

  // ═══ SQL-2026-02-03 변형 (IS NULL / NULL 함수) ×20 ═══
  V("SQL-VAR-0203-A","SQL-2026-02-03","[변형] IS NOT NULL",`SELECT * FROM 사원 WHERE 전화번호 ( ? ) NULL;`,"sql","전화번호가 등록되어 있는(NULL이 아닌) 사람을 조회하는 두 단어 연산자는?",["IS NOT"],"IS NOT NULL","💡 NULL이 아님은 IS NOT NULL!","IS NOT"),
  V("SQL-VAR-0203-B","SQL-2026-02-03","[변형] NULL과의 사칙연산 결과",`SELECT 100 + NULL;`,"sql","위 연산의 실행 결과를 쓰시오.",["NULL"],"NULL과의 모든 산술 연산 결과는 NULL","💡 숫자 + NULL = 무조건 NULL!","NULL"),
  V("SQL-VAR-0203-C","SQL-2026-02-03","[변형] NVL2 함수 (Oracle)",`SELECT NVL2(comm, '보너스있음', '보너스없음') FROM emp;`,"sql","comm이 NULL이 아닐 때 첫 번째 값, NULL일 때 두 번째 값을 반환하는 Oracle 함수는?",["NVL2"],"NVL2(col, non-null값, null값)","💡 NVL2(expr, expr1, expr2)!","NVL2"),
  V("SQL-VAR-0203-D","SQL-2026-02-03","[변형] NULLIF 함수",`SELECT NULLIF(10, 10);`,"sql","두 인자가 같으면 NULL, 다르면 첫 번째 인자를 반환하는 함수의 실행 결과는?",["NULL"],"두 값이 같으므로 NULL 반환","💡 NULLIF(a, b)는 a==b면 NULL!","NULL"),
  V("SQL-VAR-0203-E","SQL-2026-02-03","[변형] NULLIF 두 인자 상이",`SELECT NULLIF(10, 20);`,"sql","위 SQL의 실행 결과를 쓰시오.",["10"],"두 값이 다르므로 첫 번째 인자 10 반환","💡 a!=b면 첫 번째 인자(a) 반환!","10"),
  V("SQL-VAR-0203-F","SQL-2026-02-03","[변형] IFNULL (MySQL)",`SELECT IFNULL(tel, '없음') FROM member;`,"sql","MySQL에서 NULL 값을 다른 값으로 치환하는 함수의 이름은?",["IFNULL"],"MySQL의 IFNULL","💡 MySQL은 IFNULL!","IFNULL"),
  V("SQL-VAR-0203-G","SQL-2026-02-03","[변형] ISNULL (SQL Server)",`SELECT ISNULL(tel, '없음') FROM member;`,"sql","SQL Server(T-SQL)에서 NULL 값을 치환하는 함수 이름은?",["ISNULL"],"SQL Server의 ISNULL","💡 SQL Server는 ISNULL!","ISNULL"),
  V("SQL-VAR-0203-H","SQL-2026-02-03","[변형] NULL의 논리 3치 논리(Three-Valued Logic)",`-- TRUE, FALSE, ( ? )`,"sql","SQL에서 NULL 비교로 인해 발생하는 제3의 논리 상태를 영문으로 쓰시오.",["UNKNOWN", "알수없음"],"SQL의 3치 논리: TRUE, FALSE, UNKNOWN","💡 SQL은 3-Valued Logic (UNKNOWN 포함)!","UNKNOWN"),
  V("SQL-VAR-0203-I","SQL-2026-02-03","[변형] UNKNOWN AND FALSE",`-- UNKNOWN AND FALSE`,"sql","UNKNOWN과 FALSE를 AND 연산했을 때의 최종 진리값은?",["FALSE", "거짓"],"FALSE가 하나라도 있으면 AND 결과는 FALSE","💡 FALSE AND Anything = FALSE!","FALSE"),
  V("SQL-VAR-0203-J","SQL-2026-02-03","[변형] UNKNOWN OR TRUE",`-- UNKNOWN OR TRUE`,"sql","UNKNOWN과 TRUE를 OR 연산했을 때의 최종 진리값은?",["TRUE", "참"],"TRUE가 하나라도 있으면 OR 결과는 TRUE","💡 TRUE OR Anything = TRUE!","TRUE"),
  V("SQL-VAR-0203-K","SQL-2026-02-03","[변형] NOT UNKNOWN",`-- NOT UNKNOWN`,"sql","UNKNOWN 논리값에 NOT을 취했을 때의 결과는?",["UNKNOWN"],"NOT UNKNOWN = UNKNOWN","💡 NOT UNKNOWN은 여전히 UNKNOWN!","UNKNOWN"),
  V("SQL-VAR-0203-L","SQL-2026-02-03","[변형] WHERE절의 UNKNOWN 행 선택 여부",`SELECT * FROM t WHERE col = NULL;`,"sql","col = NULL 조건의 진리값은 UNKNOWN이다. 이 행은 결과에 포함되는가? (포함/미포함)",["미포함", "제외", "포함안됨"],"WHERE절은 TRUE인 행만 반환하므로 UNKNOWN은 제외됨","💡 WHERE 절은 오직 TRUE인 행만 필터링 통과!","미포함"),
  V("SQL-VAR-0203-M","SQL-2026-02-03","[변형] NULL과 문자열 결합 (Oracle)",`SELECT 'Hello' || NULL FROM dual;`,"sql","Oracle에서 문자열과 NULL을 || 결합한 결과는?",["Hello"],"Oracle에서 문자열 결합 시 NULL은 빈 문자열로 취급되어 'Hello'","💡 Oracle의 || 연산자는 NULL을 빈 문자열 처리!","Hello"),
  V("SQL-VAR-0203-N","SQL-2026-02-03","[변형] NULL과 문자열 CONCAT (SQL Server/표준)",`SELECT 'Hello' + NULL;`,"sql","표준 SQL 및 SQL Server에서 문자열과 NULL을 + 결합한 결과는?",["NULL"],"표준에서 문자열 + NULL = NULL","💡 SQL Server는 NULL과의 + 결합 시 NULL 반환!","NULL"),
  V("SQL-VAR-0203-O","SQL-2026-02-03","[변형] ORDER BY 시 NULL 정렬 순서 (Oracle)",`SELECT * FROM emp ORDER BY comm ASC;`,"sql","Oracle에서 기본 오름차순(ASC) 정렬 시 NULL은 맨 위인가 맨 아래인가?",["맨 아래", "마지막", "아래", "뒤"],"Oracle의 기본 정렬에서 NULL은 가장 큰 값 취급 → 맨 아래","💡 Oracle은 NULL을 가장 큰 값으로 취급(ASC 시 마지막)!","맨 아래"),
  V("SQL-VAR-0203-P","SQL-2026-02-03","[변형] NULLS FIRST / NULLS LAST (Oracle)",`SELECT * FROM emp ORDER BY comm ASC ( ? ) FIRST;`,"sql","NULL을 강제로 맨 앞에 출력하도록 지정하는 정렬 옵션 키워드는?",["NULLS"],"NULLS FIRST 옵션","💡 NULLS FIRST / NULLS LAST로 위치 강제 지정!","NULLS"),
  V("SQL-VAR-0203-Q","SQL-2026-02-03","[변형] NULL 값 집합 연산 중복 처리",`SELECT DISTINCT col FROM t;`,"sql","컬럼에 NULL이 여러 개 있을 때 DISTINCT 결과에 NULL은 몇 개로 나오는가?",["1", "1개"],"DISTINCT는 여러 NULL을 1개로 중복 제거","💡 DISTINCT는 여러 NULL을 1개로 취급!","1개"),
  V("SQL-VAR-0203-R","SQL-2026-02-03","[변형] 기본키(PK)의 NULL 제약",`CREATE TABLE t ( id INT PRIMARY KEY );`,"sql","기본키(PRIMARY KEY) 컬럼에 NULL을 삽입할 수 있는가? (가능/불가)",["불가", "불가능", "안됨"],"기본키는 NOT NULL 제약조건 필수","💡 PRIMARY KEY는 NULL 허용 불가!","불가"),
  V("SQL-VAR-0203-S","SQL-2026-02-03","[변형] UNIQUE 제약조건의 NULL 허용",`CREATE TABLE t ( email VARCHAR(50) UNIQUE );`,"sql","UNIQUE 제약조건 컬럼에 NULL을 삽입할 수 있는가? (가능/불가)",["가능", "됨"],"UNIQUE 제약조건은 NULL 삽입 허용(DBMS에 따라 여러 개 허용)","💡 UNIQUE 제약조건은 NULL 허용!","가능"),
  V("SQL-VAR-0203-T","SQL-2026-02-03","[변형] CASE WHEN 컬럼 IS NULL",`SELECT CASE WHEN tel IS NULL THEN 'N' ELSE 'Y' END FROM user;`,"sql","tel이 NULL이면 N, 아니면 Y를 반환하는 조건문 키워드 조합은?",["CASE WHEN", "CASE"],"CASE WHEN ... IS NULL THEN ...","💡 CASE WHEN 조건식 분기!","CASE WHEN"),

  // ═══ SQL-2026-02-04 변형 (JOIN / LEFT / RIGHT / FULL / CROSS) ×20 ═══
  V("SQL-VAR-0204-A","SQL-2026-02-04","[변형] RIGHT OUTER JOIN",`SELECT * FROM A ( ? ) OUTER JOIN B ON A.id = B.a_id;`,"sql","오른쪽 테이블(B)의 모든 데이터를 누락 없이 출력하기 위한 키워드는?",["RIGHT"],"오른쪽 기준 전수 조인은 RIGHT JOIN","💡 오른쪽 기준 조인은 RIGHT OUTER JOIN!","RIGHT"),
  V("SQL-VAR-0204-B","SQL-2026-02-04","[변형] FULL OUTER JOIN",`SELECT * FROM A ( ? ) OUTER JOIN B ON A.id = B.a_id;`,"sql","양쪽 테이블(A, B)의 모든 데이터를 누락 없이 결합 출력하는 조인은?",["FULL"],"양쪽 전체 보존 조인은 FULL OUTER JOIN","💡 양쪽 테이블 전수 보존은 FULL OUTER JOIN!","FULL"),
  V("SQL-VAR-0204-C","SQL-2026-02-04","[변형] INNER JOIN",`SELECT * FROM A ( ? ) JOIN B ON A.id = B.a_id;`,"sql","양쪽 테이블에 공통으로 일치하는 행만 출력하는 기본 조인은?",["INNER"],"일치하는 행만 반환하는 INNER JOIN","💡 교집합 조인은 INNER JOIN!","INNER"),
  V("SQL-VAR-0204-D","SQL-2026-02-04","[변형] CROSS JOIN (카티션 곱)",`-- A: 3행, B: 4행\nSELECT * FROM A ( ? ) JOIN B;`,"sql","두 테이블의 모든 행을 1:1로 곱하여 총 12(3*4)행을 생성하는 조인 키워드는?",["CROSS"],"카티션 프로덕트는 CROSS JOIN","💡 3 * 4 = 12행 생성은 CROSS JOIN!","CROSS"),
  V("SQL-VAR-0204-E","SQL-2026-02-04","[변형] NATURAL JOIN",`SELECT * FROM A ( ? ) JOIN B;`,"sql","동일한 이름과 타입을 가진 모든 컬럼을 자동으로 조인 조건으로 삼는 키워드는?",["NATURAL"],"자동 동명 컬럼 조인은 NATURAL JOIN","💡 NATURAL JOIN은 ON/USING 절 생략!","NATURAL"),
  V("SQL-VAR-0204-F","SQL-2026-02-04","[변형] USING 절 조인",`SELECT * FROM emp JOIN dept ( ? ) (dept_id);`,"sql","동일한 컬럼명(dept_id)을 간결하게 조인 조건으로 묶을 때 쓰는 키워드는?",["USING"],"USING (동명컬럼)","💡 ON 대신 USING (컬럼명) 사용!","USING"),
  V("SQL-VAR-0204-G","SQL-2026-02-04","[변형] NATURAL JOIN 시 테이블 접두사 오류",`SELECT A.dept_id FROM A NATURAL JOIN B;`,"sql","NATURAL JOIN에서 조인에 사용된 공통 컬럼에 테이블 접두사(A.)를 붙이면 오류가 발생한다. (O/X)",["O"],"NATURAL JOIN의 조인 컬럼에는 식별자/접두사를 붙일 수 없음","💡 NATURAL JOIN의 조인 컬럼에는 테이블명 접두사 금지!","'O'"),
  V("SQL-VAR-0204-H","SQL-2026-02-04","[변형] SELF JOIN (자체 조인)",`SELECT e.name, m.name FROM emp e JOIN emp m ON e.mgr_id = m.id;`,"sql","하나의 동일한 테이블을 자기 자신과 조인하는 기법의 명칭은?",["SELF JOIN", "자체 조인", "셀프 조인", "셀프조인"],"자기 자신과의 조인은 SELF JOIN","💡 계층 구조 표현에 자주 쓰이는 SELF JOIN!","SELF JOIN"),
  V("SQL-VAR-0204-I","SQL-2026-02-04","[변형] Non-EQUI JOIN (비등가 조인)",`SELECT e.name, g.grade FROM emp e JOIN sal_grade g ON e.sal BETWEEN g.low AND g.high;`,"sql","등호(=)가 아닌 BETWEEN 등 부등호/범위 연산자로 연결하는 조인의 명칭은?",["비등가 조인", "Non-EQUI JOIN", "비등가조인", "non equi"],"부등호/범위 조인은 Non-EQUI JOIN","💡 = 가 아닌 조인은 비등가 조인(Non-EQUI JOIN)!","Non-EQUI JOIN"),
  V("SQL-VAR-0204-J","SQL-2026-02-04","[변형] Oracle 전용 (+) 외부 조인 구문",`SELECT * FROM A, B WHERE A.id = B.a_id(+);`,"sql","위 Oracle 쿼리는 표준 SQL의 어느 쪽 OUTER JOIN과 동일한가? (LEFT/RIGHT)",["LEFT"],"정보가 부족한 B쪽에 (+)를 붙이면 반대쪽(A) 기준인 LEFT JOIN","💡 (+)의 반대편 테이블이 기준! (B에 (+)면 LEFT JOIN)","LEFT"),
  V("SQL-VAR-0204-K","SQL-2026-02-04","[변형] Oracle 전용 (+) RIGHT JOIN",`SELECT * FROM A, B WHERE A.id(+) = B.a_id;`,"sql","위 Oracle 쿼리는 표준 SQL의 어느 쪽 OUTER JOIN과 동일한가? (LEFT/RIGHT)",["RIGHT"],"A쪽에 (+)가 붙었으므로 오른쪽(B) 기준 RIGHT JOIN","💡 A에 (+)면 RIGHT JOIN!","RIGHT"),
  V("SQL-VAR-0204-L","SQL-2026-02-04","[변형] LEFT JOIN 매칭 실패 시 채워지는 값",`SELECT A.name, B.order_date FROM A LEFT JOIN B ON A.id = B.user_id;`,"sql","A의 회원이 주문 내역이 없을 때 B.order_date에 표시되는 값은?",["NULL"],"외부 조인에서 매칭 실패 행의 컬럼은 NULL로 채워짐","💡 매칭되지 않는 반대편 컬럼은 NULL!","NULL"),
  V("SQL-VAR-0204-M","SQL-2026-02-04","[변형] ON 절과 WHERE 절 필터링 차이 (OUTER JOIN)",`SELECT * FROM A LEFT JOIN B ON A.id = B.a_id AND B.status = 'ACTIVE';`,"sql","ON 절에 B의 조건을 넣으면 B 매칭 대상만 제한되고 A의 행은 모두 보존되는가? (O/X)",["O"],"ON 절 조건은 조인 대상을 제한하지만 외부 테이블(A)은 보존됨","💡 OUTER JOIN에서 ON 절 조건은 보존 테이블에 영향 없음!","'O'"),
  V("SQL-VAR-0204-N","SQL-2026-02-04","[변형] WHERE 절에 외부 테이블 조건 기술 시 INNER JOIN 화",`SELECT * FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.status = 'ACTIVE';`,"sql","WHERE 절에 B.status 조건을 넣으면 B가 NULL인 A 행이 탈락하여 사실상 무슨 조인이 되는가?",["INNER JOIN", "INNER", "내부 조인"],"WHERE 절 필터로 인해 사실상 INNER JOIN으로 축소됨","💡 OUTER JOIN 후 WHERE 절에 반대편 조건 걸면 INNER JOIN 화!","INNER JOIN"),
  V("SQL-VAR-0204-O","SQL-2026-02-04","[변형] 3개 테이블 조인 순서",`SELECT * FROM A JOIN B ON A.b_id = B.id JOIN C ON B.c_id = C.id;`,"sql","3개 테이블 조인 시 필요한 최소 조인 조건식 개수는?",["2", "2개"],"N개 테이블 조인 시 최소 N-1개 조건 필요","💡 N개 테이블 조인 시 최소 N-1개 조인 조건식 필요!","2개"),
  V("SQL-VAR-0204-P","SQL-2026-02-04","[변형] 순수 외부 조인(Anti-Join)",`SELECT A.* FROM A LEFT JOIN B ON A.id = B.a_id WHERE B.a_id IS NULL;`,"sql","A에는 존재하지만 B에는 존재하지 않는 차집합 데이터만 추출하는 기법은?",["안티 조인", "Anti Join", "안티조인", "Anti-Join"],"NOT EXISTS와 유사한 Anti-Join 기법","💡 LEFT JOIN + IS NULL = Anti-Join!","Anti-Join"),
  V("SQL-VAR-0204-Q","SQL-2026-02-04","[변형] 세미 조인(Semi-Join)",`SELECT * FROM emp WHERE dept_id IN (SELECT id FROM dept);`,"sql","메인 테이블의 중복을 늘리지 않고 존재 여부만 체크하여 결합하는 조인 방식은?",["세미 조인", "Semi Join", "세미조인", "Semi-Join"],"EXISTS/IN 서브쿼리가 내부적으로 최적화되는 Semi-Join","💡 서브쿼리 최적화 형태 Semi-Join!","Semi-Join"),
  V("SQL-VAR-0204-R","SQL-2026-02-04","[변형] 다대다(M:N) 조인 시 행 수 증가",`-- A: id 1인 행 2개, B: a_id 1인 행 3개\nSELECT * FROM A JOIN B ON A.id = B.a_id;`,"sql","id=1인 데이터의 조인 결과 생성되는 행 수는?",["6"],"2 * 3 = 6행 생성","💡 M:N 관계 조인 시 M * N 행 생성!","6"),
  V("SQL-VAR-0204-S","SQL-2026-02-04","[변형] FULL OUTER JOIN의 MySQL 대체 구현",`SELECT * FROM A LEFT JOIN B ON A.id = B.id ( ? ) SELECT * FROM A RIGHT JOIN B ON A.id = B.id;`,"sql","FULL OUTER JOIN을 지원하지 않는 MySQL에서 동일 결과를 내기 위해 사용하는 집합 연산자는?",["UNION"],"LEFT JOIN과 RIGHT JOIN을 UNION 결합","💡 LEFT JOIN UNION RIGHT JOIN = FULL JOIN!","UNION"),
  V("SQL-VAR-0204-T","SQL-2026-02-04","[변형] 조인 조건 누락 시 카티션 곱",`SELECT * FROM A, B;`,"sql","WHERE 절 조인 조건을 누락했을 때 발생하는 결과는 무슨 조인과 동일한가?",["CROSS JOIN", "카티션 곱", "카티션 프로덕트", "CROSS"],"조인 조건 누락 시 카티션 곱 발생","💡 조건 누락 시 모든 경우의 수 곱셈(CROSS JOIN)!","CROSS JOIN"),

  // ═══ SQL-2026-02-06 변형 (TCL / DCL / DDL 옵션) ×20 ═══
  V("SQL-VAR-0206-A","SQL-2026-02-06","[변형] COMMIT 트랜잭션 확정",`COMMIT;`,"sql","트랜잭션 내의 모든 변경 작업을 영구적으로 데이터베이스에 확정 반영하는 명령어를 쓰시오.",["COMMIT"],"트랜잭션 정상 완료 확정 명령어 COMMIT","💡 작업 확정은 COMMIT!","COMMIT"),
  V("SQL-VAR-0206-B","SQL-2026-02-06","[변형] SAVEPOINT 저장점 지정",`( ? ) sp1;`,"sql","트랜잭션 내에서 롤백할 중간 복귀 지점(체크포인트)을 지정하는 명령어를 쓰시오.",["SAVEPOINT"],"저장점 지정 SAVEPOINT","💡 SAVEPOINT 저장점명;","SAVEPOINT"),
  V("SQL-VAR-0206-C","SQL-2026-02-06","[변형] ROLLBACK TO SAVEPOINT",`ROLLBACK ( ? ) sp1;`,"sql","특정 저장점(sp1)까지 부분 롤백할 때 사이에 들어갈 키워드는?",["TO"],"ROLLBACK TO 저장점명","💡 ROLLBACK TO 저장점명;","TO"),
  V("SQL-VAR-0206-D","SQL-2026-02-06","[변형] REVOKE 권한 회수",`( ? ) SELECT ON emp FROM user1;`,"sql","사용자에게 부여된 SELECT 권한을 회수/박탈하는 DCL 명령어를 쓰시오.",["REVOKE"],"권한 회수는 REVOKE","💡 권한 부여는 GRANT, 권한 회수는 REVOKE!","REVOKE"),
  V("SQL-VAR-0206-E","SQL-2026-02-06","[변형] GRANT ... TO 권한 부여",`GRANT SELECT, INSERT ON emp ( ? ) user1;`,"sql","GRANT 구문에서 권한을 부여받을 대상을 지정할 때 쓰는 키워드는?",["TO"],"GRANT 권한 ON 객체 TO 사용자","💡 GRANT ... TO 대상;","TO"),
  V("SQL-VAR-0206-F","SQL-2026-02-06","[변형] WITH GRANT OPTION",`GRANT SELECT ON emp TO user1 WITH ( ? ) OPTION;`,"sql","부여받은 권한을 다른 사용자에게 재부여할 수 있는 권한까지 함께 위임하는 옵션은?",["GRANT"],"WITH GRANT OPTION (객체 권한 재부여 권한)","💡 권한 재부여 가능 옵션 = WITH GRANT OPTION!","GRANT"),
  V("SQL-VAR-0206-G","SQL-2026-02-06","[변형] WITH ADMIN OPTION",`GRANT CREATE TABLE TO user1 WITH ( ? ) OPTION;`,"sql","시스템 권한을 다른 사용자에게 재부여할 수 있도록 허용하는 옵션은?",["ADMIN"],"시스템 권한 재부여 WITH ADMIN OPTION","💡 시스템 권한 재부여 = WITH ADMIN OPTION!","ADMIN"),
  V("SQL-VAR-0206-H","SQL-2026-02-06","[변형] REVOKE CASCADE 권한 연쇄 회수",`REVOKE SELECT ON emp FROM user1 ( ? );`,"sql","user1이 다른 사람에게 재부여한 권한까지 모두 연쇄 회수하는 옵션은?",["CASCADE"],"REVOKE CASCADE 연쇄 권한 회수","💡 재부여된 권한까지 연쇄 회수하는 CASCADE!","CASCADE"),
  V("SQL-VAR-0206-I","SQL-2026-02-06","[변형] ROLE 역할 그룹 관리",`CREATE ( ? ) manager;`,"sql","다수의 권한을 묶어서 효율적으로 관리하기 위한 권한 그룹 객체를 생성하는 키워드는?",["ROLE"],"권한 묶음 객체 ROLE","💡 CREATE ROLE 롤이름;","ROLE"),
  V("SQL-VAR-0206-J","SQL-2026-02-06","[변형] 트랜잭션 ACID 특성 - 원자성(Atomicity)",`-- All or Nothing (모두 실행되거나 모두 취소됨)`,"sql","트랜잭션의 연산은 완전히 수행되거나 전혀 수행되지 않아야 한다는 ACID 특성은?",["원자성", "Atomicity"],"원자성 (All or Nothing)","💡 All or Nothing = 원자성(Atomicity)!","원자성"),
  V("SQL-VAR-0206-K","SQL-2026-02-06","[변형] 트랜잭션 ACID 특성 - 일관성(Consistency)",`-- 트랜잭션 전후에 데이터베이스 제약조건 만족 보장`,"sql","트랜잭션 수행 전후에 데이터베이스가 일관된 상태를 유지해야 한다는 특성은?",["일관성", "Consistency"],"일관성 (Consistency)","💡 제약조건 및 무결성 유지 = 일관성(Consistency)!","일관성"),
  V("SQL-VAR-0206-L","SQL-2026-02-06","[변형] 트랜잭션 ACID 특성 - 격리성/고립성(Isolation)",`-- 트랜잭션 수행 중 중간 결과를 다른 트랜잭션이 참조 불가`,"sql","동시에 실행되는 트랜잭션들이 서로 간섭하지 못하게 독립성을 보장하는 특성은?",["격리성", "고립성", "Isolation"],"격리성/고립성 (Isolation)","💡 동시 실행 간섭 방지 = 격리성/고립성(Isolation)!","격리성"),
  V("SQL-VAR-0206-M","SQL-2026-02-06","[변형] 트랜잭션 ACID 특성 - 영속성/지속성(Durability)",`-- 커밋된 결과는 시스템 장애가 발생해도 영구 보존됨`,"sql","성공적으로 완료된 트랜잭션의 결과는 영구적으로 반영되어야 한다는 특성은?",["영속성", "지속성", "Durability"],"영속성/지속성 (Durability)","💡 장애 시에도 영구 보존 = 영속성/지속성(Durability)!","영속성"),
  V("SQL-VAR-0206-N","SQL-2026-02-06","[변형] DDL 자동 커밋(Auto-commit) 특성",`UPDATE emp SET sal = 0; CREATE TABLE t (id INT); ROLLBACK;`,"sql","CREATE TABLE 실행 시 DDL에 의해 앞선 UPDATE가 자동 커밋되어 ROLLBACK이 적용되지 않는다. (O/X)",["O"],"대부분의 RDBMS에서 DDL은 암묵적 자동 커밋(Auto-commit)을 유발함","💡 DDL 실행 시 이전 트랜잭션은 즉시 자동 커밋!","'O'"),
  V("SQL-VAR-0206-O","SQL-2026-02-06","[변형] 트랜잭션 격리 수준 READ COMMITTED",`SET TRANSACTION ISOLATION LEVEL READ ( ? );`,"sql","커밋된 데이터만 읽을 수 있도록 허용하여 Dirty Read를 방지하는 기본 격리 수준은?",["COMMITTED"],"READ COMMITTED 격리 수준","💡 커밋된 것만 읽기 = READ COMMITTED!","COMMITTED"),
  V("SQL-VAR-0206-P","SQL-2026-02-06","[변형] Dirty Read 현상",`-- 트랜잭션 A가 수정 중인(미커밋) 데이터를 트랜잭션 B가 읽는 현상`,"sql","커밋되지 않은 트랜잭션의 임시 변경 데이터를 다른 트랜잭션이 읽는 이상 현상은?",["Dirty Read", "더티 리드", "더티리드"],"Dirty Read 현상","💡 미커밋 데이터 읽기 = Dirty Read!","Dirty Read"),
  V("SQL-VAR-0206-Q","SQL-2026-02-06","[변형] Non-Repeatable Read 현상",`-- 한 트랜잭션 내에서 같은 조회를 2번 수행할 때 값이 달라지는 현상`,"sql","동일 트랜잭션 내에서 동일 조회를 2번 했을 때 다른 트랜잭션의 UPDATE로 인해 값이 바뀌는 현상은?",["Non-Repeatable Read", "반복불가능읽기", "non repeatable read"],"Non-Repeatable Read 현상","💡 동일 쿼리 값 변경 = Non-Repeatable Read!","Non-Repeatable Read"),
  V("SQL-VAR-0206-R","SQL-2026-02-06","[변형] Phantom Read 현상",`-- 한 트랜잭션 내에서 같은 범위 조회를 2번 수행할 때 새로운 행이 나타나는 현상`,"sql","다른 트랜잭션의 INSERT로 인해 이전에 없던 유령(Phantom) 레코드가 나타나는 현상은?",["Phantom Read", "팬텀 리드", "팬텀리드", "유령읽기"],"Phantom Read 현상","💡 새로운 행 추가 등장 = Phantom Read!","Phantom Read"),
  V("SQL-VAR-0206-S","SQL-2026-02-06","[변형] 최고 격리 수준 SERIALIZABLE",`SET TRANSACTION ISOLATION LEVEL ( ? );`,"sql","동시성 이상 현상을 완벽 차단하지만 동시 처리 성능이 가장 낮은 최고 격리 수준은?",["SERIALIZABLE"],"최고 격리 수준 SERIALIZABLE","💡 완벽한 직렬화 = SERIALIZABLE!","SERIALIZABLE"),
  V("SQL-VAR-0206-T","SQL-2026-02-06","[변형] 데드락(Deadlock, 교착상태)",`-- 두 트랜잭션이 서로가 점유한 락을 획득하기 위해 무한정 대기하는 상태`,"sql","두 개 이상의 트랜잭션이 서로 상대방의 잠금 해제를 기다리며 무한 대기에 빠지는 현상은?",["데드락", "교착상태", "Deadlock", "교착 상태"],"교착 상태(Deadlock)","💡 상호 무한 대기 = 데드락(Deadlock)!","데드락")
];

export { SQL_QUESTIONS, SQL_VARIANTS };
