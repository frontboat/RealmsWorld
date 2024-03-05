import type { Collection, L2Collection } from "@/types";
import { CollectionCard } from "@/app/_components/CollectionCard";
import { SUPPORTED_L1_CHAIN_ID } from "@/constants/env";

import { Collections, getCollectionAddresses } from "@realms-world/constants";

import { getCollections } from "../../lib/reservoir/getCollections";

// Metadata for the component
export const metadata = {
  title: "Lootverse Collections",
  description:
    "Various collections of the Lootverse - Created for adventurers by Bibliotheca DAO",
};

// Async function to fetch and display collections
export default async function CollectionsList() {
  // Fetch collections from the reservoir
  const { collections } = (await getCollections([
    {
      contract: getCollectionAddresses(Collections.REALMS)[
        SUPPORTED_L1_CHAIN_ID
      ]!,
    },
  ])) as { collections: Collection[] };

  // L2 collections to be displayed
  const l2Collections: L2Collection[] = [
    {
      name: "Beasts",
      link: "beasts",
      image: "/collections/beasts.svg",
    },
    {
      name: "Golden Token",
      link: "goldentoken",
      image: "/collections/goldentoken.svg",
    },
    {
      name: "Blobert",
      link: "blobert",
      image: "/collections/blobert.svg",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-6 px-4 sm:px-0">
      {/* Render each collection card for L1 collections */}
      {collections?.map((collection: Collection, index) => {
        return <CollectionCard collection={collection} key={index} />;
      })}
      {/* Render each collection card for L2 collections */}
      {l2Collections?.map((collection: L2Collection, index) => {
        return <CollectionCard collection={collection} key={index} />;
      })}
    </div>
  );
}
