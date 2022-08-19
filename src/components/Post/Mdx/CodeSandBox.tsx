import styled from '@emotion/styled';
import React from 'react';

const Wrap = styled.div`
    & iframe {
        width: 100%;
        height: 500px;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
    }
`;

interface Props {
    id: string;
}
const CodeSandBox: React.FC<Props> = ({ id }) => {
    return (
        <>
            <Wrap className="codesandbox-dark">
                <iframe
                    src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=dark`}></iframe>
            </Wrap>
            <Wrap className="codesandbox-light">
                <iframe
                    src={`https://codesandbox.io/embed/${id}?fontsize=14&hidenavigation=1&theme=light`}></iframe>
            </Wrap>
        </>
    );
};

export default CodeSandBox;
