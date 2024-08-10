import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthenticationRequest } from "../../Interfaces/interfaces";
import { useAuthContext } from "../../Context/AuthContext";
import { toast } from "sonner";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  ArrowWhiteIcon,
  ClosePasswordIcon,
  EmailIcon,
  LoaderIcon,
  LockIcon,
  OpenPasswordIcon,
} from "../../../public/icons/Icons";
import { initialValuesLogin } from "../../utils/data/data";
import { validationSchemaLogin } from "../../utils/validation/validation";

export const LoginPage: React.FC = () => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitLogin = async (
    values: AuthenticationRequest,
    { setSubmitting }: any
  ) => {
    setLoading(true);
    setSubmitting(true);
    try {
      await login(values.email, values.password);
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      toast.error(
        "Error en el inicio de sesión. Por favor, intenta nuevamente."
      );
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section
      className="flex min-h-screen xl:overflow-hidden  md:flex justify-center 2xl:items-center xl:bg-cover 2xl:bg-cover xl:bg-center 2xl:bg-center "
      style={{ backgroundImage: "url(/IMG_FONDO/IMG_FONDO.webp)" }}
    >
      <div className="lg:w-full w-[340px]  max-w-md mt-4 lg:mt-2 p-8 xl:px-6 xl:py-3 2xl:py-8 bg-white xl:text-black xl:bg-white rounded-lg shadow-lg shadow-black h-[620px]  lg:h-[600px]  ">
        <div className="2xl:mt-0">
          <Link to={"/onboarding"} className="flex z-10 w-10 lg:mt-4 flex-row items-center gap-x-5 mb-2 ">
            <ArrowWhiteIcon width={30} height={30} stroke="#000000" />
          </Link>
        <div className="-mt-9">
          <img src="JustinaLogo_2.png" className="m-auto flex" width={130} alt="Justina Logo" /> 
          <h3 className="text-[20px] uppercase text-center pb-0 font-[700] mb-[9px]   text-gray-900 font-inter xl:text-black 2xl:text-black ">
            Iniciar Sesión
          </h3></div>
        </div>
        <p className="mb-4 text-[15px] text-center text-[#948ABC] xl:text-black 2xl:text-black ">
          Accede con la cuenta que registraste
        </p>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={validationSchemaLogin}
          onSubmit={handleSubmitLogin}
        >
          {({ isSubmitting }) => (
            <Form className=" flex flex-col gap-y-10 ">
              <div>
                <div className="flex flex-row items-center mb-1">
                  <EmailIcon width={16} height={16} />
                  <label
                    htmlFor="email"
                    className="block ml-2 text-[17px] font-bold font-inter text-gray-700 xl:text-black 2xl:text-black"
                  >
                    Correo
                  </label>
                </div>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ej: tumail@mailito.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage
                  name={"email"}
                  component="div"
                  className=" flex-wrap text-red-500"
                />
              </div>
              <div className=" ">
                <div className="flex flex-row items-center mb-1">
                  <LockIcon width={16} height={16} />
                  <label
                    htmlFor="password"
                    className="block text-[17px] ml-2 font-bold font-inter text-gray-700 xl:text-black 2xl:text-black"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="flex items-center relative">
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Introduzca contraseña"
                    className="w-full px-3  py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-[1rem]"
                  >
                    {showPassword ? (
                      <ClosePasswordIcon width={16} height={16} />
                    ) : (
                      <OpenPasswordIcon width={16} height={16} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name={"password"}
                  component="div"
                  className=" flex-wrap text-red-500"
                />
                {/* <p className="mt-1 text-end text-[#948ABC] cursor-pointer xl:text-black 2xl:text-black">
                  ¿Olvidaste tu contraseña?
                </p> */}
              </div>
         
              <div className=" flex items-center h-[10rem] min-[1440px]:h-[10rem] flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className=" animate-spin">
                    {loading && (
                      <LoaderIcon width={30} height={30}></LoaderIcon>
                    )}
                  </span>
                  Iniciar Sesión
                </button>
                <Link
                  className="w-full h-[30%] py-2 text-[#E08733] border-2 text-center border-[#E08733] rounded-md  hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  to={"/signup"}
                >
                  Registrarme
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
