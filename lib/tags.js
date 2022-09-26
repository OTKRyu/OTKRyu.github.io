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
  results.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });

  return results.map((result) => {
    return {
      name: result,
      count: tagObj[result],
    };
  });
}

export async function getTagPosts(tag) {
  const fileNames = fs.readdirSync(postsDirectory);
  const results = [];

  for (let i = 0; i < fileNames.length; i++) {
    const fullPath = path.join(postsDirectory, fileNames[i]);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    if (matterResult.data.tags.includes(tag)) {
      results.push({
        id: fileNames[i].replace(/\.md$/, ""),
        ...matterResult.data,
      });
    }
  }

  return results.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllTags() {
  const fileNames = fs.readdirSync(postsDirectory);
  const tagObj = {};
  for (let i = 0; i < fileNames.length; i++) {
    const fullPath = path.join(postsDirectory, fileNames[i]);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    for (let j = 0; j < matterResult.data.tags.length; j++) {
      tagObj[matterResult.data.tags[j]] = 1;
    }
  }

  const results = Object.keys(tagObj);

  return results.map((result) => {
    return {
      params: {
        id: result,
      },
    };
  });
}
