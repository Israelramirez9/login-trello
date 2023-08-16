import { axiosInstance } from "../config/axios";
import { API_URL } from "../config/api";

const API_URL_COLUMN = API_URL + "/columns";

export const updateColumn = async (title) => {
    const resp = await axiosInstance(API_URL_COLUMN, title)
    return resp
}