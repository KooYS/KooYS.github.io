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
import SummaryCover from '@/components/PostDetail/SummaryCover';
import styled from '@emotion/styled';
import TableOfContents from '@/components/PostDetail/TableOfContents';
const components = {
    Box: (props: any) => <p {...props} />,
    CodeSandBox: (props: any) => <CodeSandBox {...props} />,
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ContentWrap = styled.div`
    padding-left: calc(min(16px, 8vw));
    padding-right: calc(min(16px, 8vw));
    padding-bottom: calc(max(5vh, 32px));
    margin: 0 auto;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: flex-start;
    max-width: 720px;
    flex-direction: column;

    @media only screen and (min-width: 1300px) {
        flex-direction: row;
    }
`;

export default function Post({ post }: any) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    console.log(post.headings);
    return (
        <Container>
            {router.isFallback ? (
                <>isFallback</>
            ) : (
                <>
                    <SummaryCover
                        title={post?.title}
                        date={post?.date}
                        coverImage={post?.coverImage}
                    />
                    <ContentWrap>
                        <article className="markdown-body">
                            <MDXRemote
                                {...post.content}
                                components={components}
                            />
                        </article>
                        <TableOfContents list={post.headings} />
                    </ContentWrap>
                    <Utterances />
                </>
            )}
        </Container>
    );
}

export async function getStaticProps({ params }: any) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'coverImage',
    ]);
    // let headings: HtmlElementNode[] = [];
    let headings: any[] = [];
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
                        ) => {
                            headings.push({
                                heading: heading,
                            });
                            return true;
                        },
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
