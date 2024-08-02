import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowBlackIcon,
  CalendarIcon,
  CampanaIcon,
  FlechaIcon,
  LapizIcon,
  MenuHambuerguesa,
  RelojIcon,
} from "../../../../../public/icons/Icons";
import { Medic } from "../../../../Interfaces/interfaces";
import { fetchMedicData } from "../../../../Context/AuthContext";
// import { AsideMenu } from "../../../../components/AsideMenu";
// import { AuthContext } from '../../../../Context/AuthContext';

export interface Message {
  id: number;
  name: string;
  time: string;
  message: string;
  src: string;
  color: string;
}

const messages: Message[] = [
  {
    id: 1,
    name: "Anna Herrera",
    time: "9:28 AM",
    message: "Le solicito recomendaciones para diabetes tipo II",
    src: "IMG_MEDICO/IMG_Pacientes.png",
    color: "#56BF33",
  },
  {
    id: 2,
    name: "Juan Gutierrez",
    time: "1:35 PM",
    message: "Gracias por las recomendaciones Doctor Facundo",
    src: "IMG_MEDICO/IMG_Pacientes_2.png",
    color: "",
  },
  {
    id: 3,
    name: "Sofia Castillo",
    time: "10:25 AM",
    message: "Ok, entendido. Muchas gracias por la atencion Doctor Facundo",
    src: "IMG_MEDICO/IMG_Pacientes_3.png",
    color: "",
  },
];

export function Home(): JSX.Element {
  // const { userName } = useContext(AuthContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Pacientes");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [medicInfo, setMedicInfo] = useState<Medic>();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchMedic = async () => {
      try {
        setMedicInfo(await fetchMedicData());
      } catch (err) {
        console.log(err);
      }
    };

    fetchMedic();

    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }
  }, []);

  return (
    <main className=" bg-gray-100 min-h-screen w-full font-inter">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg m-auto">
        {/* <AsideMenu
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        /> */}
        <header className="flex shadow-2xl flex-col justify-between h-[9.7rem] mb-4 relative  w-[100%] bg-[#D9D9D9]  rounded-br-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
          <div className="flex items-center space-x-2 content-center justify-between ml-4">
            <Link to={"/userInfo"}>
              <div className="w-[12.6rem] h-[5.5rem] ml-2 rounded-full flex flex-row items-center content-center justify-between">
                <img
                  src="IMG_MEDICO/IMG_MEDICO.png"
                  className="ml-2"
                  alt=""
                  width={56}
                  height={58}
                />
                <div className="">
                  <h1 className=" text-lg font-inter font-bold text-white">
                    Buenos días,
                  </h1>
                  <p className="font-inter font-bold text-white">
                    Dr. {medicInfo?.nombre} {medicInfo?.apellido}
                  </p>
                </div>
              </div>
            </Link>
            <div className="relative right-7 flex flex-row ">
              <CampanaIcon width={24} height={24} />
              <button onClick={toggleSidebar}>
                <MenuHambuerguesa width={24} height={24} />
              </button>
            </div>
          </div>
          <div className=" m-auto">
            <span className=" relative flex justify-center items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border rounded-md py-2 font-semibold px-4 w-[40vh] text-[16px]"
                placeholder="Búsqueda"
              />
              <svg
                className=" absolute right-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
          </div>
        </header>
        <div className="p-4">
          <section className="flex flex-row justify-evenly">
            <div className="rounded-lg py-1 px-3 shadow-md bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]">
              <Link to={"/patient-register"}>
                <button>Añadir nuevo paciente</button>
              </Link>
            </div>
            <div className="rounded-lg py-1 shadow-md px-3 bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]">
              <Link to={"/patient-list"}>
                <button>Lista de pacientes</button>
              </Link>
            </div>
          </section>
          <section className="mb-10 flex flex-col justify-center border-violet-color p-6 mt-5 rounded-lg h-[9.5rem] border-1 border-solid shadow-2xl">
            <div className="flex  mb-2 flex-row justify-between items-center ">
              <h2 className="text-md font-semibold text-[#3D4DA5]">
                Siguiente cita programada
              </h2>
              <span className=" cursor-pointer">
                <ArrowBlackIcon width={16} height={16} />
              </span>
            </div>
            <div className="flex mb-2  items-center justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row items-center mt-1 ">
                  <CalendarIcon width={15} height={15} />
                  <p className="font-inter text-black font-[500] ml-4 text-sm">
                    20 Julio 2024
                  </p>
                </div>
                <div className="flex flex-row items-center mt-[15px]">
                  <RelojIcon width={15} height={15} />
                  <p className=" font-inter font-[500] text-black ml-4 text-sm ">
                    10:00-11:00 AM
                  </p>
                </div>
              </div>
              <div className=" cursor-pointer">
                <LapizIcon width={16} height={16} />
              </div>
            </div>
            <Link to={"detalle"}>
              <div className="flex items-center justify-center ">
                <button className=" absolute top-[22rem]  text-inter text-white font-[600] rounded-[8px] border-2 border-solid  border-gray-400  bg-[#5761C8] px-[60px] py-[9.1px] text-sm mt-5">
                  Ver detalles
                </button>
              </div>
            </Link>
          </section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold  font-inter">Mensajeria</h2>
            <ArrowBlackIcon width={16} height={16} />
          </div>

          <section className="w-[100%] overflow-hidden border-2 rounded-xl border-gray-500">
            <div className="flex border-b-2 border-gray-500 rounded-lg mb-2">
              {["Pacientes", "Médicos", "Otros"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 w-1/3  py-2 text-sm ${
                    activeTab === tab
                      ? "bg-[#3D4DA5] text-white rounded-[8px] border-solid border-[1px] border-gray-500"
                      : "bg-gray-200 text-gray-600 "
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className=" rounded-r-xl rounded-xl  shadow-xl">
              {messages
                .filter((msg) =>
                  msg.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex hover:bg-gray-200 transition-all duration-300 cursor-pointer justify-between bg-[${msg.color}]  py-1 px-2 border-b-1 border-gray-500`}
                  >
                    <div
                      className={`flex flex-row items-center bg-${msg.color}  w-full`}
                    >
                      <img src={msg.src} alt="imagen_paciente" />
                      <div className={`flex flex-col ml-3 w-full  `}>
                        <div className="flex flex-row justify-between ">
                          <p className="font-semibold text-sm">{msg.name}</p>
                          <div className="flex flex-row">
                            <p className="text-gray-500 text-xs mr-2">
                              {msg.time}
                            </p>
                            <FlechaIcon width={16} height={16} />
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
        <div className="mt-5 flex justify-center items-center flex-col">
          <h2 className="text-center font-inter font-bold text-2xl">
            Donaciones
          </h2>
          <img src="JustinaLogo_2.png" width={250} height={250} alt="" />
          <Link to={"/donations"}>
            <button className="my-4 bg-[#E08733] px-24 text-white font-inter py-3 rounded-3xl">
              Acceder
            </button>
          </Link>
        </div>
        {/* <footer className="mt-4">
				</footer> */}
      </div>
    </main>
  );
}
