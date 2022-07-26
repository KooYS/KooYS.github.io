import styled from '@emotion/styled';
import React from 'react';
import Footer from './Footer';
import { GitHubShareButton } from './Navigation/GitHubShareButton';
import GNB from './Navigation/GNB';

interface Props {
    children?: React.ReactNode;
}

const ContentWrap = styled.main`
    width: 720px;
    padding-left: calc(min(16px, 8vw));
    padding-right: calc(min(16px, 8vw));
    position: relative;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: flex-start;
    max-width: 100%;
`;
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <GNB />
            <GitHubShareButton />
            <ContentWrap>{children}</ContentWrap>
            <Footer />
        </>
    );
};

export default Layout;
