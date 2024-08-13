import { Form, Formik } from 'formik'
import { Treatment } from '../../../../../Interfaces/interfaces';
import { useState } from 'react';
import { initialValuesOthers } from '../../../../../utils/data/data';
import { validationSchemaExercises } from '../../../../../utils/validation/validation';
import { registerTreatment } from '../../../../../Context/AuthContext';
import { VoiceTranscript } from '../../../../../components/VoiceTranscript';
import { generateFrecuency, generateHours } from '../../../../../utils/functions/functions';


export default function FormTraining({ id }: { id: string | undefined }) {
  const [transcript, setTranscript] = useState<string>('');

  const handleSubmitTreatment = (values: Treatment, { resetForm }: any) => {
    const exercises: Treatment = {
      ...values,
      pacienteId: Number(id),
      descripcion: transcript.trim(),
    }
    resetForm(); // Limpiar el formulario
    try {
      registerTreatment(exercises)
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
        <Form className='flex flex-col gap-y-6 px-4 xl:max-w-2xl m-auto min-h-[60vh]'>
          <h2 className=' text-xl font-bold'>Ejercicios</h2>
          <VoiceTranscript onTextChange={setTranscript} label='Recomendaciones' />
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
