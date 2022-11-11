# PoipoEngine
[더시드 모방 엔진](https://github.com/gdl-blue/imitated-seed-2)이 개발자 부재 + 문제 때문에 열받아서 포크해서 개조할려는 엔진이다.
## 기초 사용 방법
- `npm i`를 실행한다.
- `node server`를 실행한다.

## 추가 도구
- undelete-thread.js: 삭제된 토론 복구
- namuwiki-importer.js: 나무위키 데이타베이스 덤프 가져오기
- install.sh: css, js, skins 자동 다운기 ~~근데 이미 있는데 할 필요가 있을까~~
## config.json
- config.json 수정으로 숨겨진 설정을 제어할 수 있다.
  - `disable_email`: (기본값 false) 전자우편 인증을 끈다.
  - `disable_login_history`: (기본값 false) 로그인 내역을 기록하지 않게 한다.
  - `use_external_js`: (기본값 false) theseed.js, jQuery 등을 [theseed.io](https://theseed.io)에서 불러온다.
  - `use_external_css`: (기본값 false) wiki.css 등을 [theseed.io](https://theseed.io)에서 불러온다.
  - `allow_account_deletion`: (기본값 false) 계정 탈퇴를 허용한다.
  - `allow_account_rename`: (기본값 false) 닉네임 변경을 허용한다.
  - `search_host`: (기본값 "127.5.5.5") 검색 서버 호스트 주소
  - `search_port`: (기본값 25005) 검색 서버 포트
  - `search_autostart`: (기본값 false) 같은 디렉토리에 검색 서버 프로그램(search.js)이 있을 경우 위키 서버 시작 시 검색 서버를 같이 시작시킨다.
  - `no_username_format`: (기본값 false) 한글, 공백 등의 특수문자를 사용자 이름으로 쓸 수 있게 하고 길이 제한을 없앤다.
  - `owners`: (기본값 \[\]) /admin/config에 접속할 수 있는 사용자 이름 배열
  - `reserved_usernames`: (기본값 \["namubot"\]) 이 배열 안에 있는 닉네임으로 계정을 만들 수 없다.
  - `theseed_version`: (기본값 "4.12.0") [the seed 판올림 기록](https://namu.wiki/w/the%20seed/%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8#toc)을 참고하여, 모방할 the seed 엔진의 버전을 지정한다(형식 주의! 4.4(X), "4.4"(X), 4.4.1(X), "4.4.1"(O) 문자열 x.y.z 형식으로). 예를 들어, "4.4.2"로 할 경우, v4.4.3에 추가된 쓰레드 주제/문서 변경 기능을 사용할 수 없고, "4.18.0"으로 할 경우 IPACL과 사용자 차단 기능이 비활성화되고 ACLGroup가 활성화되며 ACL에서 이름공간ACL 실행 action를 사용할 수 있다.
  - `replicate_theseed_license`: (기본값 false) 라이선스 페이지를 더시드 엔진처럼 띄운다. 가급적이면 쓰지 않는 것을 권장한다.
  - `namuwiki_exclusive`: (기본값 false) 나무위키 전용 기능(경고 ACL 그룹, 문서 이전 판 경고 등)을 활성화한다.
  - `enable_captcha`: (기본값 false) 보안문자를 쓰게 한다.
  - `block_ip`: (기본값 []) 접속을 차단할 IP를 지정한다. CIDR는 지원하지 않는다.
  이 외에도 병아리 개발자가 숨겨놓은 설정이 있다. 그거는 server.js에서 hostconfig으로 시작되는거 찾으면 된다.

## 라이선스
[![라이선스](https://img.shields.io/badge/license-BSD%203--Clause-lightgrey.svg)](./LICENSE)

