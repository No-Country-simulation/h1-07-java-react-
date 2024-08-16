import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Treatment } from '../../../../../Interfaces/interfaces';
import { useState } from 'react';
import { initialValuesExercises } from '../../../../../utils/data/data';
import { validationSchemaExercises } from '../../../../../utils/validation/validation';
import { registerTreatment } from '../../../../../Context/AuthContext';
import { VoiceTranscript } from '../../../../../components/VoiceTranscript';
import { generateFrecuency, generateHours } from '../../../../../utils/functions/functions';
import { LoaderIcon } from '../../../../../../public/icons/Icons';


export default function FormTraining({ id }: { id: string | undefined }) {
  const [transcript, setTranscript] = useState<string>('');
  const [loading, setLoading] = useState(false)

  const handleSubmitTreatment = async (values: Treatment, { resetForm }: any) => {
    const exercises: Treatment = {
      ...values,
      pacienteId: Number(id),
      descripcion: transcript.trim(),
    }
    resetForm(); // Limpiar el formulario
    try {
      setLoading(true)
      const res = await registerTreatment(exercises)
      if (res && res) {
        window.location.href = `/patient/${id}/adherence`;
        return
      }
    } catch (err: any) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Formik
      initialValues={initialValuesExercises}
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
              <div className=" w-2/4">
                <Field as="select" className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="horaInicio">
                  <option value={""} selected disabled  >Hora</option>
                  {generateHours().map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name={"horaInicio"}
                  component="div"
                  className=" flex-wrap text-red-500"
                />
              </div>
              <div className="w-2/4">
                <Field as="select" className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="dosisDiaria">
                  <option value={0} selected disabled  >Frecuencia</option>
                  {generateFrecuency().map((frecuency) => (
                    <option key={frecuency} value={frecuency}>
                      {frecuency}
                    </option>
                  ))
                  }
                </Field>
                <ErrorMessage
                  name={"dosisDiaria"}
                  component="div"
                  className=" flex-wrap text-red-500"
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center flex-col gap-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              {loading && (
                <span className=" animate-spin">
                  <LoaderIcon width={30} height={30}></LoaderIcon>
                </span>
              )}
              Añadir
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}