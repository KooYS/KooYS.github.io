import Pre from "@/markdown/components/CodeBlock";
import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <Pre {...props} />,
    ...components,
  };
}

// export async function getMDXComponents({
//   content,
//   components,
// }: {
//   content: string;
//   components: Readonly<MDXComponents> | null | undefined;
// }) {
//   return await (<MDXRemote source={content} components={components} />);
// }

export async function MDXContent({
  content,
  components,
}: {
  content: string;
  components: Readonly<MDXComponents> | null | undefined;
}) {
  const result = await MDXRemote({
    source: content,
    components: components,
  });

  return result;
}
