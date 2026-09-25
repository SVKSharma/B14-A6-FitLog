import LibraryContent from './LibraryContent';
import { getWorkouts } from '@/lib/workouts';

const Library = async () => {
    const workouts = await getWorkouts();

    return (
        <section id="library" className="w-full bg-[#111318] text-white py-10">
            <div className="keep-content-center">
                {workouts ? (
                    <LibraryContent workouts={workouts} />
                ) : (
                    <div className="rounded-2xl border border-gray-800 bg-[#181a20] p-10 text-center">
                        <h2 className="text-2xl font-black uppercase tracking-wider">
                            WORKOUTS UNAVAILABLE
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">
                            We couldn&apos;t load the workout library right now. Please try again shortly.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Library;