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
      className=" font-semibold text-2xl mb-4 text-center text-light-color"
      id="inicio-notificacion"
    >
      Notificaciones
    </h6>
    <div className="p-2 rounded-md gap-4 w-full flex justify-center items-center bg-light-color shadow-[1.0px_2.0px_2.0px_rgba(0,0,0,0.38)] ">
      {tabOptions.map((tab) => (
        <button
          key={tab.tabName}
          onClick={() => setActiveTab(tab.tabName)}
          className={`cursor-pointer px-2 py-1 rounded-md ${activeTab === tab.tabName
              ? "border-2 border-gray-500 bg-slate-50"
              : "bg-slate-300"
            }`}
        >
          {tab.tabName}
        </button>
      ))}
    </div>
  </>
);

export default NotificationTab;
