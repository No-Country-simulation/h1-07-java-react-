import { useEffect, useState } from "react";
import { fetchPatientConnect } from "../../../../Context/AuthContext";
import { Paciente } from "../../../../Interfaces/interfaces";
import DataHistory from "./DataHistory/DataHistory";

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
    <main className="container mx-auto shadow-xl">
      <div className="max-w-screen-xl mx-auto min-h-screen pb-10">
        <DataHistory idPaciente={patientInfo?.idPaciente} />
      </div>
    </main>
  );
}
