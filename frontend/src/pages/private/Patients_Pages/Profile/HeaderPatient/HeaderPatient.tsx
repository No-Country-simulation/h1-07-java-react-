import { Avatar } from "@nextui-org/react";
import React, { useState } from "react";
import { HomeIcon, MenuHambuerguesa } from "../../../../../../public/icons/Icons";
import { Link } from "react-router-dom";
import { AsideMenu } from "../../../../../components/AsideMenu";


interface HeaderProfileProps {
  name: string | undefined;
  lastname: string | undefined;
  typeDocument: string | undefined;
  document: number | undefined;
  pathology?: string | undefined;
  link: string;
}

export const HeaderPatient: React.FC<HeaderProfileProps> = ({
  name,
  lastname,
  typeDocument,
  document,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <AsideMenu src="" isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <header className="  z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex rounded-bl-xl border-none flex-col justify-center h-[12rem]  w-full bg-[#8778D7]   rounded-br-[3rem] ">
        <div className="w-full flex items-center justify-between max-w-screen-xl m-auto px-32 max-lg:px-16 max-md:px-8">
          <div className="flex gap-2 items-center flex-col">
            <div className=" flex gap-4 items-center">
              <Link to={"/profile"} className="flex gap-4 items-center">
                <Avatar name={name} color="primary" className=" cursor-pointer" isBordered size="lg" />
                <div className="text-left">
                  <h6 className="font-bold text-light-color">
                    {name} {lastname}
                  </h6>
                  <p className="text-sm text-light-color font-semibold">
                    {typeDocument} {document}
                  </p>
                </div>
              </Link>

            </div>
          </div>
          <a href="/patient-home">
            <img src="logo-justina.webp" width={200} alt="logo-justina" className="max-md:hidden" />
          </a>
          <div className=" flex gap-4">
            <Link to={"/patient-home"} className=" hover:brightness-90 transition-all duration-300 w-12 h-12  bg-[#006FEE]  rounded-full flex justify-center items-center">
              <HomeIcon width={30} height={30} stroke="#fff" />
            </Link>
            <button onClick={toggleSidebar} className=" hover:brightness-90 transition-all duration-300 w-12 h-12  bg-[#006FEE]  rounded-full flex justify-center items-center">
              <MenuHambuerguesa width={30} height={30} stroke="" classname=""/>
            </button>
          </div>
        </div>
      </header>

    </>
  );
};
