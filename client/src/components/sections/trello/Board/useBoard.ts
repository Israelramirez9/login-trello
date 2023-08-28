import { useAppDispatch } from '@/store'
import { setActualBoard } from '@/store/reducers/trello';
import React, { useEffect } from 'react'

function useBoard(id: string) {

    const dispatch = useAppDispatch();
    useEffect(() => {
        
        dispatch(setActualBoard(id))

        return () => {
            dispatch(setActualBoard(null))
        }
    }, [])

    return


}

export default useBoard