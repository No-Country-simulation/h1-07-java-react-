import {
  Accordion,
  AccordionItem,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ClinicHistoryProps,
  ContentClinicHistory,
  Patient,
} from "../Interfaces/interfaces";
import { SearchIcon } from "../../public/icons/Icons";
import {
  fetchClinicHistory,
  registerClinicHistory,
} from "../Context/AuthContext";
import { Field, Form, Formik } from "formik";
import { initialValuesHistory } from "../utils/data/data";
import { validationHistoryClinic } from "../utils/validation/validation";

import { toast } from "sonner";
import { SkeletonAcordion } from "./Skeletons";
import { VoiceTranscript } from "./VoiceTranscript";

export default function ClinicHistory({
  patient,
}: {
  patient: Patient | undefined;
}) {
  const { id } = useParams();
  const [clinicHistories, setClinicHistories] =
    useState<ContentClinicHistory>();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [histories, setHistories] = useState("");
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleTranscriptChange = (newTranscript: string) => {
    setTranscript(newTranscript.trimStart());
  };

 /*  const handleSubmitHistory = async (values: ClinicHistoryProps) => {
    // trimmedTranscript.length > 0 ? trimmedTranscript : defaultDescription;
    const trimmedTranscript = transcript.trim();
    const defaultDescription = "Descripción";

    const description = trimmedTranscript.length > 0 ? trimmedTranscript : defaultDescription;
    if (id) {
      const historyClinic: ClinicHistoryProps = {
        ...values,
        descripcion: description,
        idPaciente: Number(id),
      };

      try {
        await registerClinicHistory(id, historyClinic);
        toast.success("La historia clinica fue registrada correctamente");
        
        fetchDataHistory();
        onClose();
        setTranscript("");
      } catch (err) {
        console.error(err);
      }
    }
  };
 */

  const handleSubmitHistory = async (values: ClinicHistoryProps) => {
    const trimmedTranscript = transcript.trim(); 
    

    const description = trimmedTranscript.length > 0 ? trimmedTranscript : "";

    if (id) {
      const historyClinic: ClinicHistoryProps = {
        ...values,
        descripcion: description,
        idPaciente: Number(id)
      };

      try {
        await registerClinicHistory(id, historyClinic);
        toast.success("La historia clinica fue registrada correctamente");
        fetchDataHistory();
        onClose();
        
      } catch (err: any) {
        console.error(err);
      }
    }
  };


  useEffect(() => {
    fetchDataHistory();
  }, []);

  const fetchDataHistory = async () => {
    if (id) {
      setLoading(true);
      try {
        const data = await fetchClinicHistory(id);

        const sortedData = data.content.sort(
          (
            a: { fecha: string | number | Date },
            b: { fecha: string | number | Date }
          ) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
        );
        setClinicHistories({ ...data, content: sortedData });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-6 flex-col gap-3 flex">
      <h5 className="font-bold text-xl text-violet-color">Datos Personales</h5>
      <div className="border-2 border-gray-color rounded-lg leading-6 p-2 flex flex-col gap-y-2 font-inter text-sm">
        <h6 className="font-bold text-lg">Datos</h6>
        <div className="ml-6 list-disc tracking-wide">
          <p className="text-medium leading-9">
            <span className="font-semibold">Nombre Completo</span>:{" "}
            {patient?.nombre} {patient?.apellido}
          </p>
          <p className="text-medium leading-9">
            <span className="font-semibold">Financiador</span>:{" "}
            {patient?.financiador}
          </p>
          <p className="text-medium leading-9">
            <span className="font-semibold">Tipo de Documento</span>:{" "}
            {patient?.tipoDocumento} {patient?.numeroDocumento}
          </p>
          <p className="text-medium leading-9">
            <span className="font-semibold">Médicos a cargo</span>:{" "}
            {patient?.medicos.map((medico) => (
              <span key={medico}>{medico} </span>
            ))}
          </p>
          <p className="text-medium leading-9">
            <span className="font-semibold">Hospitales</span>:{" "}
            {patient?.entidades}
          </p>
        </div>
      </div>
      <h5 className="font-bold text-xl text-violet-color">Historia Clinica</h5>
      {clinicHistories && clinicHistories.content.length !== 0 && (
        <div className="relative w-full h-12 mb-3 flex justify-center items-center">
          <input
            type="text"
            placeholder="Búsqueda"
            onChange={(e) => setHistories(e.target.value)}
            className="w-full h-full border-violet-color rounded-md border-1 px-4"
          />
          <span className="right-5 absolute">
            <SearchIcon width={20} height={20} />
          </span>
        </div>
      )}
      <div className="flex flex-col gap-3">
        {loading ? (
          <SkeletonAcordion />
        ) : (
          <>
            {clinicHistories && clinicHistories.content.length > 0 ? (
              clinicHistories.content
                .filter((msg) =>
                  msg.titulo.toLowerCase().includes(histories.toLowerCase())
                )
                .map((history, idx) => (
                  <Accordion
                    variant="splitted"
                    key={idx}
                    className="rounded-md w-full"
                  >
                    <AccordionItem
                      aria-label={history.titulo}
                      title={`${history.titulo} ${history.fecha}`}
                      className="w-full  border-2 border-violet-color"
                    >
                      {history.descripcion}
                    </AccordionItem>
                  </Accordion>
                ))
            ) : (
              <p className="text-center my-4 font-semibold">
                No se encontraron historiales clínicos.
              </p>
            )}
          </>
        )}
      </div>
      <Button
        onPress={onOpen}
        className="h-10 rounded-lg mt-10 w-3/4 m-auto font-semibold bg-secondary-brand-dark text-white"
      >
        Nuevo Historial
      </Button>

      <Modal isOpen={isOpen} placement={"auto"} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  Formulario Historial Clinico
                </ModalHeader>
                <ModalBody>
                  <Formik
                    initialValues={initialValuesHistory}
                    validationSchema={validationHistoryClinic}
                    onSubmit={handleSubmitHistory}
                  >
                    {({ isSubmitting }) => (
                      <Form className="flex flex-col gap-6">
                        <div>
                          <label htmlFor="titulo" className="font-bold">
                            Título
                          </label>
                          <Field
                            id="titulo"
                            required
                            type="text"
                            name="titulo"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Título de la historia clinica"
                          ></Field>
                        </div>
                        <VoiceTranscript
                          onTranscriptChange={handleTranscriptChange}
                          label={"Descripción"}
                        />
                        <div className="flex justify-center gap-2">
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="w-2/4 mb-10 bg-secondary-brand-dark font-semibold h-10 rounded-md text-light-color"
                          >
                            Registrar
                          </Button>
                          <Button
                            className="rounded-md w-2/4 border-2 border-red-300"
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </ModalBody>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
