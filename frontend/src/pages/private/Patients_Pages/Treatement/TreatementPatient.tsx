import { useEffect, useState } from "react";
import {
  ContentTreatmentPacient,
} from "../../../../Interfaces/interfaces";
import { fetchTreatmentPatientConect } from "../../../../Context/AuthContext";
import { SingleTreatment } from "../../Medic_Pages/Patient-Detail/SingleTreatment/SingleTreatment";
import { TreatmentSkeleton } from "../../../../components/Skeletons";

export default function TreatementPatient() {
  const [treatments, setTreatments] = useState<ContentTreatmentPacient | undefined>();
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false)

  const fetchTreatmentPacient = async () => {
    try {
      setLoading(true)
      setTreatments(await fetchTreatmentPatientConect())
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchTreatmentPacient();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(treatments?.content.length || 0);
    setShowAll(true);
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-t from-[#02FFFF] to-[#8778D7] py-8">
      <div className="container mx-auto max-w-screen-xl">
        <div className="px-32 max-lg:px-16 max-md:px-8 pb-4">
          <h3 className="font-bold font-inter text-2xl mb-4 text-light-color">
            Mis tratamientos
          </h3>

          <section className="justify-center min-h-80  border-gray-color rounded-lg leading-6 flex flex-col gap-y-2 font-inter text-sm">
            {loading ? <TreatmentSkeleton /> :
              (<>
                {treatments &&
                  treatments.content.some(treatment => treatment.tipoTratamientoId === 0) &&
                  <>
                    {
                      treatments && treatments.content.sort((a, b) => b.idTratamiento - a.idTratamiento)
                        .slice(0, visibleCount)
                        .map((treatment) => (
                          <>{treatment.tipoTratamientoId !== 0 ? null :
                            <SingleTreatment
                              tipoTratamientoId={treatment.tipoTratamientoId}
                              imagen={treatment.imagen}
                              descripcion={treatment.descripcion}
                              nombreMedicamento={treatment.nombreMedicamento}
                              dosisDiaria={treatment.dosisDiaria}>
                            </SingleTreatment>
                          }</>
                        ))
                    }
                  </>
                }
                {treatments && treatments.content.length > 5 && !showAll && (
                  <div className="flex justify-end items-center w-full">
                    <button
                      onClick={handleShowMore}
                      className=" cursor-pointer transition-all duration-300 hover:brightness-90 -mt-1 h-8 flex items-center justify-center w-32 bg-secondary-brand-dark text-white py-2 px-4 rounded-2xl "
                    >
                      Ver Todos
                    </button>
                  </div>
                )}
              </>)
            }
          </section>
        </div>
      </div>
    </main>
  );
}
