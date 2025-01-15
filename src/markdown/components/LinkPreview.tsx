"use client";
import { ConsoleLog } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

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
  const [metaData, setMetaData] = useState<Metadata | null>(null);
  const isFetch = useRef<boolean>(false);
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

  useEffect(() => {
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
        <a href={href} target="_blank">
          {metaData.image && (
            <div>
              <img src={metaData.image} alt={metaData.title} />
            </div>
          )}

          <div style={!metaData.image ? { left: 0, maxWidth: "100%" } : {}}>
            <div>{metaData.title}</div>
            <div>{metaData.description}</div>
            {href && <div>{new URL(href).hostname}</div>}
          </div>
        </a>
      )}
    </>
  );
};

export default LinkPreview;
