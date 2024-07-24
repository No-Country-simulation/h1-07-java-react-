import { useState } from "react";
import { CampanaIcon, HomeIconTwo, MenuHambuerguesa, UserIconTwo, UserIconTwo2 } from "../../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { Logout } from "../../../../../components/Logout";




export function Home_Patients() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuItems = [
        { to: "/patient-home", icon: HomeIconTwo, label: "Inicio" },
        { to: "/userInfo_Patien", icon: UserIconTwo2, label: "Perfil" }
    ]

    return (
        <div>
            <div className={`fixed top-0  left-0 h-full bg-white text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0 z-10' : '-translate-x-full z-10'}`}>
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
            </div>
            <header className="flex flex-col justify-between h-[9.5rem] mb-4 relative right-4 bottom-3 w-[109%] bg-[#D9D9D9] border rounded-br-[3rem]">
                <div className="flex items-center space-x-2 content-center justify-between ml-4">
                    <Link to={"/userInfo"}>
                        <div className="w-[10.6rem] h-[5.5rem] ml-2 rounded-full flex flex-row items-center content-center justify-between">
                            <UserIconTwo width={44} height={44} />
                            <div className=''>
                                <h1 className="text-lg font-inter font-bold">Buenos días,</h1>
                                <p className="font-inter font-bold">Ana Maria</p>
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
                <div className="flex items-center space-x-2  justify-center">
                    <div className="relative py-2">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="border rounded-sm py-3 mb-3 pl-8 w-[40vh] text-sm"
                            placeholder="Búsqueda"
                        />
                        <svg
                            className="absolute left-[17rem] top-5 w-6 h-6 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>

                </div>
            </header>
        </div>
    );
}


