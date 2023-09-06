import { createTask } from '@/services/tasks.services';
import { useAppDispatch } from '@/store';
import { ColumnWithTasks, setTasksToColumnByColumnId } from '@/store/reducers/trello';
import { handleToast } from '@/utils/toast';
import React, { useState } from 'react'

import swal from 'sweetalert';

function useTaskForm(column: ColumnWithTasks) {

    const dispatch = useAppDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [isError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [taskText, setTaskText] = useState('');

    const handleSendTaskForm: React.FormEventHandler<HTMLFormElement> = (event) => {

        event.preventDefault();
        if (taskText.trim() === '') {
            swal("you must fill in", "try again", "info")
            return
        }

        setIsLoading(true);
        createTask({
            columnIndex: column.columnIndex,
            isCompleted: false,
            columnId: column.columnId,
            text: taskText
        }).then(task => {
            handleToast('task created')
            dispatch(setTasksToColumnByColumnId(column.tasks === undefined
                ? {
                    columnId: column.columnId,
                    tasks: [task]
                }
                :
                {
                    columnId: column.columnId,
                    tasks: [...column.tasks, task]
                }))

            setIsEditing(false);
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setIsLoading(false);
        })



    }

    const handleChangeTaskForm: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setTaskText(event.target.value)
    }

    const handleStopTaskForm = () => {
        setIsEditing(false)
    }

    const handleStartEdit = () => {
        setIsEditing(true);
    }
    return {
        isEditing,
        isError,
        isLoading,
        taskText,
        handleSendTaskForm,
        handleChangeTaskForm,
        handleStopTaskForm,
        handleStartEdit
    }

}

export default useTaskForm