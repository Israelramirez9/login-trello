import { isServer } from '@/helpers/enviroment';
import { getAccessToken } from '@/helpers/token';
import { useAppDispatch } from '@/store';
import { setIsAuthenticated } from '@/store/reducers/auth';
import { useEffect } from 'react'

/**
 * esta función verifica en el localStorage si el usuario tiene token 
 * y cambia el estado en el store si está autenticado o tiene la sesión iniciada  
 */ 
function useAuthProvider() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        //si se ejecuta del lado del servidor se sale del callback
        if (isServer()) {
            return
        }
        // actualiza el estado de isAuthenticated buscando en el localStorage los tokens
        dispatch(setIsAuthenticated(getAccessToken() !== null))

    }, [])
}

export default useAuthProvider