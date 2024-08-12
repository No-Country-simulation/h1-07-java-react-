import { useEffect, useState } from "react";
import { Patient } from "../../../../Interfaces/interfaces";
import { fetchPatientSingle } from "../../../../Context/AuthContext";
import { Link, useParams } from "react-router-dom";
import ClinicHistory from "./ClinicHistory/ClinicHistory";
import { HeaderProfile } from "../../../../components/HeaderProfile";
import { TabDetail } from "./TabDetail/TabDetail";
import TreatmentSummary from "./TreatmentSummary/TreatmentSummary";

interface TabInfoProps {
  patient: Patient | undefined; // Asegúrate de que Patient esté definido
}

const tabInfo = [
  {
    tabName: "Historia clínica",
    component: (props: TabInfoProps) => (
      <ClinicHistory patient={props.patient} />
    ),
  },
  {
    tabName: "Tratamientos",
    component: (props: TabInfoProps) => (
      <TreatmentSummary patient={props.patient} />
    ),
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

  const ActiveComponent = tabInfo.find(
    (tab) => tab.tabName === activeTab
  )?.component;

  return (
    <main className=" min-h-screen">
      <div className=" flex-col">
        <HeaderProfile
          loading={loading}
          name={patient?.nombre}
          title="Detalles del paciente"
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}
          link={`/patient-list`}
          bgColor={"bg-gradient-to-r from-[#A1AAFF] to-[#5761C8]" }// Default gradient
          bgHamburger={"bg-[#5761C8]"}
        >
          <TabDetail tabInfo={tabInfo} activeTab={activeTab} setActiveTab={setActiveTab}></TabDetail>
        </HeaderProfile>

        <section className="flex justify-center mt-10">
          <Link to={`/patient/${id}/adherence`}>
            <p className="bg-violet-color w-40 p-1 rounded-md -my-2 text-center border-light-color shadow-xl text-light-color">
              Adherencia del Paciente
            </p>
          </Link>
        </section>
        {/* Renderiza el componente activo pasando los datos como props */}
        {ActiveComponent && <ActiveComponent patient={patient} />}
      </div>
    </main>
  );
}
