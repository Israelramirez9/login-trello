import { Board } from "@/services/board.services";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Column } from "@/services/columns.services";
import { Task } from "@/services/tasks.services";

type ColumnWithTaks = Column & {
    tasks?: Task[]
}

type BoardWithColumns = Board & {
    columns?: ColumnWithTaks[]
}

type TrelloState = {
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

export const { setBoards, deleteBoard, updateBoard, setActualBoard, setColumnsToActualBoard, setTasksToColumnByColumnId } = trelloSlice.actions
export default trelloSlice.reducer
