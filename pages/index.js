import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home() {
  return (
    <Layout>
      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Blog</h2>
      </section>
    </Layout>
  );
}
