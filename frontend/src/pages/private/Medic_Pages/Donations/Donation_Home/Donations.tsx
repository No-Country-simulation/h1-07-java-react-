import { useEffect, useState } from "react";
// import { AsideMenu } from "../../../../../components/AsideMenu";
// import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { API_URL } from "../../../../../api/api";
import { ContentDonations } from "../../../../../Interfaces/interfaces";
import { initialValuesFilter } from "../../../../../utils/data/data";
import { LoaderIcon, SilderIcon } from "../../../../../../public/icons/Icons";
import { Donors } from "./Donors/Donors";
// import { AsideMenu } from "../../../../../components/AsideMenu";

export interface Donation {
  textoBusqueda: string
  edad: string
  peso: string
  altura: string
  generoOrdinal: "0" | "1" | "2" | ""
  factorSanguineoOrdinal: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "",
  edadFiltro: "mayor" | "menor" | "igual" | ""
  pesoFiltro: "mayor" | "menor" | "igual" | ""
  alturaFiltro: "mayor" | "menor" | "igual" | ""
}


const validationSchema = Yup.object({
  textoBusqueda: Yup.string(),
  edad: Yup.number()
    .min(0, "Edad no puede ser negativa")
    .max(99, "Edad no puede ser mayor de 99"),
  peso: Yup.number()
    .min(0, "Peso no puede ser negativo"),
  altura: Yup.number()
    .min(0, "Altura no puede ser negativa "),
});




export default function Donations() {
  const [donors, setDonors] = useState<ContentDonations>();
  const [isOpenFilter, setIsOpenFilter] = useState(true)
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const buildUrl = (values: Donation) => {
    const params = new URLSearchParams();

    console.log(setTotalPages)

    if (values.textoBusqueda) params.append('textoBusqueda', values.textoBusqueda);
    if (values.generoOrdinal) params.append('generoOrdinal', values.generoOrdinal);
    if (values.factorSanguineoOrdinal) params.append('factorSanguineoOrdinal', values.factorSanguineoOrdinal);
    if (values.edad) {
      params.append('edad', values.edad);
      if (values.edadFiltro) params.append('edadFiltro', values.edadFiltro);
    }
    if (values.peso) {
      params.append('peso', values.peso);
      if (values.pesoFiltro) params.append('pesoFiltro', values.pesoFiltro);
    }
    if (values.altura) {
      params.append('altura', values.altura);
      if (values.alturaFiltro) params.append('alturaFiltro', values.alturaFiltro);
    }

    params.append('page', '0');
    params.append('size', '100');

    return `${API_URL}/donante/buscar-donantes?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const handleSubmitFilterDonation = async (values: any) => {
    const token = localStorage.getItem('TOKEN_KEY');
    const url = buildUrl(values);

    try {
      setLoading(true)
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json();
      setDonors(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="bg-gradient-to-r from-[#FFA4D7] to-[#C23584] min-h-screen w-screen flex justify-center items-center">
        <img src="JustinaLogo_2.png" className="pulse responsive-img"></img>
      </main>
    )
  }

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <main className="flex bg-gray-100 ">
      {/* <AsideMenu src="" toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
      <div className="w-full max-w-md xl:max-w-full min-h-screen font-inter bg-white rounded-lg shadow-lg max-md:m-auto">
        <Header_Donation link="/dashboard" src="JustinaLogo_2.png" />
        <section className="p-4 flex flex-col gap-8 xl:flex xl:flex-col xl:items-center xl:w-full ">
          <h1 className=" -mb-4 font-semibold flex justify-between items-center">Filtro de Busqueda: <span className=" w-10 h-10 rounded-full flex justify-center hover:brightness-75 transition-all duration-300 items-center bg-gray-200 border-2  cursor-pointer" onClick={() => setIsOpenFilter(!isOpenFilter)}><SilderIcon width={20} height={20} stroke="" classname=""/></span></h1>
          {isOpenFilter &&
            (<>
              <Formik
                initialValues={initialValuesFilter}
                validationSchema={validationSchema}
                onSubmit={handleSubmitFilterDonation}
              >
                <Form className=" xl:w-[60%] p-3 xl:grid-cols-1  rounded-r-xl rounded-md border-2 border-gray-500 shadow-xl overflow-hidden">
                  <div className="grid grid-cols-2 gap-4 xl:items-center xl:grid xl:gap-x-5 xl:grid-cols-2 ">
                    <div className="">
                      <label htmlFor="textoBusqueda" className="text-sm">Búsqueda</label>
                      <Field
                        type="text"
                        name="textoBusqueda"
                        placeholder="Texto de búsqueda"
                        className="px-3 w-[90%] xl:w-[100%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                      />
                      <ErrorMessage name="textoBusqueda" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="xl:flex xl:flex-col">
                      <label htmlFor="edad" className="text-sm">Edad</label>
                      <Field
                        type="number"
                        name="edad"
                        placeholder="Edad"
                        className="px-3 w-[90%] xl:w-[100%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                      />
                      <ErrorMessage name="edad" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="xl:flex xl:flex-col">
                      <label htmlFor="peso" className="text-sm">Peso</label>
                      <Field
                        type="number"
                        name="peso"
                        placeholder="Peso"
                        className="px-3 w-[90%] xl:w-[100%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                      />
                      <ErrorMessage name="peso" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <label htmlFor="altura" className="text-sm">Altura</label>
                      <Field
                        type="number"
                        name="altura"
                        placeholder="Altura"
                        className="input-class px-3 xl:w-[100%] w-[90%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                      />
                      <ErrorMessage name="altura" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex flex-col ">
                      <label htmlFor="generoOrdinal" className="text-sm">Género</label>
                      <Field as="select" name="generoOrdinal" className="input-class h-10 border-1 rounded-md border-gray-color">
                        <option value="">Seleccionar</option>
                        <option value="0">Masculino</option>
                        <option value="1">Femenino</option>
                        <option value="2">Otro</option>
                      </Field>
                      <ErrorMessage name="generoOrdinal" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="factorSanguineoOrdinal" className="text-sm">Grupo RH</label>
                      <Field as="select" name="factorSanguineoOrdinal" className="input-class h-10 border-1 rounded-md border-gray-color">
                        <option value="">Seleccionar</option>
                        <option value="0">O+</option>
                        <option value="1">O-</option>
                        <option value="2">A+</option>
                        <option value="3">A-</option>
                        <option value="4">B+</option>
                        <option value="5">B-</option>
                        <option value="6">AB+</option>
                        <option value="7">AB-</option>
                      </Field>
                      <ErrorMessage name="factorSanguineoOrdinal" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <label htmlFor="edadFiltro" className="text-sm">Filtro de Edad</label>
                      <Field as="select" name="edadFiltro" className="input-class h-10 border-1 rounded-md border-gray-color w-full">
                        <option value="">Seleccionar</option>
                        <option value="mayor">Mayor</option>
                        <option value="menor">Menor</option>
                        <option value="igual">Igual</option>
                      </Field>
                      <ErrorMessage name="edadFiltro" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <label htmlFor="pesoFiltro" className="text-sm">Filtro de Peso</label>
                      <Field as="select" name="pesoFiltro" className="input-class h-10 border-1 rounded-md border-gray-color w-full">
                        <option value="">Seleccionar</option>
                        <option value="mayor">Mayor</option>
                        <option value="menor">Menor</option>
                        <option value="igual">Igual</option>
                      </Field>
                      <ErrorMessage name="pesoFiltro" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <label htmlFor="alturaFiltro" className="text-sm">Filtro de Altura</label>
                      <Field as="select" name="alturaFiltro" className="input-class  h-10 border-1 rounded-md border-gray-color w-full">
                        <option value="">Seleccionar</option>
                        <option value="mayor">Mayor</option>
                        <option value="menor">Menor</option>
                        <option value="igual">Igual</option>
                      </Field>
                      <ErrorMessage name="alturaFiltro" component="div" className="text-red-500 text-sm" />
                    </div>
                  </div>

                  <div className="xl:flex xl:flex-col xl:items-center xl:mt-10 mt-6">
                    <button type="submit" disabled={loading} className="xl:w-[40%] h-10 gap-1 flex justify-center items-center text-center  col-span-2 w-full font-semibold rounded-md bg-secondary-brand-dark text-white">
                      <span className=" animate-spin">
                        {loading && (
                          <LoaderIcon width={30} height={30}></LoaderIcon>
                        )}
                      </span>
                      Buscar
                    </button>
                  </div>

                </Form>
              </Formik>
            </>)
          }
          <div className=" xl:w-full xl:flex xl:flex-col xl:items-center">
            <div className="xl:w-[60%] rounded-r-xl rounded-xl border-2 border-gray-500 shadow-xl overflow-hidden">
              <div className=" flex border-b-2 border-gray-500 rounded-lg mb-2 p-1 ">
                <button className="rounded-lg px-4 w-1/3 py-2 text-sm bg-[#5761C8] text-white border-solid border-[1px] border-gray-500">
                  Donantes
                </button>
              </div>
              <ol>
                {donors == undefined ?
                  <p className=" text-center py-4">Completa el formulario para buscar donantes</p> :
                  <>
                    {donors.content.length == 0 ?
                      (<p className=" p-4 text-center">No se encontraron donantes que coincidan con los criterios de búsqueda</p>) : (
                        donors.content.map((donor) => (
                          <Donors idDonante={donor.idDonante}
                            genero={donor.genero}
                            fechaNacimiento={donor.fechaNacimiento}
                            descripcion={donor.descripcion}>
                          </Donors>
                        ))
                      )

                    }
                  </>
                }
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
          </div>

        </section>

      </div>
    </main>
  );
}
