import { Avatar, Badge } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { CampanaNotificIcon, MenuHambuerguesa } from '../../../../../../public/icons/Icons'
import { NotificationProps } from '../HomeView';

export default function HeaderHome({
  toggleSidebar,
  name,
  lastname,
  notifications
}: {
  toggleSidebar: () => void;
  name: string | undefined;
  lastname: string | undefined;
  notifications: NotificationProps[] | null;
}) {
  return (

    <header className="  z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex rounded-bl-xl border-none flex-col justify-center h-[12rem]  w-full bg-[#8778D7]   rounded-br-[3rem] ">
      <div className="w-full flex items-center justify-between max-w-screen-xl m-auto px-32 max-lg:px-16 max-md:px-8">
        <div className="flex items-center space-x-2 border-none">
          <Link to="/profile" className=" flex gap-4">
            <Avatar
              name={name}
              color="primary"
              isBordered
              size="lg"
            />
            <div className="flex flex-col text-md text-white items justify-center flex-wrap">
              <h3 className="font-semibold text-m ">Buenos días,</h3>
              <p className="font-bold max-md:text-sm">{name} {lastname} </p>
            </div>
          </Link>

        </div>
        <a href="/patient-home" className=" flex  justify-center max-md:hidden   mt-0  ">
          <img
            src="JustinaLogo_2.png"
            width={150}
            height={110}
            alt="JustinaLogo"
          />
        </a>
        <div className=" flex gap-4">
          <Link to={"/notification"}>
            <Badge
              color="danger"
              content={notifications?.length}
              isInvisible={notifications?.length === 0}
              shape="circle"
              className=" -z-0"
            >
              <span className=" hover:brightness-90 transition-all duration-300 w-12 h-12  bg-[#006FEE]  rounded-full flex justify-center items-center">
                <CampanaNotificIcon width={30} height={30} stroke="#fff" />
              </span>
            </Badge>
          </Link>
          <button onClick={toggleSidebar} className=" hover:brightness-90 transition-all duration-300 w-12 h-12  bg-[#006FEE]  rounded-full flex justify-center items-center">
            <MenuHambuerguesa width={30} height={30} stroke="" />
          </button>
        </div>
      </div>

    </header>
  )
}
