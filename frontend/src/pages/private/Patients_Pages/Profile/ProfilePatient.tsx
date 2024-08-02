import { useEffect, useState } from "react";
import {
  BloodIcon,
  CardIcon,
  HospitalIcon,
  ShieldIcon,
} from "../../../../../public/icons/Icons";
// import { Logout } from "../../../../components/Logout";
import { Paciente } from "../../../../Interfaces/interfaces";
import { HeaderProfile } from "../../../../components/HeaderProfile";

export function ProfilePatient() {
  const [patientInfo, setPatienInfo] = useState<Paciente>();

  useEffect(() => {
    const storedMedic = localStorage.getItem("PATIENT-DATA");
    console.log(storedMedic);
    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
    }
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg  max-md:m-auto">
        <HeaderProfile
          name={patientInfo?.nombre}
          title='Detalles del paciente'
          lastname={patientInfo?.apellido}
          typeDocument={patientInfo?.tipoDocumento}
          financier={patientInfo?.financiador}
          document={patientInfo?.numeroDocumento} link={"/patient-home"}>
				</HeaderProfile>
        <section className="ml-4 my-8 min-h-[50vh] flex flex-col gap-1">
          <div>
            <h2 className="font-bold text-[24px] font-inter">
              Datos Personales
            </h2>
          </div>
          <div className="flex flex-row mt-4 items-center">
            <CardIcon width={16} height={16} />
            <p className="ml-4 font-inter font-bold">Documento</p>
          </div>
          <input
            type="text"
            disabled
            placeholder="Documento"
            value={patientInfo?.numeroDocumento}
            className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
          />
          <div className="flex flex-row mt-4 items-center">
            <BloodIcon width={16} height={16} />
            <p className="ml-3 font-inter font-bold">Patologia</p>
          </div>
          <input
            type="text"
            disabled
            placeholder="Patologia"
            value={patientInfo?.patologia}
            className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
          />
          <div className="flex flex-row mt-4 items-center">
            <ShieldIcon width={16} height={16} />
            <p className="ml-3 font-inter font-bold">Medicos</p>
          </div>
          <input
            type="text"
            disabled
            placeholder="Medicos"
            value={patientInfo?.medicos[0]}
            className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
          />
          <div className="flex flex-row mt-4 items-center">
            <HospitalIcon width={20} height={20} />
            <p className="ml-3 font-inter font-bold">Hospital</p>
          </div>
          <input
            type="text"
            disabled
            placeholder="Medicos"
            value={patientInfo?.entidades[0]}
            className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
          />
        </section>
        <footer className="flex flex-row justify-center">
          {/* <Logout /> */}
        </footer>
      </div>
    </main>
  );
}
