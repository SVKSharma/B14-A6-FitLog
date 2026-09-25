"use client";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";
import { Workout } from "@/types/Workout";
import Image from "next/image";
import { FaCalendarPlus, FaBookmark } from "react-icons/fa";

interface WorkoutDetailsProps {
  workout: Workout;
}

export const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const {
    setTodaysWorkoutPlan,
    setSavedWorkouts,
  } = useContext(WorkoutContext);

  const {
    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workout;

  const handleAddToPlan = () => {
    setTodaysWorkoutPlan((prev) => {
      const alreadyExists = prev.some((item) => item.id === workout.id);
      if (alreadyExists) return prev;
      return [...prev, workout];
    });
  };

  const handleSaveForLater = () => {
    setSavedWorkouts((prev) => {
      const alreadyExists = prev.some((item) => item.id === workout.id);
      if (alreadyExists) return prev;
      return [...prev, workout];
    });
  };

  return (
    <section className="w-full bg-[#111318] text-white py-8 lg:py-12">
      <div className="keep-content-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side: Large Visual Media */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-900 border border-gray-800">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Right Side: Details & Actions */}
          <div className="space-y-6">
            {/* Title & Description */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide">
                {name}
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2">
              {muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#a6e22e] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Key Specs Table Panel */}
            <div className="bg-[#181a20] border border-gray-800/80 rounded-xl overflow-hidden text-sm">
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/60">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  EQUIPMENT
                </span>
                <span className="font-medium text-gray-200">{equipment}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/60">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  DIFFICULTY
                </span>
                <span className="font-medium text-gray-200">{difficulty}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/60">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  SETS
                </span>
                <span className="font-medium text-gray-200">{sets}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/60">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  REPS
                </span>
                <span className="font-medium text-gray-200">{reps}</span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/60">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  DURATION
                </span>
                <span className="font-medium text-gray-200">
                  {duration} min
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3 border-b border-gray-800/60">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  CALORIES
                </span>
                <span className="font-medium text-gray-200">
                  {caloriesBurned} kcal
                </span>
              </div>
              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">
                  RATING
                </span>
                <span className="font-medium text-gray-200">{rating}</span>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="space-y-3 pt-2">
              <h2 className="text-lg font-black uppercase tracking-wider">
                INSTRUCTIONS
              </h2>
              <ol className="space-y-2.5 text-gray-300 text-sm">
                {instructions.map((step, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-500 font-bold">
                      {index + 1}.
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={()=>handleAddToPlan()}
                className="flex items-center gap-2 bg-[#a6e22e] text-black font-extrabold text-sm px-6 py-3.5 rounded-xl hover:bg-[#95ce28] transition-colors uppercase tracking-wide cursor-pointer"
              >
                <FaCalendarPlus className="text-base" />
                Add to today&apos;s plan
              </button>

              <button
                onClick={()=>handleSaveForLater()}
                className="flex items-center gap-2 bg-transparent border border-gray-700 text-gray-200 hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:border-gray-500 transition-colors uppercase tracking-wide cursor-pointer"
              >
                <FaBookmark className="text-sm" />
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
