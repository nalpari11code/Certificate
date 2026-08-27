// ============================================================
// js/data/linux.js — 리눅스 파트 기출 원문 + 파생 변형 풀
// 공단 예시(2) + 2026-1회(2) + 2026-2회(2) = 6문항
// 각 기출 원문당 20개 파생 변형 = 총 120개 변형
// ============================================================

const LINUX_QUESTIONS = [

  // ─── [LX-01] 공단 예시 01번: 상대 경로 적용 절대 경로 계산 ───
  {
    id: "LX-SAMPLE-01", category: "linux", examRound: "공단예시", originNumber: 1,
    title: "상대 경로 적용 후 절대 경로 계산",
    code: null, codeLang: "bash",
    questionSubItems: [{ subId: 1, prompt: "현재 작업 디렉터리가 /Users/user/workspace일 때, 상대 경로 ../src/test를 적용하면 절대 경로는 무엇인지 쓰시오.", type: "short_text", answer: ["/Users/user/src/test"], placeholder: "절대 경로 입력 (예: /Users/user/src/test)" }],
    explanation: { trapPoint: "..은 상위 디렉터리로 이동. /Users/user/workspace에서 ..은 /Users/user", onePointTip: "💡 Tip: ..은 상위(부모) 디렉터리, .은 현재 디렉터리!", description: "/Users/user/workspace에서 ..으로 상위 /Users/user로 이동 후 src/test로 진입하여 /Users/user/src/test가 됩니다.", traceTable: [{ step: "시작", vars: { "현재 경로": "/Users/user/workspace" }}, { step: ".. 적용", vars: { "상위 이동": "/Users/user" }}, { step: "src/test 진입", vars: { "최종 경로": "/Users/user/src/test" }}] },
    variants: Array.from({length:20}, (_,i) => `LX-VAR-S01-${String.fromCharCode(65+i)}`)
  },

  // ─── [LX-02] 공단 예시 02번: Linux 기본 명령어 pwd, chmod ───
  {
    id: "LX-SAMPLE-02", category: "linux", examRound: "공단예시", originNumber: 2,
    title: "Linux 기본 명령어 (pwd, chmod)",
    code: null, codeLang: "bash",
    questionSubItems: [
      { subId: 1, prompt: "(1) 현재 작업 중인 디렉토리 경로를 표시하는 명령어를 쓰시오.\n<보기> top, vi, cat, ls, pwd, echo, ifconfig, chmod, rm, cp, cd, export", type: "short_text", answer: ["pwd"], placeholder: "명령어 입력" },
      { subId: 2, prompt: "(2) 대상 파일이나 디렉토리의 시스템 모드를 바꾸어 접근 권한을 설정하거나 변경하는 명령어를 쓰시오.", type: "short_text", answer: ["chmod"], placeholder: "명령어 입력" }
    ],
    explanation: { trapPoint: "pwd = Print Working Directory, chmod = Change Mode", onePointTip: "💡 Tip: pwd(현재 경로 출력), chmod(권한 변경)!", description: "(1) pwd는 현재 작업 디렉터리의 절대 경로 출력, (2) chmod는 파일/디렉터리의 접근 권한(Mode) 변경.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `LX-VAR-S02-${String.fromCharCode(65+i)}`)
  },

  // ─── [LX-03] 2026-1회 03번: sudo, man, pwd ───
  {
    id: "LX-2026-01-03", category: "linux", examRound: "2026-1", originNumber: 3,
    title: "Linux 명령어 매칭 (sudo, man, pwd)",
    code: null, codeLang: "bash",
    questionSubItems: [
      { subId: 1, prompt: "(1) root 권한을 사용하여 명령어 쓸 수 있다.\n<보기> cd, mkdir, rm, cp, mv, man, top, sudo, df, pwd", type: "short_text", answer: ["sudo"], placeholder: "명령어 입력" },
      { subId: 2, prompt: "(2) 도움말 및 사용법을 볼 수 있는 명령어", type: "short_text", answer: ["man"], placeholder: "명령어 입력" },
      { subId: 3, prompt: "(3) 현재 접근중인 디렉터리 경로를 확인하는 명령어", type: "short_text", answer: ["pwd"], placeholder: "명령어 입력" }
    ],
    explanation: { trapPoint: "sudo = SuperUser Do, man = Manual, pwd = Print Working Directory", onePointTip: "💡 Tip: sudo(관리자 권한 대행), man(매뉴얼/도움말), pwd(현재 작업 경로)!", description: "(1) sudo는 root 권한으로 명령 실행, (2) man은 도움말 매뉴얼 확인, (3) pwd는 현재 경로 출력.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `LX-VAR-0103-${String.fromCharCode(65+i)}`)
  },

  // ─── [LX-04] 2026-1회 04번: 상대 경로 표기 ../docs ───
  {
    id: "LX-2026-01-04", category: "linux", examRound: "2026-1", originNumber: 4,
    title: "작업 경로에서 목표 경로로의 상대 경로 표기",
    code: null, codeLang: "bash",
    questionSubItems: [{ subId: 1, prompt: "작업 경로: Users/project/workspace/dev\n목표 경로: Users/project/workspace/docs\n현재 작업 경로에서 목표 경로에 대한 상대 경로를 작성하시오.", type: "short_text", answer: ["../docs"], placeholder: "상대 경로 입력 (예: ../docs)" }],
    explanation: { trapPoint: "dev에서 한 단계 상위(workspace)로 올라가 docs로 진입 → ../docs", onePointTip: "💡 Tip: 같은 부모 디렉터리 내 형제 폴더로 이동 시 ../대상폴더 패턴!", description: "현재 위치 dev에서 ..으로 상위 workspace로 이동한 뒤 docs로 진입하므로 ../docs입니다.", traceTable: [{ step: "시작", vars: { "현재": "Users/project/workspace/dev" }}, { step: ".. 적용", vars: { "상위 이동": "Users/project/workspace" }}, { step: "docs 진입", vars: { "최종": "Users/project/workspace/docs" }}] },
    variants: Array.from({length:20}, (_,i) => `LX-VAR-0104-${String.fromCharCode(65+i)}`)
  },

  // ─── [LX-05] 2026-2회 01번: 절대 경로에서 상대 경로 이동 ───
  {
    id: "LX-2026-02-01", category: "linux", examRound: "2026-2", originNumber: 1,
    title: "절대 경로에서 상대 경로(../../lib) 이동 결과",
    code: null, codeLang: "bash",
    questionSubItems: [{ subId: 1, prompt: "리눅스에서 절대경로 /User/user/src/test에서 상대경로 ../../lib을 수행하면 어떤 경로가 되는지 쓰시오.", type: "short_text", answer: ["/User/user/lib"], placeholder: "절대 경로 입력" }],
    explanation: { trapPoint: "../..은 2단계 상위 이동. test→src(..1)→/User/user(..2)→lib 진입", onePointTip: "💡 Tip: .. 개수만큼 상위 디렉터리로 올라간 후 하위로 진입!", description: "/User/user/src/test에서 .. 2번으로 /User/user로 이동 후 lib로 진입하여 /User/user/lib가 됩니다.", traceTable: [{ step: "시작", vars: { "현재": "/User/user/src/test" }}, { step: ".. (1회)", vars: { "이동": "/User/user/src" }}, { step: ".. (2회)", vars: { "이동": "/User/user" }}, { step: "lib 진입", vars: { "최종": "/User/user/lib" }}] },
    variants: Array.from({length:20}, (_,i) => `LX-VAR-0201-${String.fromCharCode(65+i)}`)
  },

  // ─── [LX-06] 2026-2회 05번: ls, chmod, tar ───
  {
    id: "LX-2026-02-05", category: "linux", examRound: "2026-2", originNumber: 5,
    title: "Linux 명령어 매칭 (ls, chmod, tar)",
    code: null, codeLang: "bash",
    questionSubItems: [
      { subId: 1, prompt: "(1) 현재 디렉터리의 파일 목록을 표시하는 명령어를 쓰시오.", type: "short_text", answer: ["ls"], placeholder: "명령어 입력" },
      { subId: 2, prompt: "(2) 파일의 사용 권한을 변경시 사용하는 명령어를 쓰시오.", type: "short_text", answer: ["chmod"], placeholder: "명령어 입력" },
      { subId: 3, prompt: "(3) 파일을 압축 또는 압축된 파일 해제에서 사용하는 명령어를 쓰시오.", type: "short_text", answer: ["tar"], placeholder: "명령어 입력" }
    ],
    explanation: { trapPoint: "ls = List, chmod = Change Mode, tar = Tape Archive", onePointTip: "💡 Tip: ls(목록 표시), chmod(권한 변경), tar(아카이브/압축)!", description: "(1) ls는 파일 및 디렉터리 목록 출력, (2) chmod는 접근 권한 변경, (3) tar는 파일 묶기/압축/해제.", traceTable: null },
    variants: Array.from({length:20}, (_,i) => `LX-VAR-0205-${String.fromCharCode(65+i)}`)
  }
];

// ═══════════════════════════════════════════════════════════════
// 리눅스 파생 변형 풀 (Variants Pool) — 6문항 × 20변형 = 120문항
// ═══════════════════════════════════════════════════════════════

function V(id, parentId, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  const q = { id, parentId, category: "linux", title, code, codeLang: codeLang || "bash",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null }
  };
  if (answerMode) { q.questionSubItems[0].answerMode = answerMode; }
  if (multilineAnswer) { q.questionSubItems[0].multilineAnswer = multilineAnswer; }
  return q;
}

const LINUX_VARIANTS = [

  // ═══ LX-SAMPLE-01 변형 (상대 경로 → 절대 경로) ×20 ═══
  V("LX-VAR-S01-A","LX-SAMPLE-01","[변형] 2단계 상위 이동 ../../docs/api",null,"bash","현재 경로: /home/user/project/src/main 에서 상대 경로 ../../docs/api 를 적용한 절대 경로는?",["/home/user/project/docs/api"],"main→src(..1)→project(..2)→docs/api","💡 ..은 상위 디렉터리로 1단계 이동!","/home/user/project/docs/api"),
  V("LX-VAR-S01-B","LX-SAMPLE-01","[변형] 3단계 상위 이동 ../../../downloads",null,"bash","현재 경로: /home/user/documents/work/reports 에서 상대 경로 ../../../downloads 를 적용한 절대 경로는?",["/home/user/downloads"],"reports→work(..1)→documents(..2)→/home/user(..3)→downloads","💡 ..의 개수만큼 거꾸로 상위 이동!","/home/user/downloads"),
  V("LX-VAR-S01-C","LX-SAMPLE-01","[변형] 현재 디렉터리 기준 ./config/app.json",null,"bash","현재 경로: /var/www/html 에서 상대 경로 ./config/app.json 을 적용한 절대 경로는?",["/var/www/html/config/app.json"],".은 현재 디렉터리를 의미하므로 하위로 직접 진입","💡 .은 현재 디렉터리!","/var/www/html/config/app.json"),
  V("LX-VAR-S01-D","LX-SAMPLE-01","[변형] 최상위 루트(/)에서의 상위 이동",null,"bash","현재 경로: /var 에서 상대 경로 ../etc 를 적용한 절대 경로는?",["/etc"],"/var에서 ..은 최상위 루트(/)로 이동 후 etc 진입","💡 루트(/)의 상위는 여전히 루트(/)!","/etc"),
  V("LX-VAR-S01-E","LX-SAMPLE-01","[변형] 상위 이동 후 동일 경로 복귀",null,"bash","현재 경로: /usr/local/bin 에서 상대 경로 ../bin 를 적용한 절대 경로는?",["/usr/local/bin"],"bin에서 ..으로 local 이동 후 다시 bin 진입","💡 상위로 갔다가 다시 같은 폴더 진입!","/usr/local/bin"),
  V("LX-VAR-S01-F","LX-SAMPLE-01","[변형] 홈 디렉터리 틸드(~) 확장",null,"bash","사용자 계정이 'ubuntu'일 때, 경로 ~/src/app 의 실제 절대 경로는?",["/home/ubuntu/src/app"],"~는 현재 사용자의 홈 디렉터리(/home/사용자명)로 확장됨","💡 ~는 /home/[username]으로 확장!","/home/ubuntu/src/app"),
  V("LX-VAR-S01-G","LX-SAMPLE-01","[변형] root 사용자의 홈 디렉터리",null,"bash","root(슈퍼유저) 계정의 홈 디렉터리 절대 경로는?",["/root"],"root 사용자의 홈은 /home/root가 아닌 /root","💡 root 계정의 홈은 /root!","/root"),
  V("LX-VAR-S01-H","LX-SAMPLE-01","[변형] 4단계 상위 이동",null,"bash","현재 경로: /a/b/c/d/e 에서 상대 경로 ../../../../x 를 적용한 절대 경로는?",["/a/x"],"e→d→c→b→/a로 4단계 이동 후 x 진입","💡 .. 4개로 4단계 상위 이동!","/a/x"),
  V("LX-VAR-S01-I","LX-SAMPLE-01","[변형] 점과 점점의 혼합 ./../lib",null,"bash","현재 경로: /opt/app/bin 에서 상대 경로 ./../lib 를 적용한 절대 경로는?",["/opt/app/lib"],"./(현재) → ..(상위 opt/app) → lib 진입","💡 ./..은 결국 1단계 상위 이동과 동일!","/opt/app/lib"),
  V("LX-VAR-S01-J","LX-SAMPLE-01","[변형] 웹 서버 루트 상대 경로",null,"bash","현재 경로: /var/www/html/images 에서 상대 경로 ../css/style.css 를 적용한 절대 경로는?",["/var/www/html/css/style.css"],"images에서 ..(html) 이동 후 css/style.css 진입","💡 형제 디렉터리 내 파일 참조!","/var/www/html/css/style.css"),
  V("LX-VAR-S01-K","LX-SAMPLE-01","[변형] 로그 디렉터리 이동",null,"bash","현재 경로: /var/log/nginx 에서 상대 경로 ../apache2/access.log 를 적용한 절대 경로는?",["/var/log/apache2/access.log"],"nginx에서 ..(log)로 올라간 뒤 apache2로 진입","💡 로그 경로 간 이동!","/var/log/apache2/access.log"),
  V("LX-VAR-S01-L","LX-SAMPLE-01","[변형] 이중 슬래시(//) 정규화",null,"bash","경로 /usr//local/bin 은 리눅스에서 어느 절대 경로와 동일하게 처리되는가?",["/usr/local/bin"],"연속된 슬래시(//)는 단일 슬래시(/)로 자동 정규화됨","💡 연속 슬래시는 1개의 /로 정규화!","/usr/local/bin"),
  V("LX-VAR-S01-M","LX-SAMPLE-01","[변형] 끝 슬래시 생략",null,"bash","디렉터리 경로 /etc/nginx/ 와 /etc/nginx 는 동일한 디렉터리를 가리키는가? (O/X)",["O"],"끝의 슬래시는 디렉터리 표기 편의상 붙는 것으로 동일 객체 가리킴","💡 마지막 슬래시 유무는 동일 디렉터리 참조!","'O'"),
  V("LX-VAR-S01-N","LX-SAMPLE-01","[변형] 심볼릭 링크와 실제 물리 경로",null,"bash","링크 경로를 무시하고 실제 물리 경로(Physical Path)를 출력하는 pwd의 옵션은?",["-P", "pwd -P"],"pwd -P는 심볼릭 링크를 해석한 실제 물리 경로 출력","💡 pwd -P (Physical) vs pwd -L (Logical)!","-P"),
  V("LX-VAR-S01-O","LX-SAMPLE-01","[변형] cd - 이전 작업 디렉터리 이동",null,"bash","바로 직전에 작업하던 이전 디렉터리로 되돌아가는 cd 명령어의 인자는?",["-", "cd -"],"cd - 는 이전 경로($OLDPWD)로 즉시 이동","💡 cd - 로 이전 작업 폴더로 백!","-"),
  V("LX-VAR-S01-P","LX-SAMPLE-01","[변형] 인자 없는 cd 명령어",null,"bash","인자 없이 단독으로 'cd'만 입력했을 때 이동하는 디렉터리는?",["홈", "홈 디렉터리", "홈디렉터리", "~", "$HOME"],null,"contains_any","인자 없는 cd는 사용자의 홈 디렉터리(~)로 이동","💡 cd 단독 실행은 홈 디렉터리로 이동!","홈 디렉터리"),
  V("LX-VAR-S01-Q","LX-SAMPLE-01","[변형] 윈도우 경로와 리눅스 경로 구분자",null,"bash","리눅스에서 디렉터리 계층을 구분하는 슬래시 기호는 / 인가 \\ 인가?",["/"],"리눅스는 정슬래시(/), 윈도우는 역슬래시(\\)","💡 리눅스 경로 구분자는 정슬래시(/)!","/"),
  V("LX-VAR-S01-R","LX-SAMPLE-01","[변형] 숨김 파일 디렉터리 접두사",null,"bash","리눅스에서 파일명 맨 앞에 붙여 숨김(Hidden) 파일로 만드는 특수문자는?",[".", "점", "dot"],"점(.)으로 시작하는 파일은 숨김 처리됨","💡 .파일명은 숨김 파일!","."),
  V("LX-VAR-S01-S","LX-SAMPLE-01","[변형] cd .. 1단계 이동",null,"bash","현재 경로 /a/b/c 에서 'cd ..' 명령을 실행했을 때의 현재 경로는?",["/a/b"],"c에서 한 단계 상위인 /a/b로 이동","💡 cd ..은 부모 디렉터리로 이동!","/a/b"),
  V("LX-VAR-S01-T","LX-SAMPLE-01","[변형] 다중 상대 경로 연속 적용",null,"bash","현재 경로 /a/b/c 에서 'cd ../../d/../e' 를 실행했을 때의 최종 경로는?",["/a/e"],"c→b→a로 2단계 상위 이동 후 d 진입 후 다시 상위 a로 와서 e 진입 → /a/e","💡 상대 경로 체이닝 단계별 해석!","/a/e"),

  // ═══ LX-SAMPLE-02 변형 (기본 명령어 / 권한 관리) ×20 ═══
  V("LX-VAR-S02-A","LX-SAMPLE-02","[변형] 파일 내용 출력 cat",null,"bash","파일의 전체 내용을 터미널 화면에 연속으로 출력하는 기본 명령어는?",["cat"],"cat (Concatenate) 명령어","💡 파일 내용 출력은 cat!","cat"),
  V("LX-VAR-S02-B","LX-SAMPLE-02","[변형] 파일 복사 cp",null,"bash","파일이나 디렉터리를 복사할 때 사용하는 명령어는?",["cp"],"cp (Copy) 명령어","💡 파일 복사는 cp!","cp"),
  V("LX-VAR-S02-C","LX-SAMPLE-02","[변형] 파일 삭제 rm",null,"bash","파일이나 디렉터리를 삭제할 때 사용하는 명령어는?",["rm"],"rm (Remove) 명령어","💡 파일 삭제는 rm!","rm"),
  V("LX-VAR-S02-D","LX-SAMPLE-02","[변형] 파일 이동 및 이름 변경 mv",null,"bash","파일을 다른 위치로 이동하거나 이름을 변경할 때 사용하는 명령어는?",["mv"],"mv (Move) 명령어","💡 이동 및 이름 변경은 mv!","mv"),
  V("LX-VAR-S02-E","LX-SAMPLE-02","[변형] 새 디렉터리 생성 mkdir",null,"bash","새로운 디렉터리(폴더)를 생성할 때 사용하는 명령어는?",["mkdir"],"mkdir (Make Directory) 명령어","💡 디렉터리 생성은 mkdir!","mkdir"),
  V("LX-VAR-S02-F","LX-SAMPLE-02","[변형] 빈 디렉터리 삭제 rmdir",null,"bash","비어 있는 디렉터리를 삭제할 때 사용하는 전용 명령어는?",["rmdir"],"rmdir (Remove Directory) 명령어","💡 빈 폴더 삭제는 rmdir!","rmdir"),
  V("LX-VAR-S02-G","LX-SAMPLE-02","[변형] 파일 소유자 변경 chown",null,"bash","파일이나 디렉터리의 소유자(Owner)와 소유 그룹을 변경하는 명령어는?",["chown"],"chown (Change Owner) 명령어","💡 소유자 변경은 chown!","chown"),
  V("LX-VAR-S02-H","LX-SAMPLE-02","[변형] 파일 소유 그룹 변경 chgrp",null,"bash","파일이나 디렉터리의 소유 그룹(Group)만 변경하는 명령어는?",["chgrp"],"chgrp (Change Group) 명령어","💡 소유 그룹 변경은 chgrp!","chgrp"),
  V("LX-VAR-S02-I","LX-SAMPLE-02","[변형] 8진수 권한 755 해석",null,"bash","chmod 755 file.txt 에서 소유자/그룹/기타사용자의 권한(rwx)을 순서대로 쓰시오.",["rwxr-xr-x", "rwx r-x r-x"],"7(4+2+1=rwx), 5(4+1=r-x), 5(4+1=r-x)","💡 7(rwx), 6(rw-), 5(r-x), 4(r--)!","rwxr-xr-x"),
  V("LX-VAR-S02-J","LX-SAMPLE-02","[변형] 8진수 권한 644 해석",null,"bash","일반 텍스트 파일의 기본 권한인 644의 기호 표기(rwx)는?",["rw-r--r--", "rw- r-- r--"],"6(rw-), 4(r--), 4(r--)","💡 644 = rw-r--r--!","rw-r--r--"),
  V("LX-VAR-S02-K","LX-SAMPLE-02","[변형] 8진수 권한 777 해석",null,"bash","모든 사용자(소유자, 그룹, 기타)에게 읽기/쓰기/실행 모든 권한을 부여하는 8진수 숫자는?",["777"],"7(rwx) + 7(rwx) + 7(rwx) = 777","💡 모든 권한 전면 개방 = 777!","777"),
  V("LX-VAR-S02-L","LX-SAMPLE-02","[변형] 기호 모드 권한 추가 chmod u+x",null,"bash","소유자(u)에게 실행 권한(x)을 추가 부여하는 chmod 명령어 형식은?",["chmod u+x", "u+x"],"u(user) + x(execute)","💡 u+x로 소유자 실행 권한 추가!","u+x"),
  V("LX-VAR-S02-M","LX-SAMPLE-02","[변형] 기호 모드 권한 제거 chmod g-w",null,"bash","그룹(g)의 쓰기 권한(w)을 제거/박탈하는 기호 명령 표기는?",["g-w", "chmod g-w"],"g(group) - w(write)","💡 g-w로 그룹 쓰기 권한 회수!","g-w"),
  V("LX-VAR-S02-N","LX-SAMPLE-02","[변형] 빈 파일 생성 및 시간 갱신 touch",null,"bash","용량이 0인 빈 파일을 생성하거나 기존 파일의 수정 시간을 갱신하는 명령어는?",["touch"],"touch 명령어","💡 빈 파일 생성/시간 갱신은 touch!","touch"),
  V("LX-VAR-S02-O","LX-SAMPLE-02","[변형] 파일 앞부분 출력 head",null,"bash","파일의 처음 10줄을 기본으로 출력하는 명령어는?",["head"],"head 명령어 (기본 10줄)","💡 파일 앞부분 확인은 head!","head"),
  V("LX-VAR-S02-P","LX-SAMPLE-02","[변형] 파일 끝부분 실시간 모니터링 tail -f",null,"bash","파일의 마지막 부분을 확인하며 실시간 로그를 모니터링(-f)할 때 쓰는 명령어는?",["tail", "tail -f"],"tail 명령어 (-f: follow)","💡 로그 실시간 추적은 tail -f!","tail"),
  V("LX-VAR-S02-Q","LX-SAMPLE-02","[변형] 페이지 단위 파일 뷰어 more/less",null,"bash","긴 파일의 내용을 한 화면(페이지) 단위로 끊어서 보여주는 명령어는?",["more", "less"],"more 또는 less 페이징 뷰어","💡 페이지 단위 뷰어는 more / less!","more"),
  V("LX-VAR-S02-R","LX-SAMPLE-02","[변형] 텍스트 문자열 출력 echo",null,"bash","터미널 화면에 텍스트 문자열이나 환경변수 값을 출력하는 명령어는?",["echo"],"echo 명령어","💡 화면 출력 명령어 echo!","echo"),
  V("LX-VAR-S02-S","LX-SAMPLE-02","[변형] 파일 권한의 r, w, x 값",null,"bash","읽기(r) 권한에 대응하는 8진수 숫자는?",["4"],"r=4, w=2, x=1","💡 r(4), w(2), x(1) 8진수 환산!","4"),
  V("LX-VAR-S02-T","LX-SAMPLE-02","[변형] 실행(x) 권한의 8진수 값",null,"bash","실행(x) 권한에 대응하는 8진수 숫자는?",["1"],"x=1, w=2, r=4","💡 실행 권한 가중치는 1!","1"),

  // ═══ LX-2026-01-03 변형 (시스템 관리 명령어 sudo, man, top 등) ×20 ═══
  V("LX-VAR-0103-A","LX-2026-01-03","[변형] 실시간 프로세스 모니터링 top",null,"bash","CPU, 메모리 사용량 등 현재 실행 중인 프로세스를 실시간으로 모니터링하는 명령어는?",["top", "htop"],"top (Table of Processes)","💡 실시간 프로세스 모니터링은 top!","top"),
  V("LX-VAR-0103-B","LX-2026-01-03","[변형] 디스크 여유 공간 확인 df",null,"bash","파일시스템별 디스크의 전체 용량과 남은 여유 공간을 확인하는 명령어는?",["df", "df -h"],"df (Disk Free) 명령어","💡 디스크 여유 공간 확인은 df!","df"),
  V("LX-VAR-0103-C","LX-2026-01-03","[변형] 특정 디렉터리 사용 용량 du",null,"bash","특정 디렉터리나 파일이 차지하고 있는 디스크 용량을 확인하는 명령어는?",["du", "du -sh"],"du (Disk Usage) 명령어","💡 디렉터리 점유 용량 확인은 du!","du"),
  V("LX-VAR-0103-D","LX-2026-01-03","[변형] 프로세스 강제 종료 kill",null,"bash","PID(프로세스 ID)를 지정하여 실행 중인 프로세스에 시그널을 보내 종료시키는 명령어는?",["kill", "kill -9"],"kill 명령어 (-9: SIGKILL)","💡 프로세스 종료 명령어 kill!","kill"),
  V("LX-VAR-0103-E","LX-2026-01-03","[변형] 프로세스 이름으로 종료 killall / pkill",null,"bash","PID 대신 프로세스 이름으로 프로세스를 일괄 종료시키는 명령어는?",["killall", "pkill"],"killall 또는 pkill 명령어","💡 프로세스명 일괄 종료 killall / pkill!","killall"),
  V("LX-VAR-0103-F","LX-2026-01-03","[변형] 현재 실행 중인 프로세스 스냅샷 ps",null,"bash","현재 터미널 및 시스템에서 실행 중인 프로세스 목록의 상태를 출력하는 명령어는?",["ps", "ps -ef", "ps aux"],"ps (Process Status) 명령어","💡 프로세스 상태 목록 출력 ps!","ps"),
  V("LX-VAR-0103-G","LX-2026-01-03","[변형] 사용자 전환 su",null,"bash","현재 로그인 상태를 유지하면서 다른 사용자(예: root) 계정으로 전환하는 명령어는?",["su", "su -"],"su (Switch User) 명령어","💡 계정 전환 명령어 su!","su"),
  V("LX-VAR-0103-H","LX-2026-01-03","[변형] 네트워크 인터페이스 설정 ifconfig / ip",null,"bash","네트워크 인터페이스(IP 주소, MAC 주소 등) 정보를 확인하거나 설정하는 명령어는?",["ifconfig", "ip a", "ip"],"ifconfig 또는 최신 ip 명령어","💡 IP 및 네트워크 인터페이스 확인 ifconfig!","ifconfig"),
  V("LX-VAR-0103-I","LX-2026-01-03","[변형] 네트워크 연결 상태 및 포트 netstat / ss",null,"bash","열려 있는 포트, 활성화된 네트워크 연결 소켓 상태를 확인하는 명령어는?",["netstat", "ss"],"netstat (Network Statistics) 또는 ss","💡 포트 및 네트워크 상태 확인 netstat / ss!","netstat"),
  V("LX-VAR-0103-J","LX-2026-01-03","[변형] 네트워크 도달 가능성 테스트 ping",null,"bash","ICMP 패킷을 보내 원격 호스트와의 통신 연결 상태 및 응답 시간을 점검하는 명령어는?",["ping"],"ping 명령어 (ICMP Echo)","💡 네트워크 연결성 테스트 ping!","ping"),
  V("LX-VAR-0103-K","LX-2026-01-03","[변형] 패킷 전송 경로 추적 traceroute",null,"bash","목적지 IP까지 패킷이 거쳐가는 라우터 경로를 추적하는 명령어는?",["traceroute", "tracert"],"traceroute (윈도우는 tracert)","💡 경로 추적 traceroute!","traceroute"),
  V("LX-VAR-0103-L","LX-2026-01-03","[변형] DNS 조회 nslookup / dig",null,"bash","도메인 이름에 매핑된 IP 주소를 네임서버에 조회하는 명령어는?",["nslookup", "dig", "host"],"nslookup 또는 dig","💡 DNS 쿼리 질의 nslookup / dig!","nslookup"),
  V("LX-VAR-0103-M","LX-2026-01-03","[변형] 메모리 사용량 확인 free",null,"bash","시스템의 전체 메모리(RAM)와 스왑(Swap) 메모리의 사용 현황을 확인하는 명령어는?",["free", "free -m", "free -h"],"free 명령어","💡 RAM/스왑 사용량 확인 free!","free"),
  V("LX-VAR-0103-N","LX-2026-01-03","[변형] 시스템 가동 시간 및 부하 uptime",null,"bash","시스템이 켜진 후 가동된 시간과 평균 부하(Load Average)를 확인하는 명령어는?",["uptime"],"uptime 명령어","💡 가동 시간 확인 uptime!","uptime"),
  V("LX-VAR-0103-O","LX-2026-01-03","[변형] 현재 로그인 사용자 확인 whoami",null,"bash","현재 터미널 세션의 로그인 사용자명을 출력하는 명령어는?",["whoami"],"whoami 명령어","💡 로그인 계정명 확인 whoami!","whoami"),
  V("LX-VAR-0103-P","LX-2026-01-03","[변형] 환경변수 내보내기 export",null,"bash","새로운 환경변수를 선언하거나 자식 프로세스로 내보낼 때 사용하는 명령어는?",["export"],"export 변수명=값","💡 환경변수 설정 export!","export"),
  V("LX-VAR-0103-Q","LX-2026-01-03","[변형] 모든 환경변수 목록 확인 env",null,"bash","현재 설정되어 있는 모든 환경변수 목록을 출력하는 명령어는?",["env", "printenv"],"env 또는 printenv","💡 환경변수 목록 출력 env!","env"),
  V("LX-VAR-0103-R","LX-2026-01-03","[변형] 명령어 실행 파일 경로 찾기 which / whereis",null,"bash","특정 명령어의 실행 파일 절대 경로를 PATH 환경변수에서 찾아주는 명령어는?",["which", "whereis"],"which 또는 whereis","💡 명령어 바이너리 경로 검색 which!","which"),
  V("LX-VAR-0103-S","LX-2026-01-03","[변형] 시스템 종료 및 재부팅 shutdown / reboot",null,"bash","시스템을 즉시 재부팅할 때 사용하는 단일 명령어는?",["reboot", "shutdown -r now"],"reboot 명령어","💡 재부팅 명령어 reboot!","reboot"),
  V("LX-VAR-0103-T","LX-2026-01-03","[변형] 주기적 작업 예약 crontab",null,"bash","정해진 시간이나 주기에 따라 배치 작업을 자동 실행하도록 설정하는 테이블 명령어는?",["crontab", "cron"],"crontab -e","💡 스케줄링/배치 예약 crontab!","crontab"),

  // ═══ LX-2026-01-04 변형 (상대 경로 역추적 / 표기법) ×20 ═══
  V("LX-VAR-0104-A","LX-2026-01-04","[변형] 2단계 상위 형제 경로 ../../apache",null,"bash","작업 경로: /var/log/nginx/access\n목표 경로: /var/log/apache\n현재 작업 경로에서 목표 경로에 대한 상대 경로는?",["../../apache", "./../../apache"],"access→nginx(..1)→log(..2)→apache","💡 2단계 올라간 후 타겟 진입!","../../apache"),
  V("LX-VAR-0104-B","LX-2026-01-04","[변형] 1단계 상위 형제 경로 ../css",null,"bash","작업 경로: /var/www/html/js\n목표 경로: /var/www/html/css\n상대 경로는?",["../css"],"js에서 ..(html)로 올라가 css 진입","💡 ../css","../css"),
  V("LX-VAR-0104-C","LX-2026-01-04","[변형] 하위 디렉터리 진입 static/img",null,"bash","작업 경로: /app\n목표 경로: /app/static/img\n상대 경로는?",["static/img", "./static/img"],"현재 작업 경로의 직속 하위로 진입","💡 하위 진입은 ./폴더명 또는 그냥 폴더명!","static/img"),
  V("LX-VAR-0104-D","LX-2026-01-04","[변형] 3단계 상위 형제 ../../../bin",null,"bash","작업 경로: /usr/local/share/doc\n목표 경로: /usr/local/bin\n상대 경로는?",["../../bin"],"doc→share(..1)→local(..2)→bin","💡 ../../bin","../../bin"),
  V("LX-VAR-0104-E","LX-2026-01-04","[변형] 부모 디렉터리 자체 참조 ..",null,"bash","작업 경로: /home/user/code\n목표 경로: /home/user\n상대 경로는?",["..", "./.."],"code에서 바로 상위인 user로 이동","💡 부모 디렉터리 자체는 ..!",".."),
  V("LX-VAR-0104-F","LX-2026-01-04","[변형] 조부모 디렉터리 자체 참조 ../..",null,"bash","작업 경로: /home/user/code/src\n목표 경로: /home/user\n상대 경로는?",["../.."],"src→code(..1)→user(..2)","💡 2단계 상위 자체는 ../..!","../.."),
  V("LX-VAR-0104-G","LX-2026-01-04","[변형] 현재 디렉터리 내 파일 ./index.html",null,"bash","작업 경로: /var/www\n목표 경로: /var/www/index.html\n상대 경로는?",["./index.html", "index.html"],"현재 디렉터리의 파일","💡 ./파일명 또는 파일명!","./index.html"),
  V("LX-VAR-0104-H","LX-2026-01-04","[변형] 형제 디렉터리 내 파일 ../config/db.conf",null,"bash","작업 경로: /etc/nginx/conf.d\n목표 경로: /etc/nginx/config/db.conf\n상대 경로는?",["../config/db.conf"],"conf.d에서 ..(nginx) 이동 후 config/db.conf 진입","💡 ../config/db.conf","../config/db.conf"),
  V("LX-VAR-0104-I","LX-2026-01-04","[변형] 공통 조상이 루트인 경우",null,"bash","작업 경로: /home/user\n목표 경로: /etc/nginx\n상대 경로는?",["../../etc/nginx"],"user→home(..1)→/(..2)→etc/nginx","💡 루트까지 올라간 후 진입!","../../etc/nginx"),
  V("LX-VAR-0104-J","LX-2026-01-04","[변형] 4단계 상위 형제",null,"bash","작업 경로: /a/b/c/d/e\n목표 경로: /a/b/c/f\n상대 경로는?",["../../f"],"e→d(..1)→c(..2)→f","💡 ../../f","../../f"),
  V("LX-VAR-0104-K","LX-2026-01-04","[변형] 같은 디렉터리 자체 .",null,"bash","작업 경로: /opt/app\n목표 경로: /opt/app\n현재 위치를 나타내는 상대 경로는?",[".", "./"],"현재 디렉터리 자체는 점(.)","💡 현재 위치 표기는 .!","."),
  V("LX-VAR-0104-L","LX-2026-01-04","[변형] 1단계 하위의 형제",null,"bash","작업 경로: /project/src\n목표 경로: /project/build/output\n상대 경로는?",["../build/output"],"src에서 ..(project)로 이동 후 build/output 진입","💡 ../build/output","../build/output"),
  V("LX-VAR-0104-M","LX-2026-01-04","[변형] 깊은 하위에서 얕은 하위로",null,"bash","작업 경로: /a/b/c/d/e/f\n목표 경로: /a/b\n상대 경로는?",["../../../../", "../../../.."],"f→e→d→c→/a/b (4단계 상위)","💡 4단계 상위 ../../../..!","../../../.."),
  V("LX-VAR-0104-N","LX-2026-01-04","[변형] 얕은 곳에서 깊은 형제로",null,"bash","작업 경로: /data/in\n목표 경로: /data/out/archive/2026\n상대 경로는?",["../out/archive/2026"],"in에서 ..(data) 후 out/archive/2026 진입","💡 ../out/archive/2026","../out/archive/2026"),
  V("LX-VAR-0104-O","LX-2026-01-04","[변형] 상대 경로 시작 기호",null,"bash","절대 경로는 '/'로 시작하지만 상대 경로는 일반적으로 무엇으로 시작하는가?",[".", "..", "알파벳", "문자"],null,"contains_any","상대 경로는 . 또는 .. 또는 디렉터리명으로 시작","💡 상대 경로는 루트(/)로 시작하지 않음!",". 또는 .."),
  V("LX-VAR-0104-P","LX-2026-01-04","[변형] 최상위 루트(/)로의 상대 경로",null,"bash","작업 경로: /var/log\n목표 경로: /\n상대 경로는?",["../.."],"log→var(..1)→/(..2)","💡 ../..","../.."),
  V("LX-VAR-0104-Q","LX-2026-01-04","[변형] 웹 개발 상대 경로 ../../assets/logo.png",null,"bash","작업 경로: /site/pages/sub\n목표 경로: /site/assets/logo.png\n상대 경로는?",["../../assets/logo.png"],"sub→pages(..1)→site(..2)→assets/logo.png","💡 웹 리소스 상대 경로!","../../assets/logo.png"),
  V("LX-VAR-0104-R","LX-2026-01-04","[변형] 자바 패키지 경로 상대 이동",null,"bash","작업 경로: /src/com/exam/service\n목표 경로: /src/com/exam/dto\n상대 경로는?",["../dto"],"service에서 ..(exam) 이동 후 dto 진입","💡 패키지 폴더 간 상대 이동!","../dto"),
  V("LX-VAR-0104-S","LX-2026-01-04","[변형] 1단계 상위의 부모 파일 ../../README.md",null,"bash","작업 경로: /project/src/main\n목표 경로: /project/README.md\n상대 경로는?",["../../README.md"],"main→src(..1)→project(..2)→README.md","💡 ../../README.md","../../README.md"),
  V("LX-VAR-0104-T","LX-2026-01-04","[변형] 3단계 상위 형제 폴더",null,"bash","작업 경로: /usr/share/zoneinfo/Asia\n목표 경로: /usr/share/man\n상대 경로는?",["../../man"],"Asia→zoneinfo(..1)→share(..2)→man","💡 ../../man","../../man"),

  // ═══ LX-2026-02-01 변형 (절대 경로에서 복합 상대 경로 계산) ×20 ═══
  V("LX-VAR-0201-A","LX-2026-02-01","[변형] 2단계 상위 이동 ../../bin",null,"bash","현재 절대 경로: /usr/local/share 에서 상대 경로 ../../bin 을 적용한 최종 절대 경로는?",["/usr/bin"],"share→local(..1)→usr(..2)→bin 진입","💡 share→local→usr→bin!","/usr/bin"),
  V("LX-VAR-0201-B","LX-2026-02-01","[변형] 3단계 상위 이동 ../../../etc",null,"bash","현재 절대 경로: /var/log/nginx/access 에서 상대 경로 ../../../etc 를 적용한 최종 절대 경로는?",["/etc"],"access→nginx(..1)→log(..2)→var(..3)→/(루트)→etc","💡 3단계 올라간 후 etc 진입!","/etc"),
  V("LX-VAR-0201-C","LX-2026-02-01","[변형] 현재 경로 유지 ./test/result",null,"bash","현재 절대 경로: /home/user/project 에서 상대 경로 ./test/result 를 적용한 최종 절대 경로는?",["/home/user/project/test/result"],"현재 위치에서 test/result 하위로 진입","💡 하위 경로 덧붙이기!","/home/user/project/test/result"),
  V("LX-VAR-0201-D","LX-2026-02-01","[변형] 상위 이동 후 파일 참조 ../config.xml",null,"bash","현재 절대 경로: /opt/tomcat/webapps/app 에서 상대 경로 ../conf/server.xml 을 적용한 최종 절대 경로는?",["/opt/tomcat/conf/server.xml"],"app→webapps(..1)→/opt/tomcat → conf/server.xml","💡 /opt/tomcat/conf/server.xml","/opt/tomcat/conf/server.xml"),
  V("LX-VAR-0201-E","LX-2026-02-01","[변형] 1단계 상위 이동 ../lib/module.so",null,"bash","현재 절대 경로: /usr/lib64/perl5 에서 상대 경로 ../lib/module.so 를 적용한 최종 절대 경로는?",["/usr/lib/module.so"],"perl5→lib64(..1)→/usr → lib/module.so","💡 /usr/lib/module.so","/usr/lib/module.so"),
  V("LX-VAR-0201-F","LX-2026-02-01","[변형] 4단계 상위 이동 ../../../../data",null,"bash","현재 절대 경로: /a/b/c/d/e 에서 상대 경로 ../../../../data 를 적용한 최종 절대 경로는?",["/a/data"],"e→d→c→b→/a → data 진입","💡 /a/data","/a/data"),
  V("LX-VAR-0201-G","LX-2026-02-01","[변형] 점(.)이 중간에 포함된 경로 .././../tmp",null,"bash","현재 절대 경로: /home/user/work 에서 상대 경로 .././../tmp 를 적용한 최종 절대 경로는?",["/tmp"],"work→user(..1)→.(유지)→home(..2)→/(루트) → tmp 진입","💡 ./는 무시하고 단계 계산!","/tmp"),
  V("LX-VAR-0201-H","LX-2026-02-01","[변형] 루트 초과 상위 이동 안전 처리",null,"bash","현재 절대 경로: /etc 에서 상대 경로 ../../../var 를 적용한 최종 절대 경로는?",["/var"],"루트(/)에서 더 위로 올라가도 루트(/) 유지 → /var 진입","💡 루트 상위 이동은 루트로 수렴!","/var"),
  V("LX-VAR-0201-I","LX-2026-02-01","[변형] 다운로드 폴더 상대 이동",null,"bash","현재 절대 경로: /Users/mac/Desktop/test 에서 상대 경로 ../../Downloads 를 적용한 최종 절대 경로는?",["/Users/mac/Downloads"],"test→Desktop(..1)→/Users/mac → Downloads 진입","💡 /Users/mac/Downloads","/Users/mac/Downloads"),
  V("LX-VAR-0201-J","LX-2026-02-01","[변형] 파이썬 가상환경 경로",null,"bash","현재 절대 경로: /project/venv/lib/python3.10 에서 상대 경로 ../../bin/activate 를 적용한 최종 절대 경로는?",["/project/venv/bin/activate"],"python3.10→lib(..1)→/project/venv → bin/activate","💡 /project/venv/bin/activate","/project/venv/bin/activate"),
  V("LX-VAR-0201-K","LX-2026-02-01","[변형] 리눅스 커널 소스 경로",null,"bash","현재 절대 경로: /usr/src/linux-headers/include 에서 상대 경로 ../arch/x86 를 적용한 최종 절대 경로는?",["/usr/src/linux-headers/arch/x86"],"include→linux-headers(..1)→arch/x86","💡 /usr/src/linux-headers/arch/x86","/usr/src/linux-headers/arch/x86"),
  V("LX-VAR-0201-L","LX-2026-02-01","[변형] 1단계 하위 진입 ./logs/app.log",null,"bash","현재 절대 경로: /var/www 에서 상대 경로 ./logs/app.log 를 적용한 최종 절대 경로는?",["/var/www/logs/app.log"],"현재 위치에 logs/app.log 결합","💡 /var/www/logs/app.log","/var/www/logs/app.log"),
  V("LX-VAR-0201-M","LX-2026-02-01","[변형] 깊은 디렉터리 복합 이동",null,"bash","현재 절대 경로: /a/b/c/d 에서 상대 경로 ../../../b/c/e 를 적용한 최종 절대 경로는?",["/a/b/c/e"],"d→c→b→/a 이동 후 b/c/e 진입","💡 /a/b/c/e","/a/b/c/e"),
  V("LX-VAR-0201-N","LX-2026-02-01","[변형] 상위 이동 후 현재 폴더 참조 ../.",null,"bash","현재 절대 경로: /home/user/test 에서 상대 경로 ../. 를 적용한 최종 절대 경로는?",["/home/user"],"test에서 ..(user) 이동 후 .(현재) 유지","💡 /home/user","/home/user"),
  V("LX-VAR-0201-O","LX-2026-02-01","[변형] 3단계 상위 형제 진입",null,"bash","현재 절대 경로: /system/core/lib/net 에서 상대 경로 ../../../sys/boot 를 적용한 최종 절대 경로는?",["/system/sys/boot"],"net→lib(..1)→core(..2)→system(..3)→sys/boot","💡 /system/sys/boot","/system/sys/boot"),
  V("LX-VAR-0201-P","LX-2026-02-01","[변형] 파일 경로에서 상위 이동",null,"bash","디렉터리 /opt/app/bin 에서 상대 경로 ../conf/ 를 적용한 디렉터리 절대 경로는?",["/opt/app/conf", "/opt/app/conf/"],"bin에서 ..(app) 이동 후 conf 진입","💡 /opt/app/conf","/opt/app/conf"),
  V("LX-VAR-0201-Q","LX-2026-02-01","[변형] 2단계 상위 이동 ../../public",null,"bash","현재 절대 경로: /srv/http/laravel/storage 에서 상대 경로 ../../public 을 적용한 최종 절대 경로는?",["/srv/http/public"],"storage→laravel(..1)→/srv/http(..2)→public","💡 /srv/http/public","/srv/http/public"),
  V("LX-VAR-0201-R","LX-2026-02-01","[변형] 단일 상위 이동 ../docs",null,"bash","현재 절대 경로: /dev/project/src 에서 상대 경로 ../docs 를 적용한 최종 절대 경로는?",["/dev/project/docs"],"src에서 ..(project) 이동 후 docs 진입","💡 /dev/project/docs","/dev/project/docs"),
  V("LX-VAR-0201-S","LX-2026-02-01","[변형] 2단계 상위 이동 ../../shared",null,"bash","현재 절대 경로: /var/nfs/client/mount 에서 상대 경로 ../../shared 를 적용한 최종 절대 경로는?",["/var/nfs/shared"],"mount→client(..1)→/var/nfs(..2)→shared","💡 /var/nfs/shared","/var/nfs/shared"),
  V("LX-VAR-0201-T","LX-2026-02-01","[변형] 5단계 상위 이동",null,"bash","현재 절대 경로: /1/2/3/4/5/6 에서 상대 경로 ../../../../../target 을 적용한 최종 절대 경로는?",["/1/target"],"6→5→4→3→2→/1로 5단계 이동 후 target 진입","💡 /1/target","/1/target"),

  // ═══ LX-2026-02-05 변형 (파일 관리 / 아카이브 / 검색 / 에디터) ×20 ═══
  V("LX-VAR-0205-A","LX-2026-02-05","[변형] 문자열 패턴 검색 grep",null,"bash","파일 내부에서 특정 문자열이나 정규표현식 패턴을 검색하여 일치하는 줄을 출력하는 명령어는?",["grep", "egrep", "fgrep"],"grep (Global Regular Expression Print) 명령어","💡 텍스트/문자열 패턴 검색은 grep!","grep"),
  V("LX-VAR-0205-B","LX-2026-02-05","[변형] 파일 및 디렉터리 검색 find",null,"bash","파일시스템에서 이름, 크기, 수정시간 등 조건에 맞는 파일/디렉터리를 검색하는 명령어는?",["find"],"find 명령어","💡 파일 위치 검색은 find!","find"),
  V("LX-VAR-0205-C","LX-2026-02-05","[변형] tar 아카이브 생성 옵션",null,"bash","tar 명령어로 새로운 아카이브 파일을 생성(Create)할 때 쓰는 옵션 문자는?",["-c", "c", "cvf"],"tar -c (create)","💡 tar -cvf (생성), -xvf (해제)!","-c"),
  V("LX-VAR-0205-D","LX-2026-02-05","[변형] tar 아카이브 해제 옵션",null,"bash","tar 아카이브 파일의 압축/묶음을 해제(Extract)할 때 쓰는 옵션 문자는?",["-x", "x", "xvf"],"tar -x (extract)","💡 tar 해제 옵션은 -x!","-x"),
  V("LX-VAR-0205-E","LX-2026-02-05","[변형] tar.gz gzip 압축 옵션",null,"bash","tar 명령어에서 gzip 압축/해제를 동시에 처리하는 옵션 문자는?",["-z", "z", "zcvf", "zxvf"],"tar -z (gzip)","💡 gzip 연동 옵션은 -z!","-z"),
  V("LX-VAR-0205-F","LX-2026-02-05","[변형] tar.bz2 bzip2 압축 옵션",null,"bash","tar 명령어에서 bzip2 압축/해제를 처리하는 옵션 문자는?",["-j", "j", "jcvf"],"tar -j (bzip2)","💡 bzip2 연동 옵션은 -j!","-j"),
  V("LX-VAR-0205-G","LX-2026-02-05","[변형] gzip / gunzip 압축 해제",null,"bash","단일 파일을 .gz 형식으로 압축하거나 압축 해제(gunzip)하는 전용 명령어는?",["gzip", "gunzip"],"gzip / gunzip 명령어","💡 단일 파일 압축은 gzip!","gzip"),
  V("LX-VAR-0205-H","LX-2026-02-05","[변형] zip / unzip",null,"bash","윈도우와 호환되는 .zip 압축 파일을 해제할 때 사용하는 리눅스 명령어는?",["unzip"],"unzip 명령어","💡 zip 파일 해제는 unzip!","unzip"),
  V("LX-VAR-0205-I","LX-2026-02-05","[변형] 텍스트 줄 수 / 단어 수 세기 wc",null,"bash","파일의 줄 수(Line), 단어 수(Word), 바이트 수를 세어 출력하는 명령어는?",["wc", "wc -l"],"wc (Word Count) 명령어","💡 줄 수 카운트는 wc -l!","wc"),
  V("LX-VAR-0205-J","LX-2026-02-05","[변형] 텍스트 정렬 sort",null,"bash","텍스트 파일의 내용을 행 단위로 정렬(오름차순/내림차순)하는 명령어는?",["sort", "sort -n", "sort -r"],"sort 명령어","💡 텍스트 정렬은 sort!","sort"),
  V("LX-VAR-0205-K","LX-2026-02-05","[변형] 연속 중복 행 제거 uniq",null,"bash","정렬된 텍스트에서 연속으로 중복되는 행을 제거하여 1개만 출력하는 명령어는?",["uniq", "uniq -c"],"uniq 명령어 (반드시 sort와 결합 권장)","💡 중복 행 제거는 uniq!","uniq"),
  V("LX-VAR-0205-L","LX-2026-02-05","[변형] 텍스트 컬럼 자르기 cut",null,"bash","구분자(delimiter)를 기준으로 특정 필드(열)만 추출하는 명령어는?",["cut", "cut -d", "cut -f"],"cut -d',' -f1 명령어","💡 특정 컬럼 추출은 cut!","cut"),
  V("LX-VAR-0205-M","LX-2026-02-05","[변형] 스트림 에디터 sed",null,"bash","파일을 열지 않고 파이프라인에서 텍스트 치환/삭제를 일괄 처리하는 스트림 에디터 명령어는?",["sed"],"sed (Stream Editor)","💡 텍스트 일괄 치환은 sed!","sed"),
  V("LX-VAR-0205-N","LX-2026-02-05","[변형] 패턴 검색 및 데이터 처리 언어 awk",null,"bash","공백/구분자 기반의 열 데이터를 가공하고 합계/통계를 내는 텍스트 처리 도구는?",["awk", "gawk"],"awk 프로그래밍 도구","💡 텍스트 가공 프로그래밍은 awk!","awk"),
  V("LX-VAR-0205-O","LX-2026-02-05","[변형] 두 파일의 차이점 비교 diff",null,"bash","두 텍스트 파일 간의 차이점을 줄 단위로 비교하여 출력하는 명령어는?",["diff", "diff -u"],"diff (Difference) 명령어","💡 파일 차이점 비교는 diff!","diff"),
  V("LX-VAR-0205-P","LX-2026-02-05","[변형] 링크 생성 ln (심볼릭/하드)",null,"bash","파일의 심볼릭 링크(Soft Link, -s) 또는 하드 링크를 생성하는 명령어는?",["ln", "ln -s"],"ln (Link) 명령어","💡 바로가기 링크 생성은 ln -s!","ln"),
  V("LX-VAR-0205-Q","LX-2026-02-05","[변형] 터미널 텍스트 에디터 vi / vim",null,"bash","명령 모드, 입력 모드, 마지막 행 모드를 갖는 리눅스 대표 콘솔 텍스트 에디터는?",["vi", "vim", "nano"],"vi / vim 에디터","💡 대표 콘솔 에디터는 vi / vim!","vi"),
  V("LX-VAR-0205-R","LX-2026-02-05","[변형] vi 저장 후 종료 명령어",null,"bash","vi 에디터의 마지막 행 모드(:)에서 저장하고 종료하는 명령어는?",[":wq", "wq", ":x", "ZZ"],"저장(w) + 종료(q) = :wq","💡 vi 저장 후 종료는 :wq!",":wq"),
  V("LX-VAR-0205-S","LX-2026-02-05","[변형] 파이프(|) 연산자",null,"bash","앞 명령어의 표준 출력을 뒤 명령어의 표준 입력으로 전달하는 특수 기호는?",["|", "파이프", "pipe"],"파이프(|) 연산자","💡 프로세스 간 입출력 연결은 파이프(|)!","|"),
  V("LX-VAR-0205-T","LX-2026-02-05","[변형] 리다이렉션 출력 덮어쓰기(>) vs 추가(>>)",null,"bash","명령어의 출력을 파일에 덮어쓰지 않고 기존 내용 뒤에 덧붙여(Append) 저장하는 리다이렉션 기호는?",[">>"],"덮어쓰기(>), 이어붙이기(>>)","💡 덮어쓰기는 >, 이어붙이기는 >>!",">>")
];

export { LINUX_QUESTIONS, LINUX_VARIANTS };
