import React from 'react';
import '../styles/task.css';
import { AiOutlineCloseCircle, AiOutlineCheckCircle, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import swal from 'sweetalert';

function Task({ id, text, isCompleted, completeTask, deleteTask, columnIndex, changeColumnTaskToleft, changeColumnTaskToRight }) {

    const alertDeleteTask=()=>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your task has been deleted!", {
                icon: "success",
              });
              deleteTask(id);
            } else {
              swal("Your task is safe!");
            }
          });
    }
    return (
        <div className="tasks-container">
            {columnIndex !== 1 ? <div className="row" onClick={()=>changeColumnTaskToleft(id)}><AiOutlineArrowLeft /></div> : null}

            <div className={isCompleted ? 'text-task-container completed' : 'text-task-container'}>
                {text}
            </div>
            <div className='task-icon-container'
                onClick={() => completeTask(id)}>
                <AiOutlineCheckCircle className="done-task-icon" />
            </div>
            <div className='task-icon-container'
                onClick={alertDeleteTask}>
                <AiOutlineCloseCircle className='delete-task-icon' />
            </div>
            {columnIndex !== 4 ? <div className="row" onClick={()=>changeColumnTaskToRight(id)}><AiOutlineArrowRight /></div> : null}
        </div>
    );
}

export default Task;