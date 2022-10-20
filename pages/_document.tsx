import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    const setDarkMode = `
    function setDarkMode() {
        const theme = window.localStorage.getItem('dark-mode')
        if(theme){
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        }
        else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }
    setDarkMode();
    `;

    return (
        <Html>
            <Head>
                {/* <link rel="manifest" href="/manifest.json" /> */}
                <link rel="apple-touch-icon" href="/icon.png"></link>
                <link rel="icon" href="/favicon.ico"></link>
                <meta name="theme-color" content="#8b5abb" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-touch-fullscreen" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
            </Head>
            <body>
                <script dangerouslySetInnerHTML={{ __html: setDarkMode }} />
                <div id="portal" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
