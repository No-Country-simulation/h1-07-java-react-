import { Link } from "react-router-dom";
import { ChevronIcon, SearchIcon } from "../../../../../../public/icons/Icons";
import { Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ContentPatient } from "../../../../../Interfaces/interfaces";
import { fetchPatient } from "../../../../../Context/AuthContext";
import SkeletonsListPatient from "../../../../../components/Skeletons";

export default function ListPatients() {
  const [patients, setPatients] = useState<ContentPatient>();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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

  const filteredPatients =
    patients && patients.content
      ? patients.content.filter((patient) =>
        (patient.nombre + patient.apellido)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      : [];

  const displayedPatients = searchQuery
    ? filteredPatients
    : filteredPatients.slice(0, 4);

  useEffect(() => {
    fetchPatientData();
  }, []);

  return (
    <div className="xl:flex xl:flex-col xl:justify-center">
      <section className="m-auto xl:w-[50%] ">
        <div className="relative flex justify-center  items-center  ">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border rounded-md py-2  font-semibold px-4 w-full text-[16px] border-violet-color my-4"
            placeholder="Búsqueda"
          />
          <span className=" absolute  right-5">
            <SearchIcon width={20} height={20} />
          </span>
        </div>
      </section>
      <div className="mb-4 flex items-center justify-between xl:justify-center xl:mt-5">
        <h3 className="font-bold xl:text-center font-inter text-violet-color">
          Lista de pacientes
        </h3>
      </div>

      <section className="w-[100%]  xl:items-center xl:flex xl:flex-col xl:justify-center">
        <div className=" border-1 border-violet-color rounded-md min-h-[20rem] xl:w-[50%] shadow-xl ">
          {loading ? (
            <>
              <SkeletonsListPatient />
              <SkeletonsListPatient />
            </>
          ) : (
            <>
              {patients && displayedPatients.length > 0 ? (
                displayedPatients.map((patient) => (
                  <div
                    key={patient.idPaciente}
                    className="border-1 rounded-md flex h-20 items-center justify-around transition-all duration-200 hover:border-violet-color"
                  >
                    <Avatar
                      name={patient.nombre}
                      color="primary"
                      key={patient.idPaciente}
                    />
                    <div className="w-3/6 text-center">
                      <h6 className="font-bold">
                        {patient.nombre} {patient.apellido}
                      </h6>
                      <p className="text-sm text-gray-color">
                        {patient.numeroDocumento}
                      </p>
                    </div>
                    <Link
                      to={`/patient/${patient.idPaciente}`}
                      className="w-10 h-10 border-2 rounded-full flex justify-center hover:translate-x-1 transition-all duration-300 items-center bg-gray-200 cursor-pointer hover:brightness-90"
                    >
                      <ChevronIcon width={20} height={20} />
                    </Link>
                  </div>
                ))
              ) : (
                <div className=" mt-32 flex items-center justify-center flex-col gap-2">
                  <p className="text-center h-full text-gray-600 font-semibold">
                    No hay pacientes disponibles
                  </p>
                  <Link to={"/patient-register"}>
                    <button className="rounded-lg w-32 h-10 py-1 px-3 shadow-md border-2 border-violet-color  font-semibold hover:scale-105 transition-all duration-300 text-[14px]  border-solid text-violet-color">
                      Crear paciente
                    </button>
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <div className="flex items-center justify-center  mt-4">
        <Link
          to={"/patient-list"}
          className=" shadow-md px-4 py-3 border-2 bg-violet-color cursor-pointer w-32 text-center  rounded-lg text-light-color"
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}
