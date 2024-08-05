import { DoctorRegister } from "../../Interfaces/interfaces";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "@nextui-org/react";
import {
  CardIcon,
  FlechaIconTwo,
  JobIcon,
  LoaderIcon,
} from "../../../public/icons/Icons";
import { useAuthContext } from "../../Context/AuthContext";
import { validationSchema } from "../../utils/validation/validation";
import { initialValuesDoctor } from "../../utils/data/data";
import {
  EmailIcon,
  HomeIcon,
  LockIcon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "../../../public/icons/Icons";

const dataRegisterDoctor = [
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
    label: "Teléfono",
    name: "telefono",
    type: "tel",
    icon: PhoneIcon,
    placeholder: "Ej: 55 5555-5555",
  },
  {
    label: "Provincia",
    name: "localidad",
    type: "text",
    icon: MapIcon,
    placeholder: "Ej: Santa Fe",
  },
  {
    label: "Localidad",
    name: "provincia",
    type: "text",
    icon: HomeIcon,
    placeholder: "Ej: Rosario",
  },
  {
    label: "Licencia",
    name: "licencia",
    type: "text",
    icon: CardIcon,
    placeholder: "Ej: 123456",
  },
];

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { registerDoctor } = useAuthContext();

  const handleSubmit = async (values: DoctorRegister) => {
    const doctor: DoctorRegister = {
      ...values,
      financiadores:
        values.financiadores.length > 0 ? [values.financiadores[0]] : [1],
    };
    console.log(doctor.financiadores);
    try {
      setLoading(true);
      registerDoctor(doctor);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex min-h-screen bg-gray-100 md:flex md:justify-center  "
      style={{ backgroundImage: "url(/IMG_FONDO/IMG_FONDO.png)" }}
    >
      <Formik
        initialValues={initialValuesDoctor}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=" w-full max-w-[40rem] xl:shadow-xl xl:shadow-black 2xl:h-[70%] 2xl:max-w-[60rem] p-8 bg-white xl:bg-transparent 2xl:mt-[10rem] xl:text-white rounded-lg shadow-lg  max-md:m-auto flex flex-col gap-y-4 ">
            <div className="mb-6 text-center relative flex flex-col items-center justify-center xl:items-center ">
              <Link
                to={"/login"}
                className=" absolute -left-0 hover:-translate-x-1 transition-all duration-300"
              >
                <FlechaIconTwo
                  width={30}
                  height={30}
                  stroke={"#ffffff"}
                  classname={""}
                />
              </Link>
              <div className=" relative w-full flex flex-col items-center justify-center">
                <h1 className="text-2xl text-black font-bold tracking-tight xl:text-[2rem] xl:mb-2">
                  Crear cuenta
                </h1>
                <p className="text-sm  text-black">
                  Introduce la información necesaria
                </p>
                <Link
                  to={"/login"}
                  className="text-light-color absolute left-0 transition-all duration-300 hover:translate-x-1 cursor-pointer"
                >
                  <FlechaIconTwo
                    width={30}
                    height={30}
                    stroke="#000000"
                    classname=""
                  />
                </Link>
              </div>
            </div>
            <div className="xl:w-[100%] xl:text-black xl:grid xl:grid-cols-2 xl:grid-rows-5 flex-wrap grid grid-rows-10 gap-6  grid-flow-col  max-md:gap-1 max-md:gap-y-3">
              {dataRegisterDoctor.map(
                ({ label, name, type, icon: Icon, placeholder }) => (
                  <div key={name} className="">
                    <label
                      className="font-semibold flex items-center gap-2 pl-2"
                      htmlFor={name}
                    >
                      <Icon width={15} height={15} /> {label}
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
                      className="text-red-500"
                    />
                  </div>
                )
              )}
              <div className="">
                <label
                  className="font-semibold flex items-center gap-2 pl-2"
                  htmlFor="especialidad"
                >
                  <JobIcon width={15} height={15} stroke={""} />
                  Especialidad
                </label>
                <Field
                  as="select"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  name="especialidad"
                >
                  <option value={1}>Cardiología</option>
                  <option value={2}>Neurología</option>
                  <option value={3}>Pediatría</option>
                </Field>
              </div>
              <div className="">
                <label
                  className="font-semibold flex items-center gap-2 pl-2"
                  htmlFor="financiadores"
                >
                  <CardIcon width={15} height={15} />
                  Financiador
                </label>
                <Field
                  as="select"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                  name="financiadores"
                >
                  <option value={1}>OSDE</option>
                  <option value={2}>Swiss Medical</option>
                </Field>
              </div>
            </div>
            <div className="xl:mt-10 xl:flex xl:flex-col xl:items-center xl:justify-center xl:gap-x-10 xl:gap-y-5">
              <div className="xl:w-[40%]">
                <Button
                  type="submit"
                  className=" h-10 w-full xl:hover:bg-orange-500  bg-secondary-brand-dark text-white font-semibold"
                  disabled={isSubmitting}
                >
                  <span className=" animate-spin">
                    {loading && (
                      <LoaderIcon width={30} height={30}></LoaderIcon>
                    )}
                  </span>{" "}
                  Registrar
                </Button>
              </div>

              <div className="text-center xl:w-[40%]">
                <Link to="/login">
                  <button
                    onClick={() => {}}
                    className="w-full mt-2 p-2  xl:hover:text-orange-400 rounded-xl font-semibold text-secondary-brand-dark xl:hover:border-orange-400 border-secondary-brand-dark border-2 "
                  >
                    Iniciar sesión
                  </button>
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUp;
