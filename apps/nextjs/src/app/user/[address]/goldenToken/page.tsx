import { Suspense } from "react";
import { LoadingSkeletonGrid } from "@/app/_components/LoadingSkeletonGrid";
import L2ERC721Table from "@/app/collection/[id]/(list)/L2ERC721Table";
import { SUPPORTED_L2_CHAIN_ID } from "@/constants/env";

import { Collections, getCollectionAddresses } from "@realms-world/constants";

// Renders the GoldenToken component
export default async function GoldenToken({
  params,
}: {
  params: { address: string };
}) {
  return (
    // Suspense component to handle loading state
    <Suspense fallback={<LoadingSkeletonGrid />}>
      <L2ERC721Table
        // Passes the contract address for the Golden Token collection
        contractAddress={
          getCollectionAddresses(Collections.GOLDEN_TOKEN)[
            SUPPORTED_L2_CHAIN_ID
          ]!
        }
        // Passes the owner's address as a prop
        ownerAddress={params.address}
      />
    </Suspense>
  );
}
