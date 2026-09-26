'use client';
import { useContext, useState } from 'react';
import Link from 'next/link';
import HorizontalCard from '@/components/HorizontalCard';
import MyPlanDashboard from '@/components/MyPlanDashboard';
import SearchBar from '@/components/SearchBar';
import { WorkoutContext } from '@/context/WorkoutContext';
import { Workout } from '@/types/Workout';
import { triggerSuccessConfetti } from '@/lib/confetti';
import { ROUTES } from '@/lib/routes';

export const MyPlanPage = () => {
  const {
    todaysWorkoutPlan,
    setTodaysWorkoutPlan,
    savedWorkouts,
    setSavedWorkouts,
    completedWorkoutIds,
    setCompletedWorkoutIds,
  } = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<'plan' | 'saved'>('plan');
  const [sortBy, setSortBy] = useState<'duration' | 'caloriesBurned' | 'rating'>('duration');
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get active items array based on tab for the MyPlanDashboard.
  const activeList = activeTab === 'plan' ? todaysWorkoutPlan : savedWorkouts;

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredList = activeList.filter((workout) => {
    if (!normalizedQuery) return true;

    return (
      workout.name.toLowerCase().includes(normalizedQuery) ||
      workout.muscleGroups.some((group) =>
        group.toLowerCase().includes(normalizedQuery)
      )
    );
  });

  const sortedList = [...filteredList].sort((a, b) => b[sortBy] - a[sortBy]);

  const handleRemove = (id: number) => {
    if (activeTab === 'plan') {
      setTodaysWorkoutPlan((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSavedWorkouts((prev) => prev.filter((item) => item.id !== id));
    }
    setCompletedWorkoutIds((prev) => prev.filter((itemId) => itemId !== id));
  };

  const handleToggleComplete = (id: number) => {
    setCompletedWorkoutIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      }

      triggerSuccessConfetti();
      return [...prev, id];
    });
  };

  return (
    <main className="w-full bg-[#111318] text-white min-h-screen py-8 lg:py-12">
      <div className="keep-content-center space-y-8">
        
        {/* Page Header */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Dashboard Metrics - Evaluated strictly for the selected tab */}
        <MyPlanDashboard workouts={activeList} />

        {/* Controls Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          
          {/* DaisyUI Tabs */}
          <div role="tablist" className="relative tabs tabs-boxed bg-[#181a20] p-1.5 border border-gray-800/80 rounded-xl overflow-hidden w-full sm:w-auto">
            <div
              className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-lg bg-[#a6e22e] transition-transform duration-150 ease-linear ${
                activeTab === 'plan' ? 'translate-x-0' : 'translate-x-full'
              }`}
            />

            <button
              role="tab"
              onClick={() => setActiveTab('plan')}
              className={`relative z-10 tab text-[10px] sm:text-xs font-extrabold uppercase transition-colors px-3 sm:px-5 py-2 rounded-lg w-[calc(50%-0.125rem)] text-center whitespace-nowrap ${
                activeTab === 'plan' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              role="tab"
              onClick={() => setActiveTab('saved')}
              className={`relative z-10 tab text-[10px] sm:text-xs font-extrabold uppercase transition-colors px-3 sm:px-5 py-2 rounded-lg w-[calc(50%-0.125rem)] text-center whitespace-nowrap ${
                activeTab === 'saved' ? 'text-black' : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            placeholder="Search plan or tags..."
          />

          {/* Sort Selector */}
          <div className="relative flex items-center gap-2 self-end sm:self-auto whitespace-nowrap">
            <span className="text-gray-400 text-xs font-medium whitespace-nowrap">Sort By</span>

            <div className="relative">
              <button
                type="button"
                aria-expanded={isSortMenuOpen}
                onClick={() => setIsSortMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 bg-[#181a20] border border-gray-800 text-gray-200 text-xs rounded-lg px-3 py-2 focus:outline-none"
              >
                <span className="capitalize">
                  {sortBy === 'duration'
                    ? 'Duration'
                    : sortBy === 'caloriesBurned'
                      ? 'Calories'
                      : 'Rating'}
                </span>
                <span className="text-xs">▾</span>
              </button>

              {isSortMenuOpen && (
                <div className="absolute right-0 top-full mt-2 z-20 w-36 rounded-lg border border-gray-800 bg-[#181a20] shadow-lg overflow-hidden">
                  {[
                    { value: 'duration', label: 'Duration' },
                    { value: 'caloriesBurned', label: 'Calories' },
                    { value: 'rating', label: 'Rating' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSortBy(option.value as 'duration' | 'caloriesBurned' | 'rating');
                        setIsSortMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-xs transition-colors ${
                        sortBy === option.value
                          ? 'bg-[#a6e22e] text-black font-bold'
                          : 'text-gray-200 hover:bg-[#21242d]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Workout Cards / Fallback */}
        {sortedList.length === 0 ? (
          <div className="border border-dashed border-gray-800 rounded-2xl p-12 text-center space-y-4">
            <h2 className="text-xl font-black uppercase tracking-wide">
              NOTHING HERE YET
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto">
              Browse the library and add a lift to get today moving.
            </p>
            <div>
              <Link
                href={ROUTES.library}
                className="inline-block bg-[#a6e22e] text-black font-extrabold text-xs px-6 py-3 rounded-lg hover:bg-[#95ce28] transition-colors uppercase tracking-wider"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((workout: Workout) => (
              <HorizontalCard
                key={workout.id}
                workout={workout}
                onRemove={handleRemove}
                onToggleComplete={handleToggleComplete}
                isCompleted={completedWorkoutIds.includes(workout.id)}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlanPage;