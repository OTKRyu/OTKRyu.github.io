import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="bg-white flex justify-between border rounded my-3 w-full h-full">
        <div className="prose lg:prose-xl px-2 m-auto my-4 sm:my-16">
          <h1>About</h1>
          <hr></hr>
          <h2>간단 소개글</h2>
          <p>
            안녕하세요, 유태규입니다.
            <br></br>
            ssafy에서 교육받은 것을 시작으로 개발자 생활을 시작했으며, 다날
            핀테크에서 웹 개발자를 하고 있습니다.
            <br></br>
            회사에서 주로 하고 있는 일은 웹과 관련된 전반적인 일로, python flask
            서버 개발, 웹 서버(was) 설정 및 교체, 프론엔드 개발 등의 일을 하고
            있습니다.
            <br></br>
            회사에서 사용하고 있는 프로그램은 apache, nginx, python, flask,
            javascript, vue, html, css, docker등을 주로 다루고 있습니다.
            <br></br>
            무엇이든 이해를 바탕으로 문제를 해결하려고 하는 편이며, 모르는 채로
            그냥 사용하는 것을 싫어하는 편입니다.
          </p>
          <h2>경력</h2>
          <hr></hr>
          <h3>다날 핀테크</h3>
          <hr></hr>
          <strong>재직 기간: 22.02 ~ 현재</strong>
          <h4>주요 업무</h4>

          <ul>
            <li>
              <div>
                <strong>ISMS 보안 조치</strong>
                <p>
                  ISMS 보안 조치 시행(docker, apache, redis 등)
                  <br></br>
                  linux 및 docker 원리 이해 및 설정 변경
                  <br></br>
                  redis 관련 원리 이해 및 설정 변경
                  <br></br>
                  apache 관련 원리 이해 및 설정 변경
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>웹 서버 교체</strong>
                <p>
                  apache에서 nginx로 기존 사용하던 설정 될 수 있는한 그대로 변경
                  <br></br>
                  flask, php 서비스 독립적인 모듈로 돌아갈 수 있도록 변경
                  <br></br>
                  브라우저 캐싱을 위한 헤더 설정
                  <br></br>
                  새로운 구조에 맞는 로그 시스템 구축
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>이용자 보호센터 개발 및 운영(웹사이트)</strong>
                <p>
                  신규 웹 사이트 개발 및 운영
                  <br></br>
                  backend: express, docker frontend: react
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>통합계정관리 솔루션 검토 및 데모 개발</strong>
                <p>
                  통합계정관리 솔루션 조사(keycloak, casbin) flask 서버와의 연동
                  데모버전 개발
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>자사 앱 구글 스프레드 시트 개발</strong>
                <p>
                  자사 앱 앱스토어 및 플레이스토어 리뷰 크롤러 개발
                  <br></br>
                  리뷰 데이터 등록용 구글 스프레드 시트 개발
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>기존 서비스 운영 및 유지보수</strong>
                <p>
                  서버 의존성 제거를 통해 배포 및 컨테이너화 용이하도록 변경
                  <br></br>
                  기존 컨네이터 기반 서비스 유지보수
                  <br></br>
                  서비스에 사용되는 정적 파일 관리
                  <br></br>
                  기존 소스 리팩토링(회귀 테스트 작성 및 리팩토링)
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>elk stack 개편</strong>
                <p>
                  로그 수집 개편(신규 로그 수집 및 검색 용이하도록 파서 수정)
                  <br></br>
                  elk 스택 설정 조정(ILM 정책, stack별 할당 메트릭 변경, 기존
                  에러 수정 등)
                </p>
              </div>
            </li>
            <li>
              <div>
                <strong>아틀라시안(클라우드) 툴 개편</strong>
                <p>
                  아틀라시안 전역 권한 설정 변경
                  <br></br>
                  컨플루언스 관리 정책 변경 및 권한 조정
                  <br></br>
                  지라 업무 정책 변경 및 권한 조정
                </p>
              </div>
            </li>
          </ul>
          <h2>스택</h2>
          <hr></hr>
          <ul>
            <li>
              <strong>Backend</strong>
              <p>express, flask, mysql, redis, nginx, apache, docker,</p>
            </li>
            <li>
              <strong>Devops</strong>
              <p>ELK stack, nexus</p>
            </li>
            <li>
              <strong>Frontend</strong>
              <p>vue, react</p>
            </li>
            <li>
              <strong>협업 툴</strong>
              <p>Jira, Confluence</p>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
