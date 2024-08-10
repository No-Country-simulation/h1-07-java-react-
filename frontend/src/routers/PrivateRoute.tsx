import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

interface PrivateRouteProps {
  allowedRoles: string[];
}


const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const { isLoggedIn, roles } = useAuthContext();


  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  console.log(allowedRoles)
  console.log(roles)

  const hasAccess = roles.some((role) => allowedRoles.includes(role));

  if(roles.includes("ROLE_ADMIN") && !hasAccess) {
    return <Navigate to="/admin_page" />
  }
  
  return hasAccess ? <Outlet /> : <Navigate to="/patient-home" />;
};

export default PrivateRoute;