import Link from 'next/link'
import React from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { FaPowerOff, FaUserAlt } from 'react-icons/fa'
import styles from './NavbarLayout.module.scss'
import useNavbarLayout from './useNavbarLayout'

function NavbarLayout() {
    const { moveSidebar } = useNavbarLayout();
    return (
        <header className={styles['header-container']}>
            <div className={styles['first-container']}>
                <button className={styles['menu-dropdown-container']} onClick={moveSidebar}>
                    <BsGrid3X3GapFill className={styles['icon-menu-drop']} />
                </button>
                <Link href="/trello">
                    <div className={styles['logo-trello-container']}>
                        <img src="./images/trello-logo.png" alt="logo" />
                    </div>
                </Link>
            </div>
            <div className={styles['second-container']}>
                <Link href="/updateUser" className={styles['icon-user-container']}>
                    <FaUserAlt className={styles['icon-user']} />
                </Link>
                <button className={styles['icon-power-off-container']} >
                    <FaPowerOff className={styles['icon-power-off']} />
                </button>
            </div>
        </header>
    )
}

export default NavbarLayout