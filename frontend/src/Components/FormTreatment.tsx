import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@nextui-org/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useState } from 'react'
import { generateFrecuency, generateHours, getTodayDate } from '../utils/functions/functions'
import { useAuthContext } from '../Context/AuthContext'
import { Medicines, Treatment } from '../Interfaces/interfaces'
import { initialValuesTreatment } from '../utils/data/data'
import { validationSchemaTreatment } from '../utils/validation/validation'
import { VoiceTranscript } from './VoiceTranscript'

export default function FormTreatment({ id, medicines }: { id: string | undefined, medicines: Medicines[] | undefined }) {
  const [dayInit, setDayInit] = useState(getTodayDate(today(getLocalTimeZone())))
  const [transcript, setTranscript] = useState<string>('');
  const { registerTreatment } = useAuthContext()
  
  const handleSubmitTreatment = async (treatment: Treatment, { resetForm }:any) => {
    const treatementData: Treatment = {
      ...treatment,
      pacienteId: Number(id),
      descripcion: transcript,
      fechaInicio: dayInit,
    }
    console.log(treatementData)
    try {
      registerTreatment(treatementData)
      resetForm();
      setTranscript("")
    } catch (err: any) {
      console.log(err)
    }
  }

  const handleDateChange = (date: CalendarDate) => {
    setDayInit(getTodayDate(date))
    console.log(setDayInit);

  };

  return (
    <Formik
      initialValues={initialValuesTreatment}
      validationSchema={validationSchemaTreatment}
      onSubmit={handleSubmitTreatment}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col gap-y-6 px-4'>
          <h2 className=' text-xl font-bold'>Tratamientos</h2>
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="patologiaId">
              PX(Patologia)
            </label>
            <Field as="select" className="w-full h-14 p-2 border-1 border-violet-color rounded-lg mt-1" name="patologiaId">
              <option value={0} key={0} selected disabled  >Busqueda...</option>
              <option value={1}>Cancer</option>
              <option value={2}>Epilepsia</option>
              <option value={3}>Asma</option>

            </Field>
          </div>
          {/* MEDICAMENTOS */}
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="medicamentoId">
              Medicamento
            </label>
            <Field as="select" className="w-full p-2  h-14 border-1 border-violet-color rounded-lg  mt-1" name="medicamentoId">
              <option value={0} key={0} selected disabled  >Busqueda...</option>
              {medicines && medicines.map((medicine) => (
                <option value={medicine.idMedicamento} key={medicine.idMedicamento}>
                  {medicine.nombre}
                </option>
              ))
              }
            </Field>
            <ErrorMessage name={"medicamentoId"} component="div" className=" flex-wrap text-red-500" />
          </div>
          {/* MEDICAMENTOS -> HORAINICIO/FRECUENCIA*/}
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="dosis">
              Dosis
            </label>
            <div className="flex gap-4">
              <Field as="select" className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="horaInicio">
                <option value={""} selected disabled  >Hora</option>
                {generateHours().map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </Field>
              <Field as="select" className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="dosisDiaria">
                <option value={0} selected disabled  >Frecuencia</option>
                {generateFrecuency().map((frecuency) => (
                  <option key={frecuency} value={frecuency}>
                    {frecuency}
                  </option>
                ))
                }
              </Field>
            </div>
          </div>
          {/* PATOLOGIAS */}
          <label className="font-bold flex items-center gap-2" htmlFor="fechaInicio">
            Fecha de Inicio
          </label>
          <div className="w-full my-[3rem]">
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              color="warning"
              calendarWidth="100%"
              className='flex justify-center scale-125 shadow-none bg-transparent  z-0'
              onChange={handleDateChange}
            />

          </div>
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="diasTotales">
              Duracion
            </label>
            <Field as="select" className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1" name="diasTotales">
              <option value={0} selected disabled  >Seleccionar día</option>
              {generateFrecuency().map((frecuency) => (
                <option key={frecuency} value={frecuency}>
                  {frecuency} dias
                </option>
              ))
              }
            </Field>
          </div>
          <VoiceTranscript onTranscriptChange={setTranscript} label='Recomendaciones' />
          
            <div className=" flex items-center flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Registrar Tratamiento
              </button>
            </div>
         
        </Form>
      )}
    </Formik>
  )
}
