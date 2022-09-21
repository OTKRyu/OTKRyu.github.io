import Link from "next/link";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getTagPosts, getAllTags } from "../../lib/tags";

export default function Post({ tagName, tagPosts }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>{tagName}</h2>

        <ul>
          {tagPosts.map(({ id, date, title }) => (
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

export async function getStaticPaths() {
  const paths = getAllTags();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tagPosts = await getTagPosts(params.id);
  console.log(tagPosts);
  return {
    props: {
      tagPosts: tagPosts,
    },
  };
}
