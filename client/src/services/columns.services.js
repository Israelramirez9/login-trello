import { axiosInstance } from "../config/axios";
import { API_URL } from "../config/api";

const API_URL_COLUMN = API_URL + "/columns";

export const getColumns = async () => {
    const resp = await axiosInstance.get(API_URL_COLUMN)
    return resp;
}

export const createColumn = async (dataColumn) => {
    const resp = await axiosInstance.post(API_URL_COLUMN, dataColumn)
    return resp
}

export const updateColumn = async (columnId, title) => {
    const resp = await axiosInstance.put(API_URL_COLUMN + "/" + columnId, title)
    return resp;
}

export const deleteColumn = async (columnId, column) => {
    const resp = await axiosInstance.delete(API_URL_COLUMN + "/" + columnId, column)
    return resp
}