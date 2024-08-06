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
import { UserInfo } from "../pages/private/Medic_Pages/UserInfo/UserInfo";
import { RegisterPatient } from "../pages/private/Medic_Pages/RegisterPatient/RegisterPatient";
import PatientList from "../pages/private/Medic_Pages/PatientsList/PatientList";
// import PatientDetail from "../pages/private/Medic_Pages/Patient-Detail/PatientDetail";
// import { TreatmentPatient } from "../pages/private/Medic_Pages/Treatment/Treatment-patient";
// import DeviceDetection from "../pages/DeviceDetection/DeviceDetection";
import { PatientAppointments } from "../pages/private/Patients_Pages/Patient_Appointments/PatientAppointments";
import { Medic_Appointment } from "../pages/private/Patients_Pages/Medic_Appointment/Medic_Appointment";
// import Donations from "../pages/private/Medic_Pages/Donations/Donations";
import Chat from "../pages/private/Patients_Pages/Chat-Cora/Chat";
import { ProfilePatient } from "../pages/private/Patients_Pages/Profile/ProfilePatient";
import TreatementPatient from "../pages/private/Patients_Pages/Treatement/TreatementPatient";
import History from "../pages/private/Patients_Pages/HistoryClinic/History";
import { Donation_Registre } from "../pages/private/Medic_Pages/Donations/Donation_Registre/Donation_Registre";
import LandingView from "../pages/landing/LandingView";
import PatientDetail from "../pages/private/Medic_Pages/Patient-Detail/PatientDetail";
import Adherence from "../pages/private/Medic_Pages/Adherence/Adherence";
import TreatmentAdherence from "../pages/private/Medic_Pages/Adherence/TreatmentAdherence/TreatmentAdherence";
import { TreatmentPatient } from "../pages/private/Medic_Pages/Treatment/Treatment-patient";
import Donations from "../pages/private/Medic_Pages/Donations/Donation_Home/Donations";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import SignUp from "../pages/signup/SignUp";
import { Patient_Notification } from "../pages/private/Patients_Pages/Notification/Patient_Notification";
import { HomeView } from "../pages/private/Patients_Pages/Home/HomeView";

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
            <Route index path="/" element={<LandingView />} />
            <Route path="/active-account" element={<ActiveAccount />} />
            <Route element={<PrivateRoute allowedRoles={["ROLE_MEDICO"]} />}>
              <Route path="/dashboard" index element={<Home />} />
              <Route path="/userInfo" element={<UserInfo />} />
              <Route
                path="/patient-register"
                element={<RegisterPatient />}
              ></Route>
              <Route path="/patient-list" element={<PatientList />}></Route>
              <Route path="/patient/:id" element={<PatientDetail />} />
              <Route path="/patient/:id/adherence" element={<Adherence />} />
              <Route
                path="/patient/:id/adherence/:idTratamiento"
                element={<TreatmentAdherence />}
              />
              <Route
                path="/patient/:id/treatment"
                element={<TreatmentPatient />}
              />
              <Route path="/donations" element={<Donations />} />
              <Route path="/donationRegistre" element={<Donation_Registre />} />
            </Route>
            <Route element={<PrivateRoute allowedRoles={["ROLE_PACIENTE"]} />}>
              <Route path="/patient-home" element={<HomeView />} />
              <Route path="/profile" element={<ProfilePatient />} />
              <Route path="/treatement" element={<TreatementPatient />} />
              <Route path="/history" element={<History />} />
              <Route path="/chat-cora" element={<Chat></Chat>}></Route>
              <Route path="/notification" element={<Patient_Notification />} />
              <Route path="/citas" element={<PatientAppointments />} />
              <Route
                path="/Medic_Appointment"
                element={<Medic_Appointment />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </RoutesWithNotFound>
        </BrowserRouter>
        <Toaster richColors></Toaster>
      </AuthContextProvider>
    </>
  );
}

export default AppRouter;
