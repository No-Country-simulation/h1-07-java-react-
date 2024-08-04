import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Header_Donation } from "../../../../../components/Header_Medic_Donation/Header_Donation";
import { crearDonante, fetchPatient } from '../../../../../Context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ContentPatient } from '../../../../../Interfaces/interfaces';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  nombre: Yup.string().required("Nombre es requerido"),
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
  ubicacion: Yup.string().required("Ubicación es requerida"),
  posibleDonacion: Yup.string().required("Donación requerida"),
});

export function Donation_Registre() {
  const [patients, setPatienInfo] = useState<ContentPatient>();
  const [selectedPatientId, setSelectedPatientId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchPatientTwo = async () => {
      try {
        const data = await fetchPatient();
        console.log(data);
        setPatienInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPatientTwo();
  }, []);

  const handlePatientSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPatientId(Number(event.target.value));
    setSelectedPatientId(Number(event.target.value));
  };

  /*  const handleSubmit = async (values: any) => {
 
 
     const factorSanguineoMap: { [key: string]: number } = {
       "A+": 0,
       "A-": 1,
       "B+": 2,
       "B-": 3,
       "O+": 4,
       "O-": 5
     };
 
     const data = {
       medicoId: 10,
       pacienteId: selectedPatientId,
       descripcion: values.posibleDonacion,
       nombre: values.nombre,
       apellido: values.apellido,
       altura: String(values.altura),
       peso: String(values.peso),
       genero: values.sexo === 'masculino' ? 2 : values.sexo === 'femenino' ? 1 : 0,
       factorSanguineo: factorSanguineoMap[values.grupoRH] || 0,
       fechaNacimiento: values.fechaNacimiento,
       localidad: values.ubicacion,
       provincia: null
     };
 
     console.log('Datos enviados:', JSON.stringify(data, null, 2));
 
     try {
       await crearDonante(data);
       toast.success('Registro exitoso!');
     } catch (error) {
       toast.error('Error al registrar. Inténtalo de nuevo.');
       console.error('Error al enviar los datos:', error);
     }
   }; */

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
      medicoId: 10,
      pacienteId: selectedPatientId,
      descripcion: values.posibleDonacion,
      nombre: values.nombre,
      apellido: values.apellido,
      altura: String(values.altura),
      peso: String(values.peso),
      genero: values.sexo === 'masculino' ? 2 : values.sexo === 'femenino' ? 1 : 0,
      factorSanguineo: factorSanguineoMap[values.grupoRH] || 0,
      fechaNacimiento: values.fechaNacimiento,
      localidad: values.ubicacion,
      provincia: ""
    };

    console.log("Datos enviados:", JSON.stringify(data, null, 2));

    try {
      await crearDonante(data);
      toast.success('Registro exitoso!');
      setTimeout(() => {
        Navigate({ to: '/donations' })
      }, 2000);
    } catch (error) {
      toast.error("Error al registrar. Inténtalo de nuevo.");
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <main>
      <Header_Donation link='/donations' src='./public/JustinaLogo_2.png'>

      </Header_Donation>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          peso: "",
          altura: "",
          sexo: "",
          grupoRH: "",
          fechaNacimiento: "",
          ubicacion: "",
          posibleDonacion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col ml-4">

            <div className="flex flex-col">
              <label htmlFor="nombre" className="mb-3 font-inter font-bold">
                Nombre
              </label>
              <Field
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="pl-3 border border-[#3D4DA5] w-[90%] rounded-md py-3"
              />
              <div className="text-red-600 mt-1">
                <ErrorMessage name="nombre" />
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="apellido" className="mb-3 font-inter font-bold">
                Apellido
              </label>
              <Field
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="pl-3 border border-[#3D4DA5] w-[90%] rounded-md py-3"
              />
              <div className="text-red-600 mt-1">
                <ErrorMessage name="apellido" />
              </div>
            </div>

            <div className="flex flex-row gap-x-5 mt-5 mb-4">
              <div className="flex flex-col w-[50%]">
                <label htmlFor="peso" className="ml-1 font-inter font-bold">
                  Peso
                </label>
                <div className="flex items-center border border-[#3D4DA5] w-full rounded-md py-2">
                  <Field
                    type="number"
                    name="peso"
                    placeholder="Peso"
                    className="outline-none border-none w-[90%] py-1 pl-3"
                    step="0.1"
                    min="0"
                    max="999"
                  />
                  <p className="-ml-10">KG</p>
                </div>
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="peso" />
                </div>
              </div>

              <div className="flex flex-col w-[50%]">
                <label htmlFor="altura" className="font-inter font-bold">
                  Altura
                </label>
                <div className="flex items-center border border-[#3D4DA5] w-[80%] rounded-md py-2">
                  <Field
                    type="number"
                    name="altura"
                    placeholder="Altura"
                    className="outline-none border-none w-[90%] py-1 pl-3"
                    step="0.1"
                    min="0"
                    max="999"
                  />
                  <p className="-ml-5">CM</p>
                </div>
                <div className="text-red-600 mt-1">
                  <ErrorMessage name="altura" />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-x-5 w-full justify-between">
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
                  <option value="masculino" label="Masculino" />
                  <option value="femenino" label="Femenino" />
                  <option value="otro" label="Otro" />
                </Field>
                <div className="text-red-600 mt-1">
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

            <div className="flex flex-col w-full mt-5">
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
            </div>

            <div className="flex flex-col w-full mt-5">
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
            </div>

            <div className="flex flex-col w-full mt-5">
              <label htmlFor="paciente" className="font-inter font-bold">
                Selecciona Paciente
              </label>
              <select
                onChange={handlePatientSelect}
                className="w-[90%] h-14 p-2 border border-[#3D4DA5] rounded-md mt-1"
                defaultValue=""
              >
                <option value="" label="Selecciona un paciente" />
                {patients?.content.map((items) => (
                  <option key={items.idPaciente} value={items.idPaciente}>
                    {items.nombre} {items.apellido}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center mb-20 mt-5">
              <button
                type="submit"
                className="w-[70%] bg-orange-500 text-white py-3 rounded-lg mt-5"
              >
                Registrar Donante
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </main>
  );
}
