import React from 'react'
import styles from './RunningCircleSpinner.module.scss'
function RunningCircleSpinner() {
    return (
        <div className={styles["lds-ring"]}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default RunningCircleSpinner