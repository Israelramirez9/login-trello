import React from 'react'
import NavbarLayout from './NavbarLayout/NavbarLayout'
import SidebarLayout from './SidebarLayout/SidebarLayout'

type AuthorizedLayoutProps = React.PropsWithChildren

function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
    return (
        <>
            <SidebarLayout />
            <NavbarLayout />

            {children}
        </>
    )
}

export default AuthorizedLayout