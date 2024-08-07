import { Logout } from "../../../../components/Logout";
import { Personal } from "./PersonalData/Personal";
import usePatientInfo from "../../../../utils/hooks/usePatientInfo";

export function ProfilePatient() {
  const {patient} = usePatientInfo()
  
  return (
    <main className="container mx-auto ">
      <div className="max-w-screen-xl mx-auto">
        <Personal
          numeroDocumento={patient?.numeroDocumento}
          patologia={patient?.patologia}
          entidades={patient?.entidades[0]}
          medicos={patient?.medicos[0]}>
        </Personal>
        <footer className="flex flex-row justify-center">
          <Logout />
        </footer>
      </div>
    </main>
  );
}
