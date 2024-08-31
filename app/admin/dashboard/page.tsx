"use client";

import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
        ></motion.div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-red-500 p-4"
      >
        Non connecté. Veuillez vous connecter pour accéder au tableau de bord.
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-6"
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">
            Bienvenue sur votre tableau de bord, {user.fullName}!
          </h1>
        </div>
        <div className="p-6">
          <button
            onClick={() => signOut()}
            className="mb-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"
          >
            Se déconnecter
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white shadow-md p-6 rounded-lg mt-4 mb-4"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Aperçu de l&apos;activité
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Connecté depuis un nouvel appareil
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Mis à jour la photo de profil
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Rejoint un nouveau groupe
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  Terminé un nouveau défi
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white shadow-md p-6 rounded-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Votre profil</h2>
              <div className="space-y-3">
                <p>
                  <strong className="font-medium">Nom complet:</strong>{" "}
                  {user.fullName}
                </p>
                <p>
                  <strong className="font-medium">Email:</strong>{" "}
                  {user.primaryEmailAddress?.emailAddress}
                </p>
                <p>
                  <strong className="font-medium">
                    Nom d&apos;utilisateur:
                  </strong>{" "}
                  {user.username}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white shadow-lg p-8 rounded-lg max-w-md mx-auto mt-10"
            >
              <h2 className="text-3xl font-bold text-center mb-6">
                Liens Administrateur
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <strong className="text-lg font-semibold">
                    Créer un article:
                  </strong>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded ml-4">
                    <Link href="/admin/newArticle">Créer un article</Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <strong className="text-lg font-semibold">
                    Modifier ou supprimer un article:
                  </strong>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded ml-6">
                    <Link href="/admin/modifyArticle">Modifier un article</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
