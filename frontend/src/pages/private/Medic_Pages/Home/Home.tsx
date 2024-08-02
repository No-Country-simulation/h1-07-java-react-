import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMedicData } from "../../../../Context/AuthContext";
import { AsideMenu } from "../../../../components/AsideMenu";
import Header from "./Header.tsx/Header";
import Shifts from "./Shifts/Shifts";
import { Medic } from "../../../../Interfaces/interfaces";
import ListPatients from "./ListPatients/ListPatients";

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
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg m-auto">
        <AsideMenu
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Header toggleSidebar={toggleSidebar} nombre={medicInfo?.nombre} apellido={medicInfo?.apellido} especialidad={medicInfo?.especialidad}></Header>
        <div className="p-4">
          <Shifts />
          <ListPatients />
        </div>
        <footer className="mt-5 flex justify-center items-center flex-col">
          <h2 className="text-center font-inter font-bold text-2xl">
            Donaciones
          </h2>
          <img src="JustinaLogo_2.png" width={250} height={250} alt="" />
          <Link to={"/donations"}>
            <button className="my-4 bg-[#E08733] px-24 text-white font-inter py-3 rounded-3xl">
              Acceder
            </button>
          </Link>
        </footer>
      </div>
    </main>
  );
}
