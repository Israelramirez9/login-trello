import React from 'react'
import { Authenticating } from '@/components/sections/miscellaneous';
import useAuthMiddleware from './useAuthMiddleware';

type AuthProps = {
    children: React.ReactNode
}

function AuthMiddleware({ children }: AuthProps) {
    const { isAuthenticated } = useAuthMiddleware();

    if (isAuthenticated) {
        return children
    }

    return <Authenticating />
}

export default AuthMiddleware