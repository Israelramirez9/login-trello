import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useInputPasswordWithEye from './useInputPasswordWithEye';
import styles from './InputPasswordWithEye.module.scss'
type InputPasswordWithEyesProps = {
    type: string
    placeholder: string
    className: string
    name: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

function InputPasswordWithEye(props: InputPasswordWithEyesProps) {
    const { showPassword, handleVisibilityPassword } = useInputPasswordWithEye();
    return (
        <div className={styles['password-container']}>
            <input
                {...props}
                type={showPassword ? 'text' : 'password'}
            />
            <button type='button' className={styles["eye-button"]} onClick={handleVisibilityPassword}>
                {
                    showPassword ? <AiFillEye /> : <AiFillEyeInvisible />
                }
            </button>

        </div>
    )
}

export default InputPasswordWithEye