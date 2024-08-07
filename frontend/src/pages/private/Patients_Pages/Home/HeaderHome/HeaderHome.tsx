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
    <header className=" px-32 max-lg:px-16 max-md:px-8 flex border-none flex-col justify-center h-[12rem] mb-4 w-full bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] border rounded-br-[3rem] ">
      <div className=" flex border-none justify-between  items-center">
        <div className="flex mt-4 items-center space-x-2 border-none">
          <Link to="/profile" className=" flex gap-4">
            <Avatar
              name={name}
              color="primary"
              isBordered
              size="lg"
            />
            <div className="flex flex-col text-lg text-white">
              <h3 className="font-semibold text-xl ">Buenos días,</h3>
              <p className="font-bold ">{name} {lastname}</p>
            </div>
          </Link>

        </div>
        <a href="/" className=" flex  justify-center max-md:hidden   mt-0  ">
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