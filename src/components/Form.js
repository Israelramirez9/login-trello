import { React, useState, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Form.css'
import axios from 'axios';
import { UserContext } from '../auth/UserContext';
import PUBLIC_URL from '../config.js';
import { AiFillEye } from "react-icons/ai";
import swal from 'sweetalert';

export default function Form() {
    const [dataServer, setDataServer] = useState([]);

    const { globalState, setGlobalState } = useContext(UserContext);

    useEffect(() => {
        axios.get("http://localhost:8080/users")
            .then(response => setDataServer(response.data))
            .catch(error => console.log(error))
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
            const dataUser = dataServer.filter((obj) => obj.email === input.email && obj.password === input.password);
            swal("Good job!", "user found", "success")
            console.log("usuario encontrado");
            setGlobalState({ ...globalState, isAuthenticate: true, userId: dataUser[0].userId })
        } else {
            console.log("usuario no encontrado");
            swal("Error", "user not found", "error");
        }

    }

    if (globalState.isAuthenticate) {
        return <Navigate to={`${PUBLIC_URL}/trello`}></Navigate>;
    }

    const showPassword = () => {
        let passwordElement = document.getElementById("password");
        let eyeIconElement = document.getElementById("eye-icon");
        if (passwordElement.type == "password") {
            passwordElement.type = "text";
            eyeIconElement.style.color = "gray";
        } else {
            passwordElement.type = "password";
            eyeIconElement.style.color = "black";
        }
    }


    return (
        <form action="" onSubmit={handleSend}>
            <div className='input-box'>
                <input type="text" placeholder='Email' className='input-control' name="email" value={input.email} onChange={handleChange}></input>
            </div>
            <div className='input-box password-container'>
                <input type="password" placeholder='Password' className='input-control' name="password" value={input.password} onChange={handleChange} id="password"></input>
                <AiFillEye className='eye-icon' onClick={showPassword} id="eye-icon"></AiFillEye>

            </div>
            <button type="submit" className='btn'>Sign in</button>
        </form>
    )
}
