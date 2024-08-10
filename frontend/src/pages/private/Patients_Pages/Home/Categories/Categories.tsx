import { Link } from 'react-router-dom'
import {
  CoraIcon,
  EjericioIcon,
  HistorialIcon,
  MentalIcon,
  NutricionIcon,
  TratamientoIcon,
  TurneraIcon,
} from "../../../../../../public/icons/Icons";

const patientOptions = [
  {
    to: "/treatement",
    icon: <TratamientoIcon width={60} height={60} />,
    label: "Tratamientos",
    bgColor: "bg-[#0BF1FC]",
  },
  {
    to: "/history",
    icon: <HistorialIcon width={60} height={60} />,
    label: "Historia Clínica",
    bgColor: "bg-[#398894]",
  },
  {
    to: "/chat-cora",
    icon: <CoraIcon width={60} height={60} />,
    label: "Chat Cora",
    bgColor: "bg-[#C769B4]",

  },
  {
    to: "/shift",
    icon: <TurneraIcon width={60} height={60} />,
    label: "Citas",
    bgColor: "bg-[#FDEEA3]",

  },
  {
    to: "/exercises",
    icon: <EjericioIcon width={60} height={60} />,
    label: "Ejercicio",
    bgColor: "bg-[#C7FBA4]",

  },
  {
    to: "/mental",
    icon: <MentalIcon width={60} height={60} />,
    label: "Salud Mental",
    bgColor: "bg-[#FFD0D0]",

  },
  {
    to: "/nutrition",
    icon: <NutricionIcon width={60} height={60} />,
    label: "Nutrición",
    bgColor: "bg-[#CB7A4B]",
  },
];

export default function Categories() {
  return (
    <section className=" px-32 max-lg:px-16 max-md:px-8 ">
      <div className=" py-6 w-full ">
        <h3 className="font-bold font-inter text-2xl text-light-color">Categorías</h3>
      </div>
      <div className=" py-2 grid grid-cols-3 max-xl:grid-cols-2  max-md:grid-cols-1  gap-y-4 gap-x-8">
        {patientOptions.map((option, index) => (
          <Link to={option.to} key={index} className=''>
            <div className={`${option.bgColor} hover:brightness-90 cursor-pointer shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)]  hover:scale-105 transition-all duration-300 border-gray-400 w-full text-center flex flex-col justify-center items-center h-32 rounded-md  `}>
              <span>{option.icon}</span>
              <p className="mt-1 font-semibold">{option.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
