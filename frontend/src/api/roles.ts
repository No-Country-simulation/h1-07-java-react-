// roles.ts
export const ROLES = {
  HOSPITAL: "HOSPITAL",
  MEDICO: "MEDICO",
  PACIENTE: "PACIENTE",
} as const;

export type RoleType = keyof typeof ROLES;
