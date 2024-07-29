import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowWhiteIcon, CardIcon, EmailIcon, HomeIcon, IconPassword, LapizIcon, MapIcon, MenuHambuerguesa, PhoneIcon } from "../../../../../public/icons/Icons";
import { Logout } from "../../../../components/Logout";
import { Medic } from "../../../../Interfaces/interfaces";
import { useAuthContext } from "../../../../Context/AuthContext";
import { AsideMenu } from "../../../../components/AsideMenu";

export function UserInfo(): JSX.Element {
	const [curriculum, setCurriculum] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const [medicInfo, setMedicInfo] = useState<Medic>()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const { authTokens } = useAuthContext()
	useEffect(() => {
		const storedCurriculum = localStorage.getItem("curriculum");
		if (storedCurriculum) {
			setCurriculum(storedCurriculum);
		}

		const storedMedic = localStorage.getItem("MEDIC-DATA");
		if (storedMedic) {
			const medic: Medic = JSON.parse(storedMedic);
			setMedicInfo(medic);
		}
	}, []);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = () => {
		setIsEditing(false);
		localStorage.setItem("curriculum", curriculum);
	};

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setCurriculum(e.target.value);
	};

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<main className="flex min-h-screen bg-gray-100 md:flex md:justify-center">
			<div className="w-full max-w-md bg-white rounded-lg shadow-lg  max-md:m-auto">
				<AsideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
				<header className='p-6 font-inter h-48 relative flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-br-[4rem] shadow-2xl'>
					<div className="w-full flex flex-col items-start">
						<div className="mb-6 text-center relative flex flex-col items-center justify-center w-full">
							<Link to={"/dashboard"} className=' text-light-color absolute -left-0 hover:-translate-x-1 transition-all duration-300'>
								<ArrowWhiteIcon width={30} height={30} />
							</Link>
							<h1 className="text-xl font-semibold text-light-color">Detalles de paciente</h1>
							<button onClick={toggleSidebar} className=" absolute right-4">
								<MenuHambuerguesa width={24} height={24} />
							</button>
						</div>
					</div>
					<div className=" flex gap-4 items-start w-full">
						<img src="IMG_MEDICO/IMG_MEDICO.png" className=" w-12 h-12" alt="image-medic-profile" />
						<div className="">
							<h6 className=" text-light-color text-lg  font-medium">Dr. {medicInfo?.nombre} {medicInfo?.apellido}</h6>
							<p className=" text-light-color">Especialidad {medicInfo?.especialidad}</p>
						</div>
					</div>
					<div className='absolute -bottom-4 w-full flex justify-center'>
						<div className='flex gap-4'>
							<p className='px-3  cursor-pointer p-1 rounded-lg border-2 bg-light-color border-violet-color shadow-xl text-violet-color '>Medicina Interna</p>
							<p className='px-3  cursor-pointer p-1 rounded-lg border-2 bg-light-color border-violet-color shadow-xl text-violet-color '>Medicina General</p>
						</div>
					</div>
				</header>
				<section className="ml-4 my-8">
					<div>
						<h2 className="font-bold text-[24px] font-inter">Datos Personales</h2>
					</div>
					<div className="flex flex-row mt-4 items-center">
						<CardIcon width={16} height={16} />
						<p className="ml-3 font-inter font-bold">Licencia</p>
					</div>
					<div className="mt-3 w-full">
						<input type="text" placeholder="drortegaramirez@gmail.com" value={medicInfo?.licencia} className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
					</div>
					<div className="flex flex-row mt-4 items-center">
						<HomeIcon width={16} height={16} />
						<p className="ml-3 font-inter font-bold">Localidad</p>
					</div>
					<div className="mt-3 w-full relative">
						<input type="text" placeholder="Rosario" value={medicInfo?.localidad} className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
					</div>
					<div className="flex flex-row mt-4 items-center">
						<MapIcon width={16} height={16} />
						<p className="ml-3 font-inter font-bold">Provincía</p>
					</div>
					<div className="mt-3 w-full relative">
						<input type="text" placeholder="Rosario" value={medicInfo?.provincia} className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
					</div>
					<div className="flex flex-row mt-4 items-center">
						<PhoneIcon width={16} height={16} />
						<p className="ml-3 font-inter font-bold">Teléfono</p>
					</div>
					<div className="mt-3 w-full relative">
						<input type="text" placeholder="Rosario" value={medicInfo?.telefono} className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
					</div>
				</section>
				<section className="mt-10 ml-6">
					<div className="flex flex-row items-center">
						<h3 className="text-[24px] font-inter font-bold">Curriculum</h3>
						<button onClick={handleEditClick} className="ml-2">
							<LapizIcon width={22} height={22} />
						</button>
						{isEditing && (
							<button onClick={handleSaveClick} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
								Guardar
							</button>
						)}
					</div>
				</section>
				<section className="mt-5 ml-3 mr-3">
					<div className="border-3 p-3 border-solid rounded-xl border-gray-400">
						{isEditing ? (
							<textarea
								value={curriculum}
								onChange={handleChange}
								className="w-full h-40 p-2 border-2 border-solid border-gray-400 rounded-xl"
							/>
						) : (
							<p className="font-inter text-[15px] min-h-20" > {curriculum}</p>
						)}
					</div>
				</section>
				<section className="ml-4 mt-5 mb-10">
					<div>
						<h2 className="font-bold text-[24px] font-inter">Datos inicio de sesión</h2>
					</div>
					<div className="flex flex-row mt-4 items-center">
						<EmailIcon width={16} height={16} />
						<p className="ml-3 font-inter font-bold">Correo</p>
					</div>
					<div className="mt-3 w-full">
						<input type="text" placeholder="drortegaramirez@gmail.com" value={authTokens?.email} className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
					</div>
					<div className="flex flex-row mt-4 items-center">
						<IconPassword width={16} height={16} />
						<p className="ml-3 font-inter font-bold">Contraseña</p>
					</div>
					<div className="mt-3 w-full relative">
						<input type="text" placeholder="*************" className="px-5 py-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
						<button className="absolute right-10 bottom-[16px]">
							<LapizIcon width={22} height={22} />
						</button>
					</div>
				</section>
				<div className="flex flex-row justify-center">
					<Logout />
				</div>
			</div>
		</main>
	);
}
