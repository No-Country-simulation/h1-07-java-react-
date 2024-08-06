import { useEffect, useState } from "react";
import { Logout } from "../../../../components/Logout";
import { Paciente } from "../../../../Interfaces/interfaces";
import { Personal } from "./PersonalData/Personal";
import { HeaderPatient } from "./HeaderPatient/HeaderPatient";

export function ProfilePatient() {
  const [patientInfo, setPatienInfo] = useState<Paciente>();

  useEffect(() => {
    const storedMedic = localStorage.getItem("PATIENT-DATA");

    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
    }
  }, []);

  return (
    <main className="container mx-auto border-1 shadow-xl">
      <div className="max-w-screen-xl mx-auto">
        <HeaderPatient
          name={patientInfo?.nombre}
          lastname={patientInfo?.apellido}
          typeDocument={patientInfo?.tipoDocumento}
          document={patientInfo?.numeroDocumento}
          link={"/patient-home"}>
        </HeaderPatient>
        <Personal
          numeroDocumento={patientInfo?.numeroDocumento}
          patologia={patientInfo?.patologia}
          entidades={patientInfo?.entidades[0]}
          medicos={patientInfo?.medicos[0]}>
        </Personal>
        <footer className="flex flex-row justify-center">
          <Logout />
        </footer>
      </div>
    </main>
  );
}
