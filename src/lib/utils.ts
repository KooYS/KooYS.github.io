import fs from "fs";
import path from "path";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSlugMarkdownFiles() {
  const files = fs.readdirSync(path.join(process.cwd(), "src/markdown"));
  const paths = files
    .filter((file) => file.includes(".mdx"))
    .map((filename) => ({
      slug: filename.replace(".mdx", ""),
    }));
  return paths;
}
