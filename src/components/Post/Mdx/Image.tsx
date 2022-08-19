import styled from '@emotion/styled';
import React from 'react';

const Container = styled.figure<{ size: number }>`
    width: 100%;
    margin: 20px auto !important;
    display: inline-block;
    & img {
        ${({ size }) => size && `width : ${size}% ;`}
        margin: auto;
        display: block;
    }
`;

const StyledFigcaption = styled.figcaption`
    text-align: center;
    font-size: 13px;
    color: var(--color-fg-muted);
    margin-top: 10px;
`;

interface Props {
    path?: string;
    src: string;
    alt: string;
    caption?: string;
    size?: number;
}
const Image: React.FC<Props> = ({ path, src, alt, caption, size = 100 }) => {
    return (
        <Container size={size}>
            <img
                src={path && !src.startsWith('.') ? `${path}${src}` : src}
                alt={alt}
            />
            {caption && <StyledFigcaption>{caption}</StyledFigcaption>}
        </Container>
    );
};

export default Image;
