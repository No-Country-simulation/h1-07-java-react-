import { IconPatalogia_Admin, SearchIcon_Admin, SilderIcon } from "../../../../public/icons/Icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import { CreatePatology_Admin, SearchPatalogy_Admin } from "../../../Context/AuthContext";
import SkeletonLoader from "../Skeletor_Admin/Skeletor_Admin";
import { PaginaPatologias, Patologia } from "../../../Interfaces/interfaces";

const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    descripcion: Yup.string().required('La descripción es obligatoria'),
});

export function Patalogia_Admin(): JSX.Element {

    const [info, setInfo] = useState<PaginaPatologias<Patologia> | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el término de búsqueda

    const hadlerSubmit = async (values: any, { resetForm }: any) => {
        const data = {
            nombre: values.nombre,
            descripcion: values.descripcion,
        };

        resetForm();

        try {
            await CreatePatology_Admin(data);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SearchPatalogy_Admin();
                setInfo(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredPatologias = info?.content.filter(patologia =>
        patologia.nombre.toLowerCase().includes(searchTerm)
    );

    const MAX_DESCRIPTION_LENGTH = 39;

    const truncateText = (text: string | null | undefined, maxLength: number): string => {
        if (!text) {
            return '';
        }
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    return (
        <main>
            <h2 className="font-inter font-bold text-xl mt-2 ml-2 mb-2">Búsqueda</h2>
            <div className="flex flex-row items-center justify-between shadow-custom-right py-3 rounded-lg border-orange-500 border-1">
                <input
                    type="text"
                    placeholder="Búsqueda por nombre"
                    className="outline-none pl-2 py-1 font-inter"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                 <div className="flex flex-row gap-x-3 mr-2">
                        <SearchIcon_Admin width={20} height={20} stroke="#767676" classname="" />
                        <SilderIcon width={20} height={20} stroke="#767676" />
                    </div>
            </div>
            <Formik
                initialValues={{ nombre: '', descripcion: '' }}
                validationSchema={validationSchema}
                onSubmit={hadlerSubmit}
            >
                {() => (
                    <Form className="mt-10 ml-2">
                        <h2 className="font-inter font-bold text-xl mb-2">Añadir nuevo</h2>
                        <div>
                            <h2 className="font-inter">Nombre de la patalogía</h2>
                            <Field
                                type="text"
                                name="nombre"
                                placeholder="Ej: Whippie"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="nombre" component="div" className="absolute text-red-500" />
                        </div>
                        <div className="mt-7">
                            <h2 className="font-inter text-black">Descripción</h2>
                            <Field
                                type="text"
                                name="descripcion"
                                placeholder="Ej: Enfermedad Inflamatoria intestinal"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="descripcion" component="div" className="text-red-500 absolute" />
                        </div>
                        <div className="flex flex-row justify-end w-full mt-5">
                            <button
                                type="submit"
                                className="py-2 px-7 text-white font-inter font-bold bg-orange-500 rounded-lg shadow-custom-right hover:bg-orange-400"
                            >
                                Añadir
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>

            {loading ? (
                <SkeletonLoader />
            ) : (
                filteredPatologias && filteredPatologias.length > 0 ? (
                    <>
                        <h2 className="font-inter font-bold text-xl ml-2 mb-5">Listado</h2>
                        <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">
                            {filteredPatologias.slice(0, 4).map((patologia) => (
                                <div
                                    key={patologia.idPatologia}
                                    className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2"
                                >
                                    <IconPatalogia_Admin width={60} height={60} stroke="#fff" classname="bg-orange-600 p-2 border-1 border-white border-solid" />
                                    <div className="ml-4 w-[75%]">
                                        <h2 className="font-inter text-lg font-bold">{patologia.nombre}</h2>
                                        <p className="font-inter">
                                            {truncateText(patologia.descripcion, MAX_DESCRIPTION_LENGTH)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                ) : (
                    <p className="font-inter text-lg text-gray-600 ml-2">No hay patologías disponibles</p>
                )
            )}

            <div className="mt-3 mb-5 flex justify-end w-full">
                <button className="bg-orange-600 px-7 py-2 rounded-lg text-white font-inter">Ver más</button>
            </div>
        </main>
    );
}
