import { Link } from "react-router-dom";
import { MenuHambuerguesaAdmin, UserIconTwoAdmin } from "../../../../public/icons/Icons";


interface Type {
    toggleSidebar: () => void;
    
}


export function Header_Admin({toggleSidebar} : Type) {
    return (
        <header className="flex shadow-2xl flex-col justify-between h-[11.9rem] mb-4 relative rounded-ee-[3rem] bg-gradient-to-r from-[#FFB278] to-[#FBEB5C] || xl:rounded-es-[3rem] xl:w-full xl:max-w-full  ">
            <div className="flex flex-col justify-between h-full || xl:items-center xl:justify-center xl:max-h-dvh">
                <div className="flex flex-row justify-around mt-3 w-full || xl:w-[90%] xl:bg-green-500 xl:h-0">
                    <Link to={"/user_admin"}>
                        <div className="">
                            <UserIconTwoAdmin width={50} height={50} stroke="#FF6600" classname="" />
                        </div>
                    </Link>
                    <h3 className="xl:hidden || text-center text-3xl font-inter font-bold text-black w-[30%] py-1 ">
                        Buenos días
                    </h3>
                    <div className="">
                        <button onClick={toggleSidebar}>
                            <MenuHambuerguesaAdmin width={40} height={40} stroke="#000" classname="" />
                        </button>
                    </div>
                </div>

                <div className="h-full justify-center flex flex-col items-center w-full  ||  xl:h-20 xl:items-start xl:w-[35%] ">
                    <h3 className="hidden || xl:flex xl:text-2xl xl:font-inter xl:font-bold  ">
                        Buenos días
                    </h3>
                    <p className="font-inter text-center xl:text-start font-bold w-[50] text-xl">
                        Modalidad
                    </p>
                    <p className="font-bold text-xl">Administrador</p>
                </div>

            </div>
        </header>
    )
}