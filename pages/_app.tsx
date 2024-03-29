import CssBaseLine from '@/components/CssBaseLine';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { seoYear } from '@/libs/seo';
import theme from 'styles/theme';
import Layout from '@/components/Layout';
import 'styles/markdown.css';
import { MyAppProps } from '@/@types/next-page';

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <>
            <DefaultSeo
                titleTemplate={`${seoYear()} BloKoo | %s`}
                title={Component?.title}
                description={Component?.description}
                openGraph={{
                    title: Component.title,
                    description: Component.description,
                    images: [
                        {
                            url: '/images/og.png',
                            width: 1200,
                            height: 630,
                            alt: 'BloKoo',
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
                <CssBaseLine />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
