import styled from '@emotion/styled';
import React from 'react';
import { format } from 'date-fns';

export interface PostItem {
    title: string;
    date: string;
    slug: string;
    coverImage: string;
    excerpt: string;
}

const Wrap = styled.a`
    font-size: 14px;

    &:hover {
        background: var(--bg-color-0);
    }
`;
const ImageWrap = styled.div`
    width: 100%;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
        object-fit: cover;
        object-position: center 10%;
        aspect-ratio: 3/2;
    }
    .light & img {
        border: 1px solid #f0f0f0;
    }
`;

const ContentBody = styled.div`
    padding: 10px;
    & div {
        padding: 4px 0;
    }
`;
const StyledTitle = styled.div`
    font-size: 2em;
    white-space: unset;
    position: relative;
    top: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const StyledDate = styled.div``;

const StyledShortDescription = styled.div`
    line-height: 1.5;
    white-space: unset;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

interface Props {
    item: PostItem;
}
const PostCard: React.FC<Props> = ({ item }) => {
    // alert(item.date);
    return (
        <Wrap href={`/posts/${item.slug.toLowerCase()}`}>
            <ImageWrap>
                <img src={item.coverImage} alt={item.slug} />
            </ImageWrap>
            <ContentBody>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledShortDescription>{item.excerpt}</StyledShortDescription>
                {item.date && (
                    <StyledDate>
                        {format(new Date(item.date), 'yyyy-MM-dd')}
                    </StyledDate>
                )}
            </ContentBody>
        </Wrap>
    );
};

export default PostCard;
