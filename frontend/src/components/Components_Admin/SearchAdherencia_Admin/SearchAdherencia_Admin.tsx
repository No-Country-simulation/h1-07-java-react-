import { useEffect, useState } from "react";
import { AdherenciaMedicament_Admin } from "../../../Context/AuthContext";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

export function SearchAdherencia_Admin() {
    const { id } = useParams();
    const [info, setInfo] = useState(null); 
    const [loading, setLoading] = useState(true); 

    

    useEffect(() => {
        if (id) { 
            const fetchData = async () => {
                try {
                    const response = await AdherenciaMedicament_Admin(id);
                    setInfo(response);
                    setLoading(false); 
                } catch (error) {
                    toast.error("Error al recibir los datos");
                    setLoading(false); 
                }
            };

            fetchData();
        }
    }, [id]);

    

    return (
        <main className="w-[98%]">
            <section className="flex flex-row justify-center w-full items-center mt-5">
                <div className="border-1 border-orange-500 w-full py-2 ml-2 rounded-xl">
                    <input type="text" className="outline-none w-full pl-2" placeholder="Búsqueda de adherencia de medicamentos" />
                    {/* Icono para desplegar */}
                    {/* Icono de filtro */}
                </div>
            </section>

            <section className="mt-10 ml-2">
                <h2 className="font-inter font-bold mb-2">Patalogia</h2>
                <div className="w-full">
                    <select className="outline-none border-orange-500 shadow-custom-right border-1 w-full rounded-md py-4 p-1" value="Selecionar" name="Selecionar" aria-placeholder="Selecionar" id="">
                        <option value="">Selecionar</option>
                    </select>
                </div>

                <div className="flex flex-row w-full gap-x-5 justify-around items-center mt-10">
                    <div className="flex flex-col w-full">
                        <h2 className="mb-2 font-inter font-bold">Sexo</h2>
                        <select name="" id="" className="shadow-custom-right py-4 rounded-lg border-orange-500 border-1">
                            <option value="">Selecionar</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="mb-2 font-inter font-bold">Financiador</h2>
                        <select name="" id="" className="shadow-custom-right py-4 rounded-lg border-orange-500 border-1">
                            <option value="">Selecionar</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-row w-full gap-x-5 justify-around items-center mt-5">
                    <div className="flex flex-col w-full">
                        <h2 className="mb-2 font-inter font-bold">Edad</h2>
                        <select name="" id="" className="shadow-custom-right py-4 rounded-lg border-orange-500 border-1">
                            <option value="">Selecionar</option>
                        </select>
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="mb-2 font-inter font-bold">Filtro</h2>
                        <select name="" id="" className="shadow-custom-right py-4 rounded-lg border-orange-500 border-1">
                            <option value="">Selecionar</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <button className="w-[100%] py-2 font-bold rounded-xl bg-orange-600 text-white font-inter border-orange-500 border-1 mt-10">
                        Buscar
                    </button>
                </div>
            </section>
        </main>
    );
}
