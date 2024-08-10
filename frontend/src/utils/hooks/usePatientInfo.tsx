import { useState, useEffect } from 'react';
import { Paciente } from '../../Interfaces/interfaces';

const usePatientInfo = () => {
  const [patient, setPatient] = useState<Paciente | undefined>();

  useEffect(() => {
    const storedPatient = localStorage.getItem("PATIENT-DATA");
    if (storedPatient) {
      const patientData: Paciente = JSON.parse(storedPatient);
      setPatient(patientData);
    }
  }, []);

  return {patient, setPatient}
};

export default usePatientInfo;