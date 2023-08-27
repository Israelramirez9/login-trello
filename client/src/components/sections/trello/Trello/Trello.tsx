import React from 'react'
import useTrello from './useTrello'
import { RunningCircleSpinner } from '@/components/commons';
import styles from './Trello.module.scss'
function Trello() {
    const { message, isError } = useTrello();



    return (
        <div className={styles.trello}>
            {isError ?
                (
                    <p>An error has ocurred</p>
                ) :
                (
                    <>
                        <RunningCircleSpinner />
                        <p>{message}</p>
                    </>
                )
            }
        </div>
    )
}

export default Trello