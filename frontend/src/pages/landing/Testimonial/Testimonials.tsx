import { StarIcon } from "../../../../public/icons/Icons";
import styles from "../../../styles.module.css";
import { motion } from "framer-motion";

const testimonialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col gap-y-8 items-center px-4 md:px-10 md:mb-32"
    >
      {/* Mobile View */}
      <div className="md:hidden text-center flex flex-col gap-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl mt-14 font-semibold text-[#5F5CF3]"
        >
          Clientes
        </motion.h2>
        <motion.h5
          initial="hidden"
          whileInView="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.h5}
        >
          Valor que Retribuye valor
        </motion.h5>
        <div className="flex gap-2 justify-center">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} width={30} height={30} />
          ))}
        </div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-6 leading-9 font-semibold"
        >
          “Como médico, Justina.IO me ha permitido gestionar mis pacientes de
          manera más eficiente. La plataforma es intuitiva y me ha ayudado a
          mantener una comunicación constante y efectiva con mis pacientes,
          especialmente en casos de trasplantes.”
        </motion.p>
        <img
          src="./IMG_MEDICO/IMG_MEDICO_2.webp"
          className="w-10 mx-auto"
          alt="Testimonial Image"
        />
        <p className="font-semibold">Courtney Henry</p>

        <div className="mt-10">
          <div className="flex gap-2 justify-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} width={30} height={30} />
            ))}
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={testimonialVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="px-6 leading-9 font-semibold mt-4"
          >
            “Como médico, Justina.IO me ha permitido gestionar mis pacientes de
            manera más eficiente. La plataforma es intuitiva y me ha ayudado a
            mantener una comunicación constante y efectiva con mis pacientes,
            especialmente en casos de trasplantes.”
          </motion.p>
          <img
            src="./IMG_MEDICO/IMG_MEDICO.webp"
            className="w-10 mx-auto mt-4"
            alt="Testimonial Image"
          />
          <p className="font-semibold">Doctor Ortega (Médico internista)</p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-4 items-center text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:text-4xl text-2xl font-semibold text-[#5F5CF3]"
        >
          Clientes
        </motion.h2>
        <motion.h5
          initial="hidden"
          whileInView="visible"
          variants={testimonialVariants}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.h5}
        >
          Valor que Retribuye valor
        </motion.h5>
        <div className="md:flex md:gap-10 md:mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={testimonialVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center md:w-[50%]"
          >
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} width={30} height={30} />
              ))}
            </div>
            <p className="px-6 md:px-9 leading-9 font-semibold">
              “Como médico, Justina.IO me ha permitido gestionar mis pacientes
              de manera más eficiente. La plataforma es intuitiva y me ha
              ayudado a mantener una comunicación constante y efectiva con mis
              pacientes, especialmente en casos de trasplantes.”
            </p>
            <img
              src="./IMG_MEDICO/IMG_MEDICO_2.webp"
              className="w-10 mt-4"
              alt="Testimonial Image"
            />
            <p className="font-semibold md:text-gray-500 mt-2">
              Doctor Ortega (Médico internista)
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={testimonialVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center md:w-[50%] mt-10 md:mt-0"
          >
            <div className="flex gap-2 mb-4">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} width={30} height={30} />
              ))}
            </div>
            <p className="px-6 md:px-9 leading-9 font-semibold">
              “Como médico, Justina.IO me ha permitido gestionar mis pacientes
              de manera más eficiente. La plataforma es intuitiva y me ha
              ayudado a mantener una comunicación constante y efectiva con mis
              pacientes, especialmente en casos de trasplantes.”
            </p>
            <img
              src="./IMG_MEDICO/IMG_MEDICO.webp"
              className="w-10 mt-4"
              alt="Testimonial Image"
            />
            <p className="font-semibold md:text-gray-500 mt-2">
              Doctor Ortega (Médico internista)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
