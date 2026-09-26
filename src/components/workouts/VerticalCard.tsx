import { Workout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";
import { ROUTES } from '@/lib/routes';

interface VerticalCardProps {
  workout: Workout;
}

export const VerticalCard = ({ workout }: VerticalCardProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <Link
      href={ROUTES.workout(id)}
      className="group bg-[#181a20] border border-gray-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-gray-700 transition-all duration-200"
    >
      <div>
        {/* Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-900">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">
          {/* Muscle Group Tag Pills */}
          <div className="flex flex-wrap gap-1.5">
            {muscleGroups.map((group, index) => (
              <span
                key={index}
                className="bg-[#a6e22e] text-black text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title & Equipment */}
          <div>
            <h3 className="text-white font-extrabold text-lg tracking-wide uppercase leading-snug group-hover:text-[#a6e22e] transition-colors">
              {name}
            </h3>
            <p className="text-gray-400 text-xs mt-0.5">{equipment}</p>
          </div>
        </div>
      </div>

      {/* Footer / Stats Row */}
      <div className="px-5 pb-5 pt-3 border-t border-gray-800/60 flex items-center gap-4 text-gray-400 text-xs font-medium">
        <div className="flex items-center gap-1.5">
          <FaClock className="text-gray-400 text-xs" />
          <span>{duration} min</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaFire className="text-gray-400 text-xs" />
          <span>{caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaStar className="text-gray-400 text-xs" />
          <span>{rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default VerticalCard;
