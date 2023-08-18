import { API_URL } from '../config/api';
import { axiosInstance } from '../config/axios';

const API_URL_BOARDS = API_URL + '/boards';

export async function getBoards() {
    const resp = await axiosInstance.get(API_URL_BOARDS)
    return resp;
}

export async function createBoard(dataBoard) {
    const resp = await axiosInstance.post(API_URL_BOARDS,dataBoard)
    return resp
}