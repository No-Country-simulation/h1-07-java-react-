import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentTreatmentPacient, Patient } from "../../../../../Interfaces/interfaces";
import { fetchTreatmentPatient } from "../../../../../Context/AuthContext";
import { TreatmentSkeleton } from "../../../../../components/Skeletons";
import { SingleTreatment } from "../SingleTreatment/SingleTreatment";


export default function TreatmentSummary({
  patient,
}: {
  patient: Patient | undefined;
}) {
  const { id } = useParams();
  patient;
  const [treatments, setTreaments] = useState<ContentTreatmentPacient>();
  const [loading, setLoading] = useState(false)
  const [visibleReadCount, setVisibleReadCount] = useState<number>(5);
  const [showAllRead, setShowAllRead] = useState<boolean>(false);

  const handleShowMore = () => {
    setVisibleReadCount(treatments?.content.length || 0);
    setShowAllRead(true);
  };

  const fetchTreatments = async () => {
    if (id) {
      try {
        setLoading(true)
        setTreaments(await fetchTreatmentPatient(id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    fetchTreatments();
  }, []);

  return (
    <>
      <div className="p-6 flex-col gap-3 flex xl:items-center">
        <div className="flex justify-between">
          <h5 className="font-bold text-xl text-violet-color">Resumen</h5>
        </div>
        <div className="xl:w-[50%]  min-h-60   leading-6 flex flex-col  font-inter text-sm">
          <div className=" flex flex-col gap-4 ">
            {loading ? <TreatmentSkeleton /> :
              (<>
                {treatments &&
                  treatments.content.sort((a, b) => b.idTratamiento - a.idTratamiento).slice(0, visibleReadCount).map((treatment) => (
                    <SingleTreatment
                      tipoTratamientoId={treatment.tipoTratamientoId}
                      imagen={treatment.imagen}
                      descripcion={treatment.descripcion}
                      nombreMedicamento={treatment.nombreMedicamento}
                      dosisDiaria={treatment.dosisDiaria}>
                    </SingleTreatment>
                  ))}
                {treatments && treatments.content.length > 5 && !showAllRead && (
                  <div className="flex justify-end items-center w-full">
                    <button
                      onClick={handleShowMore}
                      className=" cursor-pointer transition-all duration-300 hover:brightness-90 -mt-3 h-8 flex items-center justify-center w-32 bg-secondary-brand-dark text-white py-2 px-4 rounded-2xl "
                    >
                      Ver Todos
                    </button>
                  </div>
                )}
              </>)
            }
          </div>

          {treatments?.content.length == 0 && (
            <div className=" min-h-60  rounded-md w-full flex justify-center items-center border-2 border-black">
              <h4 className=" text-xl  h-full flex justify-center items-center text-center">
                El paciente no tiene un tratamiento registrado!
              </h4>
            </div>
          )}
        </div>
        <Link
          to={`/patient/${id}/treatment-register`}
          className="m-auto h-12  mt-4 w-3/4 xl:w-[40%]"
        >
          <button className="w-full rounded-lg h-full m-auto font-semibold bg-violet-color text-white">
            Nuevo Registro
          </button>
        </Link>
      </div>
    </>
  );
}
