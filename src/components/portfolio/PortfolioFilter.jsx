import { useState } from "react";

const filters = ["All", "Strategy", "Creative", "Digital", "ICT"];

function PortfolioFilter({ setActive }) {
  const [activeTab, setActiveTab] = useState("All");

  const handleClick = (tab) => {
    setActiveTab(tab);
    setActive(tab);
  };

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-12">
      {filters.map((tab) => (
        <button
          key={tab}
          onClick={() => handleClick(tab)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition
            ${
              activeTab === tab
                ? "bg-[#2E7D32] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default PortfolioFilter;
