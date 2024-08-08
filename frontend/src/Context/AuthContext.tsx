import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AuthContextProps,
  AuthTokens,
  ClinicHistoryProps,
  ContentMedicines,
  ContentPatient,
  DoctorRegister,
  PatientRegister,
  ResponseRequest,
  tokenData,
  Treatment,
} from "../Interfaces/interfaces";
import { API_URL } from "../api/api";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const AUTH_TOKEN_KEY = "TOKEN_KEY";
const AUTH_INFO_USER = "USER_INFO";

export const AuthContext = createContext<AuthContextProps>({
  login: () => { },
  logout: () => { },
  isLoggedIn: false,
  authTokens: null,
  userName: "",
  roles: [],
  registerDoctor: () => { },
  registerPatient: () => { },
  registerTreatment: () => { },
  createRole: async (email: string, role: string): Promise<void> => {
    try {
      const response = await fetch("/api/roles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          role,
        }),
      });

      if (response.ok) {
        console.log("Role created successfully!");
      } else {
        console.error("Failed to create role.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  },
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authTokensInLocalStorage =
    typeof window !== "undefined"
      ? window.localStorage.getItem(AUTH_INFO_USER)
      : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage) : null
  );

  const [userName, setUserName] = useState<string>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage).email : ""
  );

  const [roles, setRoles] = useState<string[]>(
    authTokensInLocalStorage
      ? JSON.parse(authTokensInLocalStorage).authorities
      : []
  );

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/auth/autenticar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.status == 401) {
        toast.warning("El email o contraseña son incorrectos");
      }

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const data = await res.json();

      if (data.token) {
        toast.success("¡Inicio de sesión exitoso!");
        window.location.href = "/dashboard";
        const token = data.token;
        const infoToken: tokenData = jwtDecode(token);
        const dataToken: AuthTokens = {
          token: token,
          email: infoToken.fullName,
          iat: infoToken.iat,
          exp: infoToken.exp,
          authorities: infoToken.authorities,
        };
        setAuthTokens(dataToken);
        window.localStorage.setItem(AUTH_INFO_USER, JSON.stringify(dataToken));
        window.localStorage.setItem(AUTH_TOKEN_KEY, data.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(AUTH_INFO_USER);
    window.localStorage.removeItem("MEDIC-DATA");
    window.localStorage.removeItem("PATIENT-DATA");
    window.localStorage.removeItem("PATIENT-NOTIFICATION");

    setAuthTokens(null);
    setUserName("");
    setRoles([]);
  }, []);

  const registerDoctor = async (doctor: DoctorRegister) => {
    try {
      const res = await fetch(`${API_URL}/auth/registrar-medico`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doctor),
      });

      if (res.status === 202) {
        window.location.href = "/login";
      }

      if (res.status == 500) {
        toast.warning("Sucedió un error en el servidor inténtalo mas tarde");
      }

      if (res.status == 400) {
        toast.warning("El email ingresado ya existe");
      }

      if (!res.ok) {
        throw new Error("Failed to register doctor");
      }

      const data = await res.json();
      await createRole(doctor.email, "DOCTOR");

      if (data) {
        toast.success("Su cuenta fue creada correctamente");
        const userName = data.nombre;
        window.location.href = "/login";
        setUserName(userName);
        localStorage.setItem(
          AUTH_INFO_USER,
          JSON.stringify({ email: doctor.email, nombre: userName })
        );
        setRoles((prevRoles) => [...prevRoles, "DOCTOR"]);
      } else {
        throw new Error("Nombre del doctor no recibido");
      }
    } catch (err) {
      if (err) {
        toast.error("El email ya está registrado");
      }
    }
  };

  const registerPatient = async (patient: PatientRegister) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      try {
        const res = await fetch(`${API_URL}/paciente/crear-paciente`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(patient),
        });

        if (res.status === 500) {
          toast.warning("El correo ya está registrado");
        }

        if (!res.ok) {
          console.error("HTTP error", res.status);
          throw new Error("Network response was not ok");
        }

        toast.success("El paciente fue creado correctamente");
        window.location.href = "/patient-list";

        //await createRole(patient.email, 'PATIENT');
        //setRoles(prevRoles => [...prevRoles, 'PATIENT']);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const createRole = async (email: string, role: string) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      try {
        const res = await fetch(`${API_URL}/rol/crear-rol`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ email, role }),
        });

        if (!res.ok) {
          throw new Error("Failed to assign role");
        }

        const data = await res.json();
        console.log(data);

        toast.success("Rol asignado exitosamente");
      } catch (err) {
        console.error(err);
        toast.error("Error al asignar rol");
      }
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedTokens = window.localStorage.getItem(AUTH_INFO_USER);
      if (!storedTokens) {
        setAuthTokens(null);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const value = useMemo<AuthContextProps>(
    () => ({
      login,
      logout,
      authTokens,
      userName,
      roles,
      isLoggedIn: !!authTokens,
      registerDoctor,
      registerPatient,
      registerTreatment,
      createRole: (email, role) => createRole(email, role),
    }),
    [
      authTokens,
      login,
      logout,
      registerDoctor,
      registerPatient,
      registerTreatment,
      roles,
      createRole,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext debe ser utilizado dentro de AuthContextProvider"
    );
  }
  return context;
};

async function registerTreatment(treatment: Treatment) {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token) {
    try {
      const res = await fetch(`${API_URL}/tratamiento/crear-tratamiento`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(treatment),
      });
      // if (!res.ok) {
      //   throw new Error(`Response status: ${res.status}`);
      // }
      if (res.status === 200) {
        toast.success("El tratamiento fue creado correctamente");
        window.location.href = `/patient/${treatment.pacienteId}/adherence`;
      }

      const data: ResponseRequest = await res.json();

      if (data.businessErrorCode === 404) {
        toast.warning("Seleccionar un medicamento");
      }




    } catch (err) {
      toast.success("El tratamiento fue creado correctamente");
    }
  }
}

export async function fetchPatient() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    try {
      // Usar la información decodificada si es necesario
      // Por ejemplo, puedes verificar los roles o permisos del usuario aquí
      const res = await fetch(
        `${API_URL}/paciente/listar-pacientes-id-medico-conectado?page=0&size=100`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data: ContentPatient = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const fetchMedicines = async () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token) {
    try {
      const res = await fetch(
        `${API_URL}/medicamento/buscar-medicamentos-activos`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data: ContentMedicines = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const fetchPatientSingle = async (id: string | undefined) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  try {
    const res = await fetch(
      `${API_URL}/paciente/buscar-paciente-id-medico-conectado?idPaciente=${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchMedicData = async () => {
  const token = localStorage.getItem("TOKEN_KEY");

  try {
    const res = await fetch(`${API_URL}/medico/buscar-medico-conectado`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    localStorage.setItem("MEDIC-DATA", JSON.stringify(data));

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchClinicHistory = async (id: string | undefined) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  try {
    const url = `${API_URL}/historia-clinica/historia-clinica-por-id-paciente?idPaciente=${id}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const registerClinicHistory = async (
  id: string,
  historyClinic: ClinicHistoryProps
) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  try {
    const res = await fetch(
      `${API_URL}/historia-clinica/crear-caso?idPaciente=${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(historyClinic),
      }
    );

    if (!res.ok) {
      throw new Error("Fail:" + res.status);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const fetchPatientConnect = async () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  try {
    const res = await fetch(`${API_URL}/paciente/buscar-paciente-conectado`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();
    localStorage.setItem("PATIENT-DATA", JSON.stringify(data));

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchNotifications = async () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token) {
    try {
      const res = await fetch(`${API_URL}/notificaciones-no-leidas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Sucedio un error");
      }

      const data = await res.json();
      localStorage.setItem("PATIENT-NOTIFICATION", JSON.stringify(data));

      return data;
    } catch (err) {
      console.log(err);
    }
  }
};

export const markNotificationsAsRead = async () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    try {
      const res = await fetch(`${API_URL}/marcar-notificaciones-leidas`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      toast.success("Las notificaciones fueron leídas correctamente");
    } catch (err) {
      console.error(err);
    }
  }
};

export const getAllNotifications = async () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    try {
      const res = await fetch(`${API_URL}/notificaciones-totales`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }
};

export const crearDonante = async (data: any) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  try {
    const response = await fetch(`${API_URL}/donante/crear-donante`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      toast.success("El donante fue creado correctamente")
    }

    if (!response.ok) {
      const result = await response.json();
      if (result.businessErrorCode == 400) {
        toast.warning("El paciente ya tiene un donante asignado")
      }else{
        throw new Error('Error fetching data');
      }
    }

    const result = await response.json();

    return result;
  } catch (error: any) {
    console.error("Error al enviar los datos:", error);
  }
};

export const fetchTreatmentPatient = async (id: string) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (id) {
    try {
      const res = await fetch(
        `${API_URL}/tratamiento/listar-tratamientos-paciente-medico-conectado?idPaciente=${id}&page=0&size=100`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
