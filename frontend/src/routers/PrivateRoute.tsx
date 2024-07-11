import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={"/"} />;
    }
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default PrivateRoute;