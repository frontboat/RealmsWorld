import type { TokenMarketData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { formatEther } from "viem";

import { Button } from "@realms-world/ui";

import { BuyButton } from "../../reservoir/BuyModal";

interface TokenCardProps {
  token: TokenMarketData;
  collectionName: string;
  layout?: "grid" | "list";
}

export const L1TokenCard = (props: TokenCardProps) => {
  const { token, layout, collectionName } = props;

  const isGrid = layout === "grid";

  // CSS classes for grid and list layouts
  const grid =
    "bg-dark-green duration-300 transform border hover:-translate-y-1";
  const list =
    "bg-dark-green duration-300 transform border-t hover:-translate-y-1 flex w-full";

  const imageSize = isGrid ? 800 : 60;

  return (
    <div className={layout === "grid" ? grid : list}>
      {/* Link to token details */}
      <Link href={`/collection/${collectionName}/${token.token.tokenId}`}>
        <Image
          src={token.token.image || ""}
          alt={token.token.name}
          className={`${isGrid ? "mx-auto " : ""}`}
          width={imageSize}
          height={imageSize}
        />
      </Link>

      {isGrid ? (
        // Grid layout
        <div className={`w-full px-3 pb-2 pt-4`}>
          <div className="flex w-full justify-between text-sm">
            {/* Token ID */}
            <span className="font-semibold">#{token.token.tokenId} </span>
            {/* Floor Ask Source Icon */}
            {token.market.floorAsk.source?.icon && (
              <Image
                src={token.market.floorAsk.source.icon}
                alt="An example image"
                width={20}
                height={20}
                className=""
              />
            )}
          </div>
          {/* Token Name */}
          <h6>{token.token.name}</h6>

          <div className="my-3 h-6 text-sm">
            {/* Floor Ask Price */}
            {token.market.floorAsk.price &&
              formatEther(
                BigInt(token.market.floorAsk.price.amount.raw),
              ).toLocaleLowerCase() + " ETH"}
          </div>

          <div className="flex justify-between space-x-2">
            {/* View Button */}
            <Button
              href={`/collection/${collectionName}/${token.token.tokenId}`}
              variant={"ghost"}
              size={"xs"}
              className="w-full"
            >
              view
            </Button>
            {/* Buy Button */}
            {token.market.floorAsk.id && (
              <BuyButton
                size="xs"
                address={token.token.contract}
                id={token.token.tokenId}
              />
            )}
          </div>
        </div>
      ) : (
        // List layout
        <div className={`flex w-full justify-between px-3`}>
          <div className="flex w-full">
            <div className="self-center">
              {/* Token ID */}
              <div className="text-sm">#{token.token.tokenId} </div>
              {/* Token Name */}
              <div className="self-center">{token.token.name}</div>
            </div>

            {/* Floor Ask Price */}
            <h6 className="ml-auto self-center">
              {token.market.floorAsk.price
                ? formatEther(
                    BigInt(token.market.floorAsk.price.amount.raw),
                  ).toLocaleLowerCase()
                : ""}{" "}
              ETH
            </h6>
            <div className="justify-between self-center px-3 text-sm">
              {/* Floor Ask Source Icon */}
              {token.market.floorAsk.source.icon && (
                <Image
                  src={token.market.floorAsk.source.icon}
                  alt="An example image"
                  width={20}
                  height={20}
                  className=""
                />
              )}
            </div>
          </div>

          <div className="flex justify-between space-x-2 self-center">
            {/* View Button */}
            <Button
              href={`/collection/${collectionName ?? token.token.contract}/${token.token.tokenId}`}
              variant={"outline"}
              className="w-full"
            >
              view
            </Button>
            {/* Buy Button */}
            {
              <BuyButton
                size="default"
                address={token.token.contract}
                id={token.token.tokenId}
              />
            }
          </div>
        </div>
      )}
    </div>
  );
};
