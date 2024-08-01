import { SearchIcon, SilderIcon } from "../../../../../public/icons/Icons";
import { useState } from "react";
import { getAge } from "../../../../utils/functions/functions";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { Header_Donation } from "../../../../components/Header_Medic_Donation/Header_Donation";

export interface Donors {
  altura: string
  descripcion: string
  peso: string
  genero: number
  factorSanguineo: number
  fechaNacimiento: string
  provincia: string
  localidad: string
  src: string
}

const donors: Donors[] = [
  {
    "altura": "175",
    "descripcion": "Donante regular con buena salud.",
    "peso": "70",
    "genero": 1,
    "factorSanguineo": 0,
    "fechaNacimiento": "1990-01-01",
    "provincia": "Madrid",
    "localidad": "Madrid",
    "src": "IMG_MEDICO/IMG_Pacientes.png"
  },
  {
    "altura": "165",
    "descripcion": "Primer donante, antecedentes familiares de diabetes.",
    "peso": "65",
    "genero": 0,
    "factorSanguineo": 1,
    "fechaNacimiento": "1985-05-12",
    "provincia": "Barcelona",
    "localidad": "Barcelona",
    "src": "IMG_MEDICO/IMG_Pacientes_2.png"

  },
  {
    "altura": "180",
    "descripcion": "Atleta con historial de donación frecuente.",
    "peso": "75",
    "genero": 1,
    "factorSanguineo": 2,
    "fechaNacimiento": "1992-03-21",
    "provincia": "Valencia",
    "localidad": "Valencia",
    "src": "IMG_MEDICO/IMG_Pacientes_3.png"

  },
  {
    "altura": "158",
    "descripcion": "Estudiante universitaria, donante por primera vez.",
    "peso": "50",
    "genero": 0,
    "factorSanguineo": 3,
    "fechaNacimiento": "2000-07-08",
    "provincia": "Sevilla",
    "localidad": "Sevilla",
    "src": "IMG_MEDICO/IMG_Pacientes_2.png"

  },
]

const donorRH = {
  "rh": ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
};


export default function Donations() {
  const [filters, setFilters] = useState(false)
  return (
    <main className="flex bg-gray-100 md:flex md:justify-center  ">
      <div className="w-full max-w-md min-h-screen font-inter bg-white rounded-lg shadow-lg  max-md:m-auto">
        <Header_Donation />
        <section className="p-4 flex flex-col gap-8">
          <div className=' relative w-full h-12 flex justify-center items-center'>
            <input type="text" placeholder='Búsqueda' className='w-full h-full  border-violet-color rounded-md border-1 px-4' />
            <span className='right-12 absolute'>
              <SearchIcon width={20} height={20} />
            </span>
            <span className='right-5 absolute cursor-pointer' onClick={() => setFilters(!filters)}>
              <SilderIcon width={20} height={20} />
            </span>
          </div>
          {filters &&
            <div className="p-3 grid grid-cols-2 gap-4 rounded-r-xl rounded-md  border-2 border-gray-500 shadow-xl overflow-hidden">
              <Input
                type="number"
                label="Edad"
                name="edad"
                placeholder="Ingresar.."
                labelPlacement="outside"
              />
              <Input
                type="number"
                label="Peso"
                name="peso"
                placeholder="Ingresar.."
                labelPlacement="outside"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">KG</span>
                  </div>
                }
              />
              <Input
                type="number"
                label="Altura"
                name="altura"
                placeholder="Ingresar.."
                labelPlacement="outside"
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">CM</span>
                  </div>
                }
              />
              <label htmlFor="genero"><span className=" text-sm">Genero</span>
                <Select
                  size={'sm'}
                  label="Seleccionar"
                  className="max-w-xs"
                  name="genero"
                >
                  <SelectItem key={""} className="" >
                    Masculino
                  </SelectItem>
                  <SelectItem key={""} className="" >
                    Femenino
                  </SelectItem>
                </Select>
              </label>
              <label htmlFor="genero"><span className=" text-sm">Grupo RH</span>
                <Select
                  size={'sm'}
                  label="Seleccionar"
                  className="max-w-xs"
                  name="rh"
                >
                  {donorRH.rh.map((donor) => (
                    <SelectItem key={donor} className="" >
                      {donor}
                    </SelectItem>
                  ))

                  }

                </Select>
              </label>
            </div>
          }
          <div className=" rounded-r-xl rounded-xl  border-2 border-gray-500 shadow-xl overflow-hidden">
            <div className="flex border-b-2 border-gray-500 rounded-lg mb-2 p-1">
              <button
                className={`px-4 w-1/3  py-2 text-sm bg-[#5761C8] text-white rounded-[8px] border-solid border-[1px] border-gray-500 '}`}
              >
                Donantes
              </button>
            </div>
            <ol>
              {donors.map((donor, idx) => (
                <li key={idx} className={`flex hover:bg-gray-200 transition-all duration-300 cursor-pointer justify-between   py-1 px-2 border-b-1 border-gray-500`}>
                  <div className={`flex flex-row items-center w-full p-1`}>
                    <img src={donor.src} alt="imagen_paciente" />
                    <div className={`flex flex-col ml-3 w-full  `}>
                      <div className='flex flex-row justify-between '>
                        <p className="font-semibold text-sm">{donor.genero == 0 ? 'Masculino' : 'Femenino'} de {getAge(donor.fechaNacimiento)} años</p>
                      </div>
                      <p className="text-gray-700 text-sm">{donor.descripcion}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <Button
            type="submit"
            className="h-10 w-full font-semibold bg-secondary-brand-dark text-white"
          >Buscar</Button>
        </section>

      </div>
    </main>
  )
}
