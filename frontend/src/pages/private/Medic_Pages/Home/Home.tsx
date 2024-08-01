import { useEffect, useState } from 'react';;
import { Link } from 'react-router-dom';
import { ArrowBlackIcon, CalendarIcon, CampanaIcon, ChevronIcon, LapizIcon, MenuHambuerguesa, RelojIcon } from '../../../../../public/icons/Icons';
import { ContentPatient, Medic } from '../../../../Interfaces/interfaces';
import { fetchMedicData, fetchPatient } from '../../../../Context/AuthContext';
import { AsideMenu } from '../../../../components/AsideMenu';
import { PopoverMessage } from '../../../../components/PopoverMessage';
import SkeletonsListPatient from '../../../../components/Skeletons';
import { Avatar } from '@nextui-org/react';
// import { AuthContext } from '../../../../Context/AuthContext';

export interface Message {
	id: number;
	name: string;
	time: string;
	message: string;
	src: string;
	color: string;
}

export function Home(): JSX.Element {
	const [searchQuery, setSearchQuery] = useState('');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [medicInfo, setMedicInfo] = useState<Medic>()
	const [patients, setPatients] = useState<ContentPatient>()
	const [loading, setLoading] = useState(false)

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};


	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const fetchPatientData = async () => {
		setLoading(true)
		try {
			setPatients(await fetchPatient())

		} catch (err: any) {
			console.log(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		const fetchMedic = async () => {
			try {
				setMedicInfo(await fetchMedicData())
			} catch (err: any) {
				console.log(err)
			}
		}

		fetchMedic()
		fetchPatientData()

		const storedMedic = localStorage.getItem("MEDIC-DATA");
		if (storedMedic) {
			const medic: Medic = JSON.parse(storedMedic);
			setMedicInfo(medic);
		}
	}, [])


	return (

		<main className=" bg-gray-100 min-h-screen w-full font-inter">
			<div className="w-full max-w-md bg-white rounded-lg shadow-lg m-auto">
				<AsideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				<header className="flex shadow-2xl flex-col justify-between h-[9.7rem] mb-4 relative  w-[100%] bg-[#D9D9D9]  rounded-br-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
					<div className="flex items-center space-x-2 content-center justify-between ml-4">
						<Link to={"/userInfo"}>
							<div className="w-[12.6rem] h-[5.5rem] ml-2 rounded-full flex flex-row items-center content-center justify-between">
								<img src="IMG_MEDICO/IMG_MEDICO.png" className='ml-2' alt="" width={56} height={58} />
								<div className=''>
									<h1 className=" text-lg font-inter font-bold text-white">Buenos días,</h1>
									<p className="font-inter font-bold text-white">Dr. {medicInfo?.nombre} {medicInfo?.apellido}</p>
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
					<div className=" m-auto">
						<span className=' relative flex justify-center items-center'>
							<input
								type="text"
								value={searchQuery}
								onChange={handleSearchChange}
								className="border rounded-md py-2 font-semibold px-4 w-[40vh] text-[16px]"
								placeholder="Búsqueda"
							/>
							<svg
								className=" absolute right-3"
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
						</span>
					</div>
				</header>
				<div className="p-4">
					<section className="flex flex-row justify-evenly">
						<div className='rounded-lg py-1 px-3 shadow-md bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]'>
							<Link to={"/patient-register"}><button>Añadir nuevo paciente</button></Link>
						</div>
						<div className="rounded-lg py-1 shadow-md px-3 bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]">
							<Link to={"/patient-list"}><button>Lista de pacientes</button></Link>
						</div>
					</section>
					<section className="mb-10 flex flex-col justify-center border-violet-color p-6 mt-5 rounded-lg h-[9.5rem] border-1 border-solid shadow-2xl">
						<div className='flex  mb-2 flex-row justify-between items-center '>
							<h2 className="text-md font-semibold text-[#3D4DA5]">Siguiente cita programada</h2>
							<span className=' cursor-pointer'>
								<ArrowBlackIcon width={16} height={16} />
							</span>
						</div>
						<div className="flex mb-2  items-center justify-between">
							<div className='flex flex-col'>
								<div className='flex flex-row items-center mt-1 '>
									<CalendarIcon width={15} height={15} />
									<p className="font-inter text-black font-[500] ml-4 text-sm">20 Julio 2024</p>
								</div>
								<div className='flex flex-row items-center mt-[15px]'>
									<RelojIcon width={15} height={15} />
									<p className=" font-inter font-[500] text-black ml-4 text-sm ">10:00-11:00 AM</p>
								</div>
							</div>
							<div className=' cursor-pointer'>
								<LapizIcon width={16} height={16} />
							</div>
						</div>
						<div className='flex items-center justify-center '>
							<PopoverMessage locate={'top'} title={'Funcionalidad en Desarrollo'} content={'Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!'} color={'primary'}>
								<button className=" absolute top-[22rem]  text-inter text-white font-[600] rounded-[8px] border-2 border-solid  border-gray-400  bg-[#5761C8] px-[60px] py-[9.1px] text-sm mt-5">
									Ver detalles
								</button>
							</PopoverMessage>
						</div>

					</section>
					<div className="mb-4 flex items-center justify-between">
						<h2 className='font-bold  font-inter'>Lista de pacientes</h2>
					</div>

					<section className="w-[100%]">
						<div className=" border-1 border-violet-color rounded-md min-h-[20rem]">
							{loading &&
								<>
									<SkeletonsListPatient />
									<SkeletonsListPatient />
								</>
							}
							{patients && patients.content.slice(1,5).map((patient) => (
								<div key={patient.idPaciente} className='border-1 rounded-md flex h-20 items-center justify-around transition-all duration-200 hover:border-violet-color'>
									<Avatar name={patient.nombre} color='primary' key={patient.idPaciente} />
									<div className=" w-3/6 text-center">
										<h6 className=' font-bold'>{patient.nombre} {patient.apellido}</h6>
										<p className=' text-sm text-gray-color'>{patient.numeroDocumento}</p>
									</div>
									<Link to={`/patient/${patient.idPaciente}`} className=' w-10 h-10 border-2 rounded-full flex justify-center hover:translate-x-1 transition-all duration-300 items-center bg-gray-200 cursor-pointer hover:brightness-90' >
										<ChevronIcon width={20} height={20} />
									</Link>
								</div>
							))
							}
						</div>
					</section>
					<div className="flex items-center justify-end ">
						<Link to={"/patient-list"} className=' px-4 border-2 bg-violet-color cursor-pointer w-32 text-center py-1 rounded-xl text-light-color'>Ver más</Link>
					</div>
				</div>
				<div className='mt-5 flex justify-center items-center flex-col'>
					<h2 className='text-center font-inter font-bold text-2xl'>Donaciones</h2>
					<img src="JustinaLogo_2.png" width={250} height={250} alt="" />
					<Link to={"/donations"}>
						<button className='my-4 bg-[#E08733] px-24 text-white font-inter py-3 rounded-3xl'>Acceder</button>
					</Link>
				</div>
				{/* <footer className="mt-4">
				</footer> */}
			</div>
		</main>
	);
};

