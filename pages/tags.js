import Link from "next/link";

import Layout from "../components/layout";
import { getDirs } from "../lib/dirs";

export async function getStaticProps() {
  const dirs = getDirs();
  return {
    props: {
      dirs,
    },
  };
}

export default function Post({ dirs }) {
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2>Tags</h2>

        <ul>
          {dirs.map((dirs) => (
            <li key={dirs.name}>
              <Link href={`/${dirs.name}`}>
                <a>
                  {dirs.name}({dirs.cnt})
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
