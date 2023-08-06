import { React, useState, useContext, useEffect } from 'react'
import '../styles/FormSignUp.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import PUBLIC_URL from '../../../config.js';
import { AiFillEye } from "react-icons/ai";
export default function FormSignUp() {
    const [dataFromServer, setDataFromServer] = useState([]);

    const [isAccountCreated, setIsAccountCreasted] = useState(false);

    const API = "http://localhost:8080/users";

    const data = { name: "", email: "", password: "" }

    const [input, setInput] = useState(data);

    useEffect(() => {
        axios.get(API)
            .then(response => setDataFromServer(response.data))
            .catch(error => console.log(error))
    }, [])

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    }

    const handleSend = (event) => {
        event.preventDefault();


        if (input.name.length !== 0 && input.email.length !== 0 && input.password.length !== 0) {

            if (dataFromServer.some((obj) => obj.email === input.email)) {
                swal("email already registered", "use another email", "error");

            } else {
                axios.post(API, input)
                    .then(response => {
                        swal("Good job!", "successfully registered user", "success");
                        setIsAccountCreasted(true);
                        console.log(response);
                    })
                    .catch(error => console.log(error));
            }

        } else {
            swal("Warning!", "fill in all the fields", "warning");
        }
    }


    if (isAccountCreated) {
        return <Navigate to={PUBLIC_URL} />
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
                <input type="text" placeholder='Name' className='input-control' name="name" value={input.name} onChange={handleChange}></input>
            </div>
            <div className='input-box'>
                <input type="email" placeholder='Email' className='input-control' name="email" value={input.email} onChange={handleChange}></input>
            </div>
            <div className='input-box password-container'>
                <input type="password" placeholder='Password' className='input-control' name="password" value={input.password} onChange={handleChange} id="password"></input>
                <AiFillEye className='eye-icon' onClick={showPassword} id="eye-icon"></AiFillEye>
            </div>
            <button type="submit" className='btn'>create Account</button>
        </form>
    )

}
