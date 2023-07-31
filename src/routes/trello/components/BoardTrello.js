import React, { useState, useEffect, useContext } from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import '../styles/Board.css';
import ListOfTasks from "./listOfTasks.js";
import axios from "axios";
import { UserContext } from "../../../auth/UserContext";
import swal from "sweetalert";
/* creates an array the size of columns to use or print on screen */
const SIZE = 4;
const API = "http://localhost:8080/tasks";
const COLUMNS = [...new Array(SIZE)];



/* main component*/
function BoardTrello() {
    const { globalState, setGlobalState } = useContext(UserContext);
    const [tasks, setTask] = useState([]);
    const [tasksFromServer, setTasksFromServer] = useState([]);
    /*useState initializes the value of the tasks array by calling the getTasks function */




    useEffect(() => {
        axios.get(API)
            .then(response => {
                
                setTask(response.data.filter((obj) => obj.userId === globalState.userId));
                setTasksFromServer(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        axios.get(API)
            .then(response => {
                setTasksFromServer(response.data);
            })
            .catch(error => console.log(error));

    }, [tasks]);


    // setTask(tasksFromserver.filter((task)=>task.userId===globalState.userId));

    const changeColumnTaskToleft = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.id === id) {
                task.columnId = task.columnId - 1;
                tasksFromServer.forEach((serverTask) => {
                    if (serverTask.id === id) {
                        axios.put(API + "/" + serverTask.taskId, task)
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
            if (task.id === id) {
                task.columnId = task.columnId + 1;
                tasksFromServer.forEach((serverTask) => {
                    if (serverTask.id === id) {
                        axios.put(API + "/" + serverTask.taskId, task)
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
            const currentTasks = [...tasks, task];
            setTask(currentTasks);
            axios.post(API, task)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }
    }

    const deleteTask = (id) => {
        tasksFromServer.forEach((task) => {
            if (task.id === id) {
                axios.delete(API + "/" + task.taskId)
                    .then(response => console.log(response))
                    .catch(error => console.log(error));
            }
        })
        const currentTasks = tasks.filter((task) => task.id !== id);
        setTask(currentTasks);
    }

    const completeTask = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
                tasksFromServer.forEach((serverTask) => {
                    if (serverTask.id === id) {
                        axios.put(API + "/" + serverTask.taskId, task)
                            .then(res => console.log(res))
                            .catch(e => console.log(e))
                    }
                })
            }
            return task;
        });
        setTask(currentTasks);
    }
    const handleSend = (event) => {
        event.preventDefault();


        swal("Good Bye!", "arrivederci 😉", "success");
        setGlobalState({ isAuthenticate: false, userId: null });


    }


    return (
        <main>
            <header>
                <h1> List Of Tasks </h1>
                <div className="log-out-container">
                    <button onClick={handleSend} className="log-out-button">Log Out<AiOutlinePoweroff className="poweroff-icon" /></button>

                </div>

            </header>
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