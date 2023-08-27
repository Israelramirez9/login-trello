import { isServer } from '@/helpers/enviroment'
import { getAccessToken } from '@/helpers/token'
import { useAppDispatch, useAppSelector } from '@/store'
import { setIsAuthenticated } from '@/store/reducers/auth'
import { useEffect } from 'react'
import React from 'react'

function AuthProvider({ children }: React.PropsWithChildren) {

    const dispatch = useAppDispatch();

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    useEffect(() => {
        //si se ejecuta del lado del servidor se sale del callback
        if (isServer()) {
            return
        }
        // actualiza el estado de isAuthenticated buscando en el localStorage los tokens
        dispatch(setIsAuthenticated(getAccessToken() !== null))

    }, [])
    return (
        children
    )
}

export default AuthProvider