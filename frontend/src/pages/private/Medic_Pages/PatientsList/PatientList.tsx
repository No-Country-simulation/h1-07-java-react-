import { useEffect, useState } from "react";
import { AuthContext, fetchPatient } from "../../../../Context/AuthContext";
import {
  SearchIcon,
} from "../../../../../public/icons/Icons";
import { Link, useParams } from "react-router-dom";
import { ContentPatient } from "../../../../Interfaces/interfaces";
import { AsideMenu } from "../../../../components/AsideMenu";
import { Patients } from "./Patients/Patients";
import Header from "./Header/Header";

export default function PatientList() {
  const [patients, setPatients] = useState<ContentPatient>();
  const [searchPatient, setSearchPatient] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { id } = useParams();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center ">
      <div className="w-full max-w-md p-6  bg-white rounded-lg shadow-lg  max-md:m-auto">
        <AsideMenu
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Header toggleSidebar={toggleSidebar} />
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
    </main>
  );
}
