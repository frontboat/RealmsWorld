import { CollectionActivitySkeleton } from "@/app/collection/[id]/(list)/activity/CollectionActivity";

import { ActivityCardSkeleton } from "./ActivityCardSkeleton";

export default function Loading() {
  return (
    <div className="flex">
      {/* Render the skeleton for the collection activity */}
      <CollectionActivitySkeleton />

      <div className="grid flex-grow grid-cols-1">
        {/* Render the skeletons for the activity cards */}
        {[...Array(6)].map((_, i) => (
          <ActivityCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
