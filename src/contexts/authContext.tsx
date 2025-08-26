import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { IUser } from "../types/IUser";

interface IAuthProvider {
  children: React.ReactNode;
}

interface IAuthContext {
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  login: (user: any) => Promise<void>;
  register: (user: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }: IAuthProvider) {
  const lStore: any = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<IUser | null>(JSON.parse(lStore));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  async function login(user: any) {
    const res = await authService.login(user);
    if (!res) return;
    const searchParams = new URLSearchParams(window.location.search);
    const redirectUrl = searchParams.get("redirect") || "/";
    setCurrentUser(res.user);
    localStorage.setItem("token", res.token);
    window.location.href = redirectUrl;
  }

  async function register(user: any) {
    const res = await authService.register(user);
    if (!res) return;
    setCurrentUser(res.user);
    localStorage.setItem("token", res.token);
    window.location.href = "/";
  }

  function logout() {
    setCurrentUser(null);
    localStorage.clear();
    window.location.href = "/";
  }

  const values = {
    currentUser,
    setCurrentUser,
    login,
    register,
    logout
  };

  return (
    <AuthContext value={values}>
      {children}
    </AuthContext>
  );
}