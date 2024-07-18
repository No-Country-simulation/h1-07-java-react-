import { ErrorMessage, Field, Form, Formik } from 'formik'
import { CardIcon, GenderIcon } from '../../../components/icons/Icons'
import { Button } from '@nextui-org/react';
import * as Yup from 'yup';
import React from 'react';
import { API_URL } from '../../../api/api';
import { useAuthContext } from '../../../Context/AuthContext';
import { dataRegisterPatient, initialValuesPatient } from '../../../data/data';
import { PatientRegister } from '../../../Interfaces/interfaces';

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatoria'),
  apellido: Yup.string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .required('El apellido es obligatoria'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener mas de 8 caracteres')
    .required('La contraseña es obligatoria'),
  documento: Yup.string()
    .matches(/^[0-9]+$/, 'El documento debe contener solo números')
    .min(8, 'El documento debe tener al menos 8 caracteres')
    .required('El documento es obligatoria'),
  fechaNacimiento: Yup.date()
    .required("Ingresar fecha de nacimiento"),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
});


export const RegisterPatient: React.FC = () => {
  const { authTokens } = useAuthContext()

  const handleSubmit = async (values: PatientRegister) => {
    const patient: PatientRegister = {
      email: values.email,
      password: values.password,
      nombre: values.nombre,
      apellido: values.apellido,
      tipoDocumentoId: values.tipoDocumentoId,
      numeroDocumento: values.numeroDocumento,
      fechaNacimiento: values.fechaNacimiento, //"2000-01-01",
      genero: Number(values.genero), 
      factorSanguineo: values.factorSanguineo,
      patologiaId: values.patologiaId,
      medicosId: values.medicosId,
      tratamientosId: values.tratamientosId,
      entidadesId: values.entidadesId,
      financiadorId: values.financiadorId
    };
    console.log(patient)
    try {
      const res = await fetch(`${API_URL}/paciente/crear-paciente`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${authTokens?.token}`
        },
        body: JSON.stringify(patient)
      })
      if (!res.ok) {
        console.error('HTTP error', res.status, res.statusText);
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      console.log(data);
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    //RECORDATORIO AGREGAR LA FECHA DEL MOMENTO DE LA CREACION DEL TRATAMIENTO: ENVIAR FECHA ACTUAL YYYY-MM-DD
    <section className="max-md:w-full mt-8 mx-auto p-4 max-w-[50rem] border-2 m">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Crear cuenta</h1>
        <p className="text-sm">Introduce la información necesaria</p>
      </div>
      <Formik
        initialValues={initialValuesPatient}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=" w-full p-4 flex flex-col gap-y-4  ">
            <div className="flex-wrap grid grid-rows-4 gap-6 max-md:grid-rows-8 max-md:gap-1 grid-flow-col max-md:gap-y-3">
              {dataRegisterPatient.map(({ label, name, type, icon: Icon, placeholder }) => (
                <div key={name}>
                  <label className="font-semibold flex items-center gap-2 pl-2" htmlFor={name}>
                    <Icon width={15} height={15} /> {label}
                  </label>
                  <Field
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                  />
                  <ErrorMessage name={name} component="div" className=" flex-wrap text-red-500" />
                </div>
              ))}
              <div className="">
                <label className="font-semibold flex items-center gap-2 pl-2" htmlFor="genero">
                  <GenderIcon width={15} height={15} />Genero
                </label>
                <Field as="select" className="w-full p-2 border border-gray-300 rounded mt-1" name="genero">
                  <option value={1}>Masculino</option>
                  <option value={0}>Femenino</option>
                </Field>
              </div>
              <div className="">
                <label className="font-semibold flex items-center gap-2 pl-2" htmlFor="financiadorId">
                  <CardIcon width={15} height={15} />Financiador
                </label>
                <Field as="select" className="w-full p-2 border border-gray-300 rounded mt-1" name="financiadorId">
                  <option value={1}>OSDE</option>
                  <option value={2}>Swiss Medical</option>
                </Field>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="h-10 w-full font-semibold bg-secondary-brand-dark text-white"
                disabled={isSubmitting}
              >
                Registrar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>)
}
