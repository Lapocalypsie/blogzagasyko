"use client"; // Keep this if the component needs to run client-side

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import ArticleCard from "@/app/components/card/articleCard";

interface Article {
  title: string;
  category: string;
  author: Author;
  date: string;
  imageSrc: string;
  slug: string;
}

interface Author {
  name: string;
  avatar: string;
}

const Page = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const articlesPerPage = 5;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/database/Articles");
        if (!response.ok) throw new Error("Failed to fetch articles");

        const data = await response.json();
        const sortedArticles = data.data
          ? data.data.sort(
              (a: any, b: any) =>
                (new Date(b.date) as any) - (new Date(a.date) as any)
            )
          : [];
        setArticles(sortedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setCurrentArticles(articles.slice(indexOfFirstArticle, indexOfLastArticle));
  }, [currentPage, articles]);

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => prev - 1);

  let content;

  if (loading) {
    content = (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-24 h-24">
              <div className="absolute top-0 left-0 w-full h-full border-8 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-xl font-semibold text-gray-700">Chargement...</p>
          </div>
        </div>
      </div>
    );
  } else if (articles.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-2xl">
          Les projets arrivent bientôt !
        </div>
      </div>
    );
  } else {
    content = (
      <>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {currentArticles.map((article) => (
            <Link key={article.slug} href={`/archive/${article.slug}`} passHref>
              <ArticleCard
                title={article.title}
                category={article.category}
                author={article.author}
                date={article.date}
                imageSrc={article.imageSrc}
                slug={article.slug}
                altText={article.title} // Alt text for SEO and accessibility
              />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium ${
                currentPage === 1
                  ? "text-gray-500 hover:bg-gray-50"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
              <span>Précédent</span>
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentArticles.length < articlesPerPage}
              className={`relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium ${
                currentArticles.length < articlesPerPage
                  ? "text-gray-500 hover:bg-gray-50"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            >
              <span>Suivant</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </>
    );
  }

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 relative">
      <Head>
        <title>Nos Projets - Za Gasy Ko</title>
        <meta
          name="description"
          content="Découvrez les projets de Za Gasy Ko, une association caritative dédiée à l'aide des habitants de Madagascar."
        />
        <meta
          name="keywords"
          content="projets, Za Gasy Ko, Madagascar, aide, association caritative"
        />
        <meta property="og:title" content="Nos Projets - Za Gasy Ko" />
        <meta
          property="og:description"
          content="Découvrez les projets de Za Gasy Ko, une association caritative dédiée à l'aide des habitants de Madagascar."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zagasyko.com/archive" />
        <meta property="og:image" content="/Logo.svg" />{" "}
        <link rel="canonical" href="https://zagasyko.com/archive" />
      </Head>

      <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Nos Projets
      </h1>
      <div className="text-center">
        <p className="mt-2 text-lg">
          Découvrez toutes nos actions caritatives !
        </p>
      </div>
      {content}
    </div>
  );
};

export default Page;
