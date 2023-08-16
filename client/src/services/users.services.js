import axios from "axios";
import { API_URL } from "../config/api";
import { axiosInstance } from "../config/axios";

const API_URL_USERS = API_URL + "/users";

export const createUser = async (user) => {
    const resp = await axios.post(API_URL_USERS, user)
    return resp
}

export const updateUser = async (user) => {
    const resp = await axiosInstance.put(API_URL_USERS, user);
    return resp
}

export const deleteUser = async () => {
    const resp = await axiosInstance.delete(API_URL_USERS)
    return resp
}

