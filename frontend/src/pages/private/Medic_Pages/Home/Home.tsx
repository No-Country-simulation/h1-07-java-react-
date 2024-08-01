import { useEffect, useState } from 'react';;
import { Link, useLocation } from 'react-router-dom';
import { CalendarIcon, CampanaIcon, CampanaIconTwo, FlechaIcon, HomeIconTwo, LapizIcon, LupitaIconTwo, MenssageIcon, MenuHambuerguesa, PeopleIcon, RelojIcon, UserIconTwo2 } from '../../../../../public/icons/Icons';
import { Logout } from '../../../../components/Logout';
import { Medic } from '../../../../Interfaces/interfaces';
import { fetchMedicData } from '../../../../Context/AuthContext';
import { AsideMenu } from '../../../../components/AsideMenu';
// import { AuthContext } from '../../../../Context/AuthContext';


interface Message {
	id: number;
	name: string;
	time: string;
	message: string;
	src: string;
	color: string;
}

const messages: Message[] = [
	{ id: 1, name: 'Anna Herrera', time: '9:28 AM', message: 'Le solicito recomendaciones para diabetes tipo II', src: "IMG_MEDICO/IMG_Pacientes.png", color: "#56BF33" },
	{ id: 2, name: 'Juan Gutierrez', time: '1:35 PM', message: 'Gracias por las recomendaciones Doctor Facundo', src: "IMG_MEDICO/IMG_Pacientes_2.png", color: "" },
	{ id: 3, name: 'Sofia Castillo', time: '10:25 AM', message: 'Ok, entendido. Muchas gracias por la atencion Doctor Facundo', src: "IMG_MEDICO/IMG_Pacientes_3.png", color: "" },
];


export function Home(): JSX.Element {
	// const { userName } = useContext(AuthContext);
	const [searchQuery, setSearchQuery] = useState('');
	const [activeTab, setActiveTab] = useState('Pacientes');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [medicInfo, setMedicInfo] = useState<Medic>()
	const location = useLocation();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};



	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const menuItems = [
		{ to: "/dashboard", icon: HomeIconTwo, label: "Inicio" },
		{ to: "/", icon: PeopleIcon, label: "Gente" },
		{ to: "/", icon: MenssageIcon, label: "Mensajes" },
		{ to: "/", icon: CampanaIconTwo, label: "Notificaciones" },
		{ to: "/userInfo", icon: UserIconTwo2, label: "Perfil" }
	]

	useEffect(() => {

		const fetchMedic = async () => {
			try {
				setMedicInfo(await fetchMedicData())
			} catch (err: any) {
				console.log(err)
			}
		}

		fetchMedic()

		const storedMedic = localStorage.getItem("MEDIC-DATA");
		if (storedMedic) {
			const medic: Medic = JSON.parse(storedMedic);
			setMedicInfo(medic);
		}
	}, [])


	return (

		<main className=" bg-gray-100 min-h-screen w-full">
			<AsideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			<header className="2xl:w-full  2xl:bg-red-600 2xl:items-center flex flex-col justify-between h-[9.7rem] mb-4 relative  w-[100%] bg-[#D9D9D9] border rounded-br-[3rem] bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] 2xl:bg-gradient-to-r 2xl:from-[#ffffff] 2xl:to-[#ffffff]">
				<div className='2xl:w-[50%] 2xl:rounded-xl 2xl:bg-gradient-to-r 2xl:from-[#5761C8] 2xl:to-[#A1AAFF]'>
					<div className=" flex items-center space-x-2 content-center justify-between ml-4">
						<Link to={"/userInfo"}>
							<div className="w-[12.6rem] h-[5.5rem] ml-2 rounded-full flex flex-row items-center content-center justify-between">
								<img src="IMG_MEDICO/IMG_MEDICO.png" className='ml-2' alt="" width={56} height={58} />
								<div className=''>
									<h1 className=" text-lg font-inter font-bold text-white">Buenos días,</h1>
									<p className="font-inter font-bold text-white">Dr. {medicInfo?.nombre} {medicInfo?.apellido}</p>
								</div>
							</div>
						</Link>
						<div className='relative -right-12 flex flex-row '>
							<CampanaIcon width={24} height={24} stroke='' />
							<button onClick={toggleSidebar} className='xl:hidden ml-2'>
								<MenuHambuerguesa width={24} height={24} stroke='' />
							</button>
						</div>

					</div>
					<div className="flex items-center space-x-2  justify-center">
						<div className="flex flex-row items-center justify-evenly bg-white py-2 mb-4 rounded-xl w-[75%] 2xl:w-[30%] px-5 2xl:justify-between xl:w-[30%] xl:px-5 xl:justify-between">
							<input
								type="text"
								value={searchQuery}
								onChange={handleSearchChange}
								className=" font-semibold text-[16px] outline-none"
								placeholder="Búsqueda"
							/>
							<LupitaIconTwo width={16} height={16} stroke='' />
						</div>
					</div>
				</div>
			</header>
			<div className="p-4">
				<section className="flex flex-row justify-evenly xl:justify-center xl:gap-x-5 xl:mb-10">
					<div className='rounded-lg py-1 px-3 bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]'>
						<Link to={"/patient-register"}><button>Añadir nuevo paciente</button></Link>
					</div>
					<div className="rounded-lg py-1 px-3 bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]">
						<Link to={"/patient-list"}><button>Lista de pacientes</button></Link>
					</div>
				</section>

				<section className="flex xl:gap-x-10  flex-col xl:flex-row xl:mt-20 xl:border-none xl:flex xl:items-center xl:justify-center mb-10 p-4 mt-5 rounded-lg xl:shadow-none shadow-md h-[9rem] border-1 border-solid border-gray-500">
					<div className='xl:border-gray-400 xl:border-1 xl:rounded-xl xl:py-5 flex flex-col xl:flex xl:mt-10 xl:bg-transparent xl:flex-col xl:items-center xl:justify-center 2xl:w-[25%] xl:w-[35%] xl:shadow-2xl '>
						<div className='flex flex-row justify-between items-center xl:items-center xl:mb-5'>
							<h2 className="text-md font-semibold mb-2 mr-3 text-[#3D4DA5] xl:text-center xl:text-[20px]">Siguiente cita programada</h2>
							<FlechaIcon width={16} height={16} stroke='#ffffff' />
						</div>
						<div className="flex mb-2 flex-col ">
							<div className='flex flex-col xl:mb-10'>
								<div className='flex flex-row items-center mt-1 xl:justify-between'>
									<div className='flex flex-row items-center'>
										<CalendarIcon width={15} height={15} stroke='' />
										<p className="font-inter text-black font-[500] ml-4 text-sm xl:pr-4">20 Julio 2024</p>
									</div>
									<LapizIcon width={16} height={16} stroke='' classname='hidden xl:flex' />
								</div>
								<div className='flex flex-row items-center mt-[15px]'>
									<RelojIcon width={15} height={15} stroke='' />
									<p className="font-inter font-[500] text-black ml-4 text-sm ">10:00-11:00 AM</p>
								</div>
								<div className='xl:hidden absolute left-[20.4rem] top-[19.4rem]'>
									<LapizIcon width={16} height={16} stroke='' classname='' />
								</div>
							</div>
							<Link to={"detalle"} className='hidden xl:block'>
								<div className='text-inter text-white font-[600] rounded-[8px] border-2 border-solid  border-gray-400  bg-[#5761C8] px-[60px] py-[9.1px] text-sm'>
									<button className="border-gray-400  bg-[#5761C8] ">
										Ver detalles
									</button>
								</div>
							</Link>
						</div>
						<Link to={"/dashboard"}>
							<div className='flex items-center justify-center xl:hidden '>
								<button className=" absolute top-[21rem] left-[6.4rem] text-inter text-white font-[600] rounded-[8px] border-2 border-solid  border-gray-400  bg-[#5761C8] px-[60px] py-[9.1px] text-sm mt-5">
									Ver detalles
								</button>
							</div>
						</Link>
					</div>

				</section>

				<h2 className='font-bold mb-5 font-inter xl:text-center xl:mt-16 xl:hidden'>Mensajeria</h2>

				<section className="xl:mt-32 xl:flex xl:flex-col xl:justify-center xl:border-none xl:items-center w-[100%] border-2 rounded-xl border-gray-500 ">
					<div className='xl:flex xl:w-[50%] xl:flex-col'>
						<div className="flex border-b-2 border-gray-500 rounded-lg mb-2">
							{['Pacientes', 'Médicos', 'Otros'].map((tab) => (
								<button
									key={tab}
									onClick={() => handleTabChange(tab)}
									className={` px-4 w-1/3  py-2 text-sm ${activeTab === tab ? 'bg-[#3D4DA5] text-white rounded-[8px] border-solid border-[1px] border-gray-500' : 'bg-gray-200 text-gray-600 '}`}
								>
									{tab}
								</button>
							))}
						</div>
						<div className="bg-gray-200 rounded-r-xl rounded-xl shadow-md ">
							{messages
								.filter((msg) => msg.name.toLowerCase().includes(searchQuery.toLowerCase()))
								.map((msg) => (
									<div key={msg.id} className={`flex justify-between bg-[${msg.color}] xl:py-10 py-1 px-2 border-b-1 border-gray-500`}>
										<div className={`flex flex-row items-center bg-${msg.color}  w-full`}>
											<img src={msg.src} alt="imagen_paciente" />
											<div className={`flex flex-col ml-3 w-full  `}>
												<div className='flex flex-row justify-between '>
													<p className="font-semibold text-sm">{msg.name}</p>
													<div className='flex flex-row'>
														<p className="text-gray-500 text-xs mr-2">{msg.time}</p>
														<FlechaIcon width={16} height={16} stroke='' />
													</div>
												</div>
												<p className="text-gray-700 text-sm">{msg.message}</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</section>
			</div>
			<div className='mt-5 flex justify-center items-center flex-col'>
				<h2 className='text-center font-inter font-bold text-2xl'>Donaciones</h2>
				<img src="JustinaLogo_2.png" width={250} height={250} alt="" />
				<Link to={"/donations"}>
					<button className='mt-4 bg-[#E08733] px-24 text-white font-inter py-3 rounded-3xl'>Acceder</button>
				</Link>
			</div>
			<footer className="mt-4">
			</footer>
		</main>
	);
};

