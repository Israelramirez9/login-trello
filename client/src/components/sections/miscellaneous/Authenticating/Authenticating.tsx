import { BarSpiner } from '@/components/commons'
import React from 'react'
import styles from '../miscellaneous.module.scss'
function Authenticating() {
    return (
        <>
            <div className={styles['container']}>
                <BarSpiner />
                <span>Authenticating...</span>
            </div>

        </>
    )
}

export default Authenticating