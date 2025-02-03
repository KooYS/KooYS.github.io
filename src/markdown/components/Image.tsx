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
        className="w-full border rounded-lg mx-auto"
        src={path && !src.startsWith(".") ? `${path}${src}` : src}
        alt={alt}
      />
      {caption && <span>{caption}</span>}
    </div>
  );
};

export default Image;
