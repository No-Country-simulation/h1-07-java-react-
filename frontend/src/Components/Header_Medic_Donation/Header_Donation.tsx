import { Link } from "react-router-dom";
import { ArrowWhiteIcon, MenuHambuerguesa } from "../../../public/icons/Icons";
import { useState } from "react";
import { AsideMenu } from "../AsideMenu";
import { PopoverMessage } from "../PopoverMessage";




export function Header_Donation() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<>
			<AsideMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
			<header className='mb-10 p-6 font-inter h-48 relative flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-br-[4rem] shadow-2xl'>
				<div className="mb-6 text-center relative flex flex-col items-center justify-center w-full">
					<Link to={"/dashboard"} className=' text-light-color absolute -left-0 hover:-translate-x-1 transition-all duration-300'>
						<ArrowWhiteIcon width={30} height={30} />
					</Link>
					<div className="flex items-center justify-center">
						<h1 className="text-xl font-bold text-light-color">Donaciones</h1>
						<button onClick={toggleSidebar} className=' absolute right-0'>
							<MenuHambuerguesa width={30} height={30} />
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<img src="JustinaLogo.png" alt="logo-justina" className=" w-32" />
					<p className=" text-center text-light-color text-sm">Bienvenido(a) Sistema de búsqueda y localización de Justina</p>
				</div>
				<PopoverMessage locate={'top'} title={'Funcionalidad en Desarrollo'} content={'Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!'} color={'primary'}>
					<div className='rounded-lg absolute -bottom-3 py-1 px-3 shadow-md bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]'>
						<button>Añadir posible donante</button>
					</div>
				</PopoverMessage>
			</header>
		</>

	)
}