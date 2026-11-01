"use client";

import { ExerciseContext, IContextType } from "@/context/ExerciseContext";
import { useContext } from "react";

const CounterCard = () => {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error("Exercise Provider is missing");
  }

  const { planedExercise } = context;

  return (
    <div className="bg-[#13151c] p-5 sm:p-8 md:p-10 lg:p-15 rounded-2xl">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">

        {/* Exercises */}
        <div className="text-center sm:text-left">
          <p className="text-gray-500 text-base sm:text-lg">
            Exercises
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c2f700]">
            {planedExercise.length}
          </h1>
        </div>

        {/* Minutes */}
        <div className="text-center sm:text-left sm:px-5 sm:border-l sm:border-gray-800">
          <p className="text-gray-500 text-base sm:text-lg">
            Minutes
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {planedExercise.reduce(
              (total, exercise) => total + exercise.duration,
              0,
            )}
          </h1>
        </div>

        {/* Calories */}
        <div className="text-center sm:text-left sm:px-5 sm:border-l sm:border-gray-800">
          <p className="text-gray-500 text-base sm:text-lg">
            Calories
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {planedExercise.reduce(
              (total, exercise) => total + exercise.caloriesBurned,
              0,
            )}
          </h1>
        </div>

      </div>
    </div>
  );
};

export default CounterCard;