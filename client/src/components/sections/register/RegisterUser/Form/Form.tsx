import React from 'react'
import useForm from './useForm'

function Form() {
  const { handleSend, handleChange, input } = useForm();

  return (
    <form action="" onSubmit={handleSend}>
      <div className='input-box'>
        <input
          type="text"
          placeholder='Name'
          className='input-control'
          name="name"
          value={input.name}
          onChange={handleChange}
        >
        </input>
      </div>
      <div className='input-box'>
        <input
          type="email"
          placeholder='Email'
          className='input-control'
          name="email"
          value={input.email}
          onChange={handleChange}
        >
        </input>
      </div>
      <div className='input-box password-container'>
        <input
          type="password"
          placeholder='Password'
          className='input-control'
          name="password"
          value={input.password}
          onChange={handleChange}
          id="password"
        >
        </input>

      </div>
      <button type="submit" className='btn'>create Account</button>
    </form>
  )
}

export default Form