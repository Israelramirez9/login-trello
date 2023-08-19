import axios from "axios";
import { API_URL } from "../config/api";
import { axiosInstance } from "../config/axios";

export type User = {
    name: string,
    email: string,
    password: string
}

type UserWithOutPassword = Omit<User, "password">//esto le quita la propiedad password al objeto User ya definido

const API_URL_USERS = API_URL + "/users";

export const createUser = async (user: User): Promise<UserWithOutPassword> => {
    const resp = await axios.post(API_URL_USERS, user)
    return resp.data
}

export const updateUser = async (user: User): Promise<UserWithOutPassword> => {
    console.log(user)
    const resp = await axiosInstance.put(API_URL_USERS, user);
    return resp.data
}

export const deleteUser = async ():
    Promise<UserWithOutPassword> => {
    const resp = await axiosInstance.delete(API_URL_USERS)
    return resp.data
}

