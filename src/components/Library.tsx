import LibraryContent from './LibraryContent';
import { Workout } from '@/types/Workout';

const getWorkouts = async (): Promise<Workout[]> => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  return response.json();
};

const Library = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="w-full bg-[#111318] text-white py-10">
            <div className="keep-content-center">
                <LibraryContent workouts={workouts} />
            </div>
        </section>
    );
};

export default Library;