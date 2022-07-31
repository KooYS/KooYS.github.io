import styled from '@emotion/styled';
import React from 'react';
import DarkModeButton from './DarkModeButton';
import Link from 'next/link';
const BreadcrumbsWrap = styled.div`
    display: flex;
    gap: 10px;

    & a {
        padding: 10px 10px;
    }

    & a:hover {
        background: #e6e6e6;
        border-radius: 5px;
    }
`;

const StyledDarkModeButton = styled(DarkModeButton)`
    &:hover {
        background: #e6e6e6;
        border-radius: 5px;
    }
`;
const Breadcrumb = () => {
    return (
        <BreadcrumbsWrap>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
            <StyledDarkModeButton size="15px" />
        </BreadcrumbsWrap>
    );
};

export default Breadcrumb;
