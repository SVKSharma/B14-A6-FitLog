const Loading = () => {
  return (
    <main className="w-full bg-[#111318] text-white min-h-screen py-8 lg:py-12 animate-pulse overflow-hidden">
      <div className="keep-content-center space-y-8">
        
        {/* Page Header Skeleton */}
        <div className="space-y-2">
          <div className="h-8 sm:h-10 w-40 bg-gray-800/80 rounded-md" />
          <div className="h-4 w-72 sm:w-96 bg-gray-800/50 rounded-md" />
        </div>

        {/* Dashboard Metrics Panel Skeleton */}
        <div className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-3 gap-4 divide-x divide-gray-800/80">
          <div className="space-y-2">
            <div className="h-3 w-16 bg-gray-800/60 rounded" />
            <div className="h-8 sm:h-12 w-12 bg-gray-800/80 rounded-md" />
          </div>

          <div className="pl-4 sm:pl-8 space-y-2">
            <div className="h-3 w-16 bg-gray-800/60 rounded" />
            <div className="h-8 sm:h-12 w-16 bg-gray-800/80 rounded-md" />
          </div>

          <div className="pl-4 sm:pl-8 space-y-2">
            <div className="h-3 w-16 bg-gray-800/60 rounded" />
            <div className="h-8 sm:h-12 w-20 bg-gray-800/80 rounded-md" />
          </div>
        </div>

        {/* Controls Row: Tabs & Sort Dropdown Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          
          {/* Tabs Skeleton */}
          <div className="bg-[#181a20] p-1.5 border border-gray-800/80 rounded-xl flex gap-2">
            <div className="h-8 w-28 bg-gray-800/80 rounded-lg" />
            <div className="h-8 w-20 bg-gray-800/50 rounded-lg" />
          </div>

          {/* Sort Selector Skeleton */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="h-4 w-12 bg-gray-800/50 rounded" />
            <div className="h-9 w-28 bg-gray-800/80 rounded-lg" />
          </div>
        </div>

        {/* Horizontal Cards List Skeleton */}
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-[#181a20] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
            >
              {/* Left Info Skeleton */}
              <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                {/* Thumbnail */}
                <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl bg-gray-800/60 shrink-0" />

                {/* Details */}
                <div className="space-y-2.5 flex-1">
                  <div className="h-5 w-36 sm:w-48 bg-gray-800/80 rounded" />
                  <div className="h-3.5 w-24 bg-gray-800/50 rounded" />
                  <div className="flex gap-3 pt-1">
                    <div className="h-3.5 w-12 bg-gray-800/50 rounded" />
                    <div className="h-3.5 w-14 bg-gray-800/50 rounded" />
                    <div className="h-3.5 w-10 bg-gray-800/50 rounded" />
                  </div>
                </div>
              </div>

              {/* Right Action Buttons Skeleton */}
              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-gray-800/60 pt-3 sm:pt-0">
                <div className="h-9 w-24 bg-gray-800/80 rounded-lg" />
                <div className="h-9 w-32 bg-gray-800/80 rounded-lg" />
                <div className="h-5 w-5 bg-gray-800/50 rounded" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Loading;