import VerticalCard from './VerticalCard';
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
                {/* Header */}
                <div className="mb-8">
                <h2 className="text-3xl font-black uppercase tracking-wider font-sans">
                    THE LIBRARY
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    Twelve lifts covering every major muscle group.
                </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {workouts.map((workout) => (
                    <VerticalCard key={workout.id} workout={workout} />
                ))}
                </div>
            </div>
        </section>
    );
};

export default Library;