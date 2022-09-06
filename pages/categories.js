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
  console.log(dirs);
  return (
    <Layout>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Categories</h2>

        <ul className={utilStyles.list}>
          {dirs.map((dir) => (
            <li className={utilStyles.listItem} key={dir}>
              <Link href={`/${dir}`}>
                <a>{dir}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
