// ============================================================
// js/data/python.js — 파이썬 파트 기출 원문 + 파생 변형 풀
// 공단 예시(3) + 2026-1회(3) + 2026-2회(3) = 9문항
// 각 기출 원문당 20개 파생 변형 = 총 180개 변형
// ============================================================

const PYTHON_QUESTIONS = [

  // ─── [PY-01] 공단 예시 03번: 이진 트리 중위 순회 ───
  {
    id: "PY-SAMPLE-03", category: "python", examRound: "공단예시", originNumber: 3,
    title: "이진 트리 중위 순회 (Inorder Traversal)",
    code: `class Node:\n    def __init__(self, key):\n        self.left=None\n        self.right=None\n        self.key=key\n\ndef testFunction(root):\n    if root:\n        testFunction(root.left)\n        print(root.key, end="/")\n        testFunction(root.right)\n\nroot=Node(1)\nroot.left=Node(5)\nroot.right=Node(3)\nroot.left.left = Node(2)\nroot.left.right = Node(7)\nroot.right.left = Node(6)\nroot.right.right = Node(4)\ntestFunction(root)`,
    codeLang: "python",
    questionSubItems: [{ subId: 1, prompt: "위 코드의 실행 결과를 쓰시오.", type: "short_text", answer: ["2/5/7/1/6/3/4/"], placeholder: "출력결과 입력" }],
    explanation: { trapPoint: "중위 순회(Inorder)는 Left → Root → Right 순서로 재귀 호출됨", onePointTip: "💡 Tip: 트리 순회 3종 — 전위(Root-L-R), 중위(L-Root-R), 후위(L-R-Root)를 구분하세요!", description: "testFunction은 중위 순회를 구현합니다.", traceTable: [{ step: "testFunction(1)", vars: { action: "→ left(5)" }}, { step: "testFunction(2)", vars: { action: "print 2/" }}, { step: "돌아와서 5", vars: { action: "print 5/ → right(7)" }}, { step: "testFunction(7)", vars: { action: "print 7/" }}, { step: "돌아와서 1", vars: { action: "print 1/ → right(3)" }}, { step: "testFunction(6)", vars: { action: "print 6/" }}, { step: "돌아와서 3", vars: { action: "print 3/ → right(4)" }}, { step: "testFunction(4)", vars: { action: "print 4/" }}] },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-S03-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-02] 공단 예시 04번: 딕셔너리 Value 역참조 ───
  {
    id: "PY-SAMPLE-04", category: "python", examRound: "공단예시", originNumber: 4,
    title: "딕셔너리 value로 key 역참조 (dict.items())",
    code: `def test(dict, x):\n    return [k for k, v in dict.( ① ) if v==x]`,
    codeLang: "python",
    questionSubItems: [{ subId: 1, prompt: "①에 들어갈 알맞은 메소드를 쓰시오.", type: "short_text", answer: ["items()", "items"], placeholder: "메소드명 입력" }],
    explanation: { trapPoint: "dict.items()는 (key, value) 튜플 쌍을 반환", onePointTip: "💡 Tip: keys()는 키만, values()는 값만, items()는 (키, 값) 쌍!", description: "딕셔너리의 items() 메서드는 (key, value) 쌍을 반환합니다.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-S04-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-03] 공단 예시 05번: 피보나치 수열 오류 수정 ───
  {
    id: "PY-SAMPLE-05", category: "python", examRound: "공단예시", originNumber: 5,
    title: "피보나치 수열 for문 변수 누락 오류 및 출력값",
    code: `1 | def fibonacci(n):\n2 |     seq=[]\n3 |     a, b=1,1\n4 |     for in range(n):\n5 |         seq.append(a)\n6 |         a, b=b, a+b\n7 |     return seq\n8 |\n9 | terms = 6\n10| print(fibonacci(terms)[-1])`,
    codeLang: "python",
    questionSubItems: [
      { subId: 1, prompt: "(1) 오류가 발생하는 Line의 번호를 쓰시오.", type: "short_text", answer: ["4"], placeholder: "줄번호 입력" },
      { subId: 2, prompt: "(2) 오류를 수정하여 실행했을 때의 결과를 쓰시오.", type: "short_text", answer: ["8"], placeholder: "출력결과 입력" }
    ],
    explanation: { trapPoint: "for in range(n): 반복 변수 누락 SyntaxError", onePointTip: "💡 Tip: for문은 'for 변수 in 범위:' 형태여야 합니다!", description: "4번 라인에서 반복 변수가 누락. 수정 시 피보나치 [1,1,2,3,5,8]의 [-1]은 8.", traceTable: [{ step: "초기값", vars: { a: 1, b: 1, seq: "[]" }}, { step: "i=0", vars: { a: 1, b: 2, seq: "[1]" }}, { step: "i=1", vars: { a: 2, b: 3, seq: "[1,1]" }}, { step: "i=2", vars: { a: 3, b: 5, seq: "[1,1,2]" }}, { step: "i=3", vars: { a: 5, b: 8, seq: "[1,1,2,3]" }}, { step: "i=4", vars: { a: 8, b: 13, seq: "[1,1,2,3,5]" }}, { step: "i=5", vars: { a: 13, b: 21, seq: "[1,1,2,3,5,8]" }}] },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-S05-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-04] 2026-1회 05번: 아스키 코드 + 인덴트 오류 ───
  {
    id: "PY-2026-01-05", category: "python", examRound: "2026-1", originNumber: 5,
    title: "아스키 코드 범위 생성 및 인덴트 오류 찾기",
    code: `1  def test(a, b):\n2      input = [ord(a), ord(b)]\n3      input.sort()\n4      m, n = input\n5      result = []\n6      for i in range(m, n+1):\n7          result.append(chr(i))\n8  return result\n9\n10 for k in test("c", "f"):\n11     print(k, end="")`,
    codeLang: "python",
    questionSubItems: [
      { subId: 1, prompt: "(1) 오류가 발생되는 줄번호를 적으시오.", type: "short_text", answer: ["8"], placeholder: "줄번호 입력" },
      { subId: 2, prompt: "(2) 수정 후 출력결과를 적으시오.", type: "short_text", answer: ["cdef"], placeholder: "출력결과 입력" }
    ],
    explanation: { trapPoint: "return result 인덴트 오류 — 함수 블록 바깥", onePointTip: "💡 Tip: 파이썬은 들여쓰기가 곧 블록! return은 함수 내부에!", description: "8번 라인 return이 함수 바깥. 수정 후 ord('c')=99~ord('f')=102 → cdef", traceTable: [{ step: "초기화", vars: { "ord('c')": 99, "ord('f')": 102 }}, { step: "sort 후", vars: { m: 99, n: 102 }}, { step: "i=99~102", vars: { result: "['c','d','e','f']" }}, { step: "출력", vars: { output: "cdef" }}] },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-0105-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-05] 2026-1회 06번: isinstance + 슬라이싱 ───
  {
    id: "PY-2026-01-06", category: "python", examRound: "2026-1", originNumber: 6,
    title: "isinstance 분기, 음수 인덱싱, 역순 슬라이싱",
    code: `def test(param):\n    if isinstance(param, list):\n        print(param[ㄱ])\n    else:\n        print("리스트가 아닙니다")\n\narr = [10, 20, 30, 40, 50]\ntest(arr)`,
    codeLang: "python",
    questionSubItems: [
      { subId: 1, prompt: "(1) 마지막 데이터가 출력되도록 하는 ㄱ 빈칸의 인덱스 값은?", type: "short_text", answer: ["-1"], placeholder: "인덱스 입력" },
      { subId: 2, prompt: "(2) 인덱스의 반대 방향으로 출력하기 위한 슬라이싱 표기는?", type: "short_text", answer: ["::-1", "[::-1]"], placeholder: "슬라이싱 표기 입력" }
    ],
    explanation: { trapPoint: "-1은 마지막 요소, [::-1]은 전체 역순 반전", onePointTip: "💡 Tip: 음수 인덱스 -1은 마지막, [::-1]은 리스트를 뒤집습니다!", description: "파이썬에서 -1은 마지막 요소(50), [::-1]은 step=-1로 전체 역순.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-0106-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-06] 2026-1회 07번: 튜플 불변성 ───
  {
    id: "PY-2026-01-07", category: "python", examRound: "2026-1", originNumber: 7,
    title: "튜플(Tuple) 불변성 오류 서술",
    code: `a = (1, 2, 3)\na[0] = 4`,
    codeLang: "python",
    questionSubItems: [{ subId: 1, prompt: "위 코드에서 오류가 발생하는 이유를 서술하시오.", type: "short_text", answer: ["튜플", "불변", "immutable", "수정 불가", "수정이 불가"], answerMode: "contains_any", placeholder: "오류 이유 서술" }],
    explanation: { trapPoint: "튜플은 Immutable 자료형으로 요소 변경 불가", onePointTip: "💡 Tip: 리스트[]는 Mutable, 튜플()은 Immutable!", description: "a는 튜플이므로 a[0]=4 시 TypeError 발생.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-0107-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-07] 2026-2회 10번: zip + dict.get 함정 ───
  {
    id: "PY-2026-02-10", category: "python", examRound: "2026-2", originNumber: 10,
    title: "zip 딕셔너리 생성과 dict.get() Key 탐색 함정",
    code: `A = ['a', 'b', 'c']\nB = [15, 30, 45]\nC = dict(zip(A, B))\nprint(C.get(15, 0))`,
    codeLang: "python",
    questionSubItems: [{ subId: 1, prompt: "위 코드의 실행 결과를 쓰시오.", type: "short_text", answer: ["0"], placeholder: "출력결과 입력" }],
    explanation: { trapPoint: "15는 value이지 key가 아님 → 기본값 0 반환", onePointTip: "💡 Tip: dict.get(key, default)의 첫 인자는 KEY!", description: "C={'a':15,'b':30,'c':45}. C.get(15,0)에서 15는 key가 아니므로 0 반환.", traceTable: [{ step: "zip(A,B)", vars: { C: "{'a':15,'b':30,'c':45}" }}, { step: "C.get(15,0)", vars: { "key 15?": "없음", 반환: 0 }}] },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-0210-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-08] 2026-2회 11번: 에라토스테네스의 체 ───
  {
    id: "PY-2026-02-11", category: "python", examRound: "2026-2", originNumber: 11,
    title: "에라토스테네스의 체 소수 판별 알고리즘",
    code: `A = [True] * 8\nfor i in range(2, int(7.2**0.5)+1):\n    if A[i]:\n        for j in range(i*i, 8, i):\n            A[j] = False\nArr = [num for num in range(2, 8) if A[num]]\nprint(Arr)`,
    codeLang: "python",
    questionSubItems: [{ subId: 1, prompt: "위 코드의 실행 결과를 쓰시오.", type: "short_text", answer: ["[2, 3, 5, 7]"], placeholder: "출력결과 입력" }],
    explanation: { trapPoint: "7.2**0.5≈2.68 → int()=2 → i=2만 실행", onePointTip: "💡 Tip: 에라토스테네스의 체는 √N까지만 순회!", description: "바깥 루프 i=2만 실행, j=4,6이 False. 소수: [2,3,5,7]", traceTable: [{ step: "초기", vars: { "7.2**0.5": "≈2.68", "int+1": 3 }}, { step: "i=2", vars: { "j=4,6": "False" }}, { step: "컴프리헨션", vars: { Arr: "[2,3,5,7]" }}] },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-0211-${String.fromCharCode(65+i)}`)
  },

  // ─── [PY-09] 2026-2회 12번: 2차원 리스트 + map + join ───
  {
    id: "PY-2026-02-12", category: "python", examRound: "2026-2", originNumber: 12,
    title: "2차원 리스트 행 순회 및 map(str)+join 결합",
    code: `arr = [[7,4,1], [8,5,2], [9,6,3]]\nfor r in arr:\n    result = "".join(map(str, r))\n    print(result)`,
    codeLang: "python",
    questionSubItems: [{ subId: 1, prompt: "위 코드의 실행 결과를 쓰시오.", type: "short_text", answer: ["741\n852\n963", "741 852 963"], answerMode: "multiline", multilineAnswer: ["741", "852", "963"], placeholder: "출력결과 입력" }],
    explanation: { trapPoint: "map(str,r)로 정수→문자열 변환 후 join", onePointTip: "💡 Tip: join()은 문자열만 결합 가능! 정수는 map(str,list) 필수!", description: "각 행을 map(str)으로 문자열 변환 후 ''.join()으로 결합.", traceTable: [{ step: "r=[7,4,1]", vars: { result: "'741'" }}, { step: "r=[8,5,2]", vars: { result: "'852'" }}, { step: "r=[9,6,3]", vars: { result: "'963'" }}] },
    variants: Array.from({length:20}, (_,i) => `PY-VAR-0212-${String.fromCharCode(65+i)}`)
  }
];

// ═══════════════════════════════════════════════════════════════
// 파생 변형 문제 풀 (Variants Pool) — 9문항 × 20변형 = 180문항
// ═══════════════════════════════════════════════════════════════

function V(id, parentId, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  const q = { id, parentId, category: "python", title, code, codeLang: codeLang || "python",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null }
  };
  if (answerMode) { q.questionSubItems[0].answerMode = answerMode; }
  if (multilineAnswer) { q.questionSubItems[0].multilineAnswer = multilineAnswer; }
  return q;
}

const PYTHON_VARIANTS = [

  // ═══ PY-SAMPLE-03 변형 (이진 트리 순회) ×20 ═══
  V("PY-VAR-S03-A","PY-SAMPLE-03","[변형] 전위 순회(Preorder)",`class Node:\n    def __init__(self,k): self.left=None; self.right=None; self.key=k\ndef f(r):\n    if r:\n        print(r.key,end="/")\n        f(r.left)\n        f(r.right)\nroot=Node(1); root.left=Node(5); root.right=Node(3)\nroot.left.left=Node(2); root.left.right=Node(7)\nroot.right.left=Node(6); root.right.right=Node(4)\nf(root)`,"python","실행 결과를 쓰시오.",["1/5/2/7/3/6/4/"],"전위(Preorder): Root→L→R","💡 print가 재귀 앞이면 전위!","print가 재귀 호출 앞 → 전위 순회"),
  V("PY-VAR-S03-B","PY-SAMPLE-03","[변형] 후위 순회(Postorder)",`class Node:\n    def __init__(self,k): self.left=None; self.right=None; self.key=k\ndef f(r):\n    if r:\n        f(r.left)\n        f(r.right)\n        print(r.key,end="/")\nroot=Node(1); root.left=Node(5); root.right=Node(3)\nroot.left.left=Node(2); root.left.right=Node(7)\nroot.right.left=Node(6); root.right.right=Node(4)\nf(root)`,"python","실행 결과를 쓰시오.",["2/7/5/6/4/3/1/"],"후위(Postorder): L→R→Root","💡 print가 재귀 뒤면 후위!","print가 양쪽 재귀 뒤 → 후위 순회"),
  V("PY-VAR-S03-C","PY-SAMPLE-03","[변형] 중위 순회 — 다른 트리값",`class N:\n    def __init__(self,k): self.l=None; self.r=None; self.k=k\ndef inorder(n):\n    if n:\n        inorder(n.l)\n        print(n.k,end=",")\n        inorder(n.r)\nrt=N(10); rt.l=N(20); rt.r=N(30)\nrt.l.l=N(40); rt.l.r=N(50)\ninorder(rt)`,"python","실행 결과를 쓰시오.",["40,20,50,10,30,"],"구분자가 /에서 ,로 변경 + 다른 값","💡 구분자(end 인자)가 바뀌어도 순회 순서는 동일!","중위 순회 구조는 동일. 값과 구분자만 변경됨."),
  V("PY-VAR-S03-D","PY-SAMPLE-03","[변형] 단일 자식 트리 중위 순회",`class Node:\n    def __init__(self,k): self.left=None; self.right=None; self.key=k\ndef f(r):\n    if r:\n        f(r.left)\n        print(r.key,end=" ")\n        f(r.right)\nrt=Node(1); rt.left=Node(2); rt.left.left=Node(3); rt.left.left.left=Node(4)\nf(rt)`,"python","실행 결과를 쓰시오.",["4 3 2 1 "],"왼쪽으로만 치우친 편향 트리 → 리프부터 출력","💡 편향 트리는 중위 순회 시 리프부터 역순 출력!","왼쪽 편향 트리의 중위 순회: 4→3→2→1"),
  V("PY-VAR-S03-E","PY-SAMPLE-03","[변형] 오른쪽 편향 트리 전위 순회",`class Node:\n    def __init__(self,k): self.left=None; self.right=None; self.key=k\ndef f(r):\n    if r:\n        print(r.key,end="-")\n        f(r.left)\n        f(r.right)\nrt=Node(1); rt.right=Node(2); rt.right.right=Node(3)\nf(rt)`,"python","실행 결과를 쓰시오.",["1-2-3-"],"오른쪽 편향 트리 전위 순회 → 루트부터 순서대로","💡 오른쪽 편향+전위는 루트부터 차례대로!","전위 순회로 1→2→3 순서 출력"),
  V("PY-VAR-S03-F","PY-SAMPLE-03","[변형] 완전 이진 트리 중위 순회",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef mid(n):\n    if n:\n        mid(n.l); print(n.k,end=""); mid(n.r)\nrt=N('A'); rt.l=N('B'); rt.r=N('C')\nrt.l.l=N('D'); rt.l.r=N('E'); rt.r.l=N('F'); rt.r.r=N('G')\nmid(rt)`,"python","실행 결과를 쓰시오.",["DBEAFCG"],"문자 노드의 중위 순회","💡 중위 순회 결과는 트리를 왼→오로 읽은 것!","D→B→E→A→F→C→G"),
  V("PY-VAR-S03-G","PY-SAMPLE-03","[변형] 3개 노드 후위 순회",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef f(n):\n    if n:\n        f(n.l); f(n.r); print(n.k,end="+")\nn=N(10); n.l=N(20); n.r=N(30)\nf(n)`,"python","실행 결과를 쓰시오.",["20+30+10+"],"3개 노드 후위: 양쪽 자식→루트","💡 후위는 항상 루트가 마지막!","L(20)→R(30)→Root(10)"),
  V("PY-VAR-S03-H","PY-SAMPLE-03","[변형] 중위 순회 결과를 리스트에 수집",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef f(n,res):\n    if n:\n        f(n.l,res); res.append(n.k); f(n.r,res)\nrt=N(5); rt.l=N(3); rt.r=N(8); rt.l.l=N(1); rt.l.r=N(4)\nresult=[]\nf(rt,result)\nprint(result)`,"python","실행 결과를 쓰시오.",["[1, 3, 4, 5, 8]"],"리스트에 수집하는 중위 순회","💡 이진 탐색 트리의 중위 순회는 정렬된 결과!","BST 중위 순회 → 오름차순: [1,3,4,5,8]"),
  V("PY-VAR-S03-I","PY-SAMPLE-03","[변형] 전위 순회 결과 문자열 생성",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef f(n):\n    if n is None: return ""\n    return str(n.k)+f(n.l)+f(n.r)\nrt=N(1); rt.l=N(2); rt.r=N(3); rt.l.l=N(4); rt.l.r=N(5)\nprint(f(rt))`,"python","실행 결과를 쓰시오.",["12453"],"return으로 문자열을 연결하는 전위 순회","💡 재귀 return 방식의 전위: Root+Left+Right 문자열 연결!","1+f(2)+f(3) = 1+(2+f(4)+f(5))+3 = 12453"),
  V("PY-VAR-S03-J","PY-SAMPLE-03","[변형] 레벨 순서 출력 (BFS)",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\nfrom collections import deque\ndef bfs(r):\n    q=deque([r]); res=[]\n    while q:\n        n=q.popleft(); res.append(n.k)\n        if n.l: q.append(n.l)\n        if n.r: q.append(n.r)\n    return res\nrt=N(1); rt.l=N(2); rt.r=N(3); rt.l.l=N(4); rt.l.r=N(5)\nprint(bfs(rt))`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 4, 5]"],"BFS 레벨 순서 순회 (큐 사용)","💡 BFS는 deque를 사용하여 레벨 순서(너비 우선)로 순회!","레벨 1→2→3→4→5 순서"),
  V("PY-VAR-S03-K","PY-SAMPLE-03","[변형] 트리 높이 계산",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef h(n):\n    if n is None: return 0\n    return 1+max(h(n.l),h(n.r))\nrt=N(1); rt.l=N(2); rt.r=N(3); rt.l.l=N(4)\nprint(h(rt))`,"python","실행 결과를 쓰시오.",["3"],"재귀로 트리 높이 계산","💡 트리 높이 = 1 + max(왼쪽 높이, 오른쪽 높이)!","높이: 1→2→4 = 3단계"),
  V("PY-VAR-S03-L","PY-SAMPLE-03","[변형] 노드 개수 세기",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef cnt(n):\n    if n is None: return 0\n    return 1+cnt(n.l)+cnt(n.r)\nrt=N(1); rt.l=N(2); rt.r=N(3); rt.l.l=N(4); rt.l.r=Node(5) if False else N(5); rt.r.r=N(6)\nprint(cnt(rt))`,"python","실행 결과를 쓰시오.",["6"],"재귀로 노드 개수 카운트","💡 노드 수 = 1 + 왼쪽 수 + 오른쪽 수!","총 6개 노드"),
  V("PY-VAR-S03-M","PY-SAMPLE-03","[변형] 중위 순회 — end 인자 없음",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef f(n):\n    if n:\n        f(n.l); print(n.k); f(n.r)\nrt=N('X'); rt.l=N('Y'); rt.r=N('Z')\nf(rt)`,"python","실행 결과를 쓰시오.",["Y\nX\nZ","Y X Z"],null,"multiline","end 미지정 시 각 값이 줄바꿈으로 출력","💡 print()의 기본 end는 '\\n'(줄바꿈)!","Y→X→Z 각각 줄바꿈 출력",null,"multiline",["Y","X","Z"]),
  V("PY-VAR-S03-N","PY-SAMPLE-03","[변형] 리프 노드만 출력",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef leaf(n):\n    if n:\n        if n.l is None and n.r is None:\n            print(n.k,end=" ")\n        leaf(n.l); leaf(n.r)\nrt=N(1); rt.l=N(2); rt.r=N(3); rt.l.l=N(4); rt.l.r=N(5)\nleaf(rt)`,"python","실행 결과를 쓰시오.",["4 5 3 "],"리프 노드(자식이 없는 노드)만 출력","💡 리프 노드: left와 right가 모두 None인 노드!","리프: 4, 5, 3"),
  V("PY-VAR-S03-O","PY-SAMPLE-03","[변형] 중위 순회 — 합계 계산",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef total(n):\n    if n is None: return 0\n    return total(n.l)+n.k+total(n.r)\nrt=N(10); rt.l=N(5); rt.r=N(15); rt.l.l=N(3)\nprint(total(rt))`,"python","실행 결과를 쓰시오.",["33"],"재귀로 전체 노드 값 합산","💡 트리 합계 = 왼쪽 합 + 현재값 + 오른쪽 합!","3+5+10+15=33"),
  V("PY-VAR-S03-P","PY-SAMPLE-03","[변형] 전위 순회 — 구분자 공백",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef pre(n):\n    if n:\n        print(n.k,end=" "); pre(n.l); pre(n.r)\nrt=N(50); rt.l=N(30); rt.r=N(70); rt.l.r=N(40); rt.r.l=N(60)\npre(rt)`,"python","실행 결과를 쓰시오.",["50 30 40 70 60 "],"전위 순회 공백 구분","💡 전위(Root-L-R): 50→30→40→70→60!","50→30→40→70→60 순서"),
  V("PY-VAR-S03-Q","PY-SAMPLE-03","[변형] 후위 순회 — 연산 트리",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef post(n):\n    if n:\n        post(n.l); post(n.r); print(n.k,end=" ")\nrt=N('+'); rt.l=N('3'); rt.r=N('*')\nrt.r.l=N('4'); rt.r.r=N('5')\npost(rt)`,"python","실행 결과를 쓰시오.",["3 4 5 * + "],"연산 트리의 후위 순회 → 후위 표기법","💡 후위 순회는 연산 트리를 후위(역폴란드) 표기법으로 변환!","3 4 5 * + = 3+(4*5)"),
  V("PY-VAR-S03-R","PY-SAMPLE-03","[변형] 중위 순회 — 딕셔너리로 구현",`tree={1:[2,3],2:[4,5],3:[6,None],4:[None,None],5:[None,None],6:[None,None]}\ndef inorder(node):\n    if node is None: return\n    inorder(tree[node][0])\n    print(node,end=",")\n    inorder(tree[node][1])\ninorder(1)`,"python","실행 결과를 쓰시오.",["4,2,5,1,6,3,"],"딕셔너리 기반 트리의 중위 순회","💡 트리는 클래스 외에 딕셔너리로도 구현 가능!","딕셔너리로 트리 구조를 표현. 중위 결과: 4,2,5,1,6,3,"),
  V("PY-VAR-S03-S","PY-SAMPLE-03","[변형] 중위 순회 — 음수 값 포함",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef f(n):\n    if n:\n        f(n.l); print(n.k,end="/"); f(n.r)\nrt=N(0); rt.l=N(-5); rt.r=N(5); rt.l.l=N(-10); rt.r.r=N(10)\nf(rt)`,"python","실행 결과를 쓰시오.",["-10/-5/0/5/10/"],"음수 포함 BST 중위 순회 → 정렬 결과","💡 BST 중위 순회는 항상 오름차순!","-10→-5→0→5→10"),
  V("PY-VAR-S03-T","PY-SAMPLE-03","[변형] 중위 순회 후 역순 출력",`class N:\n    def __init__(s,k): s.l=None; s.r=None; s.k=k\ndef f(n,res):\n    if n:\n        f(n.l,res); res.append(n.k); f(n.r,res)\nrt=N(1); rt.l=N(2); rt.r=N(3); rt.l.l=N(4); rt.l.r=N(5)\nr=[]\nf(rt,r)\nprint(r[::-1])`,"python","실행 결과를 쓰시오.",["[3, 1, 5, 2, 4]"],"중위 순회 결과를 [::-1]로 역순","💡 중위 결과[4,2,5,1,3]을 [::-1]하면 [3,1,5,2,4]!","중위=[4,2,5,1,3] → 역순=[3,1,5,2,4]"),

  // ═══ PY-SAMPLE-04 변형 (딕셔너리) ×20 ═══
  V("PY-VAR-S04-A","PY-SAMPLE-04","[변형] dict.keys()와 list()",`d = {"a":1,"b":2,"c":3}\nprint(list(d.keys()))`,"python","실행 결과를 쓰시오.",["['a', 'b', 'c']"],"keys()는 키만 반환","💡 keys()는 키만, values()는 값만!","d.keys()로 키 목록 반환"),
  V("PY-VAR-S04-B","PY-SAMPLE-04","[변형] dict.values() 합계",`d = {"x":10,"y":20,"z":30}\nprint(sum(d.values()))`,"python","실행 결과를 쓰시오.",["60"],"values()로 값 목록 추출 후 sum","💡 sum(d.values())로 딕셔너리 값의 합계!","10+20+30=60"),
  V("PY-VAR-S04-C","PY-SAMPLE-04","[변형] items()로 value가 3인 key 찾기",`d={"apple":3,"banana":5,"cherry":3}\nresult=[k for k,v in d.items() if v==3]\nprint(result)`,"python","실행 결과를 쓰시오.",["['apple', 'cherry']"],"items()로 특정 value의 key를 모두 추출","💡 동일 value를 가진 key가 여러 개일 수 있다!","value가 3인 key: apple, cherry"),
  V("PY-VAR-S04-D","PY-SAMPLE-04","[변형] dict 컴프리헨션",`d={x:x**2 for x in range(1,6)}\nprint(d)`,"python","실행 결과를 쓰시오.",["{\u0031: 1, 2: 4, 3: 9, 4: 16, 5: 25}","{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"],"딕셔너리 컴프리헨션으로 제곱 매핑","💡 {key: value for 변수 in 범위} 형태!","{1:1,2:4,3:9,4:16,5:25}"),
  V("PY-VAR-S04-E","PY-SAMPLE-04","[변형] dict.get() 기본값",`d={"a":1,"b":2}\nprint(d.get("c",99))`,"python","실행 결과를 쓰시오.",["99"],"존재하지 않는 key → 기본값 반환","💡 get(key, default)에서 key가 없으면 default!","key 'c'가 없으므로 99 반환"),
  V("PY-VAR-S04-F","PY-SAMPLE-04","[변형] dict.update() 사용",`d1={"a":1,"b":2}\nd1.update({"b":10,"c":3})\nprint(d1)`,"python","실행 결과를 쓰시오.",["{'a': 1, 'b': 10, 'c': 3}"],"update()는 기존 key 덮어쓰기 + 새 key 추가","💡 update()는 같은 key면 값을 덮어씁니다!","b가 2→10으로 변경, c가 추가"),
  V("PY-VAR-S04-G","PY-SAMPLE-04","[변형] dict.pop() 사용",`d={"x":10,"y":20,"z":30}\nval=d.pop("y")\nprint(val,len(d))`,"python","실행 결과를 쓰시오.",["20 2"],"pop(key)는 해당 항목을 제거하고 value 반환","💡 pop()은 제거+반환! del은 제거만!","y를 제거하고 20 반환, 남은 길이 2"),
  V("PY-VAR-S04-H","PY-SAMPLE-04","[변형] in 연산자로 key 존재 확인",`d={"a":1,"b":2,"c":3}\nprint("b" in d)\nprint(2 in d)`,"python","실행 결과를 쓰시오.",["True\nFalse","True False"],null,"multiline","in 연산자는 key를 기준으로 검사","💡 in은 key만 검사! value 검사는 in d.values()!","'b'는 key로 존재→True, 2는 key가 아님→False",null,"multiline",["True","False"]),
  V("PY-VAR-S04-I","PY-SAMPLE-04","[변형] dict.setdefault()",`d={"a":1}\nd.setdefault("a",100)\nd.setdefault("b",200)\nprint(d)`,"python","실행 결과를 쓰시오.",["{'a': 1, 'b': 200}"],"setdefault: key가 있으면 유지, 없으면 추가","💡 setdefault는 이미 있는 key의 값은 변경 안 함!","a는 이미 있으므로 1 유지, b는 없으므로 200 추가"),
  V("PY-VAR-S04-J","PY-SAMPLE-04","[변형] sorted()로 key 정렬",`d={"c":3,"a":1,"b":2}\nresult=sorted(d.items())\nprint(result)`,"python","실행 결과를 쓰시오.",["[('a', 1), ('b', 2), ('c', 3)]"],"sorted(d.items())는 key 기준 정렬된 튜플 리스트","💡 sorted()는 기본적으로 첫 번째 요소(key) 기준!","알파벳 순: a→b→c"),
  V("PY-VAR-S04-K","PY-SAMPLE-04","[변형] max()로 최대 value의 key",`d={"a":30,"b":50,"c":10}\nprint(max(d,key=d.get))`,"python","실행 결과를 쓰시오.",["b"],"max(d, key=d.get)으로 최대 value의 key 반환","💡 max()에 key=d.get을 넘기면 value 기준 비교!","value 최대: b(50)"),
  V("PY-VAR-S04-L","PY-SAMPLE-04","[변형] len()과 딕셔너리",`d={"a":[1,2],"b":[3,4,5]}\nprint(len(d),len(d["b"]))`,"python","실행 결과를 쓰시오.",["2 3"],"len(d)는 key 개수, len(d[key])는 value 길이","💡 딕셔너리의 len()은 key-value 쌍의 개수!","key 2개, d['b']는 [3,4,5]로 길이 3"),
  V("PY-VAR-S04-M","PY-SAMPLE-04","[변형] items()로 value 조건 필터링",`scores={"Kim":85,"Lee":92,"Park":78,"Choi":95}\nhigh=[name for name,score in scores.items() if score>=90]\nprint(high)`,"python","실행 결과를 쓰시오.",["['Lee', 'Choi']"],"items()로 조건 필터링 컴프리헨션","💡 items()와 컴프리헨션으로 조건부 key 추출!","90점 이상: Lee(92), Choi(95)"),
  V("PY-VAR-S04-N","PY-SAMPLE-04","[변형] 딕셔너리 value 합산 (같은 key)",`from collections import Counter\na=Counter("aabbc")\nprint(dict(a))`,"python","실행 결과를 쓰시오.",["{'a': 2, 'b': 2, 'c': 1}"],"Counter로 문자 빈도수 딕셔너리 생성","💡 Counter는 각 요소의 개수를 자동으로 카운트!","a:2, b:2, c:1"),
  V("PY-VAR-S04-O","PY-SAMPLE-04","[변형] zip으로 딕셔너리 생성",`keys=["name","age","city"]\nvals=["Kim",25,"Seoul"]\nd=dict(zip(keys,vals))\nprint(d["age"])`,"python","실행 결과를 쓰시오.",["25"],"zip으로 딕셔너리 생성 후 key로 접근","💡 dict(zip(keys, vals))로 두 리스트를 딕셔너리로!","d['age']=25"),
  V("PY-VAR-S04-P","PY-SAMPLE-04","[변형] 딕셔너리 value로 정렬",`d={"a":3,"b":1,"c":2}\nresult=sorted(d.items(),key=lambda x:x[1])\nprint(result)`,"python","실행 결과를 쓰시오.",["[('b', 1), ('c', 2), ('a', 3)]"],"lambda로 value 기준 정렬","💡 sorted의 key=lambda x:x[1]은 value 기준!","value 순: b(1)→c(2)→a(3)"),
  V("PY-VAR-S04-Q","PY-SAMPLE-04","[변형] 딕셔너리 반복문",`d={"x":10,"y":20}\nfor k in d:\n    print(k,d[k],end=" ")`,"python","실행 결과를 쓰시오.",["x 10 y 20 "],"for k in d는 key만 순회","💡 for k in d는 key만! value는 d[k]로 접근!","key를 순회하며 d[k]로 value 접근"),
  V("PY-VAR-S04-R","PY-SAMPLE-04","[변형] 딕셔너리 del 키워드",`d={"a":1,"b":2,"c":3}\ndel d["b"]\nprint(d)`,"python","실행 결과를 쓰시오.",["{'a': 1, 'c': 3}"],"del d[key]로 특정 항목 삭제","💡 del은 반환값 없이 삭제만! pop()은 반환+삭제!","b 삭제 후 {'a':1,'c':3}"),
  V("PY-VAR-S04-S","PY-SAMPLE-04","[변형] 딕셔너리 중첩",`d={"user":{"name":"Kim","age":25}}\nprint(d["user"]["name"])`,"python","실행 결과를 쓰시오.",["Kim"],"중첩 딕셔너리 접근","💡 d[key1][key2]로 중첩 딕셔너리 접근!","d['user']['name']='Kim'"),
  V("PY-VAR-S04-T","PY-SAMPLE-04","[변형] 딕셔너리 fromkeys()",`keys=["a","b","c"]\nd=dict.fromkeys(keys,0)\nprint(d)`,"python","실행 결과를 쓰시오.",["{'a': 0, 'b': 0, 'c': 0}"],"fromkeys()로 동일 value 딕셔너리 생성","💡 fromkeys(keys,default)는 모든 key에 같은 값!","모든 key에 0 할당"),

  // ═══ PY-SAMPLE-05 변형 (피보나치/오류) ×20 ═══
  V("PY-VAR-S05-A","PY-SAMPLE-05","[변형] 피보나치 terms=8, 인덱스[5]",`def fib(n):\n    s=[]; a,b=1,1\n    for _ in range(n):\n        s.append(a); a,b=b,a+b\n    return s\nprint(fib(8)[5])`,"python","실행 결과를 쓰시오.",["8"],"피보나치 8항: [1,1,2,3,5,8,13,21]. 인덱스5→8","💡 인덱스는 0부터! [5]는 6번째 원소!","인덱스 5 → 8"),
  V("PY-VAR-S05-B","PY-SAMPLE-05","[변형] 초기값 (0,1) 피보나치",`def fib(n):\n    s=[]; a,b=0,1\n    for _ in range(n): s.append(a); a,b=b,a+b\n    return s\nprint(fib(7)[-1])`,"python","실행 결과를 쓰시오.",["8"],"초기값 (0,1): [0,1,1,2,3,5,8]. [-1]=8","💡 초기값이 (0,1)이면 첫 항이 0!","마지막 항 8"),
  V("PY-VAR-S05-C","PY-SAMPLE-05","[변형] 피보나치 합계",`def fib(n):\n    a,b=1,1; s=0\n    for _ in range(n): s+=a; a,b=b,a+b\n    return s\nprint(fib(5))`,"python","실행 결과를 쓰시오.",["12"],"피보나치 5항 합: 1+1+2+3+5=12","💡 피보나치 합산도 자주 출제!","합계: 12"),
  V("PY-VAR-S05-D","PY-SAMPLE-05","[변형] 콜론 누락 오류",`def test(x)\n    return x*2\nprint(test(5))`,"python","오류가 발생하는 줄번호를 쓰시오.",["1"],"def 줄 끝에 콜론(:) 누락","💡 def, for, if, while 등 블록 시작은 반드시 :!","1번 줄 def test(x) 뒤 : 누락"),
  V("PY-VAR-S05-E","PY-SAMPLE-05","[변형] 변수 미정의 오류",`def calc():\n    result = x + 10\n    return result\nprint(calc())`,"python","오류가 발생하는 이유를 쓰시오.",["정의", "선언", "미정의", "NameError"],null,"contains_any","함수 내부에서 x가 정의되지 않음","💡 함수 내부에서 사용하는 변수는 인자나 지역변수로 정의 필요!","x가 정의되지 않아 NameError"),
  V("PY-VAR-S05-F","PY-SAMPLE-05","[변형] 인덱스 범위 초과",`arr = [1,2,3]\nprint(arr[3])`,"python","오류가 발생하는 이유를 쓰시오.",["인덱스", "범위", "IndexError", "초과"],null,"contains_any","arr[3]은 존재하지 않는 인덱스 (최대 인덱스: 2)","💡 길이 N인 리스트의 최대 인덱스는 N-1!","인덱스 범위 초과 IndexError"),
  V("PY-VAR-S05-G","PY-SAMPLE-05","[변형] 재귀 피보나치",`def fib(n):\n    if n<=1: return n\n    return fib(n-1)+fib(n-2)\nprint(fib(6))`,"python","실행 결과를 쓰시오.",["8"],"재귀 피보나치 fib(6)=8","💡 재귀 피보나치: fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)!","fib(6)=fib(5)+fib(4)=5+3=8"),
  V("PY-VAR-S05-H","PY-SAMPLE-05","[변형] 팩토리얼 계산",`def fact(n):\n    if n<=1: return 1\n    return n*fact(n-1)\nprint(fact(5))`,"python","실행 결과를 쓰시오.",["120"],"재귀 팩토리얼 5!=120","💡 n!=n×(n-1)×...×1. 5!=120!","5×4×3×2×1=120"),
  V("PY-VAR-S05-I","PY-SAMPLE-05","[변형] while 무한루프 탈출",`i=0; s=0\nwhile True:\n    i+=1; s+=i\n    if s>10: break\nprint(i,s)`,"python","실행 결과를 쓰시오.",["5 15"],"while True + break 패턴. 1+2+3+4+5=15>10","💡 break는 가장 가까운 반복문만 탈출!","i=5일 때 s=15>10 → break"),
  V("PY-VAR-S05-J","PY-SAMPLE-05","[변형] 리턴값 None 함정",`def add(a,b):\n    c = a+b\nprint(add(3,5))`,"python","실행 결과를 쓰시오.",["None"],"return이 없으면 함수는 None 반환","💡 return이 없으면 파이썬 함수는 암묵적으로 None을 반환!","c=8이지만 return이 없어 None"),
  V("PY-VAR-S05-K","PY-SAMPLE-05","[변형] 누적 합 리스트",`def cumsum(n):\n    s=[]; total=0\n    for i in range(1,n+1): total+=i; s.append(total)\n    return s\nprint(cumsum(5))`,"python","실행 결과를 쓰시오.",["[1, 3, 6, 10, 15]"],"누적 합: 1, 1+2=3, 3+3=6, 6+4=10, 10+5=15","💡 누적 합은 이전 합에 현재값을 더함!","[1,3,6,10,15]"),
  V("PY-VAR-S05-L","PY-SAMPLE-05","[변형] 제곱수 리스트",`def sq(n):\n    return [i**2 for i in range(1,n+1)]\nprint(sq(5)[-1])`,"python","실행 결과를 쓰시오.",["25"],"[1,4,9,16,25]의 마지막 원소","💡 **2는 거듭제곱 연산자!","5**2=25"),
  V("PY-VAR-S05-M","PY-SAMPLE-05","[변형] global 변수 함정",`x=10\ndef test():\n    x=20\n    return x\ntest()\nprint(x)`,"python","실행 결과를 쓰시오.",["10"],"함수 내부 x=20은 지역변수, 전역 x는 불변","💡 함수 안에서 변수에 할당하면 지역변수가 됨! global 선언 필요!","지역변수 x=20은 함수 종료 시 소멸. 전역 x=10 출력"),
  V("PY-VAR-S05-N","PY-SAMPLE-05","[변형] 기본 인자값 함정",`def add(a,b=5):\n    return a+b\nprint(add(3))\nprint(add(3,10))`,"python","실행 결과를 쓰시오.",["8\n15","8 15"],null,"multiline","기본 인자값 b=5. 인자 전달 시 덮어쓰기","💡 기본 인자값은 호출 시 생략하면 적용, 전달하면 무시!","add(3)=8, add(3,10)=13",null,"multiline",["8","15"]),
  V("PY-VAR-S05-O","PY-SAMPLE-05","[변형] 가변 인자 *args",`def total(*args):\n    return sum(args)\nprint(total(1,2,3,4,5))`,"python","실행 결과를 쓰시오.",["15"],"*args는 가변 개수 인자를 튜플로 수집","💡 *args는 인자를 몇 개든 받을 수 있는 튜플!","sum(1,2,3,4,5)=15"),
  V("PY-VAR-S05-P","PY-SAMPLE-05","[변형] lambda 함수",`f = lambda x,y: x**2+y**2\nprint(f(3,4))`,"python","실행 결과를 쓰시오.",["25"],"lambda로 익명 함수 정의. 3²+4²=25","💡 lambda 인자: 표현식 → 한 줄 함수!","9+16=25"),
  V("PY-VAR-S05-Q","PY-SAMPLE-05","[변형] 중첩 함수 호출",`def outer(x):\n    def inner(y):\n        return x+y\n    return inner\nf=outer(10)\nprint(f(5))`,"python","실행 결과를 쓰시오.",["15"],"클로저: outer(10)이 inner 반환. inner(5)=10+5","💡 클로저: 외부 함수의 변수를 기억하는 내부 함수!","10+5=15"),
  V("PY-VAR-S05-R","PY-SAMPLE-05","[변형] 삼항 연산자",`x=7\nresult = "짝수" if x%2==0 else "홀수"\nprint(result)`,"python","실행 결과를 쓰시오.",["홀수"],"삼항 연산자: 값 if 조건 else 값","💡 파이썬 삼항: [참값] if [조건] else [거짓값]!","7%2=1≠0 → '홀수'"),
  V("PY-VAR-S05-S","PY-SAMPLE-05","[변형] 문자열 곱셈 반복",`def repeat(s,n):\n    return s*n\nprint(repeat("ab",3))`,"python","실행 결과를 쓰시오.",["ababab"],"문자열*정수 = 문자열 반복","💡 'ab'*3 = 'ababab'! 문자열도 곱셈 가능!","'ab'×3='ababab'"),
  V("PY-VAR-S05-T","PY-SAMPLE-05","[변형] enumerate 활용",`for i,v in enumerate(['a','b','c'],1):\n    print(i,v,end=" ")`,"python","실행 결과를 쓰시오.",["1 a 2 b 3 c "],"enumerate(seq,start)로 인덱스+값 순회","💡 enumerate의 두 번째 인자로 시작 인덱스 지정!","start=1: (1,'a'),(2,'b'),(3,'c')"),

  // ═══ PY-2026-01-05 변형 (아스키/인덴트) ×20 ═══
  V("PY-VAR-0105-A","PY-2026-01-05","[변형] 아스키 역순 생성",`def f(a,b):\n    c=[ord(a),ord(b)]; c.sort(); m,n=c\n    r=[]\n    for i in range(n,m-1,-1): r.append(chr(i))\n    return r\nfor k in f("d","a"): print(k,end="")`,"python","실행 결과를 쓰시오.",["dcba"],"range(n,m-1,-1) 역순 순회","💡 range(큰수,작은수-1,-1)은 역순!","d→c→b→a"),
  V("PY-VAR-0105-B","PY-2026-01-05","[변형] 대문자 아스키 범위",`def f(a,b):\n    c=[ord(a),ord(b)]; c.sort(); m,n=c\n    return [chr(i) for i in range(m,n+1)]\nprint("".join(f("C","G")))`,"python","실행 결과를 쓰시오.",["CDEFG"],"대문자 C(67)~G(71)","💡 대문자 A=65, 소문자 a=97!","CDEFG"),
  V("PY-VAR-0105-C","PY-2026-01-05","[변형] 문자 사이 구분자",`def f(a,b):\n    c=sorted([ord(a),ord(b)]); m,n=c\n    return [chr(i) for i in range(m,n+1)]\nprint("-".join(f("a","e")))`,"python","실행 결과를 쓰시오.",["a-b-c-d-e"],"join에 '-' 구분자 사용","💡 '-'.join(list)는 요소 사이에 -를 넣어 결합!","a-b-c-d-e"),
  V("PY-VAR-0105-D","PY-2026-01-05","[변형] 짝수 아스키만 필터",`r=[chr(i) for i in range(ord('a'),ord('g')+1) if i%2==0]\nprint("".join(r))`,"python","실행 결과를 쓰시오.",["bdf"],"짝수 아스키 코드만 필터링. b(98),d(100),f(102)","💡 아스키 코드의 홀짝으로 필터링 가능!","b(98),d(100),f(102)"),
  V("PY-VAR-0105-E","PY-2026-01-05","[변형] 숫자 문자 아스키 범위",`r=[chr(i) for i in range(ord('0'),ord('9')+1)]\nprint(len(r))`,"python","실행 결과를 쓰시오.",["10"],"'0'(48)~'9'(57) → 10개","💡 숫자 문자 '0'~'9'의 아스키: 48~57!","0~9 = 10개"),
  V("PY-VAR-0105-F","PY-2026-01-05","[변형] chr()와 ord() 왕복 변환",`x = 'Z'\nprint(chr(ord(x)+1))`,"python","실행 결과를 쓰시오.",["["],"ord('Z')=90, 90+1=91, chr(91)='['","💡 Z 다음 아스키 문자는 대괄호 [입니다!","Z(90)+1=91='['"),
  V("PY-VAR-0105-G","PY-2026-01-05","[변형] 대소문자 변환 차이",`c='A'\nprint(chr(ord(c)+32))`,"python","실행 결과를 쓰시오.",["a"],"대문자→소문자: +32. A(65)+32=97='a'","💡 대소문자 아스키 차이는 항상 32!","A+32=a"),
  V("PY-VAR-0105-H","PY-2026-01-05","[변형] 문자열 각 문자 아스키 출력",`s="Hi"\nfor c in s: print(ord(c),end=" ")`,"python","실행 결과를 쓰시오.",["72 105 "],"H=72, i=105","💡 ord()로 문자의 아스키 코드를 확인!","H(72), i(105)"),
  V("PY-VAR-0105-I","PY-2026-01-05","[변형] 알파벳 개수 계산",`print(ord('z')-ord('a')+1)`,"python","실행 결과를 쓰시오.",["26"],"z(122)-a(97)+1=26","💡 영문 소문자는 26개!","122-97+1=26"),
  V("PY-VAR-0105-J","PY-2026-01-05","[변형] 시저 암호 (3칸 이동)",`s="abc"\nr=""\nfor c in s: r+=chr(ord(c)+3)\nprint(r)`,"python","실행 결과를 쓰시오.",["def"],"각 문자를 3칸 뒤로 이동","💡 시저 암호: 각 문자를 일정 수만큼 이동!","a→d, b→e, c→f"),
  V("PY-VAR-0105-K","PY-2026-01-05","[변형] 인덴트 오류 — if문",`x=10\nif x>5:\nprint("big")`,"python","오류가 발생하는 줄번호를 쓰시오.",["3"],"3번 줄 print가 if 블록 안에 들여쓰기 안 됨","💡 if문 다음 줄은 반드시 들여쓰기!","3번 줄 IndentationError"),
  V("PY-VAR-0105-L","PY-2026-01-05","[변형] 인덴트 오류 — for문 내부",`for i in range(3):\n    print(i)\n  print("done")`,"python","오류가 발생하는 줄번호를 쓰시오.",["3"],"3번 줄 들여쓰기 불일치(2칸 vs 4칸)","💡 파이썬은 들여쓰기 칸 수가 일관되어야 함!","3번 줄 IndentationError"),
  V("PY-VAR-0105-M","PY-2026-01-05","[변형] 문자열 reverse",`s="hello"\nprint(s[::-1])`,"python","실행 결과를 쓰시오.",["olleh"],"[::-1]로 문자열 역순","💡 문자열도 [::-1]로 뒤집기 가능!","hello→olleh"),
  V("PY-VAR-0105-N","PY-2026-01-05","[변형] chr() 연속 출력",`for i in range(65,70): print(chr(i),end="")`,"python","실행 결과를 쓰시오.",["ABCDE"],"65~69 → A~E","💡 대문자 A=65부터 시작!","ABCDE"),
  V("PY-VAR-0105-O","PY-2026-01-05","[변형] 아스키 코드 합계",`s="ABC"\nprint(sum(ord(c) for c in s))`,"python","실행 결과를 쓰시오.",["198"],"A(65)+B(66)+C(67)=198","💡 제너레이터 표현식으로 합계 계산!","65+66+67=198"),
  V("PY-VAR-0105-P","PY-2026-01-05","[변형] 소문자→대문자 수동 변환",`s="hello"\nr=""\nfor c in s: r+=chr(ord(c)-32)\nprint(r)`,"python","실행 결과를 쓰시오.",["HELLO"],"소→대: -32. h(104)-32=72(H)","💡 upper() 대신 ord()-32로 수동 변환!","hello→HELLO"),
  V("PY-VAR-0105-Q","PY-2026-01-05","[변형] 문자 범위 생성 함수",`def char_range(start,end):\n    return [chr(i) for i in range(ord(start),ord(end)+1)]\nprint(char_range('x','z'))`,"python","실행 결과를 쓰시오.",["['x', 'y', 'z']"],"x(120)~z(122) 범위 문자 리스트","💡 파이썬에는 문자 range가 없어서 ord/chr로 구현!","['x','y','z']"),
  V("PY-VAR-0105-R","PY-2026-01-05","[변형] sorted + ord 정렬",`s="dacb"\nresult=sorted(s,key=lambda c:ord(c))\nprint("".join(result))`,"python","실행 결과를 쓰시오.",["abcd"],"아스키 코드 기준 정렬","💡 문자열 sorted는 기본적으로 아스키 순!","d→a→c→b 정렬 → abcd"),
  V("PY-VAR-0105-S","PY-2026-01-05","[변형] 모음 필터링",`vowels="aeiou"\ns="hello world"\nr=[c for c in s if c in vowels]\nprint("".join(r))`,"python","실행 결과를 쓰시오.",["eoo"],"문자열에서 모음만 추출","💡 in 연산자로 문자 포함 여부 체크!","h(e)llo w(o)rld → e,o,o"),
  V("PY-VAR-0105-T","PY-2026-01-05","[변형] 아스키 아트 패턴",`for i in range(5):\n    print(chr(65+i)*((i+1)),end=" ")`,"python","실행 결과를 쓰시오.",["A BB CCC DDDD EEEEE "],"A×1, B×2, C×3, D×4, E×5","💡 chr(65+i)로 A~E, (i+1)으로 반복 횟수!","A BB CCC DDDD EEEEE"),

  // ═══ PY-2026-01-06 변형 (isinstance/슬라이싱) ×20 ═══
  V("PY-VAR-0106-A","PY-2026-01-06","[변형] 슬라이싱 [1:4]",`arr=[10,20,30,40,50]\nprint(arr[1:4])`,"python","실행 결과를 쓰시오.",["[20, 30, 40]"],"[1:4]는 인덱스 1,2,3 (4 미포함)","💡 슬라이싱의 stop은 미포함(exclusive)!","인덱스 1~3 → [20,30,40]"),
  V("PY-VAR-0106-B","PY-2026-01-06","[변형] 슬라이싱 [::2]",`arr=[1,2,3,4,5,6]\nprint(arr[::2])`,"python","실행 결과를 쓰시오.",["[1, 3, 5]"],"[::2]는 2칸 간격으로 추출","💡 step=2는 홀수 인덱스 건너뛰기!","인덱스 0,2,4 → [1,3,5]"),
  V("PY-VAR-0106-C","PY-2026-01-06","[변형] 슬라이싱 [-3:]",`arr=[10,20,30,40,50]\nprint(arr[-3:])`,"python","실행 결과를 쓰시오.",["[30, 40, 50]"],"[-3:]는 뒤에서 3개","💡 음수 슬라이싱 -N:은 뒤에서 N개!","뒤에서 3개: [30,40,50]"),
  V("PY-VAR-0106-D","PY-2026-01-06","[변형] isinstance + tuple 체크",`def check(x):\n    if isinstance(x,tuple): print("튜플")\n    elif isinstance(x,list): print("리스트")\n    else: print("기타")\ncheck((1,2,3))`,"python","실행 결과를 쓰시오.",["튜플"],"isinstance로 자료형 판별","💡 isinstance(x,tuple)은 튜플 여부 확인!","(1,2,3)은 튜플"),
  V("PY-VAR-0106-E","PY-2026-01-06","[변형] 음수 인덱스 -2",`arr=[10,20,30,40,50]\nprint(arr[-2])`,"python","실행 결과를 쓰시오.",["40"],"-2는 뒤에서 두 번째","💡 -1은 마지막, -2는 뒤에서 두 번째!","인덱스 -2 → 40"),
  V("PY-VAR-0106-F","PY-2026-01-06","[변형] 슬라이싱으로 복사",`a=[1,2,3]\nb=a[:]\nb[0]=99\nprint(a,b)`,"python","실행 결과를 쓰시오.",["[1, 2, 3] [99, 2, 3]"],"[:]는 얕은 복사 → 원본 불변","💡 a[:]는 새 리스트! a=b는 같은 참조!","b 변경이 a에 영향 없음"),
  V("PY-VAR-0106-G","PY-2026-01-06","[변형] 역순 슬라이싱 + step",`arr=[1,2,3,4,5,6,7,8]\nprint(arr[6:1:-2])`,"python","실행 결과를 쓰시오.",["[7, 5, 3]"],"인덱스 6→3→(2 미포함), step=-2","💡 역순 슬라이싱: start>stop이어야 동작!","인덱스 6(7),4(5),2(3)"),
  V("PY-VAR-0106-H","PY-2026-01-06","[변형] 문자열 슬라이싱",`s="programming"\nprint(s[3:7])`,"python","실행 결과를 쓰시오.",["gram"],"인덱스 3~6: g,r,a,m","💡 문자열도 리스트처럼 슬라이싱 가능!","p-r-o-[g-r-a-m]-m-i-n-g"),
  V("PY-VAR-0106-I","PY-2026-01-06","[변형] isinstance + str",`def test(x):\n    print(type(x).__name__)\ntest("hello")\ntest(42)\ntest([1,2])`,"python","실행 결과를 쓰시오.",["str\nint\nlist","str int list"],null,"multiline","type().__name__으로 자료형 이름 출력","💡 type(x).__name__은 자료형의 이름 문자열!","str, int, list",null,"multiline",["str","int","list"]),
  V("PY-VAR-0106-J","PY-2026-01-06","[변형] 리스트 + 연산",`a=[1,2,3]\nb=[4,5]\nprint(a+b)`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 4, 5]"],"리스트 + 연산은 연결","💡 리스트 +는 두 리스트를 연결(extend와 유사)!","[1,2,3]+[4,5]=[1,2,3,4,5]"),
  V("PY-VAR-0106-K","PY-2026-01-06","[변형] 리스트 * 반복",`a=[0]*5\nprint(a)`,"python","실행 결과를 쓰시오.",["[0, 0, 0, 0, 0]"],"리스트 * 정수는 반복","💡 [값]*N으로 N개의 동일 요소 리스트 생성!","[0]×5"),
  V("PY-VAR-0106-L","PY-2026-01-06","[변형] index() 메서드",`arr=[10,20,30,20,40]\nprint(arr.index(20))`,"python","실행 결과를 쓰시오.",["1"],"index()는 첫 번째 발견 위치 반환","💡 index()는 가장 먼저 나타나는 위치!","첫 번째 20의 인덱스: 1"),
  V("PY-VAR-0106-M","PY-2026-01-06","[변형] count() 메서드",`arr=[1,2,3,2,4,2]\nprint(arr.count(2))`,"python","실행 결과를 쓰시오.",["3"],"count()는 특정 값의 개수","💡 count(x)는 x의 등장 횟수!","2가 3번 등장"),
  V("PY-VAR-0106-N","PY-2026-01-06","[변형] sort() vs sorted()",`a=[3,1,4,1,5]\nb=sorted(a)\na.sort()\nprint(b)\nprint(a==b)`,"python","실행 결과를 쓰시오.",["[1, 1, 3, 4, 5]\nTrue","[1, 1, 3, 4, 5] True"],null,"multiline","sorted()는 새 리스트, sort()는 원본 변경","💡 sorted는 새 리스트 반환, sort는 원본 수정!","둘 다 같은 결과",null,"multiline",["[1, 1, 3, 4, 5]","True"]),
  V("PY-VAR-0106-O","PY-2026-01-06","[변형] insert() 메서드",`arr=[1,2,4,5]\narr.insert(2,3)\nprint(arr)`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 4, 5]"],"insert(인덱스, 값)으로 중간 삽입","💡 insert(i,v)는 인덱스 i에 v를 삽입!","인덱스 2에 3 삽입"),
  V("PY-VAR-0106-P","PY-2026-01-06","[변형] pop() 인덱스 지정",`arr=[10,20,30,40,50]\nval=arr.pop(2)\nprint(val,arr)`,"python","실행 결과를 쓰시오.",["30 [10, 20, 40, 50]"],"pop(2)는 인덱스 2 요소 제거+반환","💡 pop()은 마지막, pop(i)는 인덱스 i 제거!","인덱스 2(30) 제거"),
  V("PY-VAR-0106-Q","PY-2026-01-06","[변형] list() 변환",`s="hello"\nprint(list(s))`,"python","실행 결과를 쓰시오.",["['h', 'e', 'l', 'l', 'o']"],"문자열→리스트: 각 문자가 요소","💡 list(문자열)은 각 문자를 분리!","각 문자 분리"),
  V("PY-VAR-0106-R","PY-2026-01-06","[변형] 리스트 언패킹",`a,*b,c=[1,2,3,4,5]\nprint(a,b,c)`,"python","실행 결과를 쓰시오.",["1 [2, 3, 4] 5"],"*b는 나머지를 리스트로 수집","💡 *변수는 나머지 요소를 리스트로 수집!","a=1, b=[2,3,4], c=5"),
  V("PY-VAR-0106-S","PY-2026-01-06","[변형] extend() vs append()",`a=[1,2]\na.append([3,4])\nprint(a)\nb=[1,2]\nb.extend([3,4])\nprint(b)`,"python","실행 결과를 쓰시오.",["[1, 2, [3, 4]]\n[1, 2, 3, 4]","[1, 2, [3, 4]] [1, 2, 3, 4]"],null,"multiline","append는 그대로, extend는 요소별 추가","💡 append는 통째로, extend는 풀어서 추가!","append→중첩, extend→병합",null,"multiline",["[1, 2, [3, 4]]","[1, 2, 3, 4]"]),
  V("PY-VAR-0106-T","PY-2026-01-06","[변형] 리스트 멤버십 in",`arr=[10,20,30]\nprint(20 in arr)\nprint(50 in arr)`,"python","실행 결과를 쓰시오.",["True\nFalse","True False"],null,"multiline","in 연산자로 요소 포함 여부 확인","💡 in은 리스트에서 값 존재 여부를 True/False로!","20있음→True, 50없음→False",null,"multiline",["True","False"]),

  // ═══ PY-2026-01-07 변형 (튜플/자료형) ×20 ═══
  V("PY-VAR-0107-A","PY-2026-01-07","[변형] 튜플 vs 리스트 비교",`a=[1,2,3]; b=(1,2,3)\na[0]=10\nprint(a)\nprint(type(b).__name__)`,"python","실행 결과를 쓰시오.",["[10, 2, 3]\ntuple","[10, 2, 3] tuple"],null,"multiline","리스트는 수정 가능, 튜플은 'tuple'","💡 리스트[]는 Mutable, 튜플()은 Immutable!","a 수정 가능, b 타입은 tuple",null,"multiline",["[10, 2, 3]","tuple"]),
  V("PY-VAR-0107-B","PY-2026-01-07","[변형] 문자열 수정 불가",`s="hello"\ns[0]="H"`,"python","오류가 발생하는 이유를 쓰시오.",["문자열", "str", "immutable", "불변", "수정"],null,"contains_any","문자열도 불변 자료형","💡 문자열도 튜플처럼 요소 변경 불가!","str은 Immutable"),
  V("PY-VAR-0107-C","PY-2026-01-07","[변형] frozenset 불변",`s=frozenset([1,2,3])\ns.add(4)`,"python","오류가 발생하는 이유를 쓰시오.",["frozenset", "불변", "immutable", "추가"],null,"contains_any","frozenset은 변경 불가능한 집합","💡 frozenset은 불변 set! add/remove 불가!","frozenset은 Immutable"),
  V("PY-VAR-0107-D","PY-2026-01-07","[변형] 튜플 연결은 가능",`a=(1,2)\nb=(3,4)\nc=a+b\nprint(c)`,"python","실행 결과를 쓰시오.",["(1, 2, 3, 4)"],"튜플+튜플은 새 튜플 생성 (원본 불변)","💡 +로 새 튜플 생성은 가능! 기존 요소 변경만 불가!","(1,2)+(3,4)=(1,2,3,4)"),
  V("PY-VAR-0107-E","PY-2026-01-07","[변형] 튜플 언패킹",`a,b,c = (10,20,30)\nprint(a+b+c)`,"python","실행 결과를 쓰시오.",["60"],"튜플 언패킹으로 각 변수에 할당","💡 a,b,c = (10,20,30)으로 한번에 할당!","10+20+30=60"),
  V("PY-VAR-0107-F","PY-2026-01-07","[변형] 튜플 in 연산자",`t=(1,2,3,4,5)\nprint(3 in t)\nprint(6 in t)`,"python","실행 결과를 쓰시오.",["True\nFalse","True False"],null,"multiline","in은 튜플에서도 사용 가능","💡 in은 리스트/튜플/문자열 모두 사용 가능!","3있음→True, 6없음→False",null,"multiline",["True","False"]),
  V("PY-VAR-0107-G","PY-2026-01-07","[변형] 한 요소 튜플 쉼표",`a=(5)\nb=(5,)\nprint(type(a).__name__,type(b).__name__)`,"python","실행 결과를 쓰시오.",["int tuple"],"(5)는 int, (5,)가 튜플","💡 한 요소 튜플은 쉼표 필수: (값,)!","쉼표가 없으면 그냥 괄호!"),
  V("PY-VAR-0107-H","PY-2026-01-07","[변형] set은 변경 가능",`s={1,2,3}\ns.add(4)\ns.discard(2)\nprint(s)`,"python","실행 결과를 쓰시오.",["{1, 3, 4}"],"set은 Mutable (add/discard 가능)","💡 set은 변경 가능! frozenset만 불변!","add(4), discard(2) → {1,3,4}"),
  V("PY-VAR-0107-I","PY-2026-01-07","[변형] 집합 연산 교집합",`a={1,2,3,4}\nb={3,4,5,6}\nprint(a&b)`,"python","실행 결과를 쓰시오.",["{3, 4}"],"&는 교집합","💡 &교집합, |합집합, -차집합, ^대칭차집합!","{3,4}"),
  V("PY-VAR-0107-J","PY-2026-01-07","[변형] 집합 합집합",`a={1,2,3}\nb={3,4,5}\nprint(a|b)`,"python","실행 결과를 쓰시오.",["{1, 2, 3, 4, 5}"],"|는 합집합. 중복 제거","💡 |로 합집합, 중복은 자동 제거!","{1,2,3,4,5}"),
  V("PY-VAR-0107-K","PY-2026-01-07","[변형] 집합 차집합",`a={1,2,3,4,5}\nb={3,4}\nprint(a-b)`,"python","실행 결과를 쓰시오.",["{1, 2, 5}"],"-는 차집합: a에서 b의 원소를 제거","💡 a-b는 a에만 있는 원소!","{1,2,5}"),
  V("PY-VAR-0107-L","PY-2026-01-07","[변형] set으로 중복 제거",`arr=[1,2,2,3,3,3,4]\nprint(sorted(set(arr)))`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 4]"],"set()으로 중복 제거 후 sorted","💡 set은 중복을 자동 제거하지만 순서가 없어요!","중복 제거+정렬"),
  V("PY-VAR-0107-M","PY-2026-01-07","[변형] 튜플 인덱싱/슬라이싱",`t=(10,20,30,40,50)\nprint(t[1:3])`,"python","실행 결과를 쓰시오.",["(20, 30)"],"튜플도 인덱싱/슬라이싱 가능 (읽기 전용)","💡 튜플은 읽기(인덱싱/슬라이싱)는 가능, 쓰기만 불가!","인덱스 1~2 → (20,30)"),
  V("PY-VAR-0107-N","PY-2026-01-07","[변형] 튜플 count/index",`t=(1,2,3,2,4,2)\nprint(t.count(2),t.index(2))`,"python","실행 결과를 쓰시오.",["3 1"],"count(2)=3, index(2)=1 (첫 번째 위치)","💡 튜플은 count()와 index()만 사용 가능!","2가 3개, 첫 위치 인덱스 1"),
  V("PY-VAR-0107-O","PY-2026-01-07","[변형] list()↔tuple() 변환",`a=[1,2,3]\nb=tuple(a)\nc=list(b)\nprint(type(b).__name__,type(c).__name__)`,"python","실행 결과를 쓰시오.",["tuple list"],"tuple()과 list()로 상호 변환","💡 list()↔tuple()로 자유롭게 변환 가능!","b는 tuple, c는 list"),
  V("PY-VAR-0107-P","PY-2026-01-07","[변형] 딕셔너리 key는 불변만 가능",`d={}\nd[(1,2)]="OK"\nprint(d[(1,2)])`,"python","실행 결과를 쓰시오.",["OK"],"튜플은 불변이므로 딕셔너리 key로 사용 가능","💡 딕셔너리 key는 불변 자료형만! 리스트는 key 불가!","튜플은 해시 가능 → key로 OK"),
  V("PY-VAR-0107-Q","PY-2026-01-07","[변형] 리스트를 key로 사용 시 오류",`d={}\nd[[1,2]]="X"`,"python","오류가 발생하는 이유를 쓰시오.",["리스트", "해시", "unhashable", "list"],null,"contains_any","리스트는 변경 가능하므로 딕셔너리 key 불가","💡 리스트는 unhashable → 딕셔너리 key로 사용 불가!","TypeError: unhashable type: 'list'"),
  V("PY-VAR-0107-R","PY-2026-01-07","[변형] 얕은 복사 함정",`a=[[1,2],[3,4]]\nb=a[:]\nb[0][0]=99\nprint(a[0][0])`,"python","실행 결과를 쓰시오.",["99"],"얕은 복사는 내부 리스트를 공유","💡 [:]는 1차원만 복사! 2차원은 참조를 공유!","b[0]과 a[0]은 같은 객체 → 99"),
  V("PY-VAR-0107-S","PY-2026-01-07","[변형] deepcopy 완전 복사",`import copy\na=[[1,2],[3,4]]\nb=copy.deepcopy(a)\nb[0][0]=99\nprint(a[0][0])`,"python","실행 결과를 쓰시오.",["1"],"deepcopy는 내부 객체까지 완전 복사","💡 deepcopy는 모든 중첩 객체를 새로 생성!","완전 분리 → a는 1 유지"),
  V("PY-VAR-0107-T","PY-2026-01-07","[변형] tuple() + 제너레이터",`t=tuple(x**2 for x in range(5))\nprint(t)`,"python","실행 결과를 쓰시오.",["(0, 1, 4, 9, 16)"],"제너레이터 표현식으로 튜플 생성","💡 tuple(제너레이터)로 불변 시퀀스 생성!","0²~4²: (0,1,4,9,16)"),

  // ═══ PY-2026-02-10 변형 (zip/dict.get) ×20 ═══
  V("PY-VAR-0210-A","PY-2026-02-10","[변형] get에 존재하는 key",`A=['a','b','c']; B=[15,30,45]\nC=dict(zip(A,B))\nprint(C.get('b',0))`,"python","실행 결과를 쓰시오.",["30"],"key 'b' 존재 → value 30 반환","💡 key가 존재하면 기본값은 무시!","C['b']=30"),
  V("PY-VAR-0210-B","PY-2026-02-10","[변형] get 기본값 -1",`A=['x','y','z']; B=[100,200,300]\nC=dict(zip(A,B))\nprint(C.get('w',-1))`,"python","실행 결과를 쓰시오.",["-1"],"key 'w' 없음 → 기본값 -1","💡 없는 key 접근 시 get의 두 번째 인자가 반환!","-1"),
  V("PY-VAR-0210-C","PY-2026-02-10","[변형] zip 길이 불일치",`A=[1,2,3]; B=['a','b']\nC=dict(zip(A,B))\nprint(C)`,"python","실행 결과를 쓰시오.",["{1: 'a', 2: 'b'}"],"zip은 짧은 쪽에 맞춤 → 3은 버려짐","💡 zip은 짧은 리스트에 맞춰 잘림!","{1:'a',2:'b'}"),
  V("PY-VAR-0210-D","PY-2026-02-10","[변형] dict에서 value로 key 찾기",`C={'a':15,'b':30,'c':45}\nresult=[k for k,v in C.items() if v==30]\nprint(result)`,"python","실행 결과를 쓰시오.",["['b']"],"items()로 value→key 역탐색","💡 get()은 key→value, items()는 역탐색 가능!","value 30의 key: ['b']"),
  V("PY-VAR-0210-E","PY-2026-02-10","[변형] zip으로 두 리스트 합산",`A=[1,2,3]; B=[10,20,30]\nresult=[a+b for a,b in zip(A,B)]\nprint(result)`,"python","실행 결과를 쓰시오.",["[11, 22, 33]"],"zip으로 병렬 합산","💡 zip(A,B)로 대응하는 요소끼리 연산!","[1+10,2+20,3+30]"),
  V("PY-VAR-0210-F","PY-2026-02-10","[변형] dict 기본값 없이 get",`d={'a':1,'b':2}\nprint(d.get('c'))`,"python","실행 결과를 쓰시오.",["None"],"기본값 미지정 시 None 반환","💡 get(key)에서 기본값 생략 시 None 반환!","key 'c' 없고 기본값 미지정 → None"),
  V("PY-VAR-0210-G","PY-2026-02-10","[변형] dict 대괄호 접근 에러",`d={'a':1,'b':2}\nprint(d['c'])`,"python","오류가 발생하는 이유를 쓰시오.",["KeyError","없는","존재하지"],null,"contains_any","d[key]로 없는 key 접근 시 KeyError","💡 d[key]는 없으면 에러! d.get(key)는 None 반환!","KeyError: 'c'"),
  V("PY-VAR-0210-H","PY-2026-02-10","[변형] zip + enumerate",`names=['Kim','Lee','Park']\nfor i,(k,v) in enumerate(zip(names,[90,85,92]),1):\n    print(f"{i}.{k}")`,"python","실행 결과를 쓰시오.",["1.Kim\n2.Lee\n3.Park","1.Kim 2.Lee 3.Park"],null,"multiline","zip과 enumerate 결합","💡 enumerate(zip(...),start)로 번호+쌍 순회!","1.Kim, 2.Lee, 3.Park",null,"multiline",["1.Kim","2.Lee","3.Park"]),
  V("PY-VAR-0210-I","PY-2026-02-10","[변형] dict + sum values",`d={'a':10,'b':20,'c':30}\nprint(sum(d.values()))`,"python","실행 결과를 쓰시오.",["60"],"values()로 값 목록 추출 후 sum","💡 sum(d.values())로 값의 합계!","10+20+30=60"),
  V("PY-VAR-0210-J","PY-2026-02-10","[변형] dict 키와 값 교환",`d={'a':1,'b':2,'c':3}\nswapped={v:k for k,v in d.items()}\nprint(swapped)`,"python","실행 결과를 쓰시오.",["{1: 'a', 2: 'b', 3: 'c'}"],"컴프리헨션으로 key-value 교환","💡 {v:k for k,v in d.items()}로 키-값 교환!","값→키, 키→값"),
  V("PY-VAR-0210-K","PY-2026-02-10","[변형] zip(*) 언짚",`pairs=[('a',1),('b',2),('c',3)]\nkeys,vals=zip(*pairs)\nprint(list(keys))`,"python","실행 결과를 쓰시오.",["['a', 'b', 'c']"],"zip(*)로 언짚(unzip)","💡 zip(*iterable)은 zip의 역연산!","keys: ['a','b','c']"),
  V("PY-VAR-0210-L","PY-2026-02-10","[변형] dict 컴프리헨션 필터",`d={x:x**2 for x in range(6) if x%2==0}\nprint(d)`,"python","실행 결과를 쓰시오.",["{0: 0, 2: 4, 4: 16}"],"조건부 딕셔너리 컴프리헨션","💡 컴프리헨션에 if 조건 추가 가능!","짝수만: {0:0,2:4,4:16}"),
  V("PY-VAR-0210-M","PY-2026-02-10","[변형] zip으로 행렬 전치",`matrix=[[1,2,3],[4,5,6]]\ntransposed=list(zip(*matrix))\nprint(transposed)`,"python","실행 결과를 쓰시오.",["[(1, 4), (2, 5), (3, 6)]"],"zip(*)으로 행렬 전치(transpose)","💡 zip(*matrix)는 행↔열 교환!","행→열 변환"),
  V("PY-VAR-0210-N","PY-2026-02-10","[변형] get()으로 빈도수 카운트",`text="aabbc"\nd={}\nfor c in text:\n    d[c]=d.get(c,0)+1\nprint(d)`,"python","실행 결과를 쓰시오.",["{'a': 2, 'b': 2, 'c': 1}"],"get(c,0)+1로 빈도수 카운트","💡 get(key,0)+1 패턴은 카운팅의 정석!","a:2, b:2, c:1"),
  V("PY-VAR-0210-O","PY-2026-02-10","[변형] dict.keys()와 in",`d={'a':1,'b':2,'c':3}\nprint('b' in d.keys())\nprint(2 in d.keys())`,"python","실행 결과를 쓰시오.",["True\nFalse","True False"],null,"multiline","d.keys()에서 in은 key만 검색","💡 in d.keys()는 key만! in d.values()는 값만!","'b'는 key→True, 2는 key 아님→False",null,"multiline",["True","False"]),
  V("PY-VAR-0210-P","PY-2026-02-10","[변형] 중복 key zip 덮어쓰기",`A=['a','b','a']; B=[1,2,3]\nC=dict(zip(A,B))\nprint(C)`,"python","실행 결과를 쓰시오.",["{'a': 3, 'b': 2}"],"중복 key 'a': 나중 값(3)으로 덮어쓰기","💡 딕셔너리 key는 중복 불가! 나중 값이 이김!","a:1→a:3 덮어쓰기"),
  V("PY-VAR-0210-Q","PY-2026-02-10","[변형] zip + 조건부 딕셔너리",`k=['a','b','c','d']; v=[10,25,30,15]\nd={key:val for key,val in zip(k,v) if val>=20}\nprint(d)`,"python","실행 결과를 쓰시오.",["{'b': 25, 'c': 30}"],"20 이상인 값만 딕셔너리에 포함","💡 딕셔너리 컴프리헨션에서 if로 필터링!","b:25, c:30만 포함"),
  V("PY-VAR-0210-R","PY-2026-02-10","[변형] dict.items() 언패킹",`d={'x':10,'y':20}\nfor item in d.items():\n    print(item,end=" ")`,"python","실행 결과를 쓰시오.",["('x', 10) ('y', 20) "],"items()는 튜플 쌍을 반환","💡 언패킹 안 하면 튜플 그대로 출력!","('x',10) ('y',20)"),
  V("PY-VAR-0210-S","PY-2026-02-10","[변형] max/min으로 value 기준",`d={'a':30,'b':10,'c':50}\nprint(min(d,key=d.get))`,"python","실행 결과를 쓰시오.",["b"],"min(d,key=d.get)으로 최소 value의 key","💡 min/max(d,key=d.get)으로 value 기준 비교!","최소값 10의 key: b"),
  V("PY-VAR-0210-T","PY-2026-02-10","[변형] zip + 문자열",`s1="abc"; s2="123"\nresult=list(zip(s1,s2))\nprint(result)`,"python","실행 결과를 쓰시오.",["[('a', '1'), ('b', '2'), ('c', '3')]"],"문자열도 zip으로 병렬 순회 가능","💡 zip은 모든 이터러블에 사용 가능!","[('a','1'),('b','2'),('c','3')]"),

  // ═══ PY-2026-02-11 변형 (소수/알고리즘) ×20 ═══
  V("PY-VAR-0211-A","PY-2026-02-11","[변형] 에라토스테네스 범위 11",`A=[True]*11\nfor i in range(2,int(10**0.5)+1):\n    if A[i]:\n        for j in range(i*i,11,i): A[j]=False\nprint([n for n in range(2,11) if A[n]])`,"python","실행 결과를 쓰시오.",["[2, 3, 5, 7]"],"10**0.5≈3.16→3. i=2,3 실행","💡 10 이하 소수: 2,3,5,7!","[2,3,5,7]"),
  V("PY-VAR-0211-B","PY-2026-02-11","[변형] 에라토스테네스 범위 20",`A=[True]*21\nfor i in range(2,int(20**0.5)+1):\n    if A[i]:\n        for j in range(i*i,21,i): A[j]=False\nprint([n for n in range(2,21) if A[n]])`,"python","실행 결과를 쓰시오.",["[2, 3, 5, 7, 11, 13, 17, 19]"],"20 이하 소수 8개","💡 20 이하 소수: 2,3,5,7,11,13,17,19!","8개 소수"),
  V("PY-VAR-0211-C","PY-2026-02-11","[변형] 소수 개수 세기",`A=[True]*31\nfor i in range(2,int(30**0.5)+1):\n    if A[i]:\n        for j in range(i*i,31,i): A[j]=False\nprint(sum(1 for n in range(2,31) if A[n]))`,"python","실행 결과를 쓰시오.",["10"],"30 이하 소수 개수: 10개","💡 30 이하 소수는 10개!","sum으로 카운트=10"),
  V("PY-VAR-0211-D","PY-2026-02-11","[변형] 리스트 컴프리헨션 짝수 필터",`arr=[i for i in range(1,11) if i%2==0]\nprint(arr)`,"python","실행 결과를 쓰시오.",["[2, 4, 6, 8, 10]"],"짝수 필터링 컴프리헨션","💡 [값 for 변수 in 범위 if 조건] 형태!","1~10의 짝수"),
  V("PY-VAR-0211-E","PY-2026-02-11","[변형] 3의 배수 필터링",`arr=[i for i in range(1,16) if i%3==0]\nprint(arr)`,"python","실행 결과를 쓰시오.",["[3, 6, 9, 12, 15]"],"3의 배수 필터","💡 i%3==0은 3의 배수 조건!","[3,6,9,12,15]"),
  V("PY-VAR-0211-F","PY-2026-02-11","[변형] 중첩 컴프리헨션",`arr=[[j for j in range(1,4)] for i in range(3)]\nprint(arr)`,"python","실행 결과를 쓰시오.",["[[1, 2, 3], [1, 2, 3], [1, 2, 3]]"],"중첩 리스트 컴프리헨션으로 2차원 생성","💡 바깥 루프가 행, 안쪽 루프가 열!","3×3 리스트"),
  V("PY-VAR-0211-G","PY-2026-02-11","[변형] 제곱수 컴프리헨션",`squares=[x**2 for x in range(1,8)]\nprint(squares)`,"python","실행 결과를 쓰시오.",["[1, 4, 9, 16, 25, 36, 49]"],"1~7의 제곱수","💡 **2는 거듭제곱!","[1,4,9,16,25,36,49]"),
  V("PY-VAR-0211-H","PY-2026-02-11","[변형] FizzBuzz 컴프리헨션",`r=['FB' if i%15==0 else 'F' if i%3==0 else 'B' if i%5==0 else str(i) for i in range(1,6)]\nprint(r)`,"python","실행 결과를 쓰시오.",["['1', '2', 'F', '4', 'B']"],"FizzBuzz 로직을 컴프리헨션으로","💡 삼항 연산자 중첩 + 컴프리헨션!","1,2,F,4,B"),
  V("PY-VAR-0211-I","PY-2026-02-11","[변형] 약수 구하기",`n=12\ndivisors=[i for i in range(1,n+1) if n%i==0]\nprint(divisors)`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 4, 6, 12]"],"12의 약수","💡 n%i==0이면 i는 n의 약수!","[1,2,3,4,6,12]"),
  V("PY-VAR-0211-J","PY-2026-02-11","[변형] 완전수 판별",`n=6\nprint(sum(i for i in range(1,n) if n%i==0)==n)`,"python","실행 결과를 쓰시오.",["True"],"6의 진약수 합: 1+2+3=6 → 완전수","💡 완전수: 자신을 제외한 약수의 합 = 자기 자신!","6=1+2+3 → True"),
  V("PY-VAR-0211-K","PY-2026-02-11","[변형] 소인수분해",`n=12; factors=[]\nfor i in range(2,n+1):\n    while n%i==0: factors.append(i); n//=i\nprint(factors)`,"python","실행 결과를 쓰시오.",["[2, 2, 3]"],"12=2×2×3","💡 while로 같은 소인수를 반복 추출!","[2,2,3]"),
  V("PY-VAR-0211-L","PY-2026-02-11","[변형] GCD 최대공약수",`def gcd(a,b):\n    while b: a,b=b,a%b\n    return a\nprint(gcd(12,8))`,"python","실행 결과를 쓰시오.",["4"],"유클리드 호제법 GCD(12,8)=4","💡 유클리드: a,b = b,a%b 반복!","12→8→4→0 → GCD=4"),
  V("PY-VAR-0211-M","PY-2026-02-11","[변형] 이진수 변환",`n=10; bits=[]\nwhile n>0: bits.append(n%2); n//=2\nprint(bits[::-1])`,"python","실행 결과를 쓰시오.",["[1, 0, 1, 0]"],"10을 2진수로: 1010","💡 n%2로 비트 추출, n//=2로 이동!","10→1010"),
  V("PY-VAR-0211-N","PY-2026-02-11","[변형] 버블 정렬",`a=[3,1,4,1,5]\nfor i in range(len(a)):\n    for j in range(len(a)-1-i):\n        if a[j]>a[j+1]: a[j],a[j+1]=a[j+1],a[j]\nprint(a)`,"python","실행 결과를 쓰시오.",["[1, 1, 3, 4, 5]"],"버블 정렬 알고리즘","💡 인접한 두 요소를 비교하며 교환!","[1,1,3,4,5]"),
  V("PY-VAR-0211-O","PY-2026-02-11","[변형] 선택 정렬",`a=[64,25,12,22,11]\nfor i in range(len(a)):\n    m=i\n    for j in range(i+1,len(a)):\n        if a[j]<a[m]: m=j\n    a[i],a[m]=a[m],a[i]\nprint(a)`,"python","실행 결과를 쓰시오.",["[11, 12, 22, 25, 64]"],"선택 정렬: 최솟값을 찾아 앞으로","💡 매 반복마다 남은 요소 중 최솟값을 선택!","정렬 결과"),
  V("PY-VAR-0211-P","PY-2026-02-11","[변형] 이진 탐색",`def bs(arr,t):\n    l,r=0,len(arr)-1\n    while l<=r:\n        m=(l+r)//2\n        if arr[m]==t: return m\n        elif arr[m]<t: l=m+1\n        else: r=m-1\n    return -1\nprint(bs([1,3,5,7,9],7))`,"python","실행 결과를 쓰시오.",["3"],"이진 탐색으로 7의 인덱스 찾기","💡 이진 탐색: 정렬된 배열에서 O(log N) 탐색!","인덱스 3에 7 위치"),
  V("PY-VAR-0211-Q","PY-2026-02-11","[변형] map + filter 조합",`arr=list(map(int,"1 2 3 4 5".split()))\nresult=list(filter(lambda x:x>2,arr))\nprint(result)`,"python","실행 결과를 쓰시오.",["[3, 4, 5]"],"map으로 정수 변환 후 filter로 조건 추출","💡 map(변환) → filter(조건) 파이프라인!","2 초과: [3,4,5]"),
  V("PY-VAR-0211-R","PY-2026-02-11","[변형] reduce로 곱셈",`from functools import reduce\nresult=reduce(lambda a,b:a*b,[1,2,3,4,5])\nprint(result)`,"python","실행 결과를 쓰시오.",["120"],"reduce로 누적 곱: 1×2×3×4×5=120","💡 reduce(func,seq)는 누적 연산!","120"),
  V("PY-VAR-0211-S","PY-2026-02-11","[변형] 회문 판별",`s="racecar"\nprint(s==s[::-1])`,"python","실행 결과를 쓰시오.",["True"],"문자열 == 역순 → 회문(Palindrome)","💡 s[::-1]로 뒤집어서 원본과 비교!","racecar→racecar → True"),
  V("PY-VAR-0211-T","PY-2026-02-11","[변형] 행렬 곱셈 요소",`A=[[1,2],[3,4]]; B=[[5,6],[7,8]]\nresult=A[0][0]*B[0][0]+A[0][1]*B[1][0]\nprint(result)`,"python","실행 결과를 쓰시오.",["19"],"행렬 곱의 [0][0] 원소: 1×5+2×7=19","💡 행렬 곱: 행×열의 내적!","1×5+2×7=5+14=19"),

  // ═══ PY-2026-02-12 변형 (2차원 리스트) ×20 ═══
  V("PY-VAR-0212-A","PY-2026-02-12","[변형] 열 방향 출력",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nfor c in range(3):\n    r=""\n    for row in range(3): r+=str(arr[row][c])\n    print(r)`,"python","실행 결과를 쓰시오.",["147\n258\n369","147 258 369"],null,"multiline","열 방향(세로) 순회","💡 바깥=열, 안쪽=행이면 열 방향 출력!","147, 258, 369",null,"multiline",["147","258","369"]),
  V("PY-VAR-0212-B","PY-2026-02-12","[변형] 구분자 - 사용",`arr=[[1,2,3],[4,5,6]]\nfor r in arr:\n    print("-".join(map(str,r)))`,"python","실행 결과를 쓰시오.",["1-2-3\n4-5-6","1-2-3 4-5-6"],null,"multiline","구분자를 -로 변경","💡 join의 구분자를 변경하면 출력 형태가 달라짐!","1-2-3, 4-5-6",null,"multiline",["1-2-3","4-5-6"]),
  V("PY-VAR-0212-C","PY-2026-02-12","[변형] 전치 행렬",`arr=[[1,2],[3,4],[5,6]]\ntrans=list(zip(*arr))\nfor r in trans:\n    print(list(r))`,"python","실행 결과를 쓰시오.",["[1, 3, 5]\n[2, 4, 6]","[1, 3, 5] [2, 4, 6]"],null,"multiline","zip(*)으로 전치","💡 zip(*matrix)는 행↔열 교환(전치)!","3×2→2×3",null,"multiline",["[1, 3, 5]","[2, 4, 6]"]),
  V("PY-VAR-0212-D","PY-2026-02-12","[변형] 행 합계 출력",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nfor r in arr:\n    print(sum(r))`,"python","실행 결과를 쓰시오.",["6\n15\n24","6 15 24"],null,"multiline","각 행의 합계","💡 sum(r)으로 행 합계!","1+2+3=6, 4+5+6=15, 7+8+9=24",null,"multiline",["6","15","24"]),
  V("PY-VAR-0212-E","PY-2026-02-12","[변형] 평탄화(flatten)",`arr=[[1,2],[3,4],[5,6]]\nflat=[x for row in arr for x in row]\nprint(flat)`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 4, 5, 6]"],"2차원→1차원 평탄화","💡 이중 for 컴프리헨션으로 평탄화!","[1,2,3,4,5,6]"),
  V("PY-VAR-0212-F","PY-2026-02-12","[변형] 대각선 요소 합",`arr=[[1,2,3],[4,5,6],[7,8,9]]\ndiag=sum(arr[i][i] for i in range(3))\nprint(diag)`,"python","실행 결과를 쓰시오.",["15"],"주 대각선: arr[0][0]+arr[1][1]+arr[2][2]","💡 대각선: arr[i][i] (행=열)!","1+5+9=15"),
  V("PY-VAR-0212-G","PY-2026-02-12","[변형] 역 대각선 합",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nn=3; anti=sum(arr[i][n-1-i] for i in range(n))\nprint(anti)`,"python","실행 결과를 쓰시오.",["15"],"역 대각선: arr[0][2]+arr[1][1]+arr[2][0]","💡 역 대각선: arr[i][n-1-i]!","3+5+7=15"),
  V("PY-VAR-0212-H","PY-2026-02-12","[변형] 최대값과 위치",`arr=[[3,8,1],[5,2,9],[4,7,6]]\nmx=0; pos=(0,0)\nfor i in range(3):\n    for j in range(3):\n        if arr[i][j]>mx: mx=arr[i][j]; pos=(i,j)\nprint(mx,pos)`,"python","실행 결과를 쓰시오.",["9 (1, 2)"],"2차원 배열에서 최대값과 위치 찾기","💡 중첩 루프로 모든 요소를 순회하며 비교!","최대값 9, 위치 (1,2)"),
  V("PY-VAR-0212-I","PY-2026-02-12","[변형] 행렬 90도 회전",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nrotated=[list(reversed(col)) for col in zip(*arr)]\nfor r in rotated:\n    print("".join(map(str,r)))`,"python","실행 결과를 쓰시오.",["741\n852\n963","741 852 963"],null,"multiline","시계 방향 90도 회전","💡 전치 후 각 행 역순 = 90도 회전!","741, 852, 963",null,"multiline",["741","852","963"]),
  V("PY-VAR-0212-J","PY-2026-02-12","[변형] 행렬 가로 뒤집기",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nfor r in arr:\n    print(r[::-1])`,"python","실행 결과를 쓰시오.",["[3, 2, 1]\n[6, 5, 4]\n[9, 8, 7]","[3, 2, 1] [6, 5, 4] [9, 8, 7]"],null,"multiline","각 행을 역순으로","💡 r[::-1]로 각 행을 뒤집기!","[3,2,1], [6,5,4], [9,8,7]",null,"multiline",["[3, 2, 1]","[6, 5, 4]","[9, 8, 7]"]),
  V("PY-VAR-0212-K","PY-2026-02-12","[변형] 상삼각 행렬 출력",`for i in range(4):\n    row=[0]*i+list(range(i+1,5))\n    print(" ".join(map(str,row)))`,"python","실행 결과를 쓰시오.",["1 2 3 4\n0 2 3 4\n0 0 3 4\n0 0 0 4","1 2 3 4 0 2 3 4 0 0 3 4 0 0 0 4"],null,"multiline","상삼각 행렬 패턴","💡 대각선 아래는 0, 위는 값!","상삼각 패턴",null,"multiline",["1 2 3 4","0 2 3 4","0 0 3 4","0 0 0 4"]),
  V("PY-VAR-0212-L","PY-2026-02-12","[변형] 단위 행렬",`n=3\nfor i in range(n):\n    row=[1 if i==j else 0 for j in range(n)]\n    print(row)`,"python","실행 결과를 쓰시오.",["[1, 0, 0]\n[0, 1, 0]\n[0, 0, 1]","[1, 0, 0] [0, 1, 0] [0, 0, 1]"],null,"multiline","단위 행렬(Identity Matrix) 생성","💡 i==j일 때 1, 아니면 0!","3×3 단위행렬",null,"multiline",["[1, 0, 0]","[0, 1, 0]","[0, 0, 1]"]),
  V("PY-VAR-0212-M","PY-2026-02-12","[변형] 2차원 리스트 생성",`arr=[[i*3+j+1 for j in range(3)] for i in range(3)]\nprint(arr)`,"python","실행 결과를 쓰시오.",["[[1, 2, 3], [4, 5, 6], [7, 8, 9]]"],"중첩 컴프리헨션으로 1~9 행렬","💡 i*열수+j+1로 연속 번호 행렬 생성!","[[1,2,3],[4,5,6],[7,8,9]]"),
  V("PY-VAR-0212-N","PY-2026-02-12","[변형] 열 합계",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nfor c in range(3):\n    s=sum(arr[r][c] for r in range(3))\n    print(s,end=" ")`,"python","실행 결과를 쓰시오.",["12 15 18 "],"각 열의 합계","💡 바깥=열, 안쪽=행 순회로 열 합계!","1+4+7=12, 2+5+8=15, 3+6+9=18"),
  V("PY-VAR-0212-O","PY-2026-02-12","[변형] 별표 삼각형",`for i in range(1,6):\n    print("*"*i)`,"python","실행 결과를 쓰시오.",["*\n**\n***\n****\n*****","* ** *** **** *****"],null,"multiline","별표 삼각형 패턴","💡 문자열*정수로 반복 출력!","1~5개 별표",null,"multiline",["*","**","***","****","*****"]),
  V("PY-VAR-0212-P","PY-2026-02-12","[변형] 숫자 피라미드",`for i in range(1,5):\n    print(" "*(4-i)+str(i)*i)`,"python","실행 결과를 쓰시오.",["   1\n  22\n 333\n4444","   1  22 333 4444"],null,"multiline","숫자 피라미드 패턴","💡 공백(4-i) + 숫자(i번 반복)!","정렬된 피라미드",null,"multiline",["   1","  22"," 333","4444"]),
  V("PY-VAR-0212-Q","PY-2026-02-12","[변형] 행렬 원소 합",`arr=[[1,2],[3,4]]\nB=[[5,6],[7,8]]\nresult=[[arr[i][j]+B[i][j] for j in range(2)] for i in range(2)]\nprint(result)`,"python","실행 결과를 쓰시오.",["[[6, 8], [10, 12]]"],"행렬 덧셈: 같은 위치 원소끼리 합","💡 A[i][j]+B[i][j]로 행렬 덧셈!","[[6,8],[10,12]]"),
  V("PY-VAR-0212-R","PY-2026-02-12","[변형] 나선형 읽기",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nresult=arr[0]+[arr[1][2],arr[2][2]]+arr[2][::-1][:2]+[arr[1][0]]+[arr[1][1]]\nprint(result)`,"python","실행 결과를 쓰시오.",["[1, 2, 3, 6, 9, 8, 7, 4, 5]"],"나선형(spiral) 순서로 읽기","💡 시계 방향 나선: 상→우→하→좌→중앙!","나선 순서"),
  V("PY-VAR-0212-S","PY-2026-02-12","[변형] 행렬 세로 뒤집기",`arr=[[1,2,3],[4,5,6],[7,8,9]]\nfor r in arr[::-1]:\n    print("".join(map(str,r)))`,"python","실행 결과를 쓰시오.",["789\n456\n123","789 456 123"],null,"multiline","행 순서를 뒤집어 출력","💡 arr[::-1]은 행 순서 역전!","789, 456, 123",null,"multiline",["789","456","123"]),
  V("PY-VAR-0212-T","PY-2026-02-12","[변형] 특정 값 카운트",`arr=[[1,2,1],[3,1,2],[1,3,1]]\ncount=sum(row.count(1) for row in arr)\nprint(count)`,"python","실행 결과를 쓰시오.",["5"],"2차원 배열에서 특정 값(1) 개수 세기","💡 각 행에서 count()한 결과를 sum!","1의 개수: 2+1+2=5"),
];

export { PYTHON_QUESTIONS, PYTHON_VARIANTS };
