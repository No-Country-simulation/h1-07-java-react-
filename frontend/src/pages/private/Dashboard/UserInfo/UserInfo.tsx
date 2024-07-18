import { Link } from "react-router-dom";
import { EmailIcon, FlechaIconTwo, IconPassword, LapizIcon, UserIconTwo } from "../../../../Components/icons/Icons";
import { Logout } from "../../../../Components/Logout";

export function UserInfo(): JSX.Element {
    return (
        <main>
            <Link to={"/dashboard"}>
                <section className="flex flex-row mt-5 h-[3rem] items-center ">
                    <FlechaIconTwo width={30} height={30} />
                    <h4 className="ml-10 font-inter font-bold text-[18px] text-center">Perfil de doctor</h4>
                </section>
            </Link>
            <section>
                <div className="w-[14.5rem] h-[5.5rem] ml-6 mt-5 rounded-full flex flex-row items-center content-center justify-between">
                    <UserIconTwo width={58} height={58} />
                    <div className='mr-1'>
                        <h1 className="text-[18px] font-inter font-bold">Dr. Franco Ortega</h1>
                        <p className="font-inter">Médico Internista</p>
                    </div>
                </div>
            </section>
            <section className="flex flex-row justify-center mt-5">
                <div className="border-2 border-solid border-gray-400 rounded-xl py-1 mr-1 ml-2 px-[5px] ">
                    <p className="text-[14px] text-gray-400">Medicina Interna</p>
                </div>
                <div className="border-2 border-solid border-gray-400 rounded-xl py-1 mr-1 ml-2 px-[5px]">
                    <p className="text-[14px] text-gray-400">Medicina Interna</p>
                </div>
                <div className="border-2 border-solid border-gray-400 rounded-xl py-1 mr-1 ml-2 px-[5px]">
                    <p className="text-[14px] text-gray-400">Medicina Interna</p>
                </div>
            </section>
            <section className="mt-10 ml-6">
                <div className="flex flex-row items-center">
                    <h3 className="text-[24px] font-inter font-bold">Curriculum</h3>
                    <LapizIcon width={22} height={22} />
                </div>
            </section>
            <section className="mt-5 ml-3 mr-3">
                <div className="border-3 p-3 border-solid rounded-xl border-gray-400 ">
                    <p className="font-inter text-[15px]">Médico - Instituto Universitario de ciencias de la salud. “Fundación H. A. Barceló”. 2013
                        Especialista en Clínica Médica-Medicina Interna-“Asociación Médica Argentina”-“Sociedad Medicina Interna de Buenos Aires”. 2017
                        Auditoria Médica-“Colegio de Médicos de la provincia de Bs As”. Distrito III. 2021
                        Orientación en Cuidados Paliativos y Psico-Socio-Oncología- USAL. 2021</p>
                </div>
            </section>
            <section className="ml-4 mt-5 mb-10">
                <div className="">
                    <h2 className="font-bold text-[24px] font-inter">Datos inicio de sesión</h2>
                </div>
                <div className="flex flex-row mt-4 items-center">
                    <EmailIcon width={16} height={16} />
                    <p className="ml-3 font-inter font-bold">Correo</p>
                </div>
                <div className="mt-3 w-full">
                    <input type="text" placeholder="drortegaramirez@gmail.com" className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
                </div>
                <div className="flex flex-row mt-4 items-center">
                    <IconPassword width={16} height={16} />
                    <p className="ml-3 font-inter font-bold">Contraseña</p>
                </div>
                <div className="mt-3 w-full">
                    <input type="text" placeholder="*************" className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
                    <div className="absolute right-10 bottom-[-16px]">
                        <LapizIcon width={22} height={22} />
                    </div>
                </div>
            </section>
            <div className="flex flex-row justify-center">
                <Logout />
            </div>
        </main>
    )
}