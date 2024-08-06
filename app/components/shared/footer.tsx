// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © 2024 Za Gasy Ko. All rights reserved.
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600">
        <span>Made by Jimmy Rasolosoa</span>
        <span>·</span>
        <span>
          <a
            href="https://github.com/Lapocalypsie"
            rel="noopener"
            target="_blank"
          >
            Github
          </a>
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a
            href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            className="relative block w-44"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
