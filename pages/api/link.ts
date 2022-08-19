// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
    title: string;
    description: string;
    image: string;
}
const htmlFetch = async (link: string) => {
    return await axios.get(link);
};

const parse = (html: string) => {
    const properties: ('title' | 'description' | 'image')[] = [
        'title',
        'description',
        'image',
    ];
    const meta: Data = {
        title: '',
        description: '',
        image: '',
    };
    const cheerio = require('cheerio');
    const $ = cheerio.load(html);
    properties.forEach((p) => {
        let content = undefined;
        switch (p) {
            case 'title':
                content = $(`title`).text();
                break;
            case 'description':
                content = $(`meta[name="description"]`).attr('content');
                break;
            default:
                content = $(`meta[property="og:${p}"]`).attr('content');
                break;
        }

        if (content) {
            meta[p] = content;
        }
    });

    return meta;
};

const getMetaTags = async (link: string): Promise<Data> => {
    try {
        const { data } = await htmlFetch(link);
        const meta = await parse(data);
        return meta;
    } catch (e) {
        return {
            title: '',
            description: '',
            image: '',
        };
    }
};
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const href = `https://${req.query.href}`;
    const meta = await getMetaTags(href);
    res.status(200).json(meta);
}
