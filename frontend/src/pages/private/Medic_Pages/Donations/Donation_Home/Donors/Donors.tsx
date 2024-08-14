import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { getAge } from '../../../../../../utils/functions/functions'
import React, { useState } from 'react'
import { API_URL } from '../../../../../../api/api'
import { SkeletonInput } from '../../../../../../components/Skeletons'

interface DonorProps {
  idDonante: number
  genero: number
  fechaNacimiento: string
  descripcion: string
}

interface Medic {
  nombre: string
  apellido: string
  telefono: string
  provincia: string
  localidad: string
  licencia: string
}


export const Donors: React.FC<DonorProps> = ({ idDonante, genero, fechaNacimiento, descripcion }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [medic, setMedic] = useState<Medic>()
  const [loading, setLoading] = useState(false)
  const fetchDataMedicForDonor = async () => {
    onOpen()
    const token = localStorage.getItem('TOKEN_KEY');
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/donante/buscar-medico-por-donante?idDonante=${idDonante}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      setMedic(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <li
        key={idDonante}
        onClick={fetchDataMedicForDonor}
        className="flex hover:bg-gray-200 transition-all duration-300 cursor-pointer justify-between py-1 px-2 border-b-1 border-gray-500">
        <div className="flex flex-row items-center w-full p-1">
          <div className="flex flex-col ml-3 w-full">
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-sm">
                {genero === 0 ? "Masculino" : genero === 1 ? 'Femenino' : "Otro"} de{" "}
                {getAge(fechaNacimiento)} años
              </p>
            </div>
            <p className="text-gray-700 text-sm">
              {descripcion}
            </p>
          </div>
        </div>
      </li>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton={true} placement={'center'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contactar médico responsable</ModalHeader>
              <ModalBody>
                {loading ? <>
                  <SkeletonInput label={'Nombre'} ></SkeletonInput>
                  <SkeletonInput label={'Apellido'} ></SkeletonInput>
                  <SkeletonInput label={'Telefono de contacto'} ></SkeletonInput>
                  <SkeletonInput label={'Ubicación'} ></SkeletonInput>
                </> : <>
                  <label className=' font-semibold'>Nombre</label>
                  <input className=' border-1 h-10 px-4 rounded-md border-gray-color' type="text" value={medic?.nombre} disabled />
                  <label className=' font-semibold'>Apellido</label>
                  <input className=' border-1 h-10 px-4 rounded-md border-gray-color' type="text" value={medic?.apellido} disabled />
                  <label className=' font-semibold'>Telefono de contacto</label>
                  <input className=' border-1 h-10 px-4 rounded-md border-gray-color' type="text" value={medic?.telefono} disabled />
                  <label className=' font-semibold'>Ubicación</label>
                  <input className=' border-1 h-10 px-4 rounded-md border-gray-color' type="text" value={`${medic?.provincia}, ${medic?.localidad}`} disabled />
                </>

                }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" className=' border-1 border-red-300' variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
