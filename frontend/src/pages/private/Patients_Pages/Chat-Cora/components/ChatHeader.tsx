import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../../../../public/icons/Icons";

const ChatHeader: React.FC = () => (
  <header className="relative bg-white flex justify-center items-center p-2 text-gray-700">
    <img
      src="Ellipse_136.png"
      alt="User Avatar"
      className="w-14 h-14 rounded-full"
    />
    <h1 className="text-2xl font-semibold text-center">Cora</h1>
    <Link to={"/patient-home"} className="absolute left-5">
      <ArrowIcon width={30} height={30} />
    </Link>
  </header>
);

export default ChatHeader;
