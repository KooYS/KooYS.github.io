// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
    title: string;
    description: string;
    image: string;
    url: string;
}
const htmlFetch = async (link: string) => {
    return await axios.get(link);
};

const parse = (html: string) => {
    const properties: ('title' | 'description' | 'image' | 'url')[] = [
        'title',
        'description',
        'image',
        'url',
    ];
    const meta: Data = {
        title: '',
        description: '',
        image: '',
        url: '',
    };
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
            url: '',
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
