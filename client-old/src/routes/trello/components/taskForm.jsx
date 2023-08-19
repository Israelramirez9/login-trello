import React, { useState, useContext } from "react";
import '../styles/taskForm.css';
import { UserContext } from "../../../auth/UserContext";
function TaskForm({ onSubmit, columnIndex, columnId }) {

    const { globalState } = useContext(UserContext)
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSend = (e) => {
        // allows the page not to be reloaded every time the input is entered
        e.preventDefault();
        const newTask = {
            userId: globalState.userId,
            columnIndex: columnIndex,
            text: input,
            isCompleted: false,
            columnId: columnId
        }

        onSubmit(newTask)
        e.target.reset();

        //modified the state
        setInput("");

    }
    return (

        <form
            className='task-form'
            onSubmit={handleSend}>
            <input id="input-form"
                className='task-input'
                type='text'
                placeholder='Write your task...'
                name="text"
                onChange={handleChange}></input>
            <button className="add-task">Add Task</button>
        </form>

    );
}
export default TaskForm;