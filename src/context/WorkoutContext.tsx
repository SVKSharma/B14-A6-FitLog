'use client';
import { Workout } from '@/types/Workout';
import { createContext, ReactNode, useEffect, useState } from 'react';

const TODAYS_PLAN_STORAGE_KEY = 'fit-log:todays-workout-plan';
const SAVED_WORKOUTS_STORAGE_KEY = 'fit-log:saved-workouts';
const COMPLETED_WORKOUTS_STORAGE_KEY = 'fit-log:completed-workouts';

const readWorkouts = (key: string): Workout[] => {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (!storedValue) return [];

    const parsedValue: unknown = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) return [];

    return parsedValue.flatMap((value) => {
      if (!value || typeof value !== 'object') return [];

      const workout = value as Workout & { id: number | string };
      const id = Number(workout.id);
      return Number.isSafeInteger(id) && id > 0 ? [{ ...workout, id }] : [];
    });
  } catch {
    return [];
  }
};

const readCompletedIds = (): number[] => {
  try {
    const storedValue = window.localStorage.getItem(COMPLETED_WORKOUTS_STORAGE_KEY);
    const parsedValue: unknown = storedValue ? JSON.parse(storedValue) : [];

    return Array.isArray(parsedValue)
      ? parsedValue.filter((id): id is number => Number.isSafeInteger(id) && id > 0)
      : [];
  } catch {
    return [];
  }
};

interface WorkoutContextType {
  todaysWorkoutPlan: Workout[];
  setTodaysWorkoutPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  savedWorkouts: Workout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
  completedWorkoutIds: number[];
  setCompletedWorkoutIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  todaysWorkoutPlan: [],
  setTodaysWorkoutPlan: () => {},
  savedWorkouts: [],
  setSavedWorkouts: () => {},
  completedWorkoutIds: [],
  setCompletedWorkoutIds: () => {},
});

export const WorkoutContextProvider = ({ children }: { children: ReactNode }) => {
  const [todaysWorkoutPlan, setTodaysWorkoutPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [completedWorkoutIds, setCompletedWorkoutIds] = useState<number[]>([]);
  const [hasLoadedStoredWorkouts, setHasLoadedStoredWorkouts] = useState(false);

  useEffect(() => {
    const restoreStoredWorkouts = window.setTimeout(() => {
      setTodaysWorkoutPlan(readWorkouts(TODAYS_PLAN_STORAGE_KEY));
      setSavedWorkouts(readWorkouts(SAVED_WORKOUTS_STORAGE_KEY));
      setCompletedWorkoutIds(readCompletedIds());
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
    window.localStorage.setItem(
      COMPLETED_WORKOUTS_STORAGE_KEY,
      JSON.stringify(completedWorkoutIds),
    );
  }, [hasLoadedStoredWorkouts, todaysWorkoutPlan, savedWorkouts, completedWorkoutIds]);

  const sharedWorkoutContext = {
    todaysWorkoutPlan,
    setTodaysWorkoutPlan,
    savedWorkouts,
    setSavedWorkouts,
    completedWorkoutIds,
    setCompletedWorkoutIds,
  };

  return (
    <WorkoutContext.Provider value={sharedWorkoutContext}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;