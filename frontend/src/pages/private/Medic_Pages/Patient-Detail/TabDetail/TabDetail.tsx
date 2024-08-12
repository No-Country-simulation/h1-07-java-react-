import React from 'react'

interface DetailTabProps {
  tabInfo: { tabName: string }[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

export const TabDetail: React.FC<DetailTabProps> = ({ tabInfo, activeTab, setActiveTab, }) => {
  return (
    <div className="absolute -bottom-4 w-full flex justify-center">
      <div className="flex gap-4">
        {tabInfo.map((tab) => (
          <button
            key={tab.tabName}
            onClick={() => setActiveTab(tab.tabName)}
            className={`px-3  cursor-pointer shadow-xl   p-1 rounded-lg border-2 ${activeTab === tab.tabName
              ? "bg-light-color border-violet-color shadow-xl text-violet-color "
              : "bg-violet-color  border-light-color shadow-xl text-light-color "
              }`}
          >
            {tab.tabName}
          </button>
        ))}
      </div>
    </div>

  )
}
