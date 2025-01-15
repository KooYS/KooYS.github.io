import React from "react";

interface Props {
  path?: string;
  src: string;
  alt: string;
  caption?: string;
  size?: number;
}
const Image: React.FC<Props> = ({ path, src, alt, caption }) => {
  return (
    <div>
      <img
        src={path && !src.startsWith(".") ? `${path}${src}` : src}
        alt={alt}
      />
      {caption && <caption>{caption}</caption>}
    </div>
  );
};

export default Image;
