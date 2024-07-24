import { useState } from "react";
import { CampanaIcon, MensaggeIcon, MenuHambuerguesa, UserIconTwo, UserIconTwo2 } from "../../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { Logout } from "../../../../../components/Logout";




export function Home_Patients() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItems = [
        { to: "/patient-home", icon: UserIconTwo2, label: "Mi Perfil" },
        { to: "/userInfo_Patien", icon: MensaggeIcon, label: "Mensajes" }
    ]

    return (
        <div>
            <nav className={`fixed top-0  left-0 h-full bg-white text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0 z-10' : '-translate-x-full z-10'}`}>
                <div className="py-10 flex flex-col ">
                    <h1 className="text-xl font-bold mb-5 text-center text-black">MENÚ</h1>
                    <ul className='w-[30vh]'>
                        {menuItems.map((item, index) => (
                            <Link to={item.to} key={index}>
                                <li
                                    className={`mb-5 flex flex-row ml-4 w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to ? 'bg-[#666666]' : 'text-black hover:bg-[#9b9595]'
                                        }`}
                                >
                                    <item.icon width={26} height={26} />
                                    <p className="font-inter text-xl ml-5">{item.label}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <Logout />
                </div>
            </nav>
            <header className="flex flex-col justify-between h-[9.5rem] mb-4 relative right-9 bottom-3 w-[109%] bg-[#D9D9D9] border rounded-br-[3rem] bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] mt-3">
                <div className="flex items-center space-x-2 content-center justify-between ml-4">
                    <Link to={"/"}>
                        <div className="w-[10.6rem] h-[5.5rem] ml-7 mt-7 rounded-full flex flex-row items-center content-center justify-between">
                            <UserIconTwo width={44} height={44} />
                            <div className=''>
                                <h1 className="text-lg font-inter font-bold text-white">Buenos días,</h1>
                                <p className="font-inter font-bold text-white">Ana Maria</p>
                            </div>
                        </div>
                    </Link>
                    <div className='relative right-7 flex flex-row '>
                        <CampanaIcon width={24} height={24} />
                        <button onClick={toggleSidebar}>
                            <MenuHambuerguesa width={24} height={24} />
                        </button>
                    </div>
                </div>
            </header>
            <section className="bg-gray-400 mt-2">
                <div className="grid grid-flow-row gap-4 grid-cols-3 p-4">
                    <div className="flex items-center flex-col">
                        <div className="bg-[#5666BF] w-[7rem] h-[7rem] rounded-3xl">
                            <div className=" bg-white w-[6.5rem] h-[6.5rem] mt-1 ml-1 mr-7 rounded-[50%] text-center">
                               

                            </div>
                        </div>
                        <p className="mt-1">Citas</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <div className="bg-[#CEF086] w-[7rem] h-[7rem] rounded-3xl ">
                            <div className=" bg-white w-[6.5rem] h-[6.5rem] mt-1 ml-1 mr-7 rounded-[50%]"></div>
                        </div>
                        <p className="mt-1">Tratamiento</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <div className="bg-[#FFF386] w-[7rem] h-[7rem] rounded-3xl">
                            <div className=" bg-white w-[6.5rem] h-[6.5rem] mt-1 ml-1 mr-7 rounded-[50%]"></div>
                        </div>
                        <p className="mt-1">Ejercicio</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <div className="bg-[#00E0FF] w-[7rem] h-[7rem] rounded-3xl">
                            <div className=" bg-white w-[6.5rem] h-[6.5rem] mt-1 ml-1 mr-7 rounded-[50%]"></div>
                        </div>
                        <p className="mt-1">Nutricion</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <div className="bg-[#A9FFBC] w-[7rem] h-[7rem] rounded-3xl">
                            <div className=" bg-white w-[6.5rem] h-[6.5rem] mt-1 ml-1 mr-7 rounded-[50%]"></div>
                        </div>
                        <p className="mt-1">Salud Mental</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <div className="bg-[#F49E93] w-[7rem] h-[7rem] rounded-3xl">
                            <div className=" bg-white w-[6.5rem] h-[6.5rem] mt-1 ml-1 mr-7 rounded-[50%]"></div>
                        </div>
                        <p className="mt-1">Cora</p>
                    </div>





                </div>
            </section>
            <section className="font-inter mt-5">
                <div className="flex flex-col ">
                    <h3 className="font-bold text-center text-lg">Explorar categorias</h3>
                    <p className="pt-4 pl-2">Próximas citas</p>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <h3 className=" text-center text-lg">Control y seguimiento</h3>
                </div>

            </section>
        </div>
    );
}


