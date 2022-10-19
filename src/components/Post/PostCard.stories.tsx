import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import _PostCard from './PostCard';

const BlogListWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${(props) => props.theme.mq.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
    row-gap: 80px;
    column-gap: 20px;
    width: 100%;
`;

export default {
    title: 'Components/Post/PostCard',
    component: _PostCard,
} as ComponentMeta<typeof _PostCard>;

const PostCardTemplate: ComponentStory<typeof _PostCard> = (args) => {
    return (
        <BlogListWrap>
            <_PostCard {...args} />
        </BlogListWrap>
    );
};

export const PostCard = PostCardTemplate.bind({});
PostCard.args = {
    item: {
        title: '[AWS] CodeBuild, CodeDeploy, CodePipeline으로 node 배포하기',
        date: '2022-03-21T21:23:00',
        slug: 'slug',
        coverImage: '/images/post/common/aws.png',
        excerpt:
            '요즘 자주 CI/CD의 작업을 하게 되는 것 같다. 나중에 같은 스펙으로 CI/CD를 만들 수 있기 때문에 지금 다시 정리를 해보려고 한다. 순서대로 따라하면 배포가 자동으로 되도록 정리를 하고자 한다. 어렴풋 기억나는 상태에서 읽으면 금방 따라할 수 있는 글이다.',
    },
};
