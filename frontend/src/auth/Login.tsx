import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { RootObject } from "../Interfaces/interfaces";
import { ClosePasswordIcon, EmailIcon, LockIcon, OpenPasswordIcon } from "../components/icons/Icons";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      const user: RootObject = {
        user: {
          id: 1,
          nombre: "Admin",
          email: username,
          rol_id: 1,
        },
        token: "fake-jwt-token",
      };
      login(user);
      navigate("/dashboard");
    } else {
      alert("Email o Contraseña incorrecta");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="flex min-h-screen bg-gray-100 md:flex md:justify-center md:bg-black ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg md:bg-black max-md:m-auto">
        <h2 className="text-[20px] font-[700] mb-[9px] mt-[1.5rem] text-gray-900 font-inter">Iniciar Sesión</h2>
        <p className="mb-[46px] text-[15px] text-[#948ABC]">Accede con la cuenta que Registrate</p>
        <form onSubmit={handleNavigation} className="space-y-4">
          <div>
            <div className="flex flex-row items-center mb-1">
              <EmailIcon width={16} height={16} />
              <label htmlFor="username" className="block ml-2 text-[17px] font-bold font-inter text-gray-700">Correo</label>
            </div>
            <input
              id="username"
              placeholder="Ej: tumail@mailito.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-10">
            <div className="flex flex-row items-center mb-1">
              <LockIcon width={16} height={16} />
              <label htmlFor="password" className="block text-[17px] ml-2 font-bold font-inter text-gray-700">Contraseña</label>
            </div>
            <div className="flex items-center relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Introduzca contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <button type="button" onClick={togglePasswordVisibility} className="absolute right-[1rem]">
                {showPassword ? <ClosePasswordIcon width={16} height={16} /> : <OpenPasswordIcon width={16} height={16} />}
              </button>
            </div>
            <p className="mt-1 text-end text-[#948ABC] cursor-pointer">¿Olvidaste tu contraseña?</p>
          </div>

          <div className="flex items-center justify-center h-[12rem]" >
            <img src="JustinaLogo.png" alt="" className="w-[200px] h-[158px]" />
          </div>
          <div className=" flex items-center h-[10rem] ">
            <button
              type="submit"
              className="w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
