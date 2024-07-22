import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { Calendar } from '@nextui-org/react'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { generateFrecuency, generateHours, getTodayDate } from '../utils/functions/functions'
import { fetchMedicines, useAuthContext } from '../Context/AuthContext'
import { ContentMedicines, Treatment } from '../Interfaces/interfaces'
import { initialValuesTreatment } from '../utils/data/data'
import { validationSchemaTreatment } from '../utils/validation/validation'
import { MicrophoneClose, MicrophoneOpen } from './icons/Icons'

export default function FormTreatment() {
  const [medicines, setMedicines] = useState<ContentMedicines>()
  const [dayInit, setDayInit] = useState(getTodayDate(today(getLocalTimeZone())))
  const [transcript, setTranscript] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const { registerTreatment } = useAuthContext()

  const handleSubmitTreatment = async (treatment: Treatment) => {
    const treatementData: Treatment = {
      ...treatment,
      descripcion: transcript,
      fechaInicio: dayInit,
    }
    console.log(treatementData)
    try {
      registerTreatment(treatementData)
    } catch (err: any) {
      console.log(err)
    } finally {
    }
  }

  useEffect(() => {
    const fetchMedicinesData = async () => {
      setMedicines(await fetchMedicines())
    }
    fetchMedicinesData()
  }, [])


  const handleStart = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;

      const socket = new WebSocket('wss://api.deepgram.com/v1/listen?language=es', ['token', '7e3357ed49084483c2f80078538eefea980dc180']);
      socketRef.current = socket;

      socket.onopen = () => {
        mediaRecorder.addEventListener('dataavailable', (event) => {
          if (event.data.size > 0) {
            socket.send(event.data);
          }
        });
        mediaRecorder.start(250);
      };

      socket.onmessage = (message) => {
        const received = JSON.parse(message.data);
        const transcript = received.channel.alternatives[0].transcript;
        setTranscript((prev) => prev + ' ' + transcript);
      };

      setIsRecording(true);
    });
  };

  const handleStop = () => {
    if (mediaRecorderRef.current && socketRef.current) {
      mediaRecorderRef.current.stop();
      socketRef.current.close();
      setIsRecording(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value)
  }

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
              <option value={0} selected disabled  >Busqueda...</option>
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
              <option value={""} selected disabled  >Busqueda...</option>
              {medicines?.content.map((medicine, index) => (
                <option value={index + 1} key={index}>
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
          <div className="">
            <label className="font-bold flex items-center gap-2 " htmlFor="fechaInicio">
              Fecha de Inicio
            </label>
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              color="warning"
              className=" flex justify-center py-4 "
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

          <div className="flex flex-col relative">
            <label className="font-bold flex items-center gap-2 " htmlFor="descripcion">
              Recomendaciones
            </label>
            <Field as="textarea" placeholder='Añadir' name={'descripcion'} value={transcript} onChange={handleChange} className=' min-h-40  border-1 border-violet-color rounded-lg p-2' id={'descripcion'}>
            </Field>
            <div className=" absolute bottom-4 right-4">
              {isRecording ? (
                <span className=' cursor-pointer hover:scale-105 transition-all duration-300 w-10 border-black bg-black h-10  p-2 m-auto flex justify-center items-center border-2 rounded-full' onClick={handleStop}><MicrophoneOpen width={30} height={30} /></span>
              ) : (
                <span className=' cursor-pointer hover:scale-105 transition-all duration-300 w-10 border-black bg-black h-10  p-2 m-auto flex justify-center items-center border-2 rounded-full' onClick={handleStart}><MicrophoneClose width={30} height={30} /></span>
              )}
            </div>
          </div>
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
