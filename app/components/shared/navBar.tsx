"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <nav>
        <div className="flex flex-wrap items-center justify-between md:justify-between md:gap-10">
          {/* Liens de navigation et logo pour le bureau */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/"
            >
              Accueil
            </a>
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/about"
            >
              À propos
            </a>
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/contact"
            >
              Contact
            </a>
          </div>

          {/* Logo - doit être à gauche lorsqu'il est activé */}
          <div className="flex items-center justify-center flex-grow">
            <a href="/" className="flex items-center justify-center">
              <Image
                alt="Logo"
                src="/Logo.svg"
                width={200} // Adjust the width as needed
                height={100} // Adjust the height as needed
                className="object-contain" // Ensures the image maintains its aspect ratio
              />
            </a>
          </div>

          {/* Liens de navigation supplémentaires et bascule du menu mobile */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/archive"
            >
              Nos projets
            </a>
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
            >
              Télécharger
            </a>
          </div>

          <button
            aria-label="Basculer le menu"
            className="ml-auto rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Liens de navigation mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col mt-4">
            <a
              className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/"
            >
              Accueil
            </a>
            <a
              className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/about"
            >
              À propos
            </a>
            <a
              className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              href="/archive"
            >
              Archive
            </a>
            <a
              className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://stablo-pro.web3templates.com/"
            >
              Version Pro
            </a>
            <a
              className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
            >
              Télécharger
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
