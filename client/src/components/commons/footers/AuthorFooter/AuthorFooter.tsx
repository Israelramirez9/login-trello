import React from 'react'
import styles from './AuthorFooter.module.scss'
type AuthorFooterProps = {
    className: string
}
function AuthorFooter({ className }: AuthorFooterProps) {
    return (
        <footer className={`${styles["copyright"]} ${className}`}>
            <p>developed by 👉
                <a href="https://github.com/Israelramirez9" target="_blank">Israel
                    Ramírez</a> &#169;
            </p>
        </footer>
    )
}

export default AuthorFooter