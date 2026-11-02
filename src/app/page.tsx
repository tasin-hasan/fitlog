import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import ExcerciseLoading from "@/components/shared/ExcerciseLoading";
import { Suspense } from "react";

export default function Workout() {
  return (
    <div>
      <Banner></Banner>

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

        <Suspense fallback={<ExcerciseLoading/>}>
          <Library></Library>
        </Suspense>
      </main>
    </div>
  );
}
