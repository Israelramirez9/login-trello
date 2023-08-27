import React from 'react'
import { Trello } from '@/components/sections'
import { AuthMiddleware } from '@/components/middleware'
import { AuthorizedLayout } from '@/components/layouts'

function trello() {

    return (
        <AuthMiddleware>
            <AuthorizedLayout >
                <Trello />
            </AuthorizedLayout>

        </AuthMiddleware>
    )
}

export default trello