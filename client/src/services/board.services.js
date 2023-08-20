import { API_URL } from '../config/api';
import { axiosInstance } from '../config/axios';

const API_URL_BOARDS = API_URL + '/boards';

export async function getBoards() {
    const resp = await axiosInstance.get(API_URL_BOARDS)
    return resp;
}

export async function createBoard(dataBoard) {
    const resp = await axiosInstance.post(API_URL_BOARDS, dataBoard)
    return resp
}
export async function deleteBoard(boardId) {
    const resp = await axiosInstance.delete(API_URL_BOARDS + "/" + boardId)
    return resp
}
export async function updateBoard(boardId, board) {
    const resp = await axiosInstance.put(API_URL_BOARDS + "/" + boardId, board)
    return resp
}