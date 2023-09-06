import React from 'react'
import useForm from './useForm'
import styles from './Form.module.scss'
import { InputPasswordWithEye } from '@/components/commons';


function Form() {

  const { handleSend, handleChange, input } = useForm();

  return (
    <>
      <form onSubmit={handleSend} className={styles['form']}>

        <div className={styles['input-box']}>
          <input
            type="email"
            placeholder='Email'
            className={styles['input-control']}
            name="email"
            value={input.email}
            onChange={handleChange}
          >
          </input>
        </div>
        <div className={styles['input-box']}>

          <InputPasswordWithEye
            type="password"
            placeholder='Password'
            className={styles['input-control']}
            name="password"
            value={input.password}
            onChange={handleChange}
          />

        </div>
        <button type="submit" className={styles['btn']}>Sign In</button>
        
      </form >

    </>
  )
}

export default Form