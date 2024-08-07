"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LoadingPage from "@/app/components/shared/loading";

// Define TypeScript types for article data
interface Author {
  name: string;
  avatar: string;
}

interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: Author;
  imageSrc: string;
  content: string;
}

interface ArticlePageProps {
  params: { slug: string };
}

const ArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const { slug } = params;
  const [article, setArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);

  // Fetch articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/database/Articles", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setArticles(data.data || []); // Adjust according to your API response
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  // Filter the article based on the slug
  useEffect(() => {
    if (articles.length > 0) {
      const foundArticle = articles.find(
        (article) => article.slug.toLowerCase() === slug.toLowerCase()
      );
      setArticle(foundArticle || null);
    }
  }, [articles, slug]);

  if (!article) {
    return <LoadingPage />;
  }

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 !pt-0">
      <div className="mx-auto max-w-screen-md">
        <div className="flex justify-center mb-4">
          <span className="text-gray-500">{article.category}</span>
        </div>
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {article.title}
        </h1>
        <div className="mt-3 flex justify-center space-x-3 text-gray-500">
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
              {new Date(article.date).toLocaleDateString("fr-FR", {
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
