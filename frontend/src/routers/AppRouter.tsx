import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Toaster } from "sonner";
import { ErrorPage } from "../pages/NotFound/ErrorPage";
import { LoginPage } from "../pages/Login/Login";
import { Onboarding } from "../pages/OnBoarding/OnBoarding";
import SignUp from "../pages/signup/SignUp";
import { Landing } from "../pages/landing/Landing";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import { AuthContextProvider } from "../Context/AuthContext";
import { RoutesWithNotFound } from "./RoutesWithNotFound";
import { Home } from "../pages/private/Dashboard/Home/Home";
import { Detalle } from "../pages/private/Dashboard/Detalle/Detalle";
import { UserInfo } from "../pages/private/Dashboard/UserInfo/UserInfo";
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