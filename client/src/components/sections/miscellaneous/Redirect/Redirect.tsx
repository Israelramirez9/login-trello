import { BarSpiner } from '@/components/commons'
import React from 'react'
import styles from '../miscellaneous.module.scss'
function Redirect() {
    return (
        <>
            <div className={styles['container']}>
                <BarSpiner />
                <span>Redirecting...</span>
            </div>

        </>
    )
}

export default Redirect