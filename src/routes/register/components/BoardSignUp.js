import React from 'react';
import FormSignUp from './FormSignUp';
import '../styles/BoardSignUp.css';

export default function BoardSignUp() {

    
  return (
    <section className="form-main">
    <div className="form-content">
        <div className="box">
            <h3>Register</h3>
            <FormSignUp></FormSignUp>                
            
        </div>
    </div>

</section>
  )
}
