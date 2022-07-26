import { getMonth, getYear } from 'date-fns';

export const seoYear = () => {
    const date = new Date();
    const month = getMonth(date) + 1;
    return month > 11 ? getYear(date) + 1 : getYear(date);
};
