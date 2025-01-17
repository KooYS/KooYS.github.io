import Img from "@/markdown/components/Image";
import LinkPreview from "@/markdown/components/LinkPreview";
import { getMarkdownFile, getMarkdownFiles } from "@/lib/server/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/markdown/${slug}.mdx`);
  const { metadata } = await getMarkdownFile(slug);
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <main className="prose prose-p:text-slate-900 prose-p:text-lg prose-h1:leading-snug prose-p:leading-loose prose-a:text-blue-600 mx-auto p-5 max-w-screen-lg">
        <img src={metadata.coverImage} alt={metadata.title} />
        <div>{metadata.title}</div>
        <div>{metadata.excerpt}</div>
        <div>{metadata.date}</div>
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
  const files = getMarkdownFiles();
  return files.map((file) => ({
    slug: file.slug,
  }));
}

export const dynamicParams = false;
