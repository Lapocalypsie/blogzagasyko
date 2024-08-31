"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

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

const Categories: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

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
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )
          : [];
        setArticles(sortedArticles);

        const categories = Array.from(
          new Set(sortedArticles.map((article: Article) => article.category))
        );
        setUniqueCategories(categories as string[]);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
        setUniqueCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
  } else if (uniqueCategories.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-2xl">Aucune catégorie trouvée !</div>
      </div>
    );
  } else {
    content = (
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {uniqueCategories.map((category) => (
          <li key={category} className="col-span-1">
            <Link
              href={`/category/${normalizeString(category)}`}
              className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
              aria-label={`Voir les articles dans la catégorie ${category}`}
            >
              <div className="relative h-full w-full p-6 flex items-center justify-center">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">
                  {category}
                </h3>
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300 ease-in-out">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 relative">
      <Head>
        <title>Catégories - Za Gasy Ko</title>
        <meta
          name="description"
          content="Explorez toutes les catégories d'articles de Za Gasy Ko."
        />
        <meta
          name="keywords"
          content="catégories, Za Gasy Ko, Madagascar, aide, association caritative"
        />
        <meta property="og:title" content="Catégories - Za Gasy Ko" />
        <meta
          property="og:description"
          content="Explorez toutes les catégories d'articles de Za Gasy Ko."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zagasyko.com/category" />
        <link rel="canonical" href="https://zagasyko.com/category" />
      </Head>

      <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Toutes nos catégories d&apos;articles
      </h1>
      <h2 className="text-center text-xl mt-2 mb-8 text-gray-500 dark:text-gray-400">
        Explorez tous nos thèmes !
      </h2>
      {content}
    </div>
  );
};

export default Categories;
