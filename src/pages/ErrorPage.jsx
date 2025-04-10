import React from 'react';
import Heroes from "../assets/Hero.jpg";
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${Heroes})` }}
    >
      {/* Overlay for glassmorphism */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Main Card */}
      <div className="relative z-10 w-[90%] max-w-2xl p-2 sm:p-8 bg-white/30 backdrop-blur-md rounded-3xl shadow-lg shadow-blue-600 text-center border border-white/20">
        <h1 className="text-7xl sm:text-8xl font-extrabold text-white drop-shadow-md">
          404
        </h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
          Page Not Found
        </h2>
        <p className="text-white/90 text-lg sm:text-xl mt-4 font-medium">
          Oops! It seems like the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white text-base sm:text-lg font-semibold px-2 py-1.5 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
