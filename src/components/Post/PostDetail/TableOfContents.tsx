import styled from '@emotion/styled';
import { HtmlElementNode } from '@jsdevtools/rehype-toc/lib/types';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';
interface Props {
    list: HtmlElementNode[];
}

const Wrap = styled.aside`
    position: sticky;
    top: 148px;
    z-index: 101;
    align-self: flex-start;
    flex: 1 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: none;

    @media only screen and (min-width: 1300px) {
        display: flex;
    }
`;
const StyledTitle = styled.div`
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.1em;
    word-break: break-word;
    margin-bottom: 2rem;
`;
const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    font-size: 1rem;

    .active {
        color: var(--color-accent-fg);
    }

    & a {
        padding: 6px;
        font-size: 14px;
        align-items: center;
        transition: background 20ms ease-in 0s;
        cursor: pointer;
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Level1 = styled.a`
    line-height: 1;
`;
const Level2 = styled.a`
    margin-left: 20px;
    line-height: 1;
    padding: 6px;
    font-size: 14px;
`;
const TableOfContents: React.FC<Props> = ({ list }) => {
    const { asPath } = useRouter();
    const regEventRef = useRef<boolean>(false);

    const HashLinkActiveClear = () => {
        const element = document.querySelectorAll(`nav a`);

        if (element) {
            element.forEach((el) => {
                el.classList.remove('active');
            });
        }
    };

    const handleHashLinkClick = (value: string) => {
        const element = document.querySelector(`[title='${value}']`);

        if (element) {
            HashLinkActiveClear();
            element.classList.add('active');
        }
    };
    useEffect(() => {
        const hash = window.location.hash;
        if (hash.length > 1) handleHashLinkClick(hash.split('#')[1]);

        if (regEventRef.current === false) {
            window.addEventListener(
                'scroll',
                throttle(() => {
                    let height = (window.innerHeight / 3).toFixed(0);
                    let tagList = document.querySelectorAll('h1,h2');
                    let last = 0;
                    tagList.forEach((item, index) => {
                        let myPosition: number =
                            item.getBoundingClientRect().top;
                        if (myPosition < Number(height)) {
                            if (last <= index) last = index;
                            else return;
                        }
                    });

                    var current = tagList[last];
                    if (current && current.id) {
                        handleHashLinkClick(current.id);
                    }
                }, 300)
            );
            regEventRef.current = true;
        }
    }, [asPath]);

    return (
        <Wrap>
            <StyledTitle>Table of Contents</StyledTitle>
            <StyledNav>
                {list.map((el, index) => {
                    if (!el.children) return false;
                    const textChild: any = el.children?.find(
                        (el) => el.type === 'text'
                    );
                    if (!textChild) return false;

                    const isH1 = el.tagName === 'h1';
                    return isH1 ? (
                        <Level1
                            key={index}
                            href={`#${el.properties.id}`}
                            title={el.properties.id}
                            onClick={(e) =>
                                handleHashLinkClick(e.currentTarget.title)
                            }>
                            {textChild.value}
                        </Level1>
                    ) : (
                        <Level2
                            key={index}
                            href={`#${el.properties.id}`}
                            title={el.properties.id}
                            onClick={(e) =>
                                handleHashLinkClick(e.currentTarget.title)
                            }>
                            {textChild.value}
                        </Level2>
                    );
                })}
            </StyledNav>
        </Wrap>
    );
};

export default TableOfContents;
