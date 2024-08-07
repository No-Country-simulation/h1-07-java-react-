import { useEffect, useState } from "react";
import { fetchMedicData, fetchPatient } from "../../../../Context/AuthContext";
import { SearchIcon } from "../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { ContentPatient, Medic } from "../../../../Interfaces/interfaces";
import { AsideMenu } from "../../../../components/AsideMenu";
import { Patients } from "./Patients/Patients";
import Header from "./Header/Header";
import { Side_Menu } from "../../../../components/Side_Menu/Side_Menu";
import { Header_Home } from "../Home/Header.tsx/Header";

export default function PatientList() {
  const [patients, setPatients] = useState<ContentPatient>();
  const [searchPatient, setSearchPatient] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [medicInfo, setMedicInfo] = useState<Medic>();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchMedic = async () => {
    try {
      setMedicInfo(await fetchMedicData());
    } catch (err) {
      console.log(err);
    }

  };



  useEffect(() => {
    fetchMedic();

    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }

  }, []);

  useEffect(() => {
    const fetchPatientData = async () => {
      setLoading(true);
      try {
        setPatients(await fetchPatient());
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPatientData();
  }, []);

  const [isExpanded, setIsExpanded] = useState(true);


  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center ">
      <Side_Menu
        classname={`hidden xl:block h-[61rem] 2xl:h-[68rem] bg-[#fff]  bg-gradient-to-r from-indigo-500 to-indigo-300 text-[#000] font-mono ${isExpanded ? 'w-[300px]' : 'w-[130px]'} `}
        isExpanded={isExpanded}
        toggleMenu={toggleMenu}
      />
      <div className={`flex-1 xl:ml-${isExpanded ? '322px' : '90px'} transition-margin duration-300 ease-in-out`}>
        <div className=" xl:pt-0 xl:-mt-5 xl:ml-0 xl:grid xl:max-w-full xl:p-2 xl:grid-cols-1 xl:justify-center w-full max-w-md p-6  bg-white rounded-lg shadow-lg ">
          <div>
            <AsideMenu
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>

          <div className="xl:hidden">
            <Header toggleSidebar={toggleSidebar} />
          </div>'


          <div className="hidden xl:block xl:w-full xl:-mt-1 xl:-ml-2">
            <Header_Home
              toggleSidebar={toggleSidebar}
              nombre={medicInfo?.nombre}
              apellido={medicInfo?.apellido}
              especialidad={medicInfo?.especialidad}
            />
          </div>

          <section className=" relative w-full h-12 mb-6 flex justify-center items-center">

            <input
              type="text"
              placeholder="Búsqueda"
              onChange={(e) => setSearchPatient(e.target.value)}
              className="w-full h-full  border-violet-color rounded-md border-1 px-4"
            />
            <span className="right-5 absolute">
              <SearchIcon width={20} height={20} stroke="" />
            </span>
          </section>
          <Patients
            loading={loading}
            patients={patients}
            searchPatient={searchPatient}
          />
          <Link to={"/patient-register"}>
            <button className="h-10 rounded-md mt-6 w-full font-semibold bg-secondary-brand-dark text-white">
              Añadir Nuevo Paciente
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
