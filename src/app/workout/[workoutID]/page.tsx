import type { Metadata } from 'next';
import WorkoutDetails from '@/components/WorkoutDetails';
import { getWorkout, parseWorkoutId } from '@/lib/workouts';
import { notFound } from 'next/navigation';

interface PageProps{
  params: Promise<{ workoutID: string }>;
};

const getWorkoutFromRoute = async (workoutID: string) => {
  const id = parseWorkoutId(workoutID);
  return id === null ? null : getWorkout(id);
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { workoutID } = await params;
  const workout = await getWorkoutFromRoute(workoutID);

  return {
    title: workout?.name ?? 'Workout Details',
  };
}

export default async function Page({ params }: PageProps) {
  const { workoutID } = await params;
  const workout = await getWorkoutFromRoute(workoutID);

  if (!workout) {
    notFound();
  }

  return (
    <main>
      <WorkoutDetails workout={workout} />
    </main>
  );
}