import { useState } from 'react';;
import { Link, useLocation } from 'react-router-dom';
// import { useAuthContext } from '../../../../Context/AuthContext';
import { CalendarIcon, CampanaIcon, CampanaIconTwo, FlechaIcon, HomeIconTwo, LapizIcon, MenssageIcon, MenuHambuerguesa, PeopleIcon, RelojIcon, UserIconTwo, UserIconTwo2 } from '../../../../../public/icons/Icons';
import { Logout } from '../../../../components/Logout';
// import { Logout } from '../../../../Components/Logout';



interface Message {
	id: number;
	name: string;
	time: string;
	message: string;
}

const messages: Message[] = [
	{ id: 1, name: 'Anna Herrera', time: '9:28 AM', message: 'Le solicito recomendaciones para diabetes tipo II' },
	{ id: 2, name: 'Juan Gutierrez', time: '1:35 PM', message: 'Gracias por las recomendaciones Doctor.' },
	{ id: 3, name: 'Sofia Castillo', time: '10:25 AM', message: 'Ok, entendido.asdsadasdasd' },
];

export function Home(): JSX.Element {
	const [searchQuery, setSearchQuery] = useState('');
	const [activeTab, setActiveTab] = useState('Pacientes');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

	return (
		<div className="p-4 bg-gray-100 min-h-screen w-full">
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
								<p className="font-inter font-bold">Dr. Ortega</p>
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

			<section className="flex flex-row justify-evenly">
				<div className='rounded-lg py-1 px-3 text-[14px] border-1 border-solid border-gray-500'>
					<Link to={"/patient-register"}><button>Añadir nuevo paciente</button></Link>
				</div>
				<div className="rounded-lg py-1 px-3 text-[14px] border-1 border-solid border-gray-500">
					<Link to={"/patient-list"}><button>Lista de pacientes</button></Link>
				</div>
			</section>

			<section className="mb-10 bg-gray- p-4 mt-5 rounded-lg shadow-md h-[9rem] border-1 border-solid border-gray-500">
				<div className='flex flex-row justify-between items-center '>
					<h2 className="text-md font-semibold mb-2">Siguiente cita programada</h2>
					<FlechaIcon width={16} height={16} />
				</div>
				<div className="flex mb-2 flex-col ">
					<div className='flex flex-col'>
						<div className='flex flex-row items-center mt-1 '>
							<CalendarIcon width={15} height={15} />
							<p className="text-primary-brand-light ml-4 text-sm">20 Julio 2024</p>
						</div>
						<div className='flex flex-row items-center mt-[15px]'>
							<RelojIcon width={15} height={15} />
							<p className="ml-4 text-sm text-primary-brand-light">10:00-11:00 AM</p>
						</div>
						<div className='absolute left-[20.4rem] top-[19.4rem]'>
							<LapizIcon width={16} height={16} />
						</div>
					</div>
				</div>
				<Link to={"detalle"}>
					<div className='flex items-center justify-center '>
						<button className="text-primary-brand-light absolute top-[21rem] left-[6.4rem] text-inter rounded-[8px] border-2 border-solid  border-gray-400  bg-[#D9D9D9] px-[60px] py-[9.1px] text-sm mt-5">
							Ver detalles
						</button>
					</div>
				</Link>
			</section>
			<h2 className='font-bold mb-5 font-inter'>Mensajeria</h2>
			<section className="w-[100%] border-2 rounded-xl border-gray-500">
				<div className="flex border-b-2 border-gray-500 rounded-lg mb-2">
					{['Pacientes', 'Médicos', 'Otros'].map((tab) => (
						<button
							key={tab}
							onClick={() => handleTabChange(tab)}
							className={`px-4 w-1/3  py-2 text-sm ${activeTab === tab ? 'bg-[#A4A1A1] text-white rounded-[8px] border-solid border-[1px] border-gray-500' : 'bg-gray-200 text-gray-600 '}`}
						>
							{tab}
						</button>
					))}
				</div>
				<div className="bg-gray-200 rounded-r-xl rounded-xl shadow-md ">
					{messages
						.filter((msg) => msg.name.toLowerCase().includes(searchQuery.toLowerCase()))
						.map((msg) => (
							<div key={msg.id} className="flex justify-between p-2 border-b-1 border-gray-500">
								<div className="flex flex-row items-center  w-full">
									<UserIconTwo width={55} height={55} />

									<div className='flex flex-col ml-3 w-full'>
										<div className='flex flex-row justify-between '>
											<p className="font-semibold text-sm">{msg.name}</p>
											<div className='flex flex-row'>
												<p className="text-gray-500 text-xs mr-2">{msg.time}</p>
												<FlechaIcon width={16} height={16} />
											</div>
										</div>
										<p className="text-gray-700 text-sm">{msg.message}</p>
									</div>
								</div>
							</div>
						))}
				</div>
			</section>

			<footer className="mt-4">
				<h2 className="text-md font-semibold mb-2">Donaciones</h2>
				{/* Additional footer content */}
			</footer>
		</div>
	);
};

