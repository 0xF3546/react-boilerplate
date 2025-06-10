import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";
import { IUser } from "../types/IUser";
import { IAuth } from "../types/IAuth";
import { IAuthContext } from "../types/IAuthContext";

export const authContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: IAuth) {
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

  return (
    <authContext.Provider value={{ currentUser, setCurrentUser, login, register, logout }}>
      {children}
    </authContext.Provider>
  );
}