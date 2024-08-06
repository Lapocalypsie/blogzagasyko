import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleCard = ({
  title,
  category,
  author,
  date,
  imageSrc,
  slug,
}: any) => {
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
        <Link href={`/archive/${slug}`} className="relative block aspect-video">
          <Image
            alt="Thumbnail"
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            priority
          />
        </Link>
      </div>
      <div>
        <div className="flex gap-3">
          <Link href={`/${category}`}>
            <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
              {category}
            </span>
          </Link>
        </div>
        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
          <Link href={`/articles/${slug}`}>
            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
              {title}
            </span>
          </Link>
        </h2>
        <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
          {author ? (
            <Link href={`/author/${author.slug}`}>
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  <Image
                    alt={author.name}
                    src={author.avatar}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <span className="truncate text-sm">{author.name}</span>
              </div>
            </Link>
          ) : (
            <p>No author information available</p>
          )}
          <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
          <time className="truncate text-sm" dateTime={date}>
            {formattedDate}
          </time>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
