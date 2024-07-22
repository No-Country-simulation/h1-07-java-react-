import { generateFrecuency, generateHours } from '../utils/functions/functions'

export default function FormTraining() {
  return (
    <form className='flex flex-col gap-y-6 px-4'>
      <h2 className=' text-xl font-bold'>Ejercicios</h2>
      <textarea placeholder='Añadir' name={'descripcion'} className=' min-h-40  border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
      </textarea>
      <div className="">
        <label className="font-bold flex items-center gap-2 " htmlFor="dosis">
          Tiempo
        </label>
        <div className="flex gap-4">
          <select className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="horaInicio">
            <option value={""} selected disabled  >Hora</option>
            {generateHours().map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="dosisDiaria">
            <option value={0} selected disabled  >Frecuencia</option>
            {generateFrecuency().map((frecuency) => (
              <option key={frecuency} value={frecuency}>
                {frecuency}
              </option>
            ))
            }
          </select>
        </div>
      </div>
      <div className=" flex items-center flex-col gap-2">
        <button
          type="submit"
          className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Añadir
        </button>
      </div>
    </form>
  )
}
