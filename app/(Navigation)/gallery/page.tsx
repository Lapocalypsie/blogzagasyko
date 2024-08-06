//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const GalleryPage = () => {
  const allImages = [
    { src: "/madaLandscape/Berenty.jpg", alt: "Image 1" },
    { src: "/madaLandscape/majunga-baobab.jpg", alt: "Image 2" },
    { src: "/madaLandscape/Morondava Baobab.jpg", alt: "Image 3" },
    { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4" },
    { src: "/madaLandscape/Sainte Marie.jpg", alt: "Image 5" },
    { src: "/madaLandscape/Tsingy - Copy.jpg", alt: "Image 6" },
    { src: "/madaLandscape/Berenty.jpg", alt: "Image 1" },
    { src: "/madaLandscape/majunga-baobab.jpg", alt: "Image 2" },
    { src: "/madaLandscape/Morondava Baobab.jpg", alt: "Image 3" },
    { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4" },
    { src: "/madaLandscape/Sainte Marie.jpg", alt: "Image 5" },
    { src: "/madaLandscape/Tsingy - Copy.jpg", alt: "Image 6" },
    { src: "/madaLandscape/Berenty.jpg", alt: "Image 1" },
    { src: "/madaLandscape/majunga-baobab.jpg", alt: "Image 2" },
    { src: "/madaLandscape/Morondava Baobab.jpg", alt: "Image 3" },
    { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4" },
    { src: "/madaLandscape/Sainte Marie.jpg", alt: "Image 5" },
    { src: "/madaLandscape/Tsingy - Copy.jpg", alt: "Image 6" },
    { src: "/madaLandscape/Berenty.jpg", alt: "Image 1" },
    { src: "/madaLandscape/majunga-baobab.jpg", alt: "Image 2" },
    { src: "/madaLandscape/Morondava Baobab.jpg", alt: "Image 3" },
    { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4" },
    { src: "/madaLandscape/Sainte Marie.jpg", alt: "Image 5" },
    { src: "/madaLandscape/Tsingy - Copy.jpg", alt: "Image 6" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImages, setCurrentImages] = useState([]);
  const imagesPerPage = 6; // Number of images per page

  // Pagination logic
  useEffect(() => {
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    setCurrentImages(allImages.slice(indexOfFirstImage, indexOfLastImage));
  }, [currentPage]);

  // Function to handle pagination navigation
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-64">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{image.alt}</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
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
            disabled={currentImages.length < imagesPerPage}
            className={`relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium ${
              currentImages.length < imagesPerPage
                ? "text-gray-500 hover:bg-gray-50"
                : "text-blue-600 hover:bg-blue-50"
            } focus:z-20 ${
              currentImages.length < imagesPerPage
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

export default GalleryPage;
