import { Link } from "react-router-dom"
import { useState } from "react";
import { FlechaIconTwo } from "../../../public/icons/Icons";




export function Side_Menu() {

    const [isExpanded, setIsExpanded] = useState(true);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);

    };

    return (
        <aside className={`h-screen fixed top-0 bg-[#fff] text-[#000] font-mono ${isExpanded ? 'w-[325px]' : 'w-[80px]'} shadow-md shadow-black transition-width duration-300 ease-in-out`}>
            <nav className="flex flex-col w-full">
                <button onClick={toggleMenu} className="flex justify-end p-2  text-[#fff] rounded-md m-2 pr-3 w-full">
                    <FlechaIconTwo width={26} height={26} stroke="#000000" classname={""} />
                </button>
                <section className={`ml-1 mt-1 mb-[17.67px] ${isExpanded ? 'block' : 'hidden'}`}>
                    <p className='text-[18px] pb-3 pl-[10px] font-montserrat text-[#828282]'>
                        Configuraciones
                    </p>
                    <div className={`w-[80%] ml-3 rounded-[16px] ${isExpanded ? 'bg-[#D3CAFF] border border-solid border-[#7445C7]' : 'hover:bg-purple-100'}`}>
                        <Link className='flex items-center py-3 cursor-pointer' to='/profile'>
                            <span className='pl-[5px]'></span>
                            <h4 className='ml-3 text-[18px] font-bold font-montserrat'>
                                Perfil
                            </h4>
                        </Link>
                    </div>
                </section>

                <div className='flex flex-row justify-center items-center mt-[10px]'>
                    <button
                        className='flex flex-row justify-center p-1 bg-[#7445C7] rounded-md w-[290px] hover:bg-purple-600 transition duration-300 ease-in-out'
                    >
                        <p className='ml-2 text-[#fff] font-montserrat font-[700]'>Salir</p>
                    </button>
                </div>
            </nav>
        </aside>
    )
}
