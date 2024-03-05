import { EventSchemas, Inngest } from "inngest";

// Define the structure of the events
interface Events {
  "nft/mint": {
    data: {
      contract_address: string;
      tokenId: string;
    };
  };
  [eventName: string]: {
    data: Record<string, any>;
  };
}

// Create a new instance of Inngest
export const inngest = new Inngest({
  id: "ERC721", // Unique identifier for the Inngest instance
  eventKey: process.env.INNGEST_EVENT_KEY ?? "local", // Event key for Inngest (fallback to "local" if not provided)
  schemas: new EventSchemas().fromRecord<Events>(), // Create event schemas based on the defined structure
});
