import React from 'react';
import { Global, css } from '@emotion/react';
const CssBaseLine = () => {
    const darkColor = css`
        .dark {
            color-scheme: dark;
            --color-prettylights-syntax-comment: #8b949e;
            --color-prettylights-syntax-constant: #79c0ff;
            --color-prettylights-syntax-entity: #d2a8ff;
            --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
            --color-prettylights-syntax-entity-tag: #7ee787;
            --color-prettylights-syntax-keyword: #ff7b72;
            --color-prettylights-syntax-string: #a5d6ff;
            --color-prettylights-syntax-variable: #ffa657;
            --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
            --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
            --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
            --color-prettylights-syntax-carriage-return-text: #f0f6fc;
            --color-prettylights-syntax-carriage-return-bg: #b62324;
            --color-prettylights-syntax-string-regexp: #7ee787;
            --color-prettylights-syntax-markup-list: #f2cc60;
            --color-prettylights-syntax-markup-heading: #1f6feb;
            --color-prettylights-syntax-markup-italic: #c9d1d9;
            --color-prettylights-syntax-markup-bold: #c9d1d9;
            --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
            --color-prettylights-syntax-markup-deleted-bg: #67060c;
            --color-prettylights-syntax-markup-inserted-text: #aff5b4;
            --color-prettylights-syntax-markup-inserted-bg: #033a16;
            --color-prettylights-syntax-markup-changed-text: #ffdfb6;
            --color-prettylights-syntax-markup-changed-bg: #5a1e02;
            --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
            --color-prettylights-syntax-markup-ignored-bg: #1158c7;
            --color-prettylights-syntax-meta-diff-range: #d2a8ff;
            --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
            --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
            --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
            --color-fg-default: #c9d1d9;
            --color-fg-muted: #8b949e;
            --color-fg-subtle: #484f58;
            --color-canvas-default: #191d24;
            --color-canvas-subtle: #1b232d;
            --color-border-default: #30363d;
            --color-border-muted: #21262d;
            --color-neutral-muted: rgba(110, 118, 129, 0.4);
            --color-accent-fg: #58a6ff;
            --color-accent-emphasis: #1f6feb;
            --color-attention-subtle: rgba(187, 128, 9, 0.15);
            --color-danger-fg: #f85149;

            pre code.hljs {
                display: block;
                overflow-x: auto;
                padding: 1em;
            }
            code.hljs {
                padding: 3px 5px;
            }
            .hljs {
                color: #c9d1d9;
            }
            .hljs-doctag,
            .hljs-keyword,
            .hljs-meta .hljs-keyword,
            .hljs-template-tag,
            .hljs-template-variable,
            .hljs-type,
            .hljs-variable.language_ {
                color: #ff7b72;
            }
            .hljs-title,
            .hljs-title.class_,
            .hljs-title.class_.inherited__,
            .hljs-title.function_ {
                color: #d2a8ff;
            }
            .hljs-attr,
            .hljs-attribute,
            .hljs-literal,
            .hljs-meta,
            .hljs-number,
            .hljs-operator,
            .hljs-selector-attr,
            .hljs-selector-class,
            .hljs-selector-id,
            .hljs-variable {
                color: #79c0ff;
            }
            .hljs-meta .hljs-string,
            .hljs-regexp,
            .hljs-string {
                color: #a5d6ff;
            }
            .hljs-built_in,
            .hljs-symbol {
                color: #ffa657;
            }
            .hljs-code,
            .hljs-comment,
            .hljs-formula {
                color: #8b949e;
            }
            .hljs-name,
            .hljs-quote,
            .hljs-selector-pseudo,
            .hljs-selector-tag {
                color: #7ee787;
            }
            .hljs-subst {
                color: #c9d1d9;
            }
            .hljs-section {
                color: #1f6feb;
                font-weight: 700;
            }
            .hljs-bullet {
                color: #f2cc60;
            }
            .hljs-emphasis {
                color: #c9d1d9;
                font-style: italic;
            }
            .hljs-strong {
                color: #c9d1d9;
                font-weight: 700;
            }
            .hljs-addition {
                color: #aff5b4;
                background-color: #033a16;
            }
            .hljs-deletion {
                color: #ffdcd7;
                background-color: #67060c;
            }

            .utteranc-light {
                display: none;
            }

            .codesandbox-light {
                display: none;
            }
        }
    `;

    const lightColor = css`
        .light {
            color-scheme: light;
            --color-prettylights-syntax-comment: #6e7781;
            --color-prettylights-syntax-constant: #0550ae;
            --color-prettylights-syntax-entity: #8250df;
            --color-prettylights-syntax-storage-modifier-import: #24292f;
            --color-prettylights-syntax-entity-tag: #116329;
            --color-prettylights-syntax-keyword: #cf222e;
            --color-prettylights-syntax-string: #0a3069;
            --color-prettylights-syntax-variable: #953800;
            --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
            --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
            --color-prettylights-syntax-invalid-illegal-bg: #82071e;
            --color-prettylights-syntax-carriage-return-text: #f6f8fa;
            --color-prettylights-syntax-carriage-return-bg: #cf222e;
            --color-prettylights-syntax-string-regexp: #116329;
            --color-prettylights-syntax-markup-list: #3b2300;
            --color-prettylights-syntax-markup-heading: #0550ae;
            --color-prettylights-syntax-markup-italic: #24292f;
            --color-prettylights-syntax-markup-bold: #24292f;
            --color-prettylights-syntax-markup-deleted-text: #82071e;
            --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
            --color-prettylights-syntax-markup-inserted-text: #116329;
            --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
            --color-prettylights-syntax-markup-changed-text: #953800;
            --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
            --color-prettylights-syntax-markup-ignored-text: #eaeef2;
            --color-prettylights-syntax-markup-ignored-bg: #0550ae;
            --color-prettylights-syntax-meta-diff-range: #8250df;
            --color-prettylights-syntax-brackethighlighter-angle: #57606a;
            --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
            --color-prettylights-syntax-constant-other-reference-link: #0a3069;
            --color-fg-default: #24292f;
            --color-fg-muted: #57606a;
            --color-fg-subtle: #6e7781;
            --color-canvas-default: #ffffff;
            --color-canvas-subtle: #f6f8fa;
            --color-border-default: #d0d7de;
            --color-border-muted: hsla(210, 18%, 87%, 1);
            --color-neutral-muted: rgba(175, 184, 193, 0.2);
            --color-accent-fg: #0969da;
            --color-accent-emphasis: #0969da;
            --color-attention-subtle: #fff8c5;
            --color-danger-fg: #cf222e;

            pre code.hljs {
                display: block;
                overflow-x: auto;
                padding: 1em;
            }
            code.hljs {
                padding: 3px 5px;
            }
            .hljs {
                color: #24292e;
            }
            .hljs-doctag,
            .hljs-keyword,
            .hljs-meta .hljs-keyword,
            .hljs-template-tag,
            .hljs-template-variable,
            .hljs-type,
            .hljs-variable.language_ {
                color: #d73a49;
            }
            .hljs-title,
            .hljs-title.class_,
            .hljs-title.class_.inherited__,
            .hljs-title.function_ {
                color: #6f42c1;
            }
            .hljs-attr,
            .hljs-attribute,
            .hljs-literal,
            .hljs-meta,
            .hljs-number,
            .hljs-operator,
            .hljs-selector-attr,
            .hljs-selector-class,
            .hljs-selector-id,
            .hljs-variable {
                color: #005cc5;
            }
            .hljs-meta .hljs-string,
            .hljs-regexp,
            .hljs-string {
                color: #032f62;
            }
            .hljs-built_in,
            .hljs-symbol {
                color: #e36209;
            }
            .hljs-code,
            .hljs-comment,
            .hljs-formula {
                color: #6a737d;
            }
            .hljs-name,
            .hljs-quote,
            .hljs-selector-pseudo,
            .hljs-selector-tag {
                color: #22863a;
            }
            .hljs-subst {
                color: #24292e;
            }
            .hljs-section {
                color: #005cc5;
                font-weight: 700;
            }
            .hljs-bullet {
                color: #735c0f;
            }
            .hljs-emphasis {
                color: #24292e;
                font-style: italic;
            }
            .hljs-strong {
                color: #24292e;
                font-weight: 700;
            }
            .hljs-addition {
                color: #22863a;
                background-color: #f0fff4;
            }
            .hljs-deletion {
                color: #b31d28;
                background-color: #ffeef0;
            }

            .utteranc-dark {
                display: none;
            }
            .codesandbox-dark {
                display: none;
            }
        }
    `;

    return (
        <Global
            styles={css`
                ${darkColor}
                ${lightColor}
                html,
                body,
                #__next {
                    position: relative;
                    /* -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -o-user-select: none;
                    -ms-user-select: none;
                    user-select: none; */
                    /* max-width: 1500px; */
                    margin: auto;
                    /* height: 100%; */
                    -webkit-tap-highlight-color: transparent;
                    font-family: Verdana;
                    color: var(--color-fg-default);
                    background-color: var(--color-canvas-default);

                    -ms-overflow-style: none;
                    *::-webkit-scrollbar {
                        display: none;
                        width: 0 !important;
                    }
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
