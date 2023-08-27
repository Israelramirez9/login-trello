import React from 'react'
import useAuthProvider from './useAuthProvider'

function AuthProvider({ children }: React.PropsWithChildren) {

    
    useAuthProvider(); 

    return children
}

export default AuthProvider