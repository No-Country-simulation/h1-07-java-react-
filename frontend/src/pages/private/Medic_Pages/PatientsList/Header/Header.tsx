import { Link } from "react-router-dom";
import {
  FlechaIconTwo,
  HamburguerIcon,
} from "../../../../../../public/icons/Icons";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <div className="mb-6 text-center relative flex flex-col items-center justify-center">
      <Link
        to={"/dashboard"}
        className=" absolute -left-0 hover:-translate-x-1 transition-all duration-300"
      >
        <FlechaIconTwo width={30} height={30} stroke="#000000" classname="" />
      </Link>
      <h1 className="text-xl font-bold ">Listado de pacientes</h1>
      <button onClick={toggleSidebar} className=" absolute right-0">
        <HamburguerIcon width={30} height={30} />
      </button>
    </div>
  );
}
