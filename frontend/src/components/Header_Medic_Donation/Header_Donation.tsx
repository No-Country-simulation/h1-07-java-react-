import { Link } from "react-router-dom";
import { ArrowWhiteIcon, DonationRegistreIcon, MenuHambuerguesa } from "../../../public/icons/Icons";
import { useState } from "react";

interface header_Donation {
    link: string
    src: string
}


export function Header_Donation({ link, src }: header_Donation) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className='mb-10 p-6 font-inter h-48 relative flex flex-col items-center justify-center bg-gradient-to-r from-[#FFA4D7] to-[#C23584] rounded-br-[4rem] shadow-2xl'>
            <div className="mb-6 text-center relative flex flex-col items-center justify-center w-full">
                <Link to={link} className='text-light-color absolute left-4 hover:-translate-x-1 transition-all duration-300'>
                    <ArrowWhiteIcon width={30} height={30} stroke="#ffffff" />
                </Link>
                <div className="flex items-center justify-center">
                    <h1 className="text-xl font-bold text-light-color">Donaciones</h1>
                    <button onClick={toggleSidebar} className='absolute right-0 hidden'>
                        <MenuHambuerguesa width={30} height={30} stroke="" />
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <img src={src} alt="logo-justina" className=" w-32" />
                <p className=" text-center text-light-color text-sm">Bienvenido(a) Sistema de búsqueda y localización de Justina</p>
            </div>
            <div className='rounded-lg absolute -bottom-3 left-5 py-1 px-3 shadow-md bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]'>
                <Link to={"/donationRegistre"} className="flex flex-row items-center">
                    <DonationRegistreIcon width={20} height={20} stroke="" />
                    <button className="ml-2">Añadir posible donante</button>
                </Link>
            </div>
        </header>
    )
}