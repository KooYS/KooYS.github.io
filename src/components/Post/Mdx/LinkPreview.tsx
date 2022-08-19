import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

interface Props {
    href: string;
}

interface Metadata {
    title: string;
    description: string;
    image: string;
    url: string;
}

const Container = styled.a`
    width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
    height: 200px;
    ${(props) => props.theme.mq.mobile} {
        height: 100px;
    }
    border: 1px solid var(--color-border-default);
    text-decoration: none;
    z-index: 1;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ImageWrap = styled.div`
    aspect-ratio: 1;
    width: 200px;

    ${(props) => props.theme.mq.mobile} {
        width: 100px;
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const ContentWrap = styled.div`
    position: absolute;
    left: 201px;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 33px 46px 0 39px;

    ${(props) => props.theme.mq.mobile} {
        left: 100px;
        padding: 13px 12px 0 20px;
    }
`;
const Title = styled.div`
    color: var(--color-fg-default);
    font-size: 22px;
    line-height: 28px;
    max-width: 467px;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 0 10px 0 !important;
    overflow: hidden;

    ${(props) => props.theme.mq.mobile} {
        font-size: 16px;
        -webkit-line-clamp: 1;
    }
`;
const Description = styled.div`
    margin: 0px;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--color-fg-subtle);
    max-height: 42px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;

    ${(props) => props.theme.mq.mobile} {
        display: none;
    }
`;

const Url = styled.div`
    position: absolute;
    bottom: 24px;
    font-family: AvenirNext, sans-serif;
    font-size: 14px;
    color: var(--color-fg-subtle);
    margin: 0;

    ${(props) => props.theme.mq.mobile} {
        bottom: 10px;
    }
`;
const LinkPreview: React.FC<Props> = ({ href }) => {
    const [metaData, setMetaData] = useState<Metadata | null>(null);
    const isFetch = useRef<boolean>(false);
    const fetchMeatData = async (link: string) => {
        if (link.startsWith('http'))
            return await axios.get('/link/' + link.split('://')[1]);
        else return await axios.get('/link/' + link);
    };

    const getMetaTags = async (link: string) => {
        try {
            const { data } = await fetchMeatData(link);
            setMetaData(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!metaData && !isFetch.current) {
            getMetaTags(href);
            isFetch.current = true;
        } else {
            console.log(metaData);
        }
    }, [metaData]);
    return (
        <>
            {metaData && (
                <Container href={href} target="_blank">
                    {metaData.image && (
                        <ImageWrap>
                            <img src={metaData.image} alt={metaData.title} />
                        </ImageWrap>
                    )}

                    <ContentWrap
                        style={
                            !metaData.image ? { left: 0, maxWidth: '100%' } : {}
                        }>
                        <Title>{metaData.title}</Title>
                        <Description>{metaData.description}</Description>
                        {href && <Url>{new URL(href).hostname}</Url>}
                    </ContentWrap>
                </Container>
            )}
        </>
    );
};

export default LinkPreview;
