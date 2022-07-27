import styled from '@emotion/styled';
import React from 'react';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 54px;
    background: transparent;
    box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 10%);
    -webkit-backdrop-filter: saturate(180%) blur(8px);
    backdrop-filter: saturate(180%) blur(8px);
    position: sticky;
    z-index: 200;
    width: 100%;
    max-width: 100vw;
`;

const Wrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    justify-content: space-between;
`;

const BreadcrumbsWrap = styled.div`
    display: flex;
    gap: 10px;

    & a {
        padding: 5px 10px;
    }

    & a:hover {
        background: #e6e6e6;
        border-radius: 5px;
    }
`;
const LogoWrap = styled.a`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 5px 10px;

    & :hover {
        background: #e6e6e6;
        border-radius: 5px;
    }

    & img {
        width: 32px;
        aspect-ratio: 1;
        border-radius: 50%;
    }
`;
const GNB = () => {
    return (
        <Header>
            <Wrap>
                <LogoWrap>
                    <img
                        src="https://avatars.githubusercontent.com/u/17160263?v=4"
                        alt="avatar"
                    />
                    KooYS
                </LogoWrap>
                <BreadcrumbsWrap>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </BreadcrumbsWrap>
            </Wrap>
        </Header>
    );
};

export default GNB;
