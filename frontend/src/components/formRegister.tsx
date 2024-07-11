import { Button, Input, Radio, RadioGroup } from '@nextui-org/react'
import { EmailIcon, LockIcon, TabletIcon, UserIcon } from './icons/Icons'
import React, { useState } from 'react';

interface PropRegister {
  name: string
  user: string
  email: string
  phone: string
  password: string
  rol: string
}

export const FormRegister = () => {
  const [edit, setEdit] = useState<PropRegister>({
    name: "",
    user: "",
    email: "",
    phone: "",
    password: "",
    rol: ""
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(edit)
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setEdit({
      ...edit,
      [name]: value,
    });
  };

  return (
    <form className='border-2 w-96 max-md:w-full m-auto p-4 max-md:p-8' onSubmit={handleSubmit}>
      <h1 className=' text-xl font-bold tracking-tight'>Crear cuenta</h1>
      <p className=' text-sm'>Introduce la información necesaria</p>
      <div className="my-4 gap-y-4 flex flex-col">
        <span className="flex flex-col">
          <label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="name"><UserIcon width={15} height={15}></UserIcon> Nombre Completo</label>
          <Input onChange={handleChangeInput} className=' placeholder:text-primary-brand-light' placeholder='Ej: Mario Hernandez Hernandez' name="name" value={edit.name} type='text' id='name'></Input>
        </span>
        <span className="flex flex-col">
          <label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="user"><LockIcon width={15} height={15}></LockIcon> Usuario</label>
          <Input onChange={handleChangeInput} className=' placeholder:text-primary-brand-light' placeholder='Ej: Mariohdz22' name="user" value={edit.user} type='text' id='user'></Input>
        </span>
        <span className="flex flex-col">
          <label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="email"><EmailIcon width={15} height={15}></EmailIcon> Correo</label>
          <Input onChange={handleChangeInput} className=' placeholder:text-primary-brand-light' placeholder='Ej: tumail@mailito.com' name="email" value={edit.email} type='email' id='email'></Input>
        </span>
        <span className="flex flex-col">
          <label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="phone"><TabletIcon width={15} height={15}></TabletIcon> Número de teléfono</label>
          <Input onChange={handleChangeInput} className=' placeholder:text-primary-brand-light placeholder:' placeholder='Ej: 55 5555-5555' name="phone" value={edit.phone} type='phone' id='phone'></Input>
        </span>
        <span className="flex flex-col">
          <label className=' font-semibold flex items-center gap-2 pl-2' htmlFor="password"><LockIcon width={15} height={15}></LockIcon> Contraseña</label>
          <Input onChange={handleChangeInput} className=' placeholder:text-primary-brand-light' placeholder='Introduzca contraseña' name="password" value={edit.password} type='password' id='password'></Input>
        </span>
      </div>
      <div className=' flex flex-col justify-center items-center gap-y-4'>
        <p className=' uppercase font-bold'>Soy:</p>
        <RadioGroup className='' name='rol' orientation="horizontal">
          <Radio name='rol' value={'doctor'} onChange={handleChangeInput}>Doctor</Radio>
          <Radio name='rol' value={'patient'} onChange={handleChangeInput}>Paciente</Radio>
        </RadioGroup>
        <Button type='submit' className=' h-10 w-full font-semibold bg-secondary-brand-dark text-white'>Crear Cuenta</Button>
      </div>
    </form>
  )
}
