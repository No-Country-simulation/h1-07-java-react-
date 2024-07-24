import { Tab, Tabs } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Patient } from '../../../../Interfaces/interfaces';
import { Link, useParams } from 'react-router-dom';
import { fetchPatientSingle } from '../../../../Context/AuthContext';
import FormTreatment from '../../../../Components/FormTreatment';
import FormTraining from '../../../../Components/FormTraining';
import { HeaderProfile } from '../../../../Components/HeaderProfile';

export const TreatmentPatient = () => {
  const [loading, setLoading] = useState(true)
  const [patient, setPatient] = useState<Patient>()

  const { id } = useParams()
  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        try {
          setPatient(await fetchPatientSingle(id))
        } catch (err: any) {
          console.log(err)
        } finally {
          setLoading(false)
        }
      }

    }
    fetchPatient()
  }, []);
  return (
    <section className=" bg-gray-100 min-h-screen m-auto ">
      <div className="w-full max-w-md m-auto  bg-white rounded-lg shadow-lg  max-md:m-auto">
        <HeaderProfile loading={loading} name={patient?.nombre} lastname={patient?.apellido} typeDocument={patient?.tipoDocumento} financier={patient?.financiador} document={patient?.numeroDocumento} >
          <div className='absolute -bottom-4 w-full flex justify-center'>
            <div className='flex gap-4'>
              <Link to={`/patient/${id}`} className='px-3  cursor-pointer p-1 rounded-lg border-2 bg-violet-color  border-light-color shadow-xl text-light-color '>Historia clínica</Link>
              <Link to={`/patient/${id}`} className='px-3  cursor-pointer p-1 rounded-lg border-2 bg-light-color border-violet-color shadow-xl text-violet-color '>Tratamiento</Link>

            </div>
          </div>
        </HeaderProfile>
        <Tabs fullWidth={true} key="lg" size="lg" aria-label="Tabs sizes" className='shadow-2xl border-3 my-8 bg-violet-color border-violet-color  rounded-md' >
          <Tab key="Medicación" title="Medicación" className='' >
            <FormTreatment />
          </Tab>
          <Tab key="Entrenamientos" title="Entrenamientos" className='' >
            <FormTraining />
          </Tab>
          <Tab key="Nutrición" title="Nutrición" className='' >
            <form className='flex flex-col gap-y-6 px-4 min-h-[60vh]'>
              <h2 className=' text-xl font-bold'>Recomendaciones nutricionales</h2>
              <textarea placeholder='Añadir' name={'descripcion'} className=' min-h-40  border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
              </textarea>
              <div className=" flex items-center flex-col gap-2 ">
                <button
                  type="submit"
                  className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Añadir
                </button>
              </div>
            </form>
          </Tab>
          <Tab key="Psicológico" title="Psicológico" className='' >
            <form className='flex flex-col gap-y-6 px-4 min-h-[60vh]'>
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
            </form>
          </Tab>
          <Tab key="Resumen" title="Resumen" className='' >
            <form className='flex flex-col gap-y-6 px-4 min-h-[60vh]'>
              <h1>Resumen</h1>
              <textarea placeholder='Añadir' name={'descripcion'} className=' min-h-40  border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
              </textarea>
            </form>
          </Tab>
        </Tabs>
      </div>
    </section >

  )
}
