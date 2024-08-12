import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentTreatmentPacient, Patient } from "../Interfaces/interfaces";
import { fetchTreatmentPatient } from "../Context/AuthContext";
import { SingleTreatment } from "../pages/private/Medic_Pages/Treatment/SingleTreatment/SingleTreatment";

export default function TreatmentSummary({
  patient,
}: {
  patient: Patient | undefined;
}) {
  const { id } = useParams();
  patient;
  const [treatments, setTreaments] = useState<ContentTreatmentPacient>();

  const fetchTreatments = async () => {
    if (id) {
      try {
        setTreaments(await fetchTreatmentPatient(id));
      } catch (error) {
        console.log(error);
      } finally {
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
          <h5 className="font-bold text-xl">Resumen</h5>
        </div>
        <div className="xl:w-[50%] justify-center min-h-80 border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm">

          <div className=" flex flex-col gap-4 ">
            {treatments &&
              treatments.content.map((treatment) => (
                <SingleTreatment
                  tipoTratamientoId={treatment.tipoTratamientoId}
                  imagen={treatment.imagen}
                  descripcion={treatment.descripcion}
                  nombreMedicamento={treatment.nombreMedicamento}
                  dosisDiaria={treatment.dosisDiaria}>
                </SingleTreatment>
              ))}
          </div>

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
    </>
  );
}
