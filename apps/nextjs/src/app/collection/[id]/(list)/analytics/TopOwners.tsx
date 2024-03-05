"use client";

import type { paths } from "@reservoir0x/reservoir-sdk";
import Link from "next/link";
import { NETWORK_NAME } from "@/constants/env";
import { stakingAddresses } from "@/constants/staking";
import { shortenHex } from "@/utils/utils";

import { ScrollArea } from "@realms-world/ui";

export const TopOwners = ({
  owners,
}: {
  owners: paths["/owners/v2"]["get"]["responses"]["200"]["schema"];
}) => {
  return (
    <div>
      {/* Section: Owners */}
      <h4>Owners</h4>
      <div className="grid w-full grid-cols-5 text-sm uppercase">
        <div className="col-span-2">Wallet</div>
        <div>Owned</div>
        <div>On Sale</div>
        <div>% Owned</div>
      </div>
      {/* Scrollable area */}
      <ScrollArea className="ScrollAreaRoot h-96">
        {owners?.owners?.map((owner) => (
          <div key={owner.address} className="grid grid-cols-5 py-1">
            {/* Wallet address */}
            <div className="col-span-2">
              <Link href={`/user/${owner.address}`}>
                {/* Display wallet name based on address */}
                {owner.address === stakingAddresses[NETWORK_NAME].v1Galleon
                  ? "Galleon Staking"
                  : owner.address ===
                      stakingAddresses[NETWORK_NAME].v2Carrack.toLowerCase()
                    ? "Carrack Staking"
                    : shortenHex(owner.address ?? "", 8)}
              </Link>
            </div>
            {/* Owned tokens */}
            <div>{owner.ownership?.tokenCount}</div>
            {/* Tokens on sale */}
            <div>{owner.ownership?.onSaleCount}</div>
            {/* Percentage owned */}
            <div>
              {(
                (parseInt(owner.ownership?.tokenCount ?? "0") / 8000) *
                100
              ).toFixed(2)}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
