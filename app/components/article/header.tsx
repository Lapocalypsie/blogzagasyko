import Image from "next/image";
import React from "react";

const Header = ({
  category,
  title,
  authorName,
  authorImageUrl,
  authorUrl,
  date,
  readTime,
}: any) => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <div className="mx-auto max-w-screen-md">
        <div className="flex justify-center">
          <div className="flex gap-3">
            {category && (
              <a href={`/category/${category}`}>
                <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-orange-700">
                  {category}
                </span>
              </a>
            )}
          </div>
        </div>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {title}
        </h1>
        <div className="mt-3 flex justify-center space-x-3 text-gray-500">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <a href={authorUrl}>
                <Image
                  alt={`${authorName}'s profile`}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="rounded-full object-cover"
                  src={authorImageUrl}
                />
              </a>
            </div>
            <div>
              <p className="text-gray-800 dark:text-gray-400">
                <a href={authorUrl}>{authorName}</a>
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <time
                  className="text-gray-500 dark:text-gray-400"
                  dateTime={new Date(date).toISOString()}
                >
                  {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>· {readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
