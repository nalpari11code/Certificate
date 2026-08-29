// ============================================================
// js/data/conceptRef.js — 진짜 핵심 개념 노트 (기본서 요약 기반)
// 문법, 필수 메서드, SQL 표준 구문, 쉘 명령어, 예외처리 완벽 총정리
// ============================================================

export const CONCEPT_REF_DATA = {
  java: {
    icon: '☕',
    label: 'Java 문법 & 메서드',
    color: '#ED8B00',
    sections: [
      {
        title: '1. 문자열(String) & 문자(Character) 핵심 메서드',
        content: `<table class="concept-table">
<thead><tr><th>메서드</th><th>문법 / 사용법</th><th>설명 및 반환값</th></tr></thead>
<tbody>
<tr><td><code>compareTo(B)</code></td><td><code>strA.compareTo(strB)</code></td><td>문자열 대소 비교. <b>같으면 0</b>, <code>strA &gt; strB</code>면 <b>1(양수)</b>, <code>strA &lt; strB</code>면 <b>-1(음수)</b></td></tr>
<tr><td><code>substring(start, end)</code></td><td><code>str.substring(1, 4)</code></td><td>인덱스 <code>start</code>부터 <code>end - 1</code>까지의 부분 문자열 추출 (<code>end</code> 생략 시 맨 끝까지 추출)</td></tr>
<tr><td><code>charAt(index)</code></td><td><code>str.charAt(2)</code></td><td>해당 인덱스(0부터 시작) 위치의 <code>char</code> 문자 1개 반환</td></tr>
<tr><td><code>Character.getNumericValue(ch)</code></td><td><code>Character.getNumericValue('5')</code></td><td>문자를 <code>int</code> 정수값으로 변환<br>• 숫자 문자: 숫자 그대로 반환 (<code>'5'</code> → <code>5</code>)<br>• 영문자 (<code>'A'~'Z'</code>, <code>'a'~'z'</code>): <b>10 ~ 35</b> 반환<br>• 특수문자, 한글 등: <b>-1</b> 반환<br>• 분수 등 정수 불가 문자: <b>-2</b> 반환</td></tr>
<tr><td><code>StringTokenizer</code></td><td><code>new StringTokenizer(str)</code></td><td>문자열을 토큰 단위로 분리<br>• <code>countTokens()</code>: 남아있는 토큰 개수 반환<br>• <code>hasMoreTokens()</code>: 꺼낼 토큰이 있으면 <code>true</code>, 없으면 <code>false</code><br>• <code>nextToken()</code>: 차례대로 다음 토큰을 꺼내어 반환</td></tr>
</tbody></table>`,
        trap: '<code>substring(1, 4)</code>는 1, 2, 3번 인덱스 추출 (4번 인덱스는 미포함!). <code>Character.getNumericValue(\'A\')</code>는 10을 반환합니다.'
      },
      {
        title: '2. 수학(Math) 클래스 핵심 메서드 & 난수 생성',
        content: `<table class="concept-table">
<thead><tr><th>메서드</th><th>사용 예시</th><th>반환값 / 특징</th></tr></thead>
<tbody>
<tr><td><code>Math.abs(n)</code></td><td><code>Math.abs(-10)</code></td><td>절댓값 반환 (<code>10</code>)</td></tr>
<tr><td><code>Math.log10(n)</code></td><td><code>Math.log10(100)</code></td><td>상용로그 값 ($10^x = n$ 만족하는 $x$) → <code>2.0</code></td></tr>
<tr><td><code>Math.pow(a, b)</code></td><td><code>Math.pow(2, 3)</code></td><td>거듭제곱 ($a^b$) → <code>8.0</code> (double형 반환)</td></tr>
<tr><td><code>Math.round(n)</code></td><td><code>Math.round(3.6)</code></td><td>소수점 첫째 자리에서 <b>반올림</b>한 정수 반환 (<code>4</code>)</td></tr>
<tr><td><code>Math.ceil(n)</code></td><td><code>Math.ceil(3.2)</code></td><td>소수점 <b>올림</b>값 반환 (<code>4.0</code>)</td></tr>
<tr><td><code>Math.floor(n)</code></td><td><code>Math.floor(3.8)</code></td><td>소수점 <b>내림</b>값 반환 (<code>3.0</code>)</td></tr>
<tr><td><code>Math.random()</code></td><td><code>Math.random()</code></td><td><b>0.0 이상 1.0 미만</b> (0.0 &le; x &lt; 1.0)의 double 실수 난수 생성</td></tr>
</tbody></table>`
      },
      {
        title: '3. Java 예외 처리 (Exception Handling) 핵심 규칙',
        content: `<div class="concept-highlight">예외(Exception)가 발생했을 때 프로그램의 비정상 종료를 막고 정상 실행 흐름을 유지하도록 하는 기법</div>
<div class="code-block"><pre>try {
    // 예외 발생 가능성이 있는 실행 코드
} catch (ArithmeticException e) {
    // 해당 예외 발생 시 처리 루틴
} catch (Exception e) {
    // 상위 예외 처리
} finally {
    // 예외 발생 여부와 상관없이 항상 실행
}</pre></div>
<ul class="concept-list">
<li><b>중괄호 생략 불가:</b> <code>try ~ catch</code> 문에서는 실행 코드가 단 한 줄이어도 <code>{ }</code> 중괄호를 생략할 수 없습니다.</li>
<li><b>변수 유효 범위:</b> <code>catch</code> 블록 괄호 안에서 선언된 예외 변수는 오직 해당 <code>catch</code> 블록 내부에서만 유효합니다.</li>
<li><b>중첩 가능:</b> <code>try ~ catch</code> 블록 내부에 또 다른 <code>try ~ catch</code> 블록을 중첩하여 작성할 수 있습니다.</li>
</ul>`
      },
      {
        title: '4. 시험 빈출 Java 10대 표준 예외(Exception) 클래스',
        content: `<table class="concept-table">
<thead><tr><th>예외 클래스명</th><th>발생 원인 및 설명</th></tr></thead>
<tbody>
<tr><td><code>ClassNotFoundException</code></td><td>지정한 클래스 파일을 찾을 수 없을 때 발생</td></tr>
<tr><td><code>NoSuchMethodException</code></td><td>지정한 메서드를 클래스 내에서 찾을 수 없을 때 발생</td></tr>
<tr><td><code>FileNotFoundException</code></td><td>접근하려는 파일이 지정된 경로에 존재하지 않을 때 발생</td></tr>
<tr><td><code>InterruptedException</code></td><td>스레드의 입출력 또는 대기 처리가 외부 인터럽트로 중단되었을 때 발생</td></tr>
<tr><td><code>ArithmeticException</code></td><td>산술 연산 오류 (예: 정수를 <code>0</code>으로 나누는 경우 <code>10 / 0</code>)</td></tr>
<tr><td><code>IllegalArgumentException</code></td><td>메서드에 부적절하거나 잘못된 인자(Argument)를 전달했을 때</td></tr>
<tr><td><code>NumberFormatException</code></td><td>숫자로 변환할 수 없는 문자열을 숫자로 파싱하려 할 때 (예: <code>Integer.parseInt("abc")</code>)</td></tr>
<tr><td><code>ArrayIndexOutOfBoundsException</code></td><td>배열의 유효 인덱스 범위를 벗어난 위치에 접근할 때 (예: 길이 3 배열의 <code>arr[5]</code> 접근)</td></tr>
<tr><td><code>NegativeArraySizeException</code></td><td>배열 생성 시 크기를 0보다 작은 음수로 지정했을 때 (예: <code>new int[-3]</code>)</td></tr>
<tr><td><code>NullPointerException</code></td><td><code>null</code> 값을 가진 객체 참조 변수의 멤버나 메서드에 접근하려 할 때 (가장 빈출!)</td></tr>
</tbody></table>`
      }
    ]
  },
  python: {
    icon: '🐍',
    label: 'Python 문법 & 메서드',
    color: '#3776AB',
    sections: [
      {
        title: '1. 리스트 / 딕셔너리 / 세트 핵심 조작 메서드',
        content: `<table class="concept-table">
<thead><tr><th>자료형</th><th>메서드</th><th>문법 및 기능</th><th>주의사항 및 특징</th></tr></thead>
<tbody>
<tr><td rowspan="2"><b>리스트 (List)</b></td><td><code>pop(index)</code></td><td><code>arr.pop(i)</code>: i번째 요소를 꺼내어 반환하고 삭제</td><td>인덱스 생략 시 <b>마지막 요소</b>를 삭제하며 반환</td></tr>
<tr><td><code>sort()</code></td><td><code>arr.sort(reverse=True/False)</code></td><td>리스트를 제자리(In-place) 정렬.<br>• <code>reverse=False</code>: 오름차순 (기본값)<br>• <code>reverse=True</code>: 내림차순</td></tr>
<tr><td><b>딕셔너리 (Dict)</b></td><td><code>get(key, default)</code></td><td><code>d.get(key, default)</code>: key에 해당하는 값 반환</td><td>key가 없으면 <code>default</code> 반환 (생략 시 <code>None</code> 반환하여 에러 방지)</td></tr>
<tr><td><b>세트 (Set)</b></td><td><code>pop()</code></td><td><code>s.pop()</code>: 세트에서 임의의 요소를 꺼내고 삭제</td><td>세트는 순서가 없으므로 <b>인수 입력 불가</b>하며, 어떤 값이 삭제될지 예측 불가</td></tr>
<tr><td><b>난수 (Random)</b></td><td><code>random.random()</code></td><td><code>import random; random.random()</code></td><td><b>0.0 이상 1.0 미만</b>의 부동소수점 실수 난수 반환</td></tr>
</tbody></table>`
      },
      {
        title: '2. 슬라이싱(Slicing) & 증감폭(Step) 문법',
        content: `<div class="code-block"><pre>nums = [10, 20, 30, 40, 50, 60]</pre></div>
<table class="concept-table">
<thead><tr><th>구문</th><th>결과</th><th>해석</th></tr></thead>
<tbody>
<tr><td><code>nums[1:4]</code></td><td><code>[20, 30, 40]</code></td><td>1번 인덱스부터 3번 인덱스까지 (4 미포함)</td></tr>
<tr><td><code>nums[::2]</code></td><td><code>[10, 30, 50]</code></td><td>처음부터 끝까지 2칸씩 건너뛰며 추출</td></tr>
<tr><td><code>nums[::-1]</code></td><td><code>[60, 50, 40, 30, 20, 10]</code></td><td>리스트 전체를 <b>역순(Reverse)</b>으로 뒤집음</td></tr>
<tr><td><code>nums[-3:]</code></td><td><code>[40, 50, 60]</code></td><td>뒤에서 3번째 요소부터 끝까지</td></tr>
</tbody></table>`
      }
    ]
  },
  sql_ddl: {
    icon: '🗄️',
    label: 'SQL DDL & DCL & 제약조건',
    color: '#06b6d4',
    sections: [
      {
        title: '1. DDL (데이터 정의어) 핵심 구문 총정리',
        content: `<div class="concept-highlight">DDL (Data Define Language): SCHEMA, DOMAIN, TABLE, VIEW, INDEX 정의, 변경, 삭제</div>
<table class="concept-table">
<thead><tr><th>명령어</th><th>기본 형식</th><th>상세 설명</th></tr></thead>
<tbody>
<tr><td><b>CREATE SCHEMA</b></td><td><code>CREATE SCHEMA 스키마명 AUTHORIZATION 사용자_id;</code></td><td>스키마 정의 및 소유권자 지정</td></tr>
<tr><td><b>CREATE DOMAIN</b></td><td><code>CREATE DOMAIN 도메인명 [AS] 데이터_타입 [DEFAULT 기본값] [CONSTRAINT 제약조건명 CHECK (범위값)];</code></td><td>임의의 속성이 가질 수 있는 값의 범위를 독립적인 도메인으로 정의</td></tr>
<tr><td><b>CREATE TABLE</b></td><td><code>CREATE TABLE 테이블명 (<br>&nbsp;&nbsp;속성명 타입 [DEFAULT 값] [NOT NULL],<br>&nbsp;&nbsp;PRIMARY KEY(기본키_속성),<br>&nbsp;&nbsp;UNIQUE(대체키_속성),<br>&nbsp;&nbsp;FOREIGN KEY(외래키) REFERENCES 참조테이블(기본키),<br>&nbsp;&nbsp;CONSTRAINT 제약명 CHECK(조건식)<br>);</code></td><td>테이블 생성, 속성 정의, 기본키/외래키/체크 제약조건 설정</td></tr>
<tr><td><b>CREATE VIEW</b></td><td><code>CREATE VIEW 뷰명[(속성명,...)] AS SELECT문;</code></td><td>SELECT 쿼리 결과를 가상 테이블(뷰)로 정의</td></tr>
<tr><td><b>CREATE INDEX</b></td><td><code>CREATE [UNIQUE] INDEX 인덱스명 ON 테이블명(속성명 [ASC|DESC]) [CLUSTER];</code></td><td>검속 속도 향상을 위한 인덱스 생성.<br>• <code>UNIQUE</code>: 중복값 불허<br>• <code>CLUSTER</code>: 클러스터드 인덱스</td></tr>
<tr><td><b>ALTER TABLE</b></td><td>• <code>ALTER TABLE T ADD 속성명 타입;</code> (속성 추가)<br>• <code>ALTER TABLE T ALTER 속성명 타입;</code> (속성 변경)<br>• <code>ALTER TABLE T DROP COLUMN 속성명 [CASCADE];</code> (속성 삭제)</td><td>기존 테이블의 구조를 동적으로 변경</td></tr>
<tr><td><b>DROP</b></td><td><code>DROP SCHEMA|DOMAIN|TABLE|VIEW|INDEX 이름 [CASCADE | RESTRICT];</code></td><td>정의된 객체를 완전히 삭제</td></tr>
</tbody></table>`,
        trap: '<b>CASCADE:</b> 삭제할 요소를 참조 중인 다른 모든 개체까지 연쇄 삭제!<br><b>RESTRICT:</b> 삭제할 요소를 다른 개체가 참조 중이면 삭제 취소(거부)!'
      },
      {
        title: '2. SQL 지원 표준 데이터 타입 총정리',
        content: `<table class="concept-table">
<thead><tr><th>분류</th><th>데이터 타입</th><th>설명</th></tr></thead>
<tbody>
<tr><td rowspan="2"><b>정수형</b></td><td><code>INTEGER</code></td><td>표준 정수형</td></tr>
<tr><td><code>SMALLINT</code></td><td>작은 범위 정수형</td></tr>
<tr><td rowspan="3"><b>실수형</b></td><td><code>FLOAT</code> / <code>REAL</code></td><td>부동소수점 실수</td></tr>
<tr><td><code>DOUBLE PRECISION</code></td><td>배정밀도 부동소수점 실수</td></tr>
<tr><td><code>DEC(i, j)</code> / <code>DECIMAL(i, j)</code></td><td>고정소수점 숫자 (i: 전체 자릿수, j: 소수부 자릿수)</td></tr>
<tr><td rowspan="2"><b>문자형</b></td><td><code>CHAR(n)</code> / <code>CHARACTER(n)</code></td><td><b>고정 길이</b> 문자열 (n: 문자 수)</td></tr>
<tr><td><code>VARCHAR(n)</code> / <code>CHARACTER VARYING(n)</code></td><td><b>가변 길이</b> 문자열 (n: 최대 문자 수)</td></tr>
<tr><td rowspan="2"><b>비트열</b></td><td><code>BIT(n)</code> / <code>VARBIT(n)</code></td><td>고정길이 / 가변길이 비트열</td></tr>
<tr><td rowspan="2"><b>날짜/시간</b></td><td><code>DATE</code> / <code>TIME</code></td><td>날짜(연-월-일) / 시간(시:분:초)</td></tr>
</tbody></table>`
      },
      {
        title: '3. DCL (데이터 제어어) & 트랜잭션 제어 총정리',
        content: `<table class="concept-table">
<thead><tr><th>명령어</th><th>구문 형식</th><th>역할 및 주요 옵션</th></tr></thead>
<tbody>
<tr><td><b>GRANT</b></td><td><code>GRANT 권한_리스트 ON 개체 TO 사용자 [WITH GRANT OPTION];</code></td><td>사용자에게 개체에 대한 권한(SELECT, INSERT 등) 부여<br>• <code>WITH GRANT OPTION</code>: 권한을 부여받은 사용자가 다른 사용자에게도 해당 권한을 재부여할 수 있음</td></tr>
<tr><td><b>REVOKE</b></td><td><code>REVOKE [GRANT OPTION FOR] 권한_리스트 ON 개체 FROM 사용자 [CASCADE];</code></td><td>부여했던 권한 취소<br>• <code>GRANT OPTION FOR</code>: 권한 재부여 권한만 취소<br>• <code>CASCADE</code>: 해당 사용자가 다른 이에게 부여한 권한까지 연쇄 취소</td></tr>
<tr><td><b>COMMIT</b></td><td><code>COMMIT;</code></td><td>트랜잭션 작업을 정상 완료하고 결과를 DB에 영구 반영</td></tr>
<tr><td><b>ROLLBACK</b></td><td><code>ROLLBACK [TO SAVEPOINT명];</code></td><td>트랜잭션 작업 실패 시 이전 상태 또는 지정된 SAVEPOINT로 원상 복구</td></tr>
<tr><td><b>SAVEPOINT</b></td><td><code>SAVEPOINT 세이브포인트명;</code></td><td>트랜잭션 내에서 롤백할 수 있는 체크포인트(저장점) 지정</td></tr>
</tbody></table>`
      }
    ]
  },
  sql_dml: {
    icon: '📊',
    label: 'SQL DML & 내장함수 & 조인(JOIN)',
    color: '#3b82f6',
    sections: [
      {
        title: '1. DML (데이터 조작어) & SELECT문 실행 순서',
        content: `<div class="concept-highlight">DML: SELECT(검색), INSERT(삽입), UPDATE(수정), DELETE(삭제)</div>
<div class="code-block"><pre>SELECT [ALL | DISTINCT] 속성명
FROM 테이블명
WHERE 조건식
GROUP BY 그룹화_속성
HAVING 그룹_조건식
ORDER BY 정렬_속성 [ASC | DESC];</pre></div>
<table class="concept-table">
<thead><tr><th>실행 단계</th><th>절(Clause)</th><th>실행 내용</th></tr></thead>
<tbody>
<tr><td><b>1단계</b></td><td><code>FROM</code></td><td>조회할 대상 테이블 참조 및 JOIN 결합</td></tr>
<tr><td><b>2단계</b></td><td><code>WHERE</code></td><td>개별 튜플(행) 필터링 조건 검사</td></tr>
<tr><td><b>3단계</b></td><td><code>GROUP BY</code></td><td>지정된 속성 기준으로 행들을 그룹화</td></tr>
<tr><td><b>4단계</b></td><td><code>HAVING</code></td><td>그룹화된 결과에 대한 필터링 조건 검사 (그룹함수 사용 가능)</td></tr>
<tr><td><b>5단계</b></td><td><code>SELECT</code></td><td>최종 출력할 속성 및 계산식 추출</td></tr>
<tr><td><b>6단계</b></td><td><code>DISTINCT</code></td><td>중복된 결과 행 제거</td></tr>
<tr><td><b>7단계</b></td><td><code>ORDER BY</code></td><td>최종 결과 정렬 (<code>ASC</code>: 오름차순(기본), <code>DESC</code>: 내림차순)</td></tr>
</tbody></table>`,
        trap: '<code>DELETE FROM T;</code>는 데이터(행)만 모두 삭제하고 테이블 구조는 유지됩니다. (테이블 자체를 없애는 <code>DROP TABLE T;</code>와 엄격히 구분!)'
      },
      {
        title: '2. SQL 필수 내장 함수 & 패턴 연산자',
        content: `<table class="concept-table">
<thead><tr><th>구분</th><th>함수 / 연산자</th><th>기능 설명 및 예시</th></tr></thead>
<tbody>
<tr><td rowspan="4"><b>문자/날짜 함수</b></td><td><code>NOW()</code></td><td>현재 시스템의 날짜와 시간을 반환</td></tr>
<tr><td><code>LEFT(str, n)</code></td><td>문자열의 <b>왼쪽</b>에서부터 $n$개 문자 추출</td></tr>
<tr><td><code>RIGHT(str, n)</code></td><td>문자열의 <b>오른쪽</b>에서부터 $n$개 문자 추출</td></tr>
<tr><td><code>MID(str, start, n)</code></td><td>문자열의 <code>start</code> 위치부터 $n$개 문자 추출</td></tr>
<tr><td rowspan="3"><b>집계(그룹) 함수</b></td><td><code>COUNT(속성)</code></td><td>레코드(행) 개수 반환 (<code>NULL</code>은 집계에서 제외!)</td></tr>
<tr><td><code>SUM(속성)</code> / <code>AVG(속성)</code></td><td>해당 속성 값들의 합계 / 평균 반환</td></tr>
<tr><td><code>MAX(속성)</code> / <code>MIN(속성)</code></td><td>최댓값 / 최솟값 반환</td></tr>
<tr><td rowspan="3"><b>LIKE 패턴</b></td><td><code>%</code></td><td><b>모든 문자</b> (0개 이상의 임의의 문자열과 매칭)</td></tr>
<tr><td><code>_</code> (밑줄)</td><td><b>단 1개의 문자</b>와 매칭</td></tr>
<tr><td><code>#</code></td><td><b>단 1개의 숫자</b>와 매칭</td></tr>
</tbody></table>`
      },
      {
        title: '3. 집합 연산자 (Set Operations)',
        content: `<table class="concept-table">
<thead><tr><th>연산자</th><th>수학적 의미</th><th>동작 설명</th></tr></thead>
<tbody>
<tr><td><code>UNION</code></td><td>합집합 ($A \cup B$)</td><td>두 SELECT문의 결과를 통합하며 <b>중복된 행은 1번만</b> 출력</td></tr>
<tr><td><code>UNION ALL</code></td><td>합집합 ($A \cup B$)</td><td>두 SELECT문의 결과를 통합하며 <b>중복된 행도 모두 포함</b>하여 출력</td></tr>
<tr><td><code>INTERSECT</code></td><td>교집합 ($A \cap B$)</td><td>두 SELECT문에 <b>공통으로 존재하는 행만</b> 출력</td></tr>
<tr><td><code>EXCEPT</code> / <code>MINUS</code></td><td>차집합 ($A - B$)</td><td>첫 번째 결과에서 두 번째 결과와 겹치는 행을 제외하고 출력</td></tr>
</tbody></table>`
      },
      {
        title: '4. 조인(JOIN) 완벽 정복 (INNER vs OUTER)',
        content: `<table class="concept-table">
<thead><tr><th>조인 종류</th><th>문법 형식</th><th>동작 원리 및 특징</th></tr></thead>
<tbody>
<tr><td><b>EQUI JOIN</b><br>(등가 조인)</td><td><code>SELECT * FROM A, B<br>WHERE A.id = B.id;</code></td><td>공통 속성의 값이 같은 튜플을 결합. 결과에 공통 속성이 2번 나타남.</td></tr>
<tr><td><b>NATURAL JOIN</b><br>(자연 조인)</td><td><code>SELECT * FROM A<br>NATURAL JOIN B;</code></td><td>동등 조인 후 중복되는 공통 속성을 제거하여 1번만 표시.</td></tr>
<tr><td><b>JOIN ~ USING</b></td><td><code>SELECT * FROM A<br>JOIN B USING(id);</code></td><td>지정한 공통 속성을 기준으로 조인.</td></tr>
<tr><td><b>LEFT OUTER JOIN</b></td><td><code>SELECT * FROM A<br>LEFT OUTER JOIN B ON A.id = B.id;</code><br>(Oracle: <code>WHERE A.id = B.id(+)</code>)</td><td><b>왼쪽 테이블(A)의 모든 튜플</b> 출력 + 오른쪽(B)에 매칭되는 데이터가 없으면 <code>NULL</code>로 채움</td></tr>
<tr><td><b>RIGHT OUTER JOIN</b></td><td><code>SELECT * FROM A<br>RIGHT OUTER JOIN B ON A.id = B.id;</code><br>(Oracle: <code>WHERE A.id(+) = B.id</code>)</td><td><b>오른쪽 테이블(B)의 모든 튜플</b> 출력 + 왼쪽(A)에 매칭 데이터 없으면 <code>NULL</code></td></tr>
<tr><td><b>FULL OUTER JOIN</b></td><td><code>SELECT * FROM A<br>FULL OUTER JOIN B ON A.id = B.id;</code></td><td>양쪽 테이블의 모든 튜플 결합. 매칭되지 않는 쪽은 모두 <code>NULL</code>로 채워 출력.</td></tr>
</tbody></table>`
      }
    ]
  },
  linux: {
    icon: '🐧',
    label: '리눅스/쉘 명령어 & 권한',
    color: '#10b981',
    sections: [
      {
        title: '1. 프로세스 및 시스템 관리 필수 명령어',
        content: `<table class="concept-table">
<thead><tr><th>명령어</th><th>사용 형식</th><th>기능 설명</th></tr></thead>
<tbody>
<tr><td><code>ps</code></td><td><code>ps -ef</code> / <code>ps aux</code></td><td>현재 시스템에서 실행 중인 프로세스 목록 및 상태 확인</td></tr>
<tr><td><code>top</code></td><td><code>top</code></td><td>시스템 리소스(CPU, 메모리) 사용량 및 프로세스 상태를 <b>실시간</b> 모니터링</td></tr>
<tr><td><code>kill</code></td><td><code>kill [PID]</code> (강제종료: <code>kill -9 [PID]</code>)</td><td>프로세스 고유 번호(PID)를 지정하여 해당 프로세스 종료</td></tr>
<tr><td><code>killall</code></td><td><code>killall [프로세스명]</code></td><td>동일한 이름을 가진 모든 프로세스를 한 번에 종료</td></tr>
<tr><td><code>who</code></td><td><code>who</code></td><td>현재 시스템에 로그인(접속)해 있는 모든 사용자 정보 표시</td></tr>
<tr><td><code>finger</code></td><td><code>finger [사용자계정]</code></td><td>특정 사용자의 상세 정보(로그인 위치, 쉘, 홈 디렉터리 등) 확인</td></tr>
<tr><td><code>passwd</code></td><td><code>passwd [사용자명]</code></td><td>사용자 계정의 비밀번호 변경</td></tr>
<tr><td><code>fsck</code></td><td><code>fsck [장치/경로]</code></td><td>파일 시스템의 무결성 검사 및 오류 복구 (File System Check)</td></tr>
<tr><td><code>ping</code></td><td><code>ping [IP / 도메인]</code></td><td>원격 호스트와의 네트워크 연결 및 응답 상태 테스트 (ICMP 프로토콜)</td></tr>
</tbody></table>`
      },
      {
        title: '2. 파일 권한(chmod) & 소유권(chown) 완벽 계산법',
        content: `<div class="concept-highlight">권한 표기: 소유자(User: u), 그룹(Group: g), 기타(Other: o), 전체(All: a)</div>
<table class="concept-table">
<thead><tr><th>권한 문자</th><th>권한 의미</th><th>8진수 가중치 값</th><th>2진수 표기</th></tr></thead>
<tbody>
<tr><td><code>r</code> (Read)</td><td>읽기 권한</td><td><b>4</b></td><td><code>100</code></td></tr>
<tr><td><code>w</code> (Write)</td><td>쓰기 / 수정 권한</td><td><b>2</b></td><td><code>010</code></td></tr>
<tr><td><code>x</code> (eXecute)</td><td>실행 권한</td><td><b>1</b></td><td><code>001</code></td></tr>
<tr><td><code>-</code></td><td>권한 없음</td><td><b>0</b></td><td><code>000</code></td></tr>
</tbody></table>
<div class="code-block"><pre>예시: rwxr-xr--
• User (소유자): rwx = 4 + 2 + 1 = 7
• Group (그룹):   r-x = 4 + 0 + 1 = 5
• Other (기타):   r-- = 4 + 0 + 0 = 4
→ 8진수 표기: 754  (명령어: chmod 754 파일명)</pre></div>
<ul class="concept-list">
<li><b>기호 표기법:</b> <code>chmod u=rwx,g=rx,o=r test.txt</code> 또는 <code>chmod g+w test.txt</code> (그룹에 쓰기 권한 추가)</li>
<li><b>소유권 변경(chown):</b> <code>chown [소유자]:[그룹] [파일명]</code> (예: <code>chown user01:dev app.js</code>)</li>
</ul>`
      },
      {
        title: '3. tar 아카이브(압축 및 해제) 핵심 옵션',
        content: `<table class="concept-table">
<thead><tr><th>옵션</th><th>의미</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>-c</code> (Create)</td><td>아카이브 <b>생성</b></td><td>새로운 .tar 묶음 파일 생성</td></tr>
<tr><td><code>-x</code> (eXtract)</td><td>아카이브 <b>해제</b></td><td>.tar 파일의 압축/묶음 풀기</td></tr>
<tr><td><code>-v</code> (Verbose)</td><td>진행 과정 출력</td><td>처리 중인 파일 목록을 화면에 자세히 나열</td></tr>
<tr><td><code>-f</code> (File)</td><td>아카이브 파일 지정</td><td><b>필수 기본 옵션!</b> 작업 대상 파일명 명시</td></tr>
<tr><td><code>-z</code> (gzip)</td><td>gzip 압축/해제</td><td>.tar.gz 형식으로 동시 압축 또는 해제</td></tr>
</tbody></table>
<div class="code-block"><pre>• 압축 묶기: tar -cvf backup.tar /home/data
• 압축 풀기: tar -xvf backup.tar</pre></div>`
      }
    ]
  },
  prog_type: {
    icon: '💻',
    label: '프로그래밍 언어 분류 & 웹 기술',
    color: '#a855f7',
    sections: [
      {
        title: '1. 프로그래밍 언어의 분류 (객체지향 vs 스크립트)',
        content: `<table class="concept-table">
<thead><tr><th>분류</th><th>해당 언어</th><th>주요 특징 및 출제 포인트</th></tr></thead>
<tbody>
<tr><td rowspan="3"><b>객체지향 언어<br>(OOP)</b></td><td><b>Java</b></td><td>JVM 기반 플랫폼 독립성, 가비지 컬렉션, 멀티스레드 지원</td></tr>
<tr><td><b>C++</b></td><td>C 언어에 객체지향 개념 추가, 모든 문제를 객체로 모델링</td></tr>
<tr><td><b>Smalltalk</b></td><td><b>1세대 순수 객체지향 언어</b>, 최초로 GUI(그래픽 사용자 인터페이스) 제공</td></tr>
<tr><td rowspan="4"><b>서버용 스크립트</b></td><td><b>ASP</b></td><td>Microsoft사 전용 서버 스크립트 언어 (Windows 계열에서만 실행)</td></tr>
<tr><td><b>JSP</b></td><td>Java 기반 서버용 스크립트, 다양한 운영체제(OS)에서 플랫폼 독립 실행</td></tr>
<tr><td><b>PHP</b></td><td>Linux, Unix, Windows 모두 지원. C/Java와 문법이 유사하여 웹서버 제작에 다용</td></tr>
<tr><td><b>Python</b></td><td>대화형 인터프리터 언어, 간결한 문법 구조, 객체지향 지원</td></tr>
<tr><td rowspan="2"><b>클라이언트용 스크립트</b></td><td><b>JavaScript (JS)</b></td><td>웹 브라우저에서 해석 및 실행, 웹 페이지 동적 제어, 비동기 통신</td></tr>
<tr><td><b>VBScript</b></td><td>ActiveX를 통해 Microsoft사 애플리케이션 제어</td></tr>
</tbody></table>`
      },
      {
        title: '2. 웹 데이터 교환 포맷 및 비동기 통신 (XML / JSON / AJAX)',
        content: `<table class="concept-table">
<thead><tr><th>기술 / 포맷</th><th>정의 및 핵심 개념</th><th>주요 특징</th></tr></thead>
<tbody>
<tr><td><b>XML</b></td><td>다목적 마크업 언어 (eXtensible Markup Language)</td><td>HTML의 확장성 한계와 SGML의 복잡성을 해결하기 위해 개발. 사용자가 태그를 임의 정의 가능.</td></tr>
<tr><td><b>JSON</b></td><td>경량 데이터 교환 포맷 (JavaScript Object Notation)</td><td><b>속성-값(Key-Value) 쌍</b>으로 구성된 개방형 표준 텍스트 포맷. XML보다 가볍고 파싱이 빠름.</td></tr>
<tr><td><b>AJAX</b></td><td>비동기 자바스크립트와 XML (Asynchronous JavaScript and XML)</td><td>웹 페이지 전체를 새로고침하지 않고도, <b>백그라운드 비동기 통신</b>을 통해 필요한 데이터만 교환 및 화면 갱신하는 기술.</td></tr>
</tbody></table>`
      }
    ]
  }
};
