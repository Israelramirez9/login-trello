import React from 'react'
import NavbarLayout from './NavbarLayout/NavbarLayout'
import SidebarLayout from './SidebarLayout/SidebarLayout'

type AuthorizedLayoutProps = React.PropsWithChildren

function AuthorizedLayout({ children }: AuthorizedLayoutProps) {
    return (
        <>
            <NavbarLayout />
            <SidebarLayout />
            {children}
        </>
    )
}

export default AuthorizedLayout