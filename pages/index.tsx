import { MyPage } from '@/@types/next-page';
import { getAllPosts } from '@/libs/post';
import styled from '@emotion/styled';

const Wrap = styled.div`
    width: 100%;
    height: 5000px;
    background-color: black;
`;

const Home: MyPage = ({ allPosts }: any) => {
    console.log(allPosts);

    return <Wrap></Wrap>;
};

Home.title = 'Home';
Home.description = '환영합니다.';
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
