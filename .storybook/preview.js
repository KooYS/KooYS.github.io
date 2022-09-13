import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import theme from '../styles/theme';
import CssBaseLine from '../src/components/CssBaseLine';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator((story) => (
    <ThemeProvider theme={theme}>
        <CssBaseLine />
        {story()}
    </ThemeProvider>
));
