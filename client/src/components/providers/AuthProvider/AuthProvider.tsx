import { isServer } from '@/helpers/enviroment'
import { getAccessToken } from '@/helpers/token'
import { useAppDispatch } from '@/store'
import { setIsAuthenticated } from '@/store/reducers/auth'
import { useEffect } from 'react'
import React from 'react'

function AuthProvider({ children }: React.PropsWithChildren) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (isServer()) {
            return
        }
        dispatch(setIsAuthenticated(getAccessToken() !== null))

    }, [])
    return (
        children
    )
}

export default AuthProvider