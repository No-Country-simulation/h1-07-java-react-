import { Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { ArrowWhiteIcon, MenuHambuerguesa } from "../../public/icons/Icons";
import React, { useState } from "react";
import { AsideMenu } from "./AsideMenu";
import { SkeletonPatientInfo } from "./Skeletons";

interface HeaderProfileProps {
  children?: JSX.Element | JSX.Element[];
  name: string | undefined;
  lastname: string | undefined;
  typeDocument: string | undefined;
  financier: string | undefined;
  document: number | undefined;
  loading?: boolean | undefined;
  pathology?: string | undefined;
  title?: string;
  link: string;
  bgColor?: string; // Add bgColor prop
  bgHamburger?: string; // Add bgColor prop

}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  link,
  loading,
  title,
  children,
  name,
  lastname,
  typeDocument,
  financier,
  document,
  bgColor = "bg-gradient-to-r from-[#31543D] to-[#518C66]", // Default gradient
  bgHamburger = "bg-green-700"
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <AsideMenu src="../../public/JustinaLogo_2.png" isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header className={`p-6 w-full mb-8 font-inter h-48 relative flex flex-col items-center justify-center ${bgColor} rounded-br-[4rem] rounded-es-[4rem] shadow-2xl`}      >
        <div className=" w-full flex flex-col items-start xl:h-[14rem] xl:max-w-4xl">
          <div className=" mb-6 text-center relative flex flex-col items-center justify-center w-full">
            <Link
              to={link}
              className=" text-light-color absolute -left-0 hover:-translate-x-1 transition-all duration-300"
            >
              <ArrowWhiteIcon width={30} height={30} stroke="#ffffff" classname="" />
            </Link>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-bold text-light-color">{title}</h1>

            </div>{" "}
          </div>
          <div className="flex gap-2 items-center justify-between  w-full">
            {loading ? (
              <SkeletonPatientInfo />
            ) : (
              <div className=" flex gap-4 items-center">
                <Avatar name={name} color="primary" isBordered size="lg" />
                <div className="text-left">
                  <h6 className="font-bold text-light-color">
                    {name} {lastname}
                  </h6>
                  <p className="text-sm text-light-color font-semibold">
                    {typeDocument} {document}
                  </p>
                  <p className="text-sm text-light-color font-semibold">
                    Financiador: {financier}{" "}
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={toggleSidebar}
              className={`${bgHamburger} w-12 h-12  hover:brightness-90 transition-all duration-300 rounded-full justify-center flex items-center `}
            >
              <MenuHambuerguesa width={30} height={30} stroke="" />
            </button>
          </div>
        </div>
        {children}
      </header>
    </>
  );
};
