import { getAllPosts } from '@/libs/post';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const Wrap = styled.div`
    width: 100%;
    height: 5000px;
    background-color: black;
`;
const Home: NextPage & { description?: string } = ({ allPosts }: any) => {
    console.log(allPosts);

    return (
        <Wrap>
            <NextSeo title="Home" description="Home" />
        </Wrap>
    );
};

Home.displayName = 'Home';
Home.description = 'HomeTie';
export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ]);

    return {
        props: { allPosts },
    };
};

export default Home;
