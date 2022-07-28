import useDarkMode from '@/hooks/useDarkMode';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

interface Props extends React.HTMLAttributes<HTMLElement> {
    size?: string;
}
const StyledButton = styled.a<Props>`
    font-size: ${({ size }) => (size ? size : '30px')};
    display: flex;
    align-items: center;
`;

const DarkModeButton: React.FC<Props> = ({ size }) => {
    const { isDarkMode, toggle } = useDarkMode();

    const [isDark, setIsDark] = useState(false);

    const isCheck = () => {
        if (document.body.classList.contains('dark')) {
            setIsDark(true);
        } else if (document.body.classList.contains('light')) {
            setIsDark(false);
        }
    };

    // const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        isCheck();
        console.log(isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            {
                <StyledButton
                    size={size}
                    onClick={() => {
                        toggle();
                        isCheck();
                    }}>
                    {isDark ? <BsMoonFill /> : <BsSunFill />}
                </StyledButton>
            }
        </>
    );
};

export default DarkModeButton;
