import React from "react";
import Image from "next/image";

const BodyArticle = ({
  authorName,
  authorImageUrl,
  authorDescription,
}: any) => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <article className="mx-auto max-w-screen-md">
        <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
          <p>
            I recently went to the mountains with my friends. We were
            celebrating 50 years of friendship. It was very special. Six of us
            were to be together spending time in the mountains.
          </p>
          {/* Rest of your article content */}
        </div>
        <div className="mb-7 mt-7 flex justify-center">
          <a
            className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500"
            href="/"
          >
            ← View all posts
          </a>
        </div>
        <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
          <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
            <div className="relative mt-1 h-24 w-24 flex-shrink-0">
              <a href="/author/joshua-wood">
                <Image
                  src={authorImageUrl}
                  alt={authorName}
                  width={96}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  className="rounded-full object-cover"
                  sizes="96px"
                />
              </a>
            </div>
            <div className="max-w-3xl mt-3 text-lg dark:text-gray-400 text-gray-600">
              <div className="flex items-center mb-1 sm:mb-0">
                <p>{authorName}</p>
              </div>
              <p className="leading-relaxed dark:prose-invert prose-a:text-blue-600 dark:text-gray-400">
                {authorDescription}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BodyArticle;
