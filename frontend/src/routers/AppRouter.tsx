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
import { RegisterPatient } from "../pages/private/RegisterPatient/RegisterPatient";
import { TreatmentPatient } from "../pages/private/Dashboard/Treatment/Treatment-patient";
import PatientList from "../pages/private/Dashboard/PatientsList/PatientList";
import PatientDetail from "../pages/private/Dashboard/Patient-Detail/PatientDetail";
import { Home_Patients } from "../pages/private/Dashboard/Patients_Pages/Home/Home_Patients";
import { Landing } from "../pages/Landing/Landing";
import { ActiveAccount } from "../pages/Active-account/ActiveAccount";
import SignUp from "../pages/SignUp/SignUp";

function AppRouter() {

	return (
		<>
			<AuthContextProvider>
				<BrowserRouter>
					<RoutesWithNotFound>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/onboarding" element={<Onboarding />} />
						<Route index path="/" element={<Landing />} />
						<Route path="/active-account" element={<ActiveAccount />}></Route>
						<Route element={<PrivateRoute allowedRoles={["ROLE_MEDICO"]} />}>
							<Route path="/dashboard" index element={<Home />} />
							<Route path="/detalle" element={<Detalle />} />
							<Route path="/userInfo" element={<UserInfo />} />
							<Route path="/patient-register" element={<RegisterPatient />}></Route>
							<Route path="/patient-list" element={<PatientList />}></Route>
							<Route path="/patient/:id" element={<PatientDetail />} />
							<Route path="/patient/:id/treatment" element={<TreatmentPatient />}>
							</Route>
						</Route>
						<Route element={<PrivateRoute allowedRoles={["ROLE_PACIENTE"]} />}>
							<Route path="/patient-home" element={<Home_Patients />} />
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