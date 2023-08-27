import Link from 'next/link'
import React from 'react'
import { Form } from './Form'


function RegisterUser() {
  return (
    <>
      <h3>Register</h3>
      <Form></Form>
      <Link href="/login">I already have an account </Link>
    </>
  )
}

export default RegisterUser