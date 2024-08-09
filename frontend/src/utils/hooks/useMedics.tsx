import { useState, useEffect } from 'react';
import { fetchMedicsData } from '../../Context/AuthContext';

export interface MedicsContent {
  content: Medic[]
  number: number
  size: number
  totalElements: number
  totalPages: number
  first: boolean
  last: boolean
}

interface Medic {
  idMedico: number
  nombre: string
  apellido: string
  telefono: string
  provincia: string
  localidad: string
  licencia: string
  especialidad: string
}

const useMedics = () => {
  const [medics, setMedics] = useState<MedicsContent | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMedics = async () => {
    try {
      setLoading(true);
      const fetchedMedics = await fetchMedicsData(); // Assuming fetchMedicsData is defined
      setMedics(fetchedMedics);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedics();
  }, []);

  return { medics, loading, refetch: fetchMedics };
};

export default useMedics;
