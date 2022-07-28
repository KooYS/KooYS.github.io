import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        mq: {
            tablet: string;
            mobile: string;
        };
        colorScheme: string;
    }
}
