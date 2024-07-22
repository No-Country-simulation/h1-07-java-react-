export interface Paciente {
  idPaciente: number;
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  numeroDocumento: number;
  patologia: string;
  financiador: string;
  tratamientos: string[];
  medicos: string[];
  entidades: string[];
}

export interface ResponseType {
  content: Paciente[];
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}
