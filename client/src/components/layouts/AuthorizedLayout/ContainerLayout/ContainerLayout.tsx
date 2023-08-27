import React from 'react'
import styles from './ContainerLayout.module.scss'
function ContainerLayout({ children }: React.PropsWithChildren) {
    return (
        <section className={styles['section-container']}>{children}</section>
    )
}

export default ContainerLayout