import { useState, useEffect } from "react";
import { Header_Admin } from "../Header_Admin/Header_Admin";
import { Aside_Admin } from "../Aside_Admin/Aside_Admin";
import { API_URL } from "../../../api/api";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Tooltip, Spinner } from "@nextui-org/react";
import { SkeletonLoaderAdherencia_admin } from "../Skeletor_Admin/Skeletor_Admin";

export interface Medicamento {
    idMedicamento: number;
    nombre: string;
    descripcion: string;
}

export interface AdherenceData<T> {
    medicamento: T;
    totalCompletado: number;
    totalNoCompletado: number;
    totalRetrasados: number;
    totalHorarios: number;
}

export interface GraficProp {
    total: number;
    data: ValuesGraphic[];
}

interface ValuesGraphic {
    name: string;
    value: number;
}

const COLORS = ['#F00', '#FF8819', '#000000'];

export function AdherenciaGrafica_Admin() {
    const [info, setInfo] = useState<AdherenceData<Medicamento>>();
    const [grafic_info, setGrafic_Info] = useState<GraficProp>({
        total: 0,
        data: []
    });

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const token = localStorage.getItem("TOKEN_KEY");

        try {
            const idmedicamento = 12;
            const response = await fetch(`${API_URL}/adherencia/datos-globales-por-medicamento/${idmedicamento}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setInfo(data);


            setGrafic_Info({
                total: data.totalCompletado + data.totalNoCompletado + data.totalRetrasados,
                data: [
                    { name: "Completado", value: data.totalCompletado },
                    { name: "No Completado", value: data.totalNoCompletado },
                    { name: "Retrasados", value: data.totalRetrasados },
                ]
            });
           

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className="flex flex-col min-h-screen bg-gray-100">
            <Aside_Admin src="" isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Header_Admin toggleSidebar={toggleSidebar} />
            <div className="w-full max-w-md xl:max-w-full min-h-screen pb-4 bg-white rounded-lg font-inter mt-5">
                <section className="px-6 h-[120vh] w-[50%] max-lg:w-full m-auto">
                    <div className="flex flex-col">
                        {loading ? (
                            <SkeletonLoaderAdherencia_admin />
                        ) : (
                            <>
                                <h2 className="font-inter font-bold text-center">Adherencia a la medicación</h2>
                                <h3 className="font-inter font-semibold text-center">(Estadísticas generales de pacientes)</h3>

                                <div className="flex flex-row mt-10 gap-x-10">
                                    <div className="flex flex-col">
                                        <h4 className="font-inter font-bold">Medicamentos</h4>
                                        <ol className="list-disc list-inside ml-2 mt-1 font-inter">
                                            <li className="list-item">Donepezilo 50 mg</li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="font-inter font-bold">Promedio</h4>
                                        <ol className="list-disc list-inside ml-1 mt-1 font-inter">
                                            <li className="list-item">70% de toma total</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h4 className="font-inter font-bold">Muestra</h4>
                                    <ol className="list-disc list-inside ml-2 mt-1 font-inter">
                                        <li>Mujeres mayores a 65 años con enfermedad de Alzheimer.</li>
                                    </ol>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex flex-row mt-10 bg-orange-500 py-7 px-2 text-white font-inter gap-x-5 justify-around w-full">
                        <h5 className="p-0">Registrados</h5>
                        <h5 className="p-0">No Registrados</h5>
                        <h5 className="p-0">Atrasados</h5>
                    </div>

                    <div className="flex flex-row mt-5 font-inter gap-x-5 justify-around w-full">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <Spinner size="lg" />
                            </div>
                        ) : (
                            <>
                                <h5 className="p-0 text-black">{info?.totalCompletado}</h5>
                                <h5 className="p-0">{info?.totalNoCompletado}</h5>
                                <h5 className="p-0">{info?.totalRetrasados}</h5>
                            </>
                        )}
                    </div>
                    <div style={{ width: "100%", height: 600 }} className="mt-1">
                        {loading ? (
                            <div className="flex justify-center items-center w-full h-full">
                                <Spinner size="lg" />
                            </div>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart width={800} height={700}>
                                    <Pie
                                        dataKey="value"
                                        isAnimationActive={false}
                                        data={grafic_info?.data}
                                        cx="50%"
                                        cy="30%"
                                        outerRadius={80}
                                        fill="#000"
                                        label
                                    >
                                        {grafic_info.data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} className={`${entry}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
