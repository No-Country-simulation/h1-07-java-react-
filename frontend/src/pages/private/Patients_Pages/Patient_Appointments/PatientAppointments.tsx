import { CaledarIcon, FlechaIconTwo, RelojIcon } from "../../../../../public/icons/Icons"
import { Link } from "react-router-dom";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function PatientAppointments() {


    return (
        <main className="flex flex-col">
            <Link to={"/patient-home"}>
                <section className="flex flex-row items-center mt-6 mb-5 ">
                    <FlechaIconTwo width={30} height={30} stroke="#000000" classname="ml-12"/>
                    <h3 className="ml-20 font-inter font-bold">Citas</h3>
                </section>
            </Link>
            <section>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateCalendar />
                </LocalizationProvider>
            </section>
            <section className="flex justify-center font-inter px-2 ">
                <Link to={"/Medic_Appointment"}>
                    <div className="w-[100%]">
                        <div className="flex flex-col ml-2">
                            <h3 className="font-semibold text-lg text-gray-500 font-inter">Próxima Cita</h3>
                        </div>
                        <div className="flex flex-col mt-5 p-3 w-full border-1 border-solid border-gray-400 rounded-xl mb-10">
                            <div className="flex flex-row">
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-inter font-bold ">Dra. Peters</h3>
                                    <p className="font-inter text-gray-400 ">Nutriologa</p>
                                </div>
                                <img src="IMG_PATIENTS/IMG_PATIENS_MEDICO_1.webp" className="rounded-full ml-20 w-16 h-16" alt="" />
                            </div>
                            <div className="flex flex-row items-center">
                                <RelojIcon width={16} height={16} stroke=""/>
                                <div className="flex flex-col ml-4">
                                    <p className="font-inter font-semibold">01/08/2024</p>
                                    <p className="font-inter font-semibold">10:00 AM</p>
                                </div>
                            </div>
                            <div className="flex flex-row justify-center gap-x-5 mt-5 mb-5">
                                <button className="px-6 py-3  bg-[#8a8d9e] rounded-md">Reagendar</button>
                                <button className="px-6 py-3 text-white bg-[#D98236] rounded-md">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
            <h4 className="font-inter text-xl ml-5 mb-4 text-gray-400">Anteriores</h4>
            <section className="flex flex-col items-center mb-10">
                <div className="flex items-center flex-col py-3 bg-gray-300 w-[90%] rounded-xl mb-10">
                    <h2 className="font-inter font-semibold text-md text-gray-600 mb-4">Control de seguimiento</h2>
                    <div className="flex flex-row justify-evenly w-[80%] items-center">
                        <CaledarIcon width={36} height={36} stroke=""/>
                        <p>11/03/2024</p>
                        <p>Psicólogo</p>
                    </div>
                </div>
            </section>
        </main>
    )
}