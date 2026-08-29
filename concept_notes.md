# 📘 2026 프로그래밍기능사 실기 — 핵심 개념 완전 정복 노트

> **기출 35문항 + 변형 1,700문항 분석 기반** | 4과목 핵심만 압축

---

## 🐍 파트 1. Python 핵심 개념

### 1-1. 자료형과 불변성 (Mutable vs Immutable)

| 자료형 | 기호 | 변경 가능 | 순서 | 중복 허용 |
|--------|------|-----------|------|-----------|
| **리스트(List)** | `[]` | ✅ Mutable | ✅ | ✅ |
| **튜플(Tuple)** | `()` | ❌ **Immutable** | ✅ | ✅ |
| **딕셔너리(Dict)** | `{}` | ✅ Mutable | ✅(3.7+) | Key 중복 ❌ |
| **세트(Set)** | `{}` | ✅ Mutable | ❌ | ❌ |

> [!CAUTION]
> **기출 함정:** `a = (1, 2, 3)` → `a[0] = 4` → ❌ **TypeError**!
> 튜플은 **불변(Immutable)** 자료형이므로 요소 변경 불가.

---

### 1-2. 딕셔너리 핵심 메서드

```python
d = {'a': 15, 'b': 30, 'c': 45}
```

| 메서드 | 반환값 | 설명 |
|--------|--------|------|
| `d.keys()` | `dict_keys(['a', 'b', 'c'])` | **키**만 반환 |
| `d.values()` | `dict_values([15, 30, 45])` | **값**만 반환 |
| `d.items()` | `dict_items([('a',15), ('b',30), ('c',45)])` | **(키, 값) 쌍** 반환 |
| `d.get(key, default)` | 키 있으면 값, 없으면 default | **안전한 조회** |

> [!WARNING]
> **기출 함정:** `d.get(15, 0)` → 15는 **value**이지 **key**가 아님 → 결과: `0`
> `dict.get()`의 첫 번째 인자는 반드시 **KEY**!

---

### 1-3. zip() 함수

```python
A = ['a', 'b', 'c']
B = [15, 30, 45]
C = dict(zip(A, B))   # → {'a': 15, 'b': 30, 'c': 45}
```

- `zip(A, B)` → 같은 인덱스끼리 **튜플 쌍**으로 묶음
- `dict(zip(A, B))` → A가 **key**, B가 **value**인 딕셔너리 생성

---

### 1-4. 인덱싱 & 슬라이싱

```python
arr = [10, 20, 30, 40, 50]
```

| 표현 | 결과 | 설명 |
|------|------|------|
| `arr[0]` | `10` | 첫 번째 요소 |
| `arr[-1]` | `50` | **마지막** 요소 |
| `arr[-2]` | `40` | 뒤에서 두 번째 |
| `arr[1:3]` | `[20, 30]` | 인덱스 1 ~ 2 |
| `arr[::-1]` | `[50, 40, 30, 20, 10]` | **전체 역순** |

> [!TIP]
> 음수 인덱스: `-1`이 마지막, `-2`가 그 앞 … 순서대로 뒤에서 셈

---

### 1-5. 이진 트리 순회 ⭐⭐⭐

> [!IMPORTANT]
> **가장 중요한 기출 유형!** print 위치로 순회 종류를 구분하세요.

```python
def traverse(root):
    if root:
        # ❶ print(root.key)   ← 여기면 전위(Preorder)
        traverse(root.left)
        # ❷ print(root.key)   ← 여기면 중위(Inorder)
        traverse(root.right)
        # ❸ print(root.key)   ← 여기면 후위(Postorder)
```

| 순회 방식 | 순서 | print 위치 | 기억법 |
|-----------|------|------------|--------|
| **전위(Pre)** | **Root** → L → R | 재귀 호출 **전** | "먼저 나(Root)" |
| **중위(In)** | L → **Root** → R | 재귀 호출 **사이** | "가운데 나(Root)" |
| **후위(Post)** | L → R → **Root** | 재귀 호출 **후** | "마지막에 나(Root)" |

#### 📝 실전 풀이법 (트리 그림 → 손으로 추적)

```
기출 트리 구조:         1
                      / \
                     5   3
                    / \ / \
                   2  7 6  4
```

| 순회 | 결과 |
|------|------|
| 전위 | `1/5/2/7/3/6/4/` |
| **중위** | **`2/5/7/1/6/3/4/`** ← 기출 정답 |
| 후위 | `2/7/5/6/4/3/1/` |

---

### 1-6. 피보나치 수열 & for문 구조

```python
def fibonacci(n):
    seq = []
    a, b = 1, 1
    for _ in range(n):      # ← 반복 변수 필수! (_, i 등)
        seq.append(a)
        a, b = b, a + b     # ← 동시 할당(swap)
    return seq
```

> [!CAUTION]
> **기출 함정:** `for in range(n):` → 반복 변수 누락 → **SyntaxError (4번 줄)**
> 수정 후: `fibonacci(6)[-1]` → `[1, 1, 2, 3, 5, 8][-1]` → **8**

---

### 1-7. 에라토스테네스의 체 (소수 판별)

```python
A = [True] * n
for i in range(2, int(n**0.5) + 1):   # √n까지만 순회
    if A[i]:
        for j in range(i*i, n, i):      # i의 배수를 False 처리
            A[j] = False
primes = [x for x in range(2, n) if A[x]]
```

> [!TIP]
> 핵심: **√n까지만 반복** → `int(n**0.5) + 1`

---

### 1-8. map(), join(), isinstance()

```python
# map(함수, 반복가능객체) — 각 요소에 함수 적용
list(map(str, [7, 4, 1]))    # → ['7', '4', '1']

# "구분자".join(문자열리스트) — 문자열 결합
"".join(['7', '4', '1'])      # → '741'

# isinstance(객체, 타입) — 타입 확인
isinstance([1,2], list)       # → True
```

> [!WARNING]
> `join()`은 **문자열만** 결합 가능! 정수 리스트는 반드시 `map(str, list)` 먼저!

---

### 1-9. 아스키 코드 (ord / chr)

```python
ord('A')  # → 65    (문자 → 숫자)
chr(65)   # → 'A'   (숫자 → 문자)
ord('a')  # → 97
ord('0')  # → 48
```

| 범위 | 문자 | 코드 |
|------|------|------|
| 대문자 | A ~ Z | 65 ~ 90 |
| 소문자 | a ~ z | 97 ~ 122 |
| 숫자 | 0 ~ 9 | 48 ~ 57 |

---

### 1-10. 파이썬 들여쓰기(인덴트) 규칙

> [!CAUTION]
> **기출 함정:** `return`이 함수 바깥에 있으면 **IndentationError**!
> 파이썬은 **들여쓰기가 곧 블록 구분**. 중괄호 `{}` 없음!

```python
def test():
    result = []
    return result     # ✅ 함수 블록 안
return result         # ❌ 함수 블록 밖 → 에러!
```

---

---

## ☕ 파트 2. Java 핵심 개념

### 2-1. 인터페이스 vs 추상클래스

| 구분 | 인터페이스(interface) | 추상클래스(abstract class) |
|------|----------------------|--------------------------|
| 선언 키워드 | `interface` | `abstract class` |
| 구현 키워드 | `implements` | `extends` |
| 다중 구현 | ✅ 가능 | ❌ 단일 상속만 |
| 메서드 | 기본 추상 (Java 8+: default, static) | 추상 + 일반 혼합 |
| 필드(변수) | `public static final` 상수만 | 인스턴스 변수 가능 |
| 생성자 | ❌ 없음 | ✅ 있음 |

> [!IMPORTANT]
> **절대 혼동 금지!**
> - 인터페이스 **정의**: `interface`
> - 인터페이스 **구현**: `implements`
> - 클래스 **상속**: `extends`
> - 인터페이스 간 **상속**: `extends` (인터페이스끼리는 extends!)

```java
interface Op { int calc(int a, int b); }

class Add implements Op {                    // ← implements
    public int calc(int a, int b) { return a + b; }
}
```

> [!WARNING]
> 인터페이스 메서드 구현 시 반드시 **`public`** 접근 제어자 필수!
> 생략하면 패키지-private가 되어 **컴파일 에러**!

---

### 2-2. 생성자 체이닝 (this / super) ⭐⭐⭐

#### 핵심 규칙

| 규칙 | 설명 |
|------|------|
| `this()` | **자신** 클래스의 다른 생성자 호출 |
| `super()` | **부모** 클래스의 생성자 호출 |
| ⚠️ **첫 줄 규칙** | `this()` / `super()`는 반드시 생성자의 **첫 번째 문장**이어야 함 |
| ⚠️ **암묵적 삽입** | 자식 생성자에 `super()`가 없으면 컴파일러가 **자동으로 `super()` 삽입** |

#### 기출 문제 추적

```java
class Test1 {
    Test1()          { System.out.print('X'); }
    Test1(char a)    { this(); System.out.print(a); }
}
class Test2 extends Test1 {
    Test2()          { super(); System.out.print('Y'); }
    Test2(char a)    { this(); System.out.print(a); }
}
// new Test2('Z') 실행 순서:
```

```
Test2('Z') → this() → Test2() → super() → Test1() → print 'X'
                                                    ↓
                                           Test2() 복귀 → print 'Y'
                                                    ↓
                                           Test2('Z') 복귀 → print 'Z'

결과: XYZ
```

> [!CAUTION]
> **기출 함정:** `super()` 앞에 다른 코드가 있으면 **컴파일 에러!**
> ```java
> Dog(String name, int age, String breed) {
>     this.breed = breed;    // ← 16줄: 먼저 실행 ❌
>     super(name, age);      // ← 17줄: 에러! super()는 첫 줄이어야!
> }
> ```

---

### 2-3. 부모 기본 생성자 자동 호출

```java
class Bird {
    Bird()          { System.out.print("A"); }    // 기본 생성자
    Bird(char a)    { System.out.print("a"); }    // 매개변수 생성자
}
class Eagle extends Bird {
    Eagle()          { System.out.print("B"); }
    Eagle(char a)    { System.out.printf("%c%c", a, a); }
    // ↑ super()가 생략됨 → 컴파일러가 암묵적으로 super() 삽입!
}
// new Eagle('c') → 암묵적 super() → Bird() → 'A' 출력 → 'cc' 출력
// 결과: Acc
```

> [!TIP]
> **부모에 기본 생성자가 없고 매개변수 생성자만 있으면?**
> → 자식에서 명시적으로 `super(인자)`를 호출해야 함. 아니면 **컴파일 에러!**

---

### 2-4. String 비교: == vs .equals() ⭐⭐⭐

| 방식 | 비교 대상 | 설명 |
|------|-----------|------|
| `==` | **주소(참조)** 비교 | 같은 객체인지 확인 |
| `.equals()` | **값(내용)** 비교 | 같은 문자열인지 확인 |

```java
// 케이스 1: 리터럴 → String Constant Pool 공유
String a = "hello";
String b = "hello";
a == b;          // → true  ✅ (같은 Pool 주소)

// 케이스 2: new String() → 힙에 별도 객체 생성
String t1 = new String("ASDF");
String t2 = new String("ASDF");
t1 == t2;        // → false ❌ (다른 힙 주소)
t1.equals(t2);   // → true  ✅ (같은 값)
```

> [!IMPORTANT]
> **기출 정리:**
> - `"리터럴" == "리터럴"` → **true** (Pool 공유)
> - `new String() == new String()` → **false** (별도 힙 객체)
> - 값 비교는 무조건 `.equals()` 사용!

---

### 2-5. 삼항 연산자 (중첩)

```java
// 기본 형태
조건 ? 참값 : 거짓값

// 중첩 삼항 (왼→오 순서대로 평가)
speed > 0 ? "전진" + speed + "km/h"
          : speed == 0 ? "정지"
                       : "후진" + speed + "km/h"

// speed = 55 → "전진55km/h"
```

---

### 2-6. Java OOP 키워드 총정리

| 키워드 | 의미 |
|--------|------|
| `class` | 클래스 선언 |
| `interface` | 인터페이스 선언 |
| `extends` | 클래스 상속 / 인터페이스 간 상속 |
| `implements` | 인터페이스 구현 |
| `abstract` | 추상 클래스/메서드 선언 |
| `@Override` | 오버라이딩 어노테이션 |
| `this` | 현재 객체 참조 |
| `super` | 부모 클래스 참조 |
| `new` | 객체 생성 |
| `instanceof` | 타입 확인 |
| `static` | 클래스 레벨 멤버 |
| `final` | 변경 불가 (상수, 오버라이딩 금지, 상속 금지) |

---

---

## 🗄️ 파트 3. SQL 핵심 개념

### 3-1. SQL 분류 체계

| 분류 | 명칭 | 명령어 | 설명 |
|------|------|--------|------|
| **DDL** | 데이터 정의어 | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | 구조 정의/변경/삭제 |
| **DML** | 데이터 조작어 | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | 데이터 CRUD |
| **DCL** | 데이터 제어어 | `GRANT`, `REVOKE` | 권한 부여/회수 |
| **TCL** | 트랜잭션 제어어 | `COMMIT`, `ROLLBACK`, `SAVEPOINT` | 트랜잭션 관리 |

---

### 3-2. 테이블 삭제 3총사 ⭐⭐⭐

| 명령어 | 대상 | 롤백 가능 | 분류 |
|--------|------|-----------|------|
| `DROP TABLE` | **구조 + 데이터** 모두 삭제 | ❌ DDL | DDL |
| `TRUNCATE TABLE` | **데이터만** 삭제 (구조 보존) | ❌ DDL | DDL |
| `DELETE FROM` | **행 단위** 조건 삭제 | ✅ DML | DML |

```sql
-- 테이블과 연관 조건까지 모두 삭제 (기출!)
DROP TABLE test CASCADE;

-- 데이터만 비우기 (구조 보존)
TRUNCATE TABLE emp;

-- 조건 삭제 (특정 행만)
DELETE FROM emp WHERE dept = 'SALES';
```

> [!IMPORTANT]
> **CASCADE vs RESTRICT:**
> - `CASCADE` → 연관된 제약조건/참조까지 **연쇄 삭제**
> - `RESTRICT` → 참조 중이면 **삭제 거부**

---

### 3-3. DML 기본 구문

```sql
-- 조회
SELECT 컬럼 FROM 테이블 WHERE 조건;

-- 삽입
INSERT INTO 테이블(컬럼들) VALUES(값들);

-- 수정 (기출!)
UPDATE 테이블 SET 컬럼 = 값 WHERE 조건;

-- 삭제
DELETE FROM 테이블 WHERE 조건;
```

> [!TIP]
> **UPDATE 구문 외우기:** `UPDATE [테이블] SET [컬럼=값] WHERE [조건]`
> 기출: `UPDATE 사원 SET 부서 = '배송팀' WHERE 사번 = 1003;`

---

### 3-4. LIKE 와일드카드 패턴 ⭐⭐⭐

| 와일드카드 | 의미 | 예시 |
|------------|------|------|
| `_` (언더스코어) | 정확히 **1글자** | `박_` → 박○ (2글자) |
| `%` (퍼센트) | **0개 이상** 임의 문자 | `이%` → 이, 이름, 이순신 … |

#### 기출 패턴 모음

| 패턴 | 매칭 대상 | 설명 |
|------|-----------|------|
| `박_` | 박○ | 성이 박, 이름 1글자 (총 2글자) |
| `이%` | 이… | 이씨 모든 사람 |
| `__길` | ○○길 | 3글자, 끝이 '길' |
| `_호_` | ○호○ | 3글자, 가운데 '호' |
| `%산%` | …산… | '산' 포함 |
| `_2_A__%` | 최소 6글자, 2번째 '2', 4번째 'A' | 기출 복합 패턴 |
| `____` | ○○○○ | 정확히 4글자 |

> [!WARNING]
> **ESCAPE 구문:** 와일드카드 문자 자체를 검색할 때
> ```sql
> SELECT * FROM file WHERE name LIKE '%!_%' ESCAPE '!';
> -- !_ → 리터럴 _ 검색
> ```

---

### 3-5. NULL 비교 ⭐⭐

```sql
-- ❌ 틀린 비교
WHERE 전화번호 = NULL

-- ✅ 올바른 비교
WHERE 전화번호 IS NULL
WHERE 전화번호 IS NOT NULL
```

> [!CAUTION]
> **NULL은 `=`로 비교 불가!** 반드시 `IS NULL` / `IS NOT NULL` 사용!

---

### 3-6. 서브쿼리 유형 ⭐⭐⭐

| 유형 | 위치 | 설명 |
|------|------|------|
| **스칼라 서브쿼리** | `SELECT` 절 | 단일 행, 단일 열 반환 |
| **인라인 뷰** | `FROM` 절 | 가상 동적 테이블 |
| **중첩 서브쿼리** | `WHERE` / `HAVING` 절 | 조건 필터링 |
| **상관 서브쿼리** | 외부 쿼리 참조 | 외부 행마다 반복 실행 |

---

### 3-7. IN / NOT IN / EXISTS / NOT EXISTS

```sql
-- IN: 서브쿼리 결과에 포함된 행 선택
WHERE c1 IN (SELECT c1 FROM t1)

-- NOT IN: 서브쿼리 결과에 없는 행 선택
WHERE c1 NOT IN (SELECT c1 FROM t1)

-- EXISTS: 서브쿼리에 행이 존재하면 TRUE
WHERE EXISTS (SELECT * FROM 수당 WHERE 수당.사원번호 = 사원.사원번호)

-- NOT EXISTS: 서브쿼리에 행이 없으면 TRUE
WHERE NOT EXISTS (...)
```

> [!CAUTION]
> **NOT IN + NULL 함정:** 서브쿼리 결과에 **NULL이 포함**되면 NOT IN은 **무조건 0건** 반환!
> → 안전한 대안: `NOT EXISTS` 사용

#### 기출 문제 풀이

```sql
-- t1: c1={A,D,F,G}, c2={5,2,3,1}
-- t2: c1={A,C,D,H}, c2={3,7,6,2}

SELECT SUM(c2) AS ans FROM t2
WHERE c1 NOT IN (SELECT c1 FROM t1);

-- 풀이:
-- 서브쿼리: {A, D, F, G}
-- t2에서 NOT IN: C(7), H(2)
-- SUM = 7 + 2 = 9  ← 정답!
```

---

### 3-8. 집합 연산자

| 연산자 | 기능 | 중복 처리 |
|--------|------|-----------|
| `UNION` | 합집합 | **중복 제거** |
| `UNION ALL` | 합집합 | 중복 포함 |
| `INTERSECT` | 교집합 | 공통 행만 |
| `MINUS` / `EXCEPT` | 차집합 | Oracle: MINUS, 표준: EXCEPT |

> [!IMPORTANT]
> 집합 연산 조건:
> 1. 양쪽 SELECT의 **컬럼 개수** 동일
> 2. 대응 컬럼의 **데이터 타입** 호환
> 3. `ORDER BY`는 전체 쿼리 **맨 마지막에 1번만**

---

### 3-9. JOIN 종류

| JOIN | 설명 |
|------|------|
| `INNER JOIN` | 양쪽 테이블 모두 일치하는 행만 |
| `LEFT OUTER JOIN` | **왼쪽** 테이블 전체 보존 + 오른쪽 매칭 |
| `RIGHT OUTER JOIN` | **오른쪽** 테이블 전체 보존 + 왼쪽 매칭 |
| `FULL OUTER JOIN` | **양쪽** 테이블 전체 보존 |
| `CROSS JOIN` | 카르테시안 곱 (모든 조합) |

> [!TIP]
> **기출:** `FROM TEAM LEFT OUTER JOIN STADIUM ON ...`
> → TEAM(왼쪽) 테이블의 **모든 행을 보존**하여 출력

---

### 3-10. DDL 제약조건

| 제약조건 | 설명 |
|----------|------|
| `PRIMARY KEY` | 기본키 = **UNIQUE + NOT NULL** |
| `FOREIGN KEY` | 외래키 = 다른 테이블 참조 |
| `UNIQUE` | 중복 불허 (NULL은 허용 가능) |
| `NOT NULL` | NULL 불허 |
| `CHECK` | 값의 유효 범위 제한 |
| `DEFAULT` | 기본값 지정 |

```sql
CREATE TABLE emp (
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    salary INT CHECK (salary >= 0),
    views INT DEFAULT 0,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES dept(id) ON DELETE CASCADE
);
```

---

### 3-11. DCL / TCL 핵심 명령어

| 명령어 | 분류 | 기능 |
|--------|------|------|
| `GRANT` | DCL | 권한 **부여** |
| `REVOKE` | DCL | 권한 **회수** |
| `COMMIT` | TCL | 트랜잭션 **확정** |
| `ROLLBACK` | TCL | 트랜잭션 **취소/복구** |
| `SAVEPOINT` | TCL | 복구 지점 설정 |

---

### 3-12. 집계 함수

| 함수 | 설명 |
|------|------|
| `COUNT(*)` | 행 수 (NULL 포함) |
| `COUNT(컬럼)` | 행 수 (NULL 제외) |
| `SUM(컬럼)` | 합계 |
| `AVG(컬럼)` | 평균 |
| `MAX(컬럼)` | 최댓값 |
| `MIN(컬럼)` | 최솟값 |

> [!TIP]
> `WHERE` vs `HAVING`:
> - `WHERE` → 그룹화 **전** 필터링 (개별 행)
> - `HAVING` → 그룹화 **후** 필터링 (집계 결과)

---

### 3-13. DDL 객체 관리

```sql
-- 뷰 생성/삭제
CREATE VIEW v_emp AS SELECT * FROM emp WHERE dept = 10;
DROP VIEW v_emp;

-- 인덱스 생성
CREATE INDEX idx_name ON emp(name);
CREATE UNIQUE INDEX idx_email ON user(email);

-- 시퀀스, 스키마
CREATE SEQUENCE seq_order;
DROP SEQUENCE seq_order;
CREATE SCHEMA hr_schema;
```

---

---

## 🐧 파트 4. Linux 핵심 개념

### 4-1. 경로 체계 ⭐⭐⭐

| 구분 | 설명 | 예시 |
|------|------|------|
| **절대 경로** | `/`(루트)부터 시작하는 전체 경로 | `/Users/user/workspace` |
| **상대 경로** | 현재 위치 기준 | `../src/test` |
| `.` | 현재 디렉터리 | `./config` |
| `..` | 상위(부모) 디렉터리 | `../docs` |
| `~` | 홈 디렉터리 (`/home/사용자명`) | `~/src/app` |

#### 기출 경로 풀이법

```
현재: /Users/user/workspace
상대: ../src/test

단계 1: .. → 상위 이동 → /Users/user
단계 2: src/test → 진입 → /Users/user/src/test  ← 정답!
```

```
현재: /User/user/src/test
상대: ../../lib

단계 1: .. → /User/user/src
단계 2: .. → /User/user
단계 3: lib → /User/user/lib  ← 정답!
```

> [!TIP]
> **풀이 공식:** `..`의 개수만큼 뒤에서 디렉터리를 지운 뒤, 나머지 경로를 붙인다!

---

### 4-2. 필수 명령어 총정리 ⭐⭐⭐

#### 📂 파일/디렉터리 관리

| 명령어 | 설명 | 기억법 |
|--------|------|--------|
| `ls` | 파일 목록 표시 | **L**i**S**t |
| `cd` | 디렉터리 이동 | **C**hange **D**irectory |
| `pwd` | 현재 경로 출력 | **P**rint **W**orking **D**irectory |
| `mkdir` | 디렉터리 생성 | **M**a**K**e **DIR**ectory |
| `rmdir` | 빈 디렉터리 삭제 | **R**e**M**ove **DIR** |
| `cp` | 파일/디렉터리 복사 | **C**o**P**y |
| `mv` | 이동/이름 변경 | **M**o**V**e |
| `rm` | 파일 삭제 | **R**e**M**ove |
| `touch` | 빈 파일 생성/시간 갱신 | |
| `cat` | 파일 내용 출력 | Con**CAT**enate |

#### 🔒 권한/소유자 관리

| 명령어 | 설명 | 기억법 |
|--------|------|--------|
| `chmod` | 접근 권한 변경 | **CH**ange **MOD**e |
| `chown` | 소유자 변경 | **CH**ange **OWN**er |
| `chgrp` | 소유 그룹 변경 | **CH**ange **GR**ou**P** |

#### 🔧 시스템 관리

| 명령어 | 설명 | 기억법 |
|--------|------|--------|
| `sudo` | root 권한으로 실행 | **S**uper **U**ser **DO** |
| `su` | 사용자 전환 | **S**witch **U**ser |
| `man` | 도움말/매뉴얼 | **MAN**ual |
| `top` | 실시간 프로세스 모니터링 | **T**able **O**f **P**rocesses |
| `ps` | 프로세스 스냅샷 | **P**rocess **S**tatus |
| `kill` | 프로세스 종료 | |
| `df` | 디스크 여유 공간 | **D**isk **F**ree |
| `du` | 디스크 사용량 | **D**isk **U**sage |
| `tar` | 파일 압축/해제 | **T**ape **AR**chive |

#### 📄 파일 내용 확인

| 명령어 | 설명 |
|--------|------|
| `cat` | 전체 출력 |
| `head` | 앞부분 출력 (기본 10줄) |
| `tail` | 뒷부분 출력 (`-f`: 실시간 추적) |
| `more` / `less` | 페이지 단위 뷰어 |
| `echo` | 텍스트/변수값 출력 |

#### 🌐 네트워크

| 명령어 | 설명 |
|--------|------|
| `ifconfig` / `ip` | 네트워크 인터페이스 확인 |
| `netstat` / `ss` | 포트/연결 상태 확인 |

---

### 4-3. 파일 권한 체계 ⭐⭐

#### 권한 기호와 8진수 대응

| 기호 | 의미 | 8진수 |
|------|------|-------|
| `r` | 읽기(Read) | **4** |
| `w` | 쓰기(Write) | **2** |
| `x` | 실행(Execute) | **1** |
| `-` | 권한 없음 | 0 |

#### 자주 나오는 권한 조합

| 8진수 | 기호 | 의미 |
|-------|------|------|
| 7 | `rwx` | 읽기+쓰기+실행 (4+2+1) |
| 6 | `rw-` | 읽기+쓰기 (4+2) |
| 5 | `r-x` | 읽기+실행 (4+1) |
| 4 | `r--` | 읽기만 (4) |
| 0 | `---` | 권한 없음 |

#### 대표 권한 설정

| 숫자 | 소유자 | 그룹 | 기타 | 용도 |
|------|--------|------|------|------|
| `755` | rwx | r-x | r-x | 실행 파일, 디렉터리 |
| `644` | rw- | r-- | r-- | 일반 텍스트 파일 |
| `777` | rwx | rwx | rwx | 모든 권한 개방 |
| `700` | rwx | --- | --- | 소유자만 모든 권한 |

#### 권한 변경 명령어

```bash
# 8진수 모드
chmod 755 file.txt

# 기호 모드
chmod u+x file.txt    # 소유자에 실행 권한 추가
chmod g-w file.txt    # 그룹에서 쓰기 권한 제거
chmod o=r file.txt    # 기타 사용자 읽기만 설정
```

> [!TIP]
> **u** = User(소유자) | **g** = Group(그룹) | **o** = Others(기타) | **a** = All(전체)
> **+** = 추가 | **-** = 제거 | **=** = 설정

---

### 4-4. 특수 경로/명령어

| 항목 | 설명 |
|------|------|
| `cd ~` 또는 `cd` (인자 없음) | 홈 디렉터리로 이동 |
| `cd -` | **이전 작업 디렉터리**로 복귀 |
| `pwd -P` | 심볼릭 링크 해석한 **실제 물리 경로** 출력 |
| root 홈 디렉터리 | `/root` (일반 사용자는 `/home/username`) |
| 숨김 파일 | 파일명 앞에 `.`(점) 접두사 |
| 경로 구분자 | 리눅스: `/`(정슬래시) / 윈도우: `\`(역슬래시) |

---

---

## 🎯 파트 5. 시험 직전 암기 체크리스트

### ✅ Python 함정 TOP 5

| # | 함정 | 키워드 |
|---|------|--------|
| 1 | 튜플 불변성 → 요소 변경 시 TypeError | `Immutable` |
| 2 | `dict.get(key, default)` — 첫 인자는 KEY! | `get()` |
| 3 | for문 반복 변수 누락 → SyntaxError | `for _ in range()` |
| 4 | return 인덴트 오류 → IndentationError | 들여쓰기 |
| 5 | 이진 트리 순회 — print 위치로 전/중/후위 구분 | 순회 3종 |

### ✅ Java 함정 TOP 5

| # | 함정 | 키워드 |
|---|------|--------|
| 1 | `new String() ==` → false (힙 주소 비교) | `==` vs `.equals()` |
| 2 | super()/this() 첫 줄 규칙 위반 → 컴파일 에러 | 첫 줄 규칙 |
| 3 | 암묵적 super() 자동 삽입 → 부모 기본 생성자 실행 | 암묵적 삽입 |
| 4 | 인터페이스 구현 시 public 생략 → 컴파일 에러 | `public` 필수 |
| 5 | `interface` vs `implements` vs `extends` 혼동 | OOP 키워드 |

### ✅ SQL 함정 TOP 5

| # | 함정 | 키워드 |
|---|------|--------|
| 1 | `DROP` vs `TRUNCATE` vs `DELETE` 구분 | 삭제 3총사 |
| 2 | `NULL = NULL` → 에러, `IS NULL` 써야 함 | NULL 비교 |
| 3 | `UNION`(중복 제거) vs `UNION ALL`(중복 포함) | 집합 연산 |
| 4 | NOT IN + NULL → 공집합(0건) 반환 | NOT IN 함정 |
| 5 | `EXISTS` — 행 존재 여부만 체크, SELECT 항목 무관 | EXISTS |

### ✅ Linux 함정 TOP 3

| # | 함정 | 키워드 |
|---|------|--------|
| 1 | `..` 개수 세기 실수 → 경로 오답 | 상대 경로 |
| 2 | `chmod` 8진수 ↔ 기호 변환 | r=4, w=2, x=1 |
| 3 | 명령어 약어 혼동 (pwd/chmod/chown/chgrp) | 약어 기억법 |

---

> [!NOTE]
> 이 노트는 실제 기출 35문항 + 1,700개 변형 문제 데이터를 분석하여 작성되었습니다.
> **문제를 풀면서 틀린 개념은 이 노트에서 해당 섹션을 다시 읽고 복습하세요!**
