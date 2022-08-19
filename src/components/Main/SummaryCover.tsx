import React from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
const StyledWrap = styled.div`
    width: 100%;
`;
const StyledImageWrap = styled.div`
    max-width: 1200px !important;

    width: 100%;
    height: 30vh;
    min-height: 30vh;
    max-height: 30vh;
    position: relative;
    margin: auto;

    & span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
        display: inline-block;
        overflow: hidden;
        background: none;
        opacity: 1;
        border: 0;
        margin: 0;
        padding: 0;
        position: relative;
        width: 100%;
        box-shadow: 2px 2px 8px 4px hsl(0deg 0% 6% / 10%);
        @media only screen and (max-width: 1200px) {
            border-radius: 0px;
        }
        border-radius: 24px;
        height: 100%;
    }
    & img {
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 100%;
        max-width: 100%;
        min-height: 100%;
        max-height: 100%;
        object-position: center 3.44%;
        object-fit: cover;
    }
`;
const StyledInfoWrap = styled.div`
    padding-left: calc(min(16px, 8vw));
    padding-right: calc(min(16px, 8vw));
    padding-bottom: calc(max(3vh, 20px));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    align-items: flex-start;
    max-width: 720px;
`;
const StyledTitle = styled.div`
    width: 100%;
    font-size: 2.5em;
    margin-bottom: 20px;
    line-height: 1.2;
    display: block;
    text-align: center;
`;
const StyledDate = styled.div`
    width: 100%;
    font-size: 1em;
    margin-bottom: 20px;
    line-height: 1.2;
    display: block;
    text-align: center;
`;

const StyledAvatarImageWrap = styled.div`
    display: flex;
    justify-content: center;
    top: -62px;
    position: relative;

    & span {
        width: 124px;
        height: 124px;
        box-shadow: 4px 4px 24px 0 rgb(0 0 0 / 21%);
        border-radius: 50%;
    }

    & img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

interface Props {
    title?: string;
    date?: string;
    coverImage?: string;
    avatar?: string;
}

const SummaryCover: React.FC<Props> = ({ title, date, coverImage, avatar }) => {
    return (
        <StyledWrap>
            {coverImage && (
                <StyledImageWrap>
                    <span>
                        <img src={coverImage} alt={title} />
                    </span>
                </StyledImageWrap>
            )}
            {avatar && (
                <StyledAvatarImageWrap>
                    <span>
                        <img src={avatar} alt={title} />
                    </span>
                </StyledAvatarImageWrap>
            )}
            {(title || date) && (
                <StyledInfoWrap>
                    {title && <StyledTitle>{title}</StyledTitle>}
                    {date && (
                        <StyledDate>
                            {format(new Date(date), 'yyyy-MM-dd HH:mm:ss', {
                                locale: ko,
                            })}
                        </StyledDate>
                    )}
                </StyledInfoWrap>
            )}
        </StyledWrap>
    );
};

export default SummaryCover;
