'use client';
import { Workout } from '@/types/Workout';
import { createContext, ReactNode, useEffect, useState } from 'react';

const TODAYS_PLAN_STORAGE_KEY = 'fit-log:todays-workout-plan';
const SAVED_WORKOUTS_STORAGE_KEY = 'fit-log:saved-workouts';

const readWorkouts = (key: string): Workout[] => {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (!storedValue) return [];

    const parsedValue: unknown = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? (parsedValue as Workout[]) : [];
  } catch {
    return [];
  }
};

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
  const [hasLoadedStoredWorkouts, setHasLoadedStoredWorkouts] = useState(false);

  useEffect(() => {
    const restoreStoredWorkouts = window.setTimeout(() => {
      setTodaysWorkoutPlan(readWorkouts(TODAYS_PLAN_STORAGE_KEY));
      setSavedWorkouts(readWorkouts(SAVED_WORKOUTS_STORAGE_KEY));
      setHasLoadedStoredWorkouts(true);
    }, 0);

    return () => window.clearTimeout(restoreStoredWorkouts);
  }, []);

  useEffect(() => {
    if (!hasLoadedStoredWorkouts) return;

    window.localStorage.setItem(
      TODAYS_PLAN_STORAGE_KEY,
      JSON.stringify(todaysWorkoutPlan),
    );
    window.localStorage.setItem(
      SAVED_WORKOUTS_STORAGE_KEY,
      JSON.stringify(savedWorkouts),
    );
  }, [hasLoadedStoredWorkouts, todaysWorkoutPlan, savedWorkouts]);

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