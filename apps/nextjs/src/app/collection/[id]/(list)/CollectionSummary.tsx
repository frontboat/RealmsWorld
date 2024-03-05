import type { Collection } from "@reservoir0x/reservoir-kit-ui";
import Image from "next/image";
import Link from "next/link";
import { SUPPORTED_L1_CHAIN_ID, SUPPORTED_L2_CHAIN_ID } from "@/constants/env";
import Discord from "@/icons/discord.svg";
import { getCollections } from "@/lib/reservoir/getCollections";
import { ExternalLink, Globe, X } from "lucide-react";
import { formatEther } from "viem";

import type { Collections } from "@realms-world/constants";
import { getCollectionAddresses } from "@realms-world/constants";

import L2CollectionSummary from "./L2CollectionSummary";

// Component to display the summary of a collection
export default async function CollectionSummary({
  collectionId,
}: {
  collectionId: string;
}) {
  // Get the token addresses for the collection
  const tokenAddresses = getCollectionAddresses(collectionId);

  // If token addresses are not found, display "Collection Not Found"
  if (!tokenAddresses) {
    return <div>Collection Not Found</div>;
  }

  // If the collection is on L2 chain, render L2CollectionSummary component
  if (tokenAddresses[SUPPORTED_L2_CHAIN_ID]) {
    return <L2CollectionSummary collectionId={collectionId as Collections} />;
  }
  // If the collection is on L1 chain
  else if (tokenAddresses[SUPPORTED_L1_CHAIN_ID]) {
    // Fetch the collection details from the contract
    const { collections }: { collections: Collection[] } = await getCollections(
      [{ contract: tokenAddresses[SUPPORTED_L1_CHAIN_ID]! }],
    );

    const collection = collections?.[0];

    // If collection is not found, display "Collection Not Found"
    if (!collection) {
      return <div>Collection Not Found</div>;
    }

    // Array of links to display
    const links = [
      {
        icon: <ExternalLink />,
        value: `https://etherscan.io/address/${collection.id}`,
      },
      {
        icon: <Discord className="h-[28px] w-[28px] fill-white" />,
        value: collection.discordUrl,
      },
      {
        icon: <X />,
        value: "https://twitter.com/" + collection.twitterUsername,
      },
      { icon: <Globe />, value: collection.externalUrl },
    ];

    // Array of statistics to display
    const statistics = [
      {
        value: collection.floorSale?.["1day"],
        title: "Top Offer",
      },
      {
        value:
          collection.floorAsk?.price?.amount?.raw &&
          formatEther(BigInt(collection?.floorAsk?.price?.amount?.raw)),
        title: "Floor",
      },
      { value: collection.onSaleCount, title: "Listed" },
      {
        value: collection.volume?.allTime?.toFixed(2),
        title: "Total Volume",
      },
      { value: collection.tokenCount, title: "Count" },
    ];

    // Array of contract details to display
    const contract_details = [
      {
        title: "Type",
        value: collection.contractKind,
      },
      {
        title: "Chain",
        value: "Ethereum",
      },
    ];

    return (
      <div className="pt-10 sm:flex">
        <div className="flex-none self-center sm:pr-10">
          {collection.image && (
            <Image
              src={collection.image}
              alt={collection.name ?? "Collection Image"}
              width={200}
              height={200}
              className="mx-auto border"
            />
          )}
          <div className="mx-auto my-4 flex justify-center space-x-2">
            {links.map((social, index) => {
              if (social.value)
                return (
                  <Link key={index} href={`${social.value}`}>
                    {social.icon}
                  </Link>
                );
            })}
          </div>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap space-x-2 text-xs">
            {contract_details.map((detail, index) => {
              return (
                <div key={index} className="uppercase">
                  <span className="opacity-50 ">{detail.title}</span>{" "}
                  {detail.value}
                </div>
              );
            })}
          </div>
          <h1>{collection.name}</h1>
          <div className="flex flex-wrap justify-start lg:space-x-2">
            {statistics.map((statistic, index) => {
              return (
                <div key={index} className="px-4 py-2 lg:px-5">
                  <div className="mb-1 text-xs text-white/40">
                    {statistic.title}
                  </div>
                  <div className="text-sm lg:text-xl">{statistic.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
