import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';


export const PublicRoute = () => {
  const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <Navigate to="/dashboard"/> : <Outlet />;
};
