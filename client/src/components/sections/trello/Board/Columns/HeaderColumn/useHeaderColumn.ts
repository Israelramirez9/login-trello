import { deleteColumn, updateColumn } from '@/services/columns.services';
import { useAppDispatch } from '@/store';
import { ColumnWithTasks, deleteColumnById, updateColumnById } from '@/store/reducers/trello';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

function useHeaderColumn(column: ColumnWithTasks) {

    const dispatch = useAppDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [columnTitle, setColumnTitle] = useState(column.title)

    useEffect(() => {
        setColumnTitle(column.title)
    }, [column.title])

    const handleChangeTitleBoard: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setColumnTitle(event.target.value)
    }
    const handleStartEdit = () => {
        setIsEditing(true);
    }
    const handleStopEdit = () => {
        setColumnTitle(column.title);
        setIsEditing(false);
    }
    const handleSendColumnTitle: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
       
        if (columnTitle.trim() === '') {
            swal("you must fill in", "try again", "info")
            return
        }

        setIsLoading(true);

        updateColumn(column.columnId, { columnIndex: column.columnIndex, title: columnTitle })
            .then(column => {
                dispatch(updateColumnById(
                    {
                        columnId: column.columnId,
                        columnIndex: column.columnIndex,
                        title: columnTitle
                    }
                ))

                setIsEditing(false)
            })
            .catch(error => {
                swal("Ooops...", "An error has ocurred", "error")
                console.log(error);

            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    const handleDeleteColumn = () => {

        setIsLoading(true);
        deleteColumn(column.columnId)
            .then(column => {
                dispatch(deleteColumnById(column.columnId))
                swal("column deleted!", "", "success");
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        isEditing,
        handleChangeTitleBoard,
        handleStartEdit,
        handleStopEdit,
        isLoading,
        columnTitle,
        handleSendColumnTitle,
        handleDeleteColumn
    }


}

export default useHeaderColumn