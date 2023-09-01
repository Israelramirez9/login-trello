import { deleteColumn, updateColumn } from '@/services/columns.services';
import { useAppDispatch, useAppSelector } from '@/store';
import { ColumnWithTasks, deleteColumnById, updateColumnById, updateFeatureIsCompletedByTaskId } from '@/store/reducers/trello';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import Task from '../TasksSection/Task/Task';
import { updateTask } from '@/services/tasks.services';

function useHeaderColumn(column: ColumnWithTasks) {

    const dispatch = useAppDispatch();
    const actualBoard = useAppSelector(state => state.trello.actualBoard)
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
                /**
                 * elimino la columna y la actualizo en el store
                 */
                dispatch(deleteColumnById(column.columnId))
                swal("column deleted!", "", "success");
                /**
                 * actualizo el indice de cada columna, primero filtro las nuevas columnas
                 */
                if (actualBoard === null || actualBoard.columns === undefined) return

                const newColumns = actualBoard.columns.filter((columnToUpdate) => columnToUpdate.columnId !== column.columnId)
                console.log(newColumns)
                newColumns.forEach((newColumn, index) => {
                    /**
                     * actualizo el indice de cada columna y la actualizo
                     */
                    updateColumn(newColumn.columnId, { columnIndex: index + 1, title: newColumn.title })
                        .then(columnUpdated => {
                            dispatch(updateColumnById(columnUpdated))
                        })
                        .catch(error => {
                            console.log(error)
                        })
                        .finally()
                    newColumn.tasks?.forEach((task) => {
                        console.log(task, 'tarea a actualizar')
                        updateTask(task.taskId, { ...task, columnIndex: index + 1 })
                            .then(taskUpdated => {
                                dispatch(updateFeatureIsCompletedByTaskId(taskUpdated))
                                console.log(taskUpdated, 'aqui disparo la tarea ha actualizar en el store')
                            })
                            .catch(error => console.log(error))
                            .finally()
                    })
                })

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