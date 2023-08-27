
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useAppSelector } from '@/store';
type AuthProps = {
    children: React.ReactNode
}
function AuthMiddleware({ children }: AuthProps) {
    const { push } = useRouter();

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    if (isAuthenticated) {
        return children
    }
    
    useEffect(() => {
        push('/login')
    }, [])



    return null

}

export default AuthMiddleware