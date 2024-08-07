import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white mx-auto mb-8"></div>
        <h2 className="text-3xl font-semibold text-white mb-4">Chargement en cours...</h2>
        <p className="text-lg text-indigo-200">Préparez-vous à une expérience extraordinaire</p>
      </div>
    </div>
  );
};

export default LoadingPage;