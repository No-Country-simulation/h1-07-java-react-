// api.ts

import {
  AuthenticationRequest,
  AuthenticationResponse,
  MedicoRequest,
  PacienteRequest,
  PasswordRequest,
  RegistrationRequest,
  RolRequest,
} from "../Interfaces/interfaces";

export const API_URL = "https://1a1a-181-168-133-217.ngrok-free.app";

// Helper function to make fetch requests
const fetchData = async <T>(
  url: string,
  method: string,
  body?: unknown,
  token?: string
): Promise<T> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${API_URL}${url}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  const status = response.status;

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(`Error: ${response.status} ${response.statusText}. ${errorText}`);
    (error as any).status = status; 
    throw error;
  }
  
  return response.json() as Promise<T>;
};

export const createRole = async (
  roleData: RolRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>("/rol/crear-rol", "POST", roleData, token);
};

// Function to update a role
export const updateRole = async (
  idRol: number,
  roleData: RolRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>(
    `/rol/modificar-rol?idRol=${idRol}`,
    "PUT",
    roleData,
    token
  );
};

// Function to create a patient
export const createPatient = async (
  patientData: PacienteRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>(
    "/paciente/crear-paciente",
    "POST",
    patientData,
    token
  );
};

// Function to update a patient
export const updatePatient = async (
  patientData: PacienteRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>(
    "/paciente/modificar-paciente",
    "PUT",
    patientData,
    token
  );
};

// Function to change patient password
export const changePatientPassword = async (
  passwordData: PasswordRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>(
    "/paciente/modificar-contrasenia-paciente",
    "PUT",
    passwordData,
    token
  );
};

// Function to create a doctor
export const createDoctor = async (
  doctorData: MedicoRequest,
): Promise<void> => {
  return await fetchData<void>(
    "/auth/registrar-medico",
    "POST",
    doctorData,
  );
};

// Function to update a doctor
export const updateDoctor = async (
  doctorData: MedicoRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>(
    "/medico/modificar-medico",
    "PUT",
    doctorData,
    token
  );
};

// Function to change doctor password
export const changeDoctorPassword = async (
  passwordData: PasswordRequest,
  token: string
): Promise<void> => {
  return await fetchData<void>(
    "/medico/modificar-contrasenia-medico",
    "PUT",
    passwordData,
    token
  );
};

// Function to register
export const register = async (
  registrationData: RegistrationRequest
): Promise<void> => {
  return await fetchData<void>("/auth/registrar-medico", "POST", registrationData);
};

// Function to authenticate
export const authenticate = async (
  authData: AuthenticationRequest
): Promise<AuthenticationResponse> => {
  return await fetchData<AuthenticationResponse>(
    "/auth/autenticar",
    "POST",
    authData
  );
};

// Function to active account
export const activeAccount = async (
  token: string
): Promise<AuthenticationResponse> => {
  return await fetchData<AuthenticationResponse>(
    `/auth/activar-cuenta?token=${token}`,
    "GET",
  );
};
