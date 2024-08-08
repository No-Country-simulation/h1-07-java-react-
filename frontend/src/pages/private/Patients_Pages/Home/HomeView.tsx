import { useEffect, useState } from "react";
import { Paciente } from "../../../../Interfaces/interfaces";
import {
  fetchNotifications,
  fetchPatientConnect,
} from "../../../../Context/AuthContext";
import { toast } from "sonner";
import Categories from "./Categories/Categories";
import HeaderHome from "./HeaderHome/HeaderHome";
import Shifts from "./Shifts/Shifts";

export interface NotificationProps {
  idNotificacion: number;
  horarioTomaId: number;
  pacienteId: number;
  hora: string;
  fecha: string;
  leido: boolean;
  mensaje: string;
}

export function HomeView() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [patientInfo, setPatienInfo] = useState<Paciente | null>(null);
  const [notifications, setNotifications] = useState<
    NotificationProps[] | null
  >(null);

  const fetchPatient = async () => {
    const patientData = await fetchPatientConnect();
    if (patientData) {
      setPatienInfo(patientData);
    } else {
      console.error("No se pudo obtener la información del paciente");
    }
  };

  const getNotifications = async () => {
    try {
      const notificationsData = await fetchNotifications();
      setNotifications(notificationsData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatient();
    getNotifications();

    if (notifications && notifications.length !== 0) {
      toast.warning(`Tienes ${notifications.length} notificaciones pendientes`);
    }

    const storedNotification = localStorage.getItem("PATIENT-NOTIFICATION");
    if (storedNotification) {
      const news: NotificationProps[] = JSON.parse(storedNotification);
      setNotifications(news);
    }

    const storedMedic = localStorage.getItem("PATIENT-DATA");
    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
    }
  }, []);

  return (
    <main className="container mx-auto ">
      <div className="max-w-screen-xl mx-auto">
        <HeaderHome
          toggleSidebar={toggleSidebar}
          name={patientInfo?.nombre}
          lastname={patientInfo?.apellido}
          notifications={notifications}>
        </HeaderHome>
        <Categories />
        <Shifts />
      </div >
    </main >
  );
}
