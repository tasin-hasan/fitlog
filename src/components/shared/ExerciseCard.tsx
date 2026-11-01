import { IExerciseDataType } from "@/types/exercises.type";
import Image from "next/image";
import Link from "next/link";

interface IExerciseCardProps {
  exerciseData: IExerciseDataType;
}

const ExerciseCard = ({ exerciseData }: IExerciseCardProps) => {
  return (
    <Link href={`/my-plan/${exerciseData.id}`}>
      <div className="card bg-[#14161c] border border-gray-800 shadow-lg overflow-hidden hover:border-[#c2f700]/50 transition-all duration-300">
        {/* Workout Image */}
        <figure className="relative h-52 w-full">
          <Image
            src={exerciseData.image}
            alt={exerciseData.name}
            fill
            className="object-cover"
          />
        </figure>

        <div className="card-body p-5 space-y-3">
          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2">
            {exerciseData.muscleGroups.map((group) => (
              <span
                key={group}
                className="badge bg-[#c2f700] text-black border-none font-bold"
              >
                {group.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="card-title text-white text-xl font-bold uppercase">
            {exerciseData.name}
          </h2>

          {/* Equipment */}
          <p className="text-sm text-gray-400">
            Equipment: {exerciseData.equipment}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-700 pt-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{exerciseData.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <span>🔥</span>
              <span>{exerciseData.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>{exerciseData.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
