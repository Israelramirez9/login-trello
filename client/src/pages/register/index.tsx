import React from 'react'
import { RegisterUser } from '@/components/sections'
import { UnauthorizedLayout } from '@/components/layouts'
function register() {
    return (
        <UnauthorizedLayout>
            <RegisterUser />
        </UnauthorizedLayout>
    )
}

export default register  
