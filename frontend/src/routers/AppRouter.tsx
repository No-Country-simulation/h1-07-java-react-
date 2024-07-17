import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../Context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { Dashboard } from "../page/Dashboard";
import { ErrorPage } from "../page/ErrorPage";
import { Landing } from "../pages/landing/Landing";
import { LoginPage } from "../Auth/Login";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import { Toaster } from "sonner";
import SignUp from "../pages/signup/SignUp";
import { Onboarding } from "../page/OnBoarding/OnBoarding";


function AppRouter() {
	return (
		<>
			<AuthContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<PublicRoute />}>
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<SignUp />} />
							<Route index path="/" element={<Landing  />}></Route>
							<Route path="/onboarding" element={<Onboarding />} />
							<Route path="/active-account" element={<ActiveAccount></ActiveAccount>}></Route>
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