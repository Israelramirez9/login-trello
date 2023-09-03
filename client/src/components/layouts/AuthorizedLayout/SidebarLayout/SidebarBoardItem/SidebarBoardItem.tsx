import React from 'react'
import { Board } from '@/services/board.services'
import Link from 'next/link'
import useSidebarBoardItem from './useSidebarBoardItem'
import { BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import { TiCancel } from 'react-icons/ti'
import styles from './SidebarBoardItem.module.scss'
import useSidebar from '../../useSidebar'
import { deleteAlert } from '@/swalsAndToster/swalsAndToster'

type SidebarBoardItemProps = {
    board: Board
}

function SidebarBoardItem({ board }: SidebarBoardItemProps) {

    const {
        boardTitle,
        handleChangeTitleBoard,
        handleDeleteBoard,
        handleSendBoardTitle,
        handleStartEdit,
        handleStopEdit,
        isEditing,
        isError,
        showTrashButtonBoard,
        isLoading
    } = useSidebarBoardItem(board);
    const { moveSidebar } = useSidebar();
    if (isError) {
        return (
            <p>An error has ocurred in board sidebar</p>
        )
    }
    return (
        <>
            {
                isEditing ?
                    (
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            handleSendBoardTitle();
                        }}
                            className={styles['form-board-title']}
                        >
                            <input
                                placeholder={board.title}
                                value={boardTitle}
                                onChange={handleChangeTitleBoard}
                                className={styles['input-title-board']}
                                disabled={isLoading}
                            />
                            <div className={styles['edit-buttons-container']}>
                                <button
                                    type="button"
                                    onClick={handleStopEdit}
                                    className={`${styles['button-icons']} ${styles['cancel-button']} ${isLoading ? styles['buton-icon-disabled'] : styles['buton-icon-not-disabled']}`}
                                    disabled={isLoading}
                                >
                                    <TiCancel className={`${styles['icons']} ${isLoading ? styles['icon-disabled'] : styles['icon-not-disabled']}`} />
                                </button>
                                <button
                                    type="submit"
                                    className={`${styles['button-icons']}  ${styles['check-button']} ${isLoading ? styles['buton-icon-disabled'] : styles['buton-icon-not-disabled']}`}
                                    disabled={isLoading}
                                >
                                    <AiOutlineCheck className={`${styles['icons']} ${isLoading ? styles['icon-disabled'] : styles['icon-not-disabled']}`} />
                                </button>
                                {
                                    showTrashButtonBoard ?
                                        <button
                                            className={`${styles['button-icons']} ${styles['trash-button']} ${isLoading ? styles['buton-icon-disabled'] : styles['buton-icon-not-disabled']}`}
                                            onClick={() => deleteAlert(handleDeleteBoard, 'board')}
                                            disabled={isLoading}
                                        >
                                            <BsFillTrash3Fill className={`${styles['icons']} ${isLoading ? styles['icon-disabled'] : styles['icon-not-disabled']}`} />
                                        </button>
                                        : null
                                }
                            </div>
                        </form>
                    )
                    :
                    (
                        <>
                            <Link
                                onClick={moveSidebar}
                                href={`/trello/boards/${board.boardId}`}
                                className={`${styles['link-board-title']} ${isLoading ? styles['disabled-link'] : styles['not-disabled-link']}`}>
                                {boardTitle}
                            </Link>
                            <div className={styles['edit-buttons-container']}>
                                <button
                                    className={`${styles['button-icons']} ${styles['edit-button']} ${isLoading ? styles['buton-icon-disabled'] : styles['buton-icon-not-disabled']}`}
                                    onClick={handleStartEdit}
                                    disabled={isLoading}
                                >
                                    <BsPencilSquare className={`${styles['icons']} ${isLoading ? styles['icon-disabled'] : styles['icon-not-disabled']}`} />
                                </button>
                                {
                                    showTrashButtonBoard ?
                                        <button
                                            className={`${styles['button-icons']} ${styles['trash-button']} ${isLoading ? styles['buton-icon-disabled'] : styles['buton-icon-not-disabled']}`}
                                            onClick={() => deleteAlert(handleDeleteBoard, 'board')}
                                            disabled={isLoading}
                                        >
                                            <BsFillTrash3Fill className={`${styles['icons']} ${isLoading ? styles['icon-disabled'] : styles['icon-not-disabled']}`} />
                                        </button>
                                        : null
                                }
                            </div>
                        </>
                    )
            }

        </>
    )
}

export default SidebarBoardItem