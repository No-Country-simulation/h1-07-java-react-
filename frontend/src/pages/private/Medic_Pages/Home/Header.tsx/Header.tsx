import { Link } from "react-router-dom";
import { MenuHambuerguesa } from "../../../../../../public/icons/Icons";
import { Avatar } from "@nextui-org/react";

export default function Header({
  toggleSidebar,
  nombre,
  apellido,
  especialidad,
}: {
  toggleSidebar: () => void;
  nombre: string | undefined;
  apellido: string | undefined;
  especialidad: string | undefined;
}) {
  return (
    <header className="flex shadow-2xl flex-col justify-between h-[9.7rem] mb-4 relative  w-[100%] bg-[#D9D9D9]  rounded-br-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
      <div className="flex  items-center pt-4   justify-between">
        <Link to={"/userInfo"}>
          <div className=" ml-2 pt-3  rounded-full flex flex-row items-center content-center justify-between">
            <Avatar
              src="IMG_MEDICO/IMG_MEDICO.webp"
              color="secondary"
              isBordered
              size="lg"
            />
          </div>
        </Link>
        <div className="relative right-7 flex flex-row gap-2">
          <button onClick={toggleSidebar}>
            <MenuHambuerguesa width={30} height={30} stroke="" />
          </button>
        </div>
      </div>
      <div className="m-auto -mt-10 text-center">
        <h3 className=" text-center text-2xl font-inter font-bold text-white">
          Buenos días
        </h3>
        <p className="font-inter font-bold text-white">
          Dr/a. {nombre} {apellido}
        </p>
        <p className="font-bold text-white">Especialidad: {especialidad}</p>
      </div>
    </header>
  );
}
