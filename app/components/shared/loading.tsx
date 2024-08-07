import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-white rounded-full animate-bounce"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="w-8 h-8 bg-white rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
