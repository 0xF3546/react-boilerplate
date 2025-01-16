import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export const useAuthProvider = () => {
    const auth = useContext(authContext);
    if (!auth) {
      throw new Error("authContext must be used within an AuthProvider");
    }
    return auth;
  }