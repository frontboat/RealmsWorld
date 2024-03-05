import type { UserTokenData } from "@/types";
import { Suspense } from "react";
import { LoadingSkeletonGrid } from "@/app/_components/LoadingSkeletonGrid";
import { getUser } from "@/lib/reservoir/getUser";

import UserTokenCard from "./UserTokenCard";

// Renders a grid of user tokens
async function UserTokenGrid({
  address,
  continuation,
}: {
  address: string;
  continuation: string | undefined;
}) {
  // Fetch user tokens and continuation from the server
  const {
    tokens,
    continuation: dataContinuation,
  }: { tokens: UserTokenData[]; continuation: string } = await getUser({
    address,
    continuation,
  });

  return (
    <>
      {/* Render the grid of user token cards */}
      <div className="my-3 grid grid-cols-1 gap-4 sm:pl-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tokens?.map((token) => (
          <UserTokenCard key={token.token.tokenId} token={token} />
        ))}
      </div>
      {/* If there is a continuation, render a suspense fallback */}
      {dataContinuation && (
        <Suspense fallback={<LoadingSkeletonGrid />}>
          {/* Recursively render UserTokenGrid with the new continuation */}
          <UserTokenGrid address={address} continuation={dataContinuation} />
        </Suspense>
      )}
    </>
  );
}

export default UserTokenGrid;
