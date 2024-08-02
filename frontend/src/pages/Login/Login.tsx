import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthenticationRequest } from "../../Interfaces/interfaces";
import { useAuthContext } from "../../Context/AuthContext";
import { toast } from "sonner";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ClosePasswordIcon, EmailIcon, LoaderIcon, LockIcon, OpenPasswordIcon } from "../../../public/icons/Icons";
import { initialValuesLogin } from "../../utils/data/data";
import { validationSchemaLogin } from "../../utils/validation/validation";

export const LoginPage: React.FC = () => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmitLogin = (values: AuthenticationRequest, { setSubmitting }: any) => {
    setSubmitting(true);

    try {
      setLoading(true);
      login(values.email, values.password);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      toast.error('Error en el inicio de sesión. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen xl:overflow-hidden  md:flex md:justify-center 2xl:items-center xl:bg-cover 2xl:bg-cover xl:bg-center 2xl:bg-center " style={{ backgroundImage: 'url(/IMG_FONDO/IMG_FONDO.png)' }}>
      <div className="w-full max-w-md p-8 xl:px-6 xl:py-3 2xl:py-12 bg-white xl:bg-transparent rounded-lg shadow-lg shadow-black  2xl:h-full  ">
        <h2 className="text-[20px] font-[700] mb-[9px] mt-[1.5rem] xl:mt-0 text-gray-900 font-inter xl:text-white 2xl:text-white">Iniciar Sesión</h2>
        <p className="mb-[46px] text-[15px] text-[#948ABC] xl:text-white 2xl:text-white ">Accede con la cuenta que registraste</p>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={validationSchemaLogin}
          onSubmit={handleSubmitLogin}>
          {({ isSubmitting }) => (
            <Form className=" flex flex-col gap-y-10 ">
              <div>
                <div className="flex flex-row items-center mb-1">
                  <EmailIcon width={16} height={16} />
                  <label htmlFor="email" className="block ml-2 text-[17px] font-bold font-inter text-gray-700 xl:text-white 2xl:text-white">Correo</label>
                </div>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ej: tumail@mailito.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name={"email"} component="div" className=" flex-wrap text-red-500" />
              </div>
              <div className=" ">
                <div className="flex flex-row items-center mb-1">
                  <LockIcon width={16} height={16} />
                  <label htmlFor="password" className="block text-[17px] ml-2 font-bold font-inter text-gray-700 xl:text-white 2xl:text-white">Contraseña</label>
                </div>
                <div className="flex items-center relative">
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Introduzca contraseña"
                    className="w-full px-3  py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button type="button" onClick={togglePasswordVisibility} className="absolute right-[1rem]">
                    {showPassword ? <ClosePasswordIcon width={16} height={16} /> : <OpenPasswordIcon width={16} height={16} />}
                  </button>
                </div>
                <ErrorMessage name={"password"} component="div" className=" flex-wrap text-red-500" />
                <p className="mt-1 text-end text-[#948ABC] cursor-pointer xl:text-white 2xl:text-white">¿Olvidaste tu contraseña?</p>
              </div>
              <div className="flex items-center justify-center h-[12rem] min-[1440px]:h-[10rem]" >
                <img src="JustinaLogo.png" alt="" className="w-[200px] h-[158px]" />
              </div>
              <div className=" flex items-center h-[10rem] min-[1440px]:h-[10rem] flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className=' animate-spin'>
                    {loading && <LoaderIcon width={30} height={30}></LoaderIcon>}</span>
                  Iniciar Sesión
                </button>
                <Link className="w-full h-[30%] py-2 text-[#E08733] border-2 text-center border-[#E08733] rounded-md  hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" to={"/signup"}>
                  Registrarme
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
