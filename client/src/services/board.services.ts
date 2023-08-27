import { API_URL } from '../config/api';
import { axiosInstance } from '../config/axios';

const API_URL_BOARDS = API_URL + '/boards';
export type Board = {
    title: string
    boardId: string
}

export async function getBoards(): Promise<Board[]> {
    const resp = await axiosInstance.get(API_URL_BOARDS)
    return resp.data;
}

export async function createBoard(board: Omit<Board, "boardId">): Promise<Board> {
    const resp = await axiosInstance.post(API_URL_BOARDS, board)
    return resp.data
}