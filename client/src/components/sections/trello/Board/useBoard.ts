import { getBoardById } from '@/services/board.services';
import { getColumns } from '@/services/columns.services';
import { useAppDispatch, useAppSelector } from '@/store'
import { setActualBoard, setColumnsToActualBoard } from '@/store/reducers/trello';
import { useEffect, useState } from 'react'

function useBoard(id: string) {

    const [isError, setIsError] = useState(false);
    const actualBoard = useAppSelector(state => state.trello.actualBoard)
    const dispatch = useAppDispatch();

    useEffect(() => {

        (async function () {

            try {
                const board = await getBoardById(id)
                dispatch(setActualBoard(board))
                const columns = await getColumns(id)
                dispatch(setColumnsToActualBoard(columns))
                
            } catch (error) {
                console.log(error)
                setIsError(true);
            }

        })()

        return () => {
            dispatch(setActualBoard(null))
        }
    }, [])

    return {
        isError,
        actualBoard
    }


}

export default useBoard