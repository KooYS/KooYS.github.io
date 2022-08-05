import styled from '@emotion/styled';
import React from 'react';

export interface Blog {
    title: string;
    date: string;
    slug: string;
    coverImage: string;
    excerpt: string;
}

interface Props {
    list: Blog[];
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
const BlogWrap = styled.a``;
const ImageWrap = styled.div`
    width: 100%;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
        object-position: center 10%;
    }
`;

const Body = styled.div``;
const BlogList: React.FC<Props> = ({ list }) => {
    return (
        <Container>
            <BlogListWrap>
                {list.map((el, index) => {
                    return (
                        <BlogWrap key={index}>
                            <ImageWrap>
                                <img src={el.coverImage} alt={el.slug} />
                            </ImageWrap>
                            <Body>{el.title}</Body>
                        </BlogWrap>
                    );
                })}
            </BlogListWrap>
        </Container>
    );
};

export default BlogList;
