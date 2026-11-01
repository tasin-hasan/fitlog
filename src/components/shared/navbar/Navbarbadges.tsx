"use client"
import { ExerciseContext, IContextType } from '@/context/ExerciseContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const Navbarbadges = () => {
    const context: IContextType = useContext(ExerciseContext)!;
    const {planedExercise, savedExercise} = context;

    return (
        <div className='flex items-center gap-2 sm:gap-5'>
            <Link href={"/my-plan"}>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <p className="text-sm">Plan</p>
              <p className="text-black bg-[#c2f700] text-sm  rounded-full px-2 ">
                {planedExercise.length}
              </p>
            </div>
          </Link>

          <Link href={"/my-plan"}>
            <div className="flex items-center gap-1 whitespace-nowrap">
              <p className="text-sm">Saved</p>
              <p className="text-gray-300 border border-gray-400  rounded-full px-2 text-sm">
                {savedExercise.length}
              </p>
            </div>
          </Link>
        </div>
    );
};

export default Navbarbadges;