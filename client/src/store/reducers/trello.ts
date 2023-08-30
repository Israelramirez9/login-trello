import { Board } from "@/services/board.services";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Column } from "@/services/columns.services";
import { Task } from "@/services/tasks.services";

export type ColumnWithTasks = Column & {
    tasks?: Task[]
}

export type BoardWithColumns = Board & {
    columns?: ColumnWithTasks[]
}

export type TrelloState = {
    boards: Board[] | null,
    actualBoard: BoardWithColumns | null

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
        setActualBoard(state, action: PayloadAction<Board | null>) {
            const board = action.payload;
            /**
             * si se manda un board null en el payload se va a borrar el boardActual
             */
            if (board === null) {
                state.actualBoard = null
                return
            }

            state.actualBoard = board
        },
        setColumnsToActualBoard(state, action: PayloadAction<Column[]>) {
            if (state.actualBoard === null) {
                return
            }
            state.actualBoard.columns = action.payload;
        },
        updateColumnById(state, action: PayloadAction<Pick<Column, 'columnId' | 'columnIndex' | 'title'>>) {
            const { columnId, columnIndex, title } = action.payload;
            if (state.actualBoard === null) {
                return
            }
            state.actualBoard.columns = state.actualBoard?.columns?.map((column) => {
                if (column.columnId === columnId) {
                    column.title = title;
                    column.columnIndex = columnIndex;
                }
                return column
            })
        },
        deleteColumnById(state, action) {
            const columnId = action.payload;
            if (state.actualBoard === null) {
                return
            }
            state.actualBoard.columns = state.actualBoard.columns?.filter((column) => column.columnId!==columnId)
        },
        setTasksToColumnByColumnId(state, action: PayloadAction<{ columnId: string, tasks: Task[] }>) {
            const { columnId, tasks } = action.payload;

            if (state.actualBoard === null) {
                return
            }

            state.actualBoard.columns = state.actualBoard.columns?.map((column) => {
                if (column.columnId === columnId) {
                    column.tasks = tasks
                }
                return column
            })

        }
    }
})

export const { setBoards,
    deleteBoard,
    updateBoard,
    setActualBoard,
    setColumnsToActualBoard,
    setTasksToColumnByColumnId,
    updateColumnById,
    deleteColumnById } = trelloSlice.actions
export default trelloSlice.reducer
