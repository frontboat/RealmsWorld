import type { Activity } from "@/types";
import { SUPPORTED_L1_CHAIN_ID, SUPPORTED_L2_CHAIN_ID } from "@/constants/env";
import { getActivity } from "@/lib/reservoir/getActivity";

import { getCollectionAddresses } from "@realms-world/constants";

import { ActivityCard } from "./ActivityCard";
import { CollectionActivity } from "./CollectionActivity";
import { L2ActivityTable } from "./L2ActivityTable";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { types?: string[] | string };
}) {
  // Get the token addresses for the collection
  const tokenAddresses = getCollectionAddresses(params.id);

  // If token addresses are not found, display "Collection Not Found"
  if (!tokenAddresses) {
    return <div>Collection Not Found</div>;
  }

  // Prepare the types for the query
  const types =
    typeof searchParams.types === "string"
      ? [{ types: searchParams.types }]
      : searchParams.types?.map((q: string) => {
          return { types: q };
        });

  // Fetch activities for the collection
  const { activities }: { activities: Activity[] } = await getActivity({
    collection: tokenAddresses[SUPPORTED_L1_CHAIN_ID] ?? params.id,
    query: { types: types },
  });

  // If the collection has an L2 chain address, display L2ActivityTable
  if (tokenAddresses[SUPPORTED_L2_CHAIN_ID]) {
    return (
      <div className="flex">
        <CollectionActivity
          searchAttributes={["sale", "transfer", "listing"]}
        />
        <L2ActivityTable
          //tokenAddress={tokenAddresses[SUPPORTED_L2_CHAIN_ID]!}
          searchParams={searchParams}
          collectionId={params.id}
        />
      </div>
    );
  }
  // If the collection has an L1 chain address, display ActivityCard
  else if (tokenAddresses[SUPPORTED_L1_CHAIN_ID]) {
    return (
      <div className="flex">
        <CollectionActivity />
        <div id="activity-container" className="grid flex-grow grid-cols-1">
          {activities
            ? activities.map((activity: Activity, index: number) => {
                return <ActivityCard key={index} activity={activity} />;
              })
            : "Encountered a temporary error. Please refresh the page and retry."}
        </div>
      </div>
    );
  }
}
