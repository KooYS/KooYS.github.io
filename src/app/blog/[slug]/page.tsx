import { getSlugMarkdownFiles } from "@/lib/utils";
import Link from "next/link";
import Img from "@/markdown/components/Image";
import LinkPreview from "@/markdown/components/LinkPreview";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/markdown/${slug}.mdx`);
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <header className="flex justify-between items-center p-5 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>Blog</Link>
        </h1>
      </header>
      <main className="prose prose-p:text-slate-900 prose-p:text-lg prose-h1:leading-snug prose-p:leading-loose prose-a:text-blue-600 mx-auto p-5">
        <Post
          components={{
            Img: (props: React.ComponentProps<typeof Img>) => (
              <Img {...props} />
            ),
            LinkPreview: (props: React.ComponentProps<typeof LinkPreview>) => (
              <LinkPreview {...props} />
            ),
          }}
        />
      </main>
    </div>
  );
}

export function generateStaticParams() {
  const paths = getSlugMarkdownFiles();
  return paths;
}

export const dynamicParams = false;
