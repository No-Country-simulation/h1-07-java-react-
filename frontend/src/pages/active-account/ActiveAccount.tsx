import { Divider } from '@nextui-org/react'
import { ArrowIcon, CheckIcon } from '../../components/icons/Icons'
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../api/api';


export const ActiveAccount = () => {
  // const navigate = useNavigate();
  const [token, setToken] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    if (/^[0-9]$/.test(value) || value === '') {
      const newtoken = token.map((data, idx) => (idx === index ? value : data));
      setToken(newtoken);
      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  //EVITA LOS ESPACIOS VACIOS
  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && token[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }


  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tokenValue = token.join(""); // Obtén el valor del token
    try {
      //token de prueba 139163
      //el problema es en este fetch

      const res = await fetch(`${API_URL}?token=${tokenValue}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenValue}`,
        },
      });

      const data = res.json()
      console.log(data);
    } catch (err: any) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <section className='border-2 flex flex-col gap-y-4 w-96 max-md:w-full m-auto p-4 max-md:p-8 mt-8 max-w-md text-center'>
      <div className="flex flex-col ">
        <h5 className=' relative  text-xl text-center font-bold tracking-wide flex items-center justify-center'>
          <Link to={'/'} className=' absolute left-0 cursor-pointer hover:-translate-x-1 transition-all duration-300'>
            <ArrowIcon width={24} height={24} />
          </Link>
          Verificación
        </h5>
        <Divider orientation='horizontal' className=' my-4 w-full'></Divider>
        <div className='m-auto w-32 h-32 bg-light-color rounded-full flex justify-center items-center'>
          <div className=' w-24 h-24 bg-primary-brand-dark rounded-full flex justify-center items-center'>
            <CheckIcon width={40} height={40}></CheckIcon>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <h6 className=' text-xl font-bold'>Código de verificación</h6>
          <p className='text-primary-brand-light text-lg'>Hemos enviado el código al correo</p>
          {/* <p className='text-lg font-semibold'>drortegaramirez@gmail.com</p> */}
        </div>
      </div>
      <form className='flex flex-col gap-y-4' onSubmit={handleSubmitForm}>
        <div className="flex gap-2 justify-center flex-wrap">
          {token.map((value, index: number) => (
            <input
              key={index}
              type="text"
              className=' h-12 w-12 border-2 rounded-md border-text-primary-brand-light text-3xl flex items-center justify-center text-center'
              placeholder='0'
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength={1}
            />
          ))}
        </div>
        <p className='text-lg font-bold'>Introduzca el código enviado</p>
        <button
          type='submit'
          disabled={token.join("").length < 6}
          className="w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Aceptar
        </button>
      </form>
      <div className="flex items-center justify-center h-[12rem]" >
        <img src="JustinaLogo.png" alt="" className="w-[200px] h-[158px]" />
      </div>
    </section>
  )
}
