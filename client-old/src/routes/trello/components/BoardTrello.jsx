import React, { useState, useEffect, useContext } from "react";
import '../styles/Board.css';
import ListOfTasks from "./listOfTasks";
import { getTasks, createTask, deleteTaskApi, updateTask } from "../../../services/tasks.services";
import HeaderBoardTrello from "./headerBoardTrello";
import HeaderColumn from "./headerColumn";
import { bringBoardsFromServer } from "./bringBoardsFromServer";
import NewColumn from "./newColumn";
import SliderMenu from "./sliderMenu";
import { UserContext } from "../../../auth/UserContext";
/* creates an array the size of columns to use or print on screen */



/* main component*/
function BoardTrello() {

    let columnByBoard = [];
    const { globalState, setGlobalState } = useContext(UserContext);
    const { boards } = globalState

    const [columns, setColumns] = useState([]);
    const [tasks, setTask] = useState([]);
    const [tasksFromServer, setTasksFromServer] = useState([]);
    const [isMoved, setIsMoved] = useState(false);
    /*useState initializes the value of the tasks array by calling the getTasks function */
    console.log(globalState)
    async function apiGetTasksFirstTime() {
        try {
            const resp = await getTasks();
            setTask(resp.data);
            setTasksFromServer(resp.data);
            const obj = await bringBoardsFromServer();
            setColumns(obj.columns);
            setGlobalState({ ...globalState, boards: obj.boards, currentBoardIndex: 0 })
            setBoards(obj.boards);
        } catch (e) {
            console.log(e)
        }
    }


    async function apiGetTasks() {
        try {
            const resp = await getTasks();
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

                columns.forEach(column => {

                    if (task.columnIndex === column.columnIndex) {
                        task.columnId = column.columnId
                    }
                })

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

    const moveSlider = () => {

        const slider = document.getElementsByClassName('slider-container')[0]

        isMoved ? slider.style.left = '-40rem' : slider.style.left = '0';
        setIsMoved(!isMoved)

    }

    columnByBoard = columns.filter(column => column.boardId === boards[globalState.currentBoardIndex]?.boardId)


    return (
        <main>
            <HeaderBoardTrello moveSlider={moveSlider} />
            <SliderMenu moveSlider={moveSlider} />
            <div className="title">
                <h1> {boards[globalState.currentBoardIndex]?.title}</h1>
            </div>
            <section className="section-board">
                {
                    columnByBoard.map((column, index) =>

                        <div key={index} className="column">
                            <HeaderColumn columnIndex={index + 1} title={column.title} columnId={column.columnId} columns={columns} setColumns={setColumns} setTask={setTask} />

                            <ListOfTasks
                                columnsLength={columns.length}
                                columnIndex={index + 1}
                                columnId={column.columnId}
                                changeColumnTaskToRight={changeColumnTaskToRight}
                                changeColumnTaskToleft={changeColumnTaskToleft}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                                tasks={tasks.filter((task) => task.columnIndex === index + 1)}
                                addTask={addTask}>

                            </ListOfTasks>
                        </div>

                    )
                }
                <NewColumn columns={columns} columnsByBoard={columnByBoard} setColumns={setColumns} boardId={boards[globalState.currentBoardIndex]?.boardId} />
            </section>

        </main>
    );
}
export default BoardTrello;