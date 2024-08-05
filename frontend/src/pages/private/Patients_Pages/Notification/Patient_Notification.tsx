import { useEffect, useState } from "react";
import { NotificationProps } from "../Home/Home_Patients";
import {
  fetchNotifications,
  getAllNotifications,
  markNotificationsAsRead,
} from "../../../../Context/AuthContext";
import { FlechaIconTwo } from "../../../../../public/icons/Icons";
import { NotificationItem } from "../../../../components/NotificationItem";
import { SkeletonNotification } from "../../../../components/Skeletons";
import { HeaderProfile } from "../../../../components/HeaderProfile";
import { Paciente } from "../../../../Interfaces/interfaces";
import NotificationTab from "./NotificationTab/NotificationTab";

const tabOptions = [{ tabName: "No leídas" }, { tabName: "Todos" }];

export function Patient_Notification(): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabOptions[0].tabName);
  const [unreadNotifications, setUnreadNotifications] = useState<
    NotificationProps[]
  >([]);
  const [allNotifications, setAllNotifications] = useState<NotificationProps[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [patientInfo, setPatienInfo] = useState<Paciente>();

  const [visibleReadCount, setVisibleReadCount] = useState<number>(5);
  const [showAllRead, setShowAllRead] = useState<boolean>(false);

  const [visibleUnreadCount, setVisibleUnreadCount] = useState<number>(5);
  const [showAllUnread, setShowAllUnread] = useState<boolean>(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

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

    const storedMedic = localStorage.getItem("PATIENT-DATA");
    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
    }

    const storedNotification = localStorage.getItem("PATIENT-NOTIFICATION");
    if (storedNotification) {
      const savedNotifications: NotificationProps[] =
        JSON.parse(storedNotification);
      setUnreadNotifications(savedNotifications);
    }

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const readNotifications = async () => {
    try {
      await markNotificationsAsRead();
      await fetchUnreadNotifications();
      await fetchAllNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const reloadNotifications = async () => {
    try {
      await fetchUnreadNotifications();
      await fetchAllNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowMore = () => {
    setVisibleReadCount(allNotifications.length || 0);
    setShowAllRead(true);
  };

  const handleShowMoreUnread = () => {
    setVisibleUnreadCount(unreadNotifications.length || 0);
    setShowAllUnread(true);
  };

  return (
    <main className="  scroll-smooth flex min-h-screen bg-gray-100 md:flex md:justify-center">
      <div className="w-full relative max-w-md min-h-screen  bg-white rounded-lg shadow-lg max-md:m-auto">
        <HeaderProfile
          name={patientInfo?.nombre}
          title="Tus Tratamientos"
          lastname={patientInfo?.apellido}
          typeDocument={patientInfo?.tipoDocumento}
          financier={patientInfo?.financiador}
          document={patientInfo?.numeroDocumento}
          link={"/patient-home"}
        ></HeaderProfile>
        <div className="p-4">
          <section className="flex flex-col rela">
            <NotificationTab
              tabOptions={tabOptions}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <div className="mt-4">
              {activeTab === "Todos" ? (
                <>
                  {loading ? (
                    <SkeletonNotification />
                  ) : (
                    <>
                      {allNotifications.length === 0 ? (
                        <p className="mt-4 text-center">
                          No hay notificaciones
                        </p>
                      ) : (
                        <>
                          {allNotifications
                            .sort((a, b) => Number(b.leido) - Number(a.leido))
                            .slice(0, visibleReadCount)
                            .map((notification) => (
                              <NotificationItem
                                key={notification.horarioTomaId}
                                hora={notification.hora}
                                mensaje={notification.mensaje}
                                leido={notification.leido}
                                fecha={notification.fecha}
                                horarioTomaId={notification.horarioTomaId}
                                reloadNotifications={reloadNotifications}
                                idNotificacion={notification.idNotificacion}
                              />
                            ))}
                          {allNotifications &&
                            allNotifications.length > 6 &&
                            !showAllRead && (
                              <button
                                onClick={handleShowMore}
                                className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400"
                              >
                                Ver Todos
                              </button>
                            )}
                        </>
                      )}
                    </>
                  )}
                </>
              ) : unreadNotifications.length === 0 ? (
                <p className="mt-4 text-center">No hay notificaciones</p>
              ) : (
                <>
                  {unreadNotifications
                    .slice(0, visibleUnreadCount)
                    .map((notification) => (
                      <NotificationItem
                        key={notification.horarioTomaId}
                        hora={notification.hora}
                        mensaje={notification.mensaje}
                        leido={notification.leido}
                        fecha={notification.fecha}
                        horarioTomaId={notification.horarioTomaId}
                        reloadNotifications={reloadNotifications}
                        idNotificacion={notification.idNotificacion}
                      />
                    ))}
                  {unreadNotifications &&
                    unreadNotifications.length > 6 &&
                    !showAllUnread && (
                      <button
                        onClick={handleShowMoreUnread}
                        className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400"
                      >
                        Ver Todos
                      </button>
                    )}
                </>
              )}
              {activeTab === "No leídas" && unreadNotifications.length > 0 && (
                <button
                  onClick={readNotifications}
                  className="border-2 py-2 m-auto flex px-4 mt-4 font-semibold text-center border-gray-400 rounded-md"
                >
                  Marcar todas como leídas
                </button>
              )}
              {visible && (
                <a
                  href="#inicio-notificacion"
                  className=" rotate-180  bg-white z-30 bg-grays-400 border-2 items-center justify-center flex animate-bounce w-10 rounded-full h-10 fixed right-5 bottom-5"
                >
                  <span className=" rotate-90">
                    <FlechaIconTwo
                      width={40}
                      height={40}
                      stroke={"#111"}
                      classname={""}
                    />
                  </span>
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
