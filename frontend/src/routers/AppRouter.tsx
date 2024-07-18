import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Toaster } from "sonner";
import { ErrorPage } from "../pages/NotFound/ErrorPage";
import { LoginPage } from "../pages/Login/Login";
import { Onboarding } from "../pages/OnBoarding/OnBoarding";
import SignUp from "../pages/SignUp/SignUp";
import { Landing } from "../pages/Landing/Landing";
import { ActiveAccount } from "../pages/Active-account/ActiveAccount";
import { AuthContextProvider } from "../Context/AuthContext";
import { Dashboard } from "../pages/private/Dashboard/Dashboard";
import { RoutesWithNotFound } from "./RoutesWithNotFound";
import { RegisterPatient } from "../pages/private/RegisterPatient/RegisterPatient";
function AppRouter() {

	return (
		<>
			<AuthContextProvider>
				<BrowserRouter>
					<RoutesWithNotFound>
						<Route path="/" element={<p>hola</p>} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/onboarding" element={<Onboarding />} />
						<Route path="/landing" element={<Landing />}></Route>
						<Route path="/active-account" element={<ActiveAccount />}></Route>
						<Route element={<PrivateRoute />}>
							<Route path="/dashboard" index element={<Dashboard />} />
							<Route path="/dashboard/register-patient" element={<RegisterPatient/>}></Route>
						</Route>
						<Route path="*" element={<ErrorPage />} />
					</RoutesWithNotFound>
				</BrowserRouter>
			</AuthContextProvider>
			<Toaster richColors></Toaster>
		</>
	);
}

export default AppRouter;