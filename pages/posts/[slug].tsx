import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getAllPosts, getPostBySlug } from '@/libs/post';
import rehypeHighlight from 'rehype-highlight';
import Utterances from '@/components/Post/Utterances';
import CodeSandBox from '@/components/Post/Mdx/CodeSandBox';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc, {
    HtmlElementNode,
    ListItemNode,
} from '@jsdevtools/rehype-toc';

import SummaryCover from '@/components/Post/PostDetail/SummaryCover';
import styled from '@emotion/styled';
import TableOfContents from '@/components/Post/PostDetail/TableOfContents';
import { NextSeo } from 'next-seo';
import LinkPreview from '@/components/Post/Mdx/LinkPreview';
import ImageForMdx from '@/components/Post/Mdx/Image';
import { useMemo } from 'react';

const Container = styled.div`
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

    h1 {
        scroll-margin-top: 60px;
    }
    h2 {
        scroll-margin-top: 54px;
    }
`;

const ContentWrap = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 1300px) {
        flex-direction: row;
        width: calc((100vw + 720px) / 2);
        & article {
            width: 720px;
            max-width: 720px;
        }
    }
`;

export default function Post({ post }: any) {
    const router = useRouter();

    const components = useMemo(
        () => ({
            Box: (props: any) => <p {...props} />,
            CodeSandBox: (props: any) => <CodeSandBox {...props} />,
            LinkPreview: (props: any) => <LinkPreview {...props} />,
            Img: (props: any) => (
                <ImageForMdx path={`../images/post/${post.slug}/`} {...props} />
            ),
        }),
        [post]
    );

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <>
            <NextSeo
                title={post?.title}
                description={post?.excerpt}
                openGraph={{
                    title: post?.title,
                    description: post?.excerpt,
                    images: [
                        {
                            url: post?.coverImage,
                        },
                    ],
                }}
            />
            {router.isFallback ? (
                <>isFallback</>
            ) : (
                <>
                    <SummaryCover
                        title={post?.title}
                        date={post?.date}
                        coverImage={post?.coverImage}
                    />
                    <Container>
                        <ContentWrap>
                            <article className="markdown-body">
                                <MDXRemote
                                    {...post.content}
                                    components={components}
                                />
                            </article>
                            <TableOfContents list={post.headings} />
                        </ContentWrap>
                    </Container>
                    <Utterances />
                </>
            )}
        </>
    );
}

export async function getStaticProps({ params }: any) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'excerpt',
        'content',
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
                        ) => {
                            headings.push(heading);
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
