import { useEffect, useState } from "react";
import {
  ContentTreatmentPacient,
} from "../../../../Interfaces/interfaces";
import { tipoTratamientoMap } from "../../../../utils/data/data";
import { fetchTreatmentPatientConect } from "../../../../Context/AuthContext";

export default function TreatementPatient() {
  const [treatments, setTreatments] = useState<ContentTreatmentPacient | undefined>();
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);

  const fetchTreatmentPacient = async () => {
    try {
      setTreatments(await fetchTreatmentPatientConect())
    } catch (err) {
      console.log(err);
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

          <section className="justify-center min-h-80 border-2 bg-light-color border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm">
            {treatments &&
              treatments.content.slice(0, visibleCount).map((treatment) => (
                <div key={treatment.idTratamiento}>
                  <h5 className="text-violet-color font-bold text-lg">
                    {tipoTratamientoMap[treatment.tipoTratamientoId] ||
                      "Tipo de tratamiento desconocido"}
                  </h5>
                  <ul className="ml-6 list-disc">
                    <li>
                      <span className="italic">
                        {treatment.nombreMedicamento} | Descripción:{" "}
                        {treatment.descripcion}.
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold">Cantidad:</span>{" "}
                      {treatment.dosisDiaria}
                    </li>
                  </ul>
                  {treatment.tipoTratamientoId === 0 && (
                    <>
                      <h6 className="text-violet-color font-bold text-md">
                        Horarios
                      </h6>
                      <ul className="ml-6 list-disc">
                        <li>
                          <span className="font-semibold">Inicio:</span>{" "}
                          {treatment.fechaInicio}
                        </li>
                        <li>
                          <span className="font-semibold">Finalización:</span>{" "}
                          {treatment.fechaFin}
                        </li>
                        <li>
                          <span className="font-semibold">Estado:</span> En
                          curso
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              ))}
            {treatments?.content.length === 0 && (
              <h4 className="text-xl h-full flex justify-center items-center text-center">
                "El paciente no tiene un tratamiento registrado"
              </h4>
            )}
            {treatments && treatments.content.length > 6 && !showAll && (
              <button
                onClick={handleShowMore}
                className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-400"
              >
                Ver Todos
              </button>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
