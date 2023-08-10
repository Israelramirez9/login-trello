import React from 'react'
import '../styles/Board.css'
import Form from './Form'
import { Link } from 'react-router-dom'
import PUBLIC_URL from '../config.js'
export default function Board() {
    
    return (

        <section className="form-main">
            <div className="form-content">
                <div className="box">
                    <h3>Welcome</h3>
                    <Form></Form>
                    <p>Do you have not an account?</p><Link to={PUBLIC_URL + "/register"} className='gradient-text'>Sign Up</Link>

                </div>
            </div>

        </section>
    )
}