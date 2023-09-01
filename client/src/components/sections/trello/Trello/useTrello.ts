import { createBoard, getBoards } from "@/services/board.services"
import { useAppDispatch, useAppSelector } from "@/store"
import { setBoards } from "@/store/reducers/trello"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const createFirstBoard = async () => {
    return await createBoard({ title: 'My Tasks Board' });
}

function useTrello() {

    const { push, asPath } = useRouter();

    const [isError, setIsError] = useState(false)

    const [message, setMessage] = useState('Loading boards...')

    const boards = useAppSelector(state => state.trello.boards)

    const dispatch = useAppDispatch();

    /**
     * borré el useEffect que trae por primera vez los boards
     */
  
    /**
     * se ejecutará cada vez que cambien los boards del store
     */
    useEffect(() => {
        /**
         * si es el estado inicial del store, es decir, todavía no se ha asignado el array de boards desde el servidor
         * no realizará ninguna lógica 
         */
        if (boards === null) {
            console.log('board esta en null, estado inical')
            return
        }
        /**
         * cuando ya se actualizó el store de boards con la información del servidor
         * crear el primer board si no existe ninguno, es decir, boards=[]
         * cambia el estado de boards en el store con el nuevo board creado arbitrariamente         
         */
        if (boards.length === 0) {
            console.log('si boards es igual a cero creo el board y lo actualizo en el store')
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
        /**
         * cuando exista almenos 1 board en el store, redirige la página al primer board 
         */
        console.log('redirigiendo al primer board creado')
        setMessage('Redirecting to your first board...')
        push(`${asPath}/boards/${boards[0].boardId}`)

    }, [boards])


    return { message, isError }

}

export default useTrello