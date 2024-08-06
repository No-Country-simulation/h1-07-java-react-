import { useEffect, useState } from "react";
import { fetchMedicData } from "../../../../Context/AuthContext";
import { AsideMenu } from "../../../../components/AsideMenu";
import Header from "./Header.tsx/Header";

import { Medic } from "../../../../Interfaces/interfaces";
import ListPatients from "./ListPatients/ListPatients";
import Donations from "./Donations/Donations";

export function Home(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [medicInfo, setMedicInfo] = useState<Medic>();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchMedic = async () => {
    try {
      setMedicInfo(await fetchMedicData());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMedic();

    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }
  }, []);

  return (
    <main className=" bg-gray-100 min-h-screen w-full font-inter">
      <div className="w-full  max-w-md bg-white rounded-lg shadow-lg m-auto">
        <AsideMenu
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Header
          toggleSidebar={toggleSidebar}
          nombre={medicInfo?.nombre}
          apellido={medicInfo?.apellido}
          especialidad={medicInfo?.especialidad}
        />
        <ListPatients />
        <Donations />
      </div>
    </main>
  );
}
