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
    // Suspense component for lazy loading
    <Suspense fallback={<LoadingSkeletonGrid />}>
      <L2ERC721Table
        // Sets the contract address for the L2ERC721Table component
        contractAddress={
          getCollectionAddresses(Collections.BLOBERT)[SUPPORTED_L2_CHAIN_ID]!
        }
        // Sets the owner address for the L2ERC721Table component
        ownerAddress={params.address}
      />
    </Suspense>
  );
}
