import type { Collection, L2Collection } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  collection: Collection | L2Collection;
}

export const CollectionCard = ({ collection }: Props) => {
  return (
    // Link to the collection page
    <Link
      href={`/collection/${collection.link ?? "realms"}`} // Make the link dynamic depending on the collection URL (currently not passed from reservoir collections query)
      className="group flex border-2 bg-dark-green p-5 duration-300 hover:border-bright-yellow hover:bg-medium-dark-green hover:opacity-80"
    >
      {collection.image && (
        // Display the collection image
        <Image
          src={collection.image}
          alt={collection.name}
          width={50}
          height={50}
          className="w-24 rounded-full"
        />
      )}
      <div className="flex flex-grow justify-between pl-4">
        {/* Display the collection name */}
        <h5 className="self-center">{collection.name}</h5>
      </div>
      <div className="self-center">
        {/* Display the collection floor ask price */}
        {collection.floorAsk?.price?.amount.native}{" "}
        {collection.floorAsk?.price?.currency.symbol}
      </div>
    </Link>
  );
};
