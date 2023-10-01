import React from "react";
import Head from "next/head";

const Seo = ({ id, title, tags }) => {
  const seoTags = ["otkryu"].concat(tags);
  const content = seoTags.join(",");
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://otkruy.github.io/posts/${id}`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta property="og:site_name" content="OTKRyu's blog" />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
};

export default Seo;
