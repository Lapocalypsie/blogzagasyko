//@ts-nocheck
"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { authors } from "../../../utils/const";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export default function Home() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(authors[0]);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imageName, setImageName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const { toast } = useToast();

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

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please upload a valid image file.",
      });
      setImage(null);
    }
  };

  const handleImageNameChange = (e) => {
    setImageName(e.target.value);
  };

  const uploadImage = async () => {
    if (!image) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please select an image to upload.",
      });
      return null;
    }

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

  const generateSlug = (str: string) => {
    return str
      .normalize("NFD") // Normalize the string
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, "") // Remove invalid characters
      .trim() // Trim whitespace
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

  const handleSubmit = async () => {
    setIsLoading(true); // Start loading
    const imageUrl = await uploadImage(); // Upload the image and get the URL

    if (!imageUrl) {
      console.error("Image upload failed. Cannot publish article.");
      setIsLoading(false); // Stop loading
      return;
    }

    const newArticle = {
      title,
      category,
      author: selectedAuthor,
      date: new Date().toISOString().split("T")[0],
      imageSrc: imageUrl, // Use the URL of the uploaded image
      slug: generateSlug(title),
      content,
    };

    const response = await fetch("/api/database/Articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });

    setIsLoading(false); // Stop loading

    if (response.ok) {
      toast({
        variant: "success",
        description: "Votre article a été publié avec succès.",
      });
      setTitle("");
      setCategory("");
      setContent("");
      setImage(null);
      setImageName("");
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
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Créer un nouvel article</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
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
            required
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
            required
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />

          <div className="flex-grow mt-4">
            {" "}
            {/* Ensure this div wraps the QuillEditor */}
            <QuillEditor
              value={content}
              onChange={handleEditorChange}
              modules={quillModules}
              formats={quillFormats}
              className="min-h-[200px] border border-gray-300 rounded"
            />
          </div>

          <div className="text-center mt-6">
            {" "}
            {/* This div contains the button */}
            <Button
              size="lg"
              onClick={handleSubmit}
              className={`bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`} // Disable button when loading
              disabled={isLoading} // Disable button during submission
            >
              {isLoading ? "Publishing..." : "Publier"}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
