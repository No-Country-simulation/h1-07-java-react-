import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../Context/AuthContext";
import { PatientRegister } from "../../../../Interfaces/interfaces";
import { validationSchemaPatient } from "../../../../utils/validation/validation";
import {
  BloodIcon,
  CalendarIcon,
  CardIcon,
  EmailIcon,
  FlechaIconTwo,
  GenderIcon,
  HealthIcon,
  LoaderIcon,
  LockIcon,
  UserIcon,

} from "../../../../../public/icons/Icons";
import { initialValuesPatient } from "../../../../utils/data/data";

const dataRegisterPatient = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    icon: UserIcon,

    placeholder: "Ej: Mario",
  },
  {
    label: "Apellido",
    name: "apellido",
    type: "text",
    icon: UserIcon,
    placeholder: "Ej: Hernandez",
  },
  {
    label: "Correo Electrónico",
    name: "email",
    type: "email",
    icon: EmailIcon,
    placeholder: "Ej: tumail@mailito.com",
  },
  {
    label: "Contraseña",
    name: "password",
    type: "password",
    icon: LockIcon,
    placeholder: "Introduzca contraseña",
  },
  {
    label: "Documento",
    name: "numeroDocumento",
    type: "number",
    icon: CardIcon,
    placeholder: "Ej: 43812312",
  },
  {
    label: "Fecha de Nacimiento",
    name: "fechaNacimiento",
    type: "date",
    icon: CalendarIcon,
  },
];

export const RegisterPatient: React.FC = () => {
  const { registerPatient } = useAuthContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values: PatientRegister, { setSubmitting }: any) => {
    const patient: PatientRegister = values;
    try {
      setLoading(true);
      registerPatient(patient);
    } catch (err) {
      console.error(err);
      toast.error("Hubo un error al crear el paciente"); // Mostrar mensaje de error
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <section className="flex min-h-screen bg-gray-100 md:flex xl:justify-center ">
      <Formik
        initialValues={initialValuesPatient}
        validationSchema={validationSchemaPatient}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md xl:max-w-full p-8 bg-white rounded-lg shadow-lg max-md:m-auto flex flex-col gap-y-4">
            <div className="mb-6 text-center relative flex flex-col items-center justify-center">
              <Link
                to="/dashboard"
                className="absolute -left-0 xl:left-64 hover:-translate-x-1 transition-all duration-300"
              >
                <FlechaIconTwo
                  width={30}
                  height={30}
                  stroke={"#121"}
                  classname={""}
                />
              </Link>
              <h3 className="text-2xl font-bold tracking-tight">
                Crear cuenta paciente
              </h3>
              <p className="text-sm">Introduzca la información necesaria</p>
            </div>
            <div className="xl:flex xl:flex-col xl:w-full xl:items-center">
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-8 xl:w-[60%]">
                {dataRegisterPatient.map(
                  ({ label, name, type, icon: Icon, placeholder }) => (
                    <div key={name} className="flex flex-col">
                      <label
                        className="font-semibold flex items-center gap-2 pl-2"
                        htmlFor={name}
                      >
                        <Icon width={15} height={15} stroke="#948ABC" classname=""/> {label}
                      </label>
                      <Field
                        type={type}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                      />
                      <ErrorMessage
                        name={name}
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  )
                )}
                <div className="flex flex-col">
                  <label
                    className="font-semibold flex items-center gap-2 pl-2"
                    htmlFor="genero"
                  >
                    <GenderIcon width={15} height={15} stroke="" classname=""/>
                    Genero
                  </label>
                  <Field
                    as="select"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    name="genero"
                  >
                    <option value={0}>Masculino</option>
                    <option value={1}>Femenino</option>
                  </Field>
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-semibold flex items-center gap-2 pl-2"
                    htmlFor="patologiaId"
                  >
                    <HealthIcon width={15} height={15} stroke="" classname=""/>
                    Patología
                  </label>
                  <Field
                    as="select"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    name="patologiaId"
                  >
                    <option value={1}>Cancer</option>
                    <option value={2}>Epilepsia</option>
                    <option value={3}>Asma</option>
                  </Field>
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-semibold flex items-center gap-2 pl-2"
                    htmlFor="financiadorId"
                  >
                    <CardIcon width={15} height={15} />
                    Financiador
                  </label>
                  <Field
                    as="select"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    name="financiadorId"
                  >
                    <option value={1}>OSDE</option>
                    <option value={2}>Swiss Medical</option>
                  </Field>
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-semibold flex items-center gap-2 pl-2"
                    htmlFor="factorSanguineo"
                  >
                    <BloodIcon width={15} height={15} stroke="" classname=""/>
                    Factor Sanguineo
                  </label>
                  <Field
                    as="select"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    name="factorSanguineo"
                  >
                    <option value={0}>Cero Positivo</option>
                    <option value={1}>Cero Negativo</option>
                    <option value={2}>A Positivo</option>
                    <option value={3}>A Negativo</option>
                    <option value={4}>B Positivo</option>
                    <option value={5}>B Negativo</option>
                  </Field>
                </div>
              </div>
            </div>

            <div className="xl:flex xl:flex-col xl:items-center xl:mt-20">
              <Button
                type="submit"
                className="h-10 w-full font-semibold bg-secondary-brand-dark text-white xl:w-[30%]"
                disabled={isSubmitting}
              >
                {loading ? <LoaderIcon width={30} height={30} /> : "Registrar"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
