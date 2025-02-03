"use client";
import { ConsoleLog } from "@/lib/utils";
import React from "react";

interface Props {
  href: string;
}

interface Metadata {
  title: string;
  description: string;
  image: string;
  url: string;
}

const LinkPreview: React.FC<Props> = ({ href }) => {
  const [metaData, setMetaData] = React.useState<Metadata | null>(null);
  const isFetch = React.useRef<boolean>(false);
  const fetchMeatData = async (link: string) => {
    if (link.startsWith("http")) {
      const response = await fetch("/link/" + link.split("://")[1]);
      return await response.json();
    } else {
      const response = await fetch("/link/" + link);
      return await response.json();
    }
  };

  const getMetaTags = async (link: string) => {
    try {
      const data = await fetchMeatData(link);
      setMetaData(data);
    } catch (e) {
      ConsoleLog(e);
    }
  };

  React.useEffect(() => {
    if (!metaData && !isFetch.current) {
      getMetaTags(href);
      isFetch.current = true;
    } else {
      ConsoleLog(metaData);
    }
  }, [metaData]);
  return (
    <>
      {metaData && (
        <div className="border rounded-lg ">
          <a
            href={href}
            target="_blank"
            className=" !text-black !decoration-transparent"
          >
            {metaData.image && (
              <div>
                <img
                  src={metaData.image}
                  alt={metaData.title}
                  className="m-0 rounded-t-md"
                />
              </div>
            )}

            <div className="p-2 space-y-1">
              <div className="text-lg">{metaData.title}</div>
              <div className="text-sm text-gray-400">
                {metaData.description}
              </div>
              {href && (
                <div className="text-xs text-gray-600">
                  {new URL(href).hostname}
                </div>
              )}
            </div>
          </a>
        </div>
      )}
    </>
  );
};

export default LinkPreview;
