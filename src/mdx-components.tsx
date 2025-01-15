import Pre from "@/markdown/components/CodeBlock";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: (props) => <Pre {...props} />,
    ...components,
  };
}
