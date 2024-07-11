import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const PublicRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    
    return <Navigate to={"/dashboard"} />;
  }


  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;