import { getLocalTimeZone, today } from "@internationalized/date";
import { EmailIcon, LockIcon } from "../../../public/icons/Icons";
import { AdherenceRequest, AuthenticationRequest, ClinicHistoryProps, DoctorRegister, PatientRegister, Treatment } from "../../Interfaces/interfaces";

export const tipoTratamientoMap: Record<number, string> = {
  0: 'Medicación',
  1: 'Ejercitación',
  2: 'Nutrición',
  3: 'Psicologico'
};

export const dataLoginUser = [
  { label: 'Correo Electrónico', name: 'email', type: 'email', icon: EmailIcon, placeholder: 'Ej: tumail@mailito.com' },
  { label: 'Contraseña', name: 'password', type: 'password', icon: LockIcon, placeholder: 'Introduzca contraseña' },
]

//DATOS INICIALES DE LOS PACIENTES
export const initialValuesPatient: PatientRegister = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  tipoDocumentoId: 1,
  numeroDocumento: "",
  fechaNacimiento: "", //"2000-01-01",
  genero: "1",
  factorSanguineo: 1,
  patologiaId: 1,
  medicosId: [1],
  entidadesId: [1],
  financiadorId: 1
};

export const initialValuesHistory: ClinicHistoryProps = {
  titulo: "",
  descripcion: "",
  idPaciente: 12
};

export const initialValuesDoctor: DoctorRegister = {
  email: "",
  password: "",
  nombre: "",
  apellido: "",
  telefono: "",
  provincia: "",
  localidad: "",
  licencia: "",
  especialidad: 1,
  financiadores: [1]
};

export const initialValuesLogin: AuthenticationRequest = {
  email: "",
  password: ""
}

export const initialValuesAdherence: AdherenceRequest = {
  comentario: "",
  horarioId: 1,
  estado: 2
}


export const initialValuesTreatment: Treatment = {
  pacienteId: 10, //modificar con el id del paciente correspendiente
  patologiaId: 1,
  medicamentoId: 0,
  tipoTratamiento: 0,
  descripcion: "",
  dosisDiaria: 1,
  horaInicio: "12:00",
  diasTotales: 1,
  fechaInicio: ""
}

export const initialValuesOthers: Treatment = {
  pacienteId: 10, //modificar con el id del paciente correspendiente
  patologiaId: 1,
  medicamentoId: 5,
  tipoTratamiento: 1,
  descripcion: "",
  dosisDiaria: 1,
  horaInicio: "12:00",
  diasTotales: 1,
  fechaInicio: String(today(getLocalTimeZone()))
}