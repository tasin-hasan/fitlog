"use client"
import { IExerciseDataType } from "@/types/exercises.type";
import React, { createContext, ReactNode, useState } from "react";

export interface IContextType {
   planedExercise: IExerciseDataType[];
   setPlanedExercise: React.Dispatch<
   React.SetStateAction<IExerciseDataType[]>
   >;

   savedExercise: IExerciseDataType[];
   setSavedExercise: React.Dispatch<React.SetStateAction<IExerciseDataType[]>>;

   completedExercises: number[];
   setCompletedExercises: React.Dispatch<
   React.SetStateAction<number[]>
   >;

   savedCompleteExercises: number[];
   setSavedCompletedExercises: React.Dispatch<
   React.SetStateAction<number[]>
   >;
}


export const ExerciseContext = createContext<null | IContextType>(null);

const ExerciseProvider = ({children}: {children: ReactNode}) => {

    const [planedExercise, setPlanedExercise] = useState<IExerciseDataType[]>([]);

    const [savedExercise, setSavedExercise] = useState<IExerciseDataType[]>([]);
    const [completedExercises, setCompletedExercises] = useState<number[]>([]);

    const [savedCompleteExercises, setSavedCompletedExercises] = useState<number[]>([]);

    const sharedData = {
        planedExercise,
        setPlanedExercise,
        savedExercise,
        setSavedExercise,
        completedExercises,
        setCompletedExercises,
        savedCompleteExercises,
        setSavedCompletedExercises
    }
    
    return (
        <ExerciseContext.Provider value={sharedData}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;