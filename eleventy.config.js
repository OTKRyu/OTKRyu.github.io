import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // public/ 아래 파일(favicon, 이미지)은 사이트 루트로 그대로 복사
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  // 최신 글이 먼저 오도록 정렬된 글 목록
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("posts/*.md").sort((a, b) => b.date - a.date)
  );

  // [{ name, posts }] 형태의 태그 목록 (이름순)
  eleventyConfig.addCollection("tagList", (api) => {
    const byTag = new Map();
    for (const post of api.getFilteredByGlob("posts/*.md")) {
      for (const tag of post.data.tags || []) {
        if (!byTag.has(tag)) byTag.set(tag, []);
        byTag.get(tag).push(post);
      }
    }
    return [...byTag.keys()].sort().map((name) => ({
      name,
      posts: byTag.get(name).sort((a, b) => b.date - a.date),
    }));
  });

  eleventyConfig.addFilter("readableDate", (date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("isoDate", (date) => date.toISOString().slice(0, 10));
  eleventyConfig.addFilter("head", (items, n) => items.slice(0, n));
  eleventyConfig.addFilter("findPost", (posts, id) =>
    posts.find((post) => post.fileSlug === id)
  );

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    markdownTemplateEngine: false,
  };
}
