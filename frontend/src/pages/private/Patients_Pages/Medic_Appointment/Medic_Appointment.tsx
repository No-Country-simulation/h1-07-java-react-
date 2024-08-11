import { AdressIcon, CaledarIcon, PhoneIcon, RelojIcon } from "../../../../../public/icons/Icons";


export function Medic_Appointment() {
  return (
    <main>
      <section className="mt-5 flex flex-col items-center rounded-xl">
        <div className="flex flex-col items-center w-[90%] mt-5 bg-[#FFFEED]">
          <img src="IMG_MEDICO/IMG_MEDICO_CITAS_2.webp" alt="image-medic" />
          <h2 className="mt-7 font-inter font-bold">Control y Seguimiento</h2>
          <div className="flex flex-row items-center justify-center gap-x-4 w-full mt-5">
            <div className="flex flex-row items-center">
              <CaledarIcon width={20} height={20} stroke="" classname=""/>
              <p className="font-inter font-semibold ml-1">01/08/2024</p>
            </div>
            <div className="flex flex-row items-center ml-4">
              <RelojIcon width={16} height={16} stroke="" classname=""/>
              <p className="font-inter font-semibold ml-1">10:00 AM</p>
            </div>

          </div>
          <div className="flex flex-row mt-3 justify-evenly w-full">
            <p className="font-bold font-inter">Diábetólogo</p>
            <p className="font-inter">Dr. Ortega</p>
          </div>
        </div>
      </section>
      <section>
        <form action="" className="flex justify-evenly  mt-10">
          <button className="px-6 py-4 font-inter font-bold hover:shadow-lg hover:duration-500 hover:shadow-black shadow-md shadow-black bg-[#B9FFBB] rounded-md">Confirmar cita</button>
          <button className="px-6 py-4 font-inter font-bold hover:shadow-lg hover:duration-500 hover:shadow-black shadow-md shadow-black  bg-[#959596] rounded-md">Cancelar</button>
        </form>
      </section>
      <section className="flex flex-col w-full items-center justify-center font-bold mt-10  mb-10">
        <div className="mb-2 py-5 bg-gray-300 w-[90%] rounded-xl">
          <p className="text-center mb-3">Dirrección</p>
          <p className="flex flex-row gap-x-3 ml-5 font-inter font-semibold ">
            <AdressIcon width={20} height={20} stroke="" classname=""/>
            Av. Rio Salado #301, B.A, Argentina
          </p>
          <p className="flex flex-row gap-x-3 ml-5 mt-2 font-inter font-semibold ">
            <PhoneIcon width={20} height={20} />
            722 6354 57
          </p>
        </div>
      </section>
    </main>
  )
}