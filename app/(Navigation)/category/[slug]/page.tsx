"use client"; // Ensure this is here only if this component needs to run on the client

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head"; // Ensure to import Head for setting meta tags
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

interface PageProps {
  params: { slug: string }; // Expecting slug from the URL
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { slug } = params; // Get the slug from the URL params
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Normalize function to handle accents
  const normalizeString = (str: string) => {
    return str
      .normalize("NFD") // Normalize to decomposed form
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks (accents)
      .toLowerCase(); // Convert to lowercase
  };

  // Fetch articles from the API
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
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Decode the slug and filter articles based on the normalized category and slug
  const decodedSlug = decodeURIComponent(slug); // Decode the URL-encoded slug
  const filteredArticles = articles.filter((article) => {
    const normalizedCategory = normalizeString(article.category);
    const normalizedSlug = normalizeString(decodedSlug); // Normalize the decoded slug

    // Log the normalized values for comparison
    console.log(
      `Comparing category: "${normalizedCategory}" with slug: "${normalizedSlug}"`
    );

    return normalizedCategory === normalizedSlug;
  });

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
  } else if (filteredArticles.length === 0) {
    content = (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-2xl">Aucun projet trouvé !</div>
      </div>
    );
  } else {
    content = (
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {filteredArticles.map((article) => (
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
    );
  }

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 relative">
      <Head>
        <title>
          {filteredArticles.length > 0
            ? filteredArticles[0].category
            : "Projet introuvable"}{" "}
          - Za Gasy Ko
        </title>
        <meta
          name="description"
          content={
            filteredArticles.length > 0
              ? filteredArticles[0].title
              : "Aucun projet trouvé."
          }
        />
        <meta
          name="keywords"
          content="projets, Za Gasy Ko, Madagascar, aide, association caritative"
        />
        <meta
          property="og:title"
          content={
            filteredArticles.length > 0
              ? filteredArticles[0].category
              : "Projet introuvable"
          }
        />
        <meta
          property="og:description"
          content={
            filteredArticles.length > 0
              ? filteredArticles[0].category
              : "Aucun projet trouvé."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://zagasyko.com/category/${slug}`}
        />
        <link rel="canonical" href={`https://zagasyko.com/category/${slug}`} />
      </Head>

      <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {filteredArticles.length > 0
          ? filteredArticles[0].category
          : "Aucun projet trouvé pour cette catégorie !"}
      </h1>
      <div className="text-center"></div>
      {content}
    </div>
  );
};

export default Page;
