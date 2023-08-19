import axios from "axios";
import { API_URL } from "../config/api";
import type { User } from "./users.services";

type Session = {
    tokenSession: string
    expiresIn: number
    refreshToken: string
}
export const startSession = async (user: User): Promise<Session> => {
    const session = await axios.post(API_URL + "/session", user)
    return session.data
}