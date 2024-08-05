import React from "react";

interface NotificationTabProps {
  tabOptions: { tabName: string }[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const NotificationTab: React.FC<NotificationTabProps> = ({
  tabOptions,
  activeTab,
  setActiveTab,
}) => (
  <>
    <h6
      className=" font-semibold text-2xl mb-4 text-center"
      id="inicio-notificacion"
    >
      Notificaciones
    </h6>
    <div className="bg-slate-200 p-2 rounded-md gap-4 w-full flex justify-center items-center">
      {tabOptions.map((tab) => (
        <button
          key={tab.tabName}
          onClick={() => setActiveTab(tab.tabName)}
          className={`cursor-pointer px-2 py-1 rounded-md ${
            activeTab === tab.tabName
              ? "border-2 border-gray-400 bg-slate-50"
              : "bg-slate-200"
          }`}
        >
          {tab.tabName}
        </button>
      ))}
    </div>
  </>
);

export default NotificationTab;
