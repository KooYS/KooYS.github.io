import useDarkMode from '@/hooks/useDarkMode';
import styled from '@emotion/styled';
import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

interface Props extends React.HTMLAttributes<HTMLElement> {
    size?: string;
}
const StyledButton = styled.a<Props>`
    font-size: ${({ size }) => (size ? size : '30px')};
    display: flex;
    align-items: center;
`;

const StyledBsMoonFill = styled(BsMoonFill)`
    & {
        display: none;
    }
    .light & {
        display: none;
    }
    .dark & {
        display: block;
    }
`;

const StyledBsSunFill = styled(BsSunFill)`
    & {
        display: none;
    }
    .dark & {
        display: none;
    }
    .light & {
        display: block;
    }
`;

const DarkModeButton: React.FC<Props> = ({ size }) => {
    const { toggle } = useDarkMode();

    return (
        <>
            {
                <StyledButton size={size} onClick={toggle}>
                    <StyledBsMoonFill />
                    <StyledBsSunFill />
                </StyledButton>
            }
        </>
    );
};

export default DarkModeButton;
