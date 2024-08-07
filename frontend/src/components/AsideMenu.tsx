import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  HealthIcon,
  HomeIconTwo,
  HospitalIcon,
  PeopleIcon,
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
  { to: "/patient-home", icon: HomeIconTwo, label: "Inicio" },
  { to: "/profile", icon: UserIcon, label: "Perfil" },
  { to: "/treatement", icon: HospitalIcon, label: "Tratamientos" },
  { to: "/chat-cora", icon: HealthIcon, label: "Cora" },
  { to: "/Citas", icon: CalendarIcon, label: "Citas" },
];

interface MenuProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const AsideMenu: React.FC<MenuProps> = ({
  toggleSidebar,
  isSidebarOpen,
}) => {
  const { authTokens } = useAuthContext();
  return (
    <>
      <aside
        className={`xl:hidden fixed z-50 duration-700 -top-5 left-0 h-screen  border-2 bg-white text-white transition-transform transform ${isSidebarOpen ? "translate-x-0 z-10" : "-translate-x-full z-10"
          }`}
      >
        <div className="py-10 flex flex-col xl:items-center ">
          <h3 className="text-xl font-bold mb-5 text-center text-black">
            MENÚ
          </h3>
          <span
            className=" absolute right-5 top-9 cursor-pointer transition-all duration-200 hover:scale-105 hover:rotate-90"
            onClick={toggleSidebar}
          ></span>
          <ul className="w-[30vh] xl:items-center xl:justify-center 2xl:flex 2xl:flex-col">
            {authTokens && authTokens.authorities[0] === "ROLE_PACIENTE" ? (
              <>
                {menuPatient.map((item, index) => (
                  <Link to={item.to} key={index}>
                    <li
                      className={`mb-5 flex flex-row ml-4 w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to
                        ? "bg-[#5761C8]"
                        : "text-black hover:bg-[#3445a7] hover:text-white duration-400 border-solid border-1 border-[#3D4DA5]"
                        }`}
                    >
                      <item.icon width={26} height={26} stroke="" />
                      <p className="font-inter text-xl ml-5">{item.label}</p>
                    </li>
                  </Link>
                ))}
              </>
            ) : (
              <>
                {menuItems.map((item, index) => (
                  <Link to={item.to} key={index}>
                    <li
                      className={`mb-5 flex flex-row ml-4 w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to
                        ? "bg-[#5761C8]"
                        : "text-black hover:bg-[#3445a7] hover:text-white duration-400 border-solid border-1 border-[#3D4DA5]"
                        }`}
                    >
                      <item.icon width={26} height={26} stroke="" />
                      <p className="font-inter text-xl ml-5">{item.label}</p>
                    </li>
                  </Link>
                ))}
              </>
            )}
          </ul>
          <Logout />
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};
