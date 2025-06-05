import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { IUser } from "../types/IUser";
import { IAuth } from "../types/IAuth";
import { IAuthContext } from "../types/IAuthContext";

export const authContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: IAuth) {
  const lStore: any = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState<IUser | null>(JSON.parse(lStore));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  async function login(user: any) {
    const res = await authService.login(user);
    if (!res) return;
    setCurrentUser(res.user);
    localStorage.setItem("token", res.token);
    navigate("/");
  }

  async function register(user: any) {
    const res = await authService.register(user);
    if (!res) return;
    setCurrentUser(res.user);
    localStorage.setItem("token", res.token);
    navigate("/");
  }

  function logout() {
    setCurrentUser(null);
    localStorage.clear();
    navigate("/");
  }

  return (
    <authContext.Provider value={{ currentUser, setCurrentUser, login, register, logout }}>
      {children}
    </authContext.Provider>
  );
}