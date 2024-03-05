"use client";

import { Button } from "@realms-world/ui";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

// Component to display an error message when a token is not found
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        {/* Heading */}
        <h1 className="text-9xl">Token Not Found</h1>

        {/* Subheading */}
        <p className="text-2xl font-bold tracking-tight text-flamingo sm:text-4xl">
          Steady Lord!
        </p>

        {/* Error message */}
        <p className="my-4 text-lg">
          We could not find the token, if it has recently been reset try reset
          below
        </p>
        <p className="my-4 text-lg">{error.message || "undefined error"}</p>

        {/* Button to trigger reset */}
        <Button onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
}
