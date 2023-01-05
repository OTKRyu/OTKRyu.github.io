import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="bg-white flex justify-between border rounded my-3 w-full h-full">
        <div className="prose lg:prose-xl px-2 m-auto my-4 sm:my-16">
          <h1>About</h1>
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
          <h3>다날 핀테크</h3>
          <ul>
            <li>재직 기간: 22.02 ~ 현재</li>
            <li>주요 업무</li>
            <ol>
              <li>회사 홈페이지 관리</li>
              <li>통합 계정 관리 솔루션(keycloak, casbin) 검토 및 데모 개발</li>
              <li>vue를 이용한 신규 서비스 개발(웹 사이트, 모바일 웹뷰 등)</li>
              <li>웹서버 apache에서 nginx로 교체</li>
              <li>자사 앱 리뷰 크롤링 및 공유용 구글 스프레드 시트 개발</li>
              <li>ISMS 보안 조치(docker, apache, redis 등)</li>
              <li>
                이용자보호센터[https://carecenter.payprotocol.io] 개발 및 배포
              </li>
            </ol>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
