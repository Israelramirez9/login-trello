import React from 'react';
import FormSignUp from './FormSignUp';
import '../styles/BoardSignUp.css';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../config/base';
import Footer from '../../trello/components/Footer';
export default function BoardSignUp() {


  return (
    <section className="form-main">
      <div className="form-content">
        <div className="box">
          <h3>Register</h3>
          <FormSignUp></FormSignUp>
          <Link to={BASE_URL}>Come Back</Link>
        </div>

      </div>
      <Footer />
    </section>
  )
}
