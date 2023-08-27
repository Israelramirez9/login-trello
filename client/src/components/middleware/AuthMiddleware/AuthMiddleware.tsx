'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { useAppSelector } from '@/store';
import { Authenticating } from '@/components/sections/miscellaneous';
import { getAccessToken } from '@/helpers/token';
type AuthProps = {
    children: React.ReactNode
}
function AuthMiddleware({ children }: AuthProps) {
    const { push } = useRouter();

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
 
    useEffect(() => {
        
        if (getAccessToken() === null) {

            push('/login')
        }
    }, [isAuthenticated])


    if (isAuthenticated) {
        return children
    }

    return <Authenticating />
}

export default AuthMiddleware