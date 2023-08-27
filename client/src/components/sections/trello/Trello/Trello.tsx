import React from 'react'
import useTrello from './useTrello'
import { RunningCircleSpinner } from '@/components/commons';
import styles from './Trello.module.scss'
function Trello() {
    const { isLoadingBoards } = useTrello();



    return (
        <div className={styles.trello}>
            <RunningCircleSpinner />
            <p>Loading Boards...</p>
        </div>
    )
}

export default Trello