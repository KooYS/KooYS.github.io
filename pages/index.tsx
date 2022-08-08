import { MyPage } from '@/@types/next-page';
import PostList from '@/containers/PostList';
import { getAllPosts } from '@/libs/post';
import styled from '@emotion/styled';

const Wrap = styled.div`
    width: 100%;
`;

const Home: MyPage = ({ allPosts }: any) => {
    return (
        <Wrap>
            <PostList list={allPosts} />
        </Wrap>
    );
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
