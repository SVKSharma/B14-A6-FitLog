import Link from 'next/link';
import { FaArrowLeft, FaDumbbell } from 'react-icons/fa';

export default function WorkoutNotFound() {
  return (
    <main className="flex min-h-[80vh] w-full items-center justify-center bg-[#111318] px-4 py-12 text-white">
      <div className="keep-content-center w-full max-w-md space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-800 bg-[#181a20] text-3xl text-[#a6e22e]">
          <FaDumbbell />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#a6e22e]">
            Error 404
          </span>
          <h1 className="pt-2 text-3xl font-black uppercase tracking-wide">
            WORKOUT NOT FOUND
          </h1>
          <p className="text-sm leading-relaxed text-gray-400">
            That workout ID does not exist. Choose a workout from the library to continue.
          </p>
        </div>

        <Link
          href="/#library"
          className="inline-flex items-center gap-2 rounded-xl bg-[#a6e22e] px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-black transition-colors hover:bg-[#95ce28]"
        >
          <FaArrowLeft className="text-xs" />
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}