import Link from "next/link";
import React from "react";
import { IoFitnessOutline } from "react-icons/io5";

const NothingCard = () => {
  return (
    <div className="bg-[#14161c] border border-gray-800 rounded-xl p-10 sm:p-14 flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#c2f700]/10 flex items-center justify-center mb-5">
        <IoFitnessOutline className="text-[#c2f700]" size={32} />
      </div>

      <h2 className="text-white text-xl sm:text-2xl font-bold">
        NOTHING HERE YET
      </h2>

      <p className="text-gray-400 text-sm mt-3 max-w-sm">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="btn bg-[#c2f700] text-black border-none hover:bg-[#d5ff36] rounded-full mt-6 px-6"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default NothingCard;
