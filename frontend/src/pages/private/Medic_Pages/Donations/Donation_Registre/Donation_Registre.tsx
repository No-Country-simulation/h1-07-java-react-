import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Header_Donation } from "../../../../../Components/Header_Medic_Donation/Header_Donation";
import { crearDonante, fetchMedicData, fetchPatient } from '../../../../../Context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ContentPatient, Medic } from '../../../../../Interfaces/interfaces';
import { Link } from 'react-router-dom';


// Validaciones con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required('Nombre es requerido'),
  apellido: Yup.string().required('Apellido es requerido'),
  peso: Yup.number()
    .typeError('Peso debe ser un número')
    .required('Peso es requerido')
    .positive('Debe ser un número positivo')
    .integer('Debe ser un número entero')
    .max(999, 'Peso no puede tener más de tres dígitos'),
  altura: Yup.number()
    .typeError('Altura debe ser un número')
    .required('Altura es requerida')
    .positive('Debe ser un número positivo')
    .integer('Debe ser un número entero')
    .max(999, 'Altura no puede tener más de tres dígitos'),
  sexo: Yup.string().required('Sexo es requerido'),
  grupoRH: Yup.string().required('Grupo RH es requerido'),
  fechaNacimiento: Yup.date().required('Fecha de nacimiento es requerida').nullable(),
  ubicacion: Yup.string().required('Ubicación es requerida'),
  posibleDonacion: Yup.string().required('Donación requerida')
});

export function Donation_Registre() {
  const [medicInfo, setMedicInfo] = useState<Medic>();
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState<ContentPatient>();

  const fetchPatientData = async () => {
    setLoading(true);
    try {
      setPatients(await fetchPatient());
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMedic = async () => {
      try {
        setMedicInfo(await fetchMedicData());
      } catch (err) {
        console.log(err);
      }
    };

    fetchMedic();
    fetchPatientData();


    const storedMedic = localStorage.getItem("MEDIC-DATA");
    if (storedMedic) {
      const medic: Medic = JSON.parse(storedMedic);
      setMedicInfo(medic);
    }
  }, []);

  console.log(medicInfo?.idMedico)

  const handleSubmit = async (values: any) => {

    const factorSanguineoMap: { [key: string]: number } = {
      "A+": 1,
      "A-": 2,
      "B+": 3,
      "B-": 4,
      "AB+": 5,
      "AB-": 6,
      "O+": 7,
      "O-": 8
    };

    const generateRandomId = (): number => {
      return Math.floor(Math.random() * 9000 + 1000);
    };

    const pacienteId = patients?.idPaciente || generateRandomId();

    const data = {
      medicoId: medicInfo?.idMedico,
      pacienteId,
      descripcion: 'Higado',
      nombre: values.nombre,
      apellido: values.apellido,
      altura: String(values.altura),
      peso: String(values.peso),
      genero: values.sexo === 'masculino' ? 1 : values.sexo === 'femenino' ? 2 : 0,
      factorSanguineo: factorSanguineoMap[values.grupoRH] || 0,
      fechaNacimiento: values.fechaNacimiento,
      localidad: values.ubicacion,
      provincia: 'Madrid'
    };

    console.log(medicInfo?.idMedico)
    console.log('Datos enviados:', JSON.stringify(data, null, 2));

    try {
      const result = await crearDonante(data);
      toast.success('Registro exitoso!');
      console.log(result);

    } catch (error) {
      toast.error('Error al registrar. Inténtalo de nuevo.');
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <main>
      <Header_Donation >
        <Link to={"/donations"}></Link>
      </Header_Donation>
      <Formik
        initialValues={{
          nombre: '',
          apellido: '',
          peso: '',
          altura: '',
          sexo: '',
          grupoRH: '',
          fechaNacimiento: '',
          ubicacion: '',
          posibleDonacion: ''
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
                <label htmlFor="sexo" className="font-bold  flex items-center gap-2">
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

            <div className="mt-5">
              <label htmlFor="fechaNacimiento" className="font-inter font-bold">
                Fecha de nacimiento
              </label>
              <Field
                type="date"
                name="fechaNacimiento"
                placeholder="Fecha de nacimiento"
                className="pl-4 border border-[#3D4DA5] w-[90%] py-3 rounded-md mt-3"
              />
              <div className="text-red-600 mt-1">
                <ErrorMessage name="fechaNacimiento" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="ubicacion" className="font-inter font-bold">
                Ubicación
              </label>
              <Field
                type="text"
                name="ubicacion"
                placeholder="Ubicación"
                className="pl-4 border border-[#3D4DA5] w-[90%] py-3 rounded-md mt-3"
              />
              <div className="text-red-600 mt-1">
                <ErrorMessage name="ubicacion" />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="posibleDonacion" className="font-inter font-bold">
                Posible donación
              </label>
              <Field
                type="text"
                name="posibleDonacion"
                placeholder="Ingresar"
                className="pl-4 border border-[#3D4DA5] w-[90%] py-3 rounded-md mt-3"
              />
              <div className="text-red-600 mt-1">
                <ErrorMessage name="posibleDonacion" />
              </div>
            </div>

            <div className="flex flex-row items-center justify-center mb-14 mt-10">
              <button
                type="submit"
                className="bg-[#E08733] px-24 rounded-3xl text-white font-inter py-2"
              >
                Añadir nuevo
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </main>
  );
}
