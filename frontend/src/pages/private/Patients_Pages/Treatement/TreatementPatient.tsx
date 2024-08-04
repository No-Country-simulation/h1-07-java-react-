import { useEffect, useState } from "react";
import { ContentTreatmentPacient, Paciente } from "../../../../Interfaces/interfaces";
import { HeaderProfile } from "../../../../components/HeaderProfile";
import { API_URL } from "../../../../api/api";
import { tipoTratamientoMap } from "../../../../utils/data/data";

export default function TreatementPatient() {
  const [patientInfo, setPatienInfo] = useState<Paciente>();
  const [treatments, setTreatments] = useState<ContentTreatmentPacient>();

  useEffect(() => {
    const fetchTreatmentPacient = async () => {
      const token = localStorage.getItem("TOKEN_KEY");

      try {
        const res = await fetch(
          `${API_URL}/tratamiento/listar-tratamientos-paciente-conectado`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Failed to login");
        }
        const data = await res.json();
        setTreatments(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTreatmentPacient();

    const storedMedic = localStorage.getItem("PATIENT-DATA");
    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
      console.log("hi");
    }
  }, []);

  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center  ">
      <div className="w-full  min-h-screen max-w-md  bg-white rounded-lg shadow-lg  max-md:m-auto">
        <HeaderProfile
          name={patientInfo?.nombre}
          title='Tus Tratamientos'
          lastname={patientInfo?.apellido}
          typeDocument={patientInfo?.tipoDocumento}
          financier={patientInfo?.financiador}
          document={patientInfo?.numeroDocumento} link={"/patient-home"}          >
        </HeaderProfile>
        <div className="p-4">
          <h1 className=" text-xl text-gray-700 font-semibold">Mis tratamientos</h1>

          <section className="justify-center min-h-80 border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm">
            {treatments &&
              treatments.content.map((treatment) => (
                <>
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
                  {treatment.tipoTratamientoId == 0 && (
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
                  )}
                </>
              ))}
            {treatments?.content.length == 0 && (
              <h4 className=" text-xl  h-full flex justify-center items-center text-center">
                "El paciente no tiene un tratamiento registrado"
              </h4>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
