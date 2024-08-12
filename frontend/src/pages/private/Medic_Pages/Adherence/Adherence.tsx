import { useEffect, useState } from "react";
import {
  ContentTreatmentPacient,
  Patient,
} from "../../../../Interfaces/interfaces";
import { Link, useParams } from "react-router-dom";
import {
  fetchPatientSingle,
  fetchTreatmentPatient,
} from "../../../../Context/AuthContext";
import { tipoTratamientoMap } from "../../../../utils/data/data";
import { HeaderProfile } from "../../../../components/HeaderProfile";
import { TreatmentSkeleton } from "../../../../components/Skeletons";

export default function Adherence() {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();
  const [loading, setLoading] = useState(false);
  const [loadingTreat, setLoadingTreat] = useState(false);
  const [treatments, setTreaments] = useState<ContentTreatmentPacient>();
  const fetchTreatments = async () => {
    setLoadingTreat(true);
    if (id) {
      try {
        setTreaments(await fetchTreatmentPatient(id));
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoadingTreat(false);
      }
    }
  };

  const fetchPatient = async () => {
    if (id) {
      setLoading(true);
      try {
        setPatient(await fetchPatientSingle(id));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTreatments();
    fetchPatient();
  }, []);

  return (
    <main className=" min-h-screen">
      <div className=" flex-col">
        <HeaderProfile
          loading={loading}
          name={patient?.nombre}
          title="Estadísticas"
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}
          link={`/patient/${id}`}
          bgColor={"bg-gradient-to-r from-[#A1AAFF] to-[#5761C8]" }// Default gradient
          bgHamburger={"bg-[#5761C8]"}
        ></HeaderProfile>
        <section className="px-6 xl:w-full">
          <h5 className="mb-4  text-center max-md:text-left  xl:flex xl:flex-col xl:items-center xl:justify-center font-bold text-xl text-violet-color">Adherencia al Tratamiento</h5>
          <ol className=" flex flex-col gap-2 w-[50%] max-lg:w-full m-auto">
            {loadingTreat ? (
              <div className=" flex  flex-col gap-4">
                <TreatmentSkeleton />
              </div>
            ) : (
              <>
                {treatments && treatments?.content.length == 0 ? (
                  <>
                    <p className="xl:text-center">El paciente no tiene tratamientos</p>
                    <Link
                      to={`/patient/${id}/treatment`}
                      className=" flex justify-center"
                    >
                      <button className=" rounded-md mt-6 w-2/4 h-12 m-auto font-semibold bg-violet-color text-white">
                        Añadir Nuevo Tratamiento
                      </button>
                    </Link>
                  </>
                ) : (
                  <div className="xl:flex xl:flex-col xl:justify-center xl:items-center xl:w-full flex flex-col gap-4 ">
                    {treatments &&
                      treatments.content.sort((a, b) => b.idTratamiento - a.idTratamiento).map((treatment) => (
                        <Link className="w-full  hover:brightness-150 transition-all duration-300 shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)]"
                          to={`/patient/${id}/adherence/${treatment.idTratamiento}`}
                        >
                          <li className=" border-2 cursor-pointer p-2 rounded-md border-violet-color">
                            <h6 className=" text-violet-color font-semibold text-lg">
                              {tipoTratamientoMap[
                                treatment.tipoTratamientoId
                              ] || "Tipo de tratamiento desconocido"}{" "}
                              <span className=" text-gray-600 text-medium">
                                {treatment.tipoTratamientoId == 0 &&
                                  `(${treatment.nombreMedicamento})`}
                              </span>
                            </h6>
                            <p className=" text-gray-800 text-sm">
                              {treatment.descripcion == ""
                                ? "El tratamiento no tiene descripción"
                                : treatment.descripcion}
                            </p>
                          </li>
                        </Link>
                      ))}
                  </div>
                )}
              </>
            )}
          </ol>
        </section>
      </div>
    </main>
  );
}
