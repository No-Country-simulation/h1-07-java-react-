import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { crearDonante, fetchPatient } from "../../../../../Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { ContentPatient, Medic } from "../../../../../Interfaces/interfaces";

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre es requerido "),
  apellido: Yup.string().required("Apellido es requerido"),
  peso: Yup.number()
    .typeError("Peso debe ser un número")
    .required("Peso es requerido")
    .positive("Debe ser un número positivo")
    .integer("Debe ser un número entero")
    .max(999, "Peso no puede tener más de tres dígitos"),
  altura: Yup.number()
    .typeError("Altura debe ser un número")
    .required("Altura es requerida")
    .positive("Debe ser un número positivo")
    .integer("Debe ser un número entero")
    .max(999, "Altura no puede tener más de tres dígitos"),
  sexo: Yup.string().required("Sexo es requerido"),
  grupoRH: Yup.string().required("Grupo RH es requerido"),
  fechaNacimiento: Yup.date()
    .required("Fecha de nacimiento es requerida")
    .nullable(),
  // ubicacion: Yup.string().required("Ubicación es requerida"),
  // posibleDonacion: Yup.string().required("Donación requerida"),
  descripcion: Yup.string()
    .required("Descripción requerida")
    .min(5, "La descripción debe tener mas de 5 caracteres"),
  pacienteId: Yup.number()
    .required("Selecciona una paciente")
    .min(1, "Selecciona una paciente válido"),

});



export function Donation_Registre() {
  const [medicInfo, setMedicInfo] = useState<Medic>();
  const [patients, setPatienInfo] = useState<ContentPatient>();

  useEffect(() => {
    const fetchPatientTwo = async () => {
      try {
        const data = await fetchPatient();
        setPatienInfo(data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchPatientTwo();

    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }
  }, []);


  const handleSubmit = async (values: any) => {
    const factorSanguineoMap: { [key: string]: number } = {
      "A+": 0,
      "A-": 1,
      "B+": 2,
      "B-": 3,
      "O+": 4,
      "O-": 5
    };

    const data = {
      medicoId: medicInfo?.idMedico,
      pacienteId: values.pacienteId,
      descripcion: values.descripcion,
      nombre: values.nombre,
      apellido: values.apellido,
      altura: String(values.altura),
      peso: String(values.peso),
      genero: values.sexo,
      factorSanguineo: factorSanguineoMap[values.grupoRH] || 0,
      fechaNacimiento: values.fechaNacimiento,
      localidad: "",
      provincia: ""
    };

    if (data) {
      try {
        await crearDonante(data);
      } catch (error) {
        console.error("Error al enviar los datos:", error);
      }
    }
  };

  return (
    <main className=''>
      <Header_Donation src='JustinaLogo_2.png' link="/donations" />
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          peso: "",
          altura: "",
          sexo: "",
          pacienteId: 0,
          grupoRH: "",
          fechaNacimiento: "",
          ubicacion: "",
          posibleDonacion: "",
          descripcion: ""
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col ml-4 xl:flex xl:flex-col xl:items-center xl:justify-center xl:content-center xl:w-full">
            <div className='xl:w-[50%]'>
              <div className="flex flex-col w-full mt-5">
                <label htmlFor="pacienteId" className="font-inter font-bold">
                  Selecciona Paciente
                </label>
                <Field as="select"
                  className="w-[90%] h-14 p-2 border border-[#3D4DA5] rounded-md mt-1"
                  name="pacienteId"
                >
                  <option value={0} label="Selecciona un paciente" />
                  {patients?.content.map((items) => (
                    <option key={items.idPaciente} value={items.idPaciente}>
                      {items.nombre} {items.apellido}
                    </option>
                  ))}
                </Field>
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="pacienteId" />
                </div>
              </div>
              <div className='xl:flex xl:flex-row  xl:w-full xl:mb-10  xl:justify-center xl:items-center'>
                <div className="flex flex-col xl:w-[50%]">
                  <label htmlFor="nombre" className="mb-3 font-inter font-bold">
                    Nombre
                  </label>
                  <Field
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="pl-3 border border-[#3D4DA5] w-[90%] rounded-md py-3"
                  />
                  <div className="text-red-600 mb-2 xl:absolute xl:top-[5.5rem]">
                    <ErrorMessage name="nombre" />
                  </div>
                </div>

                <div className="flex flex-col mt-5 xl:mt-0 xl:w-[50%]">
                  <label htmlFor="apellido" className="mb-2 font-inter font-bold">
                    Apellido
                  </label>
                  <Field
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    className="pl-3 border border-[#3D4DA5] w-[90%] rounded-md py-3"
                  />
                  <div className="text-red-600 mt-1 xl:absolute xl:top-[5.5rem]">
                    <ErrorMessage name="apellido" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-5 mt-5 xl:mb-10  xl:w-full xl:gap-x-5 mb-10">
                <div className="flex flex-col w-[50%] xl:w-[50%] xl:ml-0">
                  <label htmlFor="peso" className="ml-1 font-inter font-bold">
                    Peso
                  </label>
                  <div className="flex items-center border border-[#3D4DA5] w-[80%] xl:w-[93%] rounded-md py-2">
                    <Field
                      type="number"
                      name="peso"
                      placeholder="Peso"
                      className="outline-none border-none w-[90%] xl:w-[90%] py-1 pl-3"
                      step="0.1"
                      min="0"
                      max="999"
                    />
                    <p className="-ml-12">KG</p>
                  </div>
                  <div className="text-red-600 mt-1 absolute top-20">
                    <ErrorMessage name="peso" />
                  </div>
                </div>

                <div className="flex flex-col w-[50%] xl:w-[50%] ">
                  <label htmlFor="altura" className="font-inter font-bold">
                    Altura
                  </label>
                  <div className="flex items-center border border-[#3D4DA5] w-[80%] xl:w-[90%] rounded-md py-2">
                    <Field
                      type="number"
                      name="altura"
                      placeholder="Altura"
                      className="outline-none border-none w-[90%] py-1 pl-3"
                      step="0.1"
                      min="0"
                      max="999"
                    />
                    <p className="-ml-12">CM</p>
                  </div>
                  <div className="text-red-600 mt-1 absolute top-20 ">
                    <ErrorMessage name="altura" />
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-5 w-full justify-between mb-10">
                <div className="flex flex-col w-[50%]">
                  <label
                    htmlFor="sexo"
                    className="font-bold flex items-center gap-2"
                  >
                    Sexo
                  </label>
                  <Field
                    as="select"
                    name="sexo"
                    className="w-full h-14 p-2 border border-violet-color rounded-lg mt-1"
                  >
                    <option value="" label="Selecciona el sexo" />
                    <option value="0" label="Masculino" />
                    <option value="1" label="Femenino" />
                    <option value="2" label="Otro" />
                  </Field>
                  <div className="text-red-600 absolute top-20">
                    <ErrorMessage name="sexo" />
                  </div>
                </div>

                <div className="flex flex-col w-[50%]">
                  <label htmlFor="grupoRH" className="font-inter font-bold">
                    Grupo RH
                  </label>
                  <Field
                    as="select"
                    name="grupoRH"
                    className="w-[80%] h-14 p-2 border border-violet-color rounded-lg mt-1"
                  >
                    <option value="" label="Selecciona" />
                    <option value="A+" label="A+" />
                    <option value="A-" label="A-" />
                    <option value="B+" label="B+" />
                    <option value="B-" label="B-" />
                    <option value="O+" label="O+" />
                    <option value="O-" label="O-" />
                  </Field>
                  <div className="text-red-600 mt-1">
                    <ErrorMessage name="grupoRH" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full mt-5">
                <label htmlFor="fechaNacimiento" className="font-inter font-bold">
                  Fecha de Nacimiento
                </label>
                <Field
                  type="date"
                  name="fechaNacimiento"
                  className="pl-3 border border-[#3D4DA5] w-[90%] rounded-md py-3"
                />
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="fechaNacimiento" />
                </div>
              </div>

              {/* <div className="flex flex-col w-full mt-5">
                <label htmlFor="ubicacion" className="font-inter font-bold">
                  Ubicación
                </label>
                <Field
                  type="text"
                  name="ubicacion"
                  placeholder="Ubicación"
                  className="pl-3 border border-[#3D4DA5] w-[90%] rounded-md py-3"
                />
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="ubicacion" />
                </div>
              </div> */}

              {/* <div className="flex flex-col w-full mt-5">
                <label htmlFor="posibleDonacion" className="font-inter font-bold">
                  Posible Donación
                </label>
                <Field
                  type="text"
                  name="posibleDonacion"
                  placeholder="Higado"
                  className="w-[90%] h-14 p-2 border border-violet-color rounded-lg mt-1"
                >

                </Field>
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="posibleDonacion" />
                </div>
              </div> */}



              <div className="flex flex-col w-full mt-5">
                <label htmlFor="descripcion" className="font-inter font-bold">
                  Posible Donación
                </label>
                <Field
                  as="textarea"
                  name="descripcion"
                  className="w-[90%]  min-h-32 h-14 p-2 border border-violet-color rounded-lg mt-1"
                  placeholder="Ingresar descripción"
                >
                </Field>
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="descripcion" />
                </div>
              </div>

              <div className="flex justify-center mb-20 mt-5  ">
                <button
                  type="submit"
                  className="w-[70%] xl:w-[50%] xl:mr-9 bg-orange-500 text-white py-3 rounded-lg mt-5"
                >
                  Registrar Donante
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </main>
  );
}
