import type { Metadata } from 'next';
import WorkoutDetails from '@/components/WorkoutDetails';
import { getWorkout } from '@/lib/workouts';
import { notFound } from 'next/navigation';

interface PageProps{
  params: Promise<{ workoutID: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { workoutID } = await params;
  const workout = await getWorkout(workoutID);

  return {
    title: workout?.name ?? 'Workout Details',
  };
}

export default async function Page({ params }: PageProps) {
  const { workoutID } = await params;
  const workout = await getWorkout(workoutID);

  if (!workout) {
    notFound();
  }

  return (
    <main>
      <WorkoutDetails workout={workout} />
    </main>
  );
}