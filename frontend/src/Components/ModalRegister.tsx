import { Modal, ModalBody, ModalContent } from '@nextui-org/react'
import React from 'react'

interface ModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  type: "center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center" | undefined
  children?: React.ReactNode
}

export const ModalComponent: React.FC<ModalProps> = ({ children, isOpen, onOpenChange, type }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        placement={type}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
