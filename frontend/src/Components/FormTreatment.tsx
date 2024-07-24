import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@nextui-org/react'
import { Field, Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { generateFrecuency, generateHours, getTodayDate } from '../utils/functions/functions'
import { fetchMedicines, useAuthContext } from '../Context/AuthContext'
import { ContentMedicines, Treatment } from '../Interfaces/interfaces'
import { initialValuesTreatment } from '../utils/data/data'
import { validationSchemaTreatment } from '../utils/validation/validation'
import { VoiceTranscript } from './VoiceTranscript'
import { useParams } from 'react-router-dom'

export default function FormTreatment() {
  const [medicines, setMedicines] = useState<ContentMedicines>()
  const [dayInit, setDayInit] = useState(getTodayDate(today(getLocalTimeZone())))
  const [transcript, setTranscript] = useState<string>('');
  const { registerTreatment } = useAuthContext()
  const {id} = useParams()

  const handleSubmitTreatment = async (treatment: Treatment) => {
    const treatementData: Treatment = {
      ...treatment,
      pacienteId: Number(id),
      descripcion: transcript,
      fechaInicio: dayInit,
    }
    try {
      registerTreatment(treatementData)
    } catch (err: any) {
      console.log(err)
    }
  }

  useEffect(() => {

    const fetchMedicinesData = async () => {
      setMedicines(await fetchMedicines())
    }
    fetchMedicinesData()
  }, [])

  const handleDateChange = (date: CalendarDate) => {
    setDayInit(getTodayDate(date))
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
          {/* PATOLOGIAS */}
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="tipoTratamiento">
              PX
            </label>
            <Field as="select" className="w-full h-14 p-2 border-1 border-violet-color rounded-lg mt-1" name="tipoTratamiento">
              <option defaultValue={0}  selected disabled  >Busqueda...</option>
              <option value={0}>Medicamento</option>
              <option value={1}>Entrenamiento</option>
              <option value={2}>Psicologico</option>
              <option value={3}>Nutricional</option>
              <option value={4}>Otro</option>
            </Field>
          </div>
          {/* MEDICAMENTOS */}
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="medicamentoId">
              Medicamento
            </label>
            <Field as="select" className="w-full p-2  h-14 border-1 border-violet-color rounded-lg  mt-1" name="medicamentoId">
              {medicines?.content.map((medicine) => (
                <option value={medicine.idMedicamento} key={medicine.idMedicamento}>
                  {medicine.nombre}
                </option>
              ))
              }
            </Field>
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
          <div className="touch-manipulation	">
            <label className="font-bold flex items-center gap-2 " htmlFor="fechaInicio">
              Fecha de Inicio
            </label>
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              color="warning"
              className=" flex justify-center py-4 transition:flex-grow duration-300"
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

          <VoiceTranscript onTranscriptChange={setTranscript} label='Recomendaciones'/>
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
