import fs from "fs";
import path from "path";

const pathToDirectory = path.join(process.cwd(), "pages");

export function getDirs() {
  const dirs = fs
    .readdirSync(pathToDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
  return dirs;
}
