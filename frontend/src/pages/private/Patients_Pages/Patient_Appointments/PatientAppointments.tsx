import { RelojIcon } from "../../../../../public/icons/Icons";
import { PopoverMessage } from "../../../../components/PopoverMessage";
import { Calendar } from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";

const data = [
  {
    name: "Dra. Peters",
    specialty: "Nutriologa",
    image: "IMG_PATIENTS/IMG_PATIENS_MEDICO_1.webp",
    date: "01/08/2024",
    time: "10:00 AM"
  },
  {
    name: "Dr. Smith",
    specialty: "Cardiólogo",
    image: "IMG_PATIENTS/IMG_PATIENS_MEDICO_2.webp",
    date: "02/08/2024",
    time: "11:30 AM"
  },
]


export function PatientAppointments() {
  return (
    <main className="container mx-auto ">
      <div className="max-w-screen-xl mx-auto min-h-screen">
        <section className="px-32 max-lg:px-16 max-md:px-8 mt-8 ">
          <h1 className="font-bold font-inter text-2xl mb-4">Agendar Cita</h1>
          <div className="w-full m-auto flex items-center justify-center">
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              color="warning"
              visibleMonths={3} 
              className=""
            />
          </div>
        </section>
        <section className="justify-center flex flex-col font-inter mt-5 px-32 max-lg:px-16 max-md:px-8  w-full">
          <h3 className="font-bold font-inter text-1xl">
            Tú Próxima Cita
          </h3>
          <div className=" grid grid-cols-2 gap-2 max-md:grid-cols-1 ">
            {data.map((datas) => (
              <div className="flex bg-light-color shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex-col  mt-4 p-3  w-full  border-1 border-solid border-gray-400 rounded-xl mb-4">
                <div className=" flex justify-center flex-col items-center">
                  <div className="flex flex-row ">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-inter font-bold ">
                        {datas.name}
                      </h3>
                      <p className="font-inter text-gray-400 ">{datas.specialty}</p>
                    </div>
                    <img
                      src={datas.image}
                      className="rounded-full ml-20 w-16 h-16"
                      alt=""
                    />
                  </div>
                  {/* </Link> */}
                  <div className="flex flex-row items-center">
                    <RelojIcon width={16} height={16} stroke="" />
                    <div className="flex flex-col ml-4">
                      <p className="font-inter font-semibold">{datas.date}</p>
                      <p className="font-inter font-semibold">{datas.time}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-x-5 mt-5 mb-5">
                  <PopoverMessage
                    locate={"top"}
                    title={"Funcionalidad en Desarrollo"}
                    content={
                      "Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!"
                    }
                    color={"primary"}
                  >
                    <button className="px-6 py-3 font-inter bg-[#8a8d9e] rounded-md">
                      Reagendar
                    </button>
                  </PopoverMessage>
                  <PopoverMessage
                    locate={"top"}
                    title={"Funcionalidad en Desarrollo"}
                    content={
                      "Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!"
                    }
                    color={"primary"}
                  >
                    <button className="px-6 py-3  font-inter text-white bg-[#D98236] rounded-md">
                      Confirmar
                    </button>
                  </PopoverMessage>
                </div>
              </div>
            ))

            }

          </div>
        </section>
      </div>
    </main>
  );
}
