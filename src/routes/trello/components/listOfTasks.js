import React from "react";
import TaskForm from "./taskForm.js";
import Task from "./task.js";
import '../styles/listOfTasks.css';

function ListOfTasks({ columnId, addTask, tasks, completeTask, deleteTask, changeColumnTaskToRight, changeColumnTaskToleft }) {

    
    return (
        <>

            <TaskForm onSubmit={addTask} columnId={columnId}></TaskForm>
            <div className="tasks-list-container">
                {
                    tasks.map((task, index) =>
                        <Task
                            key={index}
                            id={task.id}
                            text={task.text}
                            isCompleted={task.isCompleted}
                            columnId={columnId}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                            changeColumnTaskToRight={changeColumnTaskToRight}
                            changeColumnTaskToleft={changeColumnTaskToleft}></Task>
                    )
                }
            </div>
        </>

    );
}
export default ListOfTasks;