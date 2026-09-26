'use client';
import { Workout } from '@/types/Workout';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaFire, FaStar, FaCheck, FaTimes } from 'react-icons/fa';
import ShowErrorToast from '../feedback/ShowErrorMsg';
import ShowSuccessToast from '../feedback/ShowSuccessMsg';
import { ROUTES } from '@/lib/routes';

interface HorizontalCardProps {
  workout: Workout;
  onRemove?: (id: number) => void;
  onToggleComplete?: (id: number) => void;
  isCompleted?: boolean;
}

export const HorizontalCard = ({
  workout,
  onRemove,
  onToggleComplete,
  isCompleted = false,
}: HorizontalCardProps) => {
  const { id, name, image, equipment, duration, caloriesBurned, rating } = workout;

  const handleRemove = () => {
    if (onRemove) {
      onRemove(id);
      ShowSuccessToast('Workout removed');
    }
  };

  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(id);
      if (isCompleted) {
        ShowErrorToast('Workout marked as incomplete');
      } else {
        ShowSuccessToast('Workout marked as done');
      }
    }
  };

  return (
    <div className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 hover:border-gray-700/80 transition-colors">
      
      {/* Left & Middle Info Container */}
      <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
        {/* Workout Thumbnail */}
        <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-gray-900 shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="150px"
            className="object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="space-y-1 sm:space-y-1.5">
          <h3 className="text-white font-extrabold text-base sm:text-lg uppercase tracking-wide leading-tight">
            {name}
          </h3>
          <p className="text-gray-400 text-xs font-medium">
            {equipment}
          </p>

          {/* Key Metrics Row */}
          <div className="flex items-center gap-3 text-gray-400 text-xs pt-1">
            <span className="flex items-center gap-1">
              <FaClock className="text-gray-400 text-[11px]" />
              {duration} min
            </span>
            <span className="flex items-center gap-1">
              <FaFire className="text-[#a6e22e] text-[11px]" />
              {caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-400 text-[11px]" />
              {rating}
            </span>
          </div>
        </div>
      </div>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-gray-800/60 pt-3 sm:pt-0">
        <Link
          href={ROUTES.workout(id)}
          className="bg-[#21242d] hover:bg-[#2a2e3a] text-gray-200 text-xs font-bold px-4 py-2.5 rounded-lg border border-gray-700/60 transition-colors uppercase tracking-wider"
        >
          View Details
        </Link>

        <button
          onClick={()=>handleToggle()}
          className={`flex items-center gap-1.5 text-xs font-extrabold px-4 py-2.5 rounded-lg transition-colors uppercase tracking-wider ${
            isCompleted
              ? 'bg-gray-800 text-gray-400 border border-gray-700'
              : 'bg-[#a6e22e] hover:bg-[#95ce28] text-black'
          }`}
        >
          <FaCheck className="text-xs" />
          {isCompleted ? 'Done' : 'Mark as Done'}
        </button>

        <button
          onClick={()=>handleRemove()}
          aria-label="Remove workout"
          className="text-gray-500 hover:text-gray-300 p-2 text-sm transition-colors ml-1"
        >
          <FaTimes />
        </button>
      </div>

    </div>
  );
};

export default HorizontalCard;