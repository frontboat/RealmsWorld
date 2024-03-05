"use client";

import type { Collection, Token } from "@/types";
import { BuyButton } from "@/app/collection/reservoir/BuyModal";
import { ListingModal } from "@/app/collection/reservoir/ListingModal";
import { GameCard } from "@/app/games/GameCard";
import { getGamesByContract } from "@/utils/getters";
import { useAccount } from "wagmi";

import { games } from "@realms-world/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@realms-world/ui";

import { TokenActivity } from "./TokenActivity";

interface Props {
  collection: Collection;
  token: Token;
  //   attributes: any;
}

export const TokenContent = ({ token, collection }: Props) => {
  // Get the user's account address
  const { address } = useAccount();

  // Get the games compatible with the collection BOATNOTE: FIXED A TYPO HERE comptatible_games -> compatible_games
  const compatible_games = getGamesByContract(games, collection.id);

  // Check if the user is the owner of the token
  const owner = address
    ? token.owner.toUpperCase() === address.toUpperCase()
    : false;

  // Define the tabs and their content
  const tabs = [
    {
      name: "Token Info",
      content: <div className="leading-loose">{collection.description}</div>,
    },
    {
      name: "Games",
      content: (
        <div className="grid gap-4 sm:grid-cols-2">
          {compatible_games?.map((game, index) => {
            return <GameCard key={index} game={game} />;
          })}
        </div>
      ),
    },
    {
      name: "Activity",
      content: (
        <div>
          <TokenActivity token={token} />
        </div>
      ),
    },
  ];

  return (
    <div className="my-8 flex-grow">
      {/* Render the BuyButton component */}
      <BuyButton size={"lg"} address={token.contract} id={token.tokenId} />

      {/* Render the ListingModal component if the user is the owner */}
      {owner && <ListingModal address={token.contract} id={token.tokenId} />}

      {/* Render the Tabs component */}
      <Tabs className="mt-12" defaultValue={tabs[0]?.name}>
        <TabsList>
          {/* Render the TabsTrigger components */}
          {tabs.map((tab, index) => (
            <TabsTrigger value={tab.name} key={index}>
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Render the TabsContent components */}
        {tabs.map((tab, index) => (
          <TabsContent
            value={tab.name}
            key={index}
            className="rounded border bg-dark-green px-5 py-2"
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
