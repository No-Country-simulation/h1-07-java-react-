import { ErrorMessage, Field, Form, Formik } from "formik";
import { IconFinaciadores_Admin,  SearchIcon_Admin, SilderIcon } from "../../../../public/icons/Icons";
import * as Yup from 'yup';
import { CreateFinanzas_Admin, SearchFinanciador_Admin } from "../../../Context/AuthContext";
import { useEffect, useState } from "react";
import SkeletonLoader from "../Skeletor_Admin/Skeletor_Admin";
import { Financiador, PaginaFinanciador } from "../../../Interfaces/interfaces";

const validationSchema = Yup.object({
    nombre: Yup.string()
        .required('El nombre del financiador es obligatorio'),
    descripcion: Yup.string()
        .required('La descripción es obligatoria'),
});

export function Financiadores_Admin() {
    const [info, setInfo] = useState<PaginaFinanciador<Financiador> | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSubmit = async (values: any, { resetForm }: any) => {
        const data = {
            nombre: values.nombre,
            descripcion: values.descripcion,
        };

        resetForm();

        try {
            await CreateFinanzas_Admin(data);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SearchFinanciador_Admin();
                setInfo(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const filteredFinanciadores = info?.content.filter(financiador =>
        financiador.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main>
            <h2 className="font-inter font-bold text-xl mt-2 mb-2 ml-2">Búsqueda</h2>
            <div className="flex flex-row items-center justify-between shadow-custom-right py-3 rounded-lg border-orange-500 border-1">
                <input
                    type="text"
                    placeholder="Búsqueda por nombre"
                    className="outline-none pl-2 py-1 font-inter"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="flex flex-row gap-x-3 mr-2">
                    <SearchIcon_Admin width={20} height={20} stroke="#767676" classname="" />
                    <SilderIcon width={20} height={20} stroke="#767676" />
                </div>
            </div>
            <Formik
                initialValues={{ nombre: '', descripcion: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mt-10 ml-2">
                        <h2 className="font-inter font-bold text-xl">Añadir nuevo</h2>
                        <div className="mt-1">
                            <h2 className="font-inter">Nombre del Financiador</h2>
                            <Field
                                type="text"
                                name="nombre"
                                placeholder="Ej: Swift Medical"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="nombre" component="div" className="text-red-600 mt-1" />
                        </div>
                        <div className="mt-5">
                            <h2 className="font-inter text-black">Descripción</h2>
                            <Field
                                type="text"
                                name="descripcion"
                                placeholder="Ej: Financiador"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="descripcion" component="div" className="text-red-600 mt-1" />
                        </div>
                        <div className="flex flex-row justify-end w-full mt-5">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="py-2 px-7 text-white font-inter font-bold bg-orange-500 rounded-lg shadow-custom-right hover:bg-orange-400"
                            >
                                {isSubmitting ? 'Añadiendo...' : 'Añadir'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

            {loading ? (
                <SkeletonLoader />
            ) : (
                filteredFinanciadores && filteredFinanciadores.length > 0 ? (
                    <>
                        <h2 className="font-inter font-bold text-xl ml-2 mb-5">Listado</h2>
                        <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 border-b-0 py-0 px-0">
                            {filteredFinanciadores.slice(0, 4).map((financiador) => (
                                <div
                                    key={financiador.idFinanciador}
                                    className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2"
                                >
                                    <IconFinaciadores_Admin width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                                    <div className="ml-4 w-[75%]">
                                        <h2 className="font-inter text-lg font-bold">{financiador.nombre}</h2>
                                        <p className="font-inter">
                                            {financiador.descripcion}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                ) : (
                    <p className="font-inter text-lg text-gray-600 ml-2">No hay financiadores disponibles</p>
                )
            )}


            <div className="mt-3 mb-5 flex justify-end w-full">
                <button className="bg-orange-600 px-7 py-2 rounded-lg text-white font-inter">
                    Ver más
                </button>
            </div>
        </main>
    );
}
