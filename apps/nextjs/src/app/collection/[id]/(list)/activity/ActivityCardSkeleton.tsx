export const ActivityCardSkeleton = () => {
  return (
    <div className="flex w-full animate-pulse border-b p-2 lg:flex-wrap">
      {/* Left section */}
      <div className="block w-full justify-start sm:w-5/12 lg:flex lg:flex-wrap">
        {/* Empty space */}
        <div className="mr-6 w-full flex-none self-center rounded px-4 py-1 opacity-60 sm:w-32"></div>
        {/* Placeholder image */}
        <div
          className="self-start rounded-lg bg-black/20"
          style={{ width: "60px", height: "60px" }}
        />
        {/* Text placeholders */}
        <div className="ml-3 flex-none self-center opacity-50">
          <div className="mb-1 h-4 w-16 bg-black/20" />
          <div className="h-4 w-24 bg-black/20" />
        </div>
      </div>
      {/* Middle section */}
      <div className="w-1/4 sm:w-1/6 lg:w-1/6">
        {/* Text placeholders */}
        <div className=" mb-1 h-4 w-12 bg-black/20 opacity-50" />
        <div className="h-4 w-16 bg-black/20" />
      </div>
      {/* Right section */}
      <div className="w-1/4 sm:w-1/6 lg:w-1/6">
        {/* Text placeholders */}
        <div className=" mb-1 h-4 w-16 bg-black/20 opacity-50" />
        <div className="h-4 w-16 bg-black/20" />
      </div>
      {/* Bottom section */}
      <div className="flex w-1/2 self-center sm:w-1/6 sm:justify-end lg:w-1/6">
        {/* Text placeholder */}
        <div className="h-4 w-16 self-center bg-black/20" />
      </div>
    </div>
  );
};
