import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Toaster } from "sonner";
import { ErrorPage } from "../pages/NotFound/ErrorPage";
import { LoginPage } from "../pages/Login/Login";
import { Onboarding } from "../pages/OnBoarding/OnBoarding";
import { AuthContextProvider } from "../Context/AuthContext";
import { RoutesWithNotFound } from "./RoutesWithNotFound";
import { PublicRoute } from "./PublicRoute";
import { Home } from "../pages/private/Medic_Pages/Home/Home";
import { Detalle } from "../pages/private/Medic_Pages/Detalle/Detalle";
import { UserInfo } from "../pages/private/Medic_Pages/UserInfo/UserInfo";
import { RegisterPatient } from "../pages/private/Medic_Pages/RegisterPatient/RegisterPatient";
import PatientList from "../pages/private/Medic_Pages/PatientsList/PatientList";
import PatientDetail from "../pages/private/Medic_Pages/Patient-Detail/PatientDetail";
import { TreatmentPatient } from "../pages/private/Medic_Pages/Treatment/Treatment-patient";
import { Home_Patients } from "../pages/private/Patients_Pages/Home/Home_Patients";
// import DeviceDetection from "../pages/DeviceDetection/DeviceDetection";
import { Patient_Notification } from "../pages/private/Patients_Pages/Notification/Patient_Notification";
import { PatientAppointments } from "../pages/private/Patients_Pages/Patient_Appointments/PatientAppointments";
import { Medic_Appointment } from "../pages/private/Patients_Pages/Medic_Appointment/Medic_Appointment";
import { UserInfo_Patients } from "../pages/private/Patients_Pages/UserInfo_Patients/UserInfo_Patients";
import Chat from "../pages/private/Patients_Pages/Chat-Cora/Chat";
import SignUp from "../pages/signup/SignUp";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import Donations from "../pages/private/Medic_Pages/Home/Donations/Donations";
import LandingView from "../pages/landing/LandingView";

function AppRouter() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route element={<PublicRoute />}>
              {/* <Route element={<DeviceDetection />} > */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/onboarding" element={<Onboarding />} />
            </Route>
            {/* </Route> */}

            <Route path="/active-account" element={<ActiveAccount />}></Route>
            <Route element={<PrivateRoute allowedRoles={["ROLE_MEDICO"]} />}>
              <Route path="/dashboard" index element={<Home />} />
              <Route path="/detalle" element={<Detalle />} />
              <Route path="/userInfo" element={<UserInfo />} />
              <Route
                path="/patient-register"
                element={<RegisterPatient />}
              ></Route>
              <Route path="/patient-list" element={<PatientList />}></Route>
              <Route path="/patient/:id" element={<PatientDetail />} />
              <Route
                path="/patient/:id/treatment"
                element={<TreatmentPatient />}
              />
              <Route path="/donations" element={<Donations />} />
            </Route>
            <Route element={<PrivateRoute allowedRoles={["ROLE_PACIENTE"]} />}>
              <Route path="/patient-home" element={<Home_Patients />} />
              <Route
                path="/user-info-patient"
                element={<UserInfo_Patients />}
              />
              <Route path="/chat-cora" element={<Chat></Chat>}></Route>
              <Route path="/notification" element={<Patient_Notification />} />
              <Route path="/citas" element={<PatientAppointments />} />
              <Route
                path="/Medic_Appointment"
                element={<Medic_Appointment />}
              />
            </Route>
            <Route path="/" element={<LandingView />} />
            <Route path="*" element={<ErrorPage />} />
          </RoutesWithNotFound>
        </BrowserRouter>
      </AuthContextProvider>
      <Toaster richColors></Toaster>
    </>
  );
}

export default AppRouter;
