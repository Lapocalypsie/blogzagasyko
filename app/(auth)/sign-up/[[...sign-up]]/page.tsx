import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Inscription à Za Gasy Ko
        </h1>
        <div className="text-center text-gray-600">
          <p className="mb-4">
            Désolé, l&apos;inscription à Za Gasy Ko n&apos;est disponible que pour les
            administrateurs du site à présent.
          </p>
          <p className="mb-6">
            Si vous êtes administrateur, veuillez contacter :
          </p>
          <div className="space-y-2">
            <p className="font-semibold">Jimmy RASOLOSOA</p>
            <a
              href="mailto:jrasolosoa@gmail.com"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              jrasolosoa@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-white text-center">
        <p>&copy; 2024 Za Gasy Ko. Tous droits réservés.</p>
      </div>
    </div>
  );
}
