import React from 'react'
import { Trello } from '@/components/sections'
import { AuthMiddleware } from '@/components/middleware'
import { AuthorizedLayout } from '@/components/layouts'

function trello() {
 
    return (
        /**
         * verifico el token si existe lo dejo pasar a los hijos, sino lo redirecciono al login
         */
        <AuthMiddleware>
            {
                /**
                 * muestro los layout para el usuario autorizado que serán el navbar el sidebar y el contenedor que contendrá a trello
                 */
            }
            <AuthorizedLayout >
                <Trello />
            </AuthorizedLayout>

        </AuthMiddleware>
    )
}

export default trello