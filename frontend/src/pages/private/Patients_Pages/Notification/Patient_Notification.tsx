import { Link } from "react-router-dom";
import { EstudioIconTwo, EstudioPatientIcon, FlechaIconTwo, HistoryClinicIcon, NewMedicationIcon, ScannerPatientsIcon } from "../../../../../public/icons/Icons";


export function Patient_Notification(): JSX.Element {
    return (

        <main>
            <Link to={"/patient-home"}>
                <section className="flex flex-row h-[5rem] items-center hover:translate-y-1 duration-200">
                    <FlechaIconTwo width={36} height={36} stroke="#000000" classname="ml-10" />
                </section>
            </Link>

            <section className="flex flex-col items-center">
                <div className="flex flex-row items-center mt-4 bg-gray-300 w-[90%] rounded-xl py-2">
                    <div className="ml-5">
                        <NewMedicationIcon width={35} height={35} stroke="" />
                    </div>
                    <h3 className="font-inter font-bold ml-5 w-[65%]">Recordatorio: confirma tu asistencia a tu próxima cita </h3>
                </div>
                <div className="flex flex-row items-center mt-4 bg-gray-300 w-[90%] rounded-xl py-2">
                    <div className="ml-5">
                        <HistoryClinicIcon width={35} height={35} stroke="" />
                    </div>
                    <h3 className="font-inter font-bold ml-5 w-[65%]">Dr. Ortega ha actualizado tu historial médico</h3>
                </div>
                <div className="flex flex-row items-center mt-4 bg-gray-300 w-[90%] rounded-xl py-2">
                    <div className="ml-5">
                        <EstudioIconTwo width={35} height={35} stroke="" />
                    </div>
                    <h3 className="font-inter font-bold ml-5 w-[65%]">Dr. Ortega te ha indicado nuevos estudios </h3>
                </div>
                <div className="flex flex-row items-center mt-4 bg-gray-300 w-[90%] rounded-xl py-2">
                    <div className="ml-5">
                        <HistoryClinicIcon width={35} height={35} stroke="" />
                    </div>
                    <h3 className="font-inter font-bold ml-5 w-[65%]">Dr. Ortega ha actualizado tu historial médico</h3>
                </div>
                <div className="flex flex-row items-center mt-4 bg-gray-300 w-[90%] rounded-xl py-2">
                    <div className="ml-5">
                        <ScannerPatientsIcon width={35} height={35} stroke="" />
                    </div>
                    <h3 className="font-inter font-bold ml-5 w-[65%]">Dr. Ortega te ha indicado nuevos estudios</h3>
                </div>
            </section>
        </main>

    )
}