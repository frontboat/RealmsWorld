"use client";

import React, { useState } from "react";

// Represents the information for each tab
interface TabInfo {
  name: string;
  component: React.ReactNode;
}

// Props for the TabbedView component
interface TabbedViewProps {
  tabs: TabInfo[]; // Array of tab information
  initialActiveTab: string; // Initial active tab name
}

// TabbedView component
const TabbedView: React.FC<TabbedViewProps> = ({ tabs, initialActiveTab }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab); // State to track the active tab
  const activeComponent = tabs.find((tab) => tab.name === activeTab)?.component; // Get the component for the active tab

  // Function to handle tab change
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName); // Update the active tab
  };

  return (
    <div>
      <div className="tab-container">
        {/* Render tab buttons */}
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabChange(tab.name)}
            className={`tab-button ${
              activeTab === tab.name ? "active" : "inactive"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {activeComponent} {/* Render the active component */}
    </div>
  );
};

export default TabbedView;
