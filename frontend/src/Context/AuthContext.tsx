import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContextProps, AuthTokens, ClinicHistoryProps, ContentMedicines, ContentPatient, DoctorRegister, PatientRegister, ResponseRequest, tokenData, Treatment } from "../Interfaces/interfaces";
import { API_URL } from "../api/api";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const AUTH_TOKEN_KEY = "TOKEN_KEY"
const AUTH_INFO_USER = "USER_INFO"

export const AuthContext = createContext<AuthContextProps>({
  login: () => { },
  logout: () => { },
  isLoggedIn: false,
  authTokens: null,
  userName: '',
  roles: [],
  registerDoctor: () => { },
  registerPatient: () => { },
  registerTreatment: () => { },
  createRole: async (email: string, role: string): Promise<void> => {

    try {
      const response = await fetch('/api/roles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          role,
        }),
      });

      if (response.ok) {
        console.log('Role created successfully!');
      } else {
        console.error('Failed to create role.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
});

// ESTE CODIGO ES DE MAURICIO 
/* export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const authTokensInLocalStorage = typeof window !== "undefined"
    ? window.localStorage.getItem(AUTH_INFO_USER)
    : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage) : null
  );

  const [userName, setUserName] = useState<string>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage).email : ''
  );

  const [roles, setRoles] = useState<string[]>([]);

  const createRole = async (email: string, role: string) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      try {
        const res = await fetch(`${API_URL}/rol/crear-rol`, {
          method: "POST",
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ email, role })
        });
  
        if (!res.ok) {
          throw new Error("Failed to assign role");
        }
  
        const data = await res.json();
        console.log(data);
        
        toast.success("Rol asignado exitosamente");
      } catch (err: any) {
        console.error(err);
        toast.error("Error al asignar rol");
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/auth/autenticar`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      // if (!res.ok) {
      //   throw new Error("Failed to login");
      // }

      const data: ResponseRequest = await res.json()

      if (data.businessErrorCode == 304) {
        toast.warning("El email o contraseña son incorrectos")
      }
      if (data.token) {
        toast.success('¡Inicio de sesión exitoso!');
        window.location.href = '/dashboard'
        const token = data.token
        const infoToken: tokenData = jwtDecode(token)
        const dataToken: AuthTokens = {
          token: token,
          email: infoToken.fullName,
          iat: infoToken.iat,
          exp: infoToken.exp,
          authorities: infoToken.authorities
        }
        setAuthTokens(dataToken);
        window.localStorage.setItem(AUTH_INFO_USER, JSON.stringify(dataToken));
        window.localStorage.setItem(AUTH_TOKEN_KEY, data.token)
      }


      if (!token) {
        throw new Error("Access token not found in response");
      }

      const infoToken: tokenData = jwtDecode(token)
      const dataToken: AuthTokens = {
        token: token,
        email: infoToken.fullName,
        iat: infoToken.iat,
        exp: infoToken.exp,
        authorities: infoToken.authorities
      }
      setAuthTokens(dataToken);
      setUserName(infoToken.fullName);
      setRoles(infoToken.authorities);
      window.localStorage.setItem(AUTH_INFO_USER, JSON.stringify(dataToken));
      window.localStorage.setItem(AUTH_TOKEN_KEY, token)

    } catch (err: any) {
      console.log(err);
    }
  }

  const logout = useCallback(function () {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(AUTH_INFO_USER)

    setAuthTokens(null);
    setUserName('');
  }, []);

  const registerDoctor = async (doctor: DoctorRegister) => {
    console.log(doctor)
    try {
      const res = await fetch(`${API_URL}/auth/registrar-medico`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doctor)
      })
      console.log(res);


      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const data = await res.json();

      await createRole(doctor.email, 'DOCTOR');
      if (data.nombre) {
        const userName = data.nombre;

        if (res.status === 400) {
          toast.error('El email ya está registrado');
        } else if (res.status === 200) {
          toast.success("Su cuenta fue creada correctamente");
          setUserName(userName);
          localStorage.setItem(AUTH_INFO_USER, JSON.stringify({ email: doctor.email, nombre: userName }));
        }
      } else {
        throw new Error("Nombre del doctor no recibido");
      }

    } catch (err: any) {
      if (err.status === 400) {
        toast.error('El email ya esta registrado')
      }
    }
  }

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


  const value = useMemo<AuthContextProps>(() => ({
    login,
    logout,
    authTokens,
    userName,
    roles,
    isLoggedIn: !!authTokens,
    registerDoctor,
    registerPatient,
    registerTreatment,
    createRole
  }), [authTokens, login, logout, registerDoctor, registerPatient, registerTreatment, roles]);


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
 */

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

  const authTokensInLocalStorage = typeof window !== "undefined"
    ? window.localStorage.getItem(AUTH_INFO_USER) : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage) : null
  );

  const [userName, setUserName] = useState<string>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage).email : ''
  );

  const [roles, setRoles] = useState<string[]>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage).authorities : []
  );

  console.log('Roles Actuales', roles);


  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_URL}/auth/autenticar`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const data = await res.json();

      if (data.businessErrorCode == 304) {
        toast.warning("El email o contraseña son incorrectos")
      }
      if (data.token) {
        toast.success('¡Inicio de sesión exitoso!');
        window.location.href = '/dashboard'
        const token = data.token
        const infoToken: tokenData = jwtDecode(token)
        const dataToken: AuthTokens = {
          token: token,
          email: infoToken.fullName,
          iat: infoToken.iat,
          exp: infoToken.exp,
          authorities: infoToken.authorities
        }
        setAuthTokens(dataToken);
        window.localStorage.setItem(AUTH_INFO_USER, JSON.stringify(dataToken));
        window.localStorage.setItem(AUTH_TOKEN_KEY, data.token)
      }

    } catch (err: any) {
      console.log(err);
    }
  };

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    window.localStorage.removeItem(AUTH_INFO_USER);
    window.localStorage.removeItem('MEDIC-DATA');

    setAuthTokens(null);
    setUserName('');
    setRoles([]);
  }, []);

  /* const registerDoctor = async (doctor: DoctorRegister) => {
    try {
      const res = await fetch(`${API_URL}/auth/registrar-medico`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doctor)
      });

      if (!res.ok) {
        throw new Error("Failed to register doctor");
      }

      const data = await res.json();

      await createRole(doctor.email, 'DOCTOR');
      if (data.nombre) {
        const userName = data.nombre;

        if (res.status === 400) {
          toast.error('El email ya está registrado');
        } else if (res.status === 200) {
          toast.success("Su cuenta fue creada correctamente");
          setUserName(userName);
          localStorage.setItem(AUTH_INFO_USER, JSON.stringify({ email: doctor.email, nombre: userName }));
        }
      } else {
        throw new Error("Nombre del doctor no recibido");
      }

    } catch (err: any) {
      if (err.status === 400) {
        toast.error('El email ya está registrado');
      }
    }
  }; */

  /* async function registerPatient(patient: PatientRegister) {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      try {
        const res = await fetch(`${API_URL}/paciente/crear-paciente`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(patient)
        })

        if (!res.ok) {
          console.error('HTTP error', res.status);
          throw new Error('Network response was not ok');
        }
        //SOLICITAR QUE LAS RESPUESTAS DE LAS APIS TENGAN EL CODIGO HTTP PARA OBTENER EL ERROR
        if (res.status === 500) {
          return toast.warning("El correo ya esta registrado")
        }

        await createRole(patient.email, 'PATIENT');

        const updatedRoles = [...roles, 'PATIENT'];
        setRoles(updatedRoles);

      } catch (err: any) {
        console.log(err)
      }
    }
  } */

  const registerDoctor = async (doctor: DoctorRegister) => {
    try {
      const res = await fetch(`${API_URL}/auth/registrar-medico`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doctor)
      });

      if (!res.ok) {
        throw new Error("Failed to register doctor");
      }

      const data = await res.json();
      await createRole(doctor.email, 'DOCTOR');

      if (data.nombre) {
        const userName = data.nombre;

        if (res.status === 400) {
          toast.error('El email ya está registrado');
        } else if (res.status === 200) {
          toast.success("Su cuenta fue creada correctamente");
          setUserName(userName);
          localStorage.setItem(AUTH_INFO_USER, JSON.stringify({ email: doctor.email, nombre: userName }));
          setRoles(prevRoles => [...prevRoles, 'DOCTOR']);
        }
      } else {
        throw new Error("Nombre del doctor no recibido");
      }
    } catch (err: any) {
      if (err.status === 400) {
        toast.error('El email ya está registrado');
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
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(patient)
        });

        if (!res.ok) {
          console.error('HTTP error', res.status);
          throw new Error('Network response was not ok');
        }

        if (res.status === 500) {
          return toast.warning("El correo ya está registrado");
        }

        await createRole(patient.email, 'PATIENT');
        setRoles(prevRoles => [...prevRoles, 'PATIENT']);

      } catch (err: any) {
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
          headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ email, role })
        });

        if (!res.ok) {
          throw new Error("Failed to assign role");
        }

        const data = await res.json();
        console.log(data);

        toast.success("Rol asignado exitosamente");
      } catch (err: any) {
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

  const value = useMemo<AuthContextProps>(() => ({
    login,
    logout,
    authTokens,
    userName,
    roles,
    isLoggedIn: !!authTokens,
    registerDoctor,
    registerPatient,
    registerTreatment,
    createRole: (email, role) => createRole(email, role)
  }), [authTokens, login, logout, registerDoctor, registerPatient, registerTreatment, roles, createRole]);

  console.log(value);

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;


};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser utilizado dentro de AuthContextProvider");
  }
  return context;
};

async function registerTreatment(treatment: Treatment) {
  const token = localStorage.getItem('TOKEN_KEY');

  if (token) {
    try {
      const res = await fetch(`${API_URL}/tratamiento/crear-tratamiento`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(treatment)
      })
      // if (!res.ok) {
      //   throw new Error(`Response status: ${res.status}`);
      // }

      const data: ResponseRequest = await res.json()
      console.log(data)
      if (data.businessErrorCode === 404) {
        toast.warning("Seleccionar un medicamento")
      }
      console.log(res)
      if (res.status === 200) {
        toast.success("El tratamiento fue creado correctamente")
      }
    } catch (err: any) {
      toast.success("El tratamiento fue creado correctamente")
    }
  }

}

export async function fetchPatient() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    try {
      // Usar la información decodificada si es necesario
      // Por ejemplo, puedes verificar los roles o permisos del usuario aquí
      const res = await fetch(`${API_URL}/paciente/listar-pacientes-id-medico-conectado`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
      });

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data: ContentPatient = await res.json();
      return data
    } catch (err: any) {
      console.log(err);
    }
  }
};

export const fetchMedicines = async () => {

  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  if (token) {
    try {
      const res = await fetch(`${API_URL}/medicamento/buscar-medicamentos-activos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
      })

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data: ContentMedicines = await res.json()
      return data

    } catch (err: any) {
      console.log(err)
    }
  }
}

export const fetchPatientSingle = async (id: string | undefined) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  try {
    const res = await fetch(`${API_URL}/paciente/buscar-paciente-id-medico-conectado?idPaciente=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json()
    return data
  } catch (err: any) {
    console.log(err)
  }
}

export const fetchMedicData = async () => {
  const token = localStorage.getItem("TOKEN_KEY");

  try {
    const res = await fetch(`${API_URL}/medico/buscar-medico-conectado`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json()
    localStorage.setItem("MEDIC-DATA", JSON.stringify(data))

    return data
  } catch (err: any) {
    console.error(err)
  }
}

export const fetchClinicHistory = async (id: string | undefined) => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  try {
    const res = await fetch(`${API_URL}/historia-clinica/historia-clinica-por-id-paciente?idPaciente=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })


    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const data = await res.json()
    return data

  } catch (err: any) {
    console.log(err)
  }
}

export
  const registerClinicHistory = async (id: string, historyClinic: ClinicHistoryProps) => {
    const token = localStorage.getItem('TOKEN_KEY');

    try {
      const res = await fetch(`${API_URL}/historia-clinica/crear-caso?idPaciente=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(historyClinic)
      })

      if (!res.ok) {
        throw new Error("Fail:" + res.status);
      }
      const data = await res.json()
      console.log(data)
      toast.success("La historia clinica fue registrada correctamente")
    } catch (err: any) {
      console.log(err)
    }
  }