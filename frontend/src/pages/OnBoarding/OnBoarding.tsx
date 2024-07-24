import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Onboarding() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula la carga durante 3 segundos
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full ">
                <div className=' blur-sm'>
                    <img src="../../../public/imagen-2.png" alt="" className="w-[100vh] h-[100vh] relative" />
                </div>
                <div className=" flex flex-col items-center pt-5 w-[100%] absolute top-[14rem] rounded-t-[3rem] mb-2">
                    <img src="../../../public/JustinaIO_logo_page-02.png" alt="" />
                </div>
                <div className='absolute'>
                    <p className='font-inter text-white mt-56'>Salud al alcance de todos</p>
                </div>
                <div className='absolute bottom-20'>
                    <p className='font-inter text-white '>Versión 0.0.1</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-full ">
            <div>
                <img src="../../../public/IMG_WEBP/Imagen-1.webp" alt="" className="w-[100vh] h-full relative" />
            </div>
            <div className="bg-[#F9F9F9] flex flex-col items-center pt-5 w-[100%] h-[45%] absolute top-[27rem] border rounded-t-[3rem] mb-2">
                <h1 className="text-center font-bold font-inter text-[22px] w-[80%] text-[#1A1A1A]">Comprometidos con la salud y bienestar de todos</h1>
                <p className="text-[#948ABC] text-center mt-3 w-[55%] text-[12px]">Conectamos médicos y pacientes para facilitar el acceso a la salud</p>
                <Link to={"/signup"}>
                    <button className="mt-6 mb-4 bg-[#E08733] p-1 rounded-[20px] text-white font-inter px-[70px]">
                        Crear cuenta
                    </button>
                </Link>
                <p className="pb-3 text-[18px] text-primary-brand-dark font-bold font-inter">ó</p>
                <Link to={"/login"}>
                    <p className="text-primary-brand-dark font-bold font-inter">Iniciar sesión</p>
                </Link>
                <span className="bg-black p-[1px] mt-[15px] w-[150px]"></span>
            </div>
        </div>
    );
}
