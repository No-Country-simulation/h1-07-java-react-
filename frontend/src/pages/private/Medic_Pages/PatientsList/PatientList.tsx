import { useEffect, useState } from "react";
import { fetchMedicData, fetchPatient } from "../../../../Context/AuthContext";
import { SearchIcon } from "../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { ContentPatient, Medic } from "../../../../Interfaces/interfaces";
import { AsideMenu } from "../../../../components/AsideMenu";
import { Patients } from "./Patients/Patients";
import Header from "./Header/Header";
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



  return (
    <main className="flex min-h-screen ">
      <div className={`flex-1 transition-margin duration-300 ease-in-out `}>
        <div className=" xl:flex xl:flex-col xl:max-w-full xl:items-center xl:p-0 xl:m-0 w-full max-w-md p-6  bg-white rounded-lg shadow-lg ">
          <div>
            <AsideMenu
              src="public/JustinaLogo_2.png"
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>

          <div className="xl:hidden">
            <Header toggleSidebar={toggleSidebar} />
          </div>'


          <div className="hidden xl:block xl:w-full xl:-mt-7 xl:-ml-2 ">
            <Header_Home
              toggleSidebar={toggleSidebar}
              nombre={medicInfo?.nombre}
              apellido={medicInfo?.apellido}
              especialidad={medicInfo?.especialidad}
            />
          </div>

          <section className="relative w-full h-12 mb-6 flex justify-center items-center xl:w-[60%]">

            <input
              type="text"
              placeholder="Búsqueda"
              onChange={(e) => setSearchPatient(e.target.value)}
              className="w-full h-full  border-violet-color rounded-md border-1 px-4 xl:w-[80%]"
            />
            <span className="right-5 absolute xl:right-36">
              <SearchIcon width={20} height={20} stroke="" />
            </span>
          </section>

          <div className="xl:flex xl:justify-center xl:w-[60%]">
            <Patients
              loading={loading}
              patients={patients}
              searchPatient={searchPatient}
            />
          </div>
          <Link to={"/patient-register"} className="xl:flex xl:flex-col xl:items-center">
            <button className="h-10 xl:w-[120%] rounded-md mt-6 w-full font-semibold bg-secondary-brand-dark text-white">
              Añadir Nuevo Paciente
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
