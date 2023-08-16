import { API_URL } from '../config/api';
import { axiosInstance } from '../config/axios';

export async function createBoard(board) {
    const board = await axiosInstance.post(API_URL + "/board", board)
    return board;
}