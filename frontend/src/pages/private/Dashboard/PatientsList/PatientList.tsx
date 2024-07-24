import { useEffect, useState } from 'react'
import { fetchPatient } from '../../../../Context/AuthContext'
import { Link } from 'react-router-dom'
import { ContentPatient } from '../../../../Interfaces/interfaces'
import { Avatar } from '@nextui-org/react'
import { ChevronIcon, FlechaIconTwo, SearchIcon } from '../../../../../public/icons/Icons'
import SkeletonsListPatient from '../../../../components/Skeletons'
import { getRandomColor } from '../../../../utils/functions/functions'


export default function PatientList() {
  const [patients, setPatients] = useState<ContentPatient>()
  const [searchPatient, setSearchPatient] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchPatientData = async () => {
      setLoading(true)
      try {
        setPatients(await fetchPatient())

      } catch (err: any) {
        console.log(err)
      } finally {
        setLoading(false)
      }
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
          <input type="text" placeholder='Búsqueda' onChange={(e) => setSearchPatient(e.target.value)} className='w-full h-full  border-violet-color rounded-md border-1 px-4' />
          <span className='right-5 absolute'>
            <SearchIcon width={20} height={20} />
          </span>
        </div>
        <div className=" border-1 border-violet-color rounded-md min-h-[20rem]">
          {loading &&
            <>
              <SkeletonsListPatient />
              <SkeletonsListPatient />
            </>
          }
          {patients && patients.content.filter((msg) => msg.nombre.concat(msg.apellido).toLowerCase().includes(searchPatient.toLowerCase()))
            .map((patient) => (
              <div key={patient.idPaciente} className='border-1 rounded-md flex h-20 items-center justify-around transition-all duration-200 hover:border-violet-color'>
                <Avatar name={patient.nombre} color='default' className={`${getRandomColor()}`} key={patient.idPaciente} />
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
        <Link to={"/patient-register"}>
          <button className="h-10 rounded-md mt-6 w-full font-semibold bg-secondary-brand-dark text-white">Añadir Nuevo Paciente</button>
        </Link>
      </div>
    </section>
  )
}
