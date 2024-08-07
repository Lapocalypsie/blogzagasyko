//@ts-nocheck
import React from "react";
import Header from "./header";
import Image from "./image";
import BodyArticle from "./bodyArticle";
import { articles } from "@/app/utils/const";

const ArticlesList = () => {
  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} articleData={article} />
      ))}
    </div>
  );
};

const Article = ({ articleData }: any) => {
  const {
    title,
    category,
    imageUrl,
    authorName,
    authorImageUrl,
    authorDescription,
    content,
  } = articleData;

  return (
    <div>
      <Header category={category} />
      <Image imageUrl={imageUrl} alt="Thumbnail" />
      <BodyArticle
        authorName={authorName}
        authorImageUrl={authorImageUrl}
        authorDescription={authorDescription}
      >
        {/* Render article title and content */}
        <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          {title}
        </h1>
        <div
          className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </BodyArticle>
    </div>
  );
};

export default ArticlesList;
