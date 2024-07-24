import { Avatar } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import { ArrowWhiteIcon } from '../../public/icons/Icons'
import React from 'react'
import { SkeletonPatientInfo } from './Skeletons'
import { getRandomColor } from '../utils/functions/functions'


interface HeaderProfileProps {
  children?: JSX.Element | JSX.Element[],
  name: string | undefined
  lastname: string | undefined
  typeDocument: string | undefined
  financier: string | undefined
  document: number | undefined
  loading: boolean | undefined
  pathology?: string | undefined
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({  loading, children, name, lastname, typeDocument, financier, document }) => {
  return (

    <header className='p-6 font-inter h-48 relative flex flex-col items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 rounded-br-[4rem] shadow-2xl'>
      <div className="w-full flex flex-col items-start">
        <div className="mb-6 text-center relative flex flex-col items-center justify-center w-full">
          <Link to={"/dashboard"} className=' text-light-color absolute -left-10 hover:-translate-x-1 transition-all duration-300'>
            <ArrowWhiteIcon width={30} height={30} />
          </Link>
          <h1 className="text-xl font-semibold text-light-color">Detalles de paciente</h1>
        </div>
        <div className="flex gap-4 items-center">
          {loading
            ? <SkeletonPatientInfo />
            : <>
              <Avatar name={name} className={`${getRandomColor()}`} isBordered size='lg' />
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
  )
}
