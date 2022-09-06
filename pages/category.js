import Link from "next/link";

import Layout from "../components/layout";
import { getDirs } from "../lib/dirs";
import utilStyles from "../styles/utils.module.css";

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Categories</h2>

        <ul className={utilStyles.list}>
          {dirs.map((dirs) => (
            <li className={utilStyles.listItem} key={dirs.name}>
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
