import React from 'react';
import FormSignUp from './FormSignUp';
import '../styles/BoardSignUp.css';
import { Link } from 'react-router-dom';
export default function BoardSignUp() {


  return (
    <section className="form-main">
      <div className="form-content">
        <div className="box">
          <h3>Register</h3>
          <FormSignUp></FormSignUp>
          <Link to="/">Come Back</Link>
        </div>

      </div>

    </section>
  )
}
