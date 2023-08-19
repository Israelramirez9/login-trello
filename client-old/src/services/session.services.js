import axios from "axios";
import { API_URL } from "../config/api";

export const startSession = async (user) => {
    const session = await axios.post(API_URL + "/session", user)
    return session
}