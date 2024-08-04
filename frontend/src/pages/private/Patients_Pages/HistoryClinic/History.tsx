import { Link } from "react-router-dom";
import { FlechaIconTwo } from "../../../../../public/icons/Icons";
import ClinicHistoryClient from "../../../../components/ClinicHistoryClient";
import { useEffect, useState } from "react";
import { fetchPatientConnect } from "../../../../Context/AuthContext";
import { Paciente } from "../../../../Interfaces/interfaces";

export default function History() {
  const [patientInfo, setPatienInfo] = useState<Paciente | null>(null);
  const fetchPatient = async () => {
    const patientData = await fetchPatientConnect();
    if (patientData) {
      setPatienInfo(patientData);
    } else {
      console.error("No se pudo obtener la información del paciente");
    }
  };
  useEffect(() => {
    fetchPatient();
  });
  return (
    <main className="flex flex-col">
      <Link to={"/patient-home"}>
        <section className="flex flex-row items-center mt-6 mb-5 ">
          <FlechaIconTwo
            width={30}
            height={30}
            stroke="#000000"
            classname="ml-8"
          />
          <h3 className=" ml-4 font-inter font-bold">Historia Clínica</h3>
        </section>
      </Link>
      <div className=" -bottom-4 w-full flex justify-center">
        <div className="flex mt-2 gap-4">
          <ClinicHistoryClient idPaciente={patientInfo?.idPaciente} />
        </div>
      </div>
    </main>
  );
}
