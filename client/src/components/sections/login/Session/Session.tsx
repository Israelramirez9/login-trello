import React from 'react'
import { Form } from './Form'
import Link from 'next/link'
import style from './Session.module.scss'
function Session() {
  return (

    <section className={style["form-main"]}>
      <div className={style["form-content"]}>
        <div className={style["box"]}>
          <h3>Welcome</h3>
          <Form />
          <span>Do you have not an account?</span>
          <Link
            href="/register"
            className={style['gradient-text']}>
            Sign Up
          </Link>

        </div>
      </div>

    </section>
  )
}

export default Session