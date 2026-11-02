import { IExerciseDataType } from "@/types/exercises.type";

export const getExerciseData = async()=> {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
        cache: "no-store"
    });

    const data:IExerciseDataType[] = await response.json();

    return data;
}

