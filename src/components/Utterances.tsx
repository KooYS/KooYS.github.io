import styled from '@emotion/styled';
import React from 'react';

const StyledsSection = styled.section`
    width: 100%;
    height: 760px;
`;
const Utterances = () => {
    return (
        <>
            <StyledsSection
                className="utteranc-light"
                ref={(elem) => {
                    if (!elem) {
                        return;
                    }
                    elem.innerHTML = '';
                    const scriptElem = document.createElement('script');
                    scriptElem.src = 'https://utteranc.es/client.js';
                    scriptElem.async = true;
                    scriptElem.setAttribute('repo', 'KooYS/KooYS.github.io');
                    scriptElem.setAttribute('issue-term', 'url');
                    scriptElem.setAttribute('theme', 'github-light');
                    scriptElem.crossOrigin = 'anonymous';
                    elem.appendChild(scriptElem);
                }}
            />
            <StyledsSection
                className="utteranc-dark"
                ref={(elem) => {
                    if (!elem) {
                        return;
                    }
                    elem.innerHTML = '';
                    const scriptElem = document.createElement('script');
                    scriptElem.src = 'https://utteranc.es/client.js';
                    scriptElem.async = true;
                    scriptElem.setAttribute('repo', 'KooYS/KooYS.github.io');
                    scriptElem.setAttribute('issue-term', 'url');
                    scriptElem.setAttribute('theme', 'github-dark');
                    scriptElem.crossOrigin = 'anonymous';
                    elem.appendChild(scriptElem);
                }}
            />
        </>
    );
};

export default Utterances;
