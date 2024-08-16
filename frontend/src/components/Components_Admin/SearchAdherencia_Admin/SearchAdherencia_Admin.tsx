import { useEffect, useState } from "react";
import { ContentFinanciers, ContentMedicines, ContentPathologies, FilterAdhrenceGlobal } from "../../../Interfaces/interfaces";
import { Field, Form, Formik } from "formik";
import { fetchFinanciersData, fetchMedicines, fetchPathologiesData } from "../../../Context/AuthContext";
import { API_URL } from "../../../api/api";
import { toast } from "sonner";
import { AdherenceData, GraficProp, Medicamento } from "../AdherenciaGrafic_Admin/AdherenciaGrafic_Admin";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { LoaderIcon, SilderIcon } from "../../../../public/icons/Icons";

const buildUrl = (values: FilterAdhrenceGlobal) => {
	const params = new URLSearchParams();

	if (values.genero) params.append('genero', values.genero);

	if (values.patologiaId) params.append('idPatologia', values.patologiaId);

	if (values.idFinanciador) params.append('idFinanciador', values.idFinanciador);

	if (values.edad) {
		params.append('edad', values.edad);
		if (values.mayorEdad) params.append('mayorEdad', values.mayorEdad);
	}

	return `${API_URL}/adherencia/datos-globales-por-medicamento/${values.idMedicamento}?${params.toString()}`;
};
const COLORS = ['#FFB278', '#FF8819', '#FFE9D8'];


export function SearchAdherencia_Admin() {
	const [loading, setLoading] = useState(false);
	const [medicines, setMedicines] = useState<ContentMedicines>();
	const [pathologies, setPathologies] = useState<ContentPathologies>()
	const [financiers, setFinanciers] = useState<ContentFinanciers>()
	const [adherence, setAdherence] = useState<AdherenceData<Medicamento>>();
	const [isOpenFilter, setIsOpenFilter] = useState(true)
	const [grafic, setGrafic] = useState<GraficProp>({
		total: 0,
		data: []
	});

	const fetchPathologies = async () => {
		try {
			setPathologies(await fetchPathologiesData())
		} catch (error) {
			console.log(error)
		}
	}


	const fetchMedicinesData = async () => {
		setMedicines(await fetchMedicines());
	};
	const fetchFinaciers = async () => {
		setFinanciers(await fetchFinanciersData());
	};

	useEffect(() => {

		fetchMedicinesData()
		fetchPathologies()
		fetchFinaciers()
	}, []);

	const fetchData = async (values: FilterAdhrenceGlobal) => {
		const token = localStorage.getItem('TOKEN_KEY');

		if (!values.idMedicamento) {
			toast.warning("Es obligatorio ingresar un medicamento");
			return; // Sale de la función si no se cumple la validación
		}

		// Validar edad y mayorEdad
		if (values.edad && Number(values.edad) > 0 && values.mayorEdad === "") {
			toast.warning("Es obligatorio ingresar el filtro de edad");
			return; // Sale de la función si no se cumple la validación
		}

		const url = buildUrl(values);

		try {
			setLoading(true);
			const res = await fetch(url, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			});

			if (!res.ok) {
				// Maneja el error dependiendo del estado HTTP
				const errorText = await res.text(); // Obtener el texto del error
				throw new Error(`Response status: ${res.status}. Message: ${errorText}`);
			}

			const data: AdherenceData<Medicamento> = await res.json();
			setAdherence(data);

			setGrafic({
				total: data.totalCompletado + data.totalNoCompletado + data.totalRetrasados,
				data: [
					{ name: "Completado", value: data.totalCompletado },
					{ name: "No Completado", value: data.totalNoCompletado },
					{ name: "Retrasados", value: data.totalRetrasados },
				]
			});
		} catch (error) {
			console.error("Error fetching data:", error);
			toast.error("Hubo un error al cargar los datos. Por favor, inténtelo de nuevo.");
		} finally {
			setLoading(false);
		}
	};


	return (
		<main className="w-[60%] max-md:w-full m-auto px-4 max-xl:w-[80%]">
			<section className="mt-5 flex justify-between items-center">
				<h2 className="font-inter font-bold mb-2 text-2xl ">Datos globales Adherencia</h2>
				<span className=" w-10 h-10 rounded-full flex justify-center hover:brightness-75 transition-all duration-300 items-center bg-gray-200 border-2  cursor-pointer"
					onClick={() => setIsOpenFilter(!isOpenFilter)}>
					<SilderIcon width={20} height={20} stroke="#111" classname="" />
				</span>
			</section>
			<section className="mt-10 ">
				<Formik
					initialValues={{
						patologiaId: "",  // ID de la patología seleccionada
						idMedicamento: "",  // ID del medicamento seleccionado
						genero: "",  // Género seleccionado
						idFinanciador: "",  // ID del financiador seleccionado
						edad: "",  // Edad seleccionada
						mayorEdad: "",  // Mayor de edad (true o false)
					}}
					onSubmit={(values) => {
						// Puedes manejar la lógica de envío del formulario si es necesario
						fetchData(values);
					}}>
					{({ values }) => {
						useEffect(() => {
							fetchData(values);
						}, [values]);
						return (
							<>
								{isOpenFilter && (<>
									<Form>
										<div className="flex flex-row w-full gap-x-5 justify-around items-center mt-10">
											<div className="flex flex-col w-full">
												<label htmlFor="idMedicamento" className="mb-2 font-inter font-bold">Medicamentos</label>
												<Field
													as="select"
													className="outline-none border-orange-500 shadow-custom-right border-1 w-full rounded-md py-4 p-1"
													defaultValue={""}
													name="idMedicamento"
													id="idMedicamento"
												>
													<option value={""}>
														Seleccionar...
													</option>
													{medicines &&
														medicines.content.map((medicine) => (
															<option value={medicine.idMedicamento} key={medicine.idMedicamento}>
																{medicine.nombre}
															</option>
														))}
												</Field>
											</div>
											<div className="flex flex-col w-full">
												<label htmlFor="patologiaId" className="mb-2 font-inter font-bold">Patologías</label>
												<Field
													as="select"
													className="outline-none border-orange-500 shadow-custom-right border-1 rounded-md py-4 p-1"
													defaultValue={""}
													name="patologiaId"
													id="patologiaId"
												>
													<option value={""}>
														Seleccionar...
													</option>
													{pathologies &&
														pathologies.content.map((pathology) => (
															<option value={pathology.idPatologia} key={pathology.idPatologia}>
																{pathology.nombre}
															</option>
														))}
												</Field>
											</div>
										</div>

										<div className="flex flex-row w-full gap-x-5 justify-around items-center mt-10">
											<div className="flex flex-col w-full">
												<label htmlFor="genero" className="mb-2 font-inter font-bold">Género</label>
												<Field
													as="select"
													name="genero"
													id="genero"
													className="w-full h-14 p-2 border border-violet-color rounded-lg mt-1"
												>
													<option value="" label="Selecciona el género" />
													<option value="0" label="Masculino" />
													<option value="1" label="Femenino" />
												</Field>
											</div>
											<div className="flex flex-col w-full">
												<label htmlFor="idFinanciador" className="mb-2 font-inter font-bold">Financiadores</label>
												<Field
													as="select"
													className="outline-none border-orange-500 shadow-custom-right border-1 w-full rounded-md py-4 p-1"
													defaultValue={""}
													name="idFinanciador"
													id="idFinanciador"
												>
													<option value={""}>
														Seleccionar...
													</option>
													{financiers &&
														financiers.content.map((financier) => (
															<option value={financier.idFinanciador} key={financier.idFinanciador}>
																{financier.nombre}
															</option>
														))}
												</Field>
											</div>
										</div>

										<div className="flex flex-row w-full gap-x-5 justify-around items-center mt-5">
											<div className="flex flex-col w-full">
												<label htmlFor="edad" className="mb-2 font-inter font-bold">Edad</label>
												<Field
													name="edad"
													id="edad"
													className="shadow-custom-right py-4  px-2 rounded-lg border-orange-500 border-1"
													placeholder="Ingresar edad"
												>

												</Field>
											</div>

											<div className="flex flex-col w-full">
												<label htmlFor="mayorEdad" className="mb-2 font-inter font-bold">Filtro de edad</label>
												<Field
													as="select"
													name="mayorEdad"
													id="mayorEdad"
													className="shadow-custom-right py-4 rounded-lg border-orange-500 border-1"
												>
													<option value="" label="Seleccionar" />
													<option value="true" label="Mayor" />
													<option value="false" label="Menor" />
												</Field>
											</div>
										</div>
									</Form>
								</>)}
							</>
						)
					}
					}
				</Formik>
			</section>
			<section className=" text-center my-10 ">
				{loading ?
					(<div className=" min-h-[50vh]">
						<div className="flex justify-center items-center">
							<span className=" animate-spin">
								<LoaderIcon width={30} height={30} stroke="#111"></LoaderIcon>
							</span>
							<p className=" text-xl">Cargando...</p>
						</div>
					</div>) : (<>
						{adherence && (<>
							<h1 className=" text-2xl font-semibold flex flex-col">Adherencia de la medicación <span>(Estadísticas generales de pacientes)</span></h1>
							<div className="my-4 flex flex-col gap-6">
								<div className="flex justify-between items-center">
									<div className=" text-center flex flex-col justify-center items-center">
										<p className=" font-medium text-lg">Medicamento</p>
										<li className=" list-disc">{adherence.medicamento.nombre}</li>
									</div>
									<div className=" text-center flex flex-col justify-center items-center">
										<p className=" font-medium text-lg">Promedio:</p>
										<li>{adherence.totalCompletado != 0 ? Math.round(adherence.totalCompletado * 100 / adherence.totalHorarios) : "0"}% de completados</li>
									</div>
								</div>
								<div className="flex text-left flex-col ">
									<p className=" font-medium text-lg">Descripción medicamento</p>
									<li>{adherence.medicamento.descripcion}</li>
								</div>
							</div>
							<div className=" flex justify-centeri justify-around bg-secondary-brand-dark p-2 rounded-md text-light-color">
								<h1 className=" gap-2 text-4xl flex flex-col justify-center items-center">
									{adherence?.totalCompletado}
									<span className=" text-medium font-semibold">Completados</span>{" "}
								</h1>
								<h1 className=" gap-2 text-4xl flex flex-col justify-center items-center">
									{adherence?.totalNoCompletado}
									<span className=" text-medium font-semibold">No Compleados</span>{" "}
								</h1>
								<h1 className=" gap-2 text-4xl flex flex-col justify-center items-center">
									{adherence?.totalRetrasados}
									<span className=" text-medium font-semibold">Atrasados</span>{" "}
								</h1>
							</div>
							<ResponsiveContainer width="100%" height={300} className={""}>
								<PieChart>
									<Pie
										dataKey="value"
										isAnimationActive={false}
										data={grafic.data}
										cx="50%"
										cy="50%"
										outerRadius={80}
										fill="#8884d8"
										label
									>
										{grafic.data.map((_entry, index) => (
											<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
										))}
									</Pie>
									<Tooltip />
								</PieChart>
							</ResponsiveContainer>
						</>)
						}
					</>)
				}
			</section>

		</main>
	);
}
