import { Accordion, AccordionItem, Button, Input } from '@nextui-org/react';
import styles from '../../styles.module.css';
import { Link } from 'react-router-dom';
import { CheckIcon, CheckIconTwo, ChevronIcon, CloudIcon, CorIcon, DonationIcon, FacebookIcon, FeaturesIcon, FlechaIcon, GitBrantIcon, HistoryIconTwo, LinkedinIcon, RecordIcon, SecurityIcon, StarIcon, StorageIcon, TimeIcon, TratamentIcon, UpdateIcon, VideoIcon, WacthIcon } from '../../../public/icons/Icons';
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
  const question_One = "Para poder registrarse dentro de la aplicacion lo que necesitas en tu numero de matricula como medico, esto habilita la entrada al sistema.";
  const question_Two = "Cora esta diseñado para ofrecer información y soporte general, pero no sustituye la opinión de un profesional de la salud.";
  const question_Three = "Todos los datos que registre dentro de la aplicacion queda reguardados y solo el medico asigna puede revisar los mismos.";
  const question_four = "Si, actualmente solo existe la version mobile, en un futuro queremos poder hacer la version para computadora para una mejora experiencia de usuario"
  const question_five = "Para programar una cita con su médico se tiene que coordina con el presencial o de manera virtual con el apartado de mensajeria, este mismo turno lo gestion el profecional atraves de la plataforma, a usted como paciente le llega una notificación con el turno, puede confirmar o rechazar el turno.";

  return (
    <main className='w-full md:mx-0 md:max-w-full md:p-0 '>
      <nav className='hidden   md:flex md:flex-row md:justify-between font-inter  md:items-center md:w-full md:bg-[#5956E9] md:py-2 md:mb-0 md:text-white  md:border-black  md:shadow-black md:shadow-small'>
        <div className='md:ml-4'>
          <img src="./public/LOGOS/JustinaLogo_Lading.png" className='md:w-20' alt="" />
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
            <img src="./public/Avatar.png" className='md:mr-8' alt="" />
          </Link>
        </div>
      </nav>
      <Nav />
      <article className='flex flex-col md:pl-0  '>

        {/* Destoks y Mobile */}
        <section className="flex flex-col items-center md:gap-y-0 md:flex-row bg-cover md:bg-center md:h-screen  " style={{ backgroundImage: 'url(./public/IMG_FONDO/IMG_FONDO.png)' }}>
          <div className='flex  w-full flex-col md:flex-col mt-2 md:mt-30 md:ml-10'>
            <h2 className={`mt-5 text-center md:text-start md:mb-4 md:text-[3rem] md:mt-0 text-white ${styles.h2}`}>JUSTINA.IO</h2>
            <p className='md:text-3xl text-2xl font-[300] mt-5 w-[80%] ml-4 font-inter mb-4 md:mt-4 text-white  md:w-[80%]'>
              Creemos en un enfoque integral y humano, donde cada paciente recibe el apoyo necesario en cada etapa de su tratamiento.
            </p>
            <Link to="/onboarding">
              <Button className='rounded-md bg-[#E08733] ml-5 mt-6 mb-10 drop-shadow-lg  w-36 md:mt-5 h-12 text-white font-[300] font-inter '>Acceder</Button>
            </Link>
          </div>
          <img src='./public/LOGOS/JustinaLogo_Lading.png' className='md:rounded-lg min-w-[900px]:hidden w-[60%] mb-4 md:mb-32 md:mr-36 md:w-[30%] md:h-[20rem]' alt="image-landing-page" />
        </section>

        {/* Dispositivo Mobile */}
        <section className='flex flex-col gap-y-8 md:hidden content-center'>
          <h5 className={`hidden ${styles.h5}`}>ACERCA DE</h5>
          <div className='flex flex-col ml-5'>
            <h2 className={`${styles.h2} text-[#5956E9] font-inter font-[600] text-[27px] h-[3rem] mt-16 `}>Una Web App Para Todos</h2>
            <p className=' text-black leading-6 tracking-wide text-sm w-[90%] font-inter font-[500]'>
              Diseñada para transformar la experiencia en el cuidado de la salud. Nuestra misión es proporcionar soluciones eficientes tanto a pacientes como a médicos, mejorando la comunicación, agilizando procesos y brindando un acompañamiento continuo.
              Destacamos especialmente en el área de trasplantes de órganos, ofreciendo herramientas y recursos que facilitan este delicado y vital proceso
            </p>
          </div>
          <h4 className='text-lg ml-4 flex items-center gap-x-3 text-black font-semibold cursor-pointer hover:translate-x-2 transition-all duration-300'>
            Leer Más <ChevronIcon height={15} width={15} />
          </h4>
          <div className=' flex justify-center '>
            <img src='./public/Imagen-1.2.png' alt="image-landing-page" className='mb-10 mt-10 w-[90%] shadow-large ' />

          </div>
        </section>

        {/* Dispositivo Destosk */}
        <section className='hidden md:flex md:flex-row md:mt-32 md:mb-24 '>
          <div className='md:w-[30rem] md:pl-4 md:ml-10 '>
            <img src='./public/Imagen-1.2.png' className='rounded-xl h-[20em] w-[70em]' alt="image-landing-page" />
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
        <section className='flex flex-col gap-y-8 items-center md:justify-center text-white text-center md:mb-32 md:bg-cover md:bg-center md:h-screen rounded-xl' style={{ backgroundImage: 'url(./public/IMG_FONDO/IMG_FONDO.png)' }}>
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



        <section className='flex flex-col mt-10'>
          <div className='text-center gap-y-4 md:flex md:flex-col md:mb-10'>
            <h2 className={`md:font-bold md:font-inter md:text-5xl text-3xl font-inter text-blue-juli-color ${styles.h2} mb-4`}>
              Lo Que Ofrecemos
            </h2>
            <h5 className={` ${styles.h5} text-black font-[400] mb-10 text-lg font-inter`}>
              Nuestro Diferenciadores.
            </h5>
          </div>

          <div className="flex flex-col items-center md:hidden">
            <div className='md:flex md:flex-col md:pl-20'>
              <h4 className='text-xl text-blue-juli-color font-inter font-semibold w-[90%] mb-5'>
                Asistencia Personalizada 24/7
              </h4>
            </div>
            <div className='relative grid grid-cols-1 grid-rows-2 rounded-xl bg-gradient-to-r from-[#5F5CF4] to-[#C49FE0] w-[90%] h-[20rem]'>
              <img src='./public/jus-removebg-preview_1.png' alt="image-landing-page" className='absolute top-0 left-0 w-[35%] h-auto lg:w-[20%]' />
              <img src='./public/Ellipse_136.png' alt="image-landing-page" className='absolute bottom-0 right-0 w-[35%] h-auto lg:w-[20%]' />
            </div>
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
            <div className='md:rounded-xl md:bg-gradient-to-r md:from-[#5F5CF4] md:to-[#C49FE0] md:w-[33%] md:h-[17rem] md:ml-36'>
              <img src='./public/jus-removebg-preview_1.png' alt="image-landing-page" className='md:relative md:bottom-auto xl:left-10 md:left-auto md:w-28 lg:w-36 xl:w-36' />
              <img src='./public/Ellipse_136.png' alt="image-landing-page" className='md:relative md:bottom-auto md:left-40 xl:left-60 xl:bottom-3 lg:left-40  md:w-28 lg:w-32 xl:w-36' />
            </div>
            <div className='md:flex md:flex-col md:pr-20 md:w-[45%]'>
              <h4 className='md:text-5xl md:font-inter md:font-semibold text-blue-juli-color md:mb-4'>
                Asistencia Personalizada 24/7
              </h4>
              <h5 className={`${styles.h5} `}>
                “CORA” Nuestro bot de ayuda está disponible las 24 horas del día, los 7 días de la semana,
                ofreciendo respuestas rápidas y precisas a las preguntas de los pacientes,
                recordatorios de citas y seguimiento de tratamientos.
              </h5>
            </div>
          </div>

          <div className="flex flex-col items-center mt-10 md:hidden">
            <div className='md:flex md:flex-col md:pl-20'>
              <h4 className='text-xl text-blue-juli-color font-inter font-semibold w-[90%] mb-5 ml-5'>
                Plataforma Integral Para Transplantes
              </h4>
            </div>
            <img src='./public/CenterContent.png' alt="image-landing-page" className='md:mr-20 w-[90%]' />
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
            <div className='md:flex md:flex-col md:pr-20 md:w-[45%] md:ml-32'>
              <h4 className='md:text-5xl md:font-inter md:font-semibold text-blue-juli-color md:mb-10'>
                Plataforma Integral para Trasplantes
              </h4>
              <h5 className={`${styles.h5} `}>
                Justina.IO se centra en coordinar a especialistas de la salud para gestión y coordinación de trasplantes de órganos, brindando herramientas de comunicación eficiente entre equipos médicos.
              </h5>
            </div>
            <img src='./public/CenterContent.png' alt="image-landing-page" className='md:mr-20' />
          </div>

          <div className="flex flex-col items-center mt-10 md:hidden">
            <div className='md:flex md:flex-col md:pl-20'>
              <h4 className='text-xl text-blue-juli-color font-inter font-semibold w-[90%] mb-5 ml-5'>
                Purus id tellus arcu habitant proin magna. Integer purus
              </h4>
            </div>
            <img src='./public/image.png' alt="image-landing-page" className='md:ml-32 w-[90%]' />
          </div>

          <div className="hidden md:flex md:flex-row md:items-center md:justify-between ">
            <img src='./public/image.png' alt="image-landing-page" className='md:ml-32' />
            <div className='md:flex md:flex-col md:pr-20 md:w-[45%]'>
              <h4 className='md:text-5xl md:font-inter md:font-semibold text-blue-juli-color md:mb-10'>
                Interfaz Amigable y Accesible
              </h4>
              <h5 className={`${styles.h5} `}>
                Nuestra plataforma es fácil de usar y está diseñada para ser accesible a usuarios de todas las edades y niveles de experiencia tecnológica. Esto garantiza que tanto pacientes como médicos puedan beneficiarse de nuestras soluciones sin complicaciones.
              </h5>
            </div>
          </div>
        </section>


        {/*Version Mobile - Preguntas Frecuentes */}
        <section className='md:hidden flex flex-col gap-y-4 mt-10  mb-10 bg-cover h-screen bg-center text-white ' style={{ backgroundImage: 'url(./public/IMG_FONDO/IMG_FONDO.png)' }}>
          <h2 className={`${styles.h2} ml-3 mt-20 font-inter font-[500] text-[25px] `}>Preguntas Frecuentes</h2>
          <h5 className={`w-[60%] ml-3 font-inter text-white ${styles.h5}`}>Las mas solicitadas de nuestros servicios</h5>
          <Accordion className='flex flex-col text-white '>

            <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500 text-white' title={`¿Como me regitros en Justina.IO? `}>
              {question_One}
            </AccordionItem>
            <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿El bot de ayuda puede darme diagnósticos médicos?`}>
              {question_Two}
            </AccordionItem>
            <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿Como manejar la privacidad de mis datos?`}>
              {question_Three}
            </AccordionItem>
            <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿Puedo acceder desde mi smartphone?`}>
              {question_four}
            </AccordionItem>
            <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿Como programar una cita con mi médico a través de JUSTINA.IO?`}>
              {question_five}
            </AccordionItem>


          </Accordion>
        </section>

        {/* Version Desktop  */}
        <section className='hidden md:flex md:flex-row md:gap-y-6 md:items-center md:bg-cover md:bg-center md:h-screen' style={{ backgroundImage: 'url(./public/IMG_FONDO/IMG_FONDO.png)' }}>
          <div className='md:flex md:flex-col md:pl-10'>
            <h2 className={`md:font-inter md:font-[600] md:mb-7 md:text-5xl md:text-white ${styles.h2}`}>Preguntas Frecuentes</h2>
            <h5 className={`md:font-inter md:text-white ${styles.h5} md:w-[70%] md:text-lg`}>
              Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.
            </h5>
          </div>
          <div className='md:w-[80%] md:h-[60%] md:mr-10 md:mt-20 md:text-white'>
            <Accordion className=' md:text-white md:flex md:flex-col' >
              <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500 text-white' title={`¿Como me regitros en Justina.IO? `}>
                {question_One}
              </AccordionItem>
              <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿El bot de ayuda puede darme diagnósticos médicos?`}>
                {question_Two}
              </AccordionItem>
              <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿Como manejar la privacidad de mis datos?`}>
                {question_Three}
              </AccordionItem>
              <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿Puedo acceder desde mi smartphone?`}>
                {question_four}
              </AccordionItem>
              <AccordionItem className='bg-cyan-500 rounded-md pl-3 border-2 border-solid border-gray-500' title={`¿Como programar una cita con mi médico a través de JUSTINA.IO?`}>
                {question_five}
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

          <img src="./public/IMG_MEDICO/IMG_MEDICO.png" className='w-10' alt="" />
          <p className='font-semibold'>Courtney Henry</p>
        </section>

        {/* Version Desktop - Clientes  */}
        <section className='text-center md:flex items-center flex-col gap-4 md:mt-10 hidden'>
          <h2 className={styles.h2}>Clientes</h2>
          <h5 className={styles.h5}>Valor que Retribuye valor </h5>
          <div className='md:flex md:flex-row md:mt-10 mb-3'>
            <div className='flex flex-col items-center md:w-[100%] w-[100%]'>
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} width={30} height={30} />
                ))}
              </div>
              <p className='px-9 mt-3 leading-9 font-semibold w-[100%]'>
                “Como médico, Justina.IO me ha permitido gestionar mis pacientes de manera más eficiente. La plataforma es intuitiva y me ha ayudado a mantener una comunicación constante y efectiva con mis pacientes, especialmente en casos de trasplantes.”
              </p>
              <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full"></span>
              <img src="./public/IMG_MEDICO/IMG_MEDICO.png" className='w-10' alt="" />
              <p className='font-semibold md:w-[25%] w-[40%] mt-3 md:text-gray-500 md:mt-2'>Doctor Ortega
                (Médico internista)</p>
            </div>

            <div className='flex flex-col items-center md:w-[100%] mt-10'>
              <div className="flex gap-2">
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} width={30} height={30} />
                ))}
              </div>
              <p className='px-9 mt-3 leading-9 font-semibold'>
                “Como médico, Justina.IO me ha permitido gestionar mis pacientes de manera más eficiente. La plataforma es intuitiva y me ha ayudado a mantener una comunicación constante y efectiva con mis pacientes, especialmente en casos de trasplantes.”
              </p>
              <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full"></span>
              <img src="./public/IMG_MEDICO/IMG_MEDICO_2.png" className='md:w-10' alt="" />
              <p className='font-semibold md:w-[25%] md:text-gray-500 md:mt-2'>Doctor Ortega
                (Médico internista)</p>
            </div>

          </div>
        </section>


      </article>

      {/* Version Mobile */}
      <footer className='flex md:hidden flex-col p-4 bg-[#232233] mt-4'>
        <div className='flex flex-row  items-center'>
          <img src="./public/D_1.png" className='w-[50%] h-[50%] ' alt="" />
          <img src="./public/LOGOS/JustinaLogo_Lading.png" className='w-[40%] pl-1 ml-6 mb-4 px-2 py-1 h-[50%] md:w-[70%] ' alt="" />
        </div>
        <div className='bg-[#5956e9] px-10 py-10'>
          <h1 className='text-white font-inter font-semibold mb-4'>Subcribirse</h1>
          <form action="" className='flex items-center'>
            <input type="text" className='py-3 px-5 rounded-s-md' />
            <button className='bg-[#e09733] px-3 py-3 mr-22 rounded-se-md rounded-ee-md'><FlechaIcon width={24} height={24} /></button>
          </form>
          <p className='text-white mt-6 leading-[24px] font-inter text-small font-[400]'>
            ¿Quieres estar al día con las últimas novedades y recibir recordatorios importantes?
            Suscríbete a nuestras notificaciones por correo electrónico.
          </p>
        </div>
        <div className='mb-7 mt-4 ml-4'>
          <h6 className='tracking-wider mb-1 font-bold text-white font-inter'>Jusinta.IO</h6>
          <ul className='flex font-inter flex-col list-none text-gray-color leading-7 font-normal'>
            <li>Servicios</li>
            <li>Cora</li>
            <li>Transplantes</li>
          </ul>
        </div>
        <div className='mb-7 mt-2 ml-4'>
          <h6 className='tracking-wider mb-1  font-bold text-white font-inter'>Informacion</h6>
          <ul className='flex font-inter flex-col list-none text-gray-color leading-7 font-normal'>
            <li>Preguntas Frecuentes</li>
          </ul>
        </div>
        <div className='mb-7 mt-2 ml-4'>
          <h6 className='tracking-wider mb-1  font-bold text-white font-inter'>Acerca de</h6>
          <ul className='flex font-inter flex-col list-none text-gray-color leading-7 font-normal'>
            <li>Ley Justina</li>
            <li>Casa Justina</li>
            <li>Nosotros</li>
          </ul>
        </div>

        <ul className='flex list-none justify-around mb-10 mt-4 text-white font-inter font-[400]'>
          <li className='font-[400] cursor-pointer'>Terminos</li>
          <li className='font-[400] cursor-pointer'>Privacidad</li>
          <li className='font-[400] cursor-pointer'>Cookies</li>
        </ul>
        <ul className="list-none flex justify-center gap-x-6 mb-10">
          {[<LinkedinIcon width={20} height={20} />, <FacebookIcon width={20} height={20} />, <GitBrantIcon width={20} height={20} />].map((icon, idx) => (
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
              <img src="./public/D_1.png" alt="" />
              <img src="./public/LOGOS/JustinaLogo_Lading.png" className='md:w-[70%]' alt="" />
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
