import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../Context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Toaster } from "sonner";
import SignUp from "../pages/signup/SignUp";
import { Landing } from "../pages/landing/Landing";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import { ErrorPage } from "../pages/NotFound/ErrorPage";
import { LoginPage } from "../pages/Login/Login";
import { Onboarding } from "../pages/OnBoarding/OnBoarding";
import { Home } from "../pages/Dashboard/Home/Home";
import { UserInfo } from "../pages/Dashboard/UserInfo/UserInfo";
import { Detalle } from "../pages/Dashboard/Detalle/Detalle";

function AppRouter() {
	return (
		<>
			<AuthContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PublicRoute />}>
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="onboarding" element={<Onboarding />} />
							<Route index path="/" element={<Landing />}></Route>
							<Route path="/active-account" element={<ActiveAccount />}></Route>
						</Route>
						<Route path="/dashboard" element={<PrivateRoute />}>
							<Route index element={<Home />} />
							<Route path="user-info" element={<UserInfo />} />
							<Route path="detalle" element={<Detalle />} />
						</Route>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</BrowserRouter>
			</AuthContextProvider>
			<Toaster richColors></Toaster>
		</>
	);
}

export default AppRouter;