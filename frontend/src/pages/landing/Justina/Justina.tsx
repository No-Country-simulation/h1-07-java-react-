import { motion } from "framer-motion";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  url: string;
}

const Card = ({ image, title, subtitle, url }: CardProps) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#ffffff] hover:bg-[#f1f1f1] p-3 border-2 border-[#C23584] rounded-lg flex flex-col items-center w-80 lg:w-72"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <img src={image} alt={title} className="mb-4 w-full h-full object-cover" />
    <h5 className="text-xl mb-3 text-[#11AAE3] font-bold">{title}</h5>
    <p className="text-sm mb-3 font-normal text-[#605DF6]">{subtitle}</p>
  </motion.a>
);

const JustinaSection = () => {
  const cards: CardProps[] = [
    {
      image: "/IMG_LADING/1.webp",
      url: "https://www.infobae.com/sociedad/2018/07/04/quien-era-justina-lo-cane-la-chica-que-inspiro-el-cambio-en-la-donacion-de-organos/",
      title: "Justina Lo Cane",
      subtitle: "La niña que inspiró el cambio en la donación de órganos",
    },
    {
      image: "/IMG_LADING/2.webp",
      url: "https://www.argentina.gob.ar/noticias/ley-justina-una-esperanza-para-quienes-aguardan-un-trasplante",
      title: "Ley Justina",
      subtitle: "Una esperanza para quienes aguardan un trasplante",
    },
    {
      image: "/IMG_LADING/3.webp",
      url: "https://www.facebook.com/multiplicatex7",
      title: "Multiplícate X7",
      subtitle:
        "El día que dejes este mundo y ayuda a otros a seguir disfrutando la vida.",
    },
    {
      image: "/IMG_LADING/4.webp",
      url: "https://www.youtube.com/watch?v=nKrxiFZvygE",
      title: "Casa Justina",
      subtitle:
        "Un proyecto que busca resguardar y cuidar a pacientes en espera de un trasplante",
    },
  ];

  return (
    <section className="mt-10 bg-[#5956E9] h-full text-white text-center">
      <div className="pt-12">
        <h3 className="text-[3.25rem] font-semibold">
          Justina Y La Ley Justina
        </h3>
        <h4 className="text-2xl font-normal uppercase mt-4">
          Donar Para Salvar
        </h4>
      </div>

      <div className="flex flex-col items-center mt-8 space-y-4 md:space-y-0 lg:-space-y-4">
        <div className="flex flex-col md:flex-row justify-center mb-6 gap-4 lg:gap-12">
          {cards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              url={card.url}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-12 mt-4">
          {cards.slice(2, 4).map((card, index) => (
            <Card
              key={index}
              image={card.image}
              url={card.url}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JustinaSection;
