import { Avatar } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { ArrowWhiteIcon, MenuHambuerguesa } from '../../public/icons/Icons'
import React, { useState } from 'react'
import { SkeletonPatientInfo } from './Skeletons'
import { AsideMenu } from './AsideMenu'


interface HeaderProfileProps {
  children?: JSX.Element | JSX.Element[],
  name: string | undefined
  lastname: string | undefined
  typeDocument: string | undefined
  financier: string | undefined
  document: number | undefined
  loading: boolean | undefined
  pathology?: string | undefined
  title?: string
  to?: string
}



export const HeaderProfile: React.FC<HeaderProfileProps> = ({ to, loading, children, name, lastname, typeDocument, financier, document, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  to = "/patient-list"

  return (
    <>
      <AsideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <header className='p-6 font-inter h-48 relative flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-br-[4rem] shadow-2xl'>
        <div className="w-full flex flex-col items-start">
          <div className="mb-6 text-center relative flex flex-col items-center justify-center w-full">
            <Link to={`${to}`} className=' text-light-color absolute -left-0 hover:-translate-x-1 transition-all duration-300'>
              <ArrowWhiteIcon width={30} height={30} stroke='' />
            </Link>
            <div className="flex items-center justify-center">
              <h1 className="text-xl font-bold text-light-color">Listado de pacientes</h1>
              <button onClick={toggleSidebar} className=' absolute right-0'>
                <MenuHambuerguesa width={30} height={30} stroke='' />
              </button>
            </div>        </div>
          <div className="flex gap-4 items-center">
            {loading
              ? <SkeletonPatientInfo />
              : <>
                <Avatar name={name} color='primary' isBordered size='lg' />
                <div className="text-left">
                  <h6 className='font-bold text-light-color'>{name} {lastname}</h6>
                  <p className='text-sm text-light-color font-semibold'>{typeDocument} {document}</p>
                  <p className='text-sm text-light-color font-semibold'>Financiador: {financier} </p>
                </div>
              </>}
          </div>
        </div>
        {
          children
        }
      </header>
    </>
  )
}
