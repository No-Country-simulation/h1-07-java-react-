import { Link } from "react-router-dom";
import { MenuHambuerguesa } from "../../../../../../public/icons/Icons";
import { Avatar } from "@nextui-org/react";

interface Type {
  toggleSidebar: () => void;
  nombre: string | undefined;
  apellido: string | undefined;
  especialidad: string | undefined;
}

export function Header_Home({
  toggleSidebar,
  nombre,
  apellido,
  especialidad,
}: Type) {
  return (
    <header className="flex xl:shadow-none shadow-2xl xl:justify-evenly flex-col justify-between h-[9.7rem] mb-4 relative   w-[100%] bg-[#D9D9D9] xl:rounded-0 rounded-br-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center xl:content-center  xl:w-[30%] md:w-[30]">
        <div className="flex items-center pt-4 justify-between xl:flex-row ">
          <Link to={"/userInfo"}>
            <div className=" ml-2 xl:p-0 xl:-mt-3 xl:items-center xl:ml-6 pt-3 rounded-full flex flex-row items-center content-center justify-between">
              <Avatar
                src="IMG_MEDICO/IMG_MEDICO.webp"
                color="secondary"
                isBordered
                size="lg"
              />
            </div>
          </Link>
          <div className="relative right-7  flex flex-row gap-2 xl:absolute xl:left-[70rem] xl:hidden">
            <button onClick={toggleSidebar} className=" scale-110">
              <MenuHambuerguesa width={30} height={30} stroke="" />
            </button>
          </div>
        </div>

        <div className="m-auto -mt-10 text-center xl:text-start xl:mt-0">
          <h3 className=" text-center xl:text-start text-2xl font-inter font-bold text-white">
            Buenos días
          </h3>
          <p className="font-inter font-bold text-white">
            Dr/a. {nombre} {apellido}
          </p>
          <p className="font-bold text-white">Especialidad: {especialidad}</p>
        </div>
      </div>
    </header>
  );
}
