import styles from "../../../styles.module.css";
export const FeaturesSection = () => {
  return (
    <section id="features" className="flex flex-col mt-10">
      <div className="text-center gap-y-4 md:flex md:flex-col md:mb-10">
        <h2
          className={`md:font-bold md:font-inter lg:text-4xl text-2xl text-3xl font-inter text-blue-juli-color ${styles.h2} mb-4`}
        >
          Lo Que Ofrecemos
        </h2>
        <h5
          className={` text-lg font-semibold text-black font-[400] mb-10 text-lg font-inter`}
        >
          Nuestro Diferenciadores.
        </h5>
      </div>

      <div className="flex flex-col items-center md:hidden">
        <div className="md:flex md:flex-col md:pl-20">
          <h4 className="text-xl text-blue-juli-color font-inter font-semibold w-[90%] mb-5">
            Asistencia Personalizada 24/7
          </h4>
        </div>
        <div className="relative grid grid-cols-1 grid-rows-2 rounded-xl bg-gradient-to-r from-[#5F5CF4] to-[#C49FE0] w-[90%] h-[20rem]">
          <img
            src="./public/jus-removebg-preview_1.png"
            alt="image-landing-page"
            className="absolute top-0 left-0 w-[35%] h-auto lg:w-[20%]"
          />
          <img
            src="./public/Ellipse_136.png"
            alt="image-landing-page"
            className="absolute bottom-0 right-0 w-[35%] h-auto lg:w-[20%]"
          />
        </div>
      </div>

      <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
        <div className="md:rounded-xl md:bg-gradient-to-r md:from-[#5F5CF4] md:to-[#C49FE0] md:w-[33%] md:h-[17rem] md:ml-36">
          <img
            src="./public/jus-removebg-preview_1.png"
            alt="image-landing-page"
            className="md:relative md:bottom-auto xl:left-10 md:left-auto md:w-28 lg:w-36 xl:w-36"
          />
          <img
            src="./public/Ellipse_136.png"
            alt="image-landing-page"
            className="md:relative md:bottom-auto md:left-40 xl:left-60 xl:bottom-3 lg:left-40  md:w-28 lg:w-32 xl:w-36"
          />
        </div>
        <div className="md:flex md:flex-col md:pr-20 md:w-[45%]">
          <h4 className="lg:text-4xl text-2xl md:font-inter md:font-semibold text-blue-juli-color md:mb-4">
            Asistencia Personalizada 24/7
          </h4>
          <h5 className={`text-lg font-semibold lg:mb-10 `}>
            “CORA” Nuestro bot de ayuda está disponible <br /> las 24 horas del
            día, los 7 días de la semana, <br /> ofreciendo respuestas rápidas y
            precisas a las <br />
            preguntas de los pacientes, recordatorios de <br /> citas y
            seguimiento de tratamientos.
          </h5>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10 md:hidden">
        <div className="md:flex md:flex-col md:pl-20">
          <h4 className="lg:text-4xl text-2xl text-blue-juli-color font-inter font-semibold w-[90%] mb-5 ml-5">
            Plataforma Integral Para Transplantes
          </h4>
        </div>
        <img
          src="./public/CenterContent.png"
          alt="image-landing-page"
          className="md:mr-20 w-[90%]"
        />
      </div>

      <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
        <div className="md:flex md:flex-col md:pr-20 md:w-[45%] md:ml-32">
          <h4 className="lg:text-4xl text-2xl md:font-inter md:font-semibold text-blue-juli-color md:mb-10">
            Plataforma Integral para Trasplantes
          </h4>
          <h5 className={`text-lg font-semibold `}>
            Justina.IO se centra en coordinar a especialistas de la salud para
            gestión y coordinación de trasplantes de órganos, brindando
            herramientas de comunicación eficiente entre equipos médicos.
          </h5>
        </div>
        <img
          src="./public/CenterContent.png"
          alt="image-landing-page"
          className="md:mr-20"
        />
      </div>

      <div className="flex flex-col items-center mt-10 md:hidden">
        <div className="md:flex md:flex-col lg:pl-20">
          <h4 className="text-xl text-blue-juli-color font-inter font-semibold w-[90%] mb-5 lg:ml-5">
            Interfaz Amigable y Accesible
          </h4>
        </div>
        <img
          src="./public/image.png"
          alt="image-landing-page"
          className="md:ml-32 w-[90%]"
        />
      </div>

      <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
        <img
          src="./public/image.png"
          alt="image-landing-page"
          className="md:ml-32"
        />
        <div className="md:flex md:flex-col md:pr-20 md:w-[45%]">
          <h4 className="lg:text-4xl text-2xl md:font-inter md:font-semibold text-blue-juli-color md:mb-10">
            Interfaz Amigable y Accesible
          </h4>
          <h5 className={`text-lg font-semibold `}>
            Nuestra plataforma es fácil de usar y está diseñada para ser
            accesible a usuarios de todas las edades y niveles de experiencia
            tecnológica. Esto garantiza que tanto pacientes como médicos puedan
            beneficiarse de nuestras soluciones sin complicaciones.
          </h5>
        </div>
      </div>
    </section>
  );
};
