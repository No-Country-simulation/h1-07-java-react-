import DataHistory from "./DataHistory/DataHistory";
import usePatientInfo from "../../../../utils/hooks/usePatientInfo";

export default function History() {
  const { patient } = usePatientInfo()
  return (
    <main className="w-full min-h-screen bg-gradient-to-t from-[#398894] to-[#5B68D9]">
      <div className="container mx-auto max-w-screen-xl">
        <DataHistory idPaciente={patient?.idPaciente} />
      </div>
    </main>
  );
}
