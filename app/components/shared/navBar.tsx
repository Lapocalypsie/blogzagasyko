"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle state
  };

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-start">
          <a href="/" className="flex items-center">
            <Image
              alt="Logo"
              src="/Logo.svg"
              width={120}
              height={60}
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/"
          >
            Accueil
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/about"
          >
            À propos
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/archive"
          >
            Nos projets
          </a>
          <a
            className="text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/gallery"
          >
            Gallery
          </a>
          <a
            className="text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
            href="/donation"
          >
            Faire un don
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            className="text-gray-600 hover:text-blue-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          <a
            className="block text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/"
          >
            Accueil
          </a>
          <a
            className="block text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/about"
          >
            À propos
          </a>
          <a
            className="block text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="block text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/archive"
          >
            Nos projets
          </a>
          <a
            className="block text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
            href="/gallery"
          >
            Gallery
          </a>
          <a
            className="block text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-center"
            target="_blank"
            rel="noopener noreferrer"
            href="/donation"
          >
            Faire un don
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
