"use client";
import { ExerciseContext, IContextType } from "@/context/ExerciseContext";
import { IExerciseDataType } from "@/types/exercises.type";
import { useContext } from "react";
import { IoSaveOutline, IoToday } from "react-icons/io5";
import { toast } from "react-toastify";

interface IButtonDataProps {
  exerciseData: IExerciseDataType;
}

const Buttons = ({ exerciseData }: IButtonDataProps) => {
  const context: IContextType = useContext(ExerciseContext)!;

  if (!context) {
    throw new Error("Exercise provider is missing");
  }

  const { planedExercise, setPlanedExercise, setSavedExercise, savedExercise } =
    context;

  const handlePlanData = () => {
    const lengthOfPlanedExercise = planedExercise.length >= 5;

    const isPlanExcerciseAvailable = planedExercise.some(
      (previous) => previous.id === exerciseData.id,
    );

    if (isPlanExcerciseAvailable) {
      toast.error("Exercise is already in your plan");
      return;
    }

    if(lengthOfPlanedExercise) {
        toast.error("You can add maximum of 5 exercises in the today's plan");
        return;
    }

    setPlanedExercise((previous) => [...previous, exerciseData]);
    toast.success("Your exercise is added in the today's plan");
  };

  const handleSavedData = () => {
    const isSavedExcerciseAvailable = savedExercise.some(
      (previous) => previous.id === exerciseData.id,
    );

    if (isSavedExcerciseAvailable) {
      toast.error("Exercise is already in your save for the later");
      return;
    }

    setSavedExercise((previous) => [...previous, exerciseData]);
    toast.success("Your exercise is added in the save for the later");
  };

  // console.log("Planed exercise data",planedExercise)
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <button
        className="btn bg-[#c2f700] text-black border-none hover:bg-[#d5ff36] flex-1"
        onClick={() => handlePlanData()}
      >
        <span>
          <IoToday />
        </span>
        Add to today&apos;s plan
      </button>

      <button
        className="btn btn-outline border-gray-700 text-gray-300 hover:bg-gray-800 flex-1"
        onClick={() => handleSavedData()}
      >
        <span>
          <IoSaveOutline />
        </span>
        Save for later
      </button>
    </div>
  );
};

export default Buttons;
