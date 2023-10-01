import Link from "next/link";

import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { getAllSortedTags } from "../../lib/tags";

export default function Tag({ tags }) {
  return (
    <Layout>
      <Seo id={"tags"} title={"tags"} tags={["tags"]} />
      <section className="bg-white border rounded my-3 w-full h-full p-3">
        <h1 className="text-3xl">Tags</h1>
        <hr className="my-3"></hr>
        <ul>
          {tags.map((tag) => (
            <li
              key={tag.name}
              className="rounded border p-3 my-2 hover:underline"
            >
              <Link href={`/tags/${tag.name}`}>
                <a>
                  {tag.name}({tag.count})
                </a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const tags = getAllSortedTags();
  return {
    props: {
      tags,
    },
  };
}
