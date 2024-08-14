import { ErrorMessage, Field, Formik, Form } from "formik";
import { IconFarmaceutica_Admin, SearchIcon_Admin, SilderIcon } from "../../../../public/icons/Icons";
import * as Yup from 'yup';
import { CreateFarmeceutica_Admin, SearchFarmeceuty_Admin } from "../../../Context/AuthContext";
import { useEffect, useState } from "react";
import { Farmacia, PaginaFarmacia } from "../../../Interfaces/interfaces";
import SkeletonLoader from "../Skeletor_Admin/Skeletor_Admin";

const validationSchema = Yup.object({
    nombre: Yup.string()
        .required('El nombre de la institución es obligatorio'),
    direccion: Yup.string()
        .required('La dirección es obligatoria'),
});

export function Farmaceuticas_Admin() {
    const [info, setInfo] = useState<PaginaFarmacia<Farmacia> | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = async (values: any, { resetForm }: any) => {
        const data = {
            nombre: values.nombre,
            direccion: values.direccion,
        };

        resetForm();

        try {
            await CreateFarmeceutica_Admin(data);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SearchFarmeceuty_Admin();
                setInfo(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredFarmacias = info?.content.filter((farmacia) =>
        farmacia.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            <h2 className="font-inter font-bold text-xl mt-2 mb-2 ml-2">Búsqueda</h2>
            <div className="flex flex-row items-center justify-between shadow-custom-right py-3 rounded-lg border-orange-500 border-1">
                <input
                    type="text"
                    placeholder="Búsqueda por nombre"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="outline-none pl-2 py-1 font-inter"
                />
                <div className="flex flex-row gap-x-3 mr-2">
                        <SearchIcon_Admin width={20} height={20} stroke="#767676" classname="" />
                        <SilderIcon width={20} height={20} stroke="#767676" />
                </div>
            </div>
            <Formik
                initialValues={{ nombre: '', direccion: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mt-10 ml-2">
                        <h2 className="font-inter font-bold text-xl">Añadir nueva</h2>
                        <div className="mt-1">
                            <h2 className="font-inter">Nombre de la farmaceutica</h2>
                            <Field
                                type="text"
                                name="nombre"
                                placeholder="Ej: Farmacia San Isidro"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="nombre" component="div" className="text-red-600 mt-1" />
                        </div>
                        <div className="mt-5">
                            <h2 className="font-inter text-black">Dirección</h2>
                            <Field
                                type="text"
                                name="direccion"
                                placeholder="Ej: Buenos Aires, Argentina"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="direccion" component="div" className="text-red-600 mt-1" />
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
                filteredFarmacias && filteredFarmacias.length > 0 ? (
                    <>
                        <h2 className="font-inter font-bold text-xl ml-2 mb-5">Listado</h2>
                        <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">
                            {filteredFarmacias.slice(0, 4).map((farmacia) => (
                                <div
                                    key={farmacia.idFarmacia} // Cambia esto si el ID es diferente
                                    className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2"
                                >
                                    <IconFarmaceutica_Admin width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                                    <div className="ml-4 w-[75%]">
                                        <h2 className="font-inter text-lg font-bold">{farmacia.nombre}</h2>
                                        <p className="font-inter">
                                            {farmacia.dirrecion}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                ) : (
                    <p className="font-inter text-lg text-gray-600 ml-2">No hay farmacias disponibles</p>
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
