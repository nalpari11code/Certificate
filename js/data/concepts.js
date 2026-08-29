// ============================================================
// js/data/concepts.js — 4과목 핵심 개념 노트 데이터
// 기출 35문항 + 변형 1,700문항 분석 기반
// ============================================================

export const CONCEPT_DATA = {
  overall: {
    icon: '📊',
    label: '전체 기출 분석',
    color: '#6366f1',
    sections: [
      {
        title: '1. 기출 출제 경향 및 과목별 비중 분석',
        content: `<div class="concept-highlight">기출 35문항 전수 분석 결과: 프로그래밍 실무 중심(Python + Java 60%) + 데이터베이스(SQL 25%) + 운영체제(Linux 15%)의 황금 비율로 출제됩니다.</div>
<table class="concept-table">
<thead><tr><th>과목</th><th>출제 문항 비중</th><th>핵심 출제 유형</th><th>난이도 및 공략 포인트</th></tr></thead>
<tbody>
<tr><td><b>Python</b></td><td>약 30% (9~11문)</td><td>반복문 제어, 슬라이싱, 트리 순회, 재귀함수, 내장 메서드</td><td>문법 함정(불변성, 콜론/인덴트) 및 출력 포맷 정확도 중요</td></tr>
<tr><td><b>Java</b></td><td>약 30% (9~11문)</td><td>객체지향(상속, 오버라이딩, 다형성), 생성자 체이닝, 배열/문자열 조작</td><td>인스턴스 생성 흐름, 부모/자식 메서드 호출 우선순위 추적</td></tr>
<tr><td><b>SQL</b></td><td>약 25% (8~9문)</td><td>SELECT 집계/정렬, GROUP BY ~ HAVING, JOIN, DDL/DML 빈칸</td><td>NULL 연산 처리, 실행 순서 이해, 서브쿼리 결과 예측</td></tr>
<tr><td><b>Linux</b></td><td>약 15% (4~6문)</td><td>chmod 권한 계산, 프로세스 제어(kill, ps), 파일/디렉터리 탐색</td><td>8진수 권한 비트(r=4, w=2, x=1) 및 핵심 옵션 암기</td></tr>
</tbody></table>`
      },
      {
        title: '2. 프로그래밍 언어(Python vs Java) 공통점과 차이점',
        content: `<table class="concept-table">
<thead><tr><th>비교 항목</th><th>Python 🐍</th><th>Java ☕</th><th>실전 시험 유의점</th></tr></thead>
<tbody>
<tr><td><b>문법 구조</b></td><td>들여쓰기(Indentation) 기반 블록</td><td>중괄호 <code>{}</code> 및 세미콜론 <code>;</code></td><td>Python 들여쓰기 오류, Java 세미콜론/괄호 짝 확인</td></tr>
<tr><td><b>자료형 선언</b></td><td>동적 타이핑 (변수 선언 시 타입 불필요)</td><td>정적 타이핑 (<code>int</code>, <code>String</code> 등 명시)</td><td>Java 형변환(Casting) 및 나눗셈 몫(정수 연산) 주의</td></tr>
<tr><td><b>배열/리스트</b></td><td>가변 크기 List (<code>[ ]</code>), 슬라이싱 지원</td><td>고정 크기 Array (<code>new int[N]</code>)</td><td>Python 음수 인덱스(<code>-1</code>) vs Java 인덱스 초과(<code>IndexOutOfBounds</code>)</td></tr>
<tr><td><b>출력 방식</b></td><td><code>print(..., end='')</code> (기본 개행)</td><td><code>System.out.print()</code> vs <code>println()</code></td><td>출력물 개행 유무 및 공백(띄어쓰기) 포맷 절대 실수 금지</td></tr>
<tr><td><b>반복문 구조</b></td><td><code>for x in arr:</code>, <code>for i in range():</code></td><td><code>for(int i=0; i&lt;n; i++)</code>, 향상된 for</td><td>루프 종료 조건(미만 <code>&lt;</code> vs 이하 <code>&lt;=</code>) 1차이 오답 방지</td></tr>
<tr><td><b>상속/객체</b></td><td>다중 상속 가능, <code>self</code> 명시</td><td>단일 상속(<code>extends</code>), <code>super()</code> 체이닝</td><td>부모 생성자 기본 호출(<code>super()</code>) 실행 순서</td></tr>
</tbody></table>`
      },
      {
        title: '3. 데이터베이스 & 리눅스 핵심 공통 출제 패턴',
        content: `<div class="concept-highlight">단답형 빈칸 채우기 및 SQL 구문 작성, 쉘 명령어 조합 문제 완벽 대응 전략</div>
<ul class="concept-list">
<li><b>SQL DDL vs DML 구분:</b> 테이블 구조 변경은 <code>ALTER</code>(DDL), 데이터 내용 변경은 <code>UPDATE</code>(DML) 절대 혼동 금지!</li>
<li><b>조인(JOIN) 결과 예측:</b> <code>INNER JOIN</code>(교집합) vs <code>LEFT OUTER JOIN</code>(왼쪽 전체 + 오른쪽 매칭 안되면 NULL)</li>
<li><b>리눅스 권한(chmod):</b> <code>rwx r-x r--</code> → <code>7 5 4</code> 변환 계산법은 100% 출제되는 단골 문제!</li>
<li><b>리눅스 명령어 옵션:</b> <code>tar -cvf</code>(압축 생성), <code>tar -xvf</code>(압축 해제), <code>kill -9</code>(강제 종료)</li>
</ul>`
      },
      {
        title: '4. 고득점 합격을 위한 오답 방지 5대 원칙',
        content: `<table class="concept-table">
<thead><tr><th>순번</th><th>오답 방지 핵심 원칙</th><th>실제 기출 함정 예시</th></tr></thead>
<tbody>
<tr><td><b>1</b></td><td><b>변수 추적표(Trace Table) 작성</b></td><td>루프 회차별 변수 값 변화를 시험지에 표로 적어가며 추적</td></tr>
<tr><td><b>2</b></td><td><b>인덱스 범위 경계값 점검</b></td><td><code>range(1, 5)</code>는 1,2,3,4 (5 미포함!), Java <code>length</code>와 마지막 인덱스 <code>length-1</code></td></tr>
<tr><td><b>3</b></td><td><b>전위/중위/후위 순회 print 위치</b></td><td>재귀 호출 전(전위), 사이(중위), 후(후위) 위치만 보면 3초 컷</td></tr>
<tr><td><b>4</b></td><td><b>SQL 실행 순서 준수</b></td><td>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</td></tr>
<tr><td><b>5</b></td><td><b>대소문자 및 띄어쓰기 철저</b></td><td>출력 결과의 공백, 콤마, 개행 일치 여부 최종 검산</td></tr>
</tbody></table>`
      }
    ]
  },
  python: {
    icon: '🐍',
    label: 'Python',
    color: '#3776AB',
    sections: [
      {
        title: '1. 자료형과 불변성 (Mutable vs Immutable)',
        content: `<table class="concept-table">
<thead><tr><th>자료형</th><th>기호</th><th>변경 가능</th><th>순서</th><th>중복 허용</th></tr></thead>
<tbody>
<tr><td><b>리스트(List)</b></td><td><code>[]</code></td><td>✅ Mutable</td><td>✅</td><td>✅</td></tr>
<tr><td><b>튜플(Tuple)</b></td><td><code>()</code></td><td class="text-danger">❌ Immutable</td><td>✅</td><td>✅</td></tr>
<tr><td><b>딕셔너리(Dict)</b></td><td><code>{}</code></td><td>✅ Mutable</td><td>✅(3.7+)</td><td>Key ❌</td></tr>
<tr><td><b>세트(Set)</b></td><td><code>{}</code></td><td>✅ Mutable</td><td>❌</td><td>❌</td></tr>
</tbody></table>`,
        trap: '<code>a = (1, 2, 3)</code> → <code>a[0] = 4</code> → ❌ <b>TypeError</b>! 튜플은 불변(Immutable)이므로 요소 변경 불가.'
      },
      {
        title: '2. 딕셔너리 핵심 메서드',
        content: `<div class="code-block"><pre>d = {'a': 15, 'b': 30, 'c': 45}</pre></div>
<table class="concept-table">
<thead><tr><th>메서드</th><th>반환값</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>d.keys()</code></td><td><code>dict_keys(['a', 'b', 'c'])</code></td><td><b>키</b>만 반환</td></tr>
<tr><td><code>d.values()</code></td><td><code>dict_values([15, 30, 45])</code></td><td><b>값</b>만 반환</td></tr>
<tr><td><code>d.items()</code></td><td><code>dict_items([('a',15), ...])</code></td><td><b>(키, 값) 쌍</b> 반환</td></tr>
<tr><td><code>d.get(key, default)</code></td><td>키 있으면 값, 없으면 default</td><td><b>안전한 조회</b></td></tr>
</tbody></table>`,
        trap: '<code>d.get(15, 0)</code> → 15는 <b>value</b>이지 <b>key</b>가 아님 → 결과: <code>0</code>. get()의 첫 인자는 반드시 KEY!'
      },
      {
        title: '3. zip() 함수',
        content: `<div class="code-block"><pre>A = ['a', 'b', 'c']
B = [15, 30, 45]
C = dict(zip(A, B))   # → {'a': 15, 'b': 30, 'c': 45}</pre></div>
<ul class="concept-list">
<li><code>zip(A, B)</code> → 같은 인덱스끼리 <b>튜플 쌍</b>으로 묶음</li>
<li><code>dict(zip(A, B))</code> → A가 <b>key</b>, B가 <b>value</b>인 딕셔너리 생성</li>
</ul>`
      },
      {
        title: '4. 인덱싱 & 슬라이싱',
        content: `<div class="code-block"><pre>arr = [10, 20, 30, 40, 50]</pre></div>
<table class="concept-table">
<thead><tr><th>표현</th><th>결과</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>arr[0]</code></td><td><code>10</code></td><td>첫 번째 요소</td></tr>
<tr><td><code>arr[-1]</code></td><td><code>50</code></td><td><b>마지막</b> 요소</td></tr>
<tr><td><code>arr[-2]</code></td><td><code>40</code></td><td>뒤에서 두 번째</td></tr>
<tr><td><code>arr[1:3]</code></td><td><code>[20, 30]</code></td><td>인덱스 1 ~ 2</td></tr>
<tr><td><code>arr[::-1]</code></td><td><code>[50, 40, 30, 20, 10]</code></td><td><b>전체 역순</b></td></tr>
</tbody></table>`,
        trap: '음수 인덱스: <code>-1</code>이 마지막, <code>-2</code>가 그 앞 … 뒤에서부터 셈'
      },
      {
        title: '5. 이진 트리 순회 ⭐⭐⭐',
        content: `<div class="concept-highlight">가장 중요한 기출 유형! print 위치로 순회 종류를 구분하세요.</div>
<div class="code-block"><pre>def traverse(root):
    if root:
        # ❶ print ← 여기면 전위(Preorder)
        traverse(root.left)
        # ❷ print ← 여기면 중위(Inorder)
        traverse(root.right)
        # ❸ print ← 여기면 후위(Postorder)</pre></div>
<table class="concept-table">
<thead><tr><th>순회</th><th>순서</th><th>print 위치</th><th>기억법</th></tr></thead>
<tbody>
<tr><td><b>전위(Pre)</b></td><td>Root → L → R</td><td>재귀 호출 <b>전</b></td><td>"먼저 나(Root)"</td></tr>
<tr><td><b>중위(In)</b></td><td>L → Root → R</td><td>재귀 호출 <b>사이</b></td><td>"가운데 나(Root)"</td></tr>
<tr><td><b>후위(Post)</b></td><td>L → R → Root</td><td>재귀 호출 <b>후</b></td><td>"마지막에 나(Root)"</td></tr>
</tbody></table>
<div class="code-block"><pre>    기출 트리:       1
                   / \\
                  5   3
                 / \\ / \\
                2  7 6  4

전위: 1/5/2/7/3/6/4/
중위: 2/5/7/1/6/3/4/  ← 기출 정답
후위: 2/7/5/6/4/3/1/</pre></div>`
      },
      {
        title: '6. 피보나치 수열 & for문 구조',
        content: `<div class="code-block"><pre>def fibonacci(n):
    seq = []
    a, b = 1, 1
    for _ in range(n):      # ← 반복 변수 필수!
        seq.append(a)
        a, b = b, a + b     # ← 동시 할당(swap)
    return seq</pre></div>`,
        trap: '<code>for in range(n):</code> → 반복 변수 누락 → <b>SyntaxError (4번 줄)</b><br>수정 후: <code>fibonacci(6)[-1]</code> → <code>[1,1,2,3,5,8][-1]</code> → <b>8</b>'
      },
      {
        title: '7. 에라토스테네스의 체 (소수 판별)',
        content: `<div class="code-block"><pre>A = [True] * n
for i in range(2, int(n**0.5) + 1):   # √n까지만 순회
    if A[i]:
        for j in range(i*i, n, i):      # i의 배수를 False
            A[j] = False
primes = [x for x in range(2, n) if A[x]]</pre></div>
<div class="concept-tip">핵심: <b>√n까지만 반복</b> → <code>int(n**0.5) + 1</code></div>`
      },
      {
        title: '8. map(), join(), isinstance()',
        content: `<div class="code-block"><pre># map(함수, 반복가능객체) — 각 요소에 함수 적용
list(map(str, [7, 4, 1]))    # → ['7', '4', '1']

# "구분자".join(문자열리스트) — 문자열 결합
"".join(['7', '4', '1'])      # → '741'

# isinstance(객체, 타입) — 타입 확인
isinstance([1,2], list)       # → True</pre></div>`,
        trap: '<code>join()</code>은 <b>문자열만</b> 결합 가능! 정수 리스트는 반드시 <code>map(str, list)</code> 먼저!'
      },
      {
        title: '9. 아스키 코드 (ord / chr)',
        content: `<div class="code-block"><pre>ord('A')  # → 65    (문자 → 숫자)
chr(65)   # → 'A'   (숫자 → 문자)
ord('a')  # → 97
ord('0')  # → 48</pre></div>
<table class="concept-table">
<thead><tr><th>범위</th><th>문자</th><th>코드</th></tr></thead>
<tbody>
<tr><td>대문자</td><td>A ~ Z</td><td>65 ~ 90</td></tr>
<tr><td>소문자</td><td>a ~ z</td><td>97 ~ 122</td></tr>
<tr><td>숫자</td><td>0 ~ 9</td><td>48 ~ 57</td></tr>
</tbody></table>`
      },
      {
        title: '10. 인덴트(들여쓰기) 규칙',
        content: `<div class="code-block"><pre>def test():
    result = []
    return result     # ✅ 함수 블록 안
return result         # ❌ 함수 블록 밖 → 에러!</pre></div>`,
        trap: '<code>return</code>이 함수 바깥에 있으면 <b>IndentationError</b>! 파이썬은 <b>들여쓰기가 곧 블록 구분</b>.'
      }
    ]
  },

  java: {
    icon: '☕',
    label: 'Java',
    color: '#ED8B00',
    sections: [
      {
        title: '1. 인터페이스 vs 추상클래스',
        content: `<table class="concept-table">
<thead><tr><th>구분</th><th>인터페이스(interface)</th><th>추상클래스(abstract class)</th></tr></thead>
<tbody>
<tr><td>선언 키워드</td><td><code>interface</code></td><td><code>abstract class</code></td></tr>
<tr><td>구현 키워드</td><td><code>implements</code></td><td><code>extends</code></td></tr>
<tr><td>다중 구현</td><td>✅ 가능</td><td>❌ 단일 상속만</td></tr>
<tr><td>메서드</td><td>기본 추상 (Java8+: default, static)</td><td>추상 + 일반 혼합</td></tr>
<tr><td>필드(변수)</td><td><code>public static final</code> 상수만</td><td>인스턴스 변수 가능</td></tr>
<tr><td>생성자</td><td>❌ 없음</td><td>✅ 있음</td></tr>
</tbody></table>
<div class="concept-highlight">절대 혼동 금지!<br>
• 인터페이스 <b>정의</b>: <code>interface</code><br>
• 인터페이스 <b>구현</b>: <code>implements</code><br>
• 클래스 <b>상속</b>: <code>extends</code><br>
• 인터페이스 간 <b>상속</b>: <code>extends</code></div>`,
        trap: '인터페이스 메서드 구현 시 반드시 <b><code>public</code></b> 접근 제어자 필수! 생략하면 패키지-private가 되어 <b>컴파일 에러</b>!'
      },
      {
        title: '2. 생성자 체이닝 (this / super) ⭐⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>규칙</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>this()</code></td><td><b>자신</b> 클래스의 다른 생성자 호출</td></tr>
<tr><td><code>super()</code></td><td><b>부모</b> 클래스의 생성자 호출</td></tr>
<tr><td>⚠️ <b>첫 줄 규칙</b></td><td><code>this()</code> / <code>super()</code>는 반드시 생성자의 <b>첫 번째 문장</b>이어야 함</td></tr>
<tr><td>⚠️ <b>암묵적 삽입</b></td><td>자식 생성자에 <code>super()</code>가 없으면 컴파일러가 <b>자동으로 삽입</b></td></tr>
</tbody></table>
<div class="code-block"><pre>// 기출 추적:
// new Test2('Z')
//   → this() → Test2()
//     → super() → Test1() → print 'X'
//   → Test2() 복귀 → print 'Y'
// → Test2('Z') 복귀 → print 'Z'
// 결과: XYZ</pre></div>`,
        trap: '<code>super()</code> 앞에 다른 코드가 있으면 <b>컴파일 에러!</b><br><code>this.breed = breed;</code> (16줄) → <code>super(name, age);</code> (17줄: 에러!)'
      },
      {
        title: '3. 부모 기본 생성자 자동 호출',
        content: `<div class="code-block"><pre>class Bird {
    Bird()       { System.out.print("A"); }  // 기본 생성자
    Bird(char a) { System.out.print("a"); }  // 매개변수 생성자
}
class Eagle extends Bird {
    Eagle(char a) { System.out.printf("%c%c", a, a); }
    // ↑ super() 생략 → 컴파일러가 암묵적으로 super() 삽입!
}
// new Eagle('c') → 암묵적 super() → Bird() → 'A' → 'cc'
// 결과: Acc</pre></div>`,
        trap: '부모에 기본 생성자가 없고 매개변수 생성자만 있으면? → 자식에서 명시적으로 <code>super(인자)</code>를 호출해야 함. 아니면 <b>컴파일 에러!</b>'
      },
      {
        title: '4. String 비교: == vs .equals() ⭐⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>방식</th><th>비교 대상</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>==</code></td><td><b>주소(참조)</b> 비교</td><td>같은 객체인지 확인</td></tr>
<tr><td><code>.equals()</code></td><td><b>값(내용)</b> 비교</td><td>같은 문자열인지 확인</td></tr>
</tbody></table>
<div class="code-block"><pre>// 리터럴 → String Constant Pool 공유
String a = "hello";
String b = "hello";
a == b;          // → true  ✅ (같은 Pool 주소)

// new String() → 힙에 별도 객체 생성
String t1 = new String("ASDF");
String t2 = new String("ASDF");
t1 == t2;        // → false ❌ (다른 힙 주소)
t1.equals(t2);   // → true  ✅ (같은 값)</pre></div>`,
        trap: '<code>"리터럴" == "리터럴"</code> → <b>true</b> (Pool 공유)<br><code>new String() == new String()</code> → <b>false</b> (별도 힙 객체)'
      },
      {
        title: '5. 삼항 연산자 (중첩)',
        content: `<div class="code-block"><pre>// 기본 형태
조건 ? 참값 : 거짓값

// 중첩 삼항 (왼→오 순서대로 평가)
speed > 0 ? "전진" + speed + "km/h"
          : speed == 0 ? "정지"
                       : "후진" + speed + "km/h"

// speed = 55 → "전진55km/h"</pre></div>`
      },
      {
        title: '6. Java OOP 키워드 총정리',
        content: `<table class="concept-table">
<thead><tr><th>키워드</th><th>의미</th></tr></thead>
<tbody>
<tr><td><code>class</code></td><td>클래스 선언</td></tr>
<tr><td><code>interface</code></td><td>인터페이스 선언</td></tr>
<tr><td><code>extends</code></td><td>클래스 상속 / 인터페이스 간 상속</td></tr>
<tr><td><code>implements</code></td><td>인터페이스 구현</td></tr>
<tr><td><code>abstract</code></td><td>추상 클래스/메서드 선언</td></tr>
<tr><td><code>this</code></td><td>현재 객체 참조</td></tr>
<tr><td><code>super</code></td><td>부모 클래스 참조</td></tr>
<tr><td><code>new</code></td><td>객체 생성</td></tr>
<tr><td><code>instanceof</code></td><td>타입 확인</td></tr>
<tr><td><code>static</code></td><td>클래스 레벨 멤버</td></tr>
<tr><td><code>final</code></td><td>변경 불가 (상수/오버라이딩/상속 금지)</td></tr>
</tbody></table>`
      }
    ]
  },

  sql: {
    icon: '🗄️',
    label: 'SQL',
    color: '#336791',
    sections: [
      {
        title: '1. SQL 분류 체계',
        content: `<table class="concept-table">
<thead><tr><th>분류</th><th>명칭</th><th>명령어</th><th>설명</th></tr></thead>
<tbody>
<tr><td><b>DDL</b></td><td>데이터 정의어</td><td><code>CREATE, ALTER, DROP, TRUNCATE</code></td><td>구조 정의/변경/삭제</td></tr>
<tr><td><b>DML</b></td><td>데이터 조작어</td><td><code>SELECT, INSERT, UPDATE, DELETE</code></td><td>데이터 CRUD</td></tr>
<tr><td><b>DCL</b></td><td>데이터 제어어</td><td><code>GRANT, REVOKE</code></td><td>권한 부여/회수</td></tr>
<tr><td><b>TCL</b></td><td>트랜잭션 제어어</td><td><code>COMMIT, ROLLBACK, SAVEPOINT</code></td><td>트랜잭션 관리</td></tr>
</tbody></table>`
      },
      {
        title: '2. 테이블 삭제 3총사 ⭐⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>명령어</th><th>대상</th><th>롤백</th><th>분류</th></tr></thead>
<tbody>
<tr><td><code>DROP TABLE</code></td><td><b>구조 + 데이터</b> 모두 삭제</td><td>❌</td><td>DDL</td></tr>
<tr><td><code>TRUNCATE TABLE</code></td><td><b>데이터만</b> 삭제 (구조 보존)</td><td>❌</td><td>DDL</td></tr>
<tr><td><code>DELETE FROM</code></td><td><b>행 단위</b> 조건 삭제</td><td>✅</td><td>DML</td></tr>
</tbody></table>
<div class="code-block"><pre>DROP TABLE test CASCADE;     -- 연관 조건까지 연쇄 삭제
TRUNCATE TABLE emp;          -- 데이터만 비우기
DELETE FROM emp WHERE dept = 'SALES';  -- 조건 삭제</pre></div>`,
        trap: '<b>CASCADE</b> → 연관 제약조건 <b>연쇄 삭제</b> / <b>RESTRICT</b> → 참조 중이면 <b>삭제 거부</b>'
      },
      {
        title: '3. DML 기본 구문',
        content: `<div class="code-block"><pre>-- 조회
SELECT 컬럼 FROM 테이블 WHERE 조건;

-- 삽입
INSERT INTO 테이블(컬럼들) VALUES(값들);

-- 수정 (기출!)
UPDATE 테이블 SET 컬럼 = 값 WHERE 조건;

-- 삭제
DELETE FROM 테이블 WHERE 조건;</pre></div>`,
        trap: '<b>UPDATE 구문:</b> <code>UPDATE [테이블] SET [컬럼=값] WHERE [조건]</code><br>기출: <code>UPDATE 사원 SET 부서 = \'배송팀\' WHERE 사번 = 1003;</code>'
      },
      {
        title: '4. LIKE 와일드카드 패턴 ⭐⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>와일드카드</th><th>의미</th><th>예시</th></tr></thead>
<tbody>
<tr><td><code>_</code> (언더스코어)</td><td>정확히 <b>1글자</b></td><td><code>박_</code> → 박○ (2글자)</td></tr>
<tr><td><code>%</code> (퍼센트)</td><td><b>0개 이상</b> 임의 문자</td><td><code>이%</code> → 이, 이름, 이순신…</td></tr>
</tbody></table>
<table class="concept-table mt-md">
<thead><tr><th>패턴</th><th>매칭 대상</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>박_</code></td><td>박○</td><td>성이 박, 이름 1글자</td></tr>
<tr><td><code>이%</code></td><td>이…</td><td>이씨 모든 사람</td></tr>
<tr><td><code>%산%</code></td><td>…산…</td><td>'산' 포함</td></tr>
<tr><td><code>_2_A__%</code></td><td>최소 6글자</td><td>2번째 '2', 4번째 'A'</td></tr>
<tr><td><code>____</code></td><td>○○○○</td><td>정확히 4글자</td></tr>
</tbody></table>`,
        trap: '<b>ESCAPE 구문:</b> 와일드카드 문자 자체를 검색할 때<br><code>WHERE name LIKE \'%!_%\' ESCAPE \'!\'</code> → <code>!_</code>는 리터럴 _ 검색'
      },
      {
        title: '5. NULL 비교',
        content: `<div class="code-block"><pre>-- ❌ 틀린 비교
WHERE 전화번호 = NULL

-- ✅ 올바른 비교
WHERE 전화번호 IS NULL
WHERE 전화번호 IS NOT NULL</pre></div>`,
        trap: 'NULL은 <code>=</code>로 비교 불가! 반드시 <code>IS NULL</code> / <code>IS NOT NULL</code> 사용!'
      },
      {
        title: '6. 서브쿼리 유형 & IN/EXISTS ⭐⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>유형</th><th>위치</th><th>설명</th></tr></thead>
<tbody>
<tr><td>스칼라 서브쿼리</td><td><code>SELECT</code> 절</td><td>단일 행, 단일 열 반환</td></tr>
<tr><td>인라인 뷰</td><td><code>FROM</code> 절</td><td>가상 동적 테이블</td></tr>
<tr><td>중첩 서브쿼리</td><td><code>WHERE/HAVING</code> 절</td><td>조건 필터링</td></tr>
<tr><td>상관 서브쿼리</td><td>외부 쿼리 참조</td><td>외부 행마다 반복 실행</td></tr>
</tbody></table>
<div class="code-block"><pre>-- 기출 문제 풀이:
-- t1: c1={A,D,F,G}  t2: c1={A,C,D,H}, c2={3,7,6,2}
SELECT SUM(c2) FROM t2
WHERE c1 NOT IN (SELECT c1 FROM t1);
-- 서브쿼리: {A, D, F, G}
-- t2에서 NOT IN: C(7), H(2)
-- SUM = 7 + 2 = 9  ← 정답!</pre></div>`,
        trap: '<b>NOT IN + NULL 함정:</b> 서브쿼리 결과에 NULL이 포함되면 NOT IN은 <b>무조건 0건</b> 반환! → 안전한 대안: <code>NOT EXISTS</code> 사용'
      },
      {
        title: '7. 집합 연산자 & JOIN',
        content: `<table class="concept-table">
<thead><tr><th>연산자</th><th>기능</th><th>중복 처리</th></tr></thead>
<tbody>
<tr><td><code>UNION</code></td><td>합집합</td><td><b>중복 제거</b></td></tr>
<tr><td><code>UNION ALL</code></td><td>합집합</td><td>중복 포함</td></tr>
<tr><td><code>INTERSECT</code></td><td>교집합</td><td>공통 행만</td></tr>
<tr><td><code>MINUS / EXCEPT</code></td><td>차집합</td><td>Oracle: MINUS, 표준: EXCEPT</td></tr>
</tbody></table>
<table class="concept-table mt-md">
<thead><tr><th>JOIN</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>INNER JOIN</code></td><td>양쪽 모두 일치하는 행만</td></tr>
<tr><td><code>LEFT OUTER JOIN</code></td><td><b>왼쪽</b> 테이블 전체 보존</td></tr>
<tr><td><code>RIGHT OUTER JOIN</code></td><td><b>오른쪽</b> 테이블 전체 보존</td></tr>
<tr><td><code>FULL OUTER JOIN</code></td><td><b>양쪽</b> 모두 보존</td></tr>
</tbody></table>`
      },
      {
        title: '8. 관계형 데이터베이스 키(Key) 5종 & 무결성 제약조건 ⭐⭐⭐',
        content: `<div class="concept-highlight">기출 단답형 1순위: 키의 유일성/최소성 조건과 4대 무결성 제약조건 완벽 정리</div>
<table class="concept-table">
<thead><tr><th>키(Key) 종류</th><th>유일성</th><th>최소성</th><th>정의 및 핵심 특징</th></tr></thead>
<tbody>
<tr><td><b>슈퍼키 (Super Key)</b></td><td>✅</td><td>❌</td><td>튜플을 고유하게 식별하지만 불필요한 속성이 포함된 키 (최소성 X)</td></tr>
<tr><td><b>후보키 (Candidate Key)</b></td><td>✅</td><td>✅</td><td>튜플을 유일하게 식별할 수 있는 <b>최소 속성 집합</b> (유일성 + 최소성 모두 만족)</td></tr>
<tr><td><b>기본키 (Primary Key)</b></td><td>✅</td><td>✅</td><td>후보키 중 대표로 선택된 주 키. <b>중복 불가(Unique) + NULL 불가(Not Null)</b></td></tr>
<tr><td><b>대체키 (Alternate Key)</b></td><td>✅</td><td>✅</td><td>후보키 중 기본키로 선택되지 않고 남은 보조 키</td></tr>
<tr><td><b>외래키 (Foreign Key)</b></td><td colspan="2">참조 대상에 따름</td><td>다른 테이블의 기본키를 참조하는 속성 (<b>참조 무결성</b>의 기준)</td></tr>
</tbody></table>
<table class="concept-table mt-md">
<thead><tr><th>무결성 원칙</th><th>적용 대상</th><th>핵심 규칙</th></tr></thead>
<tbody>
<tr><td><b>개체 무결성 (Entity)</b></td><td>기본키 (PK)</td><td>기본키는 <b>NULL이 될 수 없고, 중복될 수 없다</b></td></tr>
<tr><td><b>참조 무결성 (Referential)</b></td><td>외래키 (FK)</td><td>외래키는 <b>참조 테이블의 기본키 값과 같거나 NULL</b>이어야 한다</td></tr>
<tr><td><b>도메인 무결성 (Domain)</b></td><td>개별 속성</td><td>속성 값은 정의된 <b>도메인 범위 내의 값</b>이어야 한다</td></tr>
</tbody></table>`,
        trap: '<b>"유일성은 만족하나 최소성은 만족하지 않는다"</b> → 무조건 <b>슈퍼키</b>!<br><b>기본키 제약:</b> <code>PRIMARY KEY = UNIQUE + NOT NULL</code> (개체 무결성)'
      }
    ]
  },

  linux: {
    icon: '🐧',
    label: 'Linux',
    color: '#FCC624',
    sections: [
      {
        title: '1. 경로 체계 ⭐⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>구분</th><th>설명</th><th>예시</th></tr></thead>
<tbody>
<tr><td><b>절대 경로</b></td><td><code>/</code>(루트)부터 시작</td><td><code>/Users/user/workspace</code></td></tr>
<tr><td><b>상대 경로</b></td><td>현재 위치 기준</td><td><code>../src/test</code></td></tr>
<tr><td><code>.</code></td><td>현재 디렉터리</td><td><code>./config</code></td></tr>
<tr><td><code>..</code></td><td>상위(부모) 디렉터리</td><td><code>../docs</code></td></tr>
<tr><td><code>~</code></td><td>홈 디렉터리</td><td><code>~/src/app</code></td></tr>
</tbody></table>
<div class="concept-highlight"><b>기출 풀이법</b></div>
<div class="code-block"><pre>현재: /Users/user/workspace
상대: ../src/test

단계 1: .. → 상위 이동 → /Users/user
단계 2: src/test → 진입 → /Users/user/src/test ← 정답!

현재: /User/user/src/test
상대: ../../lib

단계 1: .. → /User/user/src
단계 2: .. → /User/user
단계 3: lib → /User/user/lib ← 정답!</pre></div>`,
        trap: '<b>풀이 공식:</b> <code>..</code>의 개수만큼 뒤에서 디렉터리를 지운 뒤, 나머지 경로를 붙인다!'
      },
      {
        title: '2. 필수 명령어 총정리 ⭐⭐⭐',
        content: `<h4 style="color: var(--accent-cyan); margin-bottom: 8px;">📂 파일/디렉터리 관리</h4>
<table class="concept-table">
<thead><tr><th>명령어</th><th>설명</th><th>기억법</th></tr></thead>
<tbody>
<tr><td><code>ls</code></td><td>파일 목록 표시</td><td><b>L</b>i<b>S</b>t</td></tr>
<tr><td><code>cd</code></td><td>디렉터리 이동</td><td><b>C</b>hange <b>D</b>irectory</td></tr>
<tr><td><code>pwd</code></td><td>현재 경로 출력</td><td><b>P</b>rint <b>W</b>orking <b>D</b>irectory</td></tr>
<tr><td><code>mkdir</code></td><td>디렉터리 생성</td><td><b>M</b>a<b>K</b>e <b>DIR</b></td></tr>
<tr><td><code>cp</code></td><td>복사</td><td><b>C</b>o<b>P</b>y</td></tr>
<tr><td><code>mv</code></td><td>이동/이름 변경</td><td><b>M</b>o<b>V</b>e</td></tr>
<tr><td><code>rm</code></td><td>파일 삭제</td><td><b>R</b>e<b>M</b>ove</td></tr>
<tr><td><code>cat</code></td><td>파일 내용 출력</td><td>Con<b>CAT</b>enate</td></tr>
<tr><td><code>touch</code></td><td>빈 파일 생성/시간 갱신</td><td></td></tr>
</tbody></table>
<h4 style="color: var(--accent-cyan); margin: 16px 0 8px;">🔧 시스템 관리</h4>
<table class="concept-table">
<thead><tr><th>명령어</th><th>설명</th><th>기억법</th></tr></thead>
<tbody>
<tr><td><code>sudo</code></td><td>root 권한으로 실행</td><td><b>S</b>uper <b>U</b>ser <b>DO</b></td></tr>
<tr><td><code>su</code></td><td>사용자 전환</td><td><b>S</b>witch <b>U</b>ser</td></tr>
<tr><td><code>man</code></td><td>도움말/매뉴얼</td><td><b>MAN</b>ual</td></tr>
<tr><td><code>chmod</code></td><td>접근 권한 변경</td><td><b>CH</b>ange <b>MOD</b>e</td></tr>
<tr><td><code>chown</code></td><td>소유자 변경</td><td><b>CH</b>ange <b>OWN</b>er</td></tr>
<tr><td><code>top</code></td><td>실시간 프로세스 모니터링</td><td><b>T</b>able <b>O</b>f <b>P</b>rocesses</td></tr>
<tr><td><code>ps</code></td><td>프로세스 스냅샷</td><td><b>P</b>rocess <b>S</b>tatus</td></tr>
<tr><td><code>kill</code></td><td>프로세스 종료</td><td></td></tr>
<tr><td><code>tar</code></td><td>파일 압축/해제</td><td><b>T</b>ape <b>AR</b>chive</td></tr>
<tr><td><code>df</code></td><td>디스크 여유 공간</td><td><b>D</b>isk <b>F</b>ree</td></tr>
<tr><td><code>du</code></td><td>디스크 사용량</td><td><b>D</b>isk <b>U</b>sage</td></tr>
</tbody></table>`
      },
      {
        title: '3. 파일 권한 체계 ⭐⭐',
        content: `<table class="concept-table">
<thead><tr><th>기호</th><th>의미</th><th>8진수</th></tr></thead>
<tbody>
<tr><td><code>r</code></td><td>읽기(Read)</td><td><b>4</b></td></tr>
<tr><td><code>w</code></td><td>쓰기(Write)</td><td><b>2</b></td></tr>
<tr><td><code>x</code></td><td>실행(Execute)</td><td><b>1</b></td></tr>
<tr><td><code>-</code></td><td>권한 없음</td><td>0</td></tr>
</tbody></table>
<table class="concept-table mt-md">
<thead><tr><th>숫자</th><th>소유자</th><th>그룹</th><th>기타</th><th>용도</th></tr></thead>
<tbody>
<tr><td><code>755</code></td><td>rwx</td><td>r-x</td><td>r-x</td><td>실행 파일, 디렉터리</td></tr>
<tr><td><code>644</code></td><td>rw-</td><td>r--</td><td>r--</td><td>일반 텍스트 파일</td></tr>
<tr><td><code>777</code></td><td>rwx</td><td>rwx</td><td>rwx</td><td>모든 권한 개방</td></tr>
</tbody></table>
<div class="code-block"><pre># 8진수 모드
chmod 755 file.txt

# 기호 모드
chmod u+x file.txt    # 소유자에 실행 권한 추가
chmod g-w file.txt    # 그룹에서 쓰기 권한 제거</pre></div>`,
        trap: '<b>u</b> = User(소유자) | <b>g</b> = Group | <b>o</b> = Others | <b>a</b> = All<br><b>+</b> = 추가 | <b>-</b> = 제거 | <b>=</b> = 설정'
      },
      {
        title: '4. 특수 경로/명령어',
        content: `<table class="concept-table">
<thead><tr><th>항목</th><th>설명</th></tr></thead>
<tbody>
<tr><td><code>cd ~</code> 또는 <code>cd</code></td><td>홈 디렉터리로 이동</td></tr>
<tr><td><code>cd -</code></td><td><b>이전 작업 디렉터리</b>로 복귀</td></tr>
<tr><td><code>pwd -P</code></td><td>심볼릭 링크 해석한 <b>실제 물리 경로</b> 출력</td></tr>
<tr><td>root 홈</td><td><code>/root</code> (일반: <code>/home/username</code>)</td></tr>
<tr><td>숨김 파일</td><td>파일명 앞에 <code>.</code>(점) 접두사</td></tr>
<tr><td>경로 구분자</td><td>리눅스: <code>/</code> / 윈도우: <code>\\</code></td></tr>
</tbody></table>`
      }
    ]
  },

  checklist: {
    icon: '🎯',
    label: '함정 체크',
    color: '#f43f5e',
    sections: [
      {
        title: '✅ Python 함정 TOP 5',
        content: `<table class="concept-table">
<thead><tr><th>#</th><th>함정</th><th>키워드</th></tr></thead>
<tbody>
<tr><td>1</td><td>튜플 불변성 → 요소 변경 시 TypeError</td><td><code>Immutable</code></td></tr>
<tr><td>2</td><td><code>dict.get(key, default)</code> — 첫 인자는 KEY!</td><td><code>get()</code></td></tr>
<tr><td>3</td><td>for문 반복 변수 누락 → SyntaxError</td><td><code>for _ in range()</code></td></tr>
<tr><td>4</td><td>return 인덴트 오류 → IndentationError</td><td>들여쓰기</td></tr>
<tr><td>5</td><td>이진 트리 순회 — print 위치로 전/중/후위 구분</td><td>순회 3종</td></tr>
</tbody></table>`
      },
      {
        title: '✅ Java 함정 TOP 5',
        content: `<table class="concept-table">
<thead><tr><th>#</th><th>함정</th><th>키워드</th></tr></thead>
<tbody>
<tr><td>1</td><td><code>new String() ==</code> → false (힙 주소 비교)</td><td><code>==</code> vs <code>.equals()</code></td></tr>
<tr><td>2</td><td>super()/this() 첫 줄 규칙 위반 → 컴파일 에러</td><td>첫 줄 규칙</td></tr>
<tr><td>3</td><td>암묵적 super() 자동 삽입 → 부모 기본 생성자 실행</td><td>암묵적 삽입</td></tr>
<tr><td>4</td><td>인터페이스 구현 시 public 생략 → 컴파일 에러</td><td><code>public</code> 필수</td></tr>
<tr><td>5</td><td><code>interface</code> vs <code>implements</code> vs <code>extends</code> 혼동</td><td>OOP 키워드</td></tr>
</tbody></table>`
      },
      {
        title: '✅ SQL 함정 TOP 5',
        content: `<table class="concept-table">
<thead><tr><th>#</th><th>함정</th><th>키워드</th></tr></thead>
<tbody>
<tr><td>1</td><td><code>DROP</code> vs <code>TRUNCATE</code> vs <code>DELETE</code> 구분</td><td>삭제 3총사</td></tr>
<tr><td>2</td><td><code>NULL = NULL</code> → 에러, <code>IS NULL</code> 써야 함</td><td>NULL 비교</td></tr>
<tr><td>3</td><td>UNION(중복 제거) vs UNION ALL(중복 포함)</td><td>집합 연산</td></tr>
<tr><td>4</td><td>NOT IN + NULL → 공집합(0건) 반환</td><td>NOT IN 함정</td></tr>
<tr><td>5</td><td>EXISTS — 행 존재 여부만 체크, SELECT 항목 무관</td><td>EXISTS</td></tr>
</tbody></table>`
      },
      {
        title: '✅ Linux 함정 TOP 3',
        content: `<table class="concept-table">
<thead><tr><th>#</th><th>함정</th><th>키워드</th></tr></thead>
<tbody>
<tr><td>1</td><td><code>..</code> 개수 세기 실수 → 경로 오답</td><td>상대 경로</td></tr>
<tr><td>2</td><td><code>chmod</code> 8진수 ↔ 기호 변환</td><td>r=4, w=2, x=1</td></tr>
<tr><td>3</td><td>명령어 약어 혼동 (pwd/chmod/chown/chgrp)</td><td>약어 기억법</td></tr>
</tbody></table>`
      }
    ]
  }
};
