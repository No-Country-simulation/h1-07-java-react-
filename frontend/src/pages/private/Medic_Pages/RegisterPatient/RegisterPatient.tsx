import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../../Context/AuthContext';
import { PatientRegister } from '../../../../Interfaces/interfaces';
import { dataRegisterPatient, initialValuesPatient } from '../../../../utils/data/data';
import { validationSchemaPatient } from '../../../../utils/validation/validation';
import { BloodIcon, CardIcon, FlechaIconTwo, GenderIcon, HealthIcon, LoaderIcon } from '../../../../../public/icons/Icons';

export const RegisterPatient: React.FC = () => {
  const { registerPatient } = useAuthContext();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (values: PatientRegister, { resetForm }: any) => {
    const patient: PatientRegister = values;
    try {
      setLoading(true);
      await registerPatient(patient);
      toast.success("El paciente fue creado correctamente");
      resetForm(); // Limpiar el formulario
    } catch (err: any) {
      console.error(err);
      toast.error("Hubo un error al crear el paciente"); // Mostrar mensaje de error
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen bg-gray-100 md:flex md:justify-center">
      <Formik
        initialValues={initialValuesPatient}
        validationSchema={validationSchemaPatient}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg max-md:m-auto flex flex-col gap-y-4">
            <div className="mb-6 text-center relative flex flex-col items-center justify-center">
              <Link to="/dashboard" className='absolute -left-10 hover:-translate-x-1 transition-all duration-300'>
                <FlechaIconTwo width={30} height={30} />
              </Link>
              <h1 className="text-2xl font-bold tracking-tight">Crear cuenta paciente</h1>
              <p className="text-sm">Introduzca la información necesaria</p>
            </div>
            <div className="flex-wrap grid grid-rows-10 gap-6  max-md:gap-1 grid-flow-col max-md:gap-y-3">
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
                  <ErrorMessage name={name} component="div" className="flex-wrap text-red-500" />
                </div>
              ))}
              <div>
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
                <label className="font-semibold flex items-center gap-2 pl-2" htmlFor="patologiaId">
                  <HealthIcon width={15} height={15} />Patología
                </label>
                <Field as="select" className="w-full p-2 border border-gray-300 rounded mt-1" name="patologiaId">
                  <option value={1}>Cancer</option>
                  <option value={2}>Epilepsia</option>
                  <option value={3}>Asma</option>
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
                {loading ? (
                  <LoaderIcon width={30} height={30}  />
                ) : (
                  'Registrar'
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
