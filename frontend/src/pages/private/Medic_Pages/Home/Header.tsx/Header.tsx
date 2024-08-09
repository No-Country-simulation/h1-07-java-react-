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
    <header className="flex shadow-2xl flex-col justify-between h-[11.9rem] mb-4 relative rounded-ee-[3rem] bg-gradient-to-r from-[#050AAE] to-[#5168FF] || xl:rounded-es-[3rem] xl:w-full xl:max-w-full  ">
      <div className="flex flex-col justify-between h-full || xl:items-center xl:justify-center xl:max-h-dvh">
        <div className="flex flex-row justify-around mt-3 w-full || xl:w-[90%] xl:bg-green-500 xl:h-0">
          <Link to={"/userInfo"}>
            <div className="">
              <Avatar
                src="IMG_MEDICO/IMG_MEDICO.webp"
                color="secondary"
                isBordered
                size="lg"
                className="w-[40px] h-[40px] || xl:w-[80px] xl:h-[80px]"
              />
            </div>
          </Link>
          <h3 className="xl:hidden || text-center text-2xl font-inter font-bold text-white w-[30%] py-1 ">
            Buenos días
          </h3>
          <div className="">
            <button onClick={toggleSidebar}>
              <MenuHambuerguesa width={30} height={30} stroke="#ffffff" classname="" />
            </button>
          </div>
        </div>

        <div className="h-full justify-center flex flex-col items-center w-full  ||  xl:h-20 xl:items-start xl:w-[35%] ">
          <h3 className="hidden || xl:flex xl:text-2xl xl:font-inter xl:font-bold xl:text-white ">
            Buenos días
          </h3>
          <p className="font-inter text-center xl:text-start font-bold w-[50%] text-white">
            Dr/a. {nombre} {apellido}
          </p>
          <p className="font-bold text-white">Especialidad: {especialidad}</p>
        </div>

      </div>
    </header>
  );
}
