import { CalendarIcon, CardIcon, EmailIcon, HomeIcon, LockIcon, MapIcon, PhoneIcon, UserIcon } from "../../../public/icons/Icons";
import { AuthenticationRequest, DoctorRegister, PatientRegister, Treatment } from "../../Interfaces/interfaces";

export const dataRegisterDoctor = [
  { label: 'Nombre', name: 'nombre', type: 'text', icon: UserIcon, placeholder: 'Ej: Mario' },
  { label: 'Apellido', name: 'apellido', type: 'text', icon: UserIcon, placeholder: 'Ej: Hernandez' },
  { label: 'Correo Electrónico', name: 'email', type: 'email', icon: EmailIcon, placeholder: 'Ej: tumail@mailito.com' },
  { label: 'Contraseña', name: 'password', type: 'password', icon: LockIcon, placeholder: 'Introduzca contraseña' },
  { label: 'Teléfono', name: 'telefono', type: 'tel', icon: PhoneIcon, placeholder: 'Ej: 55 5555-5555' },
  { label: 'Provincia', name: 'localidad', type: 'text', icon: MapIcon, placeholder: 'Ej: Santa Fe' },
  { label: 'Localidad', name: 'provincia', type: 'text', icon: HomeIcon, placeholder: 'Ej: Rosario' },
  { label: 'Licencia', name: 'licencia', type: 'text', icon: CardIcon, placeholder: 'Ej: 123456' },
]

export const dataRegisterPatient = [
  { label: 'Nombre', name: 'nombre', type: 'text', icon: UserIcon, placeholder: 'Ej: Mario' },
  { label: 'Apellido', name: 'apellido', type: 'text', icon: UserIcon, placeholder: 'Ej: Hernandez' },
  { label: 'Correo Electrónico', name: 'email', type: 'email', icon: EmailIcon, placeholder: 'Ej: tumail@mailito.com' },
  { label: 'Contraseña', name: 'password', type: 'password', icon: LockIcon, placeholder: 'Introduzca contraseña' },
  { label: 'Documento', name: 'numeroDocumento', type: 'number', icon: CardIcon, placeholder: 'Ej: 43812312' },
  { label: 'Fecha de Nacimiento', name: 'fechaNacimiento', type: 'date', icon: CalendarIcon, },//cambiar icono
]

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

export const initialValuesTreatment: Treatment ={
    pacienteId: 10, //modificar con el id del paciente correspendiente
    patologiaId: 1,
    medicamentoId: 0,
    tipoTratamiento: 0,
    descripcion: "",
    dosisDiaria: 0,
    horaInicio: "",
    diasTotales: 0,
    fechaInicio: ""
}
