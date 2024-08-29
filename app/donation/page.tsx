"use client";

import React, { useState } from "react";

export default function DonatePage() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // Rediriger vers Stripe Checkout
    } else {
      console.error("Erreur :", data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-teal-100 to-blue-200 p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Faire un Don
        </h1>
        <p className="text-center text-gray-600 mb-8 leading-relaxed">
          Votre soutien nous aide à poursuivre notre mission. Entrez le montant
          que vous souhaitez donner ci-dessous.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Montant du Don (EUR) :
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              min="1"
              step="0.01"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-150 ease-in-out"
              placeholder="Entrez le montant"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-teal-500 text-white rounded-lg font-medium shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition duration-200 ease-in-out transform hover:scale-105"
            >
              Faire un Don Maintenant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
