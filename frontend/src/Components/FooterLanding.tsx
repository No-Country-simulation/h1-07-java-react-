export const Footer = () => {
  return (
    <footer className="bg-[#232233] md:h-full md:flex md:flex-col md:items-center mt-10 px-4">
      <div className=" md:grid md:grid-cols-3  md:gap-10 w-full max-w-6xl mx-auto text-center">
        <div className="lg:mt-20 lg:pt-0 pt-10 ">
          <h6 className="tracking-wider mb-2 text-white font-bold">
            Justina.IO
          </h6>
          <ul className="flex flex-col list-none text-gray-400 leading-8 font-normal">
            <li>
              <a href="/#services">Servicios</a>
            </li>
          </ul>
        </div>

        <div className="md:mt-20">
          <h6 className="tracking-wider mb-2 text-white font-bold">
            Información
          </h6>
          <ul className="flex flex-col list-none text-gray-400 leading-8 font-normal">
            <li>
              <a href="/faq">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>

        <div className="md:mt-20">
          <h6 className="tracking-wider mb-2 text-white font-bold">
            Acerca de
          </h6>
          <ul className="flex flex-col list-none text-gray-400 leading-8 font-normal">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.argentina.gob.ar/noticias/ley-justina-una-esperanza-para-quienes-aguardan-un-trasplante"
              >
                Ley Justina
              </a>
            </li>
          </ul>
        </div>
      </div>

      <span className="border-t-2 border-gray-color w-full max-w-6xl mx-auto mt-16"></span>

      <div className=" md:w-full md:flex md:flex-col md:items-center">
        <section className="md:flex md:mt-8 md:justify-center md:items-center md:flex-row md:w-full max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
            <img
              src="./public/D_1.png"
              alt="Logo D_1"
              className="w-32 md:w-48"
            />
            <img
              src="./public/LOGOS/JustinaLogo_Lading.png"
              className="w-32 md:w-48"
              alt="Justina Logo"
            />
          </div>
        </section>
      </div>
    </footer>
  );
};
