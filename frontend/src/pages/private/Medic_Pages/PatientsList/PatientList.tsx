import { useEffect, useState } from "react";
import { fetchPatient } from "../../../../Context/AuthContext";
import {
  ChevronIcon,
  FlechaIconTwo,
  HamburguerIcon,
  SearchIcon,
} from "../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { ContentPatient } from "../../../../Interfaces/interfaces";
import { Avatar } from "@nextui-org/react";

export default function PatientList() {
  const [patients, setPatients] = useState<ContentPatient>();
  const [searchPatient, setSearchPatient] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    <section className="flex min-h-screen bg-gray-100 md:flex md:justify-center ">
      <div className="w-full max-w-md p-6  bg-white rounded-lg shadow-lg  max-md:m-auto">
        {/* <AsideMenu
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        /> */}
        <div className="mb-6 text-center relative flex flex-col items-center justify-center">
          <Link
            to={"/dashboard"}
            className=" absolute -left-0 hover:-translate-x-1 transition-all duration-300"
          >
            <FlechaIconTwo width={30} height={30} />
          </Link>
          <div className="flex items-center justify-center">
            <h1 className="text-xl font-bold ">Listado de pacientes</h1>
            <button onClick={toggleSidebar} className=" absolute right-0">
              <HamburguerIcon width={30} height={30} />
            </button>
          </div>
        </div>
        <div className=" relative w-full h-12 mb-6 flex justify-center items-center">
          <input
            type="text"
            placeholder="Búsqueda"
            onChange={(e) => setSearchPatient(e.target.value)}
            className="w-full h-full  border-violet-color rounded-md border-1 px-4"
          />
          <span className="right-5 absolute">
            <SearchIcon width={20} height={20} />
          </span>
        </div>
        <div className=" border-1 border-violet-color rounded-md min-h-[30rem]">
          {loading && (
            <>
              {/* <SkeletonsListPatient />
              <SkeletonsListPatient />
              <SkeletonsListPatient /> */}
              <h3>Loading</h3>
            </>
          )}
          {patients &&
            patients.content
              .filter((msg) =>
                msg.nombre
                  .concat(msg.apellido)
                  .toLowerCase()
                  .includes(searchPatient.toLowerCase())
              )
              .map((patient) => (
                <div
                  key={patient.idPaciente}
                  className="border-1 rounded-md flex h-20 items-center justify-around transition-all duration-200 hover:border-violet-color"
                >
                  <Avatar
                    name={patient.nombre}
                    color="primary"
                    key={patient.idPaciente}
                  />
                  <div className=" w-3/6 text-center">
                    <h6 className=" font-bold">
                      {patient.nombre} {patient.apellido}
                    </h6>
                    <p className=" text-sm text-gray-color">
                      {patient.numeroDocumento}
                    </p>
                  </div>
                  <Link
                    to={`/patient/${patient.idPaciente}`}
                    className=" w-10 h-10 border-2 rounded-full flex justify-center hover:translate-x-1 transition-all duration-300 items-center bg-gray-200 cursor-pointer hover:brightness-90"
                  >
                    <ChevronIcon width={20} height={20} />
                  </Link>
                </div>
              ))}
        </div>
        <Link to={"/patient-register"}>
          <button className="h-10 rounded-md mt-6 w-full font-semibold bg-secondary-brand-dark text-white">
            Añadir Nuevo Paciente
          </button>
        </Link>
      </div>
    </section>
  );
}
