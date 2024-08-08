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
    <header className="flex xl:shadow-none xl:border-none shadow-2xl xl:justify-evenly flex-col justify-between h-[9.7rem] mb-4 relative   w-[100%] bg-[#D9D9D9]  rounded-ee-[3rem] xl:rounded-es-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-center xl:content-center xl1:w-[47%] xl:w-[40%] md:w-[30] 2xl:w-[40%]">
        <div className="flex items-center pt-4 justify-between xl:flex-row ">
          <Link to={"/userInfo"}>
            <div className=" ml-2 xl1:ml-[23rem] xl:p-0 xl:-mt-3 xl:items-center xl:ml-60 2xl:ml-[32rem] pt-3 rounded-full flex flex-row items-center content-center justify-between">
              <Avatar
                src="IMG_MEDICO/IMG_MEDICO.webp"
                color="secondary"
                isBordered
                size="lg"
              />
            </div>
          </Link>
          <div className="relative right-7 flex flex-row gap-2 xl1:-ml-24 xl:absolute xl:left-[62rem] 2xl:left-[99rem] xl1:left-[70rem]">
            <button onClick={toggleSidebar}>
              <MenuHambuerguesa width={30} height={30} stroke="#ffffff" />
            </button>
          </div>
        </div>

        <div className="m-auto -mt-10 text-center xl:text-start xl:mt-0">
          <h3 className="text-center xl:text-start text-2xl font-inter font-bold text-white">
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
