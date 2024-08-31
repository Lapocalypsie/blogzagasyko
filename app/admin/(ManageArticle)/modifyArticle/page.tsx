"use client";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Article {
  _id: string;
  title: string;
  date: string;
  imageSrc: string;
  slug: string;
  author : {
    name: string;
    avatar : string;
  }
}

const Page = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

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
          ? data.data.sort(
              (a: any, b: any) =>
                (new Date(b.date) as any) - (new Date(a.date) as any)
            )
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

  const handleDelete = async (id: string) => {
    console.log("The id is :", id);
    const response = await fetch(`/api/database/Articles?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      toast({
        variant: "success",
        description: "Votre article a été supprimée avec succès.",
      });
      // Remove the deleted article from the state
      setArticles((prevArticles) =>
        prevArticles.filter((article) => article._id !== id)
      );
    } else {
      toast({
        variant: "destructive",
        title: "Publication échouée",
        description:
          "Il y a eu un problème avec la publication de votre article.",
        action: <ToastAction altText="Try again">Réessayer</ToastAction>,
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-3xl font-extrabold mb-6 text-gray-800">
        Liste des articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-3 text-center text-gray-500">
            Chargement des articles...
          </div>
        ) : (
          articles.map((article) => (
            <div
              key={article._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
            >
              <Image
                src={article.imageSrc}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4">{article.author.name}</p>
                <p className="text-gray-600 mb-4">{article.date}</p>
                <div className="flex justify-between">
                  <Link href={`/admin/modifyArticle/${article.slug}`} passHref>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                      Modifier
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(article._id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
