/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import type { Activity, Token } from "@/types";
import { useMemo, useState } from "react";
import { ActivityCard } from "@/app/collection/[id]/(list)/activity/ActivityCard";
import { getTokenActivity } from "@/lib/reservoir/getTokenActivity";

interface Props {
  token: Token;
}

export const TokenActivity = ({ token }: Props) => {
  // State for token activity and loading status
  const [tokenActivity, setTokenActivity] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  // Generate token parameters
  const token_params = token.collection.id + ":" + token.tokenId;

  // Fetch token activity
  const getActivity = async () => {
    setLoading(true);
    try {
      const token_activity = await getTokenActivity({ token: token_params });
      setTokenActivity(token_activity.activities);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  // Fetch token activity when token prop changes
  useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getActivity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="my-4 grid h-96 grid-cols-1 overflow-y-scroll rounded border">
      {/* Render activity cards */}
      {tokenActivity?.map((activity: Activity, index: number) => {
        return <ActivityCard key={index} activity={activity} />;
      })}
      {/* Render loading placeholders */}
      {loading && (
        <>
          {new Array(6).fill(0).map((_, index) => (
            <div
              key={index}
              className="flex h-20 w-full animate-pulse flex-wrap border-b bg-gray-600 p-2"
            ></div>
          ))}
        </>
      )}
    </div>
  );
};
