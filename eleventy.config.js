export default function (eleventyConfig) {
  // public/ 아래 파일(favicon, 이미지)은 사이트 루트로 그대로 복사
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  // 마크다운 제목(h2~h4)에 id 를 붙여서 목차에서 링크할 수 있게 한다
  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-");
  eleventyConfig.amendLibrary("md", (md) => {
    md.core.ruler.push("heading_ids", (state) => {
      const used = new Map();
      state.tokens.forEach((token, i) => {
        if (token.type !== "heading_open" || token.tag === "h1") return;
        const base = slugify(state.tokens[i + 1].content) || "section";
        const n = used.get(base) || 0;
        used.set(base, n + 1);
        token.attrSet("id", n ? `${base}-${n}` : base);
      });
    });
  });

  // 렌더된 본문에서 h2, h3 를 뽑아 [{ id, text, children }] 목차를 만든다
  eleventyConfig.addFilter("toc", (html) => {
    const toc = [];
    for (const [, level, id, inner] of html.matchAll(/<h([23]) id="([^"]+)">(.*?)<\/h\1>/g)) {
      const item = { id, text: inner.replace(/<[^>]+>/g, ""), children: [] };
      if (level === "3" && toc.length) toc.at(-1).children.push(item);
      else toc.push(item);
    }
    return toc;
  });

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
