import React from 'react';
import FormSignUp from './FormSignUp';
import '../styles/BoardSignUp.css';
import { Link } from 'react-router-dom';
import  PUBLIC_URL  from '../../../config.js';
export default function BoardSignUp() {


  return (
    <section className="form-main">
      <div className="form-content">
        <div className="box">
          <h3>Register</h3>
          <FormSignUp></FormSignUp>
          <Link to={PUBLIC_URL}>Come Back</Link>
        </div>
        
      </div>

    </section>
  )
}
