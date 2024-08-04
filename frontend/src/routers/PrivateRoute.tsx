import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

interface PrivateRouteProps {
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { isLoggedIn, roles } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const hasAccess = roles.some((role) => allowedRoles.includes(role));

  return hasAccess ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
