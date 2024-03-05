import React from "react";

// Root layout component
export default function RootLayout({
  children, // The child components to be rendered inside the layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto flex flex-wrap p-4 pt-16 sm:p-8 sm:pt-4">
      {children}
    </div>
  );
}
