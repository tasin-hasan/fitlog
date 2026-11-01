import { getExerciseData } from "@/lib/getExercises";
import { IExerciseDataType } from "@/types/exercises.type";
import React from "react";
import ExerciseCard from "../shared/ExerciseCard";

const Library = async () => {
  const exercisesData: IExerciseDataType[] = await getExerciseData();

  return (
    <main
      id="workouts"
      className="max-w-7xl mx-auto my-12 md:my-20 px-3 sm:px-4 lg:px-6"
    >
      <h2 className="text-2xl font-semibold text-center md:text-left text-white">
        THE LIBRARY
      </h2>

      <p className="text-sm text-gray-500 mb-5 text-center md:text-left">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {exercisesData.map((exerciseData) => {
          return (
            <div key={exerciseData.id}>
              <ExerciseCard exerciseData={exerciseData} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Library;