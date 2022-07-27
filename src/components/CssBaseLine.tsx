import React from 'react';
import { Global, css } from '@emotion/react';

const CssBaseLine = () => {
    return (
        <Global
            styles={css`
                html,
                body,
                #__next {
                    position: relative;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -o-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    /* max-width: 1500px; */
                    margin: auto;
                    /* height: 100%; */
                    -webkit-tap-highlight-color: transparent;
                    font-family: Verdana;
                }
                ol,
                ul {
                    list-style: none;
                }
                a {
                    background-color: transparent;
                    text-decoration: none;
                    outline: none;
                    color: inherit;
                    cursor: pointer;
                    &:active,
                    &:hover {
                        text-decoration: none;
                        color: inherit;
                        outline: 0;
                    }
                }
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    outline: none;
                    border: none;
                    background: none;
                    padding: 0;
                    user-select: none;
                    cursor: pointer;
                    white-space: nowrap;
                    letter-spacing: inherit;
                    font: inherit;
                    color: inherit;
                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                }
                input {
                    outline: none;
                }
            `}
        />
    );
};

export default CssBaseLine;
