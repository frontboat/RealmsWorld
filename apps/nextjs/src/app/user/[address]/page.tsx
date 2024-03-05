import type { Metadata } from "next";
import { isStarknetAddress } from "@/utils/utils";

import GoldenToken from "./goldenToken/page";
import UserTokenGrid from "./UserTokenGrid";

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { address: string };
}): Promise<Metadata> {
  return {
    title: `${params.address}`,
    description: `${params.address} - Created for Adventurers by Bibliotheca DAO`,
  };
}

// Main page component
export default async function Page({
  params,
}: {
  params: { address: string };
}) {
  // Check if the address is a Starknet address
  if (isStarknetAddress(params.address)) {
    return <GoldenToken params={params} />;
  }

  // Render the user token grid
  return (
    <div className="w-full">
      <span>{isStarknetAddress(params.address)}</span>
      <UserTokenGrid address={params.address} continuation="" />
    </div>
  );
}
