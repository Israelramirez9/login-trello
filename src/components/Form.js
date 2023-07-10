import { React, useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Form.css'
import axios from 'axios';
import { UserContext } from '../auth/UserContext';
import  PUBLIC_URL  from '../config.js';
export default function Form() {
    const [dataServer, setDataServer] = useState([]);

    const { globalState, setGlobalState } = useContext(UserContext);

    useEffect(() => {
        axios.get("https://649cd3219bac4a8e669cfcec.mockapi.io/users").then(response => setDataServer(response.data)).catch(error => console.log(error))
    }, [])

    const authenticateUser = () => {
        return dataServer.some(user => user.email === input.email && user.password === input.password);
    }
    const data = { email: "", password: "" };

    const [input, setInput] = useState(data);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    }

    const handleSend = (event) => {
        event.preventDefault();   
        if (authenticateUser()) {
            const dataUser=dataServer.filter((obj)=>obj.email === input.email && obj.password === input.password);
            
            console.log("usuario encontrado");
            setGlobalState({ ...globalState, isAuthenticate: true, userId: dataUser[0].userId })
        } else {
            console.log("usuario no encontrado");
        }
        
    }
    
    if (globalState.isAuthenticate) {
        return <Navigate to={`${PUBLIC_URL}/trello`}></Navigate>;
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
