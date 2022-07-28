import { getAllPosts } from '@/libs/post';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Wrap = styled.div`
    width: 100%;
    height: 5000px;
    background-color: black;
`;
const Home: NextPage = ({ allPosts }: any) => {
    console.log(allPosts);
    return <Wrap></Wrap>;
};

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
