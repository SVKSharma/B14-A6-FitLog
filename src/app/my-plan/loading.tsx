const MyPlanSkeleton = () => {
  return (
    <div className="w-full min-h-screen bg-[#111318] text-white py-8">
      <div className="keep-content-center space-y-8 animate-pulse">
        
        {/* Page Title & Subtitle Skeleton */}
        <div className="space-y-2">
          <div className="h-9 w-40 bg-[#181a20] rounded-lg" />
          <div className="h-4 w-72 bg-[#181a20] rounded-md" />
        </div>

        {/* Metrics Dashboard Box Skeleton */}
        <div className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {/* Exercises Metric */}
            <div className="space-y-2">
              <div className="h-3 w-16 bg-gray-800 rounded" />
              <div className="h-10 w-12 bg-gray-800 rounded-lg" />
            </div>
            {/* Minutes Metric */}
            <div className="space-y-2">
              <div className="h-3 w-16 bg-gray-800 rounded" />
              <div className="h-10 w-16 bg-gray-800 rounded-lg" />
            </div>
            {/* Calories Metric */}
            <div className="space-y-2">
              <div className="h-3 w-16 bg-gray-800 rounded" />
              <div className="h-10 w-20 bg-gray-800 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Tab Buttons & Sort Control Bar Skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tabs Container */}
          <div className="flex items-center gap-2 p-1.5 bg-[#181a20] border border-gray-800/80 rounded-xl w-fit">
            <div className="h-8 w-24 bg-gray-800 rounded-lg" />
            <div className="h-8 w-20 bg-gray-800/50 rounded-lg" />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="h-4 w-12 bg-[#181a20] rounded" />
            <div className="h-10 w-28 bg-[#181a20] border border-gray-800/80 rounded-xl" />
          </div>
        </div>

        {/* Horizontal Card List Skeletons */}
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Card Left Side: Image + Details */}
              <div className="flex items-center gap-4">
                {/* Image Placeholder */}
                <div className="w-24 h-20 sm:w-28 sm:h-20 bg-gray-800 rounded-xl shrink-0" />

                {/* Text Content */}
                <div className="space-y-2">
                  <div className="h-5 w-32 bg-gray-800 rounded" />
                  <div className="h-3 w-24 bg-gray-800/60 rounded" />
                  <div className="flex items-center gap-3 pt-1">
                    <div className="h-3 w-12 bg-gray-800/60 rounded" />
                    <div className="h-3 w-14 bg-gray-800/60 rounded" />
                    <div className="h-3 w-10 bg-gray-800/60 rounded" />
                  </div>
                </div>
              </div>

              {/* Card Right Side: Action Buttons */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <div className="h-10 w-24 bg-gray-800 rounded-xl" />
                <div className="h-10 w-32 bg-gray-800 rounded-xl" />
                <div className="h-4 w-4 bg-gray-800 rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyPlanSkeleton;