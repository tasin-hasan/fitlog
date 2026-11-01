import Buttons from "@/components/plansavedbuttons/Buttons";
import { getExerciseData } from "@/lib/getExercises";
import { IExerciseDataType } from "@/types/exercises.type";
import Image from "next/image";
import React from "react";
import { IoSaveOutline, IoToday } from "react-icons/io5";

interface IParamsType {
  params: Promise<{
    id: string;
  }>;
}

const ExerciseDetailsPage = async ({ params }: IParamsType) => {
  const { id } = await params;

  const exercisesData: IExerciseDataType[] = await getExerciseData();

  const exerciseData = exercisesData.find(
    (exercise) => exercise.id === Number(id),
  );

  if (!exerciseData) {
    return <h2>The data is not found</h2>;
  }

  // console.log(exerciseData);

  return (
    <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
        {/* Left section: Exercise Image */}
        <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
          <Image
            src={exerciseData.image}
            alt={exerciseData.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right section: Exercise Details */}
        <div className="space-y-5">
          {/* Title and Description */}
          <div>
            <h1 className="text-white text-2xl sm:text-3xl font-bold uppercase">
              {exerciseData.name}
            </h1>

            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              {exerciseData.description}
            </p>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {exerciseData.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="badge bg-[#c2f700] text-black border-none font-semibold"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          {/* Exercise Information */}
          <div className="bg-[#14161c] border border-gray-800 rounded-xl px-4 divide-y divide-gray-800">
            {[
              ["EQUIPMENT", exerciseData.equipment],
              ["DIFFICULTY", exerciseData.difficulty],
              ["SETS", exerciseData.sets],
              ["REPS", exerciseData.reps],
              ["DURATION", `${exerciseData.duration} min`],
              ["CALORIES", `${exerciseData.caloriesBurned} kcal`],
              ["RATING", exerciseData.rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center gap-4 py-3"
              >
                <span className="text-[11px] text-gray-500 font-bold">
                  {label}
                </span>

                <span className="text-sm text-gray-300 text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-white text-sm font-bold mb-3">INSTRUCTIONS</h2>

            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-400">
              {exerciseData.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          {/* Action Buttons - UI only */}
          <Buttons exerciseData={exerciseData}></Buttons>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetailsPage;
