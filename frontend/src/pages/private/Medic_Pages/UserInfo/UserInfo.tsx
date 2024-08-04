import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowWhiteIcon,
  CardIcon,
  HomeIcon,
  MapIcon,
  MenuHambuerguesa,
} from "../../../../../public/icons/Icons";
import { Medic } from "../../../../Interfaces/interfaces";
import { AsideMenu } from "../../../../components/AsideMenu";
import { Logout } from "../../../../components/Logout";

export function UserInfo(): JSX.Element {
  // const [curriculum, setCurriculum] = useState("");
  const [medicInfo, setMedicInfo] = useState<Medic>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { authTokens } = useAuthContext();
  
  
  useEffect(() => {
    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }
  }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setCurriculum(e.target.value);
  // };

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
        <header className="p-3 font-inter h-48 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-br-[4rem] shadow-2xl">
          <div className=" w-full xl:flex xl:flex-col  xl:justify-center xl:items-center">
            <div className="w-full flex flex-col  ">
              <div className="xl:flex mb-6 flex flex-row items-center gap-x-7 w-full">
                <Link
                  to={"/dashboard"}
                  className="text-light-color ml-10 xl:-left-0 -left-8 hover:-translate-x-1 transition-all duration-300"
                >
                  <ArrowWhiteIcon width={30} height={30} stroke="" />
                </Link>
                <h1 className="text-xl font-semibold text-light-color">
                  Detalles de paciente
                </h1>
                <button
                  onClick={toggleSidebar}
                  className=" hidden absolute -right-10 max-md:flex"
                >
                  <MenuHambuerguesa width={24} height={24} stroke="" />
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 w-full px-5 py-2 ">
              <img
                src="IMG_MEDICO/IMG_MEDICO.webp"
                className="w-12 h-12 "
                alt="image-medic-profile"
              />
              <div className="">
                <h6 className=" text-light-color text-lg  font-medium">
                  Dr. {medicInfo?.nombre} {medicInfo?.apellido}
                </h6>
                <p className=" text-light-color">
                  Especialidad {medicInfo?.especialidad}
                </p>
              </div>
            </div>
          </div>
        </header>
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
          <div className="mt-3 w-full relative">
            <input
              type="text"
              placeholder="Rosario"
              value={medicInfo?.telefono}
              className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
            />
          </div>
        </section>
        {/* <section className="mt-10 ml-6">
          <div className="flex flex-row items-center">
            <h3 className="text-[24px] font-inter font-bold">Curriculum</h3>
            <button onClick={handleEditClick} className="ml-2">
              <LapizIcon width={22} height={22} classname="" stroke="" />
            </button>
            {isEditing && (
              <button
                onClick={handleSaveClick}
                className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
              >
                Guardar
              </button>
            )}
          </div>
        </section> */}
        {/* <section className="mt-5 ml-3 mr-3">
          <div className="border-3 p-3 border-solid rounded-xl border-gray-400">
            {isEditing ? (
              <textarea
                value={curriculum}
                onChange={handleChange}
                className="w-full h-40 p-2 border-2 border-solid border-gray-400 rounded-xl"
              />
            ) : (
              <p className="font-inter text-[15px] min-h-20"> {curriculum}</p>
            )}
          </div>
        </section> */}
        {/* <section className="ml-4 mt-5 mb-10">
          <div>
            <h2 className="font-bold text-[24px] font-inter">
              Datos inicio de sesión
            </h2>
          </div>
          <div className="flex flex-row mt-4 items-center">
            <EmailIcon width={16} height={16} />
            <p className="ml-3 font-inter font-bold">Correo</p>
          </div>
          <div className="mt-3 w-full">
            <input
              type="text"
              placeholder="drortegaramirez@gmail.com"
              value={authTokens?.email}
              className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
            />
          </div>
          <div className="flex flex-row mt-4 items-center">
            <IconPassword width={16} height={16} stroke="" />
            <p className="ml-3 font-inter font-bold">Contraseña</p>
          </div>
          <div className="mt-3 w-full relative">
            <input
              type="text"
              placeholder="*************"
              value={"**********"}
              className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]"
            />
            <button className="absolute right-10 bottom-[16px]">
              <LapizIcon width={22} height={22} classname="" stroke="" />
            </button>
          </div>
        </section> */}
        <div className="flex flex-row justify-center">
          <Logout />
        </div>
      </div>
    </main>
  );
}
