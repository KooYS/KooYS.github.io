import useDarkMode from '@/hooks/useDarkMode';
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

    ${(props) => props.theme.mq.mobile} {
        justify-content: center;
    }
`;
const Footer = () => {
    const { toggle } = useDarkMode();

    return (
        <StyledFooter>
            <Copyright onClick={toggle}>Copyright 2022 KooYS</Copyright>
            <DarkModeButton />
            <Social>
                <BsGithub />
            </Social>
        </StyledFooter>
    );
};

export default Footer;
