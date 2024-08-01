import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CaledarIcon, CampanaIcon, CampanaNotificIcon, CerebroIcon, ConfigurationIconSideMenu, DonationIconTwo, EjercicioIcon, HealthIcon, HistoryIconThree, MensaggeIcon, MenuHambuerguesa, RelojIcon, SearchIcon, TratamentIconTwo, UserIconTwo, UserIconTwo2 } from "../../../../../public/icons/Icons";
import { Logout } from "../../../../components/Logout";
import { Paciente } from "../../../../Interfaces/interfaces";
import { fetchPatietConect } from "../../../../Context/AuthContext";


export function Home_Patients() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
	const [patientInfo, setPatienInfo] = useState<Paciente>()

	const [hasNotifications, setHasNotifications] = useState(true);

	useEffect(() => {
		const fetchPatien = async () => {
			try {
				setPatienInfo(await fetchPatietConect())
			} catch (err: any) {
				console.log(err)
			}
		}
		console.log();


		fetchPatien()

		const storedMedic = localStorage.getItem("PATIENT-DATA");

		if (storedMedic) {
			const medic: Paciente = JSON.parse(storedMedic);
			setPatienInfo(medic);
		}
	}, [])

	const menuItems = [
		{ to: "/patient-home", icon: UserIconTwo2, label: "Mi Perfil" },
		{ to: "/userInfo_Patien", icon: MensaggeIcon, label: "Mensajes" },
		{ to: "/userInfo_Patien", icon: ConfigurationIconSideMenu, label: "Configuración" },
		{ to: "/chat-cora", icon: HealthIcon, label: "Cora" }

	];

	const patientOptions = [
		{ to: "/Citas", icon: <CaledarIcon width={45} height={45} stroke=""/>, label: "Citas" },
		{ to: "/patient-tratamiento", icon: <TratamentIconTwo width={45} height={45} stroke=""/>, label: "Tratamiento" },
		{ to: "/patient-tratamiento", icon: <EjercicioIcon width={45} height={45} stroke=""/>, label: "Ejercicio" },
		{ to: "/patient-tratamiento", icon: <CerebroIcon width={45} height={45} stroke=""/>, label: "Psicologia" },
		{ to: "/patient-tratamiento", icon: <DonationIconTwo width={45} height={45} stroke=""/>, label: "Donaciones" },
		{ to: "/patient-tratamiento", icon: <HistoryIconThree width={45} height={45} stroke=""/>, label: "Historial" },
	];

	return (
		<main className="flex bg-gray-100 md:flex md:justify-center  ">
			<div className="w-full max-w-md min-h-screen font-inter bg-white rounded-lg shadow-lg  max-md:m-auto">
				<nav className={`fixed top-0 left-0 h-full bg-white transition-transform transform ${isSidebarOpen ? 'translate-x-0 z-10' : '-translate-x-full z-10'}`}>
					<div className="py-10 flex flex-col">
						<h1 className="w-[33vh] text-xl font-bold mb-5 text-center text-black">MENÚ</h1>
						<ul className="w-[30vh] ml-3">
							{menuItems.map((item, index) => (
								<Link to={item.to} key={index}>
									<li className={`border-1 border-solid border-gray-500 mb-5 flex items-center p-3 rounded-lg ${location.pathname === item.to ? 'bg-[#ffffff] hover:bg-[#9b9595]' : 'text-black hover:bg-[#9b9595]'}`}>
										<item.icon width={26} height={26} stroke=""/>
										<p className="ml-5 text-xl font-inter">{item.label}</p>
									</li>
								</Link>
							))}
						</ul>
						<Logout />
					</div>
				</nav>
				
				<header className="flex flex-col h-[10rem] mb-4 w-full bg-orange-800 bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] border rounded-br-[3rem] px-4">
					<div className="flex flex-row mt-4  justify-between w-full ">
						<Link to="/user-info-patient">
							<div className="flex items-center space-x-2 ">
								<img src="./public/IMG_MEDICO/IMG_Pacientes_3.png" className="w-16" alt="" />
								<div>
									<h1 className="text-lg font-bold text-white">Buenos días,</h1>
									<p className="font-bold text-white">{patientInfo?.nombre} {patientInfo?.apellido}</p>
								</div>
							</div>
						</Link>
						<div className="flex flex-row items-center ">
							{hasNotifications ? (
								<div className="relative left-16">
									<Link to={"/notification"} className="">
										<CampanaNotificIcon width={26} height={26} stroke="" />
									</Link>
								</div>
							) : (
								<Link to={"/notification"} className="relative left-14">
									<CampanaIcon width={26} height={26} stroke=""/>
								</Link>
							)}
							<button onClick={toggleSidebar} className="relative left-20">
								<MenuHambuerguesa width={24} height={24} stroke=""/>
							</button>
						</div>
					</div>
					<div className="bg-white flex flex-row items-center py-[5px] mt-5 px-4 rounded-3xl ml-3">
						<SearchIcon width={16} height={16} stroke="" />
						<input type="text" className="pl-2 py-1 w-full border-none outline-none" placeholder="Buscar" />
					</div>
				</header>
				<div className="ml-10 mt-10">
					<h3 className="font-bold font-inter text-2xl">Categorías</h3>
				</div>
				<section className="px-4 py-2 grid grid-cols-3 gap-4">
					{patientOptions.map((option, index) => (
						<Link to={option.to} key={index} className="flex flex-col items-center">
							<div className={` w-[7rem] h-[7rem] rounded-3xl flex items-center justify-center`}>
								<div className="w-[6.5rem] h-[6.5rem] rounded-full flex  justify-center items-center">
									{option.icon}
								</div>
							</div>
							<p className="mt-1">{option.label}</p>
						</Link>
					))}
				</section>
				<section className="flex justify-center font-inter mt-5 px-2 w-full">
					<div className="w-[90%] ">
						<div className="flex flex-col ml-2  ">
							<h3 className="font-semibold text-lg text-gray-500 font-inter">Próxima Cita</h3>
						</div>
						<div className="flex flex-col mt-10 p-3 w-full border-1 border-solid border-gray-400 rounded-xl mb-10">
							<Link to={"/Medic_Appointment"} className="">
								<div className="flex flex-row ">
									<div className="flex flex-col">
										<h3 className="text-2xl font-inter font-bold ">Dra. Peters</h3>
										<p className="font-inter text-gray-400 ">Nutriologa</p>
									</div>
									<img src="./public/IMG_PATIENTS/IMG_PATIENS_MEDICO_1.png" className="rounded-full ml-20 w-16 h-16" alt="" />
								</div>
							</Link>
							<div className="flex flex-row items-center">
								<RelojIcon width={16} height={16} stroke=""/>
								<div className="flex flex-col ml-4">
									<p className="font-inter font-semibold">01/08/2024</p>
									<p className="font-inter font-semibold">10:00 AM</p>
								</div>
							</div>
							<div className="flex flex-row justify-center gap-x-5 mt-5 mb-5">
								<button className="px-6 py-3 font-inter bg-[#8a8d9e] rounded-md">Reagendar</button>
								<button className="px-6 py-3 font-inter text-white bg-[#D98236] rounded-md">Confirmar</button>
							</div>
						</div>
					</div>
				</section >
				<section className="flex ml-5 mb-10 flex-col">
					<div className="mb-5">
						<h3 className="font-bold font-inter text-xl">Tus consultas recientes</h3>
					</div>
					<div className="flex flex-row gap-x-8 justify-center">
						<div className="flex flex-col">
							<img src="./public/IMG_PATIENTS/IMG_PATIENS_MEDICO_2.png" className="rounded-full" alt="" />
							<p className="font-inter font-bold text-[13px] mt-3">Dr. Gómez</p>
						</div>
						<div className="flex flex-col">
							<img src="./public/IMG_PATIENTS/IMG_PATIENS_MEDICO_3.png" className="rounded-full" alt="" />
							<p className="font-inter font-bold text-[13px] mt-3">Dra. María</p>
						</div>
						<div className="flex flex-col">
							<img src="./public/IMG_PATIENTS/IMG_PATIENS_MEDICO_4.png" className="rounded-full" alt="" />
							<p className="font-inter font-bold text-[13px] mt-3">Dra. Stevi</p>
						</div>
						<div className="flex flex-col ">
							<img src="./public/IMG_PATIENTS/IMG_PATIENS_MEDICO_5.png" className="rounded-full w-16 h-16" alt="" />
							<p className="font-inter font-bold text-[13px] mt-3">Dra. Felipe</p>
						</div>
					</div>
				</section>
			</div>
		</main >
	);
}
