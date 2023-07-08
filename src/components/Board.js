import React from 'react'
import '../styles/Board.css'
import Form from './Form'
export default function Board() {
    return(

    <section className="form-main">
        <div className="form-content">
            <div className="box">
                <h3>Welcome</h3>
                <Form></Form>                
                <p>Do you have not an account?</p><a href="#2" className='gradient-text'> Sign Up</a>
            </div>
        </div>

    </section>
    )
}