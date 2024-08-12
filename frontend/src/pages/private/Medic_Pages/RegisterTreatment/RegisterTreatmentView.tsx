import { useEffect, useState } from "react";
import { ContentMedicines, ContentPathologies, Patient } from "../../../../Interfaces/interfaces";
import { Link, useParams } from "react-router-dom";
import {
  fetchMedicines,
  fetchPatientSingle,
} from "../../../../Context/AuthContext";
import { Tab, Tabs } from "@nextui-org/react";
import { HeaderProfile } from "../../../../components/HeaderProfile";
import { API_URL } from "../../../../api/api";
import FormTreatment from "./FormTreatment/FormTreatment";
import FormTraining from "./FormTraining/FormTraining";
import { FormTreamentVoice } from "./FormOthers/FormTreamentVoice";

export const RegisterTreatmentView = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState<Patient>();
  const [medicines, setMedicines] = useState<ContentMedicines>();
  const [pathologies, setPathologies] = useState<ContentPathologies>()

  const fetchPathologiesData = async () => {
    const token = localStorage.getItem('TOKEN_KEY');

    try {
      const res = await fetch(`${API_URL}/patologias/listar-patologias?page=0&size=100`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const data = await res.json()
      setPathologies(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPatient = async () => {
    if (id) {
      try {
        setPatient(await fetchPatientSingle(id));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const fetchMedicinesData = async () => {
      setMedicines(await fetchMedicines());
    };

    fetchPathologiesData()
    fetchMedicinesData();
    fetchPatient();
  }, []);

  return (
    <section className="  min-h-screen m-auto overflow-hidden">
      <div className="w-full max-w-md m-auto xl:max-w-full bg-white rounded-lg shadow-lg  max-md:m-auto">
        <HeaderProfile
          link={`/patient/${id}`}
          loading={loading}
          name={patient?.nombre}
          lastname={patient?.apellido}
          typeDocument={patient?.tipoDocumento}
          financier={patient?.financiador}
          document={patient?.numeroDocumento}
          title={"Tratamientos"}
        >
          <div className="absolute -bottom-4 w-full flex justify-center ">
            <div className="flex gap-4">
              <Link
                to={`/patient/${id}`}
                className="px-3  cursor-pointer p-1 rounded-lg border-2 bg-violet-color  border-light-color shadow-xl text-light-color "
              >
                Historia clínica
              </Link>
              <p className="px-3  cursor-pointer p-1 rounded-lg border-2 bg-light-color border-violet-color shadow-xl text-violet-color ">
                Tratamiento
              </p>
            </div>
          </div>
        </HeaderProfile>
        <Tabs
          fullWidth={true}
          key="lg"
          size="lg"
          aria-label="Tabs sizes"
          className="  shadow-2xl border-3    border-violet-color  rounded-md flex flex-col gap-y-6 px-4 xl:max-w-2xl m-auto"
        >
          <Tab key="Medicación" title="Medicación" className="">
            <FormTreatment id={id} medicines={medicines?.content} pathologies={pathologies?.content}/>
          </Tab>
          <Tab key="Ejercicios" title="Ejercicios" className="">
            <FormTraining id={id} />
          </Tab>
          <Tab key="Nutrición" title="Nutrición" className="ml-">
            <FormTreamentVoice
              id={id}
              type={2}
              label={"Recomendaciones nutricionales"}
            />
          </Tab>
          <Tab key="Psicológico" title="Psicológico" className="">
            <FormTreamentVoice id={id} type={3} label={"Recomendaciones psicologicas"} />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};
