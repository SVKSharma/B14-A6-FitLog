import Link from 'next/link';
import { FaDumbbell } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#111318] border-t border-gray-800 text-gray-400 py-6">
      <div className="keep-content-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group text-white">
          <FaDumbbell className="text-[#a6e22e] text-lg transform -rotate-45" />
          <span className="font-extrabold tracking-wider uppercase font-mono">
            FITLOG
          </span>
        </Link>

        {/* Copyright & Tagline for footer section */}
        <p className="text-gray-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;