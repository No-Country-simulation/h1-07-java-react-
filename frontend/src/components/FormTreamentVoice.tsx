import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { initialValuesOthers } from '../utils/data/data'
import { validationSchemaExercises } from '../utils/validation/validation'
import { Treatment } from '../Interfaces/interfaces'
import { VoiceTranscript } from './VoiceTranscript'
import { toast } from 'sonner'
import { registerTreatment } from '../Context/AuthContext'

interface FormTreatmentProps {
  id: string | undefined
  type: number
  label: string
}

export const FormTreamentVoice: React.FC<FormTreatmentProps> = ({ id, type, label }) => {
  const [transcript, setTranscript] = useState<string>('');

  const handleSubmitTreatment = (values: Treatment) => {
    if (transcript.length < 10) {
      toast.warning("La descripción debe tener más de 10 caracteres")
      return
    }
    const valuesForm: Treatment = {
      ...values,
      pacienteId: Number(id),
      descripcion: transcript.trim(),
      tipoTratamiento: type
    }
    try {
      registerTreatment(valuesForm)
    } catch (err: any) {
      console.log(err)
    }
  }
  return (
    <Formik
      initialValues={initialValuesOthers}
      validationSchema={validationSchemaExercises}
      onSubmit={handleSubmitTreatment}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-y-6 px-4 min-h-[60vh]'>
          <h2 className=' text-xl font-bold'>{label}</h2>
          <VoiceTranscript onTranscriptChange={setTranscript} label={''} />
          <div className=" flex items-center flex-col gap-2 ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Añadir
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
