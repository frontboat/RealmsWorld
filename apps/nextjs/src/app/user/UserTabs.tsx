import { isStarknetAddress } from "@/utils/utils";
import { isAddress } from "viem";

import { NavLink } from "@realms-world/ui";

// UserTabs component
export const UserTabs = ({ address }: { address: string }) => {
  // Check if the address is a Starknet address
  const isL2 = isStarknetAddress(address);

  // Check if the address is a valid address
  const isL1 = isAddress(address);

  // Array to store the tabs
  const tabs = [];

  // Add tabs for L1 addresses
  if (isL1) {
    tabs.push(
      {
        name: "Realms",
        link: "",
      },
      {
        name: "Activity",
        link: "activity",
      },
    );
  }

  // Add tabs for L2 addresses
  if (isL2) {
    tabs.push(
      { name: "Golden Token", link: "" },
      { name: "Beasts", link: "beasts" },
      { name: "Blobert", link: "blobert" },
    );
  }

  // Render the UserTabs component
  return (
    <div className="mb-4 flex w-full space-x-4 border-b py-3 text-xl">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          exact
          href={`/user/${address}${tab.link && "/" + tab.link}`}
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};
