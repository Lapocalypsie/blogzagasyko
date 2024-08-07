// app/layout.js (or wherever your RootLayout is defined)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/shared/navBar";
import Footer from "./components/shared/footer";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Za gasy ko",
  description:
    "Za Gasy Ko est une association caritative dévouée à apporter de l'aide et du soutien aux habitants de Madagascar, en mettant l'accent sur les enfants qui vivent dans des conditions de pauvreté extrême.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body
          className={inter.className}
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
