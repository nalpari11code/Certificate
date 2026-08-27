# [전체 기획서] 2026 프로그래밍기능사 실기 단기 돌파 웹 플랫폼 (Infinite Sparring)

---

## 1. 프로젝트 개요 및 핵심 목표

* **배경:** 2026년 1월 1일부로 '정보처리기능사'에서 '프로그래밍기능사(작업형)'으로 종목 및 평가 방법이 전면 개편됨. 공단 공식 예시문제 및 1·2회차 기출에서 확인된 실전 난이도 격차(상속 생성자 체이닝, 이진 트리 순회, `new String` 주소 비교, `zip`/`items` 딕셔너리, `EXISTS`/`NOT IN` 서브쿼리 등)를 완벽히 해소할 수 있는 훈련 시스템 구축.
* **목표:** 단순 암기식 문제 풀이를 탈피하고, 기출문제에 등장한 언어별 '구조적 함정'을 뇌에 각인시키는 반응형 무한 반복 스파링 시스템 구축.
* **타깃 디바이스:** PC 브라우저 및 스마트폰/태블릿 모바일 브라우저 (출퇴근 및 자투리 시간에 코드를 읽고 단답형 정답을 타이핑할 수 있는 반응형 콤팩트 UI).

---

## 2. 프론트엔드 아키텍처 및 데이터 분리 저장 설계

프론트엔드 단독 정적 웹 환경(GitHub Pages, Vercel, 로컬 HTML 실행 등)에서 완벽히 구동되도록, 각 과목별 데이터베이스를 **독립된 JS 모듈 파일로 완벽히 분리**합니다.

### 🗂️ 디렉터리 및 데이터 파일 구조
```text
Certificate/
├── index.html                   # 메인 Single Page Application 컨테이너
├── SPECIFICATION.md             # 프로젝트 상세 기획서 (35문항 원문 수록)
├── style/
│   ├── main.css                 # 디자인 시스템 (Dark Slate, Glassmorphism, 반응형)
│   ├── exam.css                 # 코드 에디터 뷰어, HUD, 인터랙티브 답안 입력 스타일
│   └── trace.css                # 변수 추적표(Trace Table) 및 해설 스타일
├── js/
│   ├── app.js                   # 메인 컨트롤러 및 모드 전환 로직
│   ├── queue.js                 # 동적 파생 오답 큐(Queue) 알고리즘 엔진
│   ├── traceViewer.js           # 인터랙티브 변수 추적표 렌더러
│   ├── storage.js               # LocalStorage 진도율 및 오답노트 관리
│   └── data/                    # 💡 분야별 독립 저장 데이터 모듈
│       ├── index.js             # 전체 데이터 통합 로더 및 필터링
│       ├── python.js            # [파이썬 파트] 공단예시 + 1·2회차 기출 + 변형 풀
│       ├── java.js              # [자바 파트] 공단예시 + 1·2회차 기출 + 변형 풀
│       ├── sql.js               # [SQL 파트] 공단예시 + 1·2회차 기출 + 변형 풀
│       └── linux.js             # [리눅스 파트] 공단예시 + 1·2회차 기출 + 변형 풀
```

---

## 3. 핵심 알고리즘: 동적 파생 오답 큐 (Dynamic Mutation Queue)

* **Queue 기반 순차 출제:** JSON 배열 형태의 문제 대기열(Queue)에서 순서대로 출제.
* **오답 페널티 (파생 변형 즉각 주입):** 문제를 틀렸을 때 단순 반복이 아니라, 해당 문제의 변수명/조건식/루프 방향/상속 구조를 변형한 **'파생 문제(Variant)'를 큐 맨 뒤에 새로 삽입**.
* **파생 문제 풀(Pool):** 기출 원문 1문항당 2~4개의 파생 변형 세트를 매핑하여 관리.
* **종료 조건:** 큐에 남은 문제가 `0`이 되어야만 세션 완료.

---

## 4. 분야별 문제 데이터 세트 (총 35문항 기출 전문)

---

### 🐍 [파트 1] Python (총 9문항 전문)

#### 📌 [PY-01] 공단 예시 03번: 이진 트리 중위 순회
* **문제:** 다음 Python 프로그램에 대하여 실행 결과를 쓰시오.
```python
class Node:
    def __init__(self, key):
        self.left=None
        self.right=None
        self.key=key

def testFunction(root):
    if root:
        testFunction(root.left)
        print(root.key, end="/")
        testFunction(root.right)

root=Node(1)
root.left=Node(5)
root.right=Node(3)
root.left.left = Node(2)
root.left.right = Node(7)
root.right.left = Node(6)
root.right.right = Node(4)
testFunction(root)
```
* **정답:** `2/5/7/1/6/3/4/`
* **해설/핵심 포인트:** 중위 순회(Inorder Traversal: Left -> Root -> Right). 재귀 호출 순서에 따라 `2` -> `5` -> `7` -> `1` -> `6` -> `3` -> `4` 순으로 출력됨.

---

#### 📌 [PY-02] 공단 예시 04번: 딕셔너리 Value 역참조
* **문제:** 다음은 dictionary 변수에 어떤 값이 value로 포함되어 있다면 해당 value의 key값을 모두 찾아 반환하는 Python 프로그램이다. (①)에 들어갈 알맞은 메소드를 쓰시오.
```python
def test(dict, x):
    return [k for k, v in dict.( ① ) if v==x]
```
* **정답:** `items()`
* **해설/핵심 포인트:** 딕셔너리의 (key, value) 쌍을 튜플 형태로 묶어 반환하는 내장 메서드는 `items()`임. (`keys()`, `values()`와 구분)

---

#### 📌 [PY-03] 공단 예시 05번: 피보나치 수열 오류 수정 및 출력값
* **문제:** 다음 Python 프로그램에 대하여 다음 각 물음에 답하시오.
```python
1 | def fibonacci(n):
2 |     seq=[]
3 |     a, b=1,1
4 |     for in range(n):
5 |         seq.append(a)
6 |         a, b=b, a+b
7 |     return seq
8 |
9 | terms = 6
10| print(fibonacci(terms)[-1])
```
* **(1) 질문:** 오류가 발생하는 Line의 번호를 쓰시오.
* **(2) 질문:** 오류를 적절하게 수정하여 프로그램이 실행되었을 때의 실행 결과를 쓰시오.
* **정답:** (1) `4` / (2) `8`
* **해설/핵심 포인트:** 4번 라인의 `for in range(n):` 구문에서 반복 변수(예: `for _ in range(n):` 또는 `for i in range(n):`)가 누락됨. 정상 수정 시 수열은 `[1, 1, 2, 3, 5, 8]`이 되어 마지막 요소 `seq[-1]`은 `8`임.

---

#### 📌 [PY-04] 2026년 1회차 05번: 아스키 코드 범위 생성 및 인덴트 오류
* **문제:** 파이썬 코드 알고리즘 오류 찾기
```python
1  def test(a, b):
2      input = [ord(a), ord(b)]
3      input.sort()
4      m, n = input
5      result = []
6      for i in range(m, n+1):
7          result.append(chr(i))
8  return result
9
10 for k in test("c", "f"):
11     print(k, end="")
```
* **(1) 질문:** 해당 코드에서 오류가 발생되는 부분의 줄번호를 적으시오.
* **(2) 질문:** 에러가 수정되어 제대로 실행되었을 때의 출력결과를 적으시오.
* **정답:** (1) `8` / (2) `cdef`
* **해설/핵심 포인트:** 8번 라인의 `return result`는 함수 `def test` 내부 블록에 위치해야 하므로 인덴트(들여쓰기) 오류임. 정상 수정 시 `'c'(99)`부터 `'f'(102)`까지 순회하며 `chr(i)`를 리스트에 담아 결합 출력하므로 `cdef`가 출력됨.

---

#### 📌 [PY-05] 2026년 1회차 06번: isinstance 분기 및 음수/역순 슬라이싱
* **문제:** 파이썬 알고리즘 코드를 참고해서 문제 맞추기
```python
def test(param):
    if isinstance(param, list):
        print(param[ㄱ])
    else:
        print("리스트가 아닙니다")

arr = [10, 20, 30, 40, 50]
test(arr)
```
* **(1) 질문:** param이 리스트면 마지막 데이터가 출력되도록 하는 ㄱ 자리 빈칸에 맞는 인덱스 값은 무엇인가?
* **(2) 질문:** param이 리스트면 인덱스의 반대 방향으로 출력되기 위한 문법표기와 같은 무엇인가?
* **정답:** (1) `-1` / (2) `::-1`
* **해설/핵심 포인트:** 파이썬에서 마지막 요소를 가리키는 음수 인덱스는 `-1`이며, 리스트 전체를 역순으로 뒤집는 슬라이싱 표기는 `[::-1]`(또는 `::-1`)임.

---

#### 📌 [PY-06] 2026년 1회차 07번: 튜플(Tuple) 불변성 오류
* **문제:** 아래 파이썬 코드에서 오류가 발생하는 이유를 서술하기
```python
a = (1, 2, 3)
a[0] = 4
```
* **정답:** a변수는 튜플에 해당되어 수정이 불가한 불변형 (튜플은 불변 객체이므로 인덱스를 통한 요소 값의 변경/할당이 불가능함)
* **해설/핵심 포인트:** 튜플(Tuple)은 Immutable(불변) 자료형으로, `a[0] = 4` 실행 시 `TypeError: 'tuple' object does not support item assignment`가 발생함.

---

#### 📌 [PY-07] 2026년 2회차 10번: zip 딕셔너리 생성과 dict.get() Key 탐색
* **문제:** 파이썬 알고리즘 실행결과 맞추기
```python
A = ['a', 'b', 'c']
B = [15, 30, 45]
C = dict(zip(A, B))
print(C.get(15, 0))
```
* **정답:** `0`
* **해설/핵심 포인트:** `dict(zip(A, B))`에 의해 `C`는 `{'a': 15, 'b': 30, 'c': 45}`가 됨. `C.get(15, 0)`은 key가 `15`인 항목을 찾는데, `15`는 value이지 key가 아니므로 기본값인 `0`이 반환됨.

---

#### 📌 [PY-08] 2026년 2회차 11번: 에라토스테네스의 체 소수 판별
* **문제:** 파이썬 알고리즘 실행결과 맞추기
```python
A = [True] * 8
for i in range(2, int(7.2**0.5)+1):
    if A[i]:
        for j in range(i*i, 8, i):
            A[j] = False
Arr = [num for num in range(2, 8) if A[num]]
print(Arr)
```
* **정답:** `[2, 3, 5, 7]`
* **해설/핵심 포인트:** `7.2**0.5`는 약 `2.68`이므로 바깥 루프는 `i=2`만 실행됨. `j=4, 6`이 `False`로 변경됨. 결과적으로 2부터 7까지의 수 중 소수인 `[2, 3, 5, 7]`이 리스트로 출력됨.

---

#### 📌 [PY-09] 2026년 2회차 12번: 2차원 리스트 행 순회 및 map 문자열 결합
* **문제:** 파이썬 알고리즘 실행결과 맞추기
```python
arr = [[7,4,1], [8,5,2], [9,6,3]]
for r in arr:
    result = "".join(map(str, r))
    print(result)
```
* **정답:**
```text
741
852
963
```
* **해설/핵심 포인트:** 각 행 `[7,4,1]`, `[8,5,2]`, `[9,6,3]`에 대해 `map(str, r)`로 각 정수를 문자열로 바꾼 뒤 `"".join()`으로 이어 붙여 각 줄에 출력함.

---

### ☕ [파트 2] Java (총 9문항 전문)

#### 📌 [JA-01] 공단 예시 06번: 인터페이스 구현 implements
* **문제:** 다음 JAVA 프로그램의 실행 결과가 15가 나오도록 ( ) 안에 들어갈 알맞은 키워드를 한 단어로 쓰시오.
```java
interface Op {
    int calc(int a, int b);
}
class Add ( ) Op {
    public int calc(int a, int b) { return a+b; }
}
public class Main {
    public static void main(String[] args) {
        int a=10, b=5;
        Op add = new Add();
        System.out.print(add.calc(a, b));
    }
}
```
* **정답:** `implements`
* **해설/핵심 포인트:** 클래스가 인터페이스를 구현할 때 사용하는 예약어는 `implements`임.

---

#### 📌 [JA-02] 공단 예시 07번: new String 주소 비교 (==)
* **문제:** 다음 JAVA 프로그램의 실행 결과를 쓰시오.
```java
public class Main {
    public static void main(String[] args) {
        String t1 = new String("ASDF");
        String t2 = new String("ASDF");
        if(t1==t2) System.out.print(t1);
        else System.out.print(t1+t2);
    }
}
```
* **정답:** `ASDFASDF`
* **해설/핵심 포인트:** `new String(...)`으로 생성한 문자열 인스턴스는 힙(Heap) 메모리에 별도로 할당되므로 `t1 == t2` 주소 비교 시 `false`가 됨. 따라서 else 블록의 `t1 + t2`가 실행되어 `ASDFASDF`가 출력됨.

---

#### 📌 [JA-03] 공단 예시 08번: 생성자 체이닝 this()와 super()
* **문제:** 다음 JAVA 프로그램의 실행 결과를 쓰시오.
```java
class Test1 {
    Test1() { System.out.print('X'); }
    Test1(char a) { this(); System.out.print(a); }
}
class Test2 extends Test1 {
    Test2() { super(); System.out.print('Y'); }
    Test2(char a) { this(); System.out.print(a); }
}
public class Main {
    public static void main(String[] args) {
        Test1 t1 = new Test2('Z');
    }
}
```
* **정답:** `XYZ`
* **해설/핵심 포인트:** `new Test2('Z')` 호출 -> `this()`에 의해 `Test2()` 호출 -> `super()`에 의해 `Test1()` 호출 -> `'X'` 출력 후 `Test2()`로 돌아와 `'Y'` 출력 -> `Test2('Z')`로 돌아와 `'Z'` 출력 -> 최종 `XYZ`.

---

#### 📌 [JA-04] 2026년 1회차 09번: 인터페이스 선언 interface
* **문제:** 아래 JAVA코드에서 빈칸에 알맞는 예약어 맞추기
```java
( ? ) Vehicle
{
    void move();
    void stop();
}
class Car implements Vehicle
{
    @Override
    public void move()
    {
        System.out.println("자동차가 도로 위를 달립니다.");
    }
    @Override
    public void stop()
    {
        System.out.println("브레이크를 밟아 자동차가 멈춥니다.");
    }
}
```
* **정답:** `interface`
* **해설/핵심 포인트:** `class Car implements Vehicle`에서 `implements` 대상이 되는 추상 메서드들의 집합은 `interface`로 선언됨.

---

#### 📌 [JA-05] 2026년 1회차 10번: 다형성 상속 생성자 호출 순서
* **문제:** JAVA 알고리즘 실행결과 맞추기
```java
public class One {
    static class Bird {
        Bird() { System.out.print("A"); }
        Bird(char a) { System.out.print("a"); }
    }
    static class Eagle extends Bird {
        Eagle() { System.out.print("B"); }
        Eagle(char a) { System.out.printf("%c%c", a, a); }
    }
    public static void main(String[] args) {
        Bird firstBird = new Eagle('c');
    }
}
```
* **정답:** `Acc`
* **해설/핵심 포인트:** 자식 생성자 `Eagle(char a)`의 첫 줄에는 `super()`가 암묵적으로 삽입되어 부모의 기본 생성자 `Bird()`가 먼저 호출됨. 따라서 `'A'`가 출력되고, 이후 `printf("%c%c", 'c', 'c')`에 의해 `cc`가 출력되어 최종 `Acc`가 됨.

---

#### 📌 [JA-06] 2026년 1회차 11번: String Constant Pool과 == 비교
* **문제:** JAVA 알고리즘 실행결과 맞추기
```java
public class One {
    public static void main(String[] args) {
        String a = "helloworld";
        String b = "helloworld";
        System.out.print((a == b) ? 1 : 2);
    }
}
```
* **정답:** `1`
* **해설/핵심 포인트:** 큰따옴표 리터럴로 생성된 동일한 문자열은 JVM의 String Constant Pool에서 같은 인스턴스 주소를 참조하므로 `a == b`는 `true`가 됨. 따라서 삼항 연산자 결과는 `1`임.

---

#### 📌 [JA-07] 2026년 2회차 07번: 생성자 내부 메서드 호출 및 중첩 삼항 연산자
* **문제:** JAVA 알고리즘 실행결과 맞추기
```java
package oneprj;
import java.util.*;
class Func {
    int speed;
    Func(int speed) {
        this.speed = speed;
        this.printStatus();
    }
    void printStatus() {
        System.out.println(speed > 0 ? "전진"+speed+"km/h" : speed == 0 ? "정지" : "후진"+speed+"km/h");
    }
}
public class One {
    public static void main(String[] args) {
        Func test = new Func(55);
    }
}
```
* **정답:** `전진55km/h`
* **해설/핵심 포인트:** `new Func(55)` 생성자에서 `speed`에 55가 저장되고 `printStatus()`가 호출됨. `speed > 0` 조건이 참이므로 `"전진" + 55 + "km/h"`가 출력됨.

---

#### 📌 [JA-08] 2026년 2회차 08번: 인터페이스 구현 예약어 및 실행결과
* **문제:** JAVA알고리즘에서 빈칸에 해당하는 명령어 맞추기와 실행결과를 맞추기
```java
package oneprj;
import java.util.*;
interface TestOne {
    void test();
}
class TestTwo (1) TestOne {
    public void test() {
        System.out.println("hello");
    }
}
public class One {
    public static void main(String[] args) {
        TestTwo test = new TestTwo();
        test.test();
    }
}
```
* **(1) 질문:** 빈칸 (1)에 들어갈 예약어를 쓰시오.
* **(2) 질문:** 코드 실행 결과를 쓰시오.
* **정답:** (1) `implements` / (2) `hello`
* **해설/핵심 포인트:** `interface`를 구현하는 키워드는 `implements`이며, `test.test()` 호출 시 오버라이딩된 `"hello"`가 출력됨.

---

#### 📌 [JA-09] 2026년 2회차 09번: 상속 super() 생성자 첫 줄 규칙 오류
* **문제:** JAVA알고리즘 코드에서 오류가 발생되는 줄번호를 찾고 이유를 설명하기
```java
1 class Animal
2 {
3     protected String name;
4     protected int age;
5     Animal(String name, int age)
6     {
7         this.name = name;
8         this.age = age;
9     }
10 }
11 class Dog extends Animal
12 {
13     String breed;
14     Dog(String name, int age, String breed)
15     {
16         this.breed = breed;
17         super(name, age);
18     }
19     void bark() { System.out.println("wal wal"); }
20 }
```
* **정답:** 
  - **오류 발생 줄번호:** `17` (또는 원본 PDF 기준 `21`번 줄)
  - **오류 이유:** 자식 클래스 생성자에서 `super(...)` 호출은 반드시 **생성자의 첫 번째 줄**에 와야 함. 현재 코드에서는 16번 줄 `this.breed = breed;` 뒤에 `super(name, age);`가 위치하여 컴파일 에러가 발생함.
* **해설/핵심 포인트:** 부모 클래스에 매개변수가 없는 기본 생성자 `Animal()`이 없으므로, 명시적 `super(name, age)`는 반드시 자식 생성자 `Dog`의 첫 번째 문장으로 선언되어야 함.

---

### 🗄️ [파트 3] SQL (총 11문항 전문)

#### 📌 [SQL-01] 공단 예시 09번: 와일드카드 문자 박_
* **문제:** emp 테이블에는 name(이름), id(사번), dept(부서) 컬럼이 있다. 성이 박씨이면서 이름이 1글자인 사람의 정보를 찾는 SQL 코드에 대하여 ( ) 안에 들어갈 알맞은 와일드카드 문자를 쓰시오.
```sql
SELECT * FROM emp WHERE name LIKE '( ① )';
```
* **정답:** `박_`
* **해설/핵심 포인트:** SQL `LIKE` 패턴에서 `_`(언더스코어)는 정확히 1글자를 매칭함. '박'씨로 시작하고 이름이 1글자이므로 전체 길이는 2글자이며 패턴은 `박_`임.

---

#### 📌 [SQL-02] 공단 예시 10번: DROP TABLE CASCADE
* **문제:** test 테이블의 구조와 데이터를 모두 삭제하고, 연관 조건이 있다면 해당 연관 조건까지 모두 삭제하는 SQL 쿼리를 3개의 키워드와 테이블 이름(test)만 사용하여 쓰시오.
* **정답:** `DROP TABLE test CASCADE;`
* **해설/핵심 포인트:** 테이블 자체를 완전히 제거하는 DDL은 `DROP TABLE test`이며, 외래키 등으로 참조하는 연관 제약조건/객체까지 함께 연쇄 삭제하는 옵션은 `CASCADE`임.

---

#### 📌 [SQL-03] 공단 예시 11번: 서브쿼리 NOT IN 집계
* **문제:** 테이블 t1, t2에 대한 SQL 쿼리 수행 결과를 쓰시오.
  - `t1`: `c1` = {A, D, F, G}, `c2` = {5, 2, 3, 1}
  - `t2`: `c1` = {A, C, D, H}, `c2` = {3, 7, 6, 2}
```sql
SELECT SUM(c2) AS ans FROM t2 WHERE c1 NOT IN (SELECT c1 FROM t1);
```
* **정답:** `9`
* **해설/핵심 포인트:** `t1.c1` 목록은 {A, D, F, G}임. `t2`에서 `c1`이 `t1.c1`에 없는 행은 `c1='C'(c2=7)`과 `c1='H'(c2=2)`임. 이 두 행의 `c2` 합계는 `7 + 2 = 9`임.

---

#### 📌 [SQL-04] 2026년 1회차 01번: 상관 서브쿼리 EXISTS
* **문제:** 아래 테이블들을 기준으로 SQL문의 빈칸에 해당하는 명령어 맞추기. 서브쿼리의 행이 존재하는지를 체크해서 개수를 출력한다.
```sql
SELECT COUNT(*) FROM 사원 WHERE ( ? ) ( SELECT * FROM 수당 WHERE 수당.사원번호 = 사원.사원번호 );
```
* **정답:** `EXISTS`
* **해설/핵심 포인트:** 서브쿼리의 결과 레코드가 적어도 1건 이상 존재하는지 여부를 판별하는 SQL 연산자는 `EXISTS`임.

---

#### 📌 [SQL-05] 2026년 1회차 02번: UNION 중복 제거 및 COUNT 집계
* **문제:** 다음 두 테이블 prj1, prj2에 대하여 SQL을 실행한 결과값(숫자)을 쓰시오.
```sql
SELECT COUNT(*) FROM (SELECT PM FROM prj1 WHERE REGION = '과천' UNION SELECT PM FROM prj2 WHERE region = '과천');
```
* **정답:** `3`
* **해설/핵심 포인트:** `UNION`은 두 쿼리 결과의 합집합을 구하면서 중복된 값을 자동으로 제거함 (`UNION ALL`과의 차이). 중복이 제거된 고유한 PM의 개수가 카운트되어 결과는 `3`임.

---

#### 📌 [SQL-06] 2026년 1회차 08번: 데이터 수정 UPDATE ... SET
* **문제:** 다음은 데이터를 수정하기 위한 SQL문이다. 빈칸 (A), (B)를 채우시오.
```sql
( A ) 사원 ( B ) 부서 = '배송팀' WHERE 사번 = 1003;
```
* **정답:** (A) `UPDATE` / (B) `SET`
* **해설/핵심 포인트:** 데이터 조작어(DML)에서 기존 레코드의 컬럼 값을 수정하는 기본 문법은 `UPDATE [테이블명] SET [컬럼명 = 값] WHERE [조건]`임.

---

#### 📌 [SQL-07] 2026년 1회차 12번: LIKE 와일드카드 패턴 및 LENGTH
* **문제:** SQL문에서 아래 제시된 조건에 맞는 와일드카드 패턴을 적으시오.
  - 조건: 6글자 이상 8글자 이하 문자열이고, 2번째 글자는 ‘2’, 4번째 글자는 ‘A'가 된다.
```sql
WHERE column LIKE ' ? ' AND LENGTH(column) <= 8;
```
* **정답:** `_2_A__%`
* **해설/핵심 포인트:** 1번째: `_`, 2번째: `2`, 3번째: `_`, 4번째: `A`, 5~6번째(최소 6글자 만족): `__`, 6~8글자 가변: `%`. 결합하면 `_2_A__%`가 됨.

---

#### 📌 [SQL-08] 2026년 2회차 02번: 서브쿼리 IN 다중 조건 및 SUM 집계
* **문제:** 아래 테이블 2개를 기준으로 SQL문 실행결과를 맞추기
```sql
SELECT SUM(점수) AS 결과 FROM T2 WHERE 등급 IN(SELECT 등급 FROM T1 WHERE 등급 IN('A', 'C'));
```
* **정답:** `13`
* **해설/핵심 포인트:** 서브쿼리에서 T1의 등급이 'A' 또는 'C'인 등급 목록을 반환하고, T2에서 해당 등급에 해당하는 레코드들의 점수를 합산하여 `13`이 계산됨.

---

#### 📌 [SQL-09] 2026년 2회차 03번: NULL 값 검사 IS NULL
* **문제:** 사원 테이블에서 전화번호가 NULL인 레코드 검색을 하는 SQL문이다. 빈칸에 해당하는 명령어 맞추기
```sql
SELECT * FROM 사원 WHERE 전화번호 (?) NULL;
```
* **정답:** `IS`
* **해설/핵심 포인트:** SQL에서 NULL 값과의 비교는 `= NULL`이 아닌 `IS NULL` 연산자를 사용해야 함.

---

#### 📌 [SQL-10] 2026년 2회차 04번: LEFT OUTER JOIN
* **문제:** OUTER JOIN은 릴레이션에서 JOIN조건에 해당하지 않는 레코드도 결과로 출력한다. 아래 SQL문에서 회원(TEAM) 테이블을 기준으로 모든 데이터를 출력하려면 빈칸에 해당하는 명령어를 맞추기
```sql
SELECT TEAM.TEAM_ID, TEAM.TEAM_NAME, STADIUM.STADIUM_ID, STADIUM.SEATS FROM TEAM (?) OUTER JOIN STADIUM ON TEAM.TEAM_ID = STADIUM.TEAM_ID;
```
* **정답:** `LEFT` (또는 `FULL`)
* **해설/핵심 포인트:** FROM 절의 왼쪽 테이블인 TEAM 테이블의 모든 레코드를 누락 없이 출력하기 위해서는 `LEFT OUTER JOIN`을 사용함.

---

#### 📌 [SQL-11] 2026년 2회차 06번: TCL / DDL / DCL 명령어 매칭
* **문제:** 아래 설명에 해당하는 SQL 명령어 맞추기
  - (1) 비정상적인 종료로 원래 상태로 복구하는 명령어
  - (2) 다른 개체가 제거할 요소를 참조중이면 제거 작업을 취소한다
  - (3) 특정 테이블에 접근하는 권한을 부여하는 명령어
* **정답:** (1) `ROLLBACK` / (2) `RESTRICT` / (3) `GRANT`
* **해설/핵심 포인트:** (1) 트랜잭션 롤백 `ROLLBACK`, (2) 참조 무결성 유지를 위한 삭제 취소 `RESTRICT`, (3) 사용자 권한 부여 `GRANT`.

---

### 🐧 [파트 4] Linux (총 6문항 전문)

#### 📌 [LX-01] 공단 예시 01번: 상대 경로 적용 절대 경로 계산
* **문제:** 현재 작업 디렉터리의 절대 경로가 다음과 같을 때, 상대 경로로 제시된 디렉터리의 절대 경로를 쓰시오.
  - `[작업폴더]` `/Users/user/workspace`
  - `[상대 경로]` `../src/test`
* **정답:** `/Users/user/src/test`
* **해설/핵심 포인트:** `..`는 상위 디렉터리(`workspace`의 상위인 `/Users/user`)로 이동하므로, 이후 `src/test`로 진입하면 `/Users/user/src/test`가 됨.

---

#### 📌 [LX-02] 공단 예시 02번: Linux 기본 명령어 (pwd, chmod)
* **문제:** 다음 각 기능에 해당하는 Linux 터미널 명령어를 보기에서 골라 쓰시오.
  `<보기> top, vi, cat, ls, pwd, echo, ifconfig, chmod, rm, cp, cd, export`
  - (1) 현재 작업 중인 디렉토리 경로를 표시하는 명령어를 쓰시오.
  - (2) 대상 파일이나 디렉토리의 시스템 모드를 바꾸어 접근 권한을 설정하거나 변경하는 명령어를 쓰시오.
* **정답:** (1) `pwd` / (2) `chmod`
* **해설/핵심 포인트:** (1) Print Working Directory = `pwd`, (2) Change Mode (권한 변경) = `chmod`.

---

#### 📌 [LX-03] 2026년 1회차 03번: Linux 명령어 매칭 (sudo, man, pwd)
* **문제:** 리눅스 운영체제에서 아래 설명에 맞는 명령어를 <보기>에서 고르기.
  `<보기> cd, mkdir, rm, cp, mv, man, top, sudo, df, pwd`
  - (1) root 권한을 사용하여 명령어 쓸 수 있다.
  - (2) 도움말 및 사용법을 볼 수 있는 명령어
  - (3) 현재 접근중인 디렉터리 경로를 확인하는 명령어
* **정답:** (1) `sudo` / (2) `man` / (3) `pwd`
* **해설/핵심 포인트:** (1) SuperUser Do = `sudo`, (2) Manual = `man`, (3) Print Working Directory = `pwd`.

---

#### 📌 [LX-04] 2026년 1회차 04번: 상대 경로 표기
* **문제:** 현재 작업 경로에서 목표 경로에 대한 상대 경로를 작성하시오.
  - `작업 경로:` `Users/project/workspace/dev`
  - `목표 경로:` `Users/project/workspace/docs`
* **정답:** `../docs`
* **해설/핵심 포인트:** `dev`에서 한 단계 상위인 `workspace`로 올라가기 위해 `..`를 사용한 후 `docs`로 이동하므로 `../docs`임.

---

#### 📌 [LX-05] 2026년 2회차 01번: 절대 경로에서 상대 경로 이동
* **문제:** 리눅스에서 절대경로는 `/User/user/src/test` 이것을 목표 상대경로를 `../../lib` 명령을 수행하면 어떻게 표시되는지 맞추기
* **정답:** `/User/user/lib`
* **해설/핵심 포인트:** `/User/user/src/test`에서 `..`(src로 이동) -> `..`(/User/user로 이동) -> `lib` 진입 -> 최종 경로는 `/User/user/lib`임.

---

#### 📌 [LX-06] 2026년 2회차 05번: Linux 명령어 매칭 (ls, chmod, tar)
* **문제:** 아래 설명에 해당하는 리눅스 명령어 맞추기
  - (1) 현재 디렉터리의 파일 목록을 표시
  - (2) 파일의 사용 권한을 변경시 사용
  - (3) 파일을 압축 또는 압축된 파일 해제에서 사용
* **정답:** (1) `ls` / (2) `chmod` / (3) `tar`
* **해설/핵심 포인트:** (1) List = `ls`, (2) Change Mode = `chmod`, (3) Tape Archive (압축/아카이브) = `tar`.

---

## 6. 신규 예상 유형 출제 방침 및 핵심 개념·메서드·명령어 총람

단순한 숫자 바꾸기식 변형을 넘어, 수험자의 구조적 이해도와 실전 함정 대처 능력을 완벽히 검증하기 위한 **출제 방침, 과목별 핵심 개념/메서드 역할 도감, LLM 문제 생성 가이드라인**입니다.

---

### 📌 6.1 신규 유형 제작 3대 원칙 (Core Principles)

1. **본질적 논리 결합 (Core Logic Combination)**
   - 단순 for문 1차원 순회는 지양하고, **[자료구조 + 제어문 + 내장 함수/메서드]**를 결합하여 최소 2가지 이상의 문법적 판단을 요구할 것.
   - *예시:* `dict(zip(A, B))` + `dict.get(key, default)` 결합, `상속(Inheritance)` + `생성자 체이닝(this/super)` 결합.

2. **실전 맹점 모사 (Blind Spot Simulation)**
   - 평소 IDE(VSCode, IntelliJ)의 자동 완성이나 컴파일러 경고에 의존하여 놓치기 쉬운 맹점들을 정밀 타깃팅할 것.
   - *예시:* 단축 평가(Short-circuit evaluation)로 인한 뒤쪽 증감 연산자 스킵, 파이썬 불변 튜플 수정 시도, String Constant Pool의 `==` vs `equals()`, `super()` 생성자의 첫 줄 선언 강제 규칙.

3. **수기 디버깅 적합성 유지 (Paper-Debuggable Complexity)**
   - 1시간 30분의 실기 시험 환경에서 펜과 시험지 여백만으로 변수 추적(Trace)이 가능한 수준(2~3중 루프 이하, 순회 횟수 10회 미만)으로 복잡도를 최적화할 것.

---

### 📚 6.2 과목별 핵심 개념 및 메서드 역할 도감

#### 🐍 [Python] 파이썬 핵심 개념 & 메서드 도감
| 범주 | 문법 / 메서드 | 역할 및 핵심 특징 | 출제 함정 포인트 |
| :--- | :--- | :--- | :--- |
| **딕셔너리** | `dict.items()` | `(key, value)` 쌍을 튜플 형태로 반환 | `keys()`, `values()`와의 반환 형태 혼동 유도 |
| | `dict.get(key, default)` | Key가 존재하면 Value 반환, 없으면 기본값 반환 | `key` 자리에 `value` 값을 넣어 조회 시 기본값이 반환되는 함정 |
| | `dict.setdefault(k, d)` | Key가 없으면 기본값 삽입 후 반환 | 기존 Key가 이미 있을 때는 값이 갱신되지 않는 특징 |
| **내장 함수** | `zip(seq1, seq2)` | 길이가 같은 두 시퀀스를 병렬로 묶어 이터레이터 생성 | 길이가 다를 경우 짧은 쪽에 맞춰 잘림 |
| | `enumerate(seq, start)` | `(인덱스, 요소값)` 형태의 튜플로 순회 | `start` 기본값은 `0`, 순서가 `(idx, val)`임에 주의 |
| | `ord(c)` / `chr(n)` | 문자를 유니코드/아스키 정수로, 정수를 문자로 변환 | `'A'(65)`, `'a'(97)`, `'0'(48)` 기본 아스키 코드 기반 연산 |
| | `map(func, iterable)` | 반복 가능한 객체의 각 요소에 함수 적용 | `join`과 결합 시 `map(str, arr)`처럼 문자열 변환 필수 |
| | `filter(func, seq)` | 조건 함수가 참인 요소만 추출 | 람다식 `lambda x: x % 2 != 0`과의 결합 출제 |
| **시퀀스 조작** | `[start:stop:step]` | 슬라이싱 (부분 추출 및 역순 반전) | `[::-1]`(역순), `stop` 인덱스 미포함(미만) 주의 |
| | `str.join(iterable)` | 구분자 문자열을 사이에 두고 리스트 요소를 결합 | 요소가 숫자인 경우 `TypeError` 발생 (str 변환 필수) |
| **자료형 특성** | `tuple` (불변형) | 요소를 괄호 `()`로 정의하며 생성 후 변경 불가 | `t[0] = 10` 시 `TypeError` 발생 |
| | `set` (집합) | 중복 제거 및 `&`(교집합), `\|`(합집합), `-`(차집합) | 순서가 없으며(`unordered`), 인덱스 접근 불가 |
| | 얕은 복사 vs 깊은 복사 | `list.copy()`, `[:]`는 1차원만 복사, 다차원은 참조 공유 | 2차원 리스트 복사 후 내부 요소 변경 시 원본 영향 여부 |

---

#### ☕ [Java] 자바 핵심 개념 & 키워드 도감
| 범주 | 문법 / 키워드 | 역할 및 핵심 특징 | 출제 함정 포인트 |
| :--- | :--- | :--- | :--- |
| **객체 지향** | `interface` / `implements` | 인터페이스 선언 및 구현 예약어 | 다중 구현 가능, 인터페이스의 모든 메서드는 `public abstract` |
| | `super()` / `this()` | 부모 생성자 호출 / 자신의 다른 생성자 호출 | **생성자의 첫 줄**에만 작성 가능, 미작성 시 부모 `super()` 자동 호출 |
| | 다형성 (Polymorphism) | 부모 타입 참조변수로 자식 인스턴스 참조 (`Parent p = new Child()`) | 오버라이딩된 자식 메서드가 동적 바인딩되어 호출됨 |
| | `abstract class` | 하나 이상의 추상 메서드를 포함하는 불완전 클래스 | 직접 `new`로 인스턴스화 불가, 상속받아 완성해야 함 |
| **메모리 & 연산** | String Constant Pool | 리터럴 생성(`String a = "hi"`) 시 동일 문자열 주소 공유 | `a == b`는 `true`, `new String("hi")`는 `false` |
| | `static` (정적 멤버) | 클래스 로딩 시 단 1번 생성되어 모든 인스턴스가 공유 | 인스턴스 생성 때마다 값이 누적되는 카운터/누적기 함정 |
| | 단축 평가 (Short-circuit) | `&&`(앞이 false면 뒤 연산 스킵), `\|\|`(앞이 true면 스킵) | `(a++ > 5) && (b++ > 5)`에서 뒤쪽 `b++`가 실행되지 않는 함정 |
| | 중첩 3항 연산자 | `조건 ? 참 : (조건 ? 참 : 거짓)` 형태의 인라인 분기 | 괄호 없는 다중 중첩 시 결합 우선순위 추적 |
| **예외 & 흐름** | `try-catch-finally` | 예외 처리 구문 | `try`나 `catch` 블록에서 `return`이 발생해도 `finally`는 무조건 실행 |

---

#### 🗄️ [SQL] SQL 핵심 명령어 & 함수 도감
| 범주 | 명령어 / 연산자 | 역할 및 핵심 특징 | 출제 함정 포인트 |
| :--- | :--- | :--- | :--- |
| **서브쿼리** | `EXISTS` / `NOT EXISTS` | 서브쿼리의 결과 행이 1건이라도 존재하는지 여부 판별 | 참/거짓만 체크하므로 서브쿼리 내 `SELECT 1` 또는 `SELECT *` 무관 |
| | `IN` / `NOT IN` | 목록에 포함되는지 여부 검사 | `NOT IN` 서브쿼리 결과에 `NULL`이 포함되면 결과 전체가 공집합이 됨 |
| **집합 & 조인** | `UNION` vs `UNION ALL` | `UNION`은 중복 제거(정렬 수반), `UNION ALL`은 중복 포함 | `COUNT(*)` 연계 시 중복 행 제거로 인한 개수 차이 |
| | `LEFT / RIGHT OUTER JOIN` | 기준이 되는 테이블의 모든 행을 보존하고 반대편 매칭 | 매칭되지 않는 반대편 컬럼 값은 `NULL`로 채워짐 |
| **패턴 & 제어** | 와일드카드 `_` vs `%` | `_`는 정확히 1글자, `%`는 0개 이상의 문자 | `LENGTH()` 함수와 결합하여 자릿수 제한 조건 만족 여부 |
| | `IS NULL` / `IS NOT NULL` | NULL 값 유무 판별 | `= NULL`은 항상 Unknown(False) 처리되므로 오답 |
| **DDL / DCL / TCL** | `DROP TABLE ... CASCADE` | 테이블 및 이를 참조하는 외래키 제약조건까지 연쇄 삭제 | `RESTRICT`는 참조 중인 객체가 있으면 삭제 취소 |
| | `ROLLBACK` / `COMMIT` | 트랜잭션 작업을 취소하고 복구 / 영구 저장 | 비정상 종료 시 원상 복구 명령어 |
| | `GRANT` / `REVOKE` | 데이터베이스 객체 권한 부여 / 회수 | `GRANT SELECT ON emp TO user1;` |

---

#### 🐧 [Linux] 리눅스 명령어 총람 도감
| 명령어 | 기능 및 설명 | 주요 옵션 / 핵심 포인트 |
| :--- | :--- | :--- |
| `pwd` | Print Working Directory (현재 작업 디렉터리의 절대 경로 출력) | 경로 문제의 시작점 확인 |
| `cd` | Change Directory (디렉터리 이동) | `cd ~`(홈), `cd ..`(상위), `cd -`(이전경로) |
| `ls` | List (현재 디렉터리의 파일 및 디렉터리 목록 표시) | `ls -l`(상세정보), `ls -a`(숨김파일포함) |
| `chmod` | Change Mode (파일/디렉터리의 접근 권한 변경) | 8진수 표기법(`chmod 755`), 기호 표기법(`chmod u+x`) |
| `tar` | Tape Archive (파일 묶기 및 압축/해제) | `-cvf`(생성), `-xvf`(해제), `-z`(gzip압축연동) |
| `sudo` | SuperUser Do (루트/관리자 권한으로 명령어 실행) | 보안/관리자 권한 요구 문제 |
| `man` | Manual (명령어의 도움말 및 사용법 매뉴얼 페이지 출력) | `man [명령어]` |
| `top` | Table of Processes (실시간 CPU/메모리 프로세스 모니터링) | 시스템 리소스 확인 |
| `ps` | Process Status (현재 실행 중인 프로세스 목록 확인) | `ps -ef`, `ps aux` |
| `df` / `du` | Disk Free (디스크 여유 공간 확인) / Disk Usage (디렉터리 사용 용량) | `df -h` |
| `grep` | Global Regular Expression Print (파일 내 특정 문자열 패턴 검색) | 파이프라인 `ps -ef \| grep java` |
| `mkdir` / `rm` | Make Directory (디렉터리 생성) / Remove (파일/디렉터리 삭제) | `rm -rf` |
| `cp` / `mv` | Copy (복사) / Move (이동 및 이름 변경) | 경로 지정 및 덮어쓰기 |

---

### 🤖 6.3 LLM 신규 파생 변형 문제 생성 프롬프트 템플릿

향후 새로운 기출 및 고난도 변형 문제를 대량 생성할 때 사용할 표준 프롬프트 규격입니다:

```markdown
[System: 프로그래밍기능사 실기 출제 위원 AI]
당신은 2026 프로그래밍기능사(작업형) 실기 시험의 전문 출제 위원입니다.
제시된 [기준 기출문제]를 분석하여, 동일한 핵심 개념을 검증하되 수험자의 꼼수 암기를 차단할 수 있는 
[파생 변형 문제 2세트]를 생성하십시오.

[출제 요구 조건]
1. 원본 문제의 핵심 함정(Trap Point)을 유지할 것.
2. 단순한 숫자 변경이 아닌, 반복문 증감 방향 반전, 조건식 연산자 변경, 메서드 체이닝 순서 변경 등 논리 구조를 비틀 것.
3. 펜과 종이로 디버깅 가능한 코드 길이(15줄 이하)와 순회 횟수(10회 이하)를 준수할 것.
4. 아래 JSON 규격에 맞추어 출력할 것:
{
  "id": "과목-VAR-번호",
  "title": "문제 제목",
  "code": "코드 전문",
  "questionSubItems": [{ "prompt": "질문", "answer": ["정답"] }],
  "explanation": {
    "trapPoint": "함정 포인트",
    "onePointTip": "1줄 요약 팁",
    "traceTable": [{ "step": "단계", "vars": { ... } }]
  }
}
```

