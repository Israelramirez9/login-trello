import { AuthorizedLayout } from '@/components/layouts'
import { AuthMiddleware } from '@/components/middleware'
import { Board } from '@/components/sections'
import { useRouter } from 'next/router'

export default function board() {
    const router = useRouter()
    return (
        <AuthMiddleware>
            <AuthorizedLayout >
                {/**
                 * el uso de "as" es para definir un tipo de dato en caso que la variable este tipada con muchos tipos de datos
                 */}
                <Board id={router.query.id as string} />
            </AuthorizedLayout>
        </AuthMiddleware>
    )
}