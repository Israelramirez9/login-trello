import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import styles from './SidebarLayout.module.scss'
import useSidebarLayout from './useSidebarLayout'
import Image from 'next/image'
import { SidebarBoardItem } from './SidebarBoardItem'

function SidebarLayout() {
    const { isMoved, moveSidebar, boards, isError, handleCreateNewBoard } = useSidebarLayout();


    return (
        <aside className={`${styles['slider-container']} ${isMoved ? styles['visual-slider-container'] : styles['hidden-slider-container']}`} >
            <div className={styles['close-aside-icon-container']} onClick={moveSidebar}>
                <GrClose className={styles['close-aside-icon']} />
            </div>
            <div className={styles['logo-trello-aside-container']}>
                <Image src="/images/trello-logo.png" alt="logo" width={666} height={375} />
            </div>
            <ul className={styles['name-list-boards-container']}>
                {
                    isError ?
                        (
                            <p>An Error has Ocurred bringing boards</p>
                        )
                        :
                        (
                            boards?.map((board, index) => (
                                <li key={index} >
                                    <SidebarBoardItem board={board} />
                                </li>
                            ))
                        )
                }

            </ul>
            <div className={styles['add-another-board-container']} >
                <button className={styles['add-another-board']} onClick={handleCreateNewBoard}>
                    <AiOutlinePlusCircle className={styles['add-another-board-icon']} />
                    add another board
                </button>
            </div>
        </aside >
    )
}

export default SidebarLayout