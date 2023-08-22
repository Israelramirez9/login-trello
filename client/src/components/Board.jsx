import React from 'react'
import '../styles/Board.css'
import Form from './Form'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../config/base'

export default function Board() {

    return (

        <section className="form-main">
            <div className="form-content">
                <div className="box">
                    <h3>Welcome</h3>
                    <Form></Form>
                    <p>Do you have not an account?</p><Link to={BASE_URL + "register"} className='gradient-text'>Sign Up</Link>

                </div>
            </div>

        </section>
    )
}