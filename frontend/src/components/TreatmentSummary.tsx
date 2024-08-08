import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentTreatmentPacient, Patient } from "../Interfaces/interfaces";
import { tipoTratamientoMap } from "../utils/data/data";
import { fetchTreatmentPatient } from "../Context/AuthContext";
import { TreatmentSkeletonSummary } from "./Skeletons";

export default function TreatmentSummary({
  patient,
}: {
  patient: Patient | undefined;
}) {
  const { id } = useParams();
  patient;
  const [treatments, setTreaments] = useState<ContentTreatmentPacient>();
  const [loading, setLoading] = useState(false);
  const fetchTreatments = async () => {
    if (id) {
      setLoading(false);
      try {
        setTreaments(await fetchTreatmentPatient(id));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchTreatments();
  }, []);

  return (
    <div className="p-6 flex-col gap-3 flex xl:items-center">
      <div className="flex justify-between">
        <h5 className="font-bold text-xl">Resumen</h5>
      </div>
      <div className="xl:w-[50%] justify-center min-h-80 border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm">
        {loading ? (
          <>
            <TreatmentSkeletonSummary />
          </>
        ) : (
          <div>
            {treatments &&
              treatments.content.map((treatment) => (
                <div>
                  <h5 className=" text-violet-color font-bold text-lg">
                    {" "}
                    {tipoTratamientoMap[treatment.tipoTratamientoId] ||
                      "Tipo de tratamiento desconocido"}
                  </h5>
                  <ul className=" ml-6 list-disc">
                    <li>
                      {treatment.nombreMedicamento} {treatment.descripcion}.
                    </li>
                    <li>Cantidad: {treatment.dosisDiaria}</li>
                  </ul>
                  {/* {treatment.tipoTratamientoId == 0 && (
                    <>
                      <h6 className=" text-violet-color font-bold text-md">
                        Horarios
                      </h6>
                      <ul className=" ml-6 list-disc">
                        <li>Inicio: {treatment.fechaInicio}</li>
                        <li>Finalización: {treatment.fechaFin}</li>
                        <li>Estado: {treatment.estado}</li>
                      </ul>
                    </>
                  )} */}
                </div>
              ))}
          </div>
        )}
        {treatments?.content.length == 0 && (
          <h4 className=" text-xl  h-full flex justify-center items-center text-center">
            El paciente no tiene un tratamiento registrado, registra uno!
          </h4>
        )}
      </div>
      <Link
        to={`/patient/${id}/treatment`}
        className="m-auto h-10  mt-6 w-3/4 xl:w-[40%]"
      >
        <button className="w-full rounded-lg h-full m-auto font-semibold bg-violet-color text-white">
          Nuevo Registro
        </button>
      </Link>
    </div>
  );
}
