import React from 'react'
import { Form } from './Form'
import Link from 'next/link'

function Session() {
  return (

    <>
      <h3>Welcome</h3>
      <Form />
      <span>Do you have not an account?</span>
      {" "}
      <Link href="/register"  >
        Sign Up
      </Link>
    </>
  )
}

export default Session