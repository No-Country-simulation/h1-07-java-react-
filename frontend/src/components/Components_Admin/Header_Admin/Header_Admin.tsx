import { Link } from "react-router-dom";
import { MenuHambuerguesaAdmin, UserIconTwoAdmin } from "../../../../public/icons/Icons";


interface Type {
    toggleSidebar: () => void;

}


export function Header_Admin({ toggleSidebar }: Type) {
    return (
        <header className="flex shadow-2xl flex-col justify-between h-[11.9rem] mb-4 relative rounded-ee-[3rem] bg-gradient-to-r from-[#FFB278] to-[#FBEB5C] || xl:rounded-es-[3rem] xl:w-full xl:max-w-full xl:items-center ">
            <div className="flex flex-col justify-center items-baseline h-full ||  xl:items-center xl:h-28 xl:justify-center xl:w-[70%]">
                <div className="flex flex-row mt-3 w-full || xl:w-[90%] xl:bg-green-500 xl:h-0">
                    <Link to={"/user_admin"}>
                        <div className="ml-1 xl:m-0">
                            <UserIconTwoAdmin width={50} height={50} stroke="#FF6600" classname="" />
                        </div>
                    </Link>
                    <div className="h-full flex flex-col items-center w-[70%] || xl:w-full  ">
                        <h3 className="text-3xl w-[50%] text-center mb-2 ml-2 font-inter font-bold ||  xl:m-0 xl:w-[100%] xl:ml-10">
                            Buenos días
                        </h3>
                        <p className="font-inter ml-2 xl:ml-8 font-bold text-center w-[50%]  xl:w-[50%] text-lg  xl:p-0">
                            Modalidad Administrador
                        </p>

                    </div>
                    <div className=" mr-2 xl:m-0">
                        <button onClick={toggleSidebar}>
                            <MenuHambuerguesaAdmin width={40} height={40} stroke="#000" classname="" />
                        </button>
                    </div>
                </div>



            </div>
        </header>
    )
}