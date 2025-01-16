import axios from "axios";
import { IAuthRequest } from "../types/IAuthRequest";

const authService = {
  login: async (user: any): Promise<IAuthRequest | null> => {
    try {
      const response = await axios.post("/auth/login", user);
      if (response.status === 200) {
        return response.data as IAuthRequest;
      }
    } catch (error) {
      console.error("Login error:", error);
    }
    return null;
  },

  register: async (user: any): Promise<IAuthRequest | null> => {
    try {
      const response = await axios.post("/auth/register", user);
      if (response.status === 200) {
        return response.data as IAuthRequest;
      }
    } catch (error) {
      console.error("Register error:", error);
    }
    return null;
  },
};

export default authService;
