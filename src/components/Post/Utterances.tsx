import styled from '@emotion/styled';
import React from 'react';

const StyledsSection = styled.section`
    width: 100%;
    height: 760px;
`;
const Utterances = () => {
    return (
        <div>
            <div className="utteranc-light">
                <StyledsSection
                    ref={(elem) => {
                        if (!elem) {
                            return;
                        }
                        let parent = elem.parentNode;
                        if (elem.parentNode?.children) {
                            for (
                                let idx = 0;
                                idx < elem.parentNode?.children.length;
                                idx++
                            ) {
                                const element = elem.parentNode?.children[idx];
                                elem.parentNode.removeChild(element);
                            }
                        }

                        const scriptElem = document.createElement('script');
                        scriptElem.src = 'https://utteranc.es/client.js';
                        scriptElem.async = true;
                        scriptElem.setAttribute(
                            'repo',
                            'KooYS/KooYS.github.io'
                        );
                        scriptElem.setAttribute('issue-term', 'url');
                        scriptElem.setAttribute('theme', 'github-light');
                        scriptElem.crossOrigin = 'anonymous';
                        if (parent) parent.appendChild(scriptElem);
                    }}
                />
            </div>

            <div className="utteranc-dark">
                <StyledsSection
                    ref={(elem) => {
                        if (!elem) {
                            return;
                        }

                        let parent = elem.parentNode;
                        if (elem.parentNode?.children)
                            for (
                                let idx = 0;
                                idx < elem.parentNode?.children.length;
                                idx++
                            ) {
                                const element = elem.parentNode?.children[idx];
                                elem.parentNode.removeChild(element);
                            }
                        const scriptElem = document.createElement('script');
                        scriptElem.src = 'https://utteranc.es/client.js';
                        scriptElem.async = true;
                        scriptElem.setAttribute(
                            'repo',
                            'KooYS/KooYS.github.io'
                        );
                        scriptElem.setAttribute('issue-term', 'url');
                        scriptElem.setAttribute('theme', 'github-dark');
                        scriptElem.crossOrigin = 'anonymous';
                        if (parent) parent.appendChild(scriptElem);
                    }}
                />
            </div>
        </div>
    );
};

export default Utterances;
