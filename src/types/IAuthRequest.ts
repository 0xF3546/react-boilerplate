import { IUser } from "./IUser";

export interface IAuthRequest {
    user: IUser;
    token: string;
}