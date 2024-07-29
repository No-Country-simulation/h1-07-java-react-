import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Onboarding() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full ">
                <div className=' blur-sm'>
                    <img src="imagen-2.png" alt="" className="w-[100vh] h-[100vh] relative" />
                </div>
                <div className=" flex flex-col items-center pt-5 w-[100%] absolute top-[14rem] rounded-t-[3rem] mb-2">
                    <img src="JustinaIO_logo_page-02.png" alt="" />
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
        <div className="flex flex-col justify-between items-center min-h-screen bg-white">
            <img src="IMG_WEBP/Imagen-1.webp" alt="" className="w-screen h-auto mb-4" />
            <div className="absolute top-[30rem] bg-[#F9F9F9]  w-full flex flex-col items-center pt-5 border-t-2 rounded-t-[2.5rem] mt-auto ">
                <h1 className="text-center font-bold font-inter text-[20px] w-4/5 text-[#1A1A1A]">Comprometidos con la salud y bienestar de todos</h1>
                <p className="text-[#948ABC] font-inter text-center mt-3 w-3/5 text-[12px]">Conectamos médicos y pacientes para facilitar el acceso a la salud</p>
                <Link to={"/signup"}>
                    <button className="mt-6 mb-4 bg-[#E08733] py-2 px-10 rounded-full text-white font-inter">
                        Crear cuenta
                    </button>
                </Link>
                <p className="pb-1 text-[18px] text-primary-brand-dark font-bold font-inter">ó</p>
                <Link to={"/login"}>
                    <p className="text-primary-brand-dark font-bold font-inter">Iniciar sesión</p>
                </Link>
            </div>
        </div>
    );
}
