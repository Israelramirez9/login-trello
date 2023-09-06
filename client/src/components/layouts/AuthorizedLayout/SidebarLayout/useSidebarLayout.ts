import useSidebar from '@/components/layouts/AuthorizedLayout/useSidebar'
import { createBoard, getBoards } from '@/services/board.services';
import { useAppDispatch, useAppSelector } from '@/store';
import { setBoards } from '@/store/reducers/trello';
import { handleToast } from '@/utils/toast';
import { useEffect, useState } from 'react';


function useSidebarLayout() {

    const { isMoved, moveSidebar } = useSidebar();
    const [isError, setIsError] = useState(false);
    const dispatch = useAppDispatch();
    const boards = useAppSelector(state => state.trello.boards)

    useEffect(() => {
        if (boards === null) {

            getBoards()
                .then(boards => {
                    dispatch(setBoards(boards));
                })
                .catch(error => {
                    console.log(error)
                    setIsError(true)
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCreateNewBoard = () => {
        createBoard({ title: 'New Board' })
            .then(board => {
                handleToast('board created')
                dispatch(setBoards(boards === null ?
                    [board] :
                    [...boards, board]))
            })
            .catch(error => {
                console.log(error);
                setIsError(true);
            })
    }
    return {
        isMoved,
        moveSidebar,
        boards,
        isError,
        handleCreateNewBoard
    }


}

export default useSidebarLayout