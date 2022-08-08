import styled from '@emotion/styled';
import React from 'react';
import PostCard, { PostItem } from '@/components/PostCard';

interface Props {
    list: PostItem[];
}

const Container = styled.div``;
const BlogListWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${(props) => props.theme.mq.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
    row-gap: 50px;
    column-gap: 20px;
    width: 100%;
`;

const PostList: React.FC<Props> = ({ list }) => {
    return (
        <Container>
            <BlogListWrap>
                {list.map((el, index) => {
                    return <PostCard key={index} item={el} />;
                })}
            </BlogListWrap>
        </Container>
    );
};

export default PostList;
