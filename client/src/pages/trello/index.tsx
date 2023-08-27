import React from 'react'
import { Board } from '@/components/sections'
import { AuthMiddleware } from '@/components/middleware'
import { AuthorizedLayout } from '@/components/layouts'

function trello() {

    return (
        <AuthMiddleware>
            <AuthorizedLayout >
                <Board />
            </AuthorizedLayout>

        </AuthMiddleware>
    )
}

export default trello