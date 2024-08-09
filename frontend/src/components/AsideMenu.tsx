import React from "react";
import { Link } from "react-router-dom";
import {
  CoraIcon,
  HealthIcon,
  HistorialIcon,
  HomeIconTwo,
  PeopleIcon,
  TratamientoIcon,
  TurneraIcon,
  UserIcon,
} from "../../public/icons/Icons";
import { Logout } from "./Logout";
import { useAuthContext } from "../Context/AuthContext";

// import { Logout } from "./Logout";

const menuItems = [
  { to: "/dashboard", icon: HomeIconTwo, label: "Inicio" },
  { to: "/patient-list", icon: PeopleIcon, label: "Pacientes" },
  { to: "/userInfo", icon: UserIcon, label: "Perfil" },
  { to: "/donations", icon: HealthIcon, label: "Donaciones" },
];

const menuPatient = [
  { to: "/chat-cora", icon: CoraIcon, label: "Cora" },
  { to: "/shift", icon: TurneraIcon, label: "Citas" },
  { to: "/treatement", icon: TratamientoIcon, label: "Tratamientos" },
  { to: "/history", icon: HistorialIcon, label: "Historia" },

];

interface MenuProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  src: string
}

export const AsideMenu: React.FC<MenuProps> = ({
  toggleSidebar,
  isSidebarOpen,
  src
}) => {
  const { authTokens } = useAuthContext();
  return (
    <>
      <aside
        className={`2xl:w-[30rem] xl:w-[22rem] fixed z-50 duration-700 -top-5 left-0 h-[110%] xl:h-[120%]  border-2 bg-white text-white transition-transform transform ${isSidebarOpen ? "-translate-x-0 z-10" : "-translate-x-full z-10"}`}
      >
        <div className="py-10 flex flex-col xl:items-center ">
          <h3 className="text-xl font-bold mb-5 text-center text-black xl:hidden">
            MENÚ
          </h3>
          <img src={src} alt="" className="mb-14 hidden xl:block" />
          <span
            className=" absolute right-5 top-9 cursor-pointer transition-all duration-200 hover:scale-105 hover:rotate-90"
            onClick={toggleSidebar}
          ></span>
          <ul className="w-[30vh] xl:items-center xl:justify-center  2xl:flex 2xl:flex-col items-center flex flex-col justify-center m-auto">
            {authTokens && authTokens.authorities[0] === "ROLE_PACIENTE" ? (
              <>
                <Link to={"/patient-home"}>
                  <li
                    className={` text-center mb-5 flex flex-row w-[13rem] items-center p-3 rounded-lg ${location.pathname === "/patient-home"
                      ? "bg-[#5761C8]"
                      : "text-black hover:bg-[#3445a7]  hover:text-white duration-400   border-solid border-1 border-[#3D4DA5]"
                      }`}
                  >
                    <span className=" w-[30px] h-[30px] flex justify-center items-center">
                      <HomeIconTwo width={20} height={20} stroke="#100056" />
                    </span>
                    <p className="font-inter text-xl ml-5 ">Inicio</p>
                  </li>
                </Link>
                {menuPatient.map((item, index) => (
                  <Link to={item.to} key={index} className="">
                    <li
                      className={` mb-5 flex flex-row w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to
                        ? "bg-[#5761C8]"
                        : "text-black hover:bg-[#3445a7]  hover:text-white duration-400   border-solid border-1 border-[#3D4DA5]"
                        }`}
                    >
                      <item.icon width={30} height={30} stroke="#" />
                      <p className="font-inter text-xl ml-3 ">{item.label}</p>
                    </li>
                  </Link>
                ))}
                <Link to={"/profile"}>
                  <li
                    className={` text-center mb-5 flex flex-row w-[13rem] items-center p-3 rounded-lg ${location.pathname === "/profile"
                      ? "bg-[#5761C8]"
                      : "text-black hover:bg-[#3445a7]  hover:text-white duration-400   border-solid border-1 border-[#3D4DA5]"
                      }`}
                  >
                    <span className=" w-[30px] h-[30px] flex justify-center items-center">
                      <UserIcon width={20} height={20} stroke="#100056" />
                    </span>
                    <p className="font-inter text-xl ml-5 ">Perfil</p>
                  </li>
                </Link>
              </>
            ) : (
              <div className="xl:flex xl:items-center xl:flex-col">
                {menuItems.map((item, index) => (
                  <Link to={item.to} key={index} className="w-full">
                    <li
                      className={` mb-5 flex flex-row w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to
                        ? "bg-[#5761C8]"
                        : "text-black hover:bg-[#3445a7] hover:text-white duration-400 border-solid border-1 border-[#3D4DA5]"
                        }`}
                    >
                      <item.icon width={26} height={26} stroke="#000000" />
                      <p className="font-inter text-xl ml-5">{item.label}</p>
                    </li>
                  </Link>
                ))}
              </div>
            )}
          </ul>
          <div className="flex m-auto">
            <Logout />
          </div>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};
