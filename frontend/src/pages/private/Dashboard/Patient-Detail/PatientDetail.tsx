import { Avatar } from '@nextui-org/react';
import { Link, useParams } from 'react-router-dom';
import { FlechaIconTwo } from '../../../../../public/icons/Icons';

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
  entidades: ["Hospital Central"]
}


export default function PatientDetail() {
  let { id } = useParams();
  return (
    <main className='flex min-h-screen bg-gray-100 md:flex md:justify-center '>
      <section className='w-full max-w-md   bg-white rounded-lg shadow-lg  max-md:m-auto'>
        <header className='p-6 h-48 relative flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-violet-600 rounded-br-[4rem]'>
          <div className="w-full flex flex-col items-start">
            <div className="mb-6 text-center relative flex flex-col items-center justify-center w-full">
              <Link to={"/dashboard"} className=' text-light-color absolute -left-10 hover:-translate-x-1 transition-all duration-300'>
                <FlechaIconTwo width={30} height={30} />
              </Link>
              <h1 className="text-xl font-semibold text-light-color">Detalles de paciente</h1>
            </div>
            <div className="flex gap-4 items-center">
              <Avatar name="Anna" className='bg-pink-400' size='lg' />
              <div className="text-left">
                <h6 className='font-bold text-light-color'>Anna Herrera</h6>
                <p className='text-sm text-light-color font-semibold'>Mujer de 35 años</p>
              </div>
            </div>
          </div>
          <div className='absolute -bottom-4 w-full flex justify-center'>
            <div className='flex gap-4'>
              <span className='bg-violet-color cursor-pointer text-light-color p-1 rounded-lg'>Historia clínica</span>
              <span className='bg-violet-color cursor-pointer text-light-color p-1 rounded-lg'>
                <Link to={`/patient/${id}/treatment`}>Tratamientos</Link>
              </span>
            </div>
          </div>
        </header>
        <div className=' mt-8 p-6 flex-col gap-3 flex'>
          <h5 className='font-bold text-xl'>Historia clinica</h5>
          <div className=' border-2 border-gray-color rounded-lg p-2 flex flex-col gap-y-2'>
            <h6 className=' text-violet-color font-bold text-lg'>Datos</h6>
            <p>{user.nombre}</p>
            <p><span className=' font-semibold'>{user.tipoDocumento}</span>: {user.numeroDocumento}</p>
            <h6 className='text-violet-color font-bold text-lg'>Tratamientos</h6>
            <ul className=' ml-6 list-disc'>
              {user.tratamientos.map((tramiento) => (
                <>
                  <li className=''>{tramiento.tipoTratamiento}</li>
                  <li>{tramiento.dosis} {tramiento.frecuencia}</li>
                  <li>{tramiento.descripcion}</li>
                </>
              ))}
            </ul>
            <h6 className='text-violet-color font-bold text-lg'>Doctores</h6>
            <ul className=' ml-6 list-disc'>
              {user.medicos.map((medico) => (
                <li className=''>{medico}</li>
              ))}
            </ul>
            <h6 className='text-violet-color font-bold text-lg'>Entidades</h6>
            <p>{user.entidades}</p>
            <h6 className='text-violet-color font-bold text-lg'>Patología</h6>
            <p>{user.patologia}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
