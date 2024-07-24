import { Accordion, AccordionItem, Button, Input } from '@nextui-org/react'
import styles from '../../styles.module.css';

import { Link } from 'react-router-dom';
import { ChevronIcon, CloudIcon, FacebookIcon, FeaturesIcon, LinkedinIcon, SecurityIcon, StarIcon, StorageIcon, TimeIcon, UpdateIcon, VideoIcon } from '../../../public/icons/Icons';
import { Nav } from '../../components/Nav';


const items = [
  {
    "icon": <CloudIcon width={30} height={30} />,
    "text": "odio elementum"
  },
  {
    "icon": <TimeIcon width={30} height={30} />,
    "text": "Massa leo"
  },
  {
    "icon": <VideoIcon width={30} height={30} />,
    "text": "Phasellus non"
  },
  {
    "icon": <StorageIcon width={30} height={30} />,
    "text": "Feugiat mauris"
  },
  {
    "icon": <SecurityIcon width={30} height={30} />,
    "text": "Facilisis facilisis"
  },
  {
    "icon": <FeaturesIcon width={30} height={30} />,
    "text": "Tortor amet"
  },
  {
    "icon": <UpdateIcon width={30} height={30} />,
    "text": "Justo, malesuada"
  }
];


export const Landing = () => {
  const defaultContent = "Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc mattis leo massa.";
  return (
    <main className=' border-2 border-gray max-w-md  m-auto max-md:w-full'>
      <Nav></Nav>
      <article className=' p-4 flex flex-col gap-y-10'>
        <section className=' flex flex-col gap-y-4'>
          <h2 className={styles.h2}>JUSTINA.IO</h2>
          <p className=' text-lg text-gray-color'>At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.</p>
          <Link to={"/onboarding"} >
            <Button color='primary' className=' rounded-sm w-36 h-11'>Get Started</Button>
          </Link>
          <img src={'./public/Image-generic.png'} alt="image-landing-page" />
        </section>
        <section className=' flex flex-col gap-y-8'>
          <h5 className={styles.h5}>ACERCA DE</h5>
          <h2 className={styles.h2}>Etiam nulla lectus amet nunc molestie </h2>
          <p className='text-xl text-gray-color leading-8 tracking-wide	'>Metus, diam pretium at at morbi vulputate et. Tellus ipsum sollicitudin ut eu a lectus potenti maecenas </p>
          <h4 className='text-xl flex items-center gap-x-3 text-blue-light-color font-semibold cursor-pointer hover:translate-x-2 transition-all duration-300'>Read More <ChevronIcon height={15} width={15}></ChevronIcon></h4>
          <img src={'./public/Image-generic.png'} alt="image-landing-page" />
        </section>
        <section className='flex flex-col gap-y-8 items-center text-center'>
          <h5 className={styles.h5}>SERVICIOS</h5>
          <h2 className={styles.h2}>Etiam nulla lectus amet nunc molestie at vulputate.</h2>
          <h5 className={styles.h5}>Neque, pulvinar vestibulum non aliquam.</h5>
          <li className=' list-none flex flex-col gap-y-16'>
            {items.map((item, index) => (
              <ol key={index} className=' gap-y-4 flex flex-col justify-center items-center'>
                <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full">
                  {item.icon}
                </span>
                <p className="font-bold text-md">{item.text}</p>
              </ol>
            ))}
          </li>
        </section>
        <section className=' flex flex-col gap-y-8'>
          <div className=' text-center gap-y-4 flex flex-col'>
            <h2 className={styles.h2}>Diferenciadores</h2>
            <h5 className={styles.h5}>Neque, pulvinar vestibulum non aliquam.</h5>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className='text-2xl font-semibold'>Purus id tellus arcu habitant proin magna. Integer purus </h4>
            <h5 className={styles.h5}>Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.</h5>
            <img src={'./public/Image-generic.png'} alt="image-landing-page" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className='text-2xl font-semibold'>Purus id tellus arcu habitant proin magna. Integer purus </h4>
            <h5 className={styles.h5}>Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.</h5>
            <img src={'./public/Image-generic.png'} alt="image-landing-page" />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className='text-2xl font-semibold'>Purus id tellus arcu habitant proin magna. Integer purus </h4>
            <h5 className={styles.h5}>Facilisi viverra dictum augue eu lobortis elit. In et donec habitasse lacus mi commodo elementum.</h5>
            <img src={'./public/Image-generic.png'} alt="image-landing-page" />
          </div>
        </section>
        <section className='flex flex-col gap-y-6'>
          <h2 className={styles.h2}>Preguntas Frecuentes</h2>
          <h5 className={styles.h5}>Pellentesque cras adipiscing tempus libero vel nullam mauris tellus. Aliquam ultrices tellus consequat amet, lectus aliquam est in neque.</h5>
          <Accordion className=' gap-y-4 flex flex-col'>
            <AccordionItem key="1" aria-label="How soon will my order ship?" title="How soon will my order ship?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="How soon will my order ship?" title="How soon will my order ship?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="How soon will my order ship?" title="How soon will my order ship?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="4" aria-label="How soon will my order ship?" title="How soon will my order ship?">
              {defaultContent}
            </AccordionItem>
            <AccordionItem key="5" aria-label="How soon will my order ship?" title="How soon will my order ship?">
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </section>
        <section className='text-center flex items-center flex-col gap-4'>
          <h2 className={styles.h2}>Clientes</h2>
          <h5 className={styles.h5}>Neque, pulvinar vestibulum non aliquam.</h5>
          <div className="flex  gap-2">
            <StarIcon width={30} height={30}></StarIcon>
            <StarIcon width={30} height={30}></StarIcon>
            <StarIcon width={30} height={30}></StarIcon>
            <StarIcon width={30} height={30}></StarIcon>
            <StarIcon width={30} height={30}></StarIcon>
          </div>
          <p className=' px-24 leading-9 font-semibold'>“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”</p>
          <span className="bg-light-color w-16 h-16 flex items-center justify-center rounded-full">

          </span>
          <p className=' font-semibold'>Courtney Henry</p>

        </section>
        <section className=' gap-4 flex flex-col'>
          <img src={'./public/logo-justina.webp'} className=' w-40' alt="logo-justina" />
          <div className=' bg-light-color p-6 pl-10 flex flex-col gap-3 rounded-lg'>
            <p className=' font-bold'>Subscribe</p>
            <Input type='email' placeholder='Email addres'></Input>
            <p className=' text-gray-color text-md'>Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi. </p>
          </div>
        </section>
      </article>
      <footer className='flex flex-col  gap-y-8 p-4'>
        <div>
          <h6 className=' tracking-wider mb-2 font-bold'>Product</h6>
          <li className=' flex flex-col list-none text-gray-color leading-8 font-normal'>
            <ol>Mi feugiat</ol>
            <ol>Netus fermentum</ol>
            <ol>Id dolor</ol>
            <ol>Erat mattis</ol>
            <ol>Suspendisse viverra</ol>
          </li>
        </div>
        <div>
          <h6 className=' tracking-wider mb-2 font-bold'>Information</h6>
          <li className=' flex flex-col list-none text-gray-color leading-8 font-normal'>
            <ol>Mi feugiat</ol>
            <ol>Netus fermentum</ol>
            <ol>Id dolor</ol>
            <ol>Erat mattis</ol>
            <ol>Suspendisse viverra</ol>
          </li>
        </div>
        <div>
          <h6 className=' tracking-wider mb-2 font-bold'>Company</h6>
          <li className=' flex flex-col list-none text-gray-color leading-8 font-normal'>
            <ol>Mi feugiat</ol>
            <ol>Netus fermentum</ol>
            <ol>Id dolor</ol>
            <ol>Erat mattis</ol>
            <ol>Suspendisse viverra</ol>
          </li>
        </div>
        <li className=' flex list-none justify-around'>
          <ol className=' font-bold cursor-pointer'>Terms</ol>
          <ol className=' font-bold cursor-pointer'>Privacity</ol>
          <ol className=' font-bold cursor-pointer'>Cookies</ol>
        </li>
        <li className=" list-none flex  justify-center gap-x-6">
          <ol className=' border-2 rounded-full w-12 h-12 items-center justify-center flex cursor-pointer hover:scale-105 transition-all duration-300'>
            <LinkedinIcon width={20} height={20}></LinkedinIcon>
          </ol>
          <ol className=' border-2 rounded-full w-12 h-12 items-center justify-center flex cursor-pointer hover:scale-105 transition-all duration-300'>
            <FacebookIcon width={20} height={20}></FacebookIcon>
          </ol>
          <ol className=' border-2 rounded-full w-12 h-12 items-center justify-center flex cursor-pointer hover:scale-105 transition-all duration-300'>

          </ol>
        </li>
      </footer>
    </main>

  )
}
