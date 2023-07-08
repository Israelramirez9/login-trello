import { React, useState } from 'react'
import '../styles/Form.css'
export default function Form() {
    const data={email:"",password:""}

    const [input,setInput]=useState(data);

    const handleChange=(event)=>{
            setInput({...input,[event.target.name]:event.target.value});
            console.log(input);
    }
    return (
        <form action="">
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
