import { Accordion, AccordionItem, Button, ModalBody, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ClinicHistoryProps, ContentClinicHistory } from "../Interfaces/interfaces"
import { SearchIcon } from "../../public/icons/Icons"
import { fetchClinicHistory } from "../Context/AuthContext"
import { SkeletonAcordion } from "./Skeletons"
import { ModalComponent } from "./ModalRegister"
import { Field, Form, Formik } from "formik"
import { initialValuesHistory } from "../utils/data/data"
import { validationHistoryClinic } from "../utils/validation/validation"
import { VoiceTranscript } from "./VoiceTranscript"
import { API_URL } from "../api/api"

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
  const [clinicHistories, setClinicHistories] = useState<ContentClinicHistory>()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [histories, setHistories] = useState("")
  const [loading, setLoading] = useState(false)
  const [transcript, setTranscript] = useState("")

  const { id } = useParams()
  useEffect(() => {
    if (id) {
      const fetchDataHistory = async () => {
        setLoading(true)
        try {
          setClinicHistories(await fetchClinicHistory(id))
        } catch (err: any) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      }
      fetchDataHistory()
    }
  }, [])

  const handleSubmitHistory = async (values: ClinicHistoryProps) => {
    const token = localStorage.getItem('TOKEN_KEY');

    if (id) {
      const historyClinic: ClinicHistoryProps = { ...values, descripcion: transcript, idPaciente: Number(id) }
      try {
        const res = await fetch(`${API_URL}/historia-clinica/crear-caso?idPaciente=${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(historyClinic)
        })

        if (!res.ok) {
          throw new Error("Fail:" + res.status);
        }
        const data = await res.json()
        console.log(data)
      } catch (err: any) {
        console.log(err)
      }
    }
  }

  return (
    <div className=' mt-8 p-6 flex-col gap-3 flex'>
      <h5 className='font-bold text-xl text-violet-color'>Datos Personales</h5>
      <div className=' border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm'>
        <h6 className='  font-bold text-lg'>Datos</h6>
        {/* AGREGAR DATOS REALES DEL USUARIO */}
        <ul className=' ml-6 list-disc'>
          {user.antecedentesFamiliares.map((familia) => (
            <li key={familia.descripcion}>{familia.familiar} {familia.descripcion}</li>
          ))}
        </ul>
      </div>
      <h5 className='font-bold text-xl text-violet-color'>Historia Clinica</h5>
      <div className=' relative w-full h-12 mb-3 flex justify-center items-center'>
        <input type="text" placeholder='Búsqueda' onChange={(e) => setHistories(e.target.value)} className='w-full h-full  border-violet-color rounded-md border-1 px-4' />
        <span className='right-5 absolute'>
          <SearchIcon width={20} height={20} />
        </span>
      </div>
      <div className=" flex flex-col gap-3">
        {loading
          ?
          <SkeletonAcordion />
          :
          <>
            {clinicHistories && clinicHistories?.content?.length > 0 ? (
              clinicHistories.content.filter((msg) => msg.titulo.toLowerCase().includes(histories.toLowerCase())).map((history, idx) => (
                <Accordion variant="splitted" key={idx} className=" rounded-md w-full">
                  <AccordionItem aria-label={history.titulo} title={`${history.titulo} ${history.fecha}`} className="w-full border-2 border-violet-color ">
                    {history.descripcion}
                  </AccordionItem>
                </Accordion>
              ))
            ) : (
              <p>No se encontraron historiales clínicos.</p>
            )}
          </>
        }
      </div>
      <Button onPress={onOpen} className="h-10 rounded-lg mt-10 w-3/4  m-auto font-semibold bg-secondary-brand-dark text-white">Nuevo Historial</Button>

      <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange} type="auto">
        <ModalHeader className="flex flex-col gap-1 text-center">Formulario Historial Clinico</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValuesHistory}
            validationSchema={validationHistoryClinic}
            onSubmit={handleSubmitHistory}>
            {({ isSubmitting }) => (
              <Form className=" flex flex-col  gap-4">
                <label htmlFor="titulo">Título</label>
                <Field id="titulo"
                  type="text"
                  name="titulo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Título de la historia clinica"></Field>
                <VoiceTranscript onTranscriptChange={setTranscript} label={"Descripción"} />
                <button disabled={isSubmitting} type="submit" className=" bg-secondary-brand-dark font-semibold h-10 rounded-md text-light-color">Registrar</button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalComponent>
    </div>
  )
}