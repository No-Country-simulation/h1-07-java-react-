import { motion } from "framer-motion";
import styles from "../../../styles.module.css";
import {
  CheckIconTwo,
  CorIcon,
  DonationIcon,
  HistoryIconTwo,
  RecordIcon,
  SecurityIcon,
  TratamentIcon,
  WacthIcon,
} from "../../../../public/icons/Icons";

const items = [
  {
    icon: <HistoryIconTwo width={30} height={30} />,
    text: "Historial Clínico",
  },
  {
    icon: <DonationIcon width={30} height={30} />,
    text: "Donaciones",
  },
  {
    icon: <TratamentIcon width={30} height={30} />,
    text: "Tratamientos",
  },
  {
    icon: <CorIcon width={30} height={30} />,
    text: "Acompañamiento al paciente",
    padding: "md:pt-6",
  },
  {
    icon: <WacthIcon width={30} height={30} />,
    text: "Gestión de turnos",
  },
  {
    icon: <SecurityIcon width={30} height={30} />,
    text: "Protección de datos",
  },
  {
    icon: <RecordIcon width={30} height={30} />,
    text: "Recordatorios para Pacientes",
    padding: "md:mt-4",
  },
  {
    icon: <CheckIconTwo width={30} height={30} />,
    text: "Perfiles verificados",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col gap-y-8 items-center md:justify-center text-white text-center md:mb-32 md:bg-cover md:bg-center md:h-screen rounded-xl"
      style={{ backgroundImage: "url(./IMG_FONDO/IMG_FONDO.webp)" }}
    >
      <h5
        className={`text-lg text-white font-[500] -mb-2 font-inter mt-10 lg:mt-5`}
      >
        Servicios
      </h5>
      <h2
        className={`lg:text-4xl text-2xl md:font-[600] md:w-[60%] font-[500] font-inter`}
      >
        Aportando valor Verdadero
      </h2>
      <h5
        className={`${styles.h5} text-white w-[60%] text-lg font-inter font-[400]`}
      >
        Calidad Para Pacientes y Doctores
      </h5>
      <ul
        className={`list-none flex flex-col gap-y-16 md:gap-y-4 justify-center items-center md:flex-row md:grid md:grid-cols-4 md:mt-5 mb-10`}
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`gap-y-4 flex flex-col justify-center items-center w-[80%] ${item.padding}`}
          >
            <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full">
              {item.icon}
            </span>
            <p className="font-bold text-md">{item.text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
