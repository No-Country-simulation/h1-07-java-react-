import { useEffect, useState } from 'react';
import { Patient } from '../../../../Interfaces/interfaces';
import { fetchPatientSingle } from '../../../../Context/AuthContext';
import { HeaderProfile } from '../../../../Components/HeaderProfile';
import { useParams } from 'react-router-dom';
import ClinicHistory from '../../../../Components/ClinicHistory';
import TreatmentSummary from '../../../../Components/TreatmentSummary';

const tabInfo = [
  { tabName: 'Historia clínica', component: <ClinicHistory /> },
  { tabName: 'Tratamientos', component: <TreatmentSummary /> }
]

export default function PatientDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState(tabInfo[0].tabName);
  const [patient, setPatient] = useState<Patient>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        setLoading(true)
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
    <main className='flex min-h-screen bg-gray-100 md:flex md:justify-center '>
      <section className='w-full max-w-md   bg-white rounded-lg shadow-lg  max-md:m-auto'>
        <HeaderProfile
          loading={loading}
          name={patient?.nombre}
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}>
          <div className='absolute -bottom-4 w-full flex justify-center'>
            <div className='flex gap-4'>
              {tabInfo.map((tab) => (
                <button
                  key={tab.tabName}
                  onClick={() => setActiveTab(tab.tabName)}
                  className={`px-3  cursor-pointer shadow-xl   p-1 rounded-lg border-2 ${activeTab === tab.tabName ? 'bg-light-color border-violet-color shadow-xl text-violet-color ' : 'bg-violet-color  border-light-color shadow-xl text-light-color '}`}>
                  {tab.tabName}
                </button>
              ))}
            </div>
          </div>
        </HeaderProfile>
        {tabInfo.map((tab) => (
          <div key={tab.tabName} className={activeTab === tab.tabName ? 'block' : 'hidden'}>
            {tab.component}
          </div>
        ))}
      </section>
    </main>
  )
}
