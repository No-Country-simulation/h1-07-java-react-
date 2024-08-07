import { useState, useEffect } from "react";
import { Medic } from "../../../../Interfaces/interfaces";
import { AsideMenu } from "../../../../components/AsideMenu";
import { Logout } from "../../../../components/Logout";
import { DataUser } from "./DataUser/DataUser";
import Header from "../Home/Header.tsx/Header";

export function UserInfo(): JSX.Element {
  const [medicInfo, setMedicInfo] = useState<Medic>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center">
      <div className="w-full xl:max-w-7xl max-w-md bg-white rounded-lg shadow-lg  max-md:m-auto">
        <AsideMenu
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Header toggleSidebar={toggleSidebar} nombre={medicInfo?.nombre} apellido={medicInfo?.apellido} especialidad={medicInfo?.especialidad}></Header>
        <DataUser licencia={medicInfo?.nombre} localidad={medicInfo?.localidad} telefono={medicInfo?.telefono} provincia={medicInfo?.provincia} />
        <div className="flex flex-row justify-center">
          <Logout />
        </div>
      </div>
    </main>
  );
}
