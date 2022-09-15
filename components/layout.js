import Head from "next/head";

import Navbar from "./navbar";
import Footer from "./footer";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <header></header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
