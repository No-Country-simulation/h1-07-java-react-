import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationRequest, AuthTokens, tokenData} from "../../Interfaces/interfaces";
import { useAuthContext } from "../../Context/AuthContext";
import { jwtDecode } from "jwt-decode";
import { API_URL } from "../../api/api";
import { toast } from "sonner";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialValuesLogin } from "../../data/data";
import * as Yup from 'yup';
import { ClosePasswordIcon, EmailIcon, LoaderIcon, LockIcon, OpenPasswordIcon } from "../../components/icons/Icons";

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener mas de 6 caracteres')
    .required('La contraseña es obligatoria'),
});

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  //falta agregar una validacion
  const handleSubmitLogin = async (values: AuthenticationRequest) => {
    setLoading(true);
    // console.log(values)
    try {
      const res = await fetch(`${API_URL}/auth/autenticar`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      const data = await res.json()

      if (data.businessErrorCode == 304) {
        toast.warning("La contraseña o usuario son incorrectos")
      }
      const token: string = data.token

      if (token) {
        const infoToken: tokenData = jwtDecode(token)

        const dataToken: AuthTokens = {
          token: token,
          email: infoToken.fullName,
          iat: infoToken.iat,
          exp: infoToken.exp,
          authorities: infoToken.authorities
        }
        login(dataToken)
      }

      if (res.status == 200) {
        return navigate("/dashboard")
      }

    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }

  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="flex min-h-screen bg-gray-100 md:flex md:justify-center  ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg  max-md:m-auto">
        <h2 className="text-[20px] font-[700] mb-[9px] mt-[1.5rem] text-gray-900 font-inter">Iniciar Sesión</h2>
        <p className="mb-[46px] text-[15px] text-[#948ABC]">Accede con la cuenta que registraste</p>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={validationSchema}
          onSubmit={handleSubmitLogin}>
          {({ isSubmitting }) => (
            <Form className=" flex flex-col gap-y-10">
              <div>
                <div className="flex flex-row items-center mb-1">
                  <EmailIcon width={16} height={16} />
                  <label htmlFor="email" className="block ml-2 text-[17px] font-bold font-inter text-gray-700">Correo</label>
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
                  <label htmlFor="password" className="block text-[17px] ml-2 font-bold font-inter text-gray-700">Contraseña</label>
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

                <p className="mt-1 text-end text-[#948ABC] cursor-pointer">¿Olvidaste tu contraseña?</p>
              </div>
              <div className="flex items-center justify-center h-[12rem]" >
                <img src="JustinaLogo.png" alt="" className="w-[200px] h-[158px]" />
              </div>

              <div className=" flex items-center h-[10rem] flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span className=' animate-spin'>{loading && <LoaderIcon width={30} height={30}></LoaderIcon>}  </span>Iniciar Sesión
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
