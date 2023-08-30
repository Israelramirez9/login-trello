import { createColumn } from '@/services/columns.services'
import { useAppSelector } from '@/store'
import { ColumnWithTasks, setColumnsToActualBoard } from '@/store/reducers/trello';
import { useDispatch } from 'react-redux'




function useColumns() {

    const actualBoard = useAppSelector(state => state.trello.actualBoard)

    const dispatch = useDispatch();

    const handleCreateNewColumn = () => {

        if (actualBoard?.columns === undefined) return

        createColumn({
            boardId: actualBoard?.boardId as string,
            title: 'New List',
            columnIndex: actualBoard?.columns?.length + 1
        })
            .then(column => {
                dispatch(setColumnsToActualBoard(actualBoard.columns === null ?
                    actualBoard.columns :
                    [...actualBoard.columns as ColumnWithTasks[], column]))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return {
        handleCreateNewColumn
    }
}



export default useColumns