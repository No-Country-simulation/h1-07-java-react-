import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import {

  CardIcon,
  HomeIcon,
  MapIcon,

  PhoneIcon,
} from "../../../../../public/icons/Icons";
import { Medic } from "../../../../Interfaces/interfaces";
import { AsideMenu } from "../../../../components/AsideMenu";
import { Logout } from "../../../../components/Logout";
import { Side_Menu } from "../../../../components/Side_Menu/Side_Menu";
import { Header_UserInfo } from "../../../../components/Header_UserIfon/Header_UserInfo";

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

  const [isExpanded, setIsExpanded] = useState(true);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <main className="flex min-h-screen bg-gray-100 md:flex md:justify-center">
      <Side_Menu
        classname={`hidden  xl:block h-[51rem] xl1:h-[56.27rem] 2xl:h-[68rem] bg-[#fff]  bg-gradient-to-r from-indigo-500 to-indigo-300 text-[#000] font-mono ${isExpanded ? 'w-[300px]' : 'w-[130px]'} `}
        isExpanded={isExpanded}
        toggleMenu={toggleMenu}
      />
      <div className={`flex-1 xl:ml-${isExpanded ? '325px' : '90px'} transition-margin duration-300 ease-in-out`}>
        <div className="w-full xl:max-w-7xl max-w-md bg-white rounded-lg shadow-lg  max-md:m-auto">
          <AsideMenu

            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />

          <Header_UserInfo
            toggleSidebar={toggleSidebar}
            nombre={medicInfo?.nombre}
            apellido={medicInfo?.apellido}
            especialidad={medicInfo?.especialidad}
          />

          <section className="ml-4 my-8">
            <div>
              <h2 className="font-bold text-[24px] font-inter">
                Datos Personales
              </h2>
            </div>
            <div className="flex flex-row mt-4 items-center">
              <CardIcon width={16} height={16} />
              <p className="ml-3 font-inter font-bold">Licencia</p>
            </div>
            <div className="mt-3 w-full">
              <input
                type="text"
                placeholder="drortegaramirez@gmail.com"
                value={medicInfo?.licencia}
                className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
              />
            </div>
            <div className="flex flex-row mt-4 items-center">
              <HomeIcon width={16} height={16} />
              <p className="ml-3 font-inter font-bold">Localidad</p>
            </div>
            <div className="mt-3 w-full relative">
              <input
                type="text"
                placeholder="Rosario"
                value={medicInfo?.localidad}
                className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
              />
            </div>
            <div className="flex flex-row mt-4 items-center">
              <MapIcon width={16} height={16} />
              <p className="ml-3 font-inter font-bold">Provincía</p>
            </div>
            <div className="mt-3 w-full relative">
              <input
                type="text"
                placeholder="Rosario"
                value={medicInfo?.provincia}
                className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
              />
            </div>
            {/* <div className="flex flex-row mt-4 items-center">
            <PhoneIcon width={16} height={16} />
            <p className="ml-3 font-inter font-bold">Teléfono</p>
          </div> */}
            <div className="mt-4 w-full relative ">
              <div className="flex flex-row items-center gap-x-3 mb-2">
                <PhoneIcon width={16} height={16} />
                <label htmlFor="" className="font-inter font-bold ">Telefono</label>
              </div>
              <input
                type="text"
                placeholder="Rosario"
                value={medicInfo?.telefono}
                className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
              />
            </div>
          </section>

          <div className="flex flex-row justify-center">
            <Logout />
          </div>
        </div>
      </div>

    </main>
  );
}
