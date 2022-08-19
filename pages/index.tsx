import { MyPage } from '@/@types/next-page';
import PostList from '@/containers/PostList';
import { getAllPosts } from '@/libs/post';
import styled from '@emotion/styled';
import SummaryCover from '@/components/Main/SummaryCover';
const Wrap = styled.div`
    padding-left: calc(min(16px, 8vw));
    padding-right: calc(min(16px, 8vw));
    padding-bottom: calc(max(3vh, 20px));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: flex-start;
    max-width: 720px;
`;

const Home: MyPage = ({ allPosts }: any) => {
    const summary = {
        title: 'BloKoo',
        date: '',
        coverImage: './images/main/bg.jpg',
        avatar: 'https://avatars.githubusercontent.com/u/17160263?v=4',
    };

    return (
        <>
            <SummaryCover {...summary} />
            <Wrap>
                <PostList list={allPosts} />
            </Wrap>
        </>
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
        'status',
    ]).filter((e) => e.status === undefined || e.status !== 'pending');

    return {
        props: { allPosts },
    };
};

export default Home;
