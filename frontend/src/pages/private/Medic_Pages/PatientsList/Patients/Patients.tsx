import { Link } from "react-router-dom";
import { ChevronIcon } from "../../../../../../public/icons/Icons";
import { Avatar } from "@nextui-org/react";
import SkeletonsListPatient from "../../../../../Components/Skeletons";
import { ContentPatient } from "../../../../../Interfaces/interfaces";
import React from "react";

interface PatientProps {
  loading: boolean;
  patients: ContentPatient | undefined;
  searchPatient: string;
}

export const Patients: React.FC<PatientProps> = ({
  loading,
  patients,
  searchPatient,
}) => {
  return (
    <section className=" border-1 border-violet-color rounded-md min-h-[30rem]">
      {loading ? (
        <>
          <SkeletonsListPatient />
          <SkeletonsListPatient />
          <SkeletonsListPatient />
        </>
      ) : (
        <>
          {patients && patients.content.length > 0 ? (
            patients.content
              .filter((msg) =>
                msg.nombre
                  .concat(msg.apellido)
                  .toLowerCase()
                  .includes(searchPatient.toLowerCase())
              )
              .sort((a, b) => b.idPaciente - a.idPaciente)
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
              ))
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </section>
  );
};
