import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { Calendar } from "@nextui-org/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChangeEvent, useState } from "react";
import {
  generateFrecuency,
  generateHours,
  getTodayDate,
} from "../utils/functions/functions";
import { registerTreatment, submitImageTreatment } from "../Context/AuthContext";
import { Medicines, Pathologies, Treatment } from "../Interfaces/interfaces";
import { initialValuesTreatment } from "../utils/data/data";
import { validationSchemaTreatment } from "../utils/validation/validation";
import { VoiceTranscript } from "./VoiceTranscript";
import { DownloadIcon } from "../../public/icons/Icons";
import { API_URL } from "../api/api";
import { toast } from "sonner";

interface PropsImage {
  picture: File | null
  uploadState: boolean
  idImage: string | undefined
}

export default function FormTreatment({
  id,
  medicines,
  pathologies
}: {
  id: string | undefined;
  medicines: Medicines[] | undefined;
  pathologies: Pathologies[] | undefined;
}) {
  const [dayInit, setDayInit] = useState(getTodayDate(today(getLocalTimeZone())));
  const [transcript, setTranscript] = useState<string>("");
  const [imageData, setImageData] = useState<PropsImage>({
    picture: null,
    uploadState: false,
    idImage: "",
  });

  const handleSubmitTreatment = async (treatment: Treatment, { resetForm }: any) => {
    const treatementData: Treatment = {
      ...treatment,
      pacienteId: Number(id),
      descripcion: transcript,
      fechaInicio: dayInit,
    };
    try {
      const treatmentId: string | void = await registerTreatment(treatementData);
      if (imageData.picture == null) {
        window.location.href = `/patient/${id}/adherence`;
        return
      }
      if (treatmentId) {
        await submitImageTreatment(treatmentId, id, imageData.idImage)
      }
      resetForm();
      setTranscript("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDateChange = (date: CalendarDate) => {
    setDayInit(getTodayDate(date));
  };

  const handleChangedImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const token = localStorage.getItem('TOKEN_KEY');
    const files = e.target.files;
    if (files && files.length > 0) {
      const image = files[0];

      setImageData((prevState) => ({
        ...prevState,
        picture: image,
      }));
      if (image.type != 'image/png') {
        toast.warning("Solo se aceptan imagenes .png")
        return
      }
      try {
        const formData = new FormData();
        formData.append("multipartFile", image);

        const res = await fetch(`${API_URL}/cloudinary/subir-imagen-retorna-id-imagen`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        const data = await res.json();
        console.log(data)
        setImageData((prevState) => ({
          ...prevState,
          uploadState: true,
          idImage: data,
        }));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No file selected");
    }
  }


  return (
    <Formik
      initialValues={initialValuesTreatment}
      validationSchema={validationSchemaTreatment}
      onSubmit={handleSubmitTreatment}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-y-6 px-4 xl:max-w-2xl">
          <h2 className=" text-xl font-bold">Tratamientos</h2>
          <div className="">
            <label
              className="font-bold flex items-center gap-2 "
              htmlFor="patologiaId"
            >
              PX (Patología)
            </label>
            <Field
              as="select"
              className="w-full h-14 p-2 border-1 border-violet-color rounded-lg mt-1"
              name="patologiaId"
              defaultValue={0} // Set the default selected value to 0
            >
              <option value={0} disabled>
                Busqueda...
              </option>
              {pathologies &&
                pathologies.map((pathology) => (
                  <option
                    value={pathology.idPatologia}
                    key={pathology.idPatologia}
                  >
                    {pathology.nombre}
                  </option>
                ))}
            </Field>
            <ErrorMessage
              name={"patologiaId"}
              component="div"
              className=" flex-wrap text-red-500"
            />
          </div>
          {/* MEDICAMENTOS */}
          <div className="">
            <label
              className="font-bold flex items-center gap-2 "
              htmlFor="medicamentoId"
            >
              Medicamento
            </label>
            <Field
              as="select"
              className="w-full p-2  h-14 border-1 border-violet-color rounded-lg  mt-1"
              name="medicamentoId"
            >
              <option value={0} key={0} selected disabled>
                Busqueda...
              </option>
              {medicines &&
                medicines.map((medicine) => (
                  <option
                    value={medicine.idMedicamento}
                    key={medicine.idMedicamento}
                  >
                    {medicine.nombre}
                  </option>
                ))}
            </Field>
            <ErrorMessage
              name={"medicamentoId"}
              component="div"
              className=" flex-wrap text-red-500"
            />
          </div>
          {/* MEDICAMENTOS -> HORAINICIO/FRECUENCIA*/}
          <div className="">
            <label
              className="font-bold flex items-center gap-2 "
              htmlFor="dosis"
            >
              Dosis
            </label>
            <div className="flex gap-4">
              <Field
                as="select"
                className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1"
                name="horaInicio"
              >
                <option value={""} selected disabled>
                  Hora
                </option>
                {generateHours().map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </Field>
              <Field
                as="select"
                className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1"
                name="dosisDiaria"
              >
                <option value={0} selected disabled>
                  Frecuencia
                </option>
                {generateFrecuency().map((frecuency) => (
                  <option key={frecuency} value={frecuency}>
                    {frecuency}
                  </option>
                ))}
              </Field>
            </div>
          </div>
          {/* PATOLOGIAS */}
          <label
            className="font-bold flex items-center gap-2"
            htmlFor="fechaInicio"
          >
            Fecha de Inicio
          </label>
          <div className="w-full my-[3rem]">
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              color="warning"
              calendarWidth="100%"
              className="flex justify-center scale-125 shadow-none bg-transparent  z-0"
              onChange={handleDateChange}
            />
          </div>
          <div className=" bg-secondary-brand-dark border-dashed border-2 border-gray-800 h-max  text-zinc-200 font-semibold w-3/5 m-auto rounded-lg ">
            <input disabled={imageData.uploadState} accept="image/*" onChange={handleChangedImage} id="upload-image" name="picture" type="file" defaultValue={""} className=' hidden' />
            <label htmlFor="upload-image" className='w-full '>
              <span className={`${imageData.uploadState ? 'cursor-not-allowed' : ' cursor-pointer'} flex justify-center flex-col items-center h-16  x`} >
                <DownloadIcon width={30} height={30} stroke="#fff" />
                <p className=" text-sm text-center font-medium">Agregar imagen aquí.</p>
              </span>
            </label>
          </div>
          {imageData.picture != null && <p className=' text-center font-semibold '>{imageData.picture.name}</p>}

          <div className="">
            <label
              className="font-bold flex items-center gap-2 "
              htmlFor="diasTotales"
            >
              Duracion
            </label>
            <Field
              as="select"
              className="w-full p-2 h-14 border-1 border-violet-color rounded-lg mt-1"
              name="diasTotales"
            >
              <option value={0} selected disabled>
                Seleccionar día
              </option>
              {generateFrecuency().map((frecuency) => (
                <option key={frecuency} value={frecuency}>
                  {frecuency} dias
                </option>
              ))}
            </Field>
          </div>
          <VoiceTranscript
            onTranscriptChange={setTranscript}
            label="Recomendaciones"
          />

          <div className=" flex items-center flex-col gap-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center text-center w-full h-[30%] py-2 text-white bg-[#E08733] rounded-md hover:bg-[#9b5416] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Registrar Tratamiento
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
