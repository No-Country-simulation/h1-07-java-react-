import { Link, useLocation } from "react-router-dom"
import { CalendarIcon, FlechaIconTwo, HealthIcon, HomeIconTwo, HospitalIcon, IconLogout, PeopleIcon, UserIcon } from "../../../public/icons/Icons";
import { useAuthContext } from "../../Context/AuthContext";
import { Logout } from "../Logout";

interface SideMenuProps {
    classname: string;
    isExpanded: boolean;
    toggleMenu: () => void;
}

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



export function Side_Menu({ classname, isExpanded, toggleMenu }: SideMenuProps) {

    const { authTokens } = useAuthContext();
    const location = useLocation();

    return (
        <aside className={`${classname}   duration-300 ${isExpanded ? 'w-[13rem]' : 'w-[60px]'}`}>
            <nav className="flex flex-col w-full h-full justify-center items-center">
                <button
                    onClick={toggleMenu}
                    className="flex justify-end p-2 text-[#fff] rounded-md m-2 pr-3 w-full"
                >
                    <FlechaIconTwo width={26} height={26} stroke="#000000" classname="" />
                </button>
                <ul className="flex flex-col w-full duration-700">
                    {(authTokens && authTokens.authorities[0] === "ROLE_PACIENTE" ? menuPatient : menuItems).map((item, index) => (
                        <Link to={item.to} key={index} className="flex flex-col items-center ">
                            <li
                                className={`mb-5 flex items-center p-3 rounded-lg text-white ${location.pathname === item.to
                                    ? "bg-[#5761C8]"
                                    : "text-black hover:bg-[#3445a7] hover:text-white   border-[#3D4DA5]"
                                    } flex-row transition-all duration-300 ${isExpanded ? 'w-full' : 'w-[60px]'}`}
                            >
                                <item.icon width={26} height={26} stroke="#ffffff" />
                                {isExpanded && <p className="font-inter text-xl ml-5 text-white">{item.label}</p>}
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className='flex flex-row justify-center items-center mt-auto mb-4'>
                    <div
                        className={`flex items-center  rounded-lg ${isExpanded ? 'w-full' : 'w-[60px]'} justify-center ${isExpanded ? '' : 'text-black hover:bg-[#3445a7] hover:text-white'}`}
                    >
                        {isExpanded && <div className="">
                            <Logout />
                        </div>}
                    </div>
                </div>
            </nav>
        </aside>
    )
}
