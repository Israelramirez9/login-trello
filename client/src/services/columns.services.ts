import { axiosInstance } from "../config/axios";
import { API_URL } from "../config/api";

const API_URL_COLUMN = API_URL + "/columns";
export type Column = {
    columnIndex: number
    title: string
    boardId: string
    columnId: string
}

export const getColumns = async (boardId?: string): Promise<Column[]> => {
    let url = API_URL_COLUMN
    if (boardId) {
        url += `?board=${boardId}`
    }
    const resp = await axiosInstance.get(url)
    return resp.data;
}

export const createColumn = async (column: Omit<Column, 'columnId'>): Promise<Column> => {
    const resp = await axiosInstance.post(API_URL_COLUMN, column)
    return resp.data
}

export const updateColumn = async (columnId: string, column: Pick<Column, 'title' | 'columnIndex'>): Promise<Column> => {
    const resp = await axiosInstance.put(API_URL_COLUMN + "/" + columnId, column)
    return resp.data;
}

export const deleteColumn = async (columnId: string): Promise<Column> => {
    const resp = await axiosInstance.delete(API_URL_COLUMN + "/" + columnId)
    return resp.data
}