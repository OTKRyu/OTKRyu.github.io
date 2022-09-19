import Link from "next/link";

import Layout from "../../components/layout";
import { getAllSortedTags } from "../../lib/tags";

export async function getStaticProps() {
  const tags = getAllSortedTags();
  return {
    props: {
      tags,
    },
  };
}

export default function Tag({ tags }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Tags</h2>

        <ul>
          {tags.map((tag) => (
            <li key={tag.name}>
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
