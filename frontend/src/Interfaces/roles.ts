// roles.ts
export const ROLES = {
  HOSPITAL: "HOSPITAL",
  MEDICO: "ROLE_MEDICO",
  PACIENTE: "ROLE_PACIENTE",
} as const;

export type RoleType = keyof typeof ROLES;
