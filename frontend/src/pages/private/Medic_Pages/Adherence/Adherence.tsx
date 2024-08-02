import { useEffect, useState } from "react";
import { ContentTreatmentPacient, Patient } from "../../../../Interfaces/interfaces";
import { Link, useParams } from "react-router-dom";
import { fetchPatientSingle, fetchTreatmentPatient } from "../../../../Context/AuthContext";
import { HeaderProfile } from "../../../../components/HeaderProfile";
import { tipoTratamientoMap } from "../../../../utils/data/data";
import { TreatmentSkeleton } from "../../../../components/Skeletons";

export default function Adherence() {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient>();
  const [loading, setLoading] = useState(false);
  const [loadingTreat, setLoadingTreat] = useState(false)
  const [treatments, setTreaments] = useState<ContentTreatmentPacient>()
  const fetchTreatments = async () => {
    setLoadingTreat(true)
    if (id) {
      try {
        setTreaments(await fetchTreatmentPatient(id))
      } catch (error: any) {
        console.log(error)
      } finally {
        setLoadingTreat(false)
      }
    }
  }

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
    fetchTreatments()
    fetchPatient();
  }, []);
  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center ">
      <div className="w-full max-w-md  min-h-screen pb-4  bg-white rounded-lg shadow-lg font-inter  max-md:m-auto">
        <HeaderProfile
          loading={loading}
          name={patient?.nombre}
          title="Estadísticas"
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}
          link={`/patient/${id}`}
        >
        </HeaderProfile>
        <section className="px-6 ">
          <h5 className="mb-4 text-xl font-semibold">Tratamientos</h5>
          <ol className=" flex flex-col gap-2">
            {loadingTreat ? (
              <>
                <TreatmentSkeleton />
              </>
            ) : (
              <>
                {
                  treatments && treatments?.content.length == 0
                    ? <>
                      <p>El paciente no tiene tratamientos</p>
                      <Link to={`/patient/${id}/treatment`} className=" flex justify-center">
                        <button className=" rounded-md mt-6 w-2/4 h-16 m-auto font-semibold bg-violet-color text-white">
                          Añadir Nuevo Tratamiento
                        </button>
                      </Link>
                    </>
                    : <>
                      {
                        treatments && treatments.content.map((treatment) => (
                          <Link to={`/patient/${id}/adherence/${treatment.idTratamiento}`}>
                            <li className=" border-2 cursor-pointer p-2 rounded-md border-violet-color">
                              <h6 className=" text-violet-color font-semibold text-lg">{tipoTratamientoMap[treatment.tipoTratamientoId] || 'Tipo de tratamiento desconocido'} <span className=" text-gray-600 text-medium">{treatment.tipoTratamientoId == 0 && `(${treatment.nombreMedicamento})`}</span></h6>
                              <p className=" text-gray-800 text-sm">{treatment.descripcion == "" ? "El tratamiento no tiene descripción" : treatment.descripcion}</p>
                            </li>
                          </Link>
                        ))
                      }
                    </>
                }
              </>
            )
            }
          </ol>
        </section>
      </div>
    </main>
  )
}
