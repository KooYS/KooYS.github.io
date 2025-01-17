import React from "react";
import Link from "next/link";
import { getMarkdownFiles, Metadata } from "@/lib/server/utils";

const CoverImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      src={src && src !== "" ? src : "/images/og.png"}
      alt={alt}
      className="aspect-video object-cover rounded-t-md border-b"
    />
  );
};
const Item = ({ metadata, slug }: { metadata: Metadata; slug: string }) => {
  return (
    <div className="border rounded-md col-span-1 h-full">
      <CoverImage src={metadata.coverImage} alt={metadata.title} />
      <div className="px-4 py-4 space-y-1">
        <p className="font-semibold text-lg">{slug}</p>
        <p className="line-clamp-2 text-gray-400 text-sm">
          {metadata.excerpt ? metadata.excerpt : "..."}
        </p>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <main className="max-w-screen-lg m-auto my-10">
      <div className="gap-4 grid grid-cols-2">
        {getMarkdownFiles().map((el) => {
          return (
            <Link key={el.slug} href={`/blog/${el.slug}`}>
              <Item {...el} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
