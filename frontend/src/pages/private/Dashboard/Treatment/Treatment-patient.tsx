import { Avatar, Tab, Tabs } from '@nextui-org/react';
import FormTreatment from '../../../../components/FormTreatment';
import FormTraining from '../../../../components/FormTraining';
import { FlechaIconTwo } from '../../../../components/icons/Icons';
import { Link, useParams } from 'react-router-dom';

export const TreatmentPatient = () => {
  let { id } = useParams();

  return (
    <section className="flex min-h-screen bg-gray-100 md:flex md:justify-center  ">
      <div className="w-full max-w-md  bg-white rounded-lg shadow-lg  max-md:m-auto">
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
              <span className='bg-violet-color cursor-pointer text-light-color p-1 rounded-lg'>
                <Link to={`/patient/${id}`}>Historia clínica</Link>
              </span>
              <span className='bg-violet-color cursor-pointer text-light-color p-1 rounded-lg'>
                <Link to={`/patient/${id}/treatment`}>Tratamientos</Link>
              </span>
            </div>
          </div>
        </header>
        <Tabs fullWidth={true} key="lg" size="lg" aria-label="Tabs sizes" className=' border-3 my-8 border-violet-color rounded-md' color="secondary">
          <Tab key="Medicación" title="Medicación" className='' >
            <FormTreatment />
          </Tab>
          <Tab key="Entrenamientos" title="Entrenamientos" className='' >
            <FormTraining />
          </Tab>
          <Tab key="Nutrición" title="Nutrición" className='' >
            <form className='flex flex-col gap-y-6 px-4'>
              <h2 className=' text-xl font-bold'>Recomendaciones nutricionales</h2>
              <textarea placeholder='Añadir' name={'descripcion'} className=' min-h-40  border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
              </textarea>
              <div className=" flex items-center flex-col gap-2">
                <button
                  type="submit"
                  className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Añadir
                </button>
              </div>
            </form>
          </Tab>
          <Tab key="Psicológico" title="Psicológico" className='' >
            <form className='flex flex-col gap-y-6 px-4'>
              <h2 className=' text-xl font-bold'>Ejercicios mentales</h2>
              <textarea placeholder='Añadir' name={'descripcion'} className=' min-h-40  border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
              </textarea>
              <div className=" flex items-center flex-col gap-2">
                <button
                  type="submit"
                  className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Añadir
                </button>
              </div>
            </form>          </Tab>
          <Tab key="Resumen" title="Resumen" className='' >
            <h1>asdasds</h1>
          </Tab>
        </Tabs>
      </div>
    </section >

  )
}
