import { useEffect, useState } from "react";
import {
  ContentTreatmentPacient,
} from "../../../../Interfaces/interfaces";
import { API_URL } from "../../../../api/api";
import { tipoTratamientoMap } from "../../../../utils/data/data";

export default function TreatementPatient() {
  const [treatments, setTreatments] = useState<ContentTreatmentPacient>();
  const [visibleCount, setVisibleCount] = useState(5);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchTreatmentPacient = async () => {
      const token = localStorage.getItem("TOKEN_KEY");

      try {
        const res = await fetch(
          `${API_URL}/tratamiento/listar-tratamientos-paciente-conectado?page=0&size=30`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch treatments");
        }
        const data = await res.json();
        setTreatments(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTreatmentPacient();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(treatments?.content.length || 0);
    setShowAll(true);
  };

  return (
    <main className="container mx-auto shadow-xl">
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <div className="px-32 max-lg:px-16 max-md:px-8 mt-8">
          <h3 className="font-bold font-inter text-2xl mb-4">
            Mis tratamientos
          </h3>

          <section className="justify-center min-h-80 border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm">
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
