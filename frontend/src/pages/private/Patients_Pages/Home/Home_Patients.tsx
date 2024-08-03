import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CaledarIcon,
  CampanaNotificIcon,
  CerebroIcon,
  DonationIconTwo,
  EjercicioIcon,
  HistoryIconThree,
  MenuHambuerguesa,
  RelojIcon,
  SearchIcon,
  TratamentIconTwo,
} from "../../../../../public/icons/Icons";
import { Paciente } from "../../../../Interfaces/interfaces";
import {
  fetchNotifications,
  fetchPatientConnect,
} from "../../../../Context/AuthContext";
import { toast } from "sonner";
import { AsideMenuPatients } from "../../../../Components/AsideMenuPatients";
import { Avatar } from "@nextui-org/avatar";
import { Badge } from "@nextui-org/badge";

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
    to: "/Citas",
    icon: <CaledarIcon width={45} height={45} />,
    label: "Citas",
  },
  {
    to: "/treatement",
    icon: <TratamentIconTwo width={45} height={45} />,
    label: "Tratamiento",
  },
  {
    to: "/patient-tratamiento",
    icon: <EjercicioIcon width={45} height={45} />,
    label: "Ejercicio",
  },
  {
    to: "/patient-tratamiento",
    icon: <CerebroIcon width={45} height={45} />,
    label: "Psicologia",
  },
  {
    to: "/patient-tratamiento",
    icon: <DonationIconTwo width={45} height={45} />,
    label: "Donaciones",
  },
  {
    to: "/history",
    icon: <HistoryIconThree width={45} height={45} />,
    label: "Historial",
  },
];

export function Home_Patients() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [patientInfo, setPatienInfo] = useState<Paciente>();
  const [notifications, setNotifications] = useState<NotificationProps[]>();

  const fetchPatient = async () => {
    try {
      setPatienInfo(await fetchPatientConnect());
    } catch (err) {
      console.log(err);
    }
  };

  const getNotifications = async () => {
    try {
      setNotifications(await fetchNotifications());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPatient();
    getNotifications();

    if (notifications && notifications?.length != 0) {
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
            <Link to="/profile">
              <div className="flex items-center space-x-2">
                <Avatar
                  name={patientInfo?.nombre}
                  color="primary"
                  isBordered
                  size="lg"
                />
                <div>
                  <h1 className="text-lg font-bold text-white">Buenos días,</h1>
                  <p className="font-bold text-white">
                    {patientInfo?.nombre} {patientInfo?.apellido}
                  </p>
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-4 mt-2">
              <Link to={"/notification"}>
                <Badge
                  color="danger"
                  content={notifications?.length}
                  isInvisible={notifications?.length === 0}
                  shape="circle"
                >
                  <CampanaNotificIcon width={26} height={26} />
                </Badge>
              </Link>

              <button onClick={toggleSidebar}>
                <MenuHambuerguesa width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="bg-white flex flex-row items-center py-[5px] mt-5 px-4 rounded-3xl ml-3">
            <SearchIcon width={16} height={16} stroke="" />
            <input
              type="text"
              className="pl-2 py-1 w-full border-none outline-none"
              placeholder="Buscar"
            />
          </div>
        </header>
        <div className="ml-5 mt-10">
          <h3 className="font-bold font-inter text-2xl">Categorías</h3>
        </div>
        <section className="px-4 py-2 grid grid-cols-3 gap-4">
          {patientOptions.map((option, index) => (
            <Link
              to={option.to}
              key={index}
              className="flex flex-col items-center"
            >
              <div
                className={` bg-slate-100 w-[7rem] h-[7rem] rounded-3xl flex items-center justify-center`}
              >
                <div className="w-[6.5rem] h-[6.5rem] rounded-full flex  justify-center items-center">
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
                Próxima Cita
              </h3>
            </div>
            <div className="flex flex-col mt-10 p-3 w-full border-1 border-solid border-gray-400 rounded-xl mb-10">
              <Link to={"/Medic_Appointment"} className="">
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
              </Link>
              <div className="flex flex-row items-center">
                <RelojIcon width={16} height={16} stroke="" />
                <div className="flex flex-col ml-4">
                  <p className="font-inter font-semibold">01/08/2024</p>
                  <p className="font-inter font-semibold">10:00 AM</p>
                </div>
              </div>
              <div className="flex flex-row justify-center gap-x-5 mt-5 mb-5">
                <button className="px-6 py-3 font-inter bg-[#8a8d9e] rounded-md">
                  Reagendar
                </button>
                <button className="px-6 py-3 font-inter text-white bg-[#D98236] rounded-md">
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="flex ml-5 mb-10 flex-col">
          <div className="mb-5">
            <h3 className="font-bold font-inter text-xl">
              Tus consultas recientes
            </h3>
          </div>
          <div className="flex flex-row gap-x-8 justify-center">
            <div className="flex flex-col">
              <img
                src="IMG_PATIENTS/IMG_PATIENS_MEDICO_2.webp"
                className="rounded-full"
                alt=""
              />
              <p className="font-inter font-bold text-[13px] mt-3">Dr. Gómez</p>
            </div>
            <div className="flex flex-col">
              <img
                src="IMG_PATIENTS/IMG_PATIENS_MEDICO_3.webp"
                className="rounded-full"
                alt=""
              />
              <p className="font-inter font-bold text-[13px] mt-3">
                Dra. María
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="IMG_PATIENTS/IMG_PATIENS_MEDICO_4.webp"
                className="rounded-full"
                alt=""
              />
              <p className="font-inter font-bold text-[13px] mt-3">
                Dra. Stevi
              </p>
            </div>
            <div className="flex flex-col ">
              <img
                src="IMG_PATIENTS/IMG_PATIENS_MEDICO_5.webp"
                className="rounded-full w-16 h-16"
                alt=""
              />
              <p className="font-inter font-bold text-[13px] mt-3">
                Dra. Felipe
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
