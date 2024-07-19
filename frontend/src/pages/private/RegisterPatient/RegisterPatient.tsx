import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button } from '@nextui-org/react';
import * as Yup from 'yup';
import React from 'react';
import { API_URL } from '../../../api/api';
import { useAuthContext } from '../../../Context/AuthContext';
import { dataRegisterPatient, initialValuesPatient } from '../../../data/data';
import { PatientRegister } from '../../../Interfaces/interfaces';
import { BloodIcon, CardIcon, GenderIcon } from '../../../components/icons/Icons';
import { toast } from 'sonner';

const validationSchemaPatient = Yup.object({
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .required('El nombre es obligatoria'),
  apellido: Yup.string()
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .required('El apellido es obligatoria'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener mas de 8 caracteres')
    .required('La contraseña es obligatoria'),
  numeroDocumento: Yup.string()
    .matches(/^[0-9]+$/, 'El documento debe contener solo números')
    .min(8, 'El documento debe tener al menos 8 caracteres')
    .required('El documento es obligatoria'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
});


export const RegisterPatient: React.FC = () => {
  const { authTokens } = useAuthContext()

  const handleSubmit = async (values: PatientRegister) => {
    const patient: PatientRegister = {
      email: values.apellido,
      password: values.password,
      nombre: values.nombre,
      apellido: values.apellido,
      tipoDocumentoId: values.tipoDocumentoId,
      numeroDocumento: values.numeroDocumento,
      fechaNacimiento: values.fechaNacimiento,
      genero: values.genero,
      factorSanguineo: values.factorSanguineo,
      patologiaId: values.patologiaId,
      medicosId: values.medicosId,
      entidadesId: values.entidadesId,
      financiadorId: values.financiadorId,
    }
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
      toast.success("El paciente fue creado correctamente")
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    //RECORDATORIO AGREGAR LA FECHA DEL MOMENTO DE LA CREACION DEL TRATAMIENTO: ENVIAR FECHA ACTUAL YYYY-MM-DD
    <section className="max-md:w-full min-h-screen flex justify-center items-center">
      <Formik
        initialValues={initialValuesPatient}
        validationSchema={validationSchemaPatient}
        onSubmit={handleSubmit}
      >
        {/* FALTA LIMIPIAR EL FORMULARIO CUANDO SE REGISTRA UN USUARIO */}
        {({ isSubmitting }) => (
          <Form className="  p-6 flex flex-col gap-y-4 border-2 w-[50rem] rounded-lg">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold tracking-tight">Crear cuenta paciente</h1>
              <p className="text-sm">Introduzca la información necesaria</p>
            </div>
            <div className="flex-wrap grid grid-rows-5 gap-6 max-md:grid-rows-9 max-md:gap-1 grid-flow-col max-md:gap-y-3">
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
                  <option value={0}>Masculino</option>
                  <option value={1}>Femenino</option>
                  {/* <option value={2}>Otro</option> */}
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
              <div>
                <label className="font-semibold flex items-center gap-2 pl-2" htmlFor="factorSanguineo">
                  <BloodIcon width={15} height={15} />Factor Sanguineo
                </label>
                <Field as="select" className="w-full p-2 border border-gray-300 rounded mt-1" name="factorSanguineo">
                  <option value={0}>Cero Positivo</option>
                  <option value={1}>Cero Negativo</option>
                  <option value={2}>A Positivo</option>
                  <option value={3}>A Negativo</option>
                  <option value={4}>B Positivo</option>
                  <option value={5}>B Negativo</option>
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
