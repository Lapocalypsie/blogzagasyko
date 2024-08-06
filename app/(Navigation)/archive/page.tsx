"use client";
import React, { useState, useEffect } from "react";
import ArticleCard from "../../components/card/articleCard";
import { articles } from "../../utils/const";
import Link from "next/link";

const Page = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState([]);
  const articlesPerPage = 5; // Number of articles per page

  // Pagination logic
  useEffect(() => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    setCurrentArticles(articles.slice(indexOfFirstArticle, indexOfLastArticle));
  }, [currentPage]);

  // Function to handle pagination navigation
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 relative">
      <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Archive
      </h1>
      <div className="text-center">
        <p className="mt-2 text-lg">See all posts we have ever written.</p>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {/* Render ArticleCard for each article in current page */}
        {currentArticles.map((article) => (
          <Link key={article.title} href={`/archive/${article.slug}`} passHref>
            <ArticleCard
              title={article.title}
              category={article.category}
              author={article.author}
              date={article.date}
              imageSrc={article.imageSrc}
              slug={article.slug}
            />
          </Link>
        ))}
      </div>

      {/* Pagination buttons */}
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
              data-slot="icon"
              className="h-3 w-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              ></path>
            </svg>
            <span>Previous</span>
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
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
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
    </div>
  );
};

export default Page;
