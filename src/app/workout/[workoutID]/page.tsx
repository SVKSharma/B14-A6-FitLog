import WorkoutDetails from '@/components/WorkoutDetails';
import { getWorkout } from '@/lib/workouts';
import { notFound } from 'next/navigation';

interface PageProps{
  params: Promise<{ workoutID: string }>;
};

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