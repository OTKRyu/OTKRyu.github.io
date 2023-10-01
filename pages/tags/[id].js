import Link from "next/link";

import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getTagPosts, getAllTags } from "../../lib/tags";

export default function Post({ tagName, tagPosts }) {
  return (
    <Layout>
      <Seo id={tagName} title={tagName} tags={[tagName]} />
      <section className="bg-white border rounded my-3 w-full h-full p-3">
        <h1 className="text-3xl">{tagName}</h1>
        <hr className="my-3"></hr>
        <ul>
          {tagPosts.map(({ id, date, title }) => (
            <li key={id} className="rounded border p-3 hover:underline">
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
  return {
    props: {
      tagName: params.id,
      tagPosts: tagPosts,
    },
  };
}
