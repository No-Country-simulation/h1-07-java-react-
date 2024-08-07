import DataHistory from "./DataHistory/DataHistory";
import usePatientInfo from "../../../../utils/hooks/usePatientInfo";

export default function History() {
  const { patient } = usePatientInfo()
  return (
    <main className="container mx-auto">
      <div className="max-w-screen-xl mx-auto min-h-screen pb-10">
        <DataHistory idPaciente={patient?.idPaciente} />
      </div>
    </main>
  );
}
