import { BarSpinner } from '@/components/commons'
import React from 'react'
import styles from '../miscellaneous.module.scss'
function Loading() {
    return (
        <>
            <div className={styles['container']}>
                <BarSpinner />
                <span>Loading...</span>
            </div>

        </>
    )
}

export default Loading