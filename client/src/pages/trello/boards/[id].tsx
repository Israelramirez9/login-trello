import { AuthorizedLayout } from '@/components/layouts'
import { AuthMiddleware } from '@/components/middleware'
import { Board, Loading } from '@/components/sections'
import { useRouter } from 'next/router'

export default function board() {
    const router = useRouter()

    if (!router.query.id) {
        return <Loading />
    }
 
    return (
        /**
         * verifica si estoy logueado , sino me devuelve a la pagina de login
         */
        <AuthMiddleware>
            {
                /**
                 * cargar el navbar, el sidebar y el contenedor de la pagina
                 */
            }
            <AuthorizedLayout >
                {/**
                 * el uso de "as" es para definir un tipo de dato en caso que la variable este tipada con muchos tipos de datos
                 */}
                <Board id={router.query.id as string} />
            </AuthorizedLayout>
        </AuthMiddleware>
    )
}