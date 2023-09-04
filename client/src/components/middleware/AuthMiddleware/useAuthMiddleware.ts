import { getAccessToken } from '@/helpers/token';
import { useAppSelector } from '@/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

function useAuthMiddleware() {
    const { push } = useRouter();

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
    /**
     * verifico si está logueado el usuario, caso contrario lo redirecciono al login
     */
    useEffect(() => {

        if (getAccessToken() === null) {
            push('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])


    return {
        isAuthenticated
    }


}

export default useAuthMiddleware