export function TokenCardSkeleton({ pulse = true }: { pulse?: boolean }) {
  // Outer container with minimum height and border
  return (
    <div className="flex min-h-[300px] flex-row border-2 bg-dark-green/90">
      <div className="flex-grow">
        {/* Placeholder for image with pulse animation */}
        <div className="h-[200px] w-full animate-pulse bg-black/60"></div>
        <div className="space-y-3 p-4">
          {/* Placeholder for title with optional pulse animation */}
          <div
            className={`w-1/2 bg-medium-dark-green ${pulse && "animate-pulse"}`}
          >
            &nbsp;
          </div>
          {/* Placeholder for description with optional pulse animation */}
          <p
            className={`w-1/3 bg-medium-dark-green text-sm ${
              pulse && "animate-pulse"
            }`}
          >
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}
