import { Link } from 'react-router-dom'
import {
  CaledarIcon,
  CampanaNotificIcon,
  HistoryIconThree,
  MenssageIconCora,
  TratamentIconTwo,
  UserIcon,
} from "../../../../../../public/icons/Icons";

const patientOptions = [
  {
    to: "/treatement",
    icon: <TratamentIconTwo width={45} height={45} />,
    label: "Tratamientos",
  },
  {
    to: "/history",
    icon: <HistoryIconThree width={45} height={45} />,
    label: "Historia Clínica",
  },
  {
    to: "/chat-cora",
    icon: <MenssageIconCora width={45} height={45} />,
    label: "Chat Cora",
  },
  {
    to: "/shift",
    icon: <CaledarIcon width={45} height={45} />,
    label: "Citas",
  },
  {
    to: "/profile",
    icon: <UserIcon width={45} height={45} />,
    label: "Mi perfil",
  },
  {
    to: "/notification",
    icon: <CampanaNotificIcon stroke='#948ABC' width={45} height={45} />,
    label: "Notificaciones",
  },
];

export default function Categories() {
  return (
    <section className=" px-32 max-lg:px-16 max-md:px-8 ">
      <div className="mt-10 w-full ">
        <h3 className="font-bold font-inter text-2xl">Categorías</h3>
      </div>
      <div className=" py-2 grid grid-cols-3 max-xl:grid-cols-2  max-md:grid-cols-1  gap-y-4 gap-x-8">
        {patientOptions.map((option, index) => (
          <Link to={option.to} key={index} className=''>
            <div className=" border-1 hover:brightness-90 cursor-pointer hover:scale-105 transition-all duration-300 border-gray-400 w-full text-center flex flex-col justify-center items-center h-32 rounded-md bg-gray-200 ">
              <span>{option.icon}</span>
              <p className="mt-1 font-semibold">{option.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
