import React from 'react'

const user = {
  idPaciente: 1,
  nombre: "Anna Herrera",
  apellido: "Perez",
  tipoDocumento: "DNI",
  numeroDocumento: 12345678,
  patologia: "Diabetes",
  financiador: "Swiss Medical",
  tratamientos: [
    { tipoTratamiento: "Medicamento", descripcion: "Metformina", dosis: "500mg", frecuencia: "Diaria" },
    { tipoTratamiento: "Nutrición", descripcion: "Dieta baja en azúcar", frecuencia: "Semanal" }
  ],
  medicos: ["Dr. Gonzalez", "Dra. Martinez"],
  entidades: ["Hospital Central"],
  datosPersonales: {
    nacionalidad: "Argentina",
    estadoCivil: "Casada",
    ocupacion: "Administrativa",
    domicilio: "Buenos Aires, Argentina"
  },
  antecedentesPersonales: [
    { tipo: "Diabetes Mellitus Tipo II", descripcion: "Diagnóstico hace 5 años." },
    { tipo: "Hipertensión Arterial", descripcion: "Controlada con medicación (Losartán 50 mg/día)." },
    { tipo: "Dislipidemia", descripcion: "Tratada con atorvastatina 20 mg/día." },
    { tipo: "Cirugías", descripcion: "Apendicectomía a los 15 años." },
    { tipo: "Alergias", descripcion: "No conocidas." },
    { tipo: "Hábitos", descripcion: "No fuma, consumo de alcohol ocasional. Dieta controlada baja en carbohidratos y grasas. Realiza actividad física moderada (caminata 3 veces por semana)." }
  ],
  antecedentesFamiliares: [
    { familiar: "Padre", descripcion: "Fallecido a los 68 años por complicaciones de diabetes tipo II." },
    { familiar: "Madre", descripcion: "62 años, hipertensa." },
    { familiar: "Hermano", descripcion: "40 años, sano." }
  ],
  evaluacionClinica: {
    peso: "75 kg",
    talla: "1.65 m",
    imc: "27.5 kg/m² (Sobrepeso)",
    presionArterial: "130/85 mmHg",
    frecuenciaCardiaca: "78 latidos por minuto",
    examenFisico: [
      { region: "Cabeza y cuello", descripcion: "Sin hallazgos patológicos." },
      { region: "Cardiovascular", descripcion: "Ruidos cardíacos regulares sin soplos." },
      { region: "Respiratorio", descripcion: "Murmullo vesicular presente, sin ruidos agregados." },
      { region: "Abdomen", descripcion: "Blando, depresible, sin visceromegalias." },
      { region: "Extremidades", descripcion: "Pulsos periféricos presentes y simétricos. Sin edemas." },
      { region: "Neurológico", descripcion: "Sin déficit motor ni sensitivo. Reflejos normales." }
    ]
  },
  comentarios: "María presenta un buen control de su diabetes y factores de riesgo cardiovascular, aunque es necesario optimizar su régimen de ejercicio y realizar ajustes en su dieta para mejorar los niveles de glucemia y perfil lipídico. Continuar con el seguimiento estrecho y educación en autocuidado."
}

export default function ClinicHistory() {
  return (
    <div className=' mt-8 p-6 flex-col gap-3 flex'>
      <h5 className='font-bold text-xl'>Historía Clínica</h5>
      <div className=' border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm'>
        <h6 className=' text-violet-color font-bold text-lg'>Datos</h6>
        <p>Nacionalidad: {user.datosPersonales.nacionalidad}</p>
        <p>Estado Civil: {user.datosPersonales.estadoCivil}</p>
        <p>Ocupación: {user.datosPersonales.ocupacion}</p>
        <p>Domicilio: {user.datosPersonales.domicilio}</p>
        <h6 className='text-violet-color font-bold text-lg'>Tratamientos</h6>
        <ul className=' ml-6 list-disc'>
          {user.antecedentesPersonales.map((personal) => (
            <React.Fragment key={personal.descripcion}>
              <li className=''><span className=' font-semibold'>{personal.tipo}</span> {personal.descripcion}</li>
            </React.Fragment>
          ))}
        </ul>
        <h6 className='text-violet-color font-bold text-lg'>Antecedentes Familiares</h6>
        <ul className=' ml-6 list-disc'>
          {user.antecedentesFamiliares.map((familia) => (
            <li key={familia.descripcion}>{familia.familiar} {familia.descripcion}</li>
          ))}
        </ul>
        <h6 className='text-violet-color font-bold text-lg'>Evaluación Clínica</h6>

        <ul className=' ml-6 list-disc'>
          <li>Peso:{user.evaluacionClinica.peso}</li>
          <li>Talla:{user.evaluacionClinica.talla}</li>
          <li>IMC:{user.evaluacionClinica.imc}</li>
          <li>Presión Arterial:{user.evaluacionClinica.presionArterial}</li>
          <li>Frecuencia Cardíaca:{user.evaluacionClinica.frecuenciaCardiaca}</li>
          <p className=' list-none font-semibold'>Examen Físico</p>
          {user.evaluacionClinica.examenFisico.map((fisico) => (
            <li key={fisico.descripcion}>{fisico.region} {fisico.descripcion}</li>
          ))}
        </ul>
        <h6 className='text-violet-color font-bold text-lg'>Comentarios</h6>
        <p>{user.comentarios}</p>
      </div>
      <button className="h-10 rounded-lg mt-6 w-3/4  m-auto font-semibold bg-secondary-brand-dark text-white">Descargar</button>
    </div>
    )
}
