import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-8 mt-10 border-t border-gray-200 dark:border-gray-800">
      {/* Copyright */}
      <div className="text-center text-sm text-gray-700 dark:text-gray-400">
        © 2024 Za Gasy Ko. All rights reserved.
      </div>

      {/* Credits */}
      <div className="mt-2 flex justify-center items-center text-sm text-gray-500 dark:text-gray-600">
        <span>Made by Jimmy Rasolosoa</span>
        <span className="mx-2">·</span>
        <span>
          <a
            href="https://jimmy-rasolosoa.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:text-blue-500 transition-colors"
          >
            Visiter
          </a>
        </span>
      </div>

      {/* Optional Section for Logo or Additional Links */}
      <div className="mt-5 flex justify-center">
        <a
          href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/Logo.svg"
            alt="Za Gasy Ko Logo"
            className="w-32 mx-auto"
            width={128}
            height={128}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
