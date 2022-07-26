import type { AppProps } from 'next/app';
import CssBaseLine from '@/components/CssBaseLine';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { seoYear } from '@/libs/seo';
import theme from 'styles/theme';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                titleTemplate={`${seoYear()} Duckzill | %s`}
                openGraph={{
                    title: 'Duckzill',
                    description: 'Duckzill Auth',
                    images: [
                        {
                            url: 'duckzill.jpg',
                            width: 1200,
                            height: 630,
                            alt: 'duckzill',
                        },
                    ],
                }}
            />
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <Layout>
                    <CssBaseLine />
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
