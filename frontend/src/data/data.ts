import { CardIcon, EmailIcon, HomeIcon, LockIcon, MapIcon, PhoneIcon, UserIcon } from "../components/icons/Icons";
import { AuthenticationRequest, MedicoRegister, PatientRegister } from "../Interfaces/interfaces";

export const dataRegisterDoctor = [
  { label: 'Correo Electrónico', name: 'email', type: 'email', icon: EmailIcon, placeholder: 'Ej: tumail@mailito.com' },
  { label: 'Contraseña', name: 'password', type: 'password', icon: LockIcon, placeholder: 'Introduzca contraseña' },
  { label: 'Nombre', name: 'nombre', type: 'text', icon: UserIcon, placeholder: 'Ej: Mario' },
  { label: 'Apellido', name: 'apellido', type: 'text', icon: UserIcon, placeholder: 'Ej: Hernandez' },
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
  { label: 'Fecha de Nacimiento', name: 'fechaNacimiento', type: 'date', icon: CardIcon, placeholder: '22-02-2001' },//cambiar icono
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
  numeroDocumento: 1,
  fechaNacimiento: "2000-01-01", //"2000-01-01",
  genero: 1,
  factorSanguineo: 1,
  patologiaId: 1,
  medicosId: [1],
  tratamientosId: [1],
  entidadesId: [1],
  financiadorId: 1
};

export const initialValuesDoctor: MedicoRegister = {
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

export const initialValuesLogin: AuthenticationRequest ={
  email: "",
  password: ""
}