//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import ArticleCard from "../../components/card/articleCard";
import Link from "next/link";

const Page = () => {
  // State for articles, pagination, and loading
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const articlesPerPage = 5;

  // Fetch articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch("/api/database/Articles", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        // Sort articles by date
        const sortedArticles = data.data
          ? data.data.sort((a, b) => new Date(b.date) - new Date(a.date))
          : [];

        setArticles(sortedArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Update current articles based on pagination
  useEffect(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setCurrentArticles(articles.slice(indexOfFirstArticle, indexOfLastArticle));
  }, [currentPage, articles]);

  // Handle pagination
  const handleNextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setCurrentPage((prevPage) => prevPage - 1);

  // Determine what to render
  let content;
  if (loading) {
    content = (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-24 h-24">
              <div className="absolute top-0 left-0 w-full h-full border-8 border-gray-200 rounded-full"></div>
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
                altText={article.title} // Adding alt text for SEO
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
              } focus:z-20 ${
                currentPage === 1
                  ? "disabled:pointer-events-none disabled:opacity-40"
                  : ""
              } dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
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
              } focus:z-20 ${
                currentArticles.length < articlesPerPage
                  ? "disabled:pointer-events-none disabled:opacity-40"
                  : ""
              } dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300`}
            >
              <span>Suivant</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
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
      <head>
        <title>Nos Projets - Za Gasy Ko</title>
        <meta
          name="description"
          content="Découvrez les projets de Za Gasy Ko, une association caritative dédiée à l'aide des habitants de Madagascar. Explorez nos actions et nos initiatives."
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
        <meta
          property="og:image"
          content="https://zagasyko.com/path/to/image.jpg"
        />
        <link rel="canonical" href="https://zagasyko.com/archive" />
      </head>

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
