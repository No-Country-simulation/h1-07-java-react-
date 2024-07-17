import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../Context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Toaster } from "sonner";
import SignUp from "../pages/signup/SignUp";
import { Landing } from "../pages/landing/Landing";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import { ErrorPage } from "../pages/NotFound/ErrorPage";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { LoginPage } from "../pages/Login/Login";
import { Onboarding } from "../pages/OnBoarding/OnBoarding";

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
							<Route path="/landing" element={<Landing />}></Route>
							<Route path="/active-account" element={<ActiveAccount />}></Route>
						</Route>
						<Route path="/dashboard" element={<PrivateRoute />}>
							<Route index element={<Dashboard />} />
							{/* <Route path="/dashboard/clients" element={<Clients />} /> */}
							{/* <Route path="/dashboard/provider" element={<Provider />} /> */}
							{/* <Route path="/dashboard/products" element={<Products />} /> */}
							{/* <Route path="/dashboard/users" element={<Users></Users>} /> */}
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