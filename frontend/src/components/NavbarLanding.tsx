import { useState, useEffect } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Avatar, Button, Card, CardBody, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import usePatientInfo from "../utils/hooks/usePatientInfo";
import useMedicsInfo from "../utils/hooks/useMedicInfo";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState("bg-white");
  const { isLoggedIn, logout } = useAuthContext()
  const { patient } = usePatientInfo()
  const { medic } = useMedicsInfo()
  const displayName = patient?.nombre || medic?.nombre;
  const displayLink = patient == undefined ? "dashboard" : "patient-home"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-white/90 ");
      } else {
        setNavbarBg("bg-white");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex flex-row justify-between items-center w-full py-2 text-black  transition-colors duration-300 ${navbarBg}`}
    >
      <div className="ml-4">
        <a href="#">
          <img
            src="./LOGOS/JustinaLogo_Lading.png"
            className="w-20"
            alt="Justina Logo"
          />
        </a>
      </div>
      <div className="hidden md:flex md:items-center">
        <ul className="flex flex-row">
          <li className="ml-4">
            <a href="/#" className="">
              Inicio
            </a>
          </li>
          <li className="ml-4">
            <a href="/#about" className="">
              Sobre nosotros
            </a>
          </li>
          <li className="ml-4">
            <a href="/#services" className="">
              Servicios
            </a>
          </li>
          <li className="ml-4">
            <a href="/#features" className="">
              Características
            </a>
          </li>
        </ul>
      </div>
      <div className="mr-8">
        {isLoggedIn ? (
          <Popover showArrow placement="bottom" shouldBlockScroll>
            <PopoverTrigger>
              <Avatar name={displayName} color="warning" isBordered className=" cursor-pointer">
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="p-1 ">
              <Card shadow="none" className="max-w-[200px] border-none bg-transparent">
                <CardBody className="px-3 py-2 flex gap-2 flex-col justify-center items-center">
                  <Link to={`/${displayLink}`} className="w-full">
                    <Button color="primary" className=" w-full">Inicio</Button>
                  </Link>
                  <Button onClick={logout} color="warning">Cerrar Sesión</Button>
                </CardBody>
              </Card>
            </PopoverContent>
          </Popover>
        ) : (
          <a
            href="/onboarding"
            className="rounded-md py-2 px-4 content-center text-center bg-[#E08733] mt-6 mb-10 drop-shadow-lg w-36 h-12 text-white font-[300] font-inter md:mt-5"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
};
