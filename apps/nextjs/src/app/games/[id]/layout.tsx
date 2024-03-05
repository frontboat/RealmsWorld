"use client";

import React from "react";
import { motion } from "framer-motion";

// Root layout component
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  // Default image path
  const defaultImage = "/backgrounds/dummy_background.png";

  // Construct the image URL based on the params
  const imageUrl =
    "url(" +
    (params.id ? `/games/${params.id}/background.webp` : defaultImage) +
    ")";

  return (
    <div
      className="h-full w-full"
      style={
        {
          "--image-url": imageUrl,
        } as React.CSSProperties
      }
    >
      {/* Background image */}
      <div className="mask-transparent h-96 w-full before:bg-[url:var(--image-url)] before:bg-cover before:bg-center before:bg-no-repeat" />

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        className="sm:pl-32"
      >
        {children}
      </motion.div>
    </div>
  );
}
