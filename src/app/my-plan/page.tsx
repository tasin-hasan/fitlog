import CounterCard from "@/components/myplan/CounterCard";
import PlanSavedUI from "@/components/myplan/PlanSavedUI";
import React from "react";

const MyPlan = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 space-y-10">
      {/* my plan title and description */}
      <div>
        <h1 className="text-white text-xl text-center font-bold md:text-left md:text-3xl">
          MY PLAN
        </h1>
        <p className="text-sm text-center text-gray-500 md:text-left">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <CounterCard />

      <PlanSavedUI></PlanSavedUI>
    </div>
  );
};

export default MyPlan;
