import { useEffect, useState } from "react";
import { Patient } from "../../../../Interfaces/interfaces";
import { fetchPatientSingle } from "../../../../Context/AuthContext";
import { Link, useParams } from "react-router-dom";
import TreatmentSummary from "../../../../Components/TreatmentSummary";
import ClinicHistory from "../../../../Components/ClinicHistory";
import { HeaderProfile } from "../../../../Components/HeaderProfile";

interface TabInfoProps {
  patient: Patient | undefined; // Asegúrate de que Patient esté definido
}

const tabInfo = [
  {
    tabName: "Historia clínica",
    component: (props: TabInfoProps) => <ClinicHistory patient={props.patient} />,
  },
  {
    tabName: "Tratamientos",
    component: (props: TabInfoProps) => <TreatmentSummary patient={props.patient} />,
  },
];

export default function PatientDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(tabInfo[0].tabName);
  const [patient, setPatient] = useState<Patient>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPatient = async () => {
      if (id) {
        setLoading(true);
        try {
          setPatient(await fetchPatientSingle(id));
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchPatient();
  }, []);

  const ActiveComponent = tabInfo.find(tab => tab.tabName === activeTab)?.component;


  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center ">
      <div className="w-full max-w-md  min-h-screen bg-white rounded-lg shadow-lg  max-md:m-auto">
        <HeaderProfile
          loading={loading}
          name={patient?.nombre}
          title="Detalles del paciente"
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}
          link={`/patient-list`}
        >
          <div className="absolute -bottom-4 w-full flex justify-center">
            <div className="flex gap-4">
              {tabInfo.map((tab) => (
                <button
                  key={tab.tabName}
                  onClick={() => setActiveTab(tab.tabName)}
                  className={`px-3  cursor-pointer shadow-xl   p-1 rounded-lg border-2 ${activeTab === tab.tabName
                      ? "bg-light-color border-violet-color shadow-xl text-violet-color "
                      : "bg-violet-color  border-light-color shadow-xl text-light-color "
                    }`}
                >
                  {tab.tabName}
                </button>
              ))}
            </div>
          </div>
        </HeaderProfile>

        <section className="flex justify-center mt-10">
          <Link to={`/patient/${id}/adherence`}>
            <p className="bg-violet-color w-40 p-1 rounded-md -my-2 text-center border-light-color shadow-xl text-light-color">
              Adherencia del Paciente
            </p>
          </Link>
        </section>
        <section className="">
          {/* Renderiza el componente activo pasando los datos como props */}
          {ActiveComponent && <ActiveComponent patient={patient} />}
        </section>
      </div>
    </main>
  );
}