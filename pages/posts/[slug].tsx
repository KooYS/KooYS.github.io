import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import markdownToHtml from '@/libs/markdownToHtml';
import { getAllPosts, getPostBySlug } from '@/libs/post';
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
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
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
    const content = await markdownToHtml(post.content || '');

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