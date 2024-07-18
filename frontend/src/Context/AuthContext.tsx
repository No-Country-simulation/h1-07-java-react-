import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContextProps, AuthTokens } from "../Interfaces/interfaces";

export const AuthContext = createContext<AuthContextProps>({
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  authTokens: null
});

const AUTH_TOKEN_KEY = "TOKEN_KEY"

export const AuthContextProvider = ({ children }: {children: React.ReactNode}) => {

  const authTokensInLocalStorage = typeof window !== "undefined"
    ? window.localStorage.getItem(AUTH_TOKEN_KEY)
    : null;

  const [authTokens, setAuthTokens] = useState<AuthTokens | null>(
    authTokensInLocalStorage ? JSON.parse(authTokensInLocalStorage) : null
  );

  const login = useCallback(function (dataToken: AuthTokens) {
    window.localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(dataToken));
    setAuthTokens(dataToken);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
    setAuthTokens(null);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedTokens = window.localStorage.getItem(AUTH_TOKEN_KEY);
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
    isLoggedIn: !!authTokens
  }), [authTokens, login, logout]);


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser utilizado dentro de AuthContextProvider");
  }
  return context;
};