import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderPatient } from '../pages/private/Patients_Pages/Profile/HeaderPatient/HeaderPatient'
import { Paciente } from '../Interfaces/interfaces';

export default function HeaderLayout() {
  const [patientInfo, setPatienInfo] = useState<Paciente>();
  useEffect(() => {
    const storedMedic = localStorage.getItem("PATIENT-DATA");
    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
    }
  }, [])
  return (
    <div className="container mx-auto">
      <div className="max-w-screen-xl mx-auto">
        <HeaderPatient
          name={patientInfo?.nombre}
          lastname={patientInfo?.apellido}
          typeDocument={patientInfo?.tipoDocumento}
          document={patientInfo?.numeroDocumento}
          link={"/patient-home"}>
        </HeaderPatient>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
