import { React, useState } from 'react'
import '../styles/FormSignUp.css';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { createUser } from '../../../services/users.services';
import { BASE_URL } from '../../../config/base';

export default function FormSignUp() {


    const [isAccountCreated, setIsAccountCreasted] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(false);
    const data = { name: "", email: "", password: "" }
    const [input, setInput] = useState(data);


    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    }
    const handleSend = async (event) => {
        event.preventDefault();
        if (input.name.length !== 0 && input.email.length !== 0 && input.password.length !== 0) {
            try {

                const resp = await createUser(input)
                swal("Good job!", "successfully registered user", "success");
                resp.data ? setIsAccountCreasted(true) : null
            } catch (error) {
                console.log(error)
                swal("email already registered", "use another email", "error");
            }
        } else {
            swal("you must fill in all the fields", "try again", "info");
        }
    }

    if (isAccountCreated) {
        return <Navigate to={BASE_URL} />
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
