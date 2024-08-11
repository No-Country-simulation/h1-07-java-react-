import { IconPatalogia_Admin, Medicament_admin, SearchIcon, SilderIcon } from "../../../../public/icons/Icons";




export function Patalogia_Admin(): JSX.Element {
    return (
        <main className="">
            <h2 className="font-inter font-bold text-xl mt-2 ml-2 mb-2">Búsquedad</h2>
            <div className="flex flex-row items-center justify-between shadow-custom-right py-3  rounded-lg border-orange-500 border-1">
                <input type="text" placeholder="Busquedad por nombre" className=" outline-none pl-2 py-1 font-inter " />
                <div className="flex flex-row gap-x-4 ">
                    <SearchIcon width={20} height={20} classname="" stroke="" />
                    <SilderIcon width={20} height={20} stroke="#767676" classname="mr-2" />
                </div>
            </div>
            <form action="" className="mt-10 ml-2">
                <h2 className="font-inter font-bold text-xl mb-2">Añadir nuevo</h2>
                <div className="">
                    <h2 className="font-inter ">Nombre de la patalogía</h2>
                    <input type="text" placeholder="Ej: Whippie" className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2   border-orange-500 border-1" />
                </div>
                <div className="mt-5">
                    <h2 className="font-inter text-black">Descripción</h2>
                    <input type="text" placeholder="Ej: Enfermedad Inflamatoria intestinal" className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2   border-orange-500 border-1" />
                </div>
                <div className="flex flex-row justify-end w-full mt-5">
                    <button type="submit" className="py-2 px-7 text-white font-inter font-bold bg-orange-500 rounded-lg shadow-custom-right hover:bg-orange-400">
                        Añadir
                    </button>
                </div>
            </form>
            <h2 className="font-inter ml-2 font-bold text-lg mb-4">Listado</h2>
            <section className="ml-2 mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">

                <div className="flex flex-row items-center pl-2 pt-1 border-b-3 border-orange-400 rounded-xl pb-4 mt-2">
                    <IconPatalogia_Admin width={60} height={60} stroke="#fff" classname="bg-orange-600 p-2 border-1 border-white border-solid " />
                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Acosta</h2>
                        <p className="font-inter">Ver Detalles</p>
                    </div>
                </div>

                <div className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2">
                    <IconPatalogia_Admin width={60} height={60} stroke="#fff" classname="bg-orange-600 p-2 border-1 border-white border-solid " />

                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Beauvais</h2>
                        <p className="font-inter">Ver Detalles</p>
                    </div>
                </div>

                <div className="flex flex-row items-center pl-2 pt-2 border-b-3 pb-3 border-orange-400 rounded-xl  mt-2">
                    <IconPatalogia_Admin width={60} height={60} stroke="#fff" classname="bg-orange-600 p-2 border-1 border-white border-solid " />

                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Crohn</h2>
                        <p className="font-inter">Ver Detalles</p>
                    </div>
                </div>
                <div className="flex flex-row items-center pl-2 pt-2 border-orange-400 rounded-xl  mt-2">
                    <IconPatalogia_Admin width={60} height={60} stroke="#fff" classname="bg-orange-600 p-2 border-1 border-white border-solid " />

                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Kähler</h2>
                        <p className="font-inter">Ver Detalles</p>
                    </div>
                </div>
            </section>
            <div className="mt-3 mb-5 flex justify-end w-full">
                <button className="bg-orange-600 px-7 py-2 rounded-lg text-white font-inter">
                    Ver más
                </button>
            </div>
        </main>
    )
}