import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Home() {
  return (
    <Layout>
      <Seo id={"about"} title={"about"} tags={"about"} />
      <section className="bg-white flex justify-between border rounded my-3 w-full h-full">
        <div className="prose lg:prose-xl px-2 m-auto my-4 sm:my-16">
          <h1>About</h1>
          <hr></hr>
          <h2>간단 소개글</h2>
          <p>
            안녕하세요, 유태규입니다.
            <br></br>
            ssafy에서 교육받은 것을 시작으로 개발자 생활을 시작했습니다.
            <br></br>
            frontend, backend, infra 등 다양한 업무를 경험하고 있습니다.
            <br></br>
            무엇이든 이해를 바탕으로 문제를 해결하려고 하는 편이며, 모르는 채로
            그냥 사용하는 것을 싫어하는 편입니다.
          </p>
          <h2>스택</h2>
          <hr></hr>
          <ul>
            <li>
              <strong>Backend</strong>
              <p>express, flask, mysql, redis, nginx, apache, docker, linux</p>
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
