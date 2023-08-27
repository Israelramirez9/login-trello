import React from 'react'
import styles from './AuthorFooter.module.scss'

function AuthorFooter() {
    return (
        <footer className={styles["copyright"]}>
            <p>developed by 👉
                <a href="https://github.com/Israelramirez9" target="_blank">Israel
                    Ramírez</a> &#169;
            </p>
        </footer>
    )
}

export default AuthorFooter