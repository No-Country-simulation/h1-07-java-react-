import { useState, useEffect } from 'react';
import { Medic } from '../../Interfaces/interfaces';

const useMedicsInfo = () => {
  const [medic, setMedic] = useState<Medic>();

  useEffect(() => {
    const storedPatient = localStorage.getItem("MEDIC-DATA");
    if (storedPatient) {
      const patientData: Medic = JSON.parse(storedPatient);
      setMedic(patientData);
    }
  }, []);

  return { medic, setMedic }
};

export default useMedicsInfo;