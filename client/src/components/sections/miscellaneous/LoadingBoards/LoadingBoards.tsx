import React from 'react'
import styles from '../miscellaneous.module.scss'
import { BarSpinner } from '@/components/commons'

function LoadingBoards() {
    return (
        <>
            <div className={styles['container']}>
                <BarSpinner />
                <span>Loading Board...</span>
            </div>

        </>
    )
}

export default LoadingBoards