import { InstitucionIcon, SearchIcon, SilderIcon } from "../../../../public/icons/Icons";



export function Institucion_Admin() {

    
    



    return (
        <main>
            <h2 className="font-inter font-bold text-xl mt-2 mb-2 ml-2">Búsquedad</h2>
            <div className="flex flex-row items-center justify-between shadow-custom-right py-3  rounded-lg border-orange-500 border-1">
                <input type="text" placeholder="Busquedad por nombre" className=" outline-none pl-2 py-1 font-inter " />
                <div className="flex flex-row gap-x-4 ">
                    <SearchIcon width={20} height={20} classname="" stroke="" />
                    <SilderIcon width={20} height={20} stroke="#767676" classname="mr-2" />
                </div>
            </div>
            <form action="" className="mt-10 ml-2">
                <h2 className="font-inter font-bold text-xl">Añadir nueva</h2>
                <div className="mt-1">
                    <h2 className="font-inter ">Nombre de la institución</h2>
                    <input type="text" placeholder="Ej: Hospital Angeles" className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2   border-orange-500 border-1" />
                </div>
                <div className="mt-5">
                    <h2 className="font-inter text-black">Dirreción</h2>
                    <input type="text" placeholder="Ej: Calle 123, 456, Rosario" className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2   border-orange-500 border-1" />
                </div>
                <div className="mt-5">
                    <h2 className="font-inter ">Correo</h2>
                    <input type="email" placeholder="Ej: hospitalangeles@gmail.com" className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2   border-orange-500 border-1" />
                </div>
                <div className="flex flex-row justify-end w-full mt-5">
                    <button type="submit" className="py-2 px-7 text-white font-inter font-bold bg-orange-500 rounded-lg shadow-custom-right hover:bg-orange-400">
                        Añadir
                    </button>
                </div>
            </form>
            <h2 className="font-inter font-bold text-xl ml-2 mb-5">Listado</h2>
            <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">

                <div className="flex flex-row items-center pl-2 pt-1 border-b-3 border-orange-400 rounded-xl pb-4 mt-2">
                    <InstitucionIcon width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Hospital Angeles</h2>
                        <p className="font-inter">Ver Detalles</p>
                    </div>
                </div>

                <div className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2">
                    <InstitucionIcon width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Hospital Angeles</h2>
                        <p className="font-inter">Ver Detalles</p>
                    </div>
                </div>

                <div className="flex flex-row items-center pl-2 pt-2 border-orange-400 rounded-xl  mt-2">
                    <InstitucionIcon width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                    <div className="ml-2">
                        <h2 className="font-inter text-lg font-bold">Hospital Angeles</h2>
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