import { SearchIcon, SilderIcon } from "../../../../public/icons/Icons";



export function Instituciuon_Admin() {
    return (
        <main>
            <h2 className="font-inter font-bold text-xl mt-2 mb-2 ml-2">Búsquedad</h2>
            <div className="flex flex-row items-center justify-between py-1 w-[65%] rounded-lg border-orange-500 border-1">
                <input type="text" className=" outline-none pl-2 py-1 font-inter " />
                <div className="flex flex-row gap-x-4 ">
                    <SearchIcon width={20} height={20} classname="" stroke="" />
                    <SilderIcon width={20} height={20} stroke="#767676" classname="mr-2" />
                </div>
            </div>
            <form action="" className="mt-10 ml-2">
                <h2 className="font-inter font-bold text-xl">Añadir nueva</h2>
                <div className="mt-1">
                    <h2 className="font-inter ">Nombre de la institución</h2>
                    <input type="text" className="shadow-custom-right py-2 w-[65%] rounded-lg mt-2   border-orange-500 border-1" />
                </div>
            </form>
        </main>
    )
}