export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="flex lg:mt-0 mt-14 flex-col items-center md:flex-row bg-cover md:bg-center h-screen"
      style={{ backgroundImage: "url(./IMG_FONDO/IMG_FONDO.png)" }}
    >
      <div className="flex w-full flex-col lg:ml-16 mt-12 md:mt-30 items-center md:items-start md:w-1/2 px-4 md:px-10">
        <h1 className="mt-5 mb-4 lg:mb-0 text-4xl font-semibold md:mt-0 text-white lg:text-5xl text-center md:text-left">
          JUSTINA.IO
        </h1>
        <p className="text-lg mt-0 w-[80%] md:w-full text-center md:text-left mb-4 md:mt-4 text-white">
          Creemos en un enfoque integral y humano, donde cada <br />
          paciente recibe el apoyo necesario en cada etapa de su <br />
          tratamiento.
        </p>
        <a
          href="/onboarding"
          className="rounded-md content-center text-center bg-[#E08733] hover:bg-[#ffa046] hover:text-black mt-3 mb-10 drop-shadow-lg w-36 h-12 text-white font-[300] font-inter md:mt-5"
        >
          Acceder
        </a>
      </div>
      <div className="flex justify-center items-center w-full lg:mr-20 md:w-1/2">
        <img
          src="./LOGOS/JustinaLogo_Lading.png"
          className="md:rounded-lg w-[60%] md:w-[50%] lg:w-[100%]  max-w-sm md:max-w-md"
          alt="image-landing-page"
        />
      </div>
    </section>
  );
};
