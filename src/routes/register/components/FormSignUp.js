import { React, useState } from 'react'
import '../styles/FormSignUp.css';
import axios from 'axios';

export default function FormSignUp() {

    const data = { name: "", email: "", password: "" }

    const [input, setInput] = useState(data);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
        console.log(input);
    }

    const handleSend = (event) => {
        event.preventDefault();
        axios.post("https://649cd3219bac4a8e669cfcec.mockapi.io/users",input);
        
    }

    return (
        <form action="" onSubmit={handleSend}>
            <div className='input-box'>
                <input type="text" placeholder='Name' className='input-control' name="name" value={input.name} onChange={handleChange}></input>
            </div>
            <div className='input-box'>
                <input type="email" placeholder='Email' className='input-control' name="email" value={input.email} onChange={handleChange}></input>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' className='input-control' name="password" value={input.password} onChange={handleChange}></input>
            </div>
            <button type="submit" className='btn'>create Account</button>
        </form>
    )

}
