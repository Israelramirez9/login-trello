import { Board } from "@/services/board.services";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TrelloState = {
    boards: Board[] | null
}

const inicialState: TrelloState = {
    boards: null
}

export const trelloSlice = createSlice({
    name: 'trello',
    initialState: inicialState,
    reducers: {
        setBoards(state, action: PayloadAction<Board[]>) {
            state.boards = action.payload
        }
    }
})

export const { setBoards } = trelloSlice.actions
export default trelloSlice.reducer
