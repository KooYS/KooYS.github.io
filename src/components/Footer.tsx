import styled from '@emotion/styled';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import DarkModeButton from './Navigation/DarkModeButton';
const StyledFooter = styled.footer`
    max-width: 1100px;
    margin: 15px auto;
    padding: 8px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${(props) => props.theme.mq.mobile} {
        flex-direction: column;
        gap: 30px;
        margin: 15px 0;
    }
`;

const Copyright = styled.div`
    width: 200px;
    ${(props) => props.theme.mq.mobile} {
        order: 3;
    }
`;
const Social = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
    width: 200px;
    justify-content: flex-end;
    cursor: pointer;
    ${(props) => props.theme.mq.mobile} {
        justify-content: center;
    }
`;

const StyledDarkModeButton = styled(DarkModeButton)`
    &:hover {
        color: var(--color-border-default);
    }
`;
const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>Copyright 2022 KooYS</Copyright>
            <StyledDarkModeButton />
            <Social>
                <a
                    href="https://github.com/KooYS"
                    target={'_blank'}
                    rel="noreferrer">
                    <BsGithub />
                </a>
            </Social>
        </StyledFooter>
    );
};

export default Footer;
