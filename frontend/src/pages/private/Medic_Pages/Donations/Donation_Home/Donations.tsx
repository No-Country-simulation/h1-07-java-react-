import { useState } from "react";
// import { AsideMenu } from "../../../../../components/AsideMenu";
import { getAge } from "../../../../../utils/functions/functions";
// import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { API_URL } from "../../../../../api/api";
import { ContentDonations } from "../../../../../Interfaces/interfaces";

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

const initialValuesFilter: Donation = {
  textoBusqueda: "",
  edad: "",
  peso: "",
  altura: "",
  generoOrdinal: "",
  factorSanguineoOrdinal: "",
  edadFiltro: "",
  pesoFiltro: "",
  alturaFiltro: ""
}

const validationSchema = Yup.object({
  textoBusqueda: Yup.string(),
  edad: Yup.number()
    .min(0, "Edad no puede ser negativa")
    .max(99, "Edad no puede ser mayor de 99"),
  peso: Yup.number()
    .min(0, "Peso no puede ser negativo"),
  altura: Yup.number()
    .min(0, "Altura no puede ser negativa"),
});

export default function Donations() {
  const [donors, setDonors] = useState<ContentDonations>();
  const buildUrl = (values: Donation) => {
    const params = new URLSearchParams();

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

  const handleSubmitFilterDonation = async (values: any) => {
    const token = localStorage.getItem('TOKEN_KEY');
    console.log(values)
    const url = buildUrl(values);

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      setDonors(data)
      console.log(data)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <main className="flex bg-gray-100 md:flex md:justify-center">
      <div className="w-full max-w-md min-h-screen font-inter bg-white rounded-lg shadow-lg max-md:m-auto">
        {/* <AsideMenu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} /> */}
        <Header_Donation link="/dashboard" />
        <section className="p-4 flex flex-col gap-8">
          <h1 className=" -mb-4 font-semibold">Filtro de Busqueda:</h1>
          <Formik
            initialValues={initialValuesFilter}
            validationSchema={validationSchema}
            onSubmit={handleSubmitFilterDonation}
          >
            <Form className="p-3 grid grid-cols-2 gap-4 rounded-r-xl rounded-md border-2 border-gray-500 shadow-xl overflow-hidden">
              <div>
                <label htmlFor="textoBusqueda" className="text-sm">Búsqueda</label>
                <Field
                  type="text"
                  name="textoBusqueda"
                  placeholder="Texto de búsqueda"
                  className="px-3 w-[90%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                />
                <ErrorMessage name="textoBusqueda" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="edad" className="text-sm">Edad</label>
                <Field
                  type="number"
                  name="edad"
                  placeholder="Edad"
                  className="px-3 w-[90%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                />
                <ErrorMessage name="edad" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="peso" className="text-sm">Peso</label>
                <Field
                  type="number"
                  name="peso"
                  placeholder="Peso"
                  className="px-3 w-[90%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                />
                <ErrorMessage name="peso" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="altura" className="text-sm">Altura</label>
                <Field
                  type="number"
                  name="altura"
                  placeholder="Altura"
                  className="input-class px-3 w-[90%] rounded-md h-10 py-1 input-class outline-none border-1 border-solid border-black"
                />
                <ErrorMessage name="altura" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="flex flex-col">
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
              <button type="submit" className="h-10  col-span-2 w-full font-semibold rounded-md bg-secondary-brand-dark text-white">
                Buscar
              </button>
            </Form>
          </Formik>
          <div className="rounded-r-xl rounded-xl border-2 border-gray-500 shadow-xl overflow-hidden">
            <div className="flex border-b-2 border-gray-500 rounded-lg mb-2 p-1 ">
              <button className="rounded-lg px-4 w-1/3 py-2 text-sm bg-[#5761C8] text-white border-solid border-[1px] border-gray-500">
                Donantes
              </button>
            </div>
            <ol>
              {donors == undefined ?
                <p className=" text-center py-4">No hay donantes</p> :
                donors.content.map((donor, idx) => (
                  <li
                    key={idx}
                    onClick={() => console.log(donor.idMedico)}
                    className="flex hover:bg-gray-200 transition-all duration-300 cursor-pointer justify-between py-1 px-2 border-b-1 border-gray-500">
                    <div className="flex flex-row items-center w-full p-1">
                      <div className="flex flex-col ml-3 w-full">
                        <div className="flex flex-row justify-between">
                          <p className="font-semibold text-sm">
                            {donor.genero === 0 ? "Masculino" : donor.genero === 1 ? 'Femenino' : "Otro"} de{" "}
                            {getAge(donor.fechaNacimiento)} años
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm">
                          {donor.descripcion}
                        </p>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ol>
          </div>
        </section>

      </div>
    </main>
  );
}
