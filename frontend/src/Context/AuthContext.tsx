import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContextProps, AuthTokens, ContentMedicines, ContentPatient, DoctorRegister, PatientRegister, tokenData, Treatment } from "../Interfaces/interfaces";
import { API_URL } from "../api/api";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext<AuthContextProps>({
  login: () => { },
  logout: () => { },
  isLoggedIn: false,
  authTokens: null,
  registerDoctor: () => { },
  registerPatient: () => { },
  registerTreatment: () => { }
});

const AUTH_TOKEN_KEY = "TOKEN_KEY"
const AUTH_INFO_USER = "USER_INFO"

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const authTokensInLocalStorage = typeof window !== "undefined"
    ? window.localStorage.getItem(AUTH_INFO_USER)
    : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage) : null
  );

  const login = async (email: string, password: string) => {
    //MEJORAR EL ATRAPE DE LOS ERRORES
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

      const data = await res.json()
      const token: string = data.token

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
  }, []);

  const registerDoctor = async (doctor: DoctorRegister) => {
    console.log(doctor)
    try {
      const res = await fetch(`${API_URL}/auth/registrar-medico`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(doctor)
      })

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      if (res.status == 400) {
        toast.error('El email ya esta registrado')
      }

      if (res.status === 200) {
        toast.success("Su cuenta fue creada correctamente")
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
    isLoggedIn: !!authTokens,
    registerDoctor,
    registerPatient,
    registerTreatment
  }), [authTokens, login, logout, registerDoctor]);


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser utilizado dentro de AuthContextProvider");
  }
  return context;
};

async function registerPatient(patient: PatientRegister) {
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
    } catch (err: any) {
      console.log(err)
    }
  }
}

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
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      if (res.status === 200) {
        toast.success("El tratamiento fue creado correctamente")
      }
    } catch (err: any) {
      console.log(err)
    }
  }

}

export async function fetchPatient() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    try {
      // Usar la información decodificada si es necesario
      // Por ejemplo, puedes verificar los roles o permisos del usuario aquí
      const res = await fetch(`${API_URL}/paciente/buscar-pacientes-id-medico-conectado`, {
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
