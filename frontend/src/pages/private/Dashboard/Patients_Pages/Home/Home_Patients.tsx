import { useState } from "react";
import { Link } from "react-router-dom";
import { CampanaIcon, MensaggeIcon, MenuHambuerguesa, UserIconTwo, UserIconTwo2 } from "../../../../../../public/icons/Icons";
import { Logout } from "../../../../../Components/Logout";

export function Home_Patients() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const menuItems = [
        { to: "/patient-home", icon: UserIconTwo2, label: "Mi Perfil" },
        { to: "/userInfo_Patien", icon: MensaggeIcon, label: "Mensajes" },
    ];

    const patientOptions = [
        { to: "/patient-citas", color: "bg-[#5666BF]", label: "Citas" },
        { to: "/patient-tratamiento", color: "bg-[#CEF086]", label: "Tratamiento" },
        { to: "/patient-ejercicio", color: "bg-[#FFF386]", label: "Ejercicio" },
        { to: "/patient-nutricion", color: "bg-[#00E0FF]", label: "Nutricion" },
        { to: "/patient-saludmental", color: "bg-[#A9FFBC]", label: "Salud Mental" },
        {
            to: "/patient-historial",
            color: "bg-[#F49E93]",
            label: "Cora",
            svg: (
                <svg width="70" height="76" viewBox="0 0 55 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.52872 1.60371C-10.8984 7.6369 29.2548 45 29.2548 45C29.2548 45 65.4047 4.7759 50.3178 1.60371C41.4607 -0.258611 29.2548 13.6582 29.2548 13.6582C29.2548 13.6582 14.3995 -2.25651 4.52872 1.60371Z" stroke="black" />
                </svg>
            ),
        },
    ];

    return (
        <div>
            <nav className={`fixed top-0 left-0 h-full bg-white transition-transform transform ${isSidebarOpen ? 'translate-x-0 z-10' : '-translate-x-full z-10'}`}>
                <div className="py-10 flex flex-col">
                    <h1 className="text-xl font-bold mb-5 text-center text-black">MENÚ</h1>
                    <ul className="w-[30vh]">
                        {menuItems.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <li className={`mb-5 flex items-center p-3 rounded-lg ${location.pathname === item.to ? 'bg-[#666666]' : 'text-black hover:bg-[#9b9595]'}`}>
                                    <item.icon width={26} height={26} />
                                    <p className="ml-5 text-xl font-inter">{item.label}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <Logout />
                </div>
            </nav>
            <header className="flex justify-between items-center h-[9.5rem] mb-4 bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] border rounded-br-[3rem]  px-4">
                <Link to="/">
                    <div className="flex items-center space-x-2">
                        <UserIconTwo width={44} height={44} />
                        <div>
                            <h1 className="text-lg font-bold text-white">Buenos días,</h1>
                            <p className="font-bold text-white">Ana Maria</p>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center space-x-4">
                    <CampanaIcon width={24} height={24} />
                    <button onClick={toggleSidebar}>
                        <MenuHambuerguesa width={24} height={24} />
                    </button>
                </div>
            </header>
            <section className="bg-gray-400 mt-2 p-4 grid grid-cols-3 gap-4">
                {patientOptions.map((option, index) => (
                    <Link to={option.to} key={index} className="flex flex-col items-center">
                        <div className={`${option.color} w-[7rem] h-[7rem] rounded-3xl flex items-center justify-center`}>
                            <div className="bg-white w-[6.5rem] h-[6.5rem] rounded-full">
                                {option.svg}
                            </div>
                        </div>
                        <p className="mt-1">{option.label}</p>
                    </Link>
                ))}
            </section>
            <section className="font-inter mt-5 px-2">
                <div className="flex flex-col">
                    <h3 className="font-bold text-center text-lg">Explorar categorias</h3>
                    <p className="pt-4">Próximas citas</p>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <h3 className="text-center text-lg">Control y seguimiento</h3>
                </div>
            </section>
        </div>
    );
}
