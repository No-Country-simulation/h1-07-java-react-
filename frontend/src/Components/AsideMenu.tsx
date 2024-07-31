import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from './Logout'
import { ConfigurationIconSideMenu, HealthIcon, HomeIconTwo, MensaggeIcon, PeopleIcon, UserIcon, UserIconTwo2 } from '../../public/icons/Icons'
import { useAuthContext } from '../Context/AuthContext'

const menuItemsMedic = [
  { to: "/dashboard", icon: HomeIconTwo, label: "Inicio" },
  { to: "/patient-list", icon: PeopleIcon, label: "Pacientes" },
  { to: "/userInfo", icon: UserIcon, label: "Perfil" },
  { to: "/donations", icon: HealthIcon, label: "Donaciones" }
]

const menuItemsPacient = [
  { to: "/profile", icon: UserIconTwo2, label: "Mi Perfil" },
  { to: "/userInfo_Patien", icon: MensaggeIcon, label: "Mensajes" },
  { to: "/userInfo_Patien", icon: ConfigurationIconSideMenu, label: "Configuración" },
  { to: "/chat-cora", icon: HealthIcon, label: "Cora" }

];


interface MenuProps {
  toggleSidebar: () => void
  isSidebarOpen: boolean
}

export const AsideMenu: React.FC<MenuProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const { authTokens } = useAuthContext()

  return (
    <>
      <aside className={`fixed z-40 top-0 duration-700 left-0 h-full  border-2 bg-white text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0 z-10' : '-translate-x-full z-10'}`}>
        <div className="py-10 flex flex-col ">
          <h1 className="text-xl font-bold mb-5 text-center text-black">MENÚ</h1>
          <span className=' absolute right-5 top-9 cursor-pointer transition-all duration-200 hover:scale-105 hover:rotate-90' onClick={toggleSidebar}>
          </span>
          <ul className='w-[30vh] '>

            {authTokens && authTokens.authorities[0] == "ROLE_MEDICO"
              ? <>
                {menuItemsMedic.map((item, index) => (
                  <Link to={item.to} key={index}>
                    <li
                      className={`mb-5 flex flex-row ml-4 w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to ? 'bg-[#5761C8]' : 'text-black hover:bg-[#3445a7] hover:text-white duration-400 border-solid border-1 border-[#3D4DA5]'
                        }`}
                    >
                      <item.icon width={26} height={26} />
                      <p className="font-inter text-xl ml-5">{item.label}</p>
                    </li>
                  </Link>
                ))}
              </>
              : <>
                {menuItemsPacient.map((item, index) => (
                  <Link to={item.to} key={index}>
                    <li
                      className={`mb-5 flex flex-row ml-4 w-[13rem] items-center p-3 rounded-lg ${location.pathname === item.to ? 'bg-[#5761C8]' : 'text-black hover:bg-[#3445a7] hover:text-white duration-400 border-solid border-1 border-[#3D4DA5]'
                        }`}
                    >
                      <item.icon width={26} height={26} />
                      <p className="font-inter text-xl ml-5">{item.label}</p>
                    </li>
                  </Link>
                ))}
              </>
            }

          </ul>
          <Logout />
        </div>
      </aside>

      {
        isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleSidebar}
          ></div>
        )
      }
    </>
  )
}
