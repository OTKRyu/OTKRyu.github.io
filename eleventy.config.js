export default function (eleventyConfig) {
  // public/ 아래 파일(favicon, 이미지)은 사이트 루트로 그대로 복사
  eleventyConfig.addPassthroughCopy({ public: "/" });
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.ignores.add("CLAUDE.md");

  // 마크다운 제목(h2~h6)에 id 를 붙여서 목차에서 링크할 수 있게 한다
  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, "")
      .replace(/\s+/g, "-");
  eleventyConfig.amendLibrary("md", (md) => {
    md.core.ruler.push("heading_ids", (state) => {
      const used = new Set();
      state.tokens.forEach((token, i) => {
        if (token.type !== "heading_open" || token.tag === "h1") return;
        // 같은 id 가 이미 있으면 -1, -2 ... 를 붙인다
        const base = slugify(state.tokens[i + 1].content) || "section";
        let id = base;
        for (let n = 1; used.has(id); n++) id = `${base}-${n}`;
        used.add(id);
        token.attrSet("id", id);
      });
    });
  });

  // 렌더된 본문에서 h2~h6 를 뽑아 제목 레벨대로 중첩된 [{ id, text, children }] 목차를 만든다
  eleventyConfig.addFilter("toc", (html) => {
    const root = { level: 1, children: [] };
    const stack = [root];
    let count = 0;
    for (const [, level, id, inner] of html.matchAll(/<h([2-6]) id="([^"]+)">(.*?)<\/h\1>/g)) {
      const item = { level: Number(level), id, text: inner.replace(/<[^>]+>/g, ""), children: [] };
      // 자기보다 같거나 깊은 제목은 닫고, 남은 맨 위 제목의 자식으로 붙인다
      while (stack.at(-1).level >= item.level) stack.pop();
      stack.at(-1).children.push(item);
      stack.push(item);
      count++;
    }
    return { items: root.children, count };
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
