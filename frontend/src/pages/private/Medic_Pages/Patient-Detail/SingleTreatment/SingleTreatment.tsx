import React from 'react'
import { tipoTratamientoMap } from '../../../../../utils/data/data'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure, Image } from '@nextui-org/react'
import { ClipIcon, SearchIcon } from '../../../../../../public/icons/Icons'

interface PropsTreatmentSingle {
  tipoTratamientoId: number
  imagen: string | null
  descripcion: string | undefined
  nombreMedicamento: string | null
  dosisDiaria: number | undefined
}

export const SingleTreatment: React.FC<PropsTreatmentSingle> = ({ tipoTratamientoId, imagen, descripcion, nombreMedicamento, dosisDiaria }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="p-2 border-gray-600 border-1 bg-[#ffffffed] rounded-md shadow-[2.0px_4.0px_4.0px_rgba(0,0,0,0.38)]">
        <h5 className=" text-violet-color font-bold text-lg flex  items-center gap-2">
          {" "}
          {tipoTratamientoMap[tipoTratamientoId] ||
            "Tipo de tratamiento desconocido"}
          {imagen &&
            <span onClick={onOpen} className=" text-xs cursor-pointer text-gray-700">
              <ClipIcon width={16} height={16} stroke='#111' classname={''}></ClipIcon>
            </span>}
        </h5>
        <ul className=" ml-6 list-disc">
          <li>
            {nombreMedicamento} | {descripcion?.length == 0 ? "No tiene descripción" : descripcion}.
          </li>
          <li>Cantidad: {dosisDiaria}</li>
        </ul>
      </div>
      <Modal isOpen={isOpen} size='lg' onOpenChange={onOpenChange} placement="center" hideCloseButton>
        <ModalContent>
          {onClose => (
            <>
              <ModalBody>
                <Image
                  width={"700"}
                  height={"500"}
                  alt="image-treatment"
                  src={`https://app.requestly.io/delay/1000/${imagen ?? undefined}`}
                />
              </ModalBody>
              <ModalFooter className='flex justify-center items-center gap-4'>
                <a href={imagen ?? undefined} target="_blank">
                  <Button color='default' className=' flex justify-center items-center text-md font-medium bg-[#5AA8A9] text-[#fff]'>
                    <span><SearchIcon width={15} height={15} stroke='#fff'></SearchIcon></span>

                    Ver más
                  </Button>
                </a>
                <Button color="danger" className=' border-1 border-pink-400 font-medium text-md bg-[#FFE9E9] text-[#F91919]' variant="light" onPress={onClose}>
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
