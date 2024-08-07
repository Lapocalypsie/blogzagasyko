"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import articles  from "@/app/utils/articles.json";

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const [article, setArticle] = useState<any>(null); // Ensure the type is set to 'any' or a proper type definition

  useEffect(() => {
    const foundArticle = articles.find(
      (article) => article.slug.toLowerCase() === slug.toLowerCase()
    );
    console.log("Found article:", foundArticle);
    setArticle(foundArticle);
  }, [slug]);

  if (!article) {
    return <div>Article not found or loading...</div>;
  }

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="mx-auto max-w-screen-md ">
        <div className="flex justify-center mb-4">
          <span className="text-gray-500">{article.category}</span>
        </div>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {article.title}
        </h1>
        <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                height={40}
                width={40}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <p className="text-gray-800 dark:text-gray-400">
              {article.author.name}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <time
              className="text-gray-500 dark:text-gray-400"
              dateTime={article.date}
            >
              {new Date(article.date).toLocaleDateString("fr-fr", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>
      <div className="relative mt-6 z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        <Image
          src={article.imageSrc}
          alt={article.title}
          layout="responsive"
          width={16}
          height={9}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
};

export default ArticlePage;
