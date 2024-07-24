import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { isLoggedIn, roles } = useAuthContext();

  // Verificar si el usuario está autenticado
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // Verificar si el rol del usuario está en la lista de roles permitidos
  const hasAccess = roles.some(role => allowedRoles.includes(role));

  return hasAccess ? <Outlet /> : <Navigate to="/patient-home" />;
};

export default PrivateRoute;




/* import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const PrivateRoute: React.FC = () => {

  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute; */