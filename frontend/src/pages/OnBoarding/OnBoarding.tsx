import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Onboarding() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="imagen-2.png"
            alt="Loading"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-30 blur-sm"></div>
        <div className="relative flex flex-col items-center pt-5 w-full">
          <img src="JustinaIO_logo_page-02.png" alt="" />
          <p className="font-inter text-white mt-10">
            Salud al alcance de todos
          </p>
          <p className="font-inter text-white absolute top-[30rem]">
            Versión 0.0.1
          </p>
        </div>
      </div>
    );
  }

  return (
    <main
      className={`flex flex-col justify-center items-center min-h-screen  overflow-hidden bg-cover bg-center `}
      style={{ backgroundImage: "url(IMG_LADING/Imagen-1.webp)" }}
    >
      <div className="flex flex-col justify-center items-center rounded-t-[10%]  w-full   xl:bg-transparent fixed top-[10rem] md:relative md:top-[2rem] md:rounded-md">
        <section className="flex flex-col items-center w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] xl:text-black bg-white  xl:shadow-xl xl:shadow-black p-5 md:p-10 rounded-md shadow-lg mb-20 ">
          <a href="/#">
            <img
              src="JustinaLogo_2.png"
              className="m-auto mb-2 flex hover:translate-y-1"
              width={130}
              alt="logo-justina"
            />
          </a>
          <h3 className="text-center  font-bold font-inter text-[20px] md:text-[30px] lg:text-[35px] xl:text-[30px] xl:text-black text-[#1A1A1A] 2xl:w-[80%]">
            Comprometidos con la salud y bienestar
          </h3>

          <p className="text-[#948ABC] xl:text font-inter text-center mt-3 w-[80%] md:w-full xl:w-[70%] text-[12px] md:text-[16px] lg:text-[20px] xl:text-[20px] 2xl:text-[30px] ">
            Conectamos médicos y pacientes para facilitar el acceso a la salud
          </p>
          <div className="flex flex-col items-center mt-6">
            <Link to={"/signup"}>
              <button className="bg-[#E08733] hover:bg-[#E08733]/80 py-2 px-10  lg:py-4 lg:px-14  border border-[#E08733]  rounded-full shadow-full text-white font-inter">
                Crear cuenta
              </button>
            </Link>
            <span className="my-1 text-[18px] text-primary-brand-dark font-bold font-inter  xl:text-black">
              ó
            </span>
            <Link to={"/login"}>
              <button className="text-primary-brand-dark py-2 px-10 bg-gray-50 hover:bg-gray-200  lg:py-4 lg:px-14 border rounded-full shadow-full border-[#E08733] hover:border-[#ff993a]  font-bold font-inter mb-2 md:text-[14px] lg:text-[25px] xl:text-[16px] xl:text-black ">
                Iniciar sesión
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
