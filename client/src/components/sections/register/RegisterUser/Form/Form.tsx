import React from 'react'
import useForm from './useForm'
import styles from './Form.module.scss'
import { InputPasswordWithEye } from '@/components/commons';

function Form() {
  const { handleSend, handleChange, input } = useForm();

  return (
    <form onSubmit={handleSend} className={styles['form']}>
      <div className={styles['input-box']}>
        <input
          type="text"
          placeholder='Name'
          className={styles['input-control']}
          name="name"
          value={input.name}
          onChange={handleChange}
        >
        </input>
      </div>
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
      <div className={styles['input-box']}>

        <InputPasswordWithEye
          type="password"
          placeholder='repeat password'
          className={styles['input-control']}
          name="passwordrepeated"
          value={input.passwordrepeated}
          onChange={handleChange}
        />

      </div>
      <div className={styles['validations-container']}>
        <p className={styles['validations']}>
          * password must be between 8 and 16 characters
        </p>
        <p className={styles['validations']}>
          * at least one digit
        </p>
        <p className={styles['validations']}>
          * at least one lowercase and at least one uppercase.
        </p>
      </div>
      <button type="submit" className={styles['btn']}>create Account</button>
    </form >
  )
}

export default Form