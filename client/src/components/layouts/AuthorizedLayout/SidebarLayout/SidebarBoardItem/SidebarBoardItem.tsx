import React from 'react'
import { Board } from '@/services/board.services'
import Link from 'next/link'
import useSidebarBoardItem from './useSidebarBoardItem'
import { BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'
import { GrSend } from 'react-icons/gr'
import { TiCancel } from 'react-icons/ti'
import styles from './SidebarBoardItem.module.scss'

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
        showTrashButtonBoard
    } = useSidebarBoardItem(board);

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
                        }} className={styles['form-board-title']}>
                            <input
                                placeholder={board.title}
                                value={boardTitle}
                                onChange={handleChangeTitleBoard}
                                className={styles['input-title-board']}
                            />
                            <button type="button" onClick={handleStopEdit} className={styles['button-icons']}>
                                <TiCancel className={styles['icons-boards-title']} />
                            </button>
                            <button type="submit" className={styles['button-icons']}>
                                <GrSend className={styles['icons-boards-title']} />
                            </button>
                        </form>
                    )
                    :
                    (
                        <>
                            <Link href={`/trello/boards/${board.boardId}`} className={styles['link-board-title']}>
                                {boardTitle}
                            </Link>
                            <button className={styles['button-icons']} onClick={handleStartEdit} >
                                <BsPencilSquare className={styles['icons-boards-title']} />
                            </button>
                        </>
                    )
            }
            {
                showTrashButtonBoard ?
                    <button className={styles['button-icons']} onClick={handleDeleteBoard}>
                        <BsFillTrash3Fill className={styles['icons-boards-title']} />
                    </button>
                    : null
            }
        </>
    )
}

export default SidebarBoardItem