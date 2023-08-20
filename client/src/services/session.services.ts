import axios from "axios";
import { API_URL } from "../config/api";
import type { User } from "./users.services";

type Session = {
    isAuthenticate: boolean
    tokenSession: string
    expiresIn: number
    refreshToken: string
}
// type UserWithOutName = Omit<User, "name">//esto le quita la propiedad name al objeto User ya definido
type UserWithEmailAndPassword = Pick<User, "email" | "password"> //esta es otra forma de seleccionar propiedades definidas y extraerlas arbitrariamente

export const startSession = async (user: UserWithEmailAndPassword): Promise<Session> => {
    const session = await axios.post(API_URL + "/session", user)
    return session.data
}