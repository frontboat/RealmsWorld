/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Import necessary types
import type { Activity } from "@/types";
import type { Metadata } from "next";
// Import components and functions
import { ActivityCard } from "@/app/collection/[id]/(list)/activity/ActivityCard";
import { getUsersActivity } from "@/lib/reservoir/getUsersActivity";

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { address: string };
}): Promise<Metadata> {
  return {
    title: `Atlas - Collections Profile: ${params.address}`,
    description: `Collection Details page for ${params.address} - Created for Adventurers by Bibliotheca DAO`,
  };
}

// Page component
export default async function Page({
  params,
}: {
  params: { address: string };
}) {
  // Fetch user's activities
  const { activities }: { activities: Activity[] } = await getUsersActivity({
    address: params.address,
  });

  return (
    <div className="my-4 grid h-full grid-cols-1 overflow-y-auto rounded border">
      {/* Render activity cards */}
      {activities?.map((activity: Activity, index: number) => {
        return <ActivityCard key={index} activity={activity} />;
      })}
    </div>
  );
}
