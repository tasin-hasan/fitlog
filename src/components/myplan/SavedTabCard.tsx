import { ExerciseContext, IContextType } from "@/context/ExerciseContext";
import { IExerciseDataType } from "@/types/exercises.type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { GiMuscleUp } from "react-icons/gi";
import {
  IoCheckmark,
  IoClose,
  IoFlameOutline,
  IoStar,
  IoTimeOutline,
} from "react-icons/io5";
import { toast } from "react-toastify";

const SavedTabCard = ({ exercise }: { exercise: IExerciseDataType }) => {
  const context: IContextType = useContext(ExerciseContext)!;

  if (!context) {
    throw new Error("Exercises context is missing");
  }

  const {
    savedExercise,
    setSavedExercise,
    savedCompleteExercises,
    setSavedCompletedExercises,
  } = context;

  const handleMarkButton = () => {
    setSavedCompletedExercises((previous) => {
      if (previous.includes(exercise.id)) {
        return previous;
      }

      return [...previous, exercise.id];
    });
  };

  const handleRemoveButton = () => {
    const remainingExercises = savedExercise.filter(
      (saveExercise) => saveExercise.id !== exercise.id,
    );


    const remainedMarkedData = savedCompleteExercises.filter((savedExercise)=> savedExercise !== exercise.id)

    toast.warning("Removes the workout");

    setSavedExercise([...remainingExercises]);
    setSavedCompletedExercises([...remainedMarkedData]);
  };

  const isMarkDone = savedCompleteExercises.includes(exercise.id);

  return (
    <div className="bg-[#14161c] border border-gray-800 mb-2 rounded-xl p-3 sm:p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Exercise information */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Thumbnail */}
        <div className="relative w-24 h-20 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>

        {/* Title and stats */}
        <div className="min-w-0 space-y-2">
          <h3 className="text-white font-bold text-sm sm:text-base uppercase truncate">
            {exercise.name}
          </h3>

          <p className="text-gray-500 text-xs">{exercise.equipment}</p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs">
            <span className="flex items-center gap-1 whitespace-nowrap">
              <IoTimeOutline className="text-[#c2f700]" size={14} />
              {exercise.duration} min
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap">
              <IoFlameOutline className="text-[#c2f700]" size={14} />
              {exercise.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 whitespace-nowrap">
              <IoStar className="text-[#c2f700]" size={14} />
              {exercise.rating}
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 md:shrink-0">
        <Link
          href={`/my-plan/${exercise.id}`}
          className="btn btn-sm btn-outline border-gray-700 text-gray-300 hover:bg-gray-800 rounded-full flex-1 text-xs"
        >
          View Details
        </Link>

        <button
          className="btn btn-sm bg-[#c2f700] text-black border-none hover:bg-[#d5ff36] rounded-full flex-1 text-xs whitespace-nowrap"
          onClick={handleMarkButton}
          disabled={isMarkDone}
        >
          {isMarkDone ? (
            <>
              <>
                <GiMuscleUp size={16} />
                Completed
              </>
            </>
          ) : (
            <>
              <IoCheckmark size={16} />
              Mark as Done
            </>
          )}
        </button>

        <button
          className="btn btn-sm btn-ghost text-gray-500 hover:text-red-500 px-2"
          aria-label="Remove exercise"
          onClick={handleRemoveButton}
        >
          <IoClose size={18} />
        </button>
      </div>
    </div>
  );
};

export default SavedTabCard;
