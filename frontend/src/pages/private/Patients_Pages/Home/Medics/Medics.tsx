import useMedics from '../../../../../utils/hooks/useMedics';

export default function Medics() {
  const { medics, loading } = useMedics();

  return (
    <section className="justify-center flex flex-col font-inter mt-5 px-32 max-lg:px-16 max-md:px-8  w-full max-md:items-center ">
      <h3 className="font-bold font-inter text-1xl text-light-color">
        Mis Medicos
      </h3>
      <ol className=' flex gap-4 py-2'>
        {loading ? (<>
          <li className='flex flex-col justify-center items-center'>
            <div className='w-16 h-16 rounded-full bg-gray-300 animate-pulse'></div>
            <div className='mt-2 w-24 h-4 bg-gray-300 animate-pulse'></div>
          </li>
          <li className='flex flex-col justify-center items-center'>
            <div className='w-16 h-16 rounded-full bg-gray-300 animate-pulse'></div>
            <div className='mt-2 w-24 h-4 bg-gray-300 animate-pulse'></div>
          </li>
        </>) :
          (<>
            {medics && medics.content.map((medic) => (
              <li className=' flex flex-col justify-center items-center'>
                <img src="IMG_MEDICO/IMG_MEDICO.webp" alt="image-medic" className='w-16 h-16  rounded-full' />
                <p className=' font-medium text-sm'>{medic.nombre} {medic.apellido}</p>
              </li>
            ))
            }
          </>)
        }
      </ol>
    </section>
  )
}
