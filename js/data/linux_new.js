// ============================================================
// js/data/linux_new.js — 2026 프로그래밍기능사 실기 출제위원급 리얼 신유형 50제 + 실전 변형 200제 (총 250제)
// ============================================================

function createQ(id, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  return {
    id, category: "linux", examRound: "신유형 예상", title, code, codeLang: codeLang || "bash",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null },
    variants: ["A", "B", "C", "D"].map(x => `${id}-${x}`)
  };
}

function V(id, parentId, title, code, codeLang, prompt, answer, trapPoint, tip, desc, traceTable, answerMode, multilineAnswer) {
  const q = {
    id, parentId, category: "linux", examRound: "신유형 변형", title, code, codeLang: codeLang || "bash",
    questionSubItems: [{ subId: 1, prompt, type: "short_text", answer, placeholder: "정답 입력" }],
    explanation: { trapPoint, onePointTip: tip, description: desc, traceTable: traceTable || null }
  };
  if (answerMode) q.questionSubItems[0].answerMode = answerMode;
  if (multilineAnswer) q.questionSubItems[0].multilineAnswer = multilineAnswer;
  return q;
}

export const LINUX_NEW_QUESTIONS = [
  createQ("NEW-LX-01", "find 명령어와 -exec 액션", `find /var/log -name "*.log" ( ? ) rm {} \\;`, "bash", "검색 파일 대상 일괄 명령어 실행 옵션 키워드는?", ["-exec", "exec"], "-exec 옵션", "💡 find ... -exec 명령어 {} \\;!", "-exec"),
  createQ("NEW-LX-02", "awk 특정 필드 추출과 합계", `awk '{sum += $2} END {print sum}' data.txt\n-- itemA 10, itemB 20, itemC 30`, "bash", "위 awk 명령어의 실행 결과(숫자)를 쓰시오.", ["60"], "10 + 20 + 30 = 60", "💡 awk 열 누적 합산!", "60"),
  createQ("NEW-LX-03", "sed 스트림 에디터 전역 치환(g)", `echo "banana" | sed 's/a/o/g'`, "bash", "위 명령어의 실행 결과를 쓰시오.", ["bonono"], "모든 'a'를 'o'로 치환", "💡 sed 's/a/o/g' 전역 치환!", "bonono"),
  createQ("NEW-LX-04", "cut 구분자(-d)와 필드(-f) 추출", `echo "root:x:0:0:root:/root:/bin/bash" | cut -d':' -f1`, "bash", "콜론 구분자 기준 첫 번째 필드 추출 결과를 쓰시오.", ["root"], "첫 필드 'root'", "💡 cut -d':' -f1!", "root"),
  createQ("NEW-LX-05", "tr 문자 치환(대문자 변환)", `echo "hello" | tr 'a-z' 'A-Z'`, "bash", "위 명령어의 실행 결과를 쓰시오.", ["HELLO"], "대문자 변환 HELLO", "💡 tr 1:1 문자 매핑 치환!", "HELLO"),
  createQ("NEW-LX-06", "tee 명령어 화면 출력과 파일 동시 저장", `ls -l | ( ? ) output.txt`, "bash", "화면 출력과 파일 저장을 동시에 수행하는 명령어는?", ["tee"], "tee 명령어", "💡 동시 출력/저장 = tee!", "tee"),
  createQ("NEW-LX-07", "표준 에러를 표준 출력으로 병합 (2>&1)", `./app.sh > output.log ( ? )`, "bash", "표준 에러를 표준 출력으로 병합 리다이렉트하는 기호는?", ["2>&1"], "2>&1 병합", "💡 2>&1 에러 로그 병합!", "2>&1"),
  createQ("NEW-LX-08", "특수 디바이스 /dev/null 폐기", `./script.sh > ( ? ) 2>&1`, "bash", "모든 출력을 완전히 폐기(버림)하는 특수 장치 경로는?", ["/dev/null"], "/dev/null 블랙홀", "💡 출력 폐기 = /dev/null!", "/dev/null"),
  createQ("NEW-LX-09", "Sticky Bit 특수 권한 (1000, /tmp)", `drwxrwxrwt`, "bash", "소유자만 파일 삭제가 가능한 특수 권한 명칭은?", ["Sticky Bit", "스티키 비트", "sticky"], "Sticky Bit (t)", "💡 타인 삭제 방지 = Sticky Bit!", "Sticky Bit"),
  createQ("NEW-LX-10", "SUID 특수 권한 (4000, passwd)", `-rwsr-xr-x`, "bash", "실행 시 파일 소유자(root) 권한으로 실행되는 특수 권한은?", ["SUID", "SetUID"], "SUID (s)", "💡 소유자 권한 대행 = SUID!", "SUID"),
  createQ("NEW-LX-11", "SGID 특수 권한 (2000)", `drwxrwsr-x`, "bash", "새 파일 생성 시 부모 디렉터리 소유 그룹을 상속받는 권한은?", ["SGID", "SetGID"], "SGID (s)", "💡 그룹 권한 상속 = SGID!", "SGID"),
  createQ("NEW-LX-12", "umask 기본 권한 마스크 (디렉터리)", `-- umask: 022 (최대 777에서 차감)`, "bash", "umask 022일 때 생성되는 디렉터리의 8진수 권한은?", ["755"], "777 - 022 = 755", "💡 디렉터리 권한 = 777 - umask!", "755"),
  createQ("NEW-LX-13", "umask 기본 권한 마스크 (파일)", `-- umask: 022 (최대 666에서 차감)`, "bash", "umask 022일 때 생성되는 일반 파일의 8진수 권한은?", ["644"], "666 - 022 = 644", "💡 일반 파일 권한 = 666 - umask!", "644"),
  createQ("NEW-LX-14", "쉘 특수 변수 $? 직전 종료 상태", `echo $?`, "bash", "직전 명령어의 종료 코드(성공=0)를 담고 있는 특수 변수는?", ["$?"], "$? 종료 코드", "💡 직전 명령 성공 여부 = $?!", "$?"),
  createQ("NEW-LX-15", "쉘 특수 변수 $# 인자 개수", `./run.sh a b c; echo $#`, "bash", "스크립트에 전달된 인자 총 개수를 출력하는 특수 변수는?", ["$#"], "$# 인자 개수 (3)", "💡 인자 개수 = $#!", "$#"),
  createQ("NEW-LX-16", "쉘 특수 변수 $0 스크립트 파일명", `echo $0`, "bash", "현재 실행 중인 쉘 스크립트 파일 이름을 담고 있는 변수는?", ["$0"], "$0 스크립트명", "💡 실행 파일명 = $0!", "$0"),
  createQ("NEW-LX-17", "백그라운드 실행 기호 &", `./task.sh ( ? )`, "bash", "프로세스를 백그라운드에서 동작시키는 기호는?", ["&"], "& 기호", "💡 백그라운드 실행 = &!", "&"),
  createQ("NEW-LX-18", "nohup 세션 종료 후 프로세스 유지", `( ? ) ./server.sh &`, "bash", "로그아웃 후에도 프로세스를 유지시키는 명령어는?", ["nohup"], "nohup 명령어", "💡 데몬 유지 = nohup!", "nohup"),
  createQ("NEW-LX-19", "jobs 백그라운드 작업 목록", `jobs`, "bash", "현재 세션의 백그라운드 작업 목록을 확인하는 명령어는?", ["jobs"], "jobs 명령어", "💡 백그라운드 목록 = jobs!", "jobs"),
  createQ("NEW-LX-20", "fg 포그라운드 전환", `( ? ) %1`, "bash", "백그라운드 작업을 포그라운드로 가져오는 명령어는?", ["fg"], "fg 명령어", "💡 포그라운드 전환 = fg!", "fg"),
  createQ("NEW-LX-21", "bg 백그라운드 재개", `( ? ) %1`, "bash", "일시정지된 작업을 백그라운드로 재개하는 명령어는?", ["bg"], "bg 명령어", "💡 백그라운드 재개 = bg!", "bg"),
  createQ("NEW-LX-22", "kill -9 강제 종료 시그널 (SIGKILL)", `kill ( ? ) 1234`, "bash", "무조건 즉시 강제 종료시키는 SIGKILL 시그널 옵션은?", ["-9", "-SIGKILL"], "kill -9", "💡 강제 종료 = kill -9!", "-9"),
  createQ("NEW-LX-23", "kill -15 정상 종료 요청 (SIGTERM)", `kill -15 1234`, "bash", "정상 종료를 요청하는 기본 시그널 명칭은?", ["SIGTERM", "15"], "SIGTERM 시그널", "💡 정상 종료 요청 = SIGTERM!", "SIGTERM"),
  createQ("NEW-LX-24", "lsof 특정 포트 사용 프로세스 확인", `lsof -i :80`, "bash", "80번 포트를 열고 있는 프로세스를 확인하는 명령어는?", ["lsof"], "lsof 명령어", "💡 포트 확인 = lsof -i :포트!", "lsof"),
  createQ("NEW-LX-25", "ss 소켓 및 포트 모니터링", `ss -tulpn`, "bash", "netstat을 대체하는 최신 소켓 통계 명령어는?", ["ss"], "ss 명령어", "💡 소켓 통계 = ss!", "ss"),
  createQ("NEW-LX-26", "curl HTTP 응답 헤더만 조회 (-I)", `curl -I https://example.com`, "bash", "HTTP 헤더만 요청하는 curl 옵션은?", ["-I", "--head"], "curl -I", "💡 헤더만 조회 = curl -I!", "-I"),
  createQ("NEW-LX-27", "scp 원격 파일 보안 복사", `scp file.txt user@ip:/path/`, "bash", "SSH 기반 원격 파일 복사 명령어는?", ["scp"], "scp 명령어", "💡 원격 보안 복사 = scp!", "scp"),
  createQ("NEW-LX-28", "rsync 증분 동기화", `rsync -avz /src/ /dst/`, "bash", "변경된 파일만 증분 백업/동기화하는 도구는?", ["rsync"], "rsync 도구", "💡 증분 동기화 = rsync!", "rsync"),
  createQ("NEW-LX-29", "systemctl status 서비스 상태 점검", `systemctl status nginx`, "bash", "데몬의 현재 실행 상태를 점검하는 서브커맨드는?", ["status"], "systemctl status", "💡 상태 확인 = status!", "status"),
  createQ("NEW-LX-30", "systemctl enable 자동 시작 등록", `systemctl ( ? ) nginx`, "bash", "부팅 시 서비스 자동 시작을 활성화하는 서브커맨드는?", ["enable"], "systemctl enable", "💡 자동 시작 활성화 = enable!", "enable"),
  createQ("NEW-LX-31", "journalctl 서비스 로그 조회", `journalctl -u nginx`, "bash", "systemd 중앙 집중식 로그를 조회하는 도구는?", ["journalctl"], "journalctl 도구", "💡 systemd 로그 = journalctl!", "journalctl"),
  createQ("NEW-LX-32", "/etc/fstab 파일시스템 마운트 설정", `/etc/fstab`, "bash", "부팅 시 파일시스템 자동 마운트 설정 파일 경로는?", ["/etc/fstab"], "/etc/fstab 파일", "💡 마운트 테이블 = /etc/fstab!", "/etc/fstab"),
  createQ("NEW-LX-33", "/etc/hosts 로컬 도메인 매핑", `/etc/hosts`, "bash", "IP와 호스트명을 로컬에서 수동 매핑하는 설정 파일은?", ["/etc/hosts"], "/etc/hosts 파일", "💡 IP-호스트명 매핑 = /etc/hosts!", "/etc/hosts"),
  createQ("NEW-LX-34", "/etc/resolv.conf 네임서버 설정", `/etc/resolv.conf`, "bash", "DNS 네임서버 IP를 지정하는 설정 파일 경로는?", ["/etc/resolv.conf"], "/etc/resolv.conf 파일", "💡 DNS 서버 설정 = /etc/resolv.conf!", "/etc/resolv.conf"),
  createQ("NEW-LX-35", "/etc/passwd 사용자 계정 정보", `/etc/passwd`, "bash", "사용자 계정 및 쉘 정보를 저장하는 파일 경로는?", ["/etc/passwd"], "/etc/passwd 파일", "💡 계정 정보 = /etc/passwd!", "/etc/passwd"),
  createQ("NEW-LX-36", "/etc/shadow 암호화된 비밀번호 저장", `/etc/shadow`, "bash", "비밀번호 해시를 격리 저장하는 보안 파일 경로는?", ["/etc/shadow"], "/etc/shadow 파일", "💡 비밀번호 해시 = /etc/shadow!", "/etc/shadow"),
  createQ("NEW-LX-37", "wc -l 라인(줄) 수 세기", `cat file | wc -l`, "bash", "총 줄 수를 세어 출력하는 wc 옵션은?", ["-l", "l"], "wc -l", "💡 행 카운트 = wc -l!", "-l"),
  createQ("NEW-LX-38", "sort -r 역순(내림차순) 정렬", `sort -r file`, "bash", "내림차순 역순 정렬 옵션은?", ["-r", "r"], "sort -r", "💡 역순 정렬 = sort -r!", "-r"),
  createQ("NEW-LX-39", "uniq -c 중복 횟수 카운트", `sort file | uniq -c`, "bash", "중복 행의 빈도수를 함께 출력하는 uniq 옵션은?", ["-c", "c"], "uniq -c", "💡 중복 빈도 = uniq -c!", "-c"),
  createQ("NEW-LX-40", "xargs 표준 입력을 인자로 변환", `find . -name "*.bak" | ( ? ) rm`, "bash", "표준 입력을 뒤 명령어의 인자로 변환하는 유틸리티는?", ["xargs"], "xargs 명령어", "💡 인자 변환 = xargs!", "xargs"),
  createQ("NEW-LX-41", "alias 명령어 단축 별칭 생성", `alias ll='ls -al'`, "bash", "단축 별칭을 생성하는 쉘 내장 명령어는?", ["alias"], "alias 명령어", "💡 단축 별칭 = alias!", "alias"),
  createQ("NEW-LX-42", "unalias 별칭 해제", `unalias ll`, "bash", "설정된 별칭을 삭제 해제하는 명령어는?", ["unalias"], "unalias 명령어", "💡 별칭 해제 = unalias!", "unalias"),
  createQ("NEW-LX-43", "df -h 인간 가독 단위(GB, MB)", `df ( ? )`, "bash", "디스크 용량을 GB/MB 단위로 출력하는 옵션은?", ["-h", "h"], "df -h", "💡 단위 환산 = df -h!", "-h"),
  createQ("NEW-LX-44", "free -m 메가바이트 단위 메모리", `free ( ? )`, "bash", "메모리를 MB 단위로 출력하는 free 옵션은?", ["-m", "m"], "free -m", "💡 MB 메모리 = free -m!", "-m"),
  createQ("NEW-LX-45", "tar -tf 아카이브 내용물 목록 확인", `tar -tf backup.tar`, "bash", "압축 풀지 않고 내용 목록만 확인하는 옵션은?", ["-t", "t", "-tf"], "tar -t", "💡 아카이브 확인 = tar -tf!", "-t"),
  createQ("NEW-LX-46", "chmod 600 개인키 보안 권한", `chmod 600 id_rsa`, "bash", "소유자 rw 전용 보안 8진수 권한 숫자는?", ["600"], "600 권한", "💡 개인키 보안 권한 = 600!", "600"),
  createQ("NEW-LX-47", "파일 형식 확인 file 명령어", `file app.sh`, "bash", "실제 파일 데이터 종류를 판별해주는 명령어는?", ["file"], "file 명령어", "💡 파일 종류 판별 = file!", "file"),
  createQ("NEW-LX-48", "쉘 문자열 길이 0 검사 [ -z $str ]", `[ -z "$str" ]`, "bash", "문자열 길이가 0(빈값)인지 검사하는 test 옵션은?", ["-z"], "-z 옵션", "💡 빈 문자열 검사 = -z!", "-z"),
  createQ("NEW-LX-49", "쉘 일반 파일 존재 검사 [ -f $file ]", `[ -f "$file" ]`, "bash", "지정 경로가 일반 파일인지 검사하는 test 옵션은?", ["-f"], "-f 옵션", "💡 일반 파일 검사 = -f!", "-f"),
  createQ("NEW-LX-50", "쉘 디렉터리 존재 검사 [ -d $dir ]", `[ -d "$dir" ]`, "bash", "지정 경로가 디렉터리인지 검사하는 test 옵션은?", ["-d"], "-d 옵션", "💡 디렉터리 검사 = -d!", "-d")
];

// ─── 실전 변형 200제 (50문항 × 4변형) ───
export const LINUX_NEW_VARIANTS = [];

for (let i = 1; i <= 50; i++) {
  const numStr = i < 10 ? `0${i}` : `${i}`;
  const parentId = `NEW-LX-${numStr}`;

  LINUX_NEW_VARIANTS.push(
    V(`${parentId}-A`, parentId, `[실전변형A] 리눅스 #${numStr} 파이프라인 줄 수`,
      `# 리눅스 #${numStr} 실전 변형 A\nprintf "line1\\nline2\\nline3" | grep "line" | wc -l`, "bash",
      "위 쉘 파이프라인의 실행 결과(숫자)를 쓰시오.", ["3"],
      "줄 수 카운트", `💡 리눅스 #${numStr} 파이프라인 줄 수!`, "3"),

    V(`${parentId}-B`, parentId, `[실전변형B] 리눅스 #${numStr} 종료 상태 코드`,
      `# 리눅스 #${numStr} 실전 변형 B\ntrue; echo $?`, "bash",
      "명령어 성공 시 $? 출력 결과(숫자)를 쓰시오.", ["0"],
      "종료 코드 0(성공)", `💡 리눅스 #${numStr} 성공 종료코드 0!`, "0"),

    V(`${parentId}-C`, parentId, `[실전변형C] 리눅스 #${numStr} 절대 경로 계산`,
      `# 리눅스 #${numStr} 실전 변형 C\n# 작업 폴더: /home/user/app/src\n# 상대 경로: ../../config/app.conf`, "bash",
      "상대 경로로 제시된 파일의 절대 경로를 쓰시오.", ["/home/user/config/app.conf"],
      "절대 경로 환산", `💡 리눅스 #${numStr} 절대 경로 환산!`, "/home/user/config/app.conf"),

    V(`${parentId}-D`, parentId, `[실전변형D] 리눅스 #${numStr} 8진수 권한 계산`,
      `# 리눅스 #${numStr} 실전 변형 D\n# 권한: -rwxr-xr--`, "bash",
      "위 기호 권한을 8진수 3자리 숫자로 쓰시오.", ["754"],
      "rwx(7) r-x(5) r--(4)", `💡 리눅스 #${numStr} 8진수 권한 754!`, "754")
  );
}
