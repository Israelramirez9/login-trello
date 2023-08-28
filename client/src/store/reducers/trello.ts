import { Board } from "@/services/board.services";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TrelloState = {
    boards: Board[] | null,
    actualBoard: string | null
}

const inicialState: TrelloState = {
    boards: null,
    actualBoard: null
}

export const trelloSlice = createSlice({
    name: 'trello',
    initialState: inicialState,
    reducers: {
        setBoards(state, action: PayloadAction<Board[]>) {
            state.boards = action.payload
        },
        updateBoard(state, action: PayloadAction<Board>) {
            const { boardId, title } = action.payload

            if (state.boards === null) return

            state.boards = state.boards.map((board) => {
                if (board.boardId === boardId) {
                    board.title = title;
                }
                return board

            })
        },
        deleteBoard(state, action: PayloadAction<Pick<Board, 'boardId'>>) {
            const { boardId } = action.payload

            if (state.boards === null) return

            state.boards = state.boards.filter((board) => {
                return board.boardId !== boardId
            })

        },
        setActualBoard(state, action: PayloadAction<string |null>) {
            state.actualBoard = action.payload
        }
    }
})

export const { setBoards, deleteBoard, updateBoard, setActualBoard } = trelloSlice.actions
export default trelloSlice.reducer
