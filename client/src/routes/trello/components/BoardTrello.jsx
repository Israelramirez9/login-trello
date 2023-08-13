import React, { useState, useEffect, useContext } from "react";
import '../styles/Board.css';
import ListOfTasks from "./listOfTasks";
import axios from "axios";
import { UserContext } from "../../../auth/UserContext";
import HeaderBoardTrello from "./headerBoardTrello";
import { API_URL } from "../../../config/api";
/* creates an array the size of columns to use or print on screen */

const SIZE = 4;
const API_TASKS = API_URL + '/tasks';
const COLUMNS = [...new Array(SIZE)];

/**
 * 
 * @returns 
 */

/* main component*/
function BoardTrello() {
    const { globalState } = useContext(UserContext);
    const [tasks, setTask] = useState([]);
    const [tasksFromServer, setTasksFromServer] = useState([]);
    /*useState initializes the value of the tasks array by calling the getTasks function */


    useEffect(() => {
        axios.get(API_TASKS)
            .then(response => {
                setTask(response.data.filter((obj) => obj.userId === globalState.userId));
                setTasksFromServer(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        axios.get(API_TASKS)
            .then(response => {
                setTasksFromServer(response.data);
            })
            .catch(error => console.log(error));

    }, [tasks]);




    const changeColumnTaskToleft = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.taskId === id) {
                task.columnId = task.columnId - 1;
                tasksFromServer.forEach((serverTask) => {
                    if (serverTask.taskId === id) {
                        axios.put(API_TASKS + "/" + serverTask.taskId, task)
                            .then(res => console.log(res))
                            .catch(e => console.log(e))
                    }
                })
            }
            return task;
        })
        setTask(currentTasks);
    }
    const changeColumnTaskToRight = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.taskId === id) {
                task.columnId = task.columnId + 1;
                tasksFromServer.forEach((serverTask) => {
                    if (serverTask.taskId === id) {
                        axios.put(API_TASKS + "/" + serverTask.taskId, task)
                            .then(res => console.log(res))
                            .catch(e => console.log(e))
                    }
                })
            }
            return task;
        })
        setTask(currentTasks);
    }

    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            axios.post(API_TASKS, task)
                .then(response => {
                    setTask([...tasks, response.data])
                    console.log(response)
                })
                .catch(error => console.log(error));
        }
    }

    const deleteTask = (id) => {
        tasksFromServer.forEach((task) => {
            if (task.taskId === id) {
                axios.delete(API_TASKS + "/" + task.taskId)
                    .then(response => {
                        console.log(response.data)
                        const currentTasks = tasks.filter((task) => task.taskId !== id);
                        setTask(currentTasks);
                        console.log(response)
                    })
                    .catch(error => console.log(error));
            }
        })

    }

    const completeTask = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.taskId === id) {
                task.isCompleted = !task.isCompleted;
                tasksFromServer.forEach((serverTask) => {
                    if (serverTask.taskId === id) {
                        axios.put(API_TASKS + "/" + serverTask.taskId, task)
                            .then(res => console.log(res))
                            .catch(e => console.log(e))
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
            <section>
                {
                    COLUMNS.map((_, index) =>
                        <div key={index} className="column"><h2>Column {index + 1}</h2>
                            <ListOfTasks columnId={index + 1}

                                changeColumnTaskToRight={changeColumnTaskToRight}
                                changeColumnTaskToleft={changeColumnTaskToleft}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                                tasks={tasks.filter((task) => task.columnId === index + 1)}
                                addTask={addTask}></ListOfTasks>
                        </div>

                    )
                }

            </section>

        </main>
    );
}
export default BoardTrello;