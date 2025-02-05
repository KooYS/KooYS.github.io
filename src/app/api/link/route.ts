import { ConsoleLog } from "@/lib/utils";
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

interface Data {
  title: string;
  description: string;
  image: string;
}

const htmlFetch = async (link: string) => {
  const response = await fetch(link);
  const html = await response.text();
  const originUrl = response.url;
  return { originUrl, html };
};

const parse = ({ originUrl, html }: { originUrl: string; html: string }) => {
  const properties: ("title" | "description" | "image")[] = [
    "title",
    "description",
    "image",
  ];
  const meta: Data = {
    title: "",
    description: "",
    image: "",
  };
  const $ = cheerio.load(html);
  properties.forEach((p) => {
    let content = undefined;
    switch (p) {
      case "title":
        content = $(`title`).text();
        break;
      case "description":
        content = $(`meta[name="description"]`).attr("content");
        break;
      default:
        if (p === "image") {
          content = $(`meta[property="og:${p}"]`).attr("content");
          ConsoleLog($(`meta[property="og:${p}"]`).attr("content"));
          if (content?.startsWith("/")) {
            content =
              originUrl.split("/").slice(0, 3).join("/") + "/" + content;
          }
        } else content = $(`meta[property="og:${p}"]`).attr("content");
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
    const data = await htmlFetch(link);
    const meta = await parse(data);
    return meta;
  } catch (error) {
    ConsoleLog(error);
    return {
      title: "",
      description: "",
      image: "",
    };
  }
};

export async function GET(req: Request) {
  const { pathname } = new URL(req.url);
  ConsoleLog(req.url);
  const href = `https://${pathname.split("/link/")[1]}`;
  const meta = await getMetaTags(href);
  return NextResponse.json(meta);
}
