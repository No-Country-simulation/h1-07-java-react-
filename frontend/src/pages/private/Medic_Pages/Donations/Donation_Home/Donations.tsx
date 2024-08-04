import { SearchIcon, SilderIcon } from "../../../../../../public/icons/Icons";
import { useEffect, useState } from "react";
import { getAge } from "../../../../../utils/functions/functions";
import { Button } from "@nextui-org/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Header_Donation } from "../../../../../Components/Header_Medic_Donation/Header_Donation";
import { fetchDonationConnect } from "../../../../../Context/AuthContext";
import { DonantesResponse } from "../../../../../Interfaces/interfaces";
import { Link } from "react-router-dom";

export interface Donors {
  altura: string;
  descripcion: string;
  peso: string;
  genero: number;
  factorSanguineo: number;
  fechaNacimiento: string;
  provincia: string;
  localidad: string;
  src: string;
}


const validationSchema = Yup.object({
  edad: Yup.number()
    .min(0, "Edad no puede ser negativa")
    .max(99, "Edad no puede ser mayor de 99")
    .required("Edad es requerida"),
  peso: Yup.number()
    .min(0, "Peso no puede ser negativo")
    .required("Peso es requerido"),
  altura: Yup.number()
    .min(0, "Altura no puede ser negativa")
    .required("Altura es requerida"),
  genero: Yup.string().required("Género es requerido"),
  rh: Yup.string().required("Grupo RH es requerido"),
});


const ITEMS_PER_PAGE = 5;


export default function Donations() {
  const [filters, setFilters] = useState(false);
  const [donation, setDonation] = useState<DonantesResponse | any>();
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fecthConnectDonation = async () => {
      try {
        const data = await fetchDonationConnect();
        console.log(data?.content)
        setTotalPages(Math.ceil((data?.totalElements || 0) / ITEMS_PER_PAGE));

        setDonation(data)
      } catch (error) { 
        console.error("Error al recibir los datos")
      }
    }

    fecthConnectDonation()
  }, [])



  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  return (
    <main className="flex bg-gray-100 md:flex md:justify-center">
      <div className="w-full max-w-md min-h-screen font-inter bg-white rounded-lg shadow-lg max-md:m-auto">
        {/* <AsideMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
        <Header_Donation link="/dashboard" src="./public/JustinaLogo_2.png" />
        <section className="p-4 flex flex-col gap-8">
          <div className="relative w-full h-12 flex justify-center items-center">
            <input
              type="text"
              placeholder="Búsqueda"
              className="w-full h-full border-violet-color rounded-md border-1 px-4"
            />
            <span className="right-12 absolute">
              <SearchIcon width={20} height={20} stroke="#000000" />
            </span>
            <span
              className="right-5 absolute cursor-pointer"
              onClick={() => setFilters(!filters)}
            >
              <SilderIcon width={20} height={20} stroke="" />
            </span>
          </div>
          {filters && (
            <Formik
              initialValues={{
                edad: "",
                peso: "",
                altura: "",
                genero: "",
                rh: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
             {({ handleSubmit }) => ( 
              <Form className="p-3 grid grid-cols-2 gap-4 rounded-r-xl rounded-md border-2 border-gray-500 shadow-xl overflow-hidden">
                <div className="">
                  <label htmlFor="genero" className="text-sm ">
                    Edad
                  </label>
                  <Field
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    className="px-3 w-[90%] rounded-md py-1 input-class outline-none border-1 border-solid border-black"
                  />
                  <ErrorMessage
                    name="edad"
                    component="div"
                    className="text-red-500 text-sm "
                  />
                </div>
                <div className="">
                  <label htmlFor="genero" className="text-sm ">
                    Peso
                  </label>
                  <Field
                    type="number"
                    name="peso"
                    placeholder="Peso"
                    className="px-3 input-class w-[90%] rounded-md py-1 input-class outline-none border-1 border-solid border-black"
                  />
                  <ErrorMessage
                    name="peso"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="genero" className="text-sm ">
                    Altura
                  </label>
                  <Field
                    type="number"
                    name="altura"
                    placeholder="Altura"
                    className="input-class px-3 input-class w-[90%] rounded-md py-1 input-class outline-none border-1 border-solid border-black"
                  />
                  <ErrorMessage
                    name="altura"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="genero" className="text-sm ">
                    Género
                  </label>
                  <Field as="select" name="genero" className="input-class">
                    <option value="" label="Seleccionar" />
                    <option value="Masculino" label="Masculino" />
                    <option value="Femenino" label="Femenino" />
                  </Field>
                  <ErrorMessage
                    name="genero"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="rh" className="text-sm">
                    Grupo RH
                  </label>
                  <Field as="select" name="rh" className="input-class">
                    <option value="" label="Seleccionar" />
                    
                  </Field>
                  <ErrorMessage
                    name="rh"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-10 w-full font-semibold bg-secondary-brand-dark text-white"
                >
                  Buscar
                </Button>
              </Form>
              )} 
            </Formik>
          )}
          <div className="rounded-r-xl rounded-xl border-2 border-gray-500 shadow-xl overflow-hidden">
            <div className="flex border-b-2 border-gray-500 rounded-lg mb-2 p-1">
              <button className="px-4 w-1/3 py-2 text-sm bg-[#5761C8] text-white rounded-[8px] border-solid border-[1px] border-gray-500">
                Donantes
              </button>
            </div>
            <ol>
              {donation?.content.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((donor: any, idx: number) => (
                <Link to={`/donationDetail/${donor.idMedico}`}>
                  <li
                    key={idx}
                    className="flex hover:bg-gray-200 transition-all duration-300 cursor-pointer justify-between py-1 px-2 border-b-1 border-gray-500"
                  >
                    <div className="flex flex-row items-center w-full p-1">
                      <img src={"IMG_MEDICO/IMG_MEDICO_2.webp"} alt="imagen_paciente" />
                      <div className="flex flex-col ml-3 w-full">
                        <div className="flex flex-row justify-between">
                          <p className="font-semibold text-sm">
                            {donor.genero === 0 ? "Masculino" : "Femenino"} de{" "}
                            {getAge(donor.fechaNacimiento)} años
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                          {donor.descripcion}
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ol>
            <div className="flex justify-between p-3">
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
              >
                Anterior
              </button>
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
              >
                Siguiente
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
