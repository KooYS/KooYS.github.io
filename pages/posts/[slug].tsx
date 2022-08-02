import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts, getPostBySlug } from '@/libs/post';
import rehypeHighlight from 'rehype-highlight';
import Utterances from '@/components/Utterances';
import CodeSandBox from '@/components/CodeSandBox';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc, {
    HtmlElementNode,
    ListItemNode,
} from '@jsdevtools/rehype-toc';
const components = {
    Box: (props: any) => <p {...props} />,
    CodeSandBox: (props: any) => <CodeSandBox {...props} />,
};

export default function Post({ post }: any) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    console.log(post.headings);
    return (
        <div>
            {router.isFallback ? (
                <>isFallback</>
            ) : (
                <>
                    <article className="markdown-body">
                        <MDXRemote {...post.content} components={components} />
                    </article>
                    <Utterances />
                </>
            )}
        </div>
    );
}

export async function getStaticProps({ params }: any) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ]);
    let headings: HtmlElementNode[] = [];
    const content = await serialize(post.content || '', {
        mdxOptions: {
            rehypePlugins: [
                rehypeHighlight,
                rehypeSlug,
                rehypeAutolinkHeadings,
                [
                    rehypeToc,
                    {
                        headings: ['h1', 'h2'],
                        customizeTOC: () => false,
                        customizeTOCItem: (
                            tocItem: ListItemNode,
                            heading: HtmlElementNode
                        ) => headings.push(heading),
                    },
                ],
            ],
        },
    });

    return {
        props: {
            post: {
                ...post,
                content,
                headings,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
