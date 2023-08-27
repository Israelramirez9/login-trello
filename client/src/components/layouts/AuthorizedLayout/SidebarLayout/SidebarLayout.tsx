import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import styles from './SidebarLayout.module.scss'
import useSidebarLayout from './useSidebarLayout'

function SidebarLayout() {
    const { isMoved, moveSidebar } = useSidebarLayout();

    const boards: Array<object> = [];
    return (
        <aside className={`${styles['slider-container']} ${isMoved ? styles['visual-slider-container'] : styles['hidden-slider-container']}`} >
            <div className={styles['close-aside-icon-container']} onClick={moveSidebar}>
                <GrClose className={styles['close-aside-icon']} />
            </div>
            <div className={styles['logo-trello-aside-container']}>
                <img src="./images/trello-logo.png" />
            </div>
            <ul className={styles['name-list-boards-container']}>
                {

                    boards.map((board, index) => (
                        <li key={index} ></li>
                    ))

                }

            </ul>
            <div className={styles['add-another-board-container']} >
                <div className={styles['add-another-board']} >
                    <AiOutlinePlusCircle className={styles['add-another-board-icon']} />
                    add another board
                </div>
            </div>
        </aside >
    )
}

export default SidebarLayout