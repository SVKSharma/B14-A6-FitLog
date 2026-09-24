import WorkoutDetails from '@/components/WorkoutDetails';
import { Workout } from '@/types/Workout';

const getWorkInfo = async (id: string): Promise<Workout> => {
  const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  return response.json();
};

interface PageProps{
  params: Promise<{ workoutID: string }>;
};

export default async function Page({ params }: PageProps) {
  const { workoutID } = await params;
  const workout = await getWorkInfo(workoutID);

  return (
    <main>
      <WorkoutDetails workout={workout} />
    </main>
  );
}