import { getBoardById } from '@/services/board.services';
import { getColumns } from '@/services/columns.services';
import { getTasks } from '@/services/tasks.services';
import { useAppDispatch, useAppSelector } from '@/store'
import { setActualBoard, setColumnsToActualBoard, setTasksToColumnByColumnId } from '@/store/reducers/trello';
import { useEffect, useState } from 'react'

function useBoard(id: string) {

    const [isError, setIsError] = useState(false);
    const actualBoard = useAppSelector(state => state.trello.actualBoard)
    const dispatch = useAppDispatch();


    useEffect(() => {


        (async function () {
            /**
             * me traigo el board por el id y actualizo el estado de la store
             */
            try {
                const board = await getBoardById(id)
                dispatch(setActualBoard(board))
                /**
                 * me traigo las columnas que pertenecen a ese boardId y actualizo el estado de la store
                 */
                const columns = await getColumns(id)
                dispatch(setColumnsToActualBoard(columns))
                /**
                 * por cada columna, me traigo las tareas y actualizo el estado en el store
                 */
                columns.forEach(async (column) => {
                    const tasks = await getTasks(column.columnId)

                    dispatch(setTasksToColumnByColumnId({
                        columnId: column.columnId,
                        tasks: tasks
                    }))
                })
            } catch (error) {
                console.log(error)
                setIsError(true);
            }

        })()
        /**
         * la callback que se ejecuta en el return es una función de limpieza ,es decir, se ejecutará una vez que se haya borrado el componente actual
         */
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