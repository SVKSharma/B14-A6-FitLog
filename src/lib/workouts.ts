import { Workout } from '@/types/Workout';

const WORKOUTS_API_URL = 'https://api.abcz.workers.dev/api/fitlog';

export const parseWorkoutId = (value: string): number | null => {
  const id = Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
};

const isWorkout = (value: unknown): value is Workout => {
  if (!value || typeof value !== 'object') return false;

  const workout = value as Partial<Workout>;
  return (
    typeof workout.id === 'number' &&
    typeof workout.name === 'string' &&
    typeof workout.image === 'string' &&
    Array.isArray(workout.muscleGroups) &&
    typeof workout.description === 'string' &&
    Array.isArray(workout.instructions)
  );
};

const getJson = async (url: string): Promise<unknown> => {
  const response = await fetch(url, { next: { revalidate: 300 } });

  if (!response.ok) {
    throw new Error(`Workout API returned ${response.status}`);
  }

  return response.json();
};

export const getWorkouts = async (): Promise<Workout[] | null> => {
  try {
    const data = await getJson(WORKOUTS_API_URL);

    if (!Array.isArray(data) || !data.every(isWorkout)) {
      throw new Error('Workout API returned an invalid list');
    }

    return data;
  } catch (error) {
    console.error('Unable to load workouts:', error);
    return null;
  }
};

export const getWorkout = async (id: number): Promise<Workout | null> => {
  try {
    const data = await getJson(`${WORKOUTS_API_URL}/${id}`);
    return isWorkout(data) ? data : null;
  } catch (error) {
    console.error(`Unable to load workout ${id}:`, error);
    return null;
  }
};