// Import the necessary dependencies
import Link from "next/link";

// Define the props interface for TokenAttribute component
interface TokenAttributeProps {
  title: string;
  value: string | number;
  contractId: string;
  floorAskPrice?: string | number;
  attributeTokenCount?: number;
  collectionTokenCount?: number;
}

// TokenAttribute component
export const TokenAttribute = ({
  attributeTokenCount,
  collectionTokenCount,
  contractId,
  floorAskPrice,
  title,
  value,
}: TokenAttributeProps) => {
  return (
    // Create a link with dynamic URL based on contractId, title, and value
    <Link href={`/collection/${contractId}?${title}=${value}`}>
      <div className="border-2 bg-dark-green px-4 py-2 transition duration-200 hover:bg-bright-yellow hover:text-dark-green">
        {/* Display the title */}
        <div className="w-full font-sans text-xs uppercase opacity-50">
          {title}
        </div>
        <div className="flex w-full justify-between">
          {/* Display the value */}
          <div className="font-sans-serif sm:text-xl">{value}</div>
          {/* Display the floorAskPrice */}
          <div className="ml-3">{floorAskPrice}</div>
        </div>
        {/* Display the attributeTokenCount and collectionTokenCount */}
        {attributeTokenCount && collectionTokenCount && (
          <div className="w-full text-xs opacity-70">
            {attributeTokenCount} ({/* Calculate and display the percentage */}
            {((attributeTokenCount / collectionTokenCount) * 100).toFixed(2)}
            %)
          </div>
        )}
      </div>
    </Link>
  );
};
