import { ReactNode } from "react";
// import { FormValuesEdit } from "../../professional/pages/EditProfile";

export interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface ApiResponseProfesional {
  data: Omit<ProfessionalData, "slots">;
  success: boolean;
  message: string;
}
export interface ProfessionalData {
  id: string;
  speciality: string;
  description: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserLogged {
  token: string;
  firstName: string;
  lastName: string;
}

export interface DecodedToken {
  sub: string;
  jti: string;
  email: string;
  professionalId: string;
  role: string;
  clientId: string;
  exp: number;
  iss: string;
  aud: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface LoginFormValues {
  userEmail: string;
  userPassword: string;
}

export interface FormValues {
  userName: string;
  userLastName: string;
  userEmail: string;
  userPhoneNumber: string;
  userPassword: string;
  userPasswordConfirm: string;
}

export interface RolRequest {
  nombre: string;
}

export interface PacienteRequest {
  email?: string;
  password?: string;
  idPaciente?: number;
  nombre?: string;
  apellido?: string;
  idTipoDocumento?: number;
  numeroDocumento?: number;
  fechaNacimiento?: string;
  genero?: number;
  factorSanguineo?: number;
}

export interface PasswordRequest {
  password: string;
}

export interface MedicoRegister {
  email: string;
  nombre: string;
  apellido: string;
  telefono: string;
  provincia: string;
  localidad: string;
  licencia: string;
  especialidad: number;
  password: string
  financiadores: any;
}

export interface MedicoRequest {
  nombre?: string;
  apellido?: string;
  telefono?: string;
  provincia?: string;
  localidad?: string;
  licencia?: string;
  especialidad?: number;
  financiadores?: number[];
}

export interface RegistrationRequest {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
}

export interface Product {
  name: string
  price: number
  provider: number
  stock: number
  category: number
}

export interface DataProduct {
  producto_id: number
  nombre: string
  precio: string
  stock: number
  proveedor_id: number
  categoria_id: number
}

export interface IProvider {
  id?: number;
  nombre: string;
  direccion: string;
  telefono: string;
}

export interface newClient {
  name: string
  address: string
  phone: string
}

export interface Client {
  id: number
  name: string
  address: string
  phone: string
}

export type drinkCategory = {
  [key: number]: string;
};

export interface StateModal {
  title?: string
  stateModal: boolean
  closeModal: () => void
  deletePost: () => void
}

export interface EditModal {
  stateEditModal: boolean
  dataProduct: DataProduct | undefined
  closeModal: () => void
  updateTable: () => void
}

export interface Clients {
  id: number
  name: string
  address: string
  phone: string
}

export interface Users {
  id: number
  nombre: string
  email: string
  rol_id: number
}

export interface AutenticarRequest {
  authenticationRequest: AuthenticationRequest;
}

export interface ConfirmarMailRequest {
  token: string;
}

export interface RegistrarRequest {
  registrationRequest: RegistrationRequest;
}

export interface AuthContextProps {
  login: (authTokens: AuthTokens) => void;
  logout: () => void;
  isLoggedIn: boolean;
  authTokens: AuthTokens | null;
}

export interface AuthenticationRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse {
  id: number;
  nombre: string;
  email: string;
  rol_id: number;
  token?: string;
}

export interface AuthTokens {
  token: string;
  email: string;
  iat: number
  exp: number
  authorities: string[];
}

export interface tokenData {
  fullName: string
  sub: string
  iat: number
  exp: number
  authorities: string[]
}

export interface PatientRegister {
  email: string
  password: string
  nombre: string
  apellido: string
  tipoDocumentoId: number
  numeroDocumento: string
  fechaNacimiento: string
  genero: string
  factorSanguineo: number
  patologiaId: number
  medicosId: number[]
  entidadesId: number[]
  financiadorId: number
}

export interface Paciente {
  idPaciente: number
  nombre: string
  apellido: string
  tipoDocumento: string
  numeroDocumento: number
  patologia: string
  financiador: string
  tratamientos: any[]
  medicos: string[]
  entidades: string[]
}