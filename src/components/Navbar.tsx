'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';
import { FaDumbbell, FaBars, FaTimes } from 'react-icons/fa';
import { WorkoutContext } from '@/context/WorkoutContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { todaysWorkoutPlan, savedWorkouts } = useContext(WorkoutContext);

  const isMyPlanActive = pathname === '/my-plan';
  const isWorkoutsActive = !isMyPlanActive;

  const getTabClass = (isActive: boolean) =>
    isActive
      ? 'bg-[#22281b] text-[#a6e22e]'
      : 'text-gray-400 hover:text-white';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111318] border-b border-gray-800 text-white">
      <div className="keep-content-center py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaDumbbell className="text-[#a6e22e] text-2xl -rotate-45" />
          <span className="font-oswald font-extrabold text-xl tracking-wider uppercase">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex bg-[#1a1d24] p-1 rounded-full border border-gray-800">
          <Link
            href="/"
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${getTabClass(isWorkoutsActive)}`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all ${getTabClass(isMyPlanActive)}`}
          >
            My Plan
          </Link>
        </nav>

        {/* Desktop Counters */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <span>Plan</span>
            <span className="bg-[#a6e22e] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
              {todaysWorkoutPlan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <span>Saved</span>
            <span className="border border-gray-700 text-gray-300 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 text-xl p-2"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-[#111318] p-4 space-y-4">
          <nav className="flex bg-[#1a1d24] p-1 rounded-xl border border-gray-800">
            <Link
              href="/"
              className={`flex-1 py-2 rounded-lg text-sm font-semibold text-center transition-all ${getTabClass(isWorkoutsActive)}`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              className={`flex-1 py-2 rounded-lg text-sm font-semibold text-center transition-all ${getTabClass(isMyPlanActive)}`}
            >
              My Plan
            </Link>
          </nav>

          <div className="flex justify-around pt-2 border-t border-gray-800/60 text-sm">
            <Link href="/my-plan" className="flex items-center gap-2 text-gray-300">
              <span>Plan</span>
              <span className="bg-[#a6e22e] text-black font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {todaysWorkoutPlan.length}
              </span>
            </Link>
            <Link href="/my-plan" className="flex items-center gap-2 text-gray-300">
              <span>Saved</span>
              <span className="border border-gray-700 text-gray-300 font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {savedWorkouts.length}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;