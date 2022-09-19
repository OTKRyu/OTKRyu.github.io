import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllSortedTags() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const tagObj = {};
  for (let i = 0; i < fileNames.length; i++) {
    const fullPath = path.join(postsDirectory, fileNames[i]);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    for (let j = 0; j < matterResult.data.tags.length; j++) {
      if (tagObj[matterResult.data.tags[j]]) {
        tagObj[matterResult.data.tags[j]] += 1;
      } else {
        tagObj[matterResult.data.tags[j]] = 1;
      }
    }
  }

  const results = Object.keys(tagObj);

  return results.map((result) => {
    return {
      name: result,
      count: tagObj[result],
    };
  });
}
