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

export async function deleteBoard(boardId: string): Promise<Board> {
    const resp = await axiosInstance.delete(API_URL_BOARDS + '/' + boardId)
    return resp.data
}
export async function updateBoard(boardId: string, board: Omit<Board, 'boardId'>): Promise<Board> {
    const resp = await axiosInstance.put(API_URL_BOARDS + '/' + boardId, board)
    return resp.data
}