import  { useEffect, useState } from 'react'
import { fetchPatient } from '../../../../Context/AuthContext'
import { ChevronIcon, FlechaIconTwo, SearchIcon } from '../../../../components/icons/Icons'
import { Link } from 'react-router-dom'
import { ContentPatient } from '../../../../Interfaces/interfaces'
import { Avatar } from '@nextui-org/react'


const mockPatients: ContentPatient = {
  content: [
    {
      idPaciente: 1,
      nombre: "Juan",
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
      entidades: ["Hospital Central"]
    },
    {
      idPaciente: 2,
      nombre: "Maria",
      apellido: "Gomez",
      tipoDocumento: "DNI",
      numeroDocumento: 87654321,
      patologia: "Hipertensión",
      financiador: "OSDE",
      tratamientos: [
        { tipoTratamiento: "Medicamento", descripcion: "Losartan", dosis: "50mg", frecuencia: "Diaria" },
        { tipoTratamiento: "Entrenamiento", descripcion: "Ejercicio cardiovascular", frecuencia: "Diaria" }
      ],
      medicos: ["Dr. Perez", "Dra. Fernandez"],
      entidades: ["Clínica Norte"]
    },
    {
      idPaciente: 3,
      nombre: "Carlos",
      apellido: "Lopez",
      tipoDocumento: "DNI",
      numeroDocumento: 11223344,
      patologia: "Asma",
      financiador: "Medifé",
      tratamientos: [
        { tipoTratamiento: "Medicamento", descripcion: "Salbutamol", dosis: "100mcg", frecuencia: "Diaria" },
        { tipoTratamiento: "Psicológico", descripcion: "Terapia respiratoria", frecuencia: "Semanal" }
      ],
      medicos: ["Dr. Suarez", "Dra. Castro"],
      entidades: ["Hospital Sur"]
    },
    {
      idPaciente: 4,
      nombre: "Ana",
      apellido: "Martinez",
      tipoDocumento: "DNI",
      numeroDocumento: 44556677,
      patologia: "Artritis",
      financiador: "Galeno",
      tratamientos: [
        { tipoTratamiento: "Medicamento", descripcion: "Ibuprofeno", dosis: "400mg", frecuencia: "Diaria" },
        { tipoTratamiento: "Entrenamiento", descripcion: "Fisioterapia", frecuencia: "Semanal" }
      ],
      medicos: ["Dr. Ramirez", "Dra. Blanco"],
      entidades: ["Clínica Oeste"]
    },
    {
      idPaciente: 5,
      nombre: "Lucia",
      apellido: "Fernandez",
      tipoDocumento: "DNI",
      numeroDocumento: 99887766,
      patologia: "Gastritis",
      financiador: "OSDE",
      tratamientos: [
        { tipoTratamiento: "Medicamento", descripcion: "Omeprazol", dosis: "20mg", frecuencia: "Diaria" },
        { tipoTratamiento: "Nutrición", descripcion: "Dieta baja en grasas", frecuencia: "Semanal" }
      ],
      medicos: ["Dr. Gomez", "Dra. Torres"],
      entidades: ["Hospital Este"]
    }
  ],
  number: 1,
  size: 5,
  totalElements: 5,
  totalPages: 1,
  first: true,
  last: true
};

export default function PatientList() {
  const [patients, setPatients] = useState<ContentPatient>()
  useEffect(() => {
    const fetchPatientData = async () => {
      setPatients(await fetchPatient())
    }
    fetchPatientData()
  }, [])

  return (
    <section className='flex min-h-screen bg-gray-100 md:flex md:justify-center '>
      <div className='w-full max-w-md p-6  bg-white rounded-lg shadow-lg  max-md:m-auto'>
        <div className="mb-6 text-center relative flex flex-col items-center justify-center">
          <Link to={"/dashboard"} className=' absolute -left-5 hover:-translate-x-1 transition-all duration-300'>
            <FlechaIconTwo width={30} height={30} />
          </Link>
          <h1 className="text-xl font-bold ">Listado de pacientes</h1>
        </div>
        <div className=' relative w-full h-12 mb-6 flex justify-center items-center'>
          <input type="text" placeholder='Búsqueda' className='w-full h-full  border-violet-color rounded-md border-1 px-4' />
          <span className='right-5 absolute'>
            <SearchIcon width={20} height={20} />
          </span>
        </div>

        <div className=" border-1 border-violet-color rounded-md">
          {!mockPatients && <div className='h-60 flex justify-centeri items-center'><p className=' text-xl text-center font-semibold text-secondary-brand-dark'>Sucedio un error vuelve a intentarlo más tarde</p></div>}
          {mockPatients && mockPatients?.content.map((patient) => (
            <div className='border-1 rounded-md flex   h-20 items-center justify-around transition-all duration-200 hover:border-violet-color'>
              <Avatar name={patient.nombre} color='secondary' key={patient.idPaciente} />
              <div className=" w-3/6 text-center">
                <h6 className=' font-bold'>{patient.nombre} {patient.apellido}</h6>
                <p className=' text-sm text-gray-color'>{patient.numeroDocumento}</p>
              </div>
              <Link to={`/patient/${patient.idPaciente}`} className=' w-10 h-10 border-2 rounded-full flex justify-center hover:translate-x-1 transition-all duration-300 items-center bg-gray-200 cursor-pointer hover:brightness-90' >
                <ChevronIcon width={20} height={20} />
              </Link>
            </div>
          ))
          }
        </div>
        <Link to={"/patient-register"}
          
        >
          <button className="h-10 rounded-md mt-6 w-full font-semibold bg-secondary-brand-dark text-white">Añadir Nuevo Paciente</button>
        </Link>
      </div>
    </section>
  )
}
