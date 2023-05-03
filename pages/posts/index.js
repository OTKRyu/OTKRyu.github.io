import Link from "next/link";

import Layout from "../../components/layout";
import Date from "../../components/date";
import { getSortedPostsData } from "../../lib/posts";

export default function Post({ allPostsData }) {
  return (
    <Layout>
      <section className="bg-white border rounded my-3 w-full h-full p-5">
        <h1 className="text-3xl">Posts</h1>
        <hr className="my-3"></hr>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="border rounded p-3 hover:underline">
              <Link href={`/posts/${id}`}>
                <a className="text-xl">{title}</a>
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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
