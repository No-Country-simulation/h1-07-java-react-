import { useState, useEffect } from 'react';
import { fetchTreatmentPatientConect } from '../../Context/AuthContext';
import { ContentTreatmentPacient } from '../../Interfaces/interfaces';

export const useTreatmentPacient = () => {
  const [treatments, setTreatments] = useState<ContentTreatmentPacient>();
  const [error, setError] = useState<string | null>(null);

  const fetchTreatmentPacient = async () => {
    try {
      const data = await fetchTreatmentPatientConect();
      setTreatments(data);
    } catch (err) {
      console.log(err);
      setError('Error fetching treatment data');
    }
  };

  useEffect(() => {
    fetchTreatmentPacient();
  }, []);

  return { treatments, error };
};
