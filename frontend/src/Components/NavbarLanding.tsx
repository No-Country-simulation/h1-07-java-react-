import { useState, useEffect } from "react";

export const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState("bg-white");

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
            src="./public/LOGOS/JustinaLogo_Lading.png"
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
        <a
          href="/onboarding"
          className="rounded-md py-2 px-4 content-center text-center bg-[#E08733] mt-6 mb-10 drop-shadow-lg w-36 h-12 text-white font-[300] font-inter md:mt-5"
        >
          Login
        </a>
      </div>
    </nav>
  );
};
