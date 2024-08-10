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

    <>
      <div className=" bg-[#5761C8]">
        <HeaderPatient
          name={patientInfo?.nombre}
          lastname={patientInfo?.apellido}
          typeDocument={patientInfo?.tipoDocumento}
          document={patientInfo?.numeroDocumento}
          link={"/patient-home"}>
        </HeaderPatient>
      </div>
      <main>
        <Outlet />
      </main>
    </>

  )
}
