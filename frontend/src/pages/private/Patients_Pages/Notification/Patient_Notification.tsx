import { useEffect, useState } from "react";
import { NotificationProps } from "../Home/HomeView";
import {
  fetchNotifications,
  getAllNotifications,
} from "../../../../Context/AuthContext";
import { SkeletonNotification } from "../../../../components/Skeletons";
import NotificationTab from "./NotificationTab/NotificationTab";
import { ArrowUp } from "./ArrowUp/ArrowUp";
import { RenderNotifications } from "./RenderNotifications/RenderNotifications";

const tabOptions = [{ tabName: "No leídas" }, { tabName: "Todos" }];

export function Patient_Notification(): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabOptions[0].tabName);
  const [unreadNotifications, setUnreadNotifications] = useState<NotificationProps[]>([]);
  const [allNotifications, setAllNotifications] = useState<NotificationProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUnreadNotifications = async () => {
    try {
      const notifications = await fetchNotifications();
      setUnreadNotifications(notifications);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllNotifications = async () => {
    setLoading(true);
    try {
      setAllNotifications(await getAllNotifications());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnreadNotifications();
    fetchAllNotifications();

    const storedNotification = localStorage.getItem("PATIENT-NOTIFICATION");
    if (storedNotification) {
      const savedNotifications: NotificationProps[] =
        JSON.parse(storedNotification);
      setUnreadNotifications(savedNotifications);
    }
  }, []);

  // const readNotifications = async () => {
  //   try {
  //     await markNotificationsAsRead();
  //     await fetchUnreadNotifications();
  //     await fetchAllNotifications();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const reloadNotifications = async () => {
    try {
      setLoading(true)
      await fetchUnreadNotifications();
      await fetchAllNotifications();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false)
    }
  };

  return (
    <main className="container mx-auto">
      <div className="max-w-screen-xl mx-auto min-h-screen pb-4">
        <div className="px-32 max-lg:px-16 max-md:px-8">
          <section className="flex flex-col">
            <NotificationTab tabOptions={tabOptions} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="mt-4">
              {loading ? (
                <SkeletonNotification />
              ) : (
                <>
                  {activeTab === "Todos" ? (
                    allNotifications.length === 0 ? (
                      <p className="mt-4 text-center font-medium text-light-color">No hay notificaciones</p>
                    ) : (
                      <RenderNotifications
                        notifications={allNotifications}
                        reloadNotifications={reloadNotifications} />
                    )
                  ) : unreadNotifications.length === 0 ? (
                    <p className="mt-4 text-center font-medium text-light-color">No hay notificaciones</p>
                  ) : (
                    <RenderNotifications
                      notifications={unreadNotifications}
                      reloadNotifications={reloadNotifications} />)
                  }
                </>
              )}
              {/* {activeTab === "No leídas" && unreadNotifications.length > 0 && (
                <button
                  onClick={readNotifications}
                  className="border-2 py-2 m-auto flex px-4 mt-4 font-semibold text-center border-gray-400 rounded-md"
                >
                  Marcar todas como leídas
                </button>
              )} */}
              <ArrowUp />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
