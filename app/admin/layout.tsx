import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import NavBar from "../components/shared/navBar";
import Footer from "../components/shared/footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <head>
          <link rel="icon" href="/Logo.svg" type="image/svg+xml" />{" "}
          {/* Add favicon */}
          <meta name="robots" content="index, follow" />
          {/* Allow search engines to index the page */}
        </head>
        <body className={inter.className}>
          <div>
            <NavBar />
            {children}
            <Toaster />
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
