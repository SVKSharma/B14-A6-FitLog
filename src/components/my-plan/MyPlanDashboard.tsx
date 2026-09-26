import { Workout } from '@/types/Workout';

interface MyPlanDashboardProps {
  workouts: Workout[];
}

const MyPlanDashboard = ({ workouts }: MyPlanDashboardProps) => {
  const totalExercises = workouts.length;
  const totalMinutes = workouts.reduce((acc, curr) => acc + curr.duration, 0);
  const totalCalories = workouts.reduce((acc, curr) => acc + curr.caloriesBurned, 0);

  return (
    <div className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4 text-left divide-x divide-gray-800/80">
      <div className="space-y-1">
        <span className="text-gray-400 text-xs font-medium block">Exercises</span>
        <span className="text-3xl sm:text-5xl font-black text-[#a6e22e]">
          {totalExercises}
        </span>
      </div>

      <div className="pl-4 sm:pl-8 space-y-1">
        <span className="text-gray-400 text-xs font-medium block">Minutes</span>
        <span className="text-3xl sm:text-5xl font-black text-white">
          {totalMinutes}
        </span>
      </div>

      <div className="pl-4 sm:pl-8 space-y-1">
        <span className="text-gray-400 text-xs font-medium block">Calories</span>
        <span className="text-3xl sm:text-5xl font-black text-white">
          {totalCalories}
        </span>
      </div>
    </div>
  );
};

export default MyPlanDashboard;
