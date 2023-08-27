import { createBoard, getBoards } from "@/services/board.services"
import { useAppDispatch, useAppSelector } from "@/store"
import { setBoards } from "@/store/reducers/trello"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const createFirstBoard = async () => {

    const firstBoard = await createBoard({ title: 'My Tasks Board' });
    return firstBoard
}

function useTrello() {

    const { push, asPath } = useRouter();
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState('Loading boards...')
    const dispatch = useAppDispatch();
    const boards = useAppSelector(state => state.trello.boards)
    console.log(boards);

    useEffect(() => {
        getBoards()
            .then(boards => {
                dispatch(setBoards(boards));
            })
            .catch(error => {
                console.log(error)
                setIsError(true)
            })
    }, [])

    useEffect(() => {
        if (boards === null) return

        if (boards.length === 0) {
            setMessage('Creating your New Board...')
            createFirstBoard()
                .then(board => {
                    dispatch(setBoards([board]))
                })
                .catch(error => {
                    console.log(error)
                    setIsError(true);
                })
            return
        }
        setMessage('Redirecting to your first board...')
        push(`${asPath}/boards/${boards[0].boardId}`)

    }, [boards])


    return { message, isError }

}

export default useTrello