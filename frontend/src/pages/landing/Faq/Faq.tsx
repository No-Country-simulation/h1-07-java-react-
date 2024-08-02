import { useState } from "react";
import styles from "../../../styles.module.css";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => (
  <div className="border rounded-none border-white">
    <button
      onClick={onClick}
      className="w-full text-left py-3 px-4 flex justify-between items-center text-white font-inter text-lg bg-[#423FD9]"
    >
      <span>{title}</span>
      <span>{isOpen ? "-" : ">"}</span>
    </button>
    {isOpen && (
      <div className="py-3 px-4 bg-[#4b48f7] text-white">{content}</div>
    )}
  </div>
);

interface Question {
  title: string;
  content: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions: Question[] = [
    {
      title: "¿Cómo me registro en Justina.IO?",
      content:
        "Para poder registrarse dentro de la aplicación lo que necesitas es tu número de matrícula como médico, esto habilita la entrada al sistema.",
    },
    {
      title: "¿El bot de ayuda puede darme diagnósticos médicos?",
      content:
        "Cora está diseñado para ofrecer información y soporte general, pero no sustituye la opinión de un profesional de la salud.",
    },
    {
      title: "¿Cómo manejar la privacidad de mis datos?",
      content:
        "Todos los datos que registre dentro de la aplicación quedan resguardados y solo el médico asignado puede revisar los mismos.",
    },
    {
      title: "¿Puedo acceder desde mi smartphone?",
      content:
        "Sí, actualmente solo existe la versión móvil, en un futuro queremos poder hacer la versión para computadora para una mejor experiencia de usuario.",
    },
    {
      title: "¿Cómo programar una cita con mi médico a través de JUSTINA.IO?",
      content:
        "Para programar una cita con su médico se tiene que coordinar con el presencial o de manera virtual con el apartado de mensajería, este mismo turno lo gestiona el profesional a través de la plataforma, a usted como paciente le llega una notificación con el turno, puede confirmar o rechazar el turno.",
    },
  ];

  return (
    <section
      id="faq"
      className="flex flex-col gap-y-4 lg:h-screen h-full mt-10 lg:mb-10  bg-cover bg-center text-white"
      style={{ backgroundImage: "url(./IMG_FONDO/IMG_FONDO.png)" }}
    >
      <div className="flex flex-col  lg:mx-16  items-start lg:mt-16 md:items-center md:flex-row md:gap-y-6">
        <div className="md:flex  lg:mx-0 mx-10 md:flex-col md:pl-10">
          <h2
            className={`font-inter font-[600] mb-4 lg:mt-0 mt-16 text-3xl lg:text-5xl text-white ${styles.h2}`}
          >
            Preguntas Frecuentes
          </h2>
          <h5
            className={`font-inter lg:mt-0 mt-6 lg:mb-0 mb-6 text-white ${styles.h5} text-lg md:text-lg`}
          >
            Las más solicitadas de nuestros servicios
          </h5>
        </div>
        <div className="lg:w-full  mx-10 lg:mb-0 mb-20 md:w-[45%] text-white md:mr-10 md:mt-20">
          <div className="border border-white rounded-lg">
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
