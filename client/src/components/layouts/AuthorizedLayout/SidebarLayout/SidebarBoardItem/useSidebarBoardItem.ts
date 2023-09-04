import { deleteBoard as deleteBoardService, updateBoard as updateBoardService } from '@/services/board.services';
import { useAppDispatch, useAppSelector } from '@/store';
import { deleteBoard as deleteBoardStore, updateBoard as updateBoardStore } from '@/store/reducers/trello';
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';

type HookSidebarItemProps = {
    title: string
    boardId: string
}
function useSidebarBoardItem({ title, boardId }: HookSidebarItemProps) {

    const [boardTitle, setBoardTitle] = useState(title)

    useEffect(() => {
        setBoardTitle(title)
    }, [title])

    const dispatch = useAppDispatch();

    const { boards, actualBoard } = useAppSelector(state => state.trello)

    const showTrashButtonBoard = (
        actualBoard?.boardId !== boardId
        && boards !== null
        && boards.length > 1
    )

    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);

    const [isEditing, setIsEditing] = useState(false);

    const handleDeleteBoard = () => {
        setIsLoading(true);
        deleteBoardService(boardId)
            .then(board => {
                dispatch(deleteBoardStore({ boardId: board.boardId }))
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false)
                console.log(error)
                setIsError(true)
            })
    }

    const handleChangeTitleBoard: React.ChangeEventHandler<HTMLInputElement> = (event) => {

        setBoardTitle(event.target.value)
    }

    const handleStartEdit = () => {
        setIsEditing(true);
    }

    const handleSendBoardTitle = () => {
        if (boardTitle.trim() === '') {
            swal("you must fill in", "try again", "info")
            return
        }
        setIsLoading(true);
        updateBoardService(boardId, { title: boardTitle })
            .then(board => {

                dispatch(updateBoardStore({ boardId: board.boardId, title: boardTitle }))
                setIsLoading(false)
                setIsEditing(false);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
                setIsError(true)
            })

    }

    const handleStopEdit = () => {
        setBoardTitle(title);
        setIsEditing(false);
    }



    return {
        isEditing,
        handleDeleteBoard,
        isError,
        boardTitle,
        handleChangeTitleBoard,
        handleSendBoardTitle,
        handleStartEdit,
        handleStopEdit,
        showTrashButtonBoard,
        isLoading
    }


}

export default useSidebarBoardItem