"use client"
import { IExerciseDataType } from "@/types/exercises.type";
import React, { createContext, ReactNode, useState } from "react";

export interface IContextType {
   planedExercise: IExerciseDataType[];
   setPlanedExercise: React.Dispatch<
   React.SetStateAction<IExerciseDataType[]>
   >;

   savedExercise: IExerciseDataType[];
   setSavedExercise: React.Dispatch<React.SetStateAction<IExerciseDataType[]>>
}


export const ExerciseContext = createContext<null | IContextType>(null);

const ExerciseProvider = ({children}: {children: ReactNode}) => {

    const [planedExercise, setPlanedExercise] = useState<IExerciseDataType[]>([]);

    const [savedExercise, setSavedExercise] = useState<IExerciseDataType[]>([]);

    const sharedData = {
        planedExercise,
        setPlanedExercise,
        savedExercise,
        setSavedExercise
    }
    
    return (
        <ExerciseContext.Provider value={sharedData}>
            {children}
        </ExerciseContext.Provider>
    );
};

export default ExerciseProvider;