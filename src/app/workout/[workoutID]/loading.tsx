const Loading = ()=>{
  return (
    <section className="w-full bg-[#111318] text-white py-6 sm:py-8 lg:py-12 animate-pulse overflow-hidden">
      <div className="keep-content-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Side of the Skeleton Image */}
          <div className="w-full h-64 sm:h-80 lg:h-auto lg:aspect-square rounded-2xl bg-gray-800/60" />

          {/* Right Side of the Skeleton Details */}
          <div className="space-y-5 sm:space-y-6">
            
            {/* Title & Description Skeleton */}
            <div className="space-y-3">
              <div className="h-7 sm:h-8 bg-gray-800/80 rounded-md w-3/4" />
              <div className="h-3.5 sm:h-4 bg-gray-800/50 rounded-md w-full" />
              <div className="h-3.5 sm:h-4 bg-gray-800/50 rounded-md w-2/3" />
            </div>

            {/* Muscle Group Tags of the Skeleton */}
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-gray-800/60 rounded-full" />
              <div className="h-6 w-16 bg-gray-800/60 rounded-full" />
            </div>

            {/* Specs Panel of the Skeleton */}
            <div className="bg-[#181a20] border border-gray-800/80 rounded-xl overflow-hidden divide-y divide-gray-800/60">
              {[...Array(7)].map((_, index) => (
                <div key={index} className="flex justify-between items-center px-4 py-3">
                  <div className="h-3.5 w-20 sm:w-24 bg-gray-800/60 rounded" />
                  <div className="h-3.5 w-16 sm:w-20 bg-gray-800/60 rounded" />
                </div>
              ))}
            </div>

            {/* Instructions Section Skeleton */}
            <div className="space-y-3 pt-2">
              <div className="h-5 w-32 bg-gray-800/80 rounded" />
              <div className="space-y-2">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="h-3.5 sm:h-4 bg-gray-800/50 rounded w-full" />
                ))}
              </div>
            </div>

            {/* Action Buttons Skeleton - Flexible for mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="h-12 w-full sm:w-48 bg-gray-800/80 rounded-xl" />
              <div className="h-12 w-full sm:w-40 bg-gray-800/60 rounded-xl" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
export default Loading; 