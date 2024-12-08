"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CreditCardIcon, HeartIcon } from "@heroicons/react/24/solid";

const donationPresets = [10, 25, 50, 100];

export default function DonatePage() {
  const [amount, setAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Le traitement du paiement a échoué");
      }
    } catch (error) {
      console.error("Erreur de don:", error);
      alert(
        "Il y a eu un problème lors du traitement de votre don. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-teal-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6 text-center text-white">
          <HeartIcon className="w-16 h-16 mx-auto mb-4 text-white/80" />
          <h1 className="text-3xl font-bold">Soutenez Notre Mission</h1>
          <p className="mt-2 text-white/80">
            Chaque contribution nous aide à faire une différence
          </p>
        </div>

        <div className="p-6">
          {!isCustomAmount ? (
            <div className="grid grid-cols-4 gap-3 mb-6">
              {donationPresets.map((preset) => (
                <motion.button
                  key={preset}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setAmount(preset.toString());
                    setIsCustomAmount(true);
                  }}
                  className="bg-blue-50 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-100 transition"
                >
                  €{preset}
                </motion.button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCustomAmount(true)}
                className="bg-teal-50 text-teal-600 font-semibold py-3 rounded-lg hover:bg-teal-100 transition col-span-4"
              >
                Montant Personnalisé
              </motion.button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <CreditCardIcon className="w-5 h-5 mr-2 text-gray-500" />
                  Montant du Don (€)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  placeholder="Entrez le montant"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Faire un Don
              </motion.button>
              <button
                type="button"
                onClick={() => {
                  setAmount("");
                  setIsCustomAmount(false);
                }}
                className="w-full text-gray-500 hover:text-gray-700 transition"
              >
                Choisir un Autre Montant
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
