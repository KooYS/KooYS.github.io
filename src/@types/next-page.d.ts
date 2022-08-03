/* eslint-disable no-unused-vars */
import { NextPage, NextPageContext } from 'next/types';
import type { Router } from 'next/router';
import { NextRouter } from 'next/router';
import type { ComponentType } from 'react';
import type { ServerResponse } from 'http';

export declare type MyPage = NextPage & {
    title: string;
    description: string;
};

declare type BaseContext = {
    res?: ServerResponse;
    [k: string]: any;
};

declare type AppInitialProps = {
    pageProps: any;
};

declare type NextComponentType<
    C extends BaseContext = NextPageContext,
    IP = {},
    P = {}
> = ComponentType<P> & {
    /**
     * Used for initial page load data population. Data returned from `getInitialProps` is serialized when server rendered.
     * Make sure to return plain `Object` without using `Date`, `Map`, `Set`.
     * @param ctx Context of `page`
     */
    title: string;
    description: string;
    getInitialProps?(context: C): IP | Promise<IP>;
};

declare type AppPropsType<
    R extends NextRouter = NextRouter,
    P = {}
> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P>;
    router: R;
    __N_SSG?: boolean;
    __N_SSP?: boolean;
    __N_RSC?: boolean;
};

export declare type MyAppProps<P = {}> = AppPropsType<Router, P>;
