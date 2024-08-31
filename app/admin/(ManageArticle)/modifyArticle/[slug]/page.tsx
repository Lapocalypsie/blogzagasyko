"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { authors } from "@/app/utils/const";
import { useRouter } from "next/navigation";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface ArticlePageProps {
  params: { slug: string };
}

interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  imageSrc: string;
  slug: string;
  content: string;
}

const ModifyArticlePage: React.FC<ArticlePageProps> = ({ params }) => {
  const { slug } = params;
  const [article, setArticle] = useState<Article | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(authors[0]);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [keepOldImage, setKeepOldImage] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  // Function to normalize and generate a slug
  const generateSlug = (str: string) => {
    return str
      .normalize("NFD") // Normalize the string
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove invalid characters
      .trim() // Trim whitespace
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

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

  useEffect(() => {
    if (articles.length > 0) {
      const foundArticle = articles.find(
        (article) => article.slug.toLowerCase() === slug.toLowerCase()
      );
      if (foundArticle) {
        setArticle(foundArticle);
        setTitle(foundArticle.title);
        setCategory(foundArticle.category);
        setSelectedAuthor(
          authors.find((author) => author.slug === foundArticle.author) ||
            authors[0]
        );
        setContent(foundArticle.content);
        setImageName(foundArticle.imageSrc);
      }
    }
  }, [articles, slug]);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setKeepOldImage(false); // Automatically uncheck the box if a new image is selected
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a valid image file.",
      });
      setImage(null);
    }
  };

  const handleImageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageName(e.target.value);
  };

  const handleKeepOldImageChange = () => {
    if (keepOldImage) {
      setImage(null); // Remove the new image if the old one is kept
    }
    setKeepOldImage(!keepOldImage);
  };

  const uploadImage = async () => {
    if (!image) return null; // No new image to upload

    const fd = new FormData();
    fd.append("myfile", image);
    fd.append("customName", imageName);

    const response = await fetch("/api/uploadImage", {
      method: "POST",
      body: fd,
    });

    if (response.ok) {
      const result = await response.json();
      return result.url; // Return the URL of the uploaded image
    } else {
      toast({
        variant: "destructive",
        title: "Image upload failed",
        description: "There was an issue uploading the image.",
      });
      return null;
    }
  };

  const handleSubmit = async () => {
    let imageUrl = article?.imageSrc || null;

    if (!keepOldImage && image) {
      imageUrl = await uploadImage(); // Upload the new image if one is selected and the old one is not kept
    }

    if (!imageUrl) {
      console.error("Image upload failed. Cannot publish article.");
      toast({
        variant: "destructive",
        title: "Image upload failed",
        description: "There was an issue uploading the image.",
      });
      return;
    }

    const updatedArticle = {
      ...article,
      title,
      category,
      author: selectedAuthor,
      date: new Date().toISOString().split("T")[0],
      imageSrc: imageUrl,
      slug: generateSlug(title), // Generate a normalized slug
      content,
    };

    const response = await fetch(`/api/database/Articles`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArticle),
    });

    if (response.ok) {
      toast({
        variant: "success",
        description: "Votre article a été mis à jour avec succès.",
      });
      router.push("/admin/modifyArticle");
    } else {
      toast({
        variant: "destructive",
        title: "Mise à jour échouée",
        description:
          "Il y a eu un problème avec la mise à jour de votre article.",
        action: <ToastAction altText="Try again">Réessayer</ToastAction>,
      });
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Modifier l&apos;article</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <select
            value={selectedAuthor.slug}
            onChange={(e) =>
              setSelectedAuthor(
                authors.find((author) => author.slug === e.target.value) ||
                  authors[0]
              )
            }
            className="w-full border border-gray-300 p-2 rounded"
          >
            {authors.map((author) => (
              <option key={author.slug} value={author.slug}>
                {author.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Image Name"
            value={imageName}
            onChange={handleImageNameChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={keepOldImage}
              onChange={handleKeepOldImageChange}
              className="mr-2"
            />
            <label>Garder l&apos;ancienne image</label>
          </div>
          <div className="flex-grow">
            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="min-h-[200px] border border-gray-300 rounded"
            />
          </div>
          <Button onClick={handleSubmit} className="mt-4 w-full">
            Mettre à jour
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ModifyArticlePage;
