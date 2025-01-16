import { IUser } from "./IUser";

export interface IAuthContext {
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  login: (user: any) => Promise<void>;
  register: (user: any) => Promise<void>;
  logout: () => void;
}