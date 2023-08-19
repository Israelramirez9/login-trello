import Link from 'next/link'
import React from 'react'
import { Form } from './Form'
import styles from './RegisterUser.module.scss'

function RegisterUser() {
  return (
    <section className={styles["form-main"]}>
      <div className={styles["form-content"]}>
        <div className={styles["box"]}>
          <h3>Register</h3>
          <Form></Form>
          <Link href="/">Come Back</Link>
        </div>

      </div>

    </section>
  )
}

export default RegisterUser