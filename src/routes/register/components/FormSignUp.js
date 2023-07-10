import { React, useState, useContext } from 'react'
import '../styles/FormSignUp.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../auth/UserContext';
import  PUBLIC_URL  from '../../../config.js';

export default function FormSignUp() {
    const [isAccountCreated, setIsAccountCreasted]=useState(false);
    const { globalState, setGlobalState } = useContext(UserContext);
    const data = { name: "", email: "", password: "" }

    const [input, setInput] = useState(data);


    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });

    }
    console.log(input);
    const handleSend = (event) => {
        event.preventDefault();
        
        console.log("aqui primero");
        console.log(globalState.isAuthenticate);
        if (input.name.length !== 0 && input.email.length !== 0 && input.password.length !== 0) {
            axios.post("https://649cd3219bac4a8e669cfcec.mockapi.io/users", input)
            .then(response=>{
                setIsAccountCreasted(true);
                console.log(response);})
            .catch(error=>console.log(error));
            console.log("aqui segundo");
            
            
        } else {
            window.alert("fill in all the fields");
        }
    }


    if(isAccountCreated){
        return <Navigate to={PUBLIC_URL}/>
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
