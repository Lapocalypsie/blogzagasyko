"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import ArticleCard from "@/app/components/card/articleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const ProjectsPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const articlesPerPage = 6;

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

  const renderLoading = () => (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl font-semibold text-gray-700">
            Chargement des projets...
          </p>
        </div>
      </div>
    </div>
  );

  const renderEmptyState = () => (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="text-center bg-blue-50 p-10 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Nos projets arrivent bientôt !
        </h2>
        <p className="text-gray-600">
          Restez à l&apos;écoute pour nos prochaines actions caritatives.
        </p>
      </div>
    </div>
  );

  const renderPagination = () => (
    <div className="mt-10 flex justify-center space-x-4">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg transition-all
          ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }
        `}
      >
        <ChevronLeft className="w-5 h-5" />
        Précédent
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentArticles.length < articlesPerPage}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg transition-all
          ${
            currentArticles.length < articlesPerPage
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }
        `}
      >
        Suivant
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );

  const renderArticles = () => (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {currentArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/archive/${article.slug}`}
            className="hover:scale-105 transition-transform duration-300"
          >
            <ArticleCard
              title={article.title}
              category={article.category}
              author={article.author}
              date={article.date}
              imageSrc={article.imageSrc}
              slug={article.slug}
              altText={article.title}
            />
          </Link>
        ))}
      </div>

      {renderPagination()}
    </>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-screen-xl">
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
      </Head>

      <div className="text-center mb-12">
        <h1
          className="text-4xl font-bold text-gray-800 mb-4 
          bg-gradient-to-r from-blue-500 to-green-500 
          bg-clip-text text-transparent"
        >
          Nos Projets
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Chaque projet est une opportunité de changer des vies. Découvrez
          comment nous transformons des communautés à Madagascar.
        </p>
      </div>

      {loading
        ? renderLoading()
        : articles.length === 0
        ? renderEmptyState()
        : renderArticles()}
    </div>
  );
};

export default ProjectsPage;
