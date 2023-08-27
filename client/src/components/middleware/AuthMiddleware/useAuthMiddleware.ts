import { getAccessToken } from '@/helpers/token';
import { useAppSelector } from '@/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

function useAuthMiddleware() {
    const { push } = useRouter();

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    useEffect(() => {

        if (getAccessToken() === null) {
            push('/login')
        }
    }, [isAuthenticated])


    return {
        isAuthenticated
    }


}

export default useAuthMiddleware