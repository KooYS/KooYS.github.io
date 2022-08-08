import styled from '@emotion/styled';
import React from 'react';

interface Props {
    list: any[];
}

const Wrap = styled.div`
    position: sticky;
    top: 148px;
    z-index: 101;
    align-self: flex-start;
    flex: 1 1;
    display: none;
    flex-direction: column;
    align-items: center;
`;
const StyledTitle = styled.div`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.1em;
    word-break: break-word;
`;
const StyledNav = styled.nav``;
const TableOfContents: React.FC<Props> = () => {
    return (
        <Wrap>
            <StyledTitle>Table of Contents</StyledTitle>
            <StyledNav></StyledNav>
        </Wrap>
    );
};

export default TableOfContents;
