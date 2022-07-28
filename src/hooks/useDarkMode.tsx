import { useCallback, useEffect, useState } from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

interface UseDarkModeOutput {
    isDarkMode: boolean | undefined;
    toggle: () => void;
    enable: () => void;
    disable: () => void;
}

function parseJSON<T>(value: string | null): T | undefined {
    try {
        return value === 'undefined' ? undefined : JSON.parse(value ?? '');
    } catch {
        console.log('parsing error on', { value });
        return undefined;
    }
}

const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
        return window.matchMedia(query).matches;
    }
    return false;
};

const change = (isCheck: boolean) => {
    if (isCheck) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
};

function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
    const initial = useCallback(() => {
        if (typeof window !== 'undefined') {
            let theme = window.localStorage.getItem('dark-mode');
            if (!theme && theme !== 'false' && theme !== 'true') {
                const match = getMatches(COLOR_SCHEME_QUERY);
                change(match);
                return match;
            } else {
                change(theme === 'true');
                return theme === 'true';
            }
        } else return getMatches(COLOR_SCHEME_QUERY);
    }, []);
    const [isDarkOS] = useState(initial);
    const [isDarkMode, setDarkMode] = useState<boolean | undefined>(isDarkOS);

    // Update darkMode if os prefers changes
    useEffect(() => {
        try {
            const item = window.localStorage.getItem('dark-mode');
            // eslint-disable-next-line no-undef
            setDarkMode(item ? (parseJSON(item) as boolean) : defaultValue);
        } catch (error) {
            setDarkMode(defaultValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkOS]);

    useEffect(() => {
        if (isDarkMode !== undefined) {
            try {
                if (typeof window !== 'undefined') {
                    change(isDarkMode);
                    window.localStorage.setItem('dark-mode', `${isDarkMode}`);
                }
            } catch (error) {
                return;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkMode]);

    return {
        isDarkMode,
        toggle: () => setDarkMode((prev: boolean | undefined) => !prev),
        enable: () => setDarkMode(true),
        disable: () => setDarkMode(false),
    };
}

export default useDarkMode;
