// app/layout.js (or wherever your RootLayout is defined)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/shared/navBar";
import Footer from "./components/shared/footer";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Za Gasy Ko | Association Caritative",
  description:
    "Za Gasy Ko est une association caritative dévouée à apporter de l'aide et du soutien aux habitants de Madagascar, en mettant l'accent sur les enfants vivant dans des conditions de pauvreté extrême.",
  keywords:
    "Za Gasy Ko, association caritative, Madagascar, aide humanitaire, enfants, pauvreté",
  authors: [{ name: "Za Gasy Ko", url: "https://www.zagasyko.com" }],
  openGraph: {
    title: "Za Gasy Ko | Association Caritative",
    description: "Apportant de l'aide et du soutien aux enfants de Madagascar.",
    url: "https://www.zagasyko.org", // Update with your site's URL
    images: "/Logo.svg", // Path to your logo
    siteName: "Za Gasy Ko",
  },
};

export default function RootLayout({
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
          <meta name="robots" content="index, follow" />{" "}
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
