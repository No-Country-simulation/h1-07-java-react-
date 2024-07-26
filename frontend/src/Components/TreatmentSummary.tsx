import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../api/api";
import { ContentTreatmentPacient } from "../Interfaces/interfaces";

export default function TreatmentSummary() {
  const { id } = useParams()
  const [treatments, setTreaments] = useState<ContentTreatmentPacient>()
  useEffect(() => {
    const fetchTreatmentPatient = async () => {
      const token = localStorage.getItem('TOKEN_KEY');
      if (id) {
        try {
          const res = await fetch(`${API_URL}/tratamiento/listar-tratamientos-paciente-medico-conectado?idPaciente=${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`
            },
          })
          const data = await res.json()
          setTreaments(data)
        } catch (error) {
          console.log(error)
        }
      }
    }

    fetchTreatmentPatient()
  }, []);

  const tipoTratamientoMap: Record<number, string> = {
    0: 'Medicación',
    1: 'Ejercitación',
    2: 'Nutrición',
    3: 'Psicologico'
  };


  return (
    <div className=' mt-8 p-6 flex-col gap-3 flex'>
      <h5 className='font-bold text-xl'>Resumen</h5>
      <div className=' justify-center min-h-80 border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm'>
        {treatments && treatments.content.map((treatment) => (
          <>
            <h5 className=' text-violet-color font-bold text-lg'> {tipoTratamientoMap[treatment.tipoTratamientoId] || 'Tipo de tratamiento desconocido'}
            </h5>
            <ul className=' ml-6 list-disc'>
              <li>{treatment.nombreMedicamento} {treatment.descripcion}.</li>
              <li>Cantidad: {treatment.dosisDiaria}</li>
            </ul>
            {treatment.tipoTratamientoId == 0 &&
              (<>
                <h6 className=' text-violet-color font-bold text-md'>Horarios</h6>
                <ul className=' ml-6 list-disc'>
                  <li>Inicio: {treatment.fechaInicio}</li>
                  <li>Finalización: {treatment.fechaFin}</li>
                  <li>Estado: {treatment.estado}</li>
                </ul>
              </>
              )
            }
          </>
        ))
        }
        {treatments?.content.length == 0 &&
          <h4 className=" text-xl  h-full flex justify-center items-center text-center">"El paciente no tiene un tratamiento registrado"</h4>

        }

      </div>
      <Link to={`/patient/${id}/treatment`} className="m-auto h-10  mt-6 w-3/4 ">
        <button className="w-full rounded-lg h-full m-auto font-semibold bg-violet-color text-white">Nuevo Registro</button>
      </Link>

    </div>
  )
}