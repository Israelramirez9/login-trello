import { React, useState, useEffect } from 'react'

import '../styles/Form.css'
import axios from 'axios';

export default function Form() {
    const [dataServer, setDataServer] = useState([]);

    useEffect(() => {
        axios.get("https://649cd3219bac4a8e669cfcec.mockapi.io/users").then(response => setDataServer(response.data)).catch(error => console.log(error))
    }, [])

    const authenticateUser = () => {
        return dataServer.some(user => user.email === input.email && user.password === input.password);
    }
    const data = { email: "", password: "" }

    const [input, setInput] = useState(data);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
        console.log(input);
    }

    const handleSend = (event) => {
        event.preventDefault();
        console.log(dataServer)
        if(authenticateUser()){
            console.log("usuario encontrado")
        }else{
            console.log("usuario no encontrado")
        }
    }


    return (
        <form action="" onSubmit={handleSend}>
            <div className='input-box'>
                <input type="text" placeholder='Email' className='input-control' name="email" value={input.email} onChange={handleChange}></input>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' className='input-control' name="password" value={input.password} onChange={handleChange}></input>
                <div className='input-link'>
                    <a href="#1" className='gradient-text'>Have you forgotten your password?</a>
                </div>
            </div>
            <button type="submit" className='btn'>Sign in</button>
        </form>
    )
}
