import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Toaster } from "sonner";
import { ErrorPage } from "../pages/NotFound/ErrorPage";
import { LoginPage } from "../pages/Login/Login";
import { Onboarding } from "../pages/OnBoarding/OnBoarding";
import { AuthContextProvider } from "../Context/AuthContext";
import { RoutesWithNotFound } from "./RoutesWithNotFound";
import { Home } from "../pages/private/Dashboard/Home/Home";
import { Detalle } from "../pages/private/Dashboard/Detalle/Detalle";
import { UserInfo } from "../pages/private/Dashboard/UserInfo/UserInfo";
import { ActiveAccount } from "../pages/Active-account/ActiveAccount";
import { Landing } from "../pages/Landing/Landing";
import SignUp from "../pages/SignUp/SignUp";
import { RegisterPatient } from "../pages/private/RegisterPatient/RegisterPatient";
function AppRouter() {

	return (
		<>
			<AuthContextProvider>
				<BrowserRouter>
					<RoutesWithNotFound>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/onboarding" element={<Onboarding />} />
						<Route path="/" element={<Landing />}></Route>
						<Route path="/active-account" element={<ActiveAccount />}></Route>
						<Route element={<PrivateRoute />}>
							<Route path="/dashboard" index element={<Home />} />
							<Route path="/detalle" element={<Detalle />}/>
							<Route path="/userInfo" element={<UserInfo />}/>
							<Route path="/register-patient" element={<RegisterPatient/>}></Route>
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