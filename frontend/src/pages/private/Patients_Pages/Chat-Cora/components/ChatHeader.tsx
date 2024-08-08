import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../public/icons/Icons";
import { Avatar } from "@nextui-org/react";
import usePatientInfo from "../../../../../utils/hooks/usePatientInfo";

const ChatHeader: React.FC = () => {
  const { patient } = usePatientInfo()
  return (
    <header className=" bg-white flex justify-between items-center p-2 text-gray-700 ">
      <Link to={"/patient-home"} className=" border-2 rounded-full p-1 bg-gray-100 hover:-translate-x-1 transition-all duration-300 hover:brightness-90">
        <ArrowIcon width={30} height={30} />
      </Link>
      <div className="flex gap-2 items-center">
        <img
          src="Ellipse_136.png"
          alt="User Avatar"
          className="w-14 h-14 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-center">Cora</h1>
      </div>
      <Link to={"/profile"} className="flex gap-4 items-center">
        <Avatar name={patient && patient.nombre} color="primary" className=" cursor-pointer" isBordered size="lg" />
      </Link>
    </header>
  )


};

export default ChatHeader;
