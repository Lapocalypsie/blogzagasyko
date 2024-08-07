import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const articlesFilePath = path.join(process.cwd(), "app", "utils", "articles.json");

export const POST = async (request: Request) => {
  try {
    const body = await request.text();

    if (!body) {
      throw new Error("Request body is empty");
    }

    const newArticle = JSON.parse(body);

    // Read existing articles
    let articles = [];
    try {
      const fileContent = await fs.readFile(articlesFilePath, "utf8");
      articles = fileContent ? JSON.parse(fileContent) : [];
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        // File does not exist, initialize articles as an empty array
        articles = [];
      } else {
        throw error;
      }
    }

    // Add the new article
    articles.push(newArticle);

    // Write the updated articles back to the file
    await fs.writeFile(articlesFilePath, JSON.stringify(articles, null, 2));

    return NextResponse.json({ message: "Article saved successfully" });
  } catch (error) {
    console.error("Error saving article:", error);
    return NextResponse.json({ message: "Problem in saving file" }, { status: 500 });
  }
};
