"use client"

import { ExerciseContext, IContextType } from "@/context/ExerciseContext";
import { useContext, useState } from "react";
import PlanSavedTabCard from "./PlanTabCard";
import NothingCard from "./NothingCard";
import PlanTabCard from "./PlanTabCard";
import SavedTabCard from "./SavedTabCard";
import SortBy from "./SortBy";
import { IExerciseDataType } from "@/types/exercises.type";

const PlanSavedUI = () => {
  const [sortBy, setSortBy] = useState("Duration");

    const context:IContextType = useContext(ExerciseContext)!;

    if(!context) {
        throw new Error("Exercise Provider is missing")
    }

    const {planedExercise, savedExercise} = context;

    const sortExercises = (exercises: IExerciseDataType[])=> {

      const sortedData = [...exercises];

      if(sortBy === "Duration") {
        return sortedData.sort((a, b)=> a.duration -b.duration);
      }

      if(sortBy === "Calories") {
        return sortedData.sort((a, b)=> a.caloriesBurned - b.caloriesBurned);
      }

      if(sortBy === "Rating") {
        return sortedData.sort((a, b)=> b.rating - a.rating);
      }

      return sortedData;

    }

    const sortedPlanExercises = sortExercises(planedExercise);
    const sortedSavedExercises = sortExercises(savedExercise); 

  return (
    <div className="tabs tabs-box">
      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Today's Plan"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {planedExercise.length===0?
        <NothingCard></NothingCard> :sortedPlanExercises.map((exercise)=> <PlanTabCard key={exercise.id} exercise={exercise}></PlanTabCard>)}
      </div>

      <input
        type="radio"
        name="my_tabs_6"
        className="tab"
        aria-label="Saved"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {savedExercise.length===0?
        <NothingCard></NothingCard> :sortedSavedExercises.map((exercise)=> <SavedTabCard key={exercise.id} exercise={exercise}></SavedTabCard>)}
      </div>

      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default PlanSavedUI;
