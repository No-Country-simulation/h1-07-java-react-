import { Link } from "react-router-dom";
import { MenuHambuerguesa } from "../../../../../../public/icons/Icons";
import { Avatar } from "@nextui-org/react";
import { NotificationProps } from "../Home_Patients";

export default function Header({
  toggleSidebar,
  nombre,
  apellido,
}: {
  toggleSidebar: () => void;
  nombre: string | undefined;
  apellido: string | undefined;
  notifications: NotificationProps[] | undefined;
}) {
  return (
    <header className="flex shadow-2xl flex-col p-4 justify-between h-[9.7rem] mb-4 relative  w-[100%] bg-[#D9D9D9]  rounded-br-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
      <div className="flex  items-center pt-4   justify-between">
        <Link to={"/profile"}>
          <div className=" ml-2 rounded-full flex flex-row items-center content-center justify-between">
            <Avatar name={nombre} color="primary" isBordered size="lg" />
          </div>
        </Link>
        <h1 className=" text-2xl font-inter font-bold text-white">
          Buenos días
        </h1>
        <div className="relative right-7 flex flex-row gap-2">
          {/* <Link to={"/notification"}>
            <Badge
              color="danger"
              content={notifications && notifications.length}
              isInvisible={notifications?.length === 0}
              shape="circle"
            >
              <CampanaNotificIcon width={30} height={30} stroke="#ffffff" />
            </Badge>
          </Link> */}
          <button onClick={toggleSidebar}>
            <MenuHambuerguesa width={30} height={30} stroke="" />
          </button>
        </div>
      </div>
      <div className=" m-auto text-center">
        <p className="font-inter font-bold text-white">
          Paciente {nombre} {apellido}
        </p>
      </div>
    </header>
  );
}
