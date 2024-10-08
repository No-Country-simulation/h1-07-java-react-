import { motion } from "framer-motion";

export const AboutSection = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col mx-10 md:flex-row lg:h-screen md:items-center md:justify-between gap-y-8 md:gap-24 px-4 md:px-10 py-8"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
        className="flex justify-center md:w-1/2 lg:ml-20 mb-8 md:mb-0"
      >
        <img
          src="/IMG_LADING/Imagen-1.webp"
          alt="image-landing-page"
          className="rounded-xl w-[100%] h-auto shadow-large"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="flex flex-col md:w-1/2 md:ml-10 lg:mx-12"
      >
        <h5 className="text-lg text-black font-inter mb-2">ACERCA DE</h5>
        <h2 className="text-[#5956E9] lg:text-4xl text-2xl font-semibold mb-4">
          Una Web App para <br /> Todos
        </h2>
        <p className="text-black text-sm tracking-wide mb-4 font-inter font-medium">
          Diseñada para transformar la experiencia en el cuidado de la salud.
          Nuestra misión es proporcionar soluciones eficientes tanto a pacientes
          como a médicos, mejorando la comunicación, agilizando procesos y
          brindando un acompañamiento continuo. Destacamos especialmente en el
          área de trasplantes de órganos, ofreciendo herramientas y recursos que
          facilitan este delicado y vital proceso.
        </p>
      </motion.div>
    </section>
  );
};
