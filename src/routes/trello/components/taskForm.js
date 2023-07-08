import React,{useState} from "react";
import '../styles/taskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({onSubmit, columnId}){

    const [input,setInput]=useState('');

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSend=(e)=>{
        // allows the page not to be reloaded every time the input is entered
        e.preventDefault();
        const newTask={
            columnId:columnId,
            id:uuidv4(),
            text:input,
            isCompleted:false
        }        
        console.log(newTask);
        onSubmit(newTask)
        e.target.reset();

        //modified the state
        setInput("");
        
    }
    return(
       
        <form
        className='task-form'
            onSubmit={handleSend}>
            <input id="input-form"
             className='task-input'
             type='text'
             placeholder='Write your task...'
             name="text"
             onChange={handleChange}></input>
            <button>Add Task</button>
        </form>
        
    );
}
export default TaskForm;