import { React, useState, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import '../styles/Form.css'
import axios from 'axios';
import { UserContext } from '../auth/UserContext';
import PUBLIC_URL from '../config.js';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import swal from 'sweetalert';

export default function Form() {

    const { globalState, setGlobalState } = useContext(UserContext);
    const [input, setInput] = useState({ email: "", password: "" });
    const [eyeIcon, setEyeIcon] = useState(false)
    const API_URL = "http://localhost:8080/api/users";


    const authenticateUser = (event) => {
        event.preventDefault();
        axios.post(API_URL, input)
            .then(resp => {
                console.log(resp.data)
                if (resp.data.isAuthenticate) {
                    swal("Good job!", "user found", "success")
                    setGlobalState({ ...globalState, isAuthenticate: resp.data.isAuthenticate, userId: resp.data.userId })
                } 
            })
            .catch(error => {
                swal("Error", "user or password Incorrect!", "error");
                console.log(error);
            })
    }


    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }


    if (globalState.isAuthenticate) {
        return <Navigate to={`${PUBLIC_URL}/trello`}></Navigate>;
    }

    const showPassword = () => {
        let passwordElement = document.getElementById("password");
        setEyeIcon(prevState => !prevState)
        if (passwordElement.type === "password") {
            passwordElement.type = "text";
        } else {
            passwordElement.type = "password";
        }
    }

    const printEye = () => {
        return eyeIcon ? <AiFillEye className='eye-icon' onClick={showPassword} id="eye-icon" /> : <AiFillEyeInvisible className='eye-icon' onClick={showPassword} id="eye-icon" />
    }


    return (
        <form action="" onSubmit={authenticateUser}>
            <div className='input-box'>
                <input type="text" placeholder='Email' className='input-control' name="email" value={input.email} onChange={handleChange} required></input>
            </div>
            <div className='input-box password-container'>
                <input type="password" placeholder='Password' className='input-control' name="password" value={input.password} onChange={handleChange} id="password"></input>
                {
                    printEye()
                }

            </div>
            <button type="submit" className='btn'>Sign in</button>
        </form>
    )
}
