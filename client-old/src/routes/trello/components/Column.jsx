import React, { useEffect, useState } from 'react'
import { getTasks } from '../../../services/tasks.services'
import ListOfTasks from './listOfTasks'


function Column({ columnId, columnIndex, columnsLength, columns }) {

    const [tasks, setTasks] = useState([])


    useEffect(() => {
        getTasks(columnId)
            .then(resp => setTasks(resp.data))
            .catch(error => console.log(error))
    }, [])

    const updateColumnIndexByTask = (id, direction) => {
        const currentTasks = tasks.map((task) => {
            if (task.taskId === id) {

                task.columnIndex = task.columnIndex + (direction === "left" ? - 1 : +1);

                columns.forEach(column => {

                    if (task.columnIndex === column.columnIndex) {
                        task.columnId = column.columnId
                    }
                })

                tasks.forEach(async (task) => {
                    if (task.taskId === id) {
                        try {
                            await updateTask(task);
                        } catch (error) {
                            console.log(error)
                        }
                    }
                })
            }
            return task;
        })
        setTasks(currentTasks);
    }
    const changeColumnTaskToleft = (id) => {
        updateColumnIndexByTask(id, "left");
    }

    const changeColumnTaskToRight = (id) => {
        updateColumnIndexByTask(id, "right");
    }

    const addTask = async (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            try {
                const response = await createTask(task);
                setTask([...tasks, response.data])
            } catch (error) {
                console.log(error)
            }
        }
    }

    const deleteTask = (id) => {
        tasksFromServer.forEach(async (task) => {
            if (task.taskId === id) {
                try {
                    await deleteTaskApi(task.taskId)
                    const currentTasks = tasks.filter((task) => task.taskId !== id);
                    setTask(currentTasks);
                } catch (error) {
                    console.log(error)
                }
            }
        })

    }

    const completeTask = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.taskId === id) {
                task.isCompleted = !task.isCompleted;
                tasksFromServer.forEach(async (task) => {
                    if (task.taskId === id) {
                        try {
                            const resp = await updateTask(task);
                            console.log(resp.data)
                            console.log(task)
                        } catch (error) {
                            console.log(error)
                        }
                    }
                })
            }
            return task;
        });
        setTask(currentTasks);
    }

    return (
        <ListOfTasks
            tasks={tasks}
            addTask={addTask}
            changeColumnTaskToRight={changeColumnTaskToRight}
            changeColumnTaskToleft={changeColumnTaskToleft}
            completeTask={completeTask}
            deleteTask={deleteTask}
            columnId={columnId}
            columnIndex={columnIndex}
            columnsLength={columnsLength}
        />
    )
}

export default Column