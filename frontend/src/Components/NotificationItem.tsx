import React, { useState } from "react";
import { getTimeElapsed } from "../utils/functions/functions";
import { CommentIcon, EmailIcon, UserIcon } from "../../public/icons/Icons";
import { Button, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Field, Form, Formik } from "formik";
import { initialValuesAdherence } from "../utils/data/data";
import { AdherenceRequest } from "../Interfaces/interfaces";
import { API_URL } from "../api/api";
import { toast } from "sonner";

interface NotificationProp {
  hora: string
  mensaje: string
  leido: boolean
  fecha: string
  horarioTomaId: number
}


export const NotificationItem: React.FC<NotificationProp> = ({ hora, mensaje, leido, fecha, horarioTomaId }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, setLoading] = useState(false)

  const handleSubmitAdherence = async (values: AdherenceRequest) => {
    const token = localStorage.getItem('TOKEN_KEY');
    if (token) {
      setLoading(true)
      const params = new URLSearchParams({
        comentario: values.comentario,
        estado: String(values.estado),
        horarioId: String(horarioTomaId)
      }).toString();

      try {
        const res = await fetch(`${API_URL}/marcar-adherencia-hora-toma?${params}`, {
          
          method: "PUT",
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        })
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const responseData = await res.text();
        toast.success(responseData)
        onOpen()
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
  }


  return (
    <>
      <div className={`${leido && 'border-gray-200 '} flex p-3 cursor-pointer hover:border-blue-500 transition-all duration-300 flex-col mt-4 bg-gray-100 border-2 border-gray-600 w-full rounded-md`}>
        <div className="flex justify-between mb-1">
          <h3 className="font-inter text-md font-semibold w-[60%] flex items-center gap-2"><span>{leido ? <p className=" w-3 h-3 bg-gray-400  rounded-full "></p> : <p className=" w-3 h-3 bg-blue-500  rounded-full " />}</span> Alerta para informar</h3>
          <p className="text-sm flex items-center justify-center gap-2">{getTimeElapsed(hora, fecha)}</p>
        </div>
        <p className="text-gray-600">{mensaje}</p>
        <div className="flex justify-end">
          <span onClick={onOpen} className=" w-9 cursor-pointer transition-all duration-300  hover:bg-gray-300 h-9 flex justify-center items-center rounded-full ">
            <CommentIcon width={20} height={20} />
          </span>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        placement={'center'}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Enviar mensaje a mi medico</ModalHeader>
              <ModalBody>
                <Formik
                  initialValues={initialValuesAdherence}
                  onSubmit={handleSubmitAdherence}>
                  {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="comentario" className=" flex items-center gap-1"><EmailIcon width={15} height={15} />Comentario</label>
                        <Field as='textarea' name="comentario" id="comentario" placeholder="Ingresar mensaje" className=" border-1 border-gray-color p-2 rounded-md min-h-28"></Field>
                      </div>
                      <div className=" flex flex-col gap-1">
                        <label htmlFor="estado" className=" flex items-center gap-1"><UserIcon width={15} height={15} /> Motivo</label>
                        <Field as="select" name="estado" className=" h-12 border-1 rounded-md border-gray-color" id="estado">
                          <option value="2">Completado</option>
                          <option value="3">No Completado</option>
                          <option value="4">Atrasado</option>
                        </Field>
                      </div>
                      <div className="flex items-end justify-end my-4 gap-2">
                        <Button color="danger" variant="light" onPress={onClose}>
                          Cancelar
                        </Button>
                        <Button type="submit" disabled={isSubmitting} color="primary">
                          {loading && 'enviando'} Enviar
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

