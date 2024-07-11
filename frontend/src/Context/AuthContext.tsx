import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { AuthContextProps, AuthContextProviderProps, RootObject, User } from "../Interfaces/interfaces";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const initialUser: User = {
    id: 0,
    nombre: "",
    email: "",
    rol_id: 0,
  };

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  const [user, setUser] = useState<RootObject>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { user: initialUser, token: "" };
  });

  const [userInfo, setUserInfo] = useState<string>("");

  const login = useCallback((user: RootObject) => {
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
    setIsAuthenticated(true);
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser({ user: initialUser, token: "" });
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const value = useMemo<AuthContextProps>(() => ({
    login,
    logout,
    user,
    isAuthenticated,
    userInfo,
    setUserInfo,
  }), [user, login, logout, isAuthenticated, userInfo]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser utilizado dentro de AuthContextProvider");
  }
  return context;
};

