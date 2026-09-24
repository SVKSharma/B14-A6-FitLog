import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa';
import bannerImg from '@/assets/banner.png'; 

export const Hero = () => {
  return (
    <section className="w-full bg-[#111318] text-white pt-6 pb-10">
      <div className="keep-content-center">
        <div className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Side Text Content */}
          <div className="flex-1 space-y-4 sm:space-y-5">
            <span className="text-[#a6e22e] text-xs font-bold tracking-widest uppercase block">
              WORKOUT LIBRARY
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-normal leading-snug sm:leading-tight uppercase font-sans">
              TRAIN WITH INTENT.<br />
              LOG EVERY SET.
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div className="pt-3">
              <a
                href="#library"
                className="inline-flex items-center gap-2 bg-[#a6e22e] text-black font-extrabold text-xs sm:text-sm px-5 py-3 rounded-md hover:bg-[#95ce28] transition-colors uppercase tracking-wide"
              >
                BROWSE WORKOUTS
                <FaArrowDown className="text-xs" />
              </a>
            </div>
          </div>

          {/* Right Side Banner Image */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md flex justify-center">
            <Image
              src={bannerImg}
              alt="FitLog Workout Companion"
              priority
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;