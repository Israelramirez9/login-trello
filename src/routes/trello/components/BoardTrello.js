import React, { useState, useEffect, useContext } from "react";

import '../styles/Board.css';
import ListOfTasks from "./listOfTasks.js";
import axios from "axios";
import { UserContext } from "../../../auth/UserContext";
/* creates an array the size of columns to use or print on screen */
const SIZE = 4;

const COLUMNS = [...new Array(SIZE)];

/*getTasks gets the array of tasks stored in the localStorage */
// const getTasks = () => {
//     let data = localStorage.getItem("tasks");
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return [];
//     }
// }

/* main component*/
function BoardTrello() {
    const { globalState, setGlobalState } = useContext(UserContext);
    const [tasks, setTask] = useState([]);
    const [tasksFromServer, setTasksFromServer] = useState([]);
    /*useState initializes the value of the tasks array by calling the getTasks function */



    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [tasks])
    useEffect(() => {
        axios.get("https://649cd3219bac4a8e669cfcec.mockapi.io/tasks")
            .then(response => {
                setTask(response.data.filter((obj) => obj.userId === globalState.userId));
                setTasksFromServer(response.data);
            })
            .catch(error => console.log(error));
    }, [])




    // setTask(tasksFromserver.filter((task)=>task.userId===globalState.userId));

    const changeColumnTaskToleft = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.id === id) {
                task.columnId = task.columnId - 1;
            }
            return task;
        })
        setTask(currentTasks);
    }
    const changeColumnTaskToRight = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.id === id) {
                task.columnId = task.columnId + 1;
            }
            return task;
        })
        setTask(currentTasks);
    }

    const addTask = (task) => {
        if (task.text.trim()) {
            task.text = task.text.trim();
            const currentTasks = [task, ...tasks];
            setTask(currentTasks);
        }
    }

    const deleteTask = (id) => {
        const currentTasks = tasks.filter((task) => task.id !== id);
        setTask(currentTasks);
    }

    const completeTask = (id) => {
        const currentTasks = tasks.map((task) => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTask(currentTasks);
    }
    const handleSend = (event) => {
        event.preventDefault();
        console.log(tasksFromServer);
        if (tasksFromServer.length !== 0) {
            tasksFromServer.forEach((task) => {
                axios.delete(`https://649cd3219bac4a8e669cfcec.mockapi.io/tasks/${task.taskId.toString()}`)
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            });
        }
        tasks.forEach(task => {
            axios.post("https://649cd3219bac4a8e669cfcec.mockapi.io/tasks", task)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        });
        window.alert("updated files");
        setGlobalState({ isAuthenticate: false, userId: null });
        
        
    }
    console.log(tasks);

    return (
        <main>
            <header>
                <h1> List Of Tasks </h1>
                <button onClick={handleSend}>Save & Log Out</button>

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