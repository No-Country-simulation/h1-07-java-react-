import { Personal } from "./PersonalData/Personal";
import usePatientInfo from "../../../../utils/hooks/usePatientInfo";
import { useAuthContext } from "../../../../Context/AuthContext";

export function ProfilePatient() {
  const { patient } = usePatientInfo()
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <main className="w-full min-h-screen bg-gradient-to-t from-[#C2C6EE] to-[#5460D9]">
      <div className="container mx-auto max-w-screen-xl">
        <Personal
          numeroDocumento={patient?.numeroDocumento}
          patologia={patient?.patologia}
          entidades={patient?.entidades[0]}
          medicos={patient?.medicos[0]}>
        </Personal>
        <footer className="flex flex-row justify-center items-center">
          <div className=" w-full  p-4 flex justify-center items-center bg-transparent">
            <button
              onClick={handleLogout}
              className="px-14 py-2 bg-[#E08733] font-inter rounded-xl text-white hover:bg-[#794e0a] duration-700"
            >
              Cerrar Sesión
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
