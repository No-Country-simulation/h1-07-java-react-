import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { initialValuesFilter } from '../../../../../../utils/data/data'
import { validationSchemaDonor } from '../../../../../../utils/validation/validation'

interface PropsDonosForm {
  handleSubmitFilterDonation: (values: any) => void
  // loading: boolean
}

export const FormDonors: React.FC<PropsDonosForm> = ({ handleSubmitFilterDonation }) => {
  return (
    <Formik
      initialValues={initialValuesFilter}
      validationSchema={validationSchemaDonor}
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
              {/* <option value="igual">Igual</option> */}
            </Field>
            <ErrorMessage name="edadFiltro" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="pesoFiltro" className="text-sm">Filtro de Peso</label>
            <Field as="select" name="pesoFiltro" className="input-class h-10 border-1 rounded-md border-gray-color w-full">
              <option value="">Seleccionar</option>
              <option value="mayor">Mayor</option>
              <option value="menor">Menor</option>
              {/* <option value="igual">Igual</option> */}
            </Field>
            <ErrorMessage name="pesoFiltro" component="div" className="text-red-500 text-sm" />
          </div>
          <div>
            <label htmlFor="alturaFiltro" className="text-sm">Filtro de Altura</label>
            <Field as="select" name="alturaFiltro" className="input-class  h-10 border-1 rounded-md border-gray-color w-full">
              <option value="">Seleccionar</option>
              <option value="mayor">Mayor</option>
              <option value="menor">Menor</option>
              {/* <option value="igual">Igual</option> */}
            </Field>
            <ErrorMessage name="alturaFiltro" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        <div className="xl:flex xl:flex-col xl:items-center xl:mt-10 mt-6">
          <button type="submit" className="xl:w-[40%] h-10 gap-1 flex justify-center items-center text-center  col-span-2 w-full font-semibold rounded-md bg-secondary-brand-dark text-white">
            {/* <span className=" animate-spin">
              {loading && (
                <LoaderIcon width={30} height={30}></LoaderIcon>
              )}
            </span> */}
            Buscar
          </button>
        </div>

      </Form>
    </Formik>
  )
}
