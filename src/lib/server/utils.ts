import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  excerpt: string;
  coverImage: string;
  date?: string;
  status?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match ? match![1] : "";
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  const result = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });

  return result.filter(({ metadata }) => metadata?.status !== "pending");
}
function getMDXFile(dir: string, file: string) {
  const { metadata, content } = readMDXFile(path.join(dir, file));
  const slug = path.basename(file, path.extname(file));
  return {
    metadata,
    slug,
    content,
  };
}

export function getMarkdownFiles() {
  return getMDXData(path.join(process.cwd(), "src/markdown"));
}
export function getMarkdownFile(slug: string) {
  return getMDXFile(path.join(process.cwd(), `src/markdown`), `${slug}.mdx`);
}
