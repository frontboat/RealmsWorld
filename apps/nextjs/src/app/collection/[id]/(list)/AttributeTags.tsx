"use client";

import { useQuery } from "@/hooks/useQuery";
import { X } from "lucide-react";

import { Button } from "@realms-world/ui";

export const AttributeTags = () => {
  // Get the necessary functions from the useQuery hook
  const { handleAttributeClick, getQueriesFromUrl } = useQuery();

  return (
    <div className="w-full">
      <div className="mb-2 flex flex-wrap space-x-1">
        {/* Map over the queries from the URL */}
        {getQueriesFromUrl().map((query, index) => {
          // Format the query value by adding spaces before capital letters
          const query_value = query.value?.replace(/([A-Z])/g, " $1").trim();

          // Format the query key by adding spaces before capital letters
          const query_key = query.key?.replace(/([A-Z])/g, " $1").trim();

          return (
            <Button
              variant={"outline"}
              className=""
              size={"xs"}
              key={index}
              onClick={() =>
                query.key &&
                query.value &&
                handleAttributeClick(
                  query.key,
                  query.value,
                  query.key == "Resource",
                )
              }
            >
              {/* Display the query key and value */}
              <span> {query_key}</span> : <span> {query_value} </span>
              <X className="ml-3 w-3" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
