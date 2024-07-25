import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowWhiteIcon, EmailIcon, IconPassword, LapizIcon } from "../../../../../public/icons/Icons";
import { Logout } from "../../../../Components/Logout";

export function UserInfo(): JSX.Element {
    const [curriculum, setCurriculum] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const storedCurriculum = localStorage.getItem("curriculum");
        if (storedCurriculum) {
            setCurriculum(storedCurriculum);
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

    return (
        <main>
            <header className="h-[11.7rem] bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] w-[100%] relative bottom-5 rounded-br-[4rem] text-white shadow-sm shadow-[#000]">
                <Link to={"/dashboard"}>
                    <section className="flex flex-row mt-5 h-[3rem] items-center pt-5 ">
                        <ArrowWhiteIcon width={30} height={30} />
                        <h4 className="ml-10 font-inter font-bold text-[18px] text-center">Perfil de doctor</h4>
                    </section>
                </Link>
                <section>
                    <div className="w-[14.5rem] h-[5.5rem] ml-6 mt-5 rounded-full flex flex-row items-center content-center justify-between">
                        <img src="IMG_MEDICO.png" className='ml-2' alt="" width={56} height={58} />
                        <div className='mr-1'>
                            <h1 className="text-[18px] font-inter font-bold">Dr. Franco Ortega</h1>
                            <p className="font-inter">Médico Internista</p>
                        </div>
                    </div>
                </section>
            </header>
            <section className="flex flex-row justify-center absolute top-[10.5rem] left-12">
                <div className="bg-white border-2 border-solid border-[#3D4DA5] rounded-xl py-1 mr-1 ml-2 px-[10px]">
                    <p className="text-[14px] text-[#3D4DA5]">Medicina Interna</p>
                </div>
                <div className="bg-white border-2 border-solid border-[#3D4DA5] rounded-xl py-1 mr-1 ml-2 px-[10px]">
                    <p className="text-[14px] text-[#3D4DA5]">Medicina General</p>
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
                        <p className="font-inter text-[15px]">{curriculum}</p>
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
                    <input type="text" placeholder="drortegaramirez@gmail.com" className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[95%]" />
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
        </main>
    );
}
