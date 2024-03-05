import { Suspense } from "react";
import { LoadingSkeletonGrid } from "@/app/_components/LoadingSkeletonGrid";
import L2ERC721Table from "@/app/collection/[id]/(list)/L2ERC721Table";
import { SUPPORTED_L2_CHAIN_ID } from "@/constants/env";

import { Collections, getCollectionAddresses } from "@realms-world/constants";

// Renders the page component
export default async function Page({
  params,
}: {
  params: { address: string };
}) {
  return (
    // Suspends rendering and shows a loading skeleton grid while waiting for data
    <Suspense fallback={<LoadingSkeletonGrid />}>
      <L2ERC721Table
        // Sets the contract address to the BEASTS collection address on the supported L2 chain
        contractAddress={
          getCollectionAddresses(Collections.BEASTS)[SUPPORTED_L2_CHAIN_ID]!
        }
        // Sets the owner address to the address provided in the params
        ownerAddress={params.address}
      />
    </Suspense>
  );
}
