import React from 'react'
import { tipoTratamientoMap } from '../../../../../utils/data/data'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, useDisclosure } from '@nextui-org/react'

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
      <div className="p-2 border-gray-600 border-1 rounded-md">
        <h5 className=" text-violet-color font-bold text-lg">
          {" "}
          {tipoTratamientoMap[tipoTratamientoId] ||
            "Tipo de tratamiento desconocido"} {imagen && <span onClick={onOpen} className=" text-xs cursor-pointer text-gray-700">(Ver Imagen)</span>}
        </h5>
        <ul className=" ml-6 list-disc">
          <li>
            {nombreMedicamento} {descripcion}.
          </li>
          <li>Cantidad: {dosisDiaria}</li>
        </ul>
      </div>
      <Modal isOpen={isOpen} size='md' onOpenChange={onOpenChange} placement="center" hideCloseButton>
        <ModalContent>
          {onClose => (
            <>
              <ModalBody>
                <img src={imagen ?? undefined} alt="Treatment Image" className="w-full h-auto rounded-md" />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
