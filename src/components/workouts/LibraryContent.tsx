'use client';

import { useState } from 'react';
import SearchBar from '../ui/SearchBar';
import VerticalCard from './VerticalCard';
import { Workout } from '@/types/Workout';

interface LibraryContentProps {
  workouts: Workout[];
}

const LibraryContent = ({ workouts }: LibraryContentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredWorkouts = workouts.filter((workout) => {
    if (!normalizedQuery) return true;

    return (
      workout.name.toLowerCase().includes(normalizedQuery) ||
      workout.muscleGroups.some((group) =>
        group.toLowerCase().includes(normalizedQuery)
      )
    );
  });

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-wider">
            THE LIBRARY
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          placeholder="Search workouts or tags..."
        />
      </div>

      {filteredWorkouts.length === 0 ? (
        <p className="border border-dashed border-gray-800 rounded-2xl p-10 text-center text-gray-400 text-sm">
          No workouts match your search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout) => (
            <VerticalCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </>
  );
};

export default LibraryContent;
