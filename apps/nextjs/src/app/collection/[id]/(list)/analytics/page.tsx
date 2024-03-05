import type { paths } from "@reservoir0x/reservoir-sdk";
import { SUPPORTED_L1_CHAIN_ID } from "@/constants/env";
import { getOwnersDistribution } from "@/lib/reservoir/getOwnerDistribution";
import { getOwners } from "@/lib/reservoir/getOwners";

import { getCollectionAddresses } from "@realms-world/constants";

import { OwnerDistribution } from "./OwnerDistribution";
import { TopOwners } from "./TopOwners";

// Page component
export default async function Page({ params }: { params: { id: string } }) {
  // Get token addresses for the collection
  const tokenAddresses = getCollectionAddresses(params.id);

  // Check if token addresses exist for the supported L1 chain ID
  if (!tokenAddresses[SUPPORTED_L1_CHAIN_ID]) {
    return <h3 className="mt-8 text-center">Coming Soon</h3>;
  }

  // Get owners distribution data
  const ownersDistributionData = getOwnersDistribution({
    collection: tokenAddresses[SUPPORTED_L1_CHAIN_ID] ?? params.id,
  }) as Promise<
    paths["/collections/{collection}/owners-distribution/v1"]["get"]["responses"]["200"]["schema"]
  >;

  // Get owners data
  const ownersData = getOwners({
    collection: tokenAddresses[SUPPORTED_L1_CHAIN_ID] ?? params.id,
  }) as Promise<{
    owners: paths["/owners/v2"]["get"]["responses"]["200"]["schema"];
  }>;

  // Fetch owners distribution and owners data concurrently
  const [{ ownersDistribution }, { owners }] = await Promise.all([
    ownersDistributionData,
    ownersData,
  ]);

  // Define cards with components
  const cards = [
    {
      component: <OwnerDistribution ownersDistribution={ownersDistribution} />,
    },
    { component: <TopOwners owners={owners} /> },
  ];

  // Render cards in a grid layout
  return (
    <div className="mt-8 grid gap-20 md:grid-cols-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="rounded-xl border-2 bg-dark-green px-8 py-2"
        >
          {card.component}
        </div>
      ))}
    </div>
  );
}
