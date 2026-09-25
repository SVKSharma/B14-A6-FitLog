'use client';
import { Workout } from '@/types/Workout';
import { createContext, useState, ReactNode } from 'react';

interface WorkoutContextType {
  todaysWorkoutPlan: Workout[];
  setTodaysWorkoutPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  savedWorkouts: Workout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  todaysWorkoutPlan: [],
  setTodaysWorkoutPlan: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
});

export const WorkoutContextProvider = ({ children }: { children: ReactNode }) => {
  const [todaysWorkoutPlan, setTodaysWorkoutPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

  const sharedWorkoutContext = {
    todaysWorkoutPlan,
    setTodaysWorkoutPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedWorkoutContext}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;