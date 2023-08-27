import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

function useRouterMiddleware() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleRouteChangeStart = (url: string) => {
            /*si la "url" a la que quiero navegar es distinta a la que me encuentro
            "router.asPath" setIsLoading pasa a true por lo que mostrará el componente de cargando 
            esto evita que la pantalla se vuelva a refrescar cuando estoy en la misma ruta*/
            setIsLoading(url !== router.asPath)
        }
        const handleRouteChangeComplete = (url: string) => {
            setIsLoading(false)
        }
        const handleRouteChangeError = (error: Error, url: string) => {
            setIsLoading(false)
        }

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeError);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeError);
        }
        /*se agrega la dependencia de router para que se modifique cada vez que realizo un cambio es las rutas */
    }, [router]);

    return {
        isLoading
    }


}

export default useRouterMiddleware