import React from 'react'
import { AuthorizedLayout } from '@/components/layouts'
import { Profile } from '@/components/sections'

function profile() {
    return (

        <AuthorizedLayout>
            <Profile />
        </AuthorizedLayout>

    )
}

export default profile