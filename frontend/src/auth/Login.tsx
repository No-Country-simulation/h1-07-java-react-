import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { RootObject } from "../Interfaces/interfaces";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center text-gray-900">Iniciar Sesión</h3>
        <form onSubmit={handleNavigation} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              id="username"
              placeholder="Correo Electrónico"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>

          </div>
        </form>
        <Link to={"/singup"}>
          <button className="w-full py-2 mt-2 text-white bg-green-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Registrate
          </button>
        </Link>
      </div>
    </div>
  );
};
