import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CaledarIcon,
  CampanaNotificIcon,
  HistoryIconThree,
  MenssageIconCora,
  MenuHambuerguesa,
  RelojIcon,
  TratamentIconTwo,
} from "../../../../../public/icons/Icons";
import { Paciente } from "../../../../Interfaces/interfaces";

import { toast } from "sonner";
import { AsideMenuPatients } from "../../../../components/AsideMenuPatients";
import { Avatar } from "@nextui-org/avatar";
import { PopoverMessage } from "../../../../components/PopoverMessage";
import { Badge } from "@nextui-org/react";
import { fetchNotifications, fetchPatientConnect } from "../../../../Context/AuthContext";

export interface NotificationProps {
  idNotificacion: number;
  horarioTomaId: number;
  pacienteId: number;
  hora: string;
  fecha: string;
  leido: boolean;
  mensaje: string;
}

const patientOptions = [
  {
    to: "/treatement",
    icon: <TratamentIconTwo width={45} height={45} />,
    label: "Tratamiento",
  },
  {
    to: "/history",
    icon: <HistoryIconThree width={45} height={45} />,
    label: "Historial",
  },
  // {
  //   to: "/patient-tratamiento",
  //   icon: <CerebroIcon width={45} height={45} />,
  //   label: "Psicologia",
  // },
  // {
  //   to: "/patient-tratamiento",
  //   icon: <DonationIconTwo width={45} height={45} />,
  //   label: "Donaciones",
  // },
  {
    to: "/chat-cora",
    icon: <MenssageIconCora width={45} height={45} />,
    label: "Cora",
  },
  {
    to: "/citas",
    icon: <CaledarIcon width={45} height={45} />,
    label: "Citas",
  },
];

export function Home_Patients() {
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
    <main className="flex bg-gray-100 md:flex md:justify-center  ">
      <div className="w-full max-w-md min-h-screen font-inter bg-white rounded-lg shadow-lg  max-md:m-auto">
        <AsideMenuPatients
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        ></AsideMenuPatients>
        <header className="flex flex-col justify-center h-[12rem] mb-4 w-full bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] border rounded-br-[3rem] px-4">
          <div className="flex flex-row  justify-between w-full ">
            <div className="flex mt-4 items-center space-x-2">
              <Link to="/profile">
                <Avatar
                  name={patientInfo?.nombre}
                  color="primary"
                  isBordered
                  size="lg"
                />
              </Link>
              <div className="flex flex-col text-lg text-white">
                <h3 className="font-semibold ">Buenos días,</h3>
                <p className="font-bold ">{patientInfo?.nombre}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <Link to={"/notification"}>
                <Badge
                  color="danger"
                  content={notifications?.length}
                  isInvisible={notifications?.length === 0}
                  shape="circle"
                  className=" -z-0"
                >
                  <CampanaNotificIcon width={30} height={30} stroke="#fff" />
                </Badge>
              </Link>

              <button onClick={toggleSidebar}>
                <MenuHambuerguesa width={30} height={30} stroke="" />
              </button>
            </div>
          </div>
          <div className=" flex  justify-center   mt-0  ">
            <img
              src="JustinaLogo_2.png"
              width={110}
              height={110}
              alt="JustinaLogo"
            />
          </div>
        </header>
        <div className="ml-5 mt-10">
          <h3 className="font-bold font-inter text-2xl">Categorías</h3>
        </div>
        <section className="px-4 py-2 grid grid-cols-2  gap-4">
          {patientOptions.map((option, index) => (
            <Link
              to={option.to}
              key={index}
              className="flex flex-col items-center"
            >
              <div
                className={` bg-slate-100 hover:bg-slate-200  transition-all duration-[250ms] ease-out   hover:w-[7.2rem] hover:h-[7.2rem] w-[7rem] h-[7rem] rounded-3xl flex items-center justify-center`}
              >
                <div className="w-[6.5rem]  h-[6.5rem] rounded-full flex  justify-center items-center">
                  {option.icon}
                </div>
              </div>
              <p className="mt-1 font-semibold">{option.label}</p>
            </Link>
          ))}
        </section>
        <section className="flex justify-center font-inter mt-5 px-2 w-full">
          <div className="w-[90%] ">
            <div className="flex flex-col ml-2  ">
              <h3 className="font-semibold text-lg text-gray-500 font-inter">
                Tú Próxima Cita
              </h3>
            </div>
            <div className="flex flex-col mt-10 p-3 w-full border-1 border-solid border-gray-400 rounded-xl mb-10">
              {/* <Link to={"/Medic_Appointment"} className=""> */}
              <div className="flex flex-row ">
                <div className="flex flex-col">
                  <h3 className="text-2xl font-inter font-bold ">
                    Dra. Peters
                  </h3>
                  <p className="font-inter text-gray-400 ">Nutriologa</p>
                </div>
                <img
                  src="IMG_PATIENTS/IMG_PATIENS_MEDICO_1.webp"
                  className="rounded-full ml-20 w-16 h-16"
                  alt=""
                />
              </div>
              {/* </Link> */}
              <div className="flex flex-row items-center">
                <RelojIcon width={16} height={16} stroke="" />
                <div className="flex flex-col ml-4">
                  <p className="font-inter font-semibold">01/08/2024</p>
                  <p className="font-inter font-semibold">10:00 AM</p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-x-5 mt-5 mb-5">
                <PopoverMessage
                  locate={"top"}
                  title={"Funcionalidad en Desarrollo"}
                  content={
                    "Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!"
                  }
                  color={"primary"}
                >
                  <button className="px-6 py-3 font-inter bg-[#8a8d9e] rounded-md">
                    Reagendar
                  </button>
                </PopoverMessage>
                <PopoverMessage
                  locate={"top"}
                  title={"Funcionalidad en Desarrollo"}
                  content={
                    "Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!"
                  }
                  color={"primary"}
                >
                  <button className="px-6 py-3  font-inter text-white bg-[#D98236] rounded-md">
                    Confirmar
                  </button>
                </PopoverMessage>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
