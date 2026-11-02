import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl sm:text-8xl font-bold text-[#c2f700]">404</h1>

      <h2 className="text-white text-xl sm:text-2xl font-bold mt-4">
        PAGE NOT FOUND
      </h2>

      <p className="text-gray-400 text-sm mt-3 max-w-md">
        Sorry! The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="btn bg-[#c2f700] text-black border-none hover:bg-[#d5ff36] rounded-full mt-6"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
