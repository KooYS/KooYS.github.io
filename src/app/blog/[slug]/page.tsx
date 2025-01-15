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
        <h1 className="text-2xl font-bold">Company Name</h1>
      </header>
      <main className="prose prose-p:text-slate-900 prose-p:text-lg prose-h1:leading-snug prose-p:leading-loose prose-a:text-blue-600 mx-auto p-5">
        <Post />
      </main>
    </div>
  );
}

// export function generateStaticParams() {
//   return [{ slug: "welcome" }, { slug: "about" }];
// }

export const dynamicParams = false;
