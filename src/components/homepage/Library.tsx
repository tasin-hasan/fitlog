import { getExerciseData } from "@/lib/getExercises";
import { IExerciseDataType } from "@/types/exercises.type";
import React from "react";
import ExerciseCard from "../shared/ExerciseCard";

const Library = async () => {
  const exercisesData: IExerciseDataType[] = await getExerciseData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
      {exercisesData.map((exerciseData) => {
        return (
          <div key={exerciseData.id}>
            <ExerciseCard exerciseData={exerciseData} />
          </div>
        );
      })}
    </div>
  );
};

export default Library;
