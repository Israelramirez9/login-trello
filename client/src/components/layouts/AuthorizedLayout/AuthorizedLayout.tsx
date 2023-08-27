import React from 'react'
import NavbarLayout from './NavbarLayout/NavbarLayout'
import SidebarLayout from './SidebarLayout/SidebarLayout'
import { ContainerLayout } from './ContainerLayout'

type AuthorizedLayoutProps = React.PropsWithChildren

function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
    return (
        <>
            <SidebarLayout />
            <NavbarLayout />
            <ContainerLayout>
                {children}
            </ContainerLayout>
        </>
    )
}

export default AuthorizedLayout