import Link from 'next/link'
import React from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaPowerOff, FaUserAlt } from 'react-icons/fa'
import styles from './NavbarLayout.module.scss'
import useNavbarLayout from './useNavbarLayout'
import Image from 'next/image'

function NavbarLayout() {
    const { moveSidebar, logout } = useNavbarLayout();
    return (
        <nav className={styles['header-container']}>
            <div className={styles['first-container']}>
                <button className={styles['menu-dropdown-container']} onClick={moveSidebar}>
                    <BsGrid3X3GapFill className={styles['icon-menu-drop']} />
                </button>
                <Link href="/trello">
                    <div className={styles['logo-trello-container']}>
                        <Image src="/images/trello-logo.png" alt="logo" width={666} height={375} />
                    </div>
                </Link>
            </div>
            <div className={styles['second-container']}>
                <Link href="/profile" className={styles['icon-user-container']}>
                    <FaUserAlt className={styles['icon-user']} />
                </Link>
                <button className={styles['icon-power-off-container']} onClick={logout}>
                    <FaPowerOff className={styles['icon-power-off']} />
                </button>
            </div>
        </nav>
    )
}

export default NavbarLayout