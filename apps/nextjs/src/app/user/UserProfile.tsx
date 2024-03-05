"use client";

import { useStarkDisplayName } from "@/hooks/useStarkName";
import EthereumLogo from "@/icons/ethereum.svg";
import Starknet from "@/icons/starknet.svg";
import { shortenHex } from "@/utils/utils";
import { useAccount as useL2Account } from "@starknet-react/core";
import { useAccount as useL1Account } from "wagmi";

export const UserProfile = ({
  l1Address,
  l2Address,
}: {
  l1Address?: string;
  l2Address?: string;
}) => {
  // Get the L1 and L2 account addresses
  const { address: l1Account } = useL1Account();
  const { address: l2Account } = useL2Account();

  // Determine which addresses to display
  const l1Shown = l1Address ?? l1Account;
  const l2Shown = l2Address ?? l2Account;

  // Get the Stark display name for the L2 account
  const starkName = useStarkDisplayName(l2Shown);

  return (
    <h5>
      {/* Display the Starknet icon and Stark display name if L2 address is provided */}
      {l2Shown && (
        <div className="flex">
          <Starknet className="mr-2 w-6" /> {starkName}
        </div>
      )}
      {/* Display the Ethereum logo and shortened L1 address if L1 address is provided */}
      {l1Shown && (
        <div className="flex">
          <EthereumLogo className="ml-[2px] mr-2 w-[22px]" />
          {shortenHex(l1Shown)}
        </div>
      )}
    </h5>
  );
};
