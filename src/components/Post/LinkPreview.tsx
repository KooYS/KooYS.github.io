import React, { useEffect } from 'react';
import axios from 'axios';
const LinkPreview = () => {
    const fetch = async (link: string) => {
        return await axios.get(link);
    };
    const parse = (html: string) => {
        const properties = ['title', 'description', 'image', 'url'];
        const meta: any = {};
        const cheerio = require('cheerio');
        const $ = cheerio.load(html);
        properties.forEach((p) => {
            const content = $(`meta[property="og:${p}"]`).attr('content');
            if (content) {
                meta[p] = content;
            }
        });
        return meta;
    };

    const getMetaTags = async (link: string) => {
        try {
            const { data } = await fetch(link);
            const meta = await parse(data);
            console.log(meta);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getMetaTags(
            'https://0seo.tistory.com/manage/newpost/9?type=post&returnURL=https%3A%2F%2F0seo.tistory.com%2F9'
        );
    }, []);
    return <></>;
};

export default LinkPreview;
