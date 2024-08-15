import { InstitucionIcon, SearchIcon_Admin, SilderIcon } from "../../../../public/icons/Icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState, useMemo } from "react";
import { PagedResponse, Institution } from "../../../Interfaces/interfaces";
import SkeletonLoader from "../Skeletor_Admin/Skeletor_Admin";
import { API_URL } from "../../../api/api";
import { toast } from "sonner";

interface FormValues {
    nombre: string;
    direccion: string;
    emailContacto: string;
}

const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre de la institución es obligatorio'),
    direccion: Yup.string().required('La dirección es obligatoria'),
    emailContacto: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio')
});

interface SearchParams {
    size: number;
}

const PAGE_SIZE = 30;

export function Institucion_Admin() {
    const [info, setInfo] = useState<PagedResponse<Institution> | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    //? Fetchs
    const RegistrarInstitucion_Admin = async (values: { nombre: string; direccion: string; emailContacto: string }) => {
        const token = localStorage.getItem("TOKEN_KEY");

        if (!token) {
            toast.error("Token de autenticación no encontrado");
            return;
        }

        try {
            const res = await fetch(`${API_URL}/institucion-de-salud/crear-institucion-de-salud`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values),
            });


            const contentType = res.headers.get("Content-Type");
            let responseData;

            if (contentType && contentType.includes("application/json")) {
                responseData = await res.json();
            } else {
                responseData = await res.text();
            }

            if (res.ok) {
                
                toast.success("La institución fue creada correctamente");
                return responseData;
            } else {
                
                throw new Error("No se pudo crear la institución: " + responseData);
            }
        } catch (error) {
            
            toast.error("Error al crear la institución");
        }
    };

    const Searchactiveinstitution_Admin = async ({ size }: SearchParams): Promise<PagedResponse<Institution> | undefined> => {
        const token = localStorage.getItem("TOKEN_KEY");

        if (!token) {
            toast.error("Token de autenticación no encontrado");
            return undefined;
        }

        try {
            const res = await fetch(
                `${API_URL}/institucion-de-salud/buscar-instituciones-de-salud-activas?page=1&size=${size}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!res.ok) {
                throw new Error("Failed to fetch institutions");
            }

            const data: PagedResponse<Institution> = await res.json();
            return data;
        } catch (err) {
            toast.error("Error al cargar las instituciones activas");
            return undefined;
        }
    };

    //? Manejo de Informacion
    const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
        const data = {
            nombre: values.nombre,
            direccion: values.direccion,
            emailContacto: values.emailContacto
        };

        try {
            const newInstitution = await RegistrarInstitucion_Admin(data);
            if (newInstitution && info) {
                setInfo({
                    ...info,
                    content: [newInstitution, ...info.content]
                });

                resetForm();
            }
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Searchactiveinstitution_Admin({ size: PAGE_SIZE });
                setInfo(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredInstitutions = useMemo(() => {
        if (!info || !info.content) return []; // Asegúrate de que info y info.content existan

        return info.content.filter(institution =>
            institution.nombre && institution.nombre.toLowerCase().includes(searchTerm) // Asegúrate de que institution.nombre esté definido
        );
    }, [info, searchTerm]);

    return (
        <main className="xl:flex xl:flex-col xl:items-center xl:justify-center">
            <section className="xl:w-[100%]">
                <h2 className="font-inter font-bold text-xl mt-2 mb-2 ml-2">Búsqueda</h2>
                <div className="flex flex-row items-center justify-between shadow-custom-right py-3 rounded-lg border-orange-500 border-1">
                    <input
                        type="text"
                        placeholder="Búsqueda por nombre"
                        className="outline-none pl-2 py-1 font-inter"
                        onChange={handleSearchChange}
                        aria-label="Buscar institución"
                    />
                    <div className="flex flex-row gap-x-3 mr-2">
                        <SearchIcon_Admin classname="" width={20} height={20} stroke="#767676" />
                        <SilderIcon width={20} height={20} stroke="#767676" />
                    </div>
                </div>
                <Formik
                    initialValues={{ nombre: '', direccion: '', emailContacto: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="mt-10 ml-2">
                            <h2 className="font-inter font-bold text-xl">Añadir nueva</h2>
                            <div className="mt-1">
                                <h2 className="font-inter">Nombre de la institución</h2>
                                <Field
                                    type="text"
                                    name="nombre"
                                    placeholder="Ej: Hospital Angeles"
                                    className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                                />
                                <ErrorMessage name="nombre" component="div" className="text-red-600 mt-1" />
                            </div>
                            <div className="mt-5">
                                <h2 className="font-inter text-black">Dirección</h2>
                                <Field
                                    type="text"
                                    name="direccion"
                                    placeholder="Ej: Calle 123, 456, Rosario"
                                    className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                                />
                                <ErrorMessage name="direccion" component="div" className="text-red-600 mt-1" />
                            </div>
                            <div className="mt-5">
                                <h2 className="font-inter">Correo</h2>
                                <Field
                                    type="email"
                                    name="emailContacto"
                                    placeholder="Ej: hospitalangeles@gmail.com"
                                    className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                                />
                                <ErrorMessage name="emailContacto" component="div" className="text-red-600 mt-1" />
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
                    filteredInstitutions && filteredInstitutions.length > 0 ? (
                        <>
                            <h2 className="font-inter font-bold text-xl ml-2 mb-5">Listado</h2>
                            <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">
                                {filteredInstitutions.slice(0, 4).map((institution, index) => (
                                    <div key={index} className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2">
                                        <InstitucionIcon width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                                        <div className="ml-2">
                                            <h2 className="font-inter text-lg font-bold">{institution.nombre}</h2>
                                            <p className="font-inter">Ver Detalles</p>
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </>
                    ) : (
                        <div className="font-inter text-lg text-gray-600 ml-2">No hay instituciones disponibles.</div>
                    )
                )}

                <div className="mt-3 mb-5 flex justify-end w-full">
                    <button className="bg-orange-600 px-7 py-2 rounded-lg text-white font-inter">
                        Ver más
                    </button>
                </div>
            </section>
        </main>
    );
}
