import { Link } from 'react-router-dom'
import { CampanaIcon, MenuHambuerguesa } from '../../../../../../public/icons/Icons'

export default function Header({ toggleSidebar, nombre, apellido, especialidad }: { toggleSidebar: () => void, nombre: string | undefined, apellido: string | undefined, especialidad: string | undefined }) {
  return (
    <header className="flex shadow-2xl flex-col justify-between h-[9.7rem] mb-4 relative  w-[100%] bg-[#D9D9D9]  rounded-br-[3rem] bg-gradient-to-r from-indigo-300 to-indigo-500">
      <div className="flex  items-center pt-4   justify-between">
        <Link to={"/userInfo"}>
          <div className=" ml-2 rounded-full flex flex-row items-center content-center justify-between">
            <img
              src="IMG_MEDICO/IMG_MEDICO.webp"
              className="ml-2"
              alt=""
              width={56}
              height={58}
            />

          </div>
        </Link>
        <h1 className=" text-2xl font-inter font-bold text-white">
          Buenos días
        </h1>
        <div className="relative right-7 flex flex-row gap-2">
          <CampanaIcon width={24} height={24} stroke="" />
          <button onClick={toggleSidebar}>
            <MenuHambuerguesa width={24} height={24} stroke="" />
          </button>
        </div>

      </div>
      <div className=" m-auto text-center">
        <p className="font-inter font-bold text-white">
          Dr. {nombre} {apellido}
        </p>
        <p className="ont-bold text-white">Especialidad {especialidad}</p>
      </div>

    </header>
  )
}
