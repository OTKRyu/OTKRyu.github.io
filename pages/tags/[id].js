import Link from "next/link";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getTagData } from "../../lib/tags";

export default function Post({ allPostsData }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Posts</h2>

        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const tagData = await getTagData(params.id);
  return {
    props: {
      tagData,
    },
  };
}
