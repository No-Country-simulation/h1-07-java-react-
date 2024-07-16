import { Link } from "react-router-dom";


export function Onboarding() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <img src="Imagen-1.png" alt="" className="w-[100vh] h-full relative" />
            </div>
            <div className="bg-[#F9F9F9] flex flex-col items-center pt-5 w-[100%] h-[45%] absolute top-[27rem] border rounded-t-[3rem] mb-2">
                <h1 className="text-center font-bold font-inter text-[22px] w-[80%] text-[#1A1A1A]">Comprometidos con la salud y bienestar de todos</h1>
                <p className="text-[#948ABC] text-center mt-3 w-[55%] text-[12px]">Conectamos médicos y pacientes para facilitar el acceso a la salud</p>
                <Link to={"/singup"}>
                    <button className="mt-7 mb-4 bg-[#E08733] p-1 rounded-[20px] text-white font-inter px-[70px]">
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
    )
}