import { useEffect, useState } from "react";
import { Paciente } from "../../../../Interfaces/interfaces";
import { fetchPatietConect } from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";
import { ArrowWhiteIcon } from "../../../../../public/icons/Icons";
export function UserInfo_Patients() {
  const [patientInfo, setPatienInfo] = useState<Paciente | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatien = async () => {
      try {
        const data = await fetchPatietConect();
        setTimeout(() => {
          setPatienInfo(data);
          localStorage.setItem("PATIENT-DATA", JSON.stringify(data));
          setLoading(false);
        }, 10000);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    const storedMedic = localStorage.getItem("PATIENT-DATA");
    if (storedMedic) {
      const medic: Paciente = JSON.parse(storedMedic);
      setPatienInfo(medic);
      setLoading(false);
    } else {
      fetchPatien();
    }
  }, []);

  return (
    <header className="h-[11.7rem] bg-gradient-to-r from-[#5761C8] to-[#A1AAFF] w-full relative bottom-5 rounded-br-[4rem] text-white shadow-sm shadow-black">
      <Link to={"/patient-home"}>
        <section className="flex flex-row mt-5 h-[3rem] items-center pt-5">
          <ArrowWhiteIcon width={30} height={30} />
          <h4 className="ml-10 font-inter font-bold text-[18px] text-center">
            Perfil del Paciente
          </h4>
        </section>
      </Link>
      <section>
        <div className="w-[16.5rem] h-[5.5rem] ml-6 mt-5 rounded-full flex flex-row items-center content-center justify-between">
          {loading ? (
            // <SkeletonsListPatient />
            <h2>Loading</h2>
          ) : (
            <>
              <img
                src={patientInfo?.imagen || "./IMG_MEDICO/IMG_MEDICO.png"}
                className="ml-2 rounded-full w-16"
                alt="Perfil del Paciente"
                width={60}
                height={56}
              />
              <div className="mr-1">
                <h1 className="text-[18px] font-inter font-bold">
                  {patientInfo?.nombre} {patientInfo?.apellido}
                </h1>
                <p>Médico: {patientInfo?.medicos[0]}</p>
              </div>
            </>
          )}
        </div>
      </section>
    </header>
  );
}
