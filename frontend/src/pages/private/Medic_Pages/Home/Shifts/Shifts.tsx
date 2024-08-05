import {
  ArrowBlackIcon,
  CalendarIcon,
  LapizIcon,
  RelojIcon,
} from "../../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { PopoverMessage } from "../../../../../components/PopoverMessage";

export default function Shifts() {
  return (
    <>
      <section className="flex flex-row justify-evenly">
        <div className="rounded-lg py-1 px-3 shadow-md bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]">
          <Link to={"/patient-register"}>
            <button>Añadir nuevo paciente</button>
          </Link>
        </div>
        <div className="rounded-lg py-1 shadow-md px-3 bg-[#5761C8] text-white text-[14px] border-1 border-solid border-[#948ABC]">
          <Link to={"/patient-list"}>
            <button>Lista de pacientes</button>
          </Link>
        </div>
      </section>
      <section className="relative mb-10 flex flex-col justify-center border-violet-color p-6 mt-5 rounded-lg h-[9.5rem] border-1 border-solid shadow-2xl">
        <div className="flex  mb-2 flex-row justify-between items-center ">
          <h2 className="text-md font-semibold text-[#3D4DA5]">
            Siguiente cita programada
          </h2>
          <span className=" cursor-pointer">
            <ArrowBlackIcon width={16} height={16} stroke="#111" />
          </span>
        </div>
        <div className="flex mb-2  items-center justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row items-center mt-1 ">
              <CalendarIcon width={15} height={15} stroke="" />
              <p className="font-inter text-black font-[500] ml-4 text-sm">
                20 Julio 2024
              </p>
            </div>
            <div className="flex flex-row items-center mt-[15px]">
              <RelojIcon width={15} height={15} stroke="" />
              <p className=" font-inter font-[500] text-black ml-4 text-sm ">
                10:00-11:00 AM
              </p>
            </div>
          </div>
          <div className=" cursor-pointer">
            <LapizIcon width={16} height={16} stroke="" classname="" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <PopoverMessage
            locate={"top"}
            title={"Funcionalidad en Desarrollo"}
            content={
              "Esta función está actualmente en desarrollo. ¡Gracias por tu paciencia y comprensión!"
            }
            color={"primary"}
          >
            <button className=" hover:scale-105 transition-all duration-300 absolute -bottom-12 z-0  text-inter text-white font-[600] rounded-[8px]   bg-[#5761C8] px-[60px] py-[9.1px] text-sm mt-5">
              Ver detalles
            </button>
          </PopoverMessage>
        </div>
      </section>
    </>
  );
}
