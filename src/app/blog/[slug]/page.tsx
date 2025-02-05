import Img from "@/markdown/components/Image";
import LinkPreview from "@/markdown/components/LinkPreview";
import { getMarkdownFile, getMarkdownFiles } from "@/lib/server/utils";
import { format } from "date-fns";
import { MDXContent } from "@/mdx-components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = getMarkdownFile(slug);
  const { metadata, content } = post;
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <main className="prose prose-p:text-slate-900 prose-p:text-lg prose-h1:leading-snug prose-p:leading-loose prose-a:text-blue-600 mx-auto p-5 max-w-screen-lg">
        <img src={metadata.coverImage} alt={metadata.title} />
        <div className="text-2xl font-bold">{metadata.title}</div>
        <div className="text-sm text-gray-400 my-1">{metadata.excerpt}</div>
        <div className="text-sm text-gray-500">
          {metadata.date ? format(metadata.date, "yyyy-MM-dd HH:mm") : "-"}
        </div>
        {MDXContent({
          content,
          components: {
            Img: (props: React.ComponentProps<typeof Img>) => (
              <Img {...props} />
            ),
            LinkPreview: (props: React.ComponentProps<typeof LinkPreview>) => (
              <LinkPreview {...props} />
            ),
          },
        })}
      </main>
    </div>
  );
}

export function generateStaticParams() {
  const files = getMarkdownFiles();
  return files.map((file) => ({
    slug: file.slug.replace(/\.mdx$/, ""),
  }));
}

export const dynamicParams = false;
