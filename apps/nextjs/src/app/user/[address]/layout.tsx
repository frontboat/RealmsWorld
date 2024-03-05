"use client";

import React from "react";
import { isStarknetAddress } from "@/utils/utils";
import { isAddress } from "viem";

import { UserProfile } from "../UserProfile";
import { UserTabs } from "../UserTabs";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { address: string };
}) {
  // Check if the address is a Starknet address
  const isL2 = isStarknetAddress(params?.address);

  // Check if the address is a valid Ethereum address
  const isL1 = isAddress(params?.address);

  // Render the user profile component with the appropriate addresses
  return (
    <div className="mt-16 h-full w-full px-4 sm:mt-0 sm:pl-32">
      <UserProfile
        l1Address={isL1 ? params.address : ""}
        l2Address={isL2 ? params.address : ""}
      />
      <div className="">
        {/* Render the user tabs component */}
        <UserTabs address={params.address} />
        <div className="relative z-10">{children} </div>
      </div>
    </div>
  );
}
