"use client";

// Import dependencies
import { Menu } from "lucide-react";

import { Button } from "@realms-world/ui";

import { useUIContext } from "../providers/UIProvider";

// Define the TopNav component
export const TopNav = () => {
  // Get the toggleSidebar function from the UI context
  const { toggleSidebar } = useUIContext();

  // Render the TopNav component
  return (
    <div id="topnav" className="fixed z-[100] w-full p-3 pl-4 sm:pl-8 md:pl-32">
      <div className="flex justify-between">
        {/* Render the sidebar toggle button */}
        <Button className="flex md:hidden" onClick={toggleSidebar}>
          <Menu className="w-8" />
        </Button>
      </div>
    </div>
  );
};
