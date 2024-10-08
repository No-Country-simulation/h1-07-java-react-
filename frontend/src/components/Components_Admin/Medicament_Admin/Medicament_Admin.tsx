import { Medicament_admin, SearchIcon_Admin, SilderIcon } from "../../../../public/icons/Icons";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CreateMedicament_Admin, SearchMedicamentActive_Admin } from "../../../Context/AuthContext";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Medicamento, PaginaMedicamentos } from "../../../Interfaces/interfaces";
import SkeletonLoader from "../Skeletor_Admin/Skeletor_Admin";



const validationSchema = Yup.object({
    nombre: Yup.string()
        .required('El nombre del medicamento es obligatorio'),
    descripcion: Yup.string()
        .required('La descripción es obligatoria')
});

export function Medicament_Admin() {
    const [mostrarLoader, setMostrarLoader] = useState<boolean>(false);
    const [info, setInfo] = useState<PaginaMedicamentos<Medicamento> | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState<string>('');

    console.log(mostrarLoader)

    const hadlerSubmit = async (values: any, { resetForm }: any) => {
        const data = {
            nombre: values.nombre,
            descripcion: values.descripcion,
        };

        resetForm();

        try {
            await CreateMedicament_Admin(data);
            toast.success("Agregado con éxito");
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            toast.error("Error al enviar los datos");
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setMostrarLoader(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SearchMedicamentActive_Admin();
                setInfo(data);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value.toLowerCase());
    };


    const filteredMedicaments = useMemo(() => {
        if (!info || !info.content) return [];

        return info.content.filter(institution =>
            institution.nombre && institution.nombre.toLowerCase().includes(searchTerm)
        );
    }, [info, searchTerm]);

    return (
        <main>
            <h2 className="font-inter font-bold text-xl mt-2 ml-2 mb-2">Búsqueda</h2>
            <div className="flex flex-row items-center justify-between shadow-custom-right py-3 rounded-lg border-orange-500 border-1">
                <input
                    type="text"
                    placeholder="Búsqueda por nombre"
                    className="outline-none pl-2 py-1 font-inter"
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
                {({ isSubmitting }) => (
                    <Form className="mt-10 ml-2">
                        <h2 className="font-inter font-bold text-xl mb-2">Añadir nuevo </h2>
                        <div>
                            <h2 className="font-inter">Nombre del medicamento</h2>
                            <Field
                                type="text"
                                name="nombre"
                                placeholder="Ej: Ibuprofeno"
                                className="outline-none pl-2 font-inter shadow-custom-right py-3 w-full rounded-lg mt-2 border-orange-500 border-1"
                            />
                            <ErrorMessage name="nombre" component="div" className="text-red-600 mt-1" />
                        </div>
                        <div className="mt-5">
                            <h2 className="font-inter text-black">Descripción</h2>
                            <Field
                                type="text"
                                name="descripcion"
                                placeholder="Ej: Comprimidos de 200mg"
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
                filteredMedicaments && filteredMedicaments.length > 0 ? (
                    <>
                        <h2 className="font-inter font-bold text-xl ml-2 mb-5">Listado</h2>
                        <section className="mb-2 w-full shadow-custom-right rounded-xl border-1 border-solid border-orange-600 py-2 px-1">
                            {filteredMedicaments.slice(0, 4).map((medicament) => (
                                <div key={medicament.idMedicamento} className="flex flex-row items-center pl-2 pt-2 border-b-3 border-orange-400 rounded-xl pb-4 mt-2">
                                    <Medicament_admin width={66} height={66} classname="rounded-lg bg-orange-600 p-2" stroke="#fff" />
                                    <div className="ml-2">
                                        <h2 className="font-inter text-lg font-bold">{medicament.nombre}</h2>
                                        <p className="font-inter">Ver Detalles</p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </>
                ) : (
                    <p className="font-inter text-lg text-gray-600 text-center mb-3 ml-2 mt-7">No hay medicamentos disponibles</p>
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
