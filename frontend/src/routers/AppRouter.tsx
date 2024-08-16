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
import { PatientAppointments } from "../pages/private/Patients_Pages/Patient_Appointments/PatientAppointments";
import Chat from "../pages/private/Patients_Pages/Chat-Cora/Chat";
import { ProfilePatient } from "../pages/private/Patients_Pages/Profile/ProfilePatient";
import TreatementPatient from "../pages/private/Patients_Pages/Treatement/TreatementPatient";
import History from "../pages/private/Patients_Pages/HistoryClinic/History";
import { Donation_Registre } from "../pages/private/Medic_Pages/Donations/Donation_Registre/Donation_Registre";
import LandingView from "../pages/landing/LandingView";
import PatientDetail from "../pages/private/Medic_Pages/Patient-Detail/PatientDetail";
import Adherence from "../pages/private/Medic_Pages/Adherence/Adherence";
import TreatmentAdherence from "../pages/private/Medic_Pages/Adherence/TreatmentAdherence/TreatmentAdherence";
import Donations from "../pages/private/Medic_Pages/Donations/Donation_Home/Donations";
import { ActiveAccount } from "../pages/active-account/ActiveAccount";
import SignUp from "../pages/signup/SignUp";
import { Patient_Notification } from "../pages/private/Patients_Pages/Notification/Patient_Notification";
import { HomeView } from "../pages/private/Patients_Pages/Home/HomeView";
import Donation_Detail from "../pages/private/Medic_Pages/Donations/Donation_Detail/Donation_Detail";
import HeaderLayout from "../components/HeaderLayout";
import Exercises from "../pages/private/Patients_Pages/Exercises/Exercises";
import Mental from "../pages/private/Patients_Pages/Mental/Mental";
import Nutrition from "../pages/private/Patients_Pages/Nutrition/Nutrition";
import { Home_Admin } from "../pages/private/Admin/Home/Home_Admin";
// import { Hospitals_Registre } from "../pages/private/Admin/Hospital_Registro/Hospital_Registre";
import { RegisterTreatmentView } from "../pages/private/Medic_Pages/RegisterTreatment/RegisterTreatmentView";
import { User_Admin } from "../pages/private/Admin/User_Admin/User_Admin";
import { Adherencia_Admin } from "../pages/private/Admin/Adherencias_Admin/Adherencias_Admin";
import { AdherenciaGrafica_Admin } from "../components/Components_Admin/AdherenciaGrafic_Admin/AdherenciaGrafic_Admin";

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
              <Route path="/patient/:id/adherence/:idTratamiento" element={<TreatmentAdherence />} />
              <Route path="/patient/:id/treatment-register" element={<RegisterTreatmentView />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/donationRegistre" element={<Donation_Registre />} />
              <Route path="/donationDetail/:id" element={<Donation_Detail />} />
            </Route >
            <Route element={<PrivateRoute allowedRoles={["ROLE_PACIENTE"]} />}>
              <Route path="/patient-home" element={<HomeView />} />
              <Route path="/chat-cora" element={<Chat></Chat>}></Route>
              <Route element={<HeaderLayout />}>
                <Route path="/profile" element={<ProfilePatient />} />
                <Route path="/treatement" element={<TreatementPatient />} />
                <Route path="/history" element={<History />} />
                <Route path="/notification" element={<Patient_Notification />} />
                <Route path="/shift" element={<PatientAppointments />} />
                <Route path="/exercises" element={<Exercises />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/mental" element={<Mental />} />
              </Route>
            </Route>
            <Route element={<PrivateRoute allowedRoles={['ROLE_ADMIN']} />}>
              <Route path="/admin_page" element={<Home_Admin />} />
             <Route path="/user_admin" element={<User_Admin />} />
             <Route path="/adherencias_admin" element={<Adherencia_Admin />} />
             <Route path="/adherenciasGrafic_admin" element={<AdherenciaGrafica_Admin />}/>
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
