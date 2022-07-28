import styled from '@emotion/styled';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
const StyledFooter = styled.footer`
    width: 100%;
    max-width: 1100px;
    margin: auto auto 0;
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Copyright = styled.div`
    padding: 20px;
`;
const Social = styled.div`
    display: flex;
    gap: 10px;
    font-size: 30px;
`;
const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>Copyright 2022 KooYS</Copyright>
            <Social>
                <BsGithub />
            </Social>
        </StyledFooter>
    );
};

export default Footer;
