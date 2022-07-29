import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts, getPostBySlug } from '@/libs/post';
import rehypeHighlight from 'rehype-highlight';

const components = {
    Box: (props: any) => <p {...props} />,
    //코드 스타일링
    // code: CodeBlock,
};

export default function Post({ post }: any) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <div>
            {router.isFallback ? (
                <>isFallback</>
            ) : (
                <>
                    <article className="markdown-body">
                        <MDXRemote {...post.content} components={components} />
                    </article>
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
    const content = await serialize(post.content || '', {
        mdxOptions: { rehypePlugins: [rehypeHighlight] },
    });

    return {
        props: {
            post: {
                ...post,
                content,
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
