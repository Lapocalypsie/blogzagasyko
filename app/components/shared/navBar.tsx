"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const NAV_LINKS = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
    { href: "/archive", label: "Nos projets" },
    {
      href: "https://zagasykogallerie.vercel.app/",
      label: "Galerie",
      external: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 lg:px-8 max-w-screen-xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              alt="Logo Za Gasy Ko"
              src="/Logo.png"
              width={140}
              height={70}
              className="object-contain transition-transform hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-gray-600 
                  hover:text-blue-500 
                  transition-colors duration-300 
                  relative after:absolute after:bottom-[-4px] 
                  after:left-0 after:w-0 after:h-[2px] 
                  after:bg-blue-500 after:transition-all 
                  after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/donation"
              className="flex items-center gap-2 text-white 
                bg-blue-500 hover:bg-blue-600 
                px-4 py-2 rounded-full 
                transition-all duration-300 
                shadow-md hover:shadow-lg"
            >
              <Heart className="w-4 h-4 fill-white" />
              Faire un don
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-500 
                focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 md:hidden">
            <div
              className="flex flex-col h-full pt-20 px-6 space-y-6 
              bg-gradient-to-b from-white to-blue-50"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={toggleMenu}
                  className="text-lg font-medium text-gray-700 
                    hover:text-blue-500 py-3 
                    border-b border-gray-200 
                    transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/donation"
                onClick={toggleMenu}
                className="flex justify-center items-center gap-3 
                  text-white bg-blue-500 hover:bg-blue-600 
                  px-6 py-3 rounded-full 
                  text-lg font-semibold 
                  shadow-md hover:shadow-lg 
                  transition-all"
              >
                <Heart className="w-5 h-5 fill-white" />
                Faire un don
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
