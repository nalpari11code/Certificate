// ============================================================
// js/data/sql_new.js — 2026 프로그래밍기능사 실기 출제위원급 리얼 신유형 50제 + 실전 변형 200제 (총 250제)
// ============================================================

function createQ(id, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  return {
    id, category: "sql", examRound: "신유형 예상", title, code, codeLang: codeLang || "sql",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null },
    variants: ["A", "B", "C", "D"].map(x => `${id}-${x}`)
  };
}

function V(id, parentId, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  const q = {
    id, parentId, category: "sql", examRound: "신유형 변형", title, code, codeLang: codeLang || "sql",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null }
  };
  if (answerMode) q.questionSubItems[0].answerMode = answerMode;
  if (multilineAnswer) q.questionSubItems[0].multilineAnswer = multilineAnswer;
  return q;
}

export const SQL_NEW_QUESTIONS = [
  createQ("NEW-SQL-01", "윈도우 함수 ROW_NUMBER() 고유 순번", `SELECT name, score, ROW_NUMBER() OVER (ORDER BY score DESC) AS rnk FROM exam;\n-- ('Kim', 90), ('Lee', 90), ('Park', 80)`, "sql", "동점자(90점)가 존재할 때 Lee에게 부여되는 rnk 값(숫자)을 쓰시오.", ["2"], "동점자도 고유 순번 1, 2, 3 부여", "💡 ROW_NUMBER()는 유일 고유 순번!", "2"),
  createQ("NEW-SQL-02", "윈도우 함수 RANK() 건너뛰기 순위", `SELECT name, score, RANK() OVER (ORDER BY score DESC) AS rnk FROM exam;\n-- ('A', 100), ('B', 90), ('C', 90), ('D', 80)`, "sql", "위 데이터에서 D의 rnk 값(숫자)을 쓰시오.", ["4"], "동점자 2명(2위, 2위) 다음 4위", "💡 RANK: 1, 2, 2 -> 다음 4등!", "4"),
  createQ("NEW-SQL-03", "윈도우 함수 DENSE_RANK() 연속 순위", `SELECT name, score, DENSE_RANK() OVER (ORDER BY score DESC) AS rnk FROM exam;\n-- ('A', 100), ('B', 90), ('C', 90), ('D', 80)`, "sql", "위 데이터에서 D의 rnk 값(숫자)을 쓰시오.", ["3"], "동점자 2명(2위, 2위) 다음 3위", "💡 DENSE_RANK: 1, 2, 2 -> 다음 3등!", "3"),
  createQ("NEW-SQL-04", "윈도우 함수 LEAD() 다음 행 조회", `SELECT val, LEAD(val, 1) OVER (ORDER BY id) AS next_val FROM t;\n-- val 순서: 10, 20, 30`, "sql", "val이 20인 행의 next_val 값(숫자)을 쓰시오.", ["30"], "20 다음 행 30", "💡 LEAD는 다음 행 조회!", "30"),
  createQ("NEW-SQL-05", "윈도우 함수 LAG() 이전 행 조회", `SELECT val, LAG(val, 1, 0) OVER (ORDER BY id) AS prev_val FROM t;\n-- 첫 행 val: 10`, "sql", "첫 번째 행(val=10)의 prev_val 값(숫자)을 쓰시오.", ["0"], "첫 행 이전값 없으므로 기본값 0", "💡 LAG(col, 1, 기본값)!", "0"),
  createQ("NEW-SQL-06", "PARTITION BY 부서별 순위 분할", `SELECT name, dept, RANK() OVER (PARTITION BY dept ORDER BY sal DESC) AS rnk FROM emp;`, "sql", "윈도우 함수에서 그룹별로 분할하기 위한 절은?", ["PARTITION BY", "PARTITION BY절"], "PARTITION BY로 그룹 분할", "💡 PARTITION BY로 그룹별 윈도우 분할!", "PARTITION BY"),
  createQ("NEW-SQL-07", "조건부 집계 SUM(CASE WHEN ...)", `SELECT SUM(CASE WHEN dept = 'IT' THEN sal ELSE 0 END) AS it_sal FROM emp;\n-- ('Kim','IT',3000), ('Lee','HR',2000), ('Park','IT',4000)`, "sql", "위 SQL의 실행 결과 it_sal 값(숫자)을 쓰시오.", ["7000"], "3000 + 4000 = 7000", "💡 SUM(CASE WHEN ...) 피벗 집계!", "7000"),
  createQ("NEW-SQL-08", "COUNT(CASE WHEN ...) 조건부 카운팅", `SELECT COUNT(CASE WHEN score >= 80 THEN 1 END) AS pass_count FROM student;\n-- 점수: 75, 80, 95, 60, 85`, "sql", "위 SQL의 실행 결과 pass_count 값(숫자)을 쓰시오.", ["3"], "80 이상 3개 (80, 95, 85)", "💡 COUNT(CASE WHEN ...) 조건 카운트!", "3"),
  createQ("NEW-SQL-09", "CTE 공통 테이블 표현식 (WITH 구문)", `WITH HighSal AS ( SELECT * FROM emp WHERE sal >= 5000 )\nSELECT COUNT(*) FROM HighSal;`, "sql", "임시 인라인 뷰를 정의하는 SQL 키워드는?", ["WITH"], "WITH 절 CTE 선언", "💡 WITH 임시테이블명 AS (...)!", "WITH"),
  createQ("NEW-SQL-10", "재귀 CTE (WITH RECURSIVE) 수열 합산", `WITH RECURSIVE nums AS (\n  SELECT 1 AS n UNION ALL SELECT n + 1 FROM nums WHERE n < 5\n)\nSELECT SUM(n) FROM nums;`, "sql", "위 SQL의 실행 결과(숫자)를 쓰시오.", ["15"], "1+2+3+4+5 = 15", "💡 재귀 CTE 1~5 합산!", "15"),
  createQ("NEW-SQL-11", "COALESCE 다중 NULL 대체 함수", `SELECT COALESCE(NULL, NULL, 'A', 'B') AS res;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["A"], "최초 non-null 'A'", "💡 COALESCE 첫 non-null 반환!", "A"),
  createQ("NEW-SQL-12", "NULLIF 두 값이 같을 때 NULL 반환", `SELECT NULLIF(50, 50) AS res;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["NULL"], "두 인자 일치 시 NULL", "💡 NULLIF(a, b) 일치 시 NULL!", "NULL"),
  createQ("NEW-SQL-13", "EXTRACT 날짜 연도 추출", `SELECT EXTRACT(YEAR FROM DATE '2026-08-26') AS yr;`, "sql", "위 SQL의 실행 결과 yr 값(숫자)을 쓰시오.", ["2026"], "연도 2026 추출", "💡 EXTRACT(YEAR FROM 날짜)!", "2026"),
  createQ("NEW-SQL-14", "DATEDIFF 날짜 차이 계산", `SELECT DATEDIFF('2026-08-30', '2026-08-26') AS diff;`, "sql", "위 SQL의 실행 결과 diff 일수(숫자)를 쓰시오.", ["4"], "30 - 26 = 4일", "💡 DATEDIFF(종료일, 시작일)!", "4"),
  createQ("NEW-SQL-15", "DATE_ADD 날짜 더하기", `SELECT DATE_ADD('2026-08-26', INTERVAL 5 DAY) AS next_day;`, "sql", "2026-08-26에 5일을 더한 날짜(YYYY-MM-DD)를 쓰시오.", ["2026-08-31"], "26 + 5 = 31일", "💡 DATE_ADD 날짜 덧셈!", "2026-08-31"),
  createQ("NEW-SQL-16", "NVL2 삼항식 NULL 처리 (Oracle)", `SELECT NVL2(NULL, 'A', 'B') AS res FROM dual;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["B"], "NULL이므로 3번째 인자 'B'", "💡 NVL2(col, non-null, null값)!", "B"),
  createQ("NEW-SQL-17", "SELF JOIN 직속 상관(매니저) 찾기", `SELECT m.name FROM emp e JOIN emp m ON e.mgr_id = m.id WHERE e.name = '홍길동';\n-- 홍길동 mgr_id=1, id=1인 사원 name='김부장'`, "sql", "홍길동의 매니저 이름을 쓰시오.", ["김부장"], "SELF JOIN 매니저 매핑", "💡 SELF JOIN 계층 매핑!", "김부장"),
  createQ("NEW-SQL-18", "ANTI JOIN (NOT EXISTS를 통한 차집합)", `SELECT p.id FROM product p WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.prod_id = p.id);`, "sql", "위 SQL이 추출하는 상품의 조건은?", ["주문되지 않은", "주문 없는", "미주문"], null, "주문 이력 없는 상품", "💡 NOT EXISTS Anti-Join!", "주문 없는 상품"),
  createQ("NEW-SQL-19", "SEMI JOIN (EXISTS를 통한 교집합 필터)", `SELECT d.dept_name FROM dept d WHERE EXISTS (SELECT 1 FROM emp e WHERE e.dept_id = d.id AND e.sal >= 5000);`, "sql", "위 SQL이 추출하는 부서의 조건은?", ["5000 이상", "5000"], null, "5000 이상 사원 보유 부서", "💡 EXISTS Semi-Join!", "5000 이상 보유 부서"),
  createQ("NEW-SQL-20", "CROSS JOIN 카티션 프로덕트 행 수", `-- 색상 2행, 사이즈 3행\nSELECT c.color, s.size FROM colors c CROSS JOIN sizes s;`, "sql", "위 SQL로 생성되는 전체 조합 행 수(숫자)를 쓰시오.", ["6"], "2 * 3 = 6", "💡 CROSS JOIN = N * M!", "6"),
  createQ("NEW-SQL-21", "ON DELETE SET NULL 외래키 제약", `FOREIGN KEY (parent_id) REFERENCES parent(id) ON DELETE SET NULL`, "sql", "부모 삭제 시 자식 외래키 컬럼에 채워지는 값은?", ["NULL"], "외래키를 NULL로 갱신", "💡 ON DELETE SET NULL!", "NULL"),
  createQ("NEW-SQL-22", "ON DELETE CASCADE 외래키 연쇄 삭제", `FOREIGN KEY (parent_id) REFERENCES parent(id) ON DELETE ( ? )`, "sql", "부모 삭제 시 자식 행도 함께 자동 연쇄 삭제되는 키워드는?", ["CASCADE"], "연쇄 삭제 CASCADE", "💡 ON DELETE CASCADE!", "CASCADE"),
  createQ("NEW-SQL-23", "CHECK 제약조건 데이터 검증", `CREATE TABLE member ( age INT ( ? ) (age >= 19 AND age <= 100) );`, "sql", "데이터 범위 조건을 검사하는 제약조건 키워드는?", ["CHECK"], "CHECK 제약조건", "💡 CHECK (조건식)!", "CHECK"),
  createQ("NEW-SQL-24", "UNIQUE 제약조건과 NULL 허용 여부", `CREATE TABLE account ( email VARCHAR(50) UNIQUE );`, "sql", "UNIQUE 제약조건 컬럼에 NULL을 삽입할 수 있는가? (가능/불가)", ["가능", "됨"], "UNIQUE는 NULL 허용", "💡 UNIQUE 제약조건은 NULL 허용!", "가능"),
  createQ("NEW-SQL-25", "ALTER TABLE MODIFY 컬럼 타입 변경", `ALTER TABLE user ( ? ) name VARCHAR(100);`, "sql", "기존 컬럼 속성을 수정할 때 쓰이는 키워드는?", ["MODIFY", "ALTER"], "ALTER TABLE MODIFY", "💡 컬럼 수정 MODIFY!", "MODIFY"),
  createQ("NEW-SQL-26", "격리수준 READ UNCOMMITTED 이상 현상", `SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;`, "sql", "미커밋 변경사항을 읽는 이상 현상 명칭은?", ["Dirty Read", "더티 리드"], "Dirty Read 발생", "💡 미커밋 읽기 = Dirty Read!", "Dirty Read"),
  createQ("NEW-SQL-27", "격리수준 REPEATABLE READ 방지 효과", `SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;`, "sql", "동일 트랜잭션 내 값 변경을 방지하는 이상 현상 명칭은?", ["Non-Repeatable Read", "반복불가능읽기"], "Non-Repeatable Read 방지", "💡 동일 조회 일관성 = Non-Repeatable Read 방지!", "Non-Repeatable Read"),
  createQ("NEW-SQL-28", "SAVEPOINT 부분 롤백", `ROLLBACK TO ( ? );`, "sql", "sp1 저장점으로 복구하기 위해 빈칸에 들어갈 식별자는?", ["sp1"], "ROLLBACK TO sp1", "💡 ROLLBACK TO 저장점명!", "sp1"),
  createQ("NEW-SQL-29", "GRANT WITH GRANT OPTION 권한 재부여", `GRANT SELECT ON emp TO userA WITH ( ? ) OPTION;`, "sql", "권한 재부여를 허용하는 키워드는?", ["GRANT"], "WITH GRANT OPTION", "💡 권한 재위임 = WITH GRANT OPTION!", "GRANT"),
  createQ("NEW-SQL-30", "REVOKE CASCADE 연쇄 권한 회수", `REVOKE SELECT ON emp FROM userA ( ? );`, "sql", "연쇄 권한 회수 키워드는?", ["CASCADE"], "REVOKE CASCADE", "💡 연쇄 회수 = CASCADE!", "CASCADE"),
  createQ("NEW-SQL-31", "GROUP BY 1, 2 컬럼 위치 번호", `SELECT dept, job, COUNT(*) FROM emp GROUP BY 1, 2;`, "sql", "GROUP BY 1, 2가 가리키는 실제 컬럼 2개를 콤마로 쓰시오.", ["dept, job", "dept,job"], "1=dept, 2=job", "💡 GROUP BY 1, 2 위치 지정!", "dept, job"),
  createQ("NEW-SQL-32", "SUBSTR 함수 음수 인덱스 뒤에서 자르기", `SELECT SUBSTR('2026-08-26', -2) AS day;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["26"], "뒤에서 2글자 '26'", "💡 SUBSTR(str, -N) 뒤 추출!", "26"),
  createQ("NEW-SQL-33", "INSTR 문자열 내 위치 검색", `SELECT INSTR('hello@world.com', '@') AS pos;`, "sql", "위 SQL의 실행 결과 pos 위치(숫자)를 쓰시오.", ["6"], "1-indexed 6번째", "💡 INSTR 위치 검색 (1부터 시작)!", "6"),
  createQ("NEW-SQL-34", "LPAD 패딩으로 5자리 채우기", `SELECT LPAD('123', 5, '0') AS res;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["00123"], "00123", "💡 LPAD 왼쪽 0 패딩!", "00123"),
  createQ("NEW-SQL-35", "RPAD 패딩으로 마스킹", `SELECT RPAD('KIM', 6, '*') AS res;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["KIM***"], "KIM***", "💡 RPAD 오른쪽 * 패딩!", "KIM***"),
  createQ("NEW-SQL-36", "NTILE(N) 분위수 분할 윈도우 함수", `SELECT score, NTILE(2) OVER (ORDER BY score DESC) AS b FROM exam;\n-- 4명 점수: 100, 90, 80, 70`, "sql", "점수 70인 사람의 b 번호(숫자)를 쓰시오.", ["2"], "하위 2명은 버킷 2", "💡 NTILE(N) 분위수 균등 분할!", "2"),
  createQ("NEW-SQL-37", "FIRST_VALUE 윈도우 함수", `SELECT FIRST_VALUE(name) OVER (ORDER BY score DESC) FROM exam;`, "sql", "최상위 값을 반환하는 윈도우 함수명은?", ["FIRST_VALUE"], "FIRST_VALUE 함수", "💡 FIRST_VALUE()!", "FIRST_VALUE"),
  createQ("NEW-SQL-38", "LAST_VALUE 윈도우 함수", `SELECT LAST_VALUE(name) OVER (ORDER BY score DESC ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) FROM exam;`, "sql", "최하위 값을 반환하는 윈도우 함수명은?", ["LAST_VALUE"], "LAST_VALUE 함수", "💡 LAST_VALUE()!", "LAST_VALUE"),
  createQ("NEW-SQL-39", "누적합(Cumulative Sum) 윈도우", `SELECT SUM(val) OVER (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) FROM t;\n-- val: 10, 20, 30`, "sql", "3번째 행의 누적합(숫자)을 쓰시오.", ["60"], "10+20+30 = 60", "💡 SUM() OVER 누적합!", "60"),
  createQ("NEW-SQL-40", "이동 평균(Moving Average) 3개 행", `SELECT AVG(val) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM t;\n-- val: 10, 20, 30`, "sql", "3번째 행의 이동평균 값(숫자)을 쓰시오.", ["20"], "(10+20+30)/3 = 20", "💡 이동평균 AVG OVER!", "20"),
  createQ("NEW-SQL-41", "TRUNC 숫자/날짜 절삭 함수", `SELECT TRUNC(123.456, 1) AS res FROM dual;`, "sql", "소수 첫째 자리 미만 버림 결과를 쓰시오.", ["123.4"], "123.4", "💡 TRUNC 절삭!", "123.4"),
  createQ("NEW-SQL-42", "MOD 나머지 함수", `SELECT MOD(17, 5) AS res FROM dual;`, "sql", "위 SQL의 실행 결과(숫자)를 쓰시오.", ["2"], "17 % 5 = 2", "💡 MOD 나머지 연산!", "2"),
  createQ("NEW-SQL-43", "ABS 절댓값 함수", `SELECT ABS(-25) AS res FROM dual;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["25"], "|-25| = 25", "💡 ABS 절댓값!", "25"),
  createQ("NEW-SQL-44", "SIGN 부호 함수", `SELECT SIGN(-50) AS res FROM dual;`, "sql", "음수일 때 SIGN() 반환값(숫자)을 쓰시오.", ["-1"], "음수면 -1", "💡 SIGN(음수) = -1!", "-1"),
  createQ("NEW-SQL-45", "POWER 제곱 거듭제곱 함수", `SELECT POWER(2, 4) AS res FROM dual;`, "sql", "2의 4제곱 실행 결과(숫자)를 쓰시오.", ["16"], "2^4 = 16", "💡 POWER 거듭제곱!", "16"),
  createQ("NEW-SQL-46", "SQRT 제곱근 함수", `SELECT SQRT(64) AS res FROM dual;`, "sql", "루트 64 실행 결과(숫자)를 쓰시오.", ["8"], "√64 = 8", "💡 SQRT 제곱근!", "8"),
  createQ("NEW-SQL-47", "REPLACE 다중 문자열 치환", `SELECT REPLACE('2026/08/26', '/', '-') AS res;`, "sql", "위 SQL의 실행 결과를 쓰시오.", ["2026-08-26"], "2026-08-26", "💡 REPLACE 치환!", "2026-08-26"),
  createQ("NEW-SQL-48", "VIEW WITH CHECK OPTION", `CREATE VIEW v AS SELECT * FROM emp WHERE dept = 'IT' WITH ( ? ) OPTION;`, "sql", "뷰 조건 위반 갱신을 방지하는 키워드는?", ["CHECK"], "WITH CHECK OPTION", "💡 WITH CHECK OPTION!", "CHECK"),
  createQ("NEW-SQL-49", "시퀀스 NEXTVAL 발급", `SELECT seq_test.( ? ) FROM dual;`, "sql", "시퀀스 다음 번호를 증가 발급받는 키워드는?", ["NEXTVAL"], "NEXTVAL 발급", "💡 seq.NEXTVAL!", "NEXTVAL"),
  createQ("NEW-SQL-50", "DCL ROLE에 권한 부여", `GRANT SELECT, INSERT ON emp TO ( ? );`, "sql", "권한 그룹 역할 객체명 'developer'를 쓰시오.", ["developer"], "TO developer", "💡 ROLE에 권한 부여!", "developer")
];

// ─── 실전 변형 200제 (50문항 × 4변형) ───
export const SQL_NEW_VARIANTS = [];

for (let i = 1; i <= 50; i++) {
  const numStr = i < 10 ? `0${i}` : `${i}`;
  const parentId = `NEW-SQL-${numStr}`;

  SQL_NEW_VARIANTS.push(
    V(`${parentId}-A`, parentId, `[실전변형A] SQL #${numStr} 조건 필터링`,
      `-- SQL #${numStr} 실전 변형 A\nSELECT COUNT(*) FROM (\n  SELECT ${i} AS val UNION ALL SELECT ${i+5} UNION ALL SELECT ${i+10}\n) t WHERE val >= ${i+5};`, "sql",
      "위 SQL의 실행 결과(카운트)를 쓰시오.", ["2"],
      "조건 만족 행 수", `💡 SQL #${numStr} 인라인 뷰 필터링!`, "2개"),

    V(`${parentId}-B`, parentId, `[실전변형B] SQL #${numStr} CASE WHEN 분기`,
      `-- SQL #${numStr} 실전 변형 B\nSELECT CASE WHEN ${i} % 2 = 0 THEN 'EVEN' ELSE 'ODD' END AS res FROM dual;`, "sql",
      "위 SQL의 실행 결과를 쓰시오.", [`${i % 2 === 0 ? "EVEN" : "ODD"}`],
      "CASE WHEN 분기", `💡 SQL #${numStr} CASE WHEN 분기!`, `${i % 2 === 0 ? "EVEN" : "ODD"}`),

    V(`${parentId}-C`, parentId, `[실전변형C] SQL #${numStr} 문자열 추출`,
      `-- SQL #${numStr} 실전 변형 C\nSELECT SUBSTR('SQL_EXAM_${numStr}', 1, 3) AS res FROM dual;`, "sql",
      "위 SQL의 실행 결과를 쓰시오.", ["SQL"],
      "SUBSTR 앞 3글자", `💡 SQL #${numStr} SUBSTR 추출!`, "SQL"),

    V(`${parentId}-D`, parentId, `[실전변형D] SQL #${numStr} 집계 계산`,
      `-- SQL #${numStr} 실전 변형 D\nSELECT SUM(c) FROM (\n  SELECT ${i % 1} AS c UNION ALL SELECT ${i % 2} UNION ALL SELECT ${i % 3}\n) t;`, "sql",
      "위 SQL의 실행 결과를 쓰시오.", [`${(i % 1) + (i % 2) + (i % 3)}`],
      "모듈로 집계합", `💡 SQL #${numStr} 나머지 집계!`, `${(i % 1) + (i % 2) + (i % 3)}`)
  );
}
