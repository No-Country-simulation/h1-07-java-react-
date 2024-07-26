import { Accordion, AccordionItem, Button, Input } from '@nextui-org/react';
import styles from '../../styles.module.css';
import { Link } from 'react-router-dom';
import { CheckIconTwo, ChevronIcon, CorIcon, DonationIcon, FacebookIcon, FlechaIcon, GitBrantIcon, HistoryIconTwo, LinkedinIcon, RecordIcon, SecurityIcon, StarIcon, TratamentIcon,WacthIcon } from '../../../public/icons/Icons';
import { Nav } from '../../components/Nav';

const items = [
  {
    "icon": <HistoryIconTwo width={30} height={30} />,
    "text": "Historial Clínico",

  },
  {
    "icon": <DonationIcon width={30} height={30} />,
    "text": "Donaciones",

  },
  {
    "icon": <TratamentIcon width={30} height={30} />,
    "text": "Tratamientos",

  },
  {
    "icon": <CorIcon width={30} height={30} />,
    "text": "Acompañamiento al paciente",
    "padding": "md:pt-6"

  },
  {
    "icon": <WacthIcon width={30} height={30} />,
    "text": "Gestión de turnos",
  },
  {
    "icon": <SecurityIcon width={30} height={30} />,
    "text": "Protección de datos",

  },
  {
    "icon": <RecordIcon width={30} height={30} />,
    "text": "Recordatorios para Pacientes",
    "padding": "md:mt-4"

  },
  {
    "icon": <CheckIconTwo width={30} height={30} />,
    "text": "Perfiles verificados",

  }
];

export const Landing = () => {
  const defaultContent = "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.";

  return (
    <main className='w-full md:mx-0 md:max-w-full md:p-0 '>

      <nav className='hidden   md:flex md:flex-row md:justify-between font-inter  md:items-center md:w-full md:bg-[#5956E9] md:py-2 md:mb-0 md:text-white  md:border-black  md:shadow-black md:shadow-small'>
        <div className='md:ml-4'>
          <img src="LOGOS/JustinaLogo_Lading.png" className='md:w-20' alt="" />
        </div>
        <div className='md:flex md:items-center'>
          <ul className='md:flex md:flex-row'>
            <li className='md:ml-4'>
              <a href="#" className='text-orange-400'>Home</a>
            </li>
            <li className='md:ml-4'>
              <a href="#" className=''>Update</a>
            </li>
            <li className='md:ml-4'>
              <a href="#" className=''>Services</a>
            </li>
            <li className='md:ml-4'>
              <a href="#" className=''>Features</a>
            </li>
            <li className='md:ml-4'>
              <a href="#" className=''>About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <Link to={'/'}>
            <img src="Avatar.png" className='md:mr-8' alt="" />
          </Link>
        </div>
      </nav>
      <Nav />
      <article className='flex flex-col md:pl-0  '>

        {/* Destoks y Mobile */}
        <section className="flex flex-col items-center md:gap-y-0 md:flex-row bg-cover md:bg-center md:h-screen  " style={{ backgroundImage: 'url(IMG_FONDO/IMG_FONDO.png)' }}>
          <div className='flex  w-full flex-col md:flex-col mt-2 md:mt-30 md:ml-10'>
            <h2 className={`text-center md:text-start md:mb-4 md:text-[3rem] md:mt-0 text-white ${styles.h2}`}>JUSTINA.IO</h2>
            <p className='md:text-3xl mt-5 w-[80%] ml-2 font-inter mb-4 md:mt-4 text-white  md:w-[80%]'>
              Creemos en un enfoque integral y humano, donde cada paciente recibe el apoyo necesario en cada etapa de su tratamiento.
            </p>
            <Link to="/onboarding">
              <Button className='rounded-md bg-[#E08733] ml-2 mt-5 mb-10 drop-shadow-lg  w-32 md:mt-5 h-10 text-white font-[300] font-inter '>Acceder</Button>
            </Link>
          </div>
          <img src='LOGOS/JustinaLogo_Lading.png' className='md:rounded-lg md:mr-36 md:w-[30%] md:h-[20rem] md:mt-44' alt="image-landing-page" />
        </section>

        {/* Dispositivo Mobile */}
        <section className='flex flex-col gap-y-8 md:hidden content-center'>
          <h5 className={`hidden ${styles.h5}`}>ACERCA DE</h5>
          <div className='flex flex-col items-center'>
            <h2 className={`${styles.h2} text-[#5956E9] font-inter font-[600] text-[27px] h-[3rem] mt-16 `}>Una Web App Para Todos</h2>
            <p className=' text-black leading-6 tracking-wide text-sm w-[90%] font-inter font-[500]'>
              Diseñada para transformar la experiencia en el cuidado de la salud. Nuestra misión es proporcionar soluciones eficientes tanto a pacientes como a médicos, mejorando la comunicación, agilizando procesos y brindando un acompañamiento continuo.
              Destacamos especialmente en el área de trasplantes de órganos, ofreciendo herramientas y recursos que facilitan este delicado y vital proceso
            </p>
          </div>
          <h4 className='text-lg ml-4 flex items-center gap-x-3 text-black font-semibold cursor-pointer hover:translate-x-2 transition-all duration-300'>
            Leer Más <ChevronIcon height={15} width={15} />
          </h4>
          <img src='IMG_Lading/Medico_Img_2.png' alt="image-landing-page" />
        </section>

        {/* Dispositivo Destosk */}
        <section className='hidden md:flex md:flex-row md:mt-32 md:mb-24 '>
          <div className='md:w-[30rem]  md:pl-4 md:ml-10 '>
            <img src='Imagen-1.2.png' className='rounded-xl h-[20em] w-[70em]' alt="image-landing-page" />
          </div>
          <div className='md:ml-20 md:w-[40%]'>
            <h5 className={`${styles.h5} md:text-black font-inter`}>ACERCA DE</h5>
            <h2 className={`${styles.h2} text-[#5956E9] md:text-5xl md:w-[80%] md:font-semibold md:mb-4 `}>Una web app para todos</h2>
            <p className='text-xl md:text-sm  text-black font-inter leading-8 tracking-wide'>
              Diseñada para transformar la experiencia en el cuidado de la salud. Nuestra misión es proporcionar soluciones eficientes tanto a pacientes como a médicos, mejorando la comunicación, agilizando procesos y brindando un acompañamiento continuo.
              Destacamos especialmente en el área de trasplantes de órganos, ofreciendo herramientas y recursos que facilitan este delicado y vital proceso
            </p>
            <h4 className='md:text-md md:flex items-center md:mt-8 gap-x-3  font-semibold cursor-pointer hover:translate-x-2 transition-all duration-300'>
              Leer más <ChevronIcon height={15} width={15} />
            </h4>
          </div>
        </section>

        {/* Version Mobile y Destosk */}
        <section className='flex flex-col gap-y-8 items-center md:justify-center text-white text-center md:mb-32 md:bg-cover md:bg-center md:h-screen rounded-xl' style={{ backgroundImage: 'url(IMG_FONDO/IMG_FONDO.png)' }}>
          <h5 className={`${styles.h5} text-white font-[500] md:font-semibold font-inter mt-5`}>Servicios</h5>
          <h2 className={`md:text-5xl md:font-[600] md:w-[60%] font-[500] font-inter ${styles.h2}`}>Aportando valor Verdadero</h2>
          <h5 className={`${styles.h5} text-white w-[60%] text-lg font-inter font-[400]`}>Calidad Para Pacientes y Doctores</h5>
          <ul className={`list-none flex flex-col gap-y-16 md:gap-y-4 justify-center items-center md:flex-row md:grid md:grid-cols-4 md:mt-5 mb-10`}>
            {items.map((item, index) => (
              <li key={index} className={`gap-y-4 flex flex-col justify-center items-center w-[80%] ${item.padding}`}>
                <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full">
                  {item.icon}
                </span>
                <p className="font-bold text-md">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Version Mobile */}
        <section className='md:hidden flex flex-col mt-10'>
          <div className='text-center gap-y-4 md:flex md:flex-col md:mb-32'>
            <h2 className={`md:font-bold md:font-inter md:text-5xl text-3xl font-inter text-blue-juli-color ${styles.h2} mb-4`}>Lo Que Ofrecemos</h2>
            <h5 className={` ${styles.h5} text-black font-[400] mb-10 text-lg font-inter`}>Nuestro Diferenciadores.</h5>
          </div>

          <div className="flex flex-col items-center ">
            <div className='md:flex md:flex-col md:pl-20'>
              <h4 className='text-xl  text-blue-juli-color font-inter font-semibold w-[90%] mb-5'>Asistencia Personalizada 24/7</h4>
            </div>
            <div className='rounded-xl bg-gradient-to-r from-[#5F5CF4] to-[#C49FE0] w-[90%] h-[20rem]  '>
              <img src='jus-removebg-preview_1.png' alt="image-landing-page" className='w-[40%] relative top-[1rem] left-4 ' />
              <img src='Ellipse_136.png' alt="image-landing-page" className='w-[40%] relative left-[10rem] top-[3rem]' />
            </div>
          </div>

          <div className="flex flex-col items-center mt-10">
            <div className='md:flex md:flex-col md:pl-20'>
              <h4 className='text-xl  text-blue-juli-color font-inter font-semibold w-[90%] mb-5 ml-5'>Plataforma Integral Para Transplantes</h4>
            </div>
            <img src='CenterContent.png' alt="image-landing-page" className='md:mr-20 w-[90%]' />
          </div>

          <div className="flex flex-col items-center mt-10">
            <div className='md:flex md:flex-col md:pl-20'>
              <h4 className='text-xl  text-blue-juli-color font-inter font-semibold w-[90%] mb-5 ml-5'>Purus id tellus arcu habitant proin magna. Integer purus </h4>
            </div>
            <img src='image.png' alt="image-landing-page" className='md:ml-32 w-[90%]' />
          </div>


        </section>

        {/* Version Desktop - Diferenciadores */}
        <section className='md:flex md:flex-col md:gap-y-8 hidden'>
          <div className='text-center gap-y-4 flex flex-col md:mb-10'>
            <h2 className={`md:font-bold md:font-inter md:text-5xl text-blue-juli-color  ${styles.h2}`}>Lo que ofrecemos</h2>
            <h5 className={` ${styles.h5}`}>Nuestros diferenciadores.</h5>
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
            <div className='md:rounded-xl md:bg-gradient-to-r md:from-[#5F5CF4] md:to-[#C49FE0] md:w-[30%] md:h-[20rem] md:ml-44 '>
              <img src='jus-removebg-preview_1.png' alt="image-landing-page" className='md:ml-32 md:w-40 md:relative md:right-20 ' />
              <img src='Ellipse_136.png' alt="image-landing-page" className='md:ml-32 md:w-36 md:relative md:left-20' />
            </div>
            <div className='md:flex md:flex-col md:pr-20 md:w-[45%]'>
              <h4 className='md:text-5xl md:font-inter md:font-semibold text-blue-juli-color md:mb-4'>Asistencia Personalizada 24/7</h4>
              <h5 className={`${styles.h5} `}>
                “CORA” Nuestro bot de ayuda está disponible las 24 horas del día, los 7 días de la semana,
                ofreciendo respuestas rápidas y precisas a las preguntas de los pacientes,
                recordatorios de citas y seguimiento de tratamientos.
              </h5>
            </div>
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
            <div className='md:flex md:flex-col md:pr-20 md:w-[45%] md:ml-32'>
              <h4 className='md:text-5xl md:font-inter md:font-semibold text-blue-juli-color md:mb-10'>Plataforma Integral para Trasplantes</h4>
              <h5 className={`${styles.h5} `}>Justina.IO se centra en coordinar a especialistas de la salud para gestión y coordinación de trasplantes de órganos, brindando herramientas de comunicación eficiente entre equipos médicos.</h5>
            </div>
            <img src='CenterContent.png' alt="image-landing-page" className='md:mr-20' />
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
            <img src='image.png' alt="image-landing-page" className='md:ml-32' />
            <div className='md:flex md:flex-col md:pr-20 md:w-[45%]'>
              <h4 className='md:text-5xl md:font-inter md:font-semibold text-blue-juli-color md:mb-10'>Interfaz Amigable y Accesible</h4>
              <h5 className={`${styles.h5} `}>Nuestra plataforma es fácil de usar y está diseñada para ser accesible a usuarios de todas las edades y niveles de experiencia tecnológica. Esto garantiza que tanto pacientes como médicos puedan beneficiarse de nuestras soluciones sin complicaciones.</h5>
            </div>
          </div>

        </section>

        {/*Version Mobile  */}
        <section className='md:hidden flex flex-col gap-y-6 mt-10 items-center'>
          <h2 className={styles.h2}>Preguntas Frecuentes</h2>
          <h5 className={styles.h5}>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.</h5>
          <Accordion className='gap-y-4 flex flex-col'>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <AccordionItem key={index} aria-label={`FAQ ${index + 1}`} title={`FAQ ${index + 1}`}>
                {defaultContent}
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Version Desktop  */}
        <section className='md:flex md:flex-row md:gap-y-6 md:items-center md:bg-cover md:bg-center md:h-screen' style={{ backgroundImage: 'url(IMG_FONDO/IMG_FONDO.png)' }}>
          <div className='md:flex md:flex-col md:pl-10'>
            <h2 className={`md:font-inter md:font-[600] md:mb-7 md:text-5xl md:text-white ${styles.h2}`}>Preguntas Frecuentes</h2>
            <h5 className={`md:font-inter md:text-white ${styles.h5} md:w-[70%] md:text-lg`}>
              Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.
            </h5>
          </div>
          <div className='md:w-[80%] md:bg-[#423FD9] md:h-[60%] md:mr-10 md:text-white'>
            <Accordion className='md:gap-y-4 md:text-white md:flex md:flex-col' >
              <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" className='md:text-white' style={{ color: '#ffffff' }}>
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                {defaultContent}
              </AccordionItem>
              <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Version Mobile - Clientes  */}
        <section className='md:hidden text-center flex items-center flex-col gap-4'>
          <h2 className={styles.h2}>Clientes</h2>
          <h5 className={styles.h5}>Neque, pulvinar vestibulum non aliquam.</h5>
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} width={30} height={30} />
            ))}
          </div>
          <p className='px-24 leading-9 font-semibold'>
            ““Como médico, Justina.IO me ha permitido gestionar mis pacientes de manera más eficiente.
            La plataforma es intuitiva y me ha ayudado a mantener una comunicación constante y efectiva con mis pacientes,
            especialmente en casos de trasplantes.””
          </p>
          <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full"></span>
          <p className='font-semibold'>Courtney Henry</p>
        </section>

        {/* Version Desktop - Clientes  */}
        <section className='text-center flex items-center flex-col gap-4 md:mt-10'>
          <h2 className={styles.h2}>Clientes</h2>
          <h5 className={styles.h5}>Valor que Retribuye valor </h5>
          <div className='md:flex md:flex-row md:mt-10'>
            <div className='md:flex md:flex-col md:items-center md:w-[100%]'>
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} width={30} height={30} />
                ))}
              </div>
              <p className='px-20 leading-9 font-semibold'>
                “Como médico, Justina.IO me ha permitido gestionar mis pacientes de manera más eficiente. La plataforma es intuitiva y me ha ayudado a mantener una comunicación constante y efectiva con mis pacientes, especialmente en casos de trasplantes.”
              </p>
              <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full"></span>
              <img src="IMG_MEDICO/IMG_MEDICO.png" className='md:w-10' alt="" />
              <p className='font-semibold md:w-[25%] md:text-gray-500 md:mt-2'>Doctor Ortega
                (Médico internista)</p>
            </div>

            <div className='md:flex md:flex-col md:items-center md:w-[100%]'>
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} width={30} height={30} />
                ))}
              </div>
              <p className='px-20 leading-9 font-semibold'>
                “Como médico, Justina.IO me ha permitido gestionar mis pacientes de manera más eficiente. La plataforma es intuitiva y me ha ayudado a mantener una comunicación constante y efectiva con mis pacientes, especialmente en casos de trasplantes.”
              </p>
              <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full"></span>
              <img src="IMG_MEDICO/IMG_MEDICO_2.png" className='md:w-10' alt="" />
              <p className='font-semibold md:w-[25%] md:text-gray-500 md:mt-2'>Doctor Ortega
                (Médico internista)</p>
            </div>

          </div>
        </section>

        <section className='md:hidden gap-4 flex flex-col'>
          <img src='logo-justina.webp' className='w-40' alt="logo-justina" />
          <div className='bg-light-color p-6 pl-10 flex flex-col gap-3 rounded-lg'>
            <p className='font-bold'>Subscribe</p>
            <Input type='email' placeholder='Email address' />
            <p className='text-gray-color text-md'>
              Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi.
            </p>
          </div>
        </section>
      </article>
      <footer className='flex md:hidden flex-col gap-y-8 p-4 md:bg-[#232233]'>
        {['Product', 'Information', 'Company'].map((section, index) => (
          <div key={index}>
            <h6 className='tracking-wider mb-2 font-bold'>{section}</h6>
            <ul className='flex flex-col list-none text-gray-color leading-8 font-normal'>
              {['Mi feugiat', 'Netus fermentum', 'Id dolor', 'Erat mattis', 'Suspendisse viverra'].map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <ul className='flex list-none justify-around'>
          <li className='font-bold cursor-pointer'>Terms</li>
          <li className='font-bold cursor-pointer'>Privacy</li>
          <li className='font-bold cursor-pointer'>Cookies</li>
        </ul>
        <ul className="list-none flex justify-center gap-x-6">
          {[<LinkedinIcon width={20} height={20} />, <FacebookIcon width={20} height={20} />, <></>].map((icon, idx) => (
            <li key={idx} className='border-2 rounded-full w-12 h-12 items-center justify-center flex cursor-pointer hover:scale-105 transition-all duration-300'>
              {icon}
            </li>
          ))}
        </ul>
      </footer>

      {/* Version Desktop */}
      <footer className='md:bg-[#232233] md:h-full md:flex md:flex-col md:items-center mt-10 hidden'>

        <div className='md:text-white md:grid md:grid-cols-4 md:mt-10 w-[85%] '>
          <div className='md:mt-20'>
            <h6 className='tracking-wider mb-2 font-bold'>Justina.IO</h6>
            <ul className='flex flex-col list-none text-gray-color leading-8 font-normal'>
              <li>Servicios</li>
              <li>Cora</li>
              <li>Transplantes</li>
            </ul>
          </div>

          <div className='md:mt-20'>
            <h6 className='tracking-wider mb-2 font-bold'>Información</h6>
            <ul className='flex flex-col list-none text-gray-color leading-8 font-normal'>
              <li>Preguntas frecuentes</li>
            </ul>
          </div>

          <div className='md:mt-20'>
            <h6 className='tracking-wider mb-2 font-bold'>Acerca de</h6>
            <ul className='flex flex-col list-none text-gray-color leading-8 font-normal'>
              <li>Ley Justina</li>
              <li>Casa Justina</li>
              <li>Nosotros</li>
            </ul>
          </div>

          <div className='md:mt-20 md:rounded-md md:w-[110%] md:bg-[#5956E9] md:p-10'>
            <h4 className='md:mb-2'>Subscrirse</h4>
            <form className='flex items-center'>
              <input type="email" placeholder='Correo Electronico' className='bg-light-color px-6 rounded-lg border-none p-2 text-black' />
              <button className='bg-[#E08733] py-[11px] px-3 rounded-se-medium rounded-ee-medium relative right-10'> <FlechaIcon width={20} height={20} /> </button>
            </form>
            <p className='md:w-[120%] md:font-inter md:text-sm md:mt-3 md:font-[300] '>¿Quieres estar al día con las últimas novedades y recibir recordatorios importantes?
              Suscríbete a nuestras notificaciones por correo electrónico. </p>
          </div>

        </div>

        <span className='md:border-t-2 md:border-gray-color w-[80%] mt-20'>

        </span>
        <div className='md:text-white md:w-full md:flex '>
          <section className=" md:flex md:mt-20 md:justify-between md:items-center  md:flex-row md:w-[100%]  ">
            <div className='md:flex md:flex-row  md:w-[20%] '>
              <img src="D_1.png" alt="" />
              <img src="LOGOS/JustinaLogo_Lading.png" className='md:w-[70%]' alt="" />
            </div>

            <ul className='md:flex md:items-center md:gap-10'>
              <li className='font-bold cursor-pointer'>Terminos</li>
              <li className='font-bold cursor-pointer'>Privacidad</li>
              <li className='font-bold cursor-pointer'>Cookies</li>
            </ul>

            <div className='md:flex md:flex-row gap-6 mr-10'>
              {[<LinkedinIcon width={20} height={20} />, <FacebookIcon width={20} height={20} />, <GitBrantIcon width={20} height={20} />].map((icon, idx) => (
                <li key={idx} className='border-2 rounded-full w-12 h-12 items-center justify-center flex cursor-pointer hover:scale-105 transition-all duration-300'>
                  {icon}
                </li>
              ))}
            </div>

          </section>
        </div>

      </footer>
    </main>
  );
};
