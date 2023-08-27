import React from 'react'
import styles from './BarSpinner.module.scss'
function BarSpinner() {
    return (
        <>
            <span className={styles["spinner"]}>
                <span className={`${styles['bar']} ${styles.bar1}`}></span>
                <span className={`${styles['bar']} ${styles.bar2}`}></span>
                <span className={`${styles['bar']} ${styles.bar3}`}></span>
            </span>

            <span className={`${styles['spinner']} ${styles.large}`}>
                <span className={`${styles['bar']} ${styles.bar1}`}></span>
                <span className={`${styles['bar']} ${styles.bar2}`}></span>
                <span className={`${styles['bar']} ${styles.bar3}`}></span>
            </span>
        </>
    )
}

export default BarSpinner