import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const PrivateRoute = () => {
  const { isLoggedIn } = useAuthContext();
  console.log(isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;