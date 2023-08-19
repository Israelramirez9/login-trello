import React from "react";
import TaskForm from "./taskForm";
import Task from "./task";
import '../styles/listOfTasks.css';

function ListOfTasks({ columnIndex, addTask, tasks, completeTask, deleteTask, changeColumnTaskToRight, changeColumnTaskToleft, columnsLength, columnId }) {


    return (
        <>

            <TaskForm onSubmit={addTask} columnIndex={columnIndex} columnId={columnId} />

            <div className="tasks-list-container">
                {
                    tasks.map((task, index) =>
                        <Task
                            columnsLength={columnsLength}
                            key={index}
                            id={task.taskId}
                            text={task.text}
                            isCompleted={task.isCompleted}
                            columnIndex={columnIndex}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                            changeColumnTaskToRight={changeColumnTaskToRight}
                            changeColumnTaskToleft={changeColumnTaskToleft}>

                        </Task>
                    )
                }
            </div>
        </>

    );
}
export default ListOfTasks;