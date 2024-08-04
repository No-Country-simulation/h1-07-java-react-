import { Link } from "react-router-dom";
import { FlechaIconTwo } from "../../../../../public/icons/Icons";

export default function History() {
  return (
    <main className="flex flex-col">
      <Link to={"/patient-home"}>
        <section className="flex flex-row items-center mt-6 mb-5 ">
          <FlechaIconTwo
            width={30}
            height={30}
            stroke="#000000"
            classname="ml-12"
          />
          <h3 className="ml-20 font-inter font-bold">Historial</h3>
        </section>
      </Link>
    </main>
  );
}
