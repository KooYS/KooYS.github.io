import React from "react";
import Link from "next/link";
import { getMarkdownFiles } from "@/lib/server/utils";

const Page = () => {
  return (
    <div className="space-y-10">
      {getMarkdownFiles().map(({ metadata, slug }) => {
        return (
          <div key={slug}>
            <img src={metadata.coverImage} alt={metadata.title} />
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
