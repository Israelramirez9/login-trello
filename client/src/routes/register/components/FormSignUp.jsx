import { React, useState } from 'react'
import '../styles/FormSignUp.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { API_URL } from '../../../config/api';


export default function FormSignUp() {


    const [isAccountCreated, setIsAccountCreasted] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false);

    const API_USERS_URL = API_URL + '/users';
    const data = { name: "", email: "", password: "" }
    const [input, setInput] = useState(data);


    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    }
    const handleSend = (event) => {
        event.preventDefault();
        if (input.name.length !== 0 && input.email.length !== 0 && input.password.length !== 0) {
            axios.post(API_USERS_URL, input)
                .then(resp => {
                    console.log(resp.data)
                    if (resp.data.isHasBeenCreated) {
                        swal("Good job!", "successfully registered user", "success");
                        setIsAccountCreasted(true)
                    }
                })
                .catch(error => {
                    swal("email already registered", "use another email", "error");
                    console.log(error)
                })
        } else {
            swal("Warning!", "fill in all the fields", "warning");
        }
    }


    if (isAccountCreated) {
        return <Navigate to="/" />
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

        <form action="" onSubmit={handleSend}>
            <div className='input-box'>
                <input type="text" placeholder='Name' className='input-control' name="name" value={input.name} onChange={handleChange}></input>
            </div>
            <div className='input-box'>
                <input type="email" placeholder='Email' className='input-control' name="email" value={input.email} onChange={handleChange}></input>
            </div>
            <div className='input-box password-container'>
                <input type="password" placeholder='Password' className='input-control' name="password" value={input.password} onChange={handleChange} id="password"></input>
                {
                    printEye()
                }
            </div>
            <button type="submit" className='btn'>create Account</button>
        </form>
    )

}
