import React from 'react'
import { BloodIcon, CardIcon, HospitalIcon, ShieldIcon } from '../../../../../../public/icons/Icons'


interface PersonalProps {
  numeroDocumento: number | undefined
  patologia: string | undefined
  entidades: string | undefined
  medicos: string | undefined
}

export const Personal: React.FC<PersonalProps> = ({ numeroDocumento, patologia, entidades, medicos }) => {
  return (
    <section className=" my-8 min-h-[50vh] flex flex-col gap-1 px-32 max-lg:px-16 max-md:px-8 ">
      <div>
        <h2 className="font-bold text-[24px] font-inter">
          Datos Personales
        </h2>
      </div>
      <div className="flex flex-row mt-4 items-center">
        <CardIcon width={16} height={16} />
        <p className="ml-4 font-inter font-bold">Documento</p>
      </div>
      <input
        type="text"
        disabled
        placeholder="Documento"
        value={numeroDocumento}
        className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[100%]"
      />
      <div className="flex flex-row mt-4 items-center">
        <BloodIcon width={16} height={16} />
        <p className="ml-3 font-inter font-bold">Patologia</p>
      </div>
      <input
        type="text"
        disabled
        placeholder="Patologia"
        value={patologia}
        className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[100%]"
      />
      <div className="flex flex-row mt-4 items-center">
        <ShieldIcon width={16} height={16} />
        <p className="ml-3 font-inter font-bold">Medicos</p>
      </div>
      <input
        type="text"
        disabled
        placeholder="Medicos"
        value={medicos}
        className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[100%]"
      />
      <div className="flex flex-row mt-4 items-center">
        <HospitalIcon width={20} height={20} />
        <p className="ml-3 font-inter font-bold">Hospital</p>
      </div>
      <input
        type="text"
        disabled
        placeholder="Medicos"
        value={entidades}
        className="p-3 border-2 border-solid border-gray-400 rounded-xl w-[100%]"
      />
    </section>
  )
}
