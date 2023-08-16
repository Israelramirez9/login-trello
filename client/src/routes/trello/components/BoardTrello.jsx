import React, { useState, useEffect } from "react";
import '../styles/Board.css';
import ListOfTasks from "./listOfTasks";
import { getTask, createTask, deleteTaskApi, updateTask } from "../../../services/tasks.services";
import HeaderBoardTrello from "./headerBoardTrello";
import HeaderColumn from "./headerColumn";
/* creates an array the size of columns to use or print on screen */

const SIZE = 4;
const COLUMNS = [...new Array(SIZE)];

/**
 * 
 * @returns 
 */

/* main component*/
function BoardTrello() {

    const [tasks, setTask] = useState([]);
    const [tasksFromServer, setTasksFromServer] = useState([]);
    /*useState initializes the value of the tasks array by calling the getTasks function */

    async function apiGetTasksFirstTime() {
        try {
            const resp = await getTask();
            setTask(resp.data);
            setTasksFromServer(resp.data);
        } catch (e) {
            console.log(e)
        }
    }
    async function apiGetTasks() {
        try {
            const resp = await getTask();
            setTasksFromServer(resp.data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        apiGetTasksFirstTime();
    }, []);

    useEffect(() => {
        apiGetTasks();

    }, [tasks]);

    const updateTaskFromServer = (id, direction) => {
        const currentTasks = tasks.map((task) => {
            if (task.taskId === id) {
                task.columnIndex = task.columnIndex + (direction === "left" ? - 1 : +1);
                tasksFromServer.forEach(async (serverTask) => {
                    if (serverTask.taskId === id) {
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
        setTask(currentTasks);
    }
    const changeColumnTaskToleft = (id) => {
        updateTaskFromServer(id, "left");
    }

    const changeColumnTaskToRight = (id) => {
        updateTaskFromServer(id, "right");
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
                tasksFromServer.forEach(async (serverTask) => {
                    if (serverTask.taskId === id) {
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
        <main>
            <HeaderBoardTrello />
            <div className="title">
                <h1> My Trello board </h1>
            </div>
            <section className="section-board">
                {
                    COLUMNS.map((_, index) =>
                        <div key={index} className="column">
                            <HeaderColumn columnIndex={index + 1} />

                            <ListOfTasks columnIndex={index + 1}

                                changeColumnTaskToRight={changeColumnTaskToRight}
                                changeColumnTaskToleft={changeColumnTaskToleft}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                                tasks={tasks.filter((task) => task.columnIndex === index + 1)}
                                addTask={addTask}></ListOfTasks>
                        </div>

                    )
                }

            </section>

        </main>
    );
}
export default BoardTrello;