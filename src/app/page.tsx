import React from "react";
import { getSlugMarkdownFiles } from "@/lib/utils";
import Link from "next/link";

const Page = () => {
  return (
    <div className="space-y-10">
      {getSlugMarkdownFiles().map(({ slug }) => {
        return (
          <div key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
