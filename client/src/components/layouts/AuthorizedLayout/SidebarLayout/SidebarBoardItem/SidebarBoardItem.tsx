import React from 'react'
import { Board } from '@/services/board.services'
import Link from 'next/link'
import useSidebarBoardItem from './useSidebarBoardItem'
import { BsFillTrash3Fill, BsPencilSquare } from 'react-icons/bs'
import { GrSend } from 'react-icons/gr'
import { TiCancel } from 'react-icons/ti'

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
                        }}>
                            <input
                                placeholder={board.title}
                                value={boardTitle}
                                onChange={handleChangeTitleBoard}
                                className='input-title-board'
                            />
                            <button type="button" onClick={handleStopEdit}>
                                <TiCancel />
                            </button>
                            <button type="submit">
                                <GrSend />
                            </button>
                        </form>
                    )
                    :
                    (
                        <>
                            <Link href={`/trello/boards/${board.boardId}`}>
                                {boardTitle}
                            </Link>
                            <button className='board-edit-icon-container' onClick={handleStartEdit} >
                                <BsPencilSquare className='board-edit-icon' />
                            </button>
                        </>
                    )
            }
            {
                showTrashButtonBoard ?
                    <button className='board-trash-icon-container' onClick={handleDeleteBoard}>
                        <BsFillTrash3Fill className='board-trash-icon' />
                    </button>
                    : null
            }
        </>
    )
}

export default SidebarBoardItem