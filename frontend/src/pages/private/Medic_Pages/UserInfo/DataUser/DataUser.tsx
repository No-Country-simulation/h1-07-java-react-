import React from 'react'
import { CardIcon, HomeIcon, MapIcon, PhoneIcon } from '../../../../../../public/icons/Icons'

interface ProfileProps {
  licencia: string | undefined
  localidad: string | undefined
  telefono: string | undefined
  provincia: string | undefined
}

export const DataUser: React.FC<ProfileProps> = ({ licencia, localidad, telefono, provincia }) => {
  return (
    <section className=" my-8 max-w-4xl m-auto px-4">
      <div>
        <h2 className="font-bold text-2xl font-inter">Datos Personales</h2>
      </div>
      <div className="mt-4 space-y-4">
        <Field label="Licencia" icon={<CardIcon width={16} height={16} />} value={licencia} />
        <Field label="Localidad" icon={<HomeIcon width={16} height={16} />} value={localidad} />
        <Field label="Provincía" icon={<MapIcon width={16} height={16} />} value={provincia} />
        <Field label="Teléfono" icon={<PhoneIcon width={16} height={16} />} value={telefono} />
      </div>
    </section>
  )
}

interface PropsField{
  label: string
  value:string | undefined
  icon: JSX.Element;
}

const Field:React.FC<PropsField> = ({ label, icon, value }) => {
  return (
    <div>
      <div className="flex items-center">
        {icon}
        <p className="ml-3 font-inter font-bold">{label}</p>
      </div>
      <div className="mt-3 w-full">
        <input
          type="text"
          value={value}
          disabled
          className="p-3 border-2 border-solid border-gray-400 rounded-xl w-full"
        />
      </div>
    </div>
  );
};