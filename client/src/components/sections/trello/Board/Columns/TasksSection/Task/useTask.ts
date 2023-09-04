import { Task, deleteTask, updateTask } from '@/services/tasks.services'
import { useAppDispatch, useAppSelector } from '@/store';
import { deleteTaskByTaskId, updateFeatureIsCompletedByTaskId, updateTaskToColumnByColumnId } from '@/store/reducers/trello';
import { useEffect, useState } from 'react'


function useTask(task: Task) {

    const dispatch = useAppDispatch();
    const actualBoard = useAppSelector(state => state.trello.actualBoard);
    const [leftRow, setLeftRow] = useState(false);
    const [rightRow, setRightRow] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setLeftRow(false)
        setRightRow(false)

        if (actualBoard === null || !actualBoard.columns) return

        if (task.columnIndex !== 1) {
            setLeftRow(true)
        }
        if (task.columnIndex !== actualBoard.columns.length) {
            setRightRow(true);
        }
    }, [actualBoard, task.columnIndex])



    const handleMovementTask = (direction: 'left' | 'right') => {
        if (actualBoard === null || actualBoard.columns === undefined) {
            return
        }

        let newColumnId: string;
        let newIndex: number;

        if (direction === 'left') {
            newIndex = task.columnIndex - 1;

        } else {
            newIndex = task.columnIndex + 1;
        }

        actualBoard.columns.map((column) => {
            if (column.columnIndex === newIndex) {

                newColumnId = column.columnId;

                setIsLoading(true);

                updateTask(task.taskId, { ...task, columnIndex: newIndex, columnId: newColumnId })
                    .then(updatedTask => {

                        dispatch(updateTaskToColumnByColumnId({ updatedTask, oldTask: task }))
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }
            return
        })



    }

    const handleDeleteTask = () => {

        if (actualBoard === null || actualBoard.columns === undefined) {
            return
        }


        actualBoard.columns.map((column) => {
            if (column.columnId === task.columnId) {

                setIsLoading(true)
                deleteTask(task.taskId)
                    .then(task => {
                        dispatch(deleteTaskByTaskId(task))

                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .finally(() => {
                        setIsLoading(false)
                    })
            }
        })

    }

    const handleIsCompleted = () => {

        if (actualBoard === null || actualBoard.columns === undefined) {
            return
        }
        setIsLoading(true)
        updateTask(task.taskId, { ...task, isCompleted: !isCompleted })
            .then(task => {
                setIsCompleted(!isCompleted)

                dispatch(updateFeatureIsCompletedByTaskId(task))
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    return {
        handleMovementTask,
        handleDeleteTask,
        handleIsCompleted,
        leftRow,
        rightRow,
        isLoading,
        isCompleted
    }


}

export default useTask