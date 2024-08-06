import React from "react";
import NextImage from "next/image";

const Image = ({ imageUrl, altText, width, height, layout }: any) => {
  return (
    <NextImage
      src={imageUrl}
      alt={altText}
      width={width}
      height={height}
      layout={layout}
      loading="eager"
      decoding="async"
      className="object-cover"
      sizes="100vw"
      // Define srcSet based on your needs, or you can let Next.js handle it automatically
    />
  );
};

export default Image;
