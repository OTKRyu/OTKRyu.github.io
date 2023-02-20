import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <section className="bg-white border rounded my-3 w-full h-full p-5">
        <h1 className="text-3xl">Home</h1>
        <hr className="my-3"></hr>
        <p>안녕하세요, OTKRyu의 블로그입니다.</p>
        <p>개발과 관련된 포스트들을 올리는 블로그입니다.</p>
        <p>대단한 내용을 없더라도, 도움이 되었으면 좋겠습니다.</p>
      </section>
    </Layout>
  );
}
