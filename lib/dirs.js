import fs from "fs";
import path from "path";

const pathToDirectory = path.join(process.cwd(), "pages");

export function getDirs() {
  const dirs = fs
    .readdirSync(pathToDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => {
      return {
        cnt: getCntInDir(item.name),
        name: item.name,
      };
    });
  return dirs;
}

export function getCntInDir(dir) {
  const pathToCategoryDirectory = path.join(pathToDirectory, dir);
  const cnt = fs.readdirSync(pathToCategoryDirectory).length;
  return cnt;
}
