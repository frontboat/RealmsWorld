/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Import the ActivityCardSkeleton component
import { ActivityCardSkeleton } from "@/app/collection/[id]/(list)/activity/ActivityCardSkeleton";

// Define the Loading component
export default function Loading() {
  return (
    <>
      {/* Render 3 instances of the ActivityCardSkeleton component */}
      {[...Array(3)].map((_, i) => (
        <ActivityCardSkeleton key={i} />
      ))}
    </>
  );
}
