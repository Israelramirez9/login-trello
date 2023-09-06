import { createColumn } from '@/services/columns.services'
import { useAppSelector } from '@/store'
import { setColumnsToActualBoard } from '@/store/reducers/trello';
import { handleToast } from '@/utils/toast';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import swal from 'sweetalert';




function useColumns() {

    const [isSelectNewColumn, setIsSelectNewColumn] = useState(false);

    const [nameNewColumn, setNameNewColumn] = useState<string>('');

    const actualBoard = useAppSelector(state => state.trello.actualBoard)

    const dispatch = useDispatch();

    const handleCreateNewColumn: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (nameNewColumn.trim() === '') {
            swal("you must fill in", "try again", "info")
            return
        }
        setNameNewColumn('');
        setIsSelectNewColumn(!isSelectNewColumn)
        if (actualBoard?.columns === undefined) return

        createColumn({
            boardId: actualBoard.boardId,
            title: nameNewColumn,
            columnIndex: actualBoard.columns.length + 1
        })
            .then(column => {
                handleToast('Card created')
                dispatch(setColumnsToActualBoard(actualBoard.columns === undefined ?
                    [column] :
                    [...actualBoard.columns, column]))
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleChangeColumnName: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setNameNewColumn(event.target.value)
    }

    const handleShowForm = () => {
        setIsSelectNewColumn(!isSelectNewColumn);
    }
    return {
        handleCreateNewColumn,
        handleChangeColumnName,
        isSelectNewColumn,
        handleShowForm,
        nameNewColumn

    }
}



export default useColumns