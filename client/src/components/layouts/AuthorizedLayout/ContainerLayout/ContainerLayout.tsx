import React from 'react'
import styles from './ContainerLayout.module.scss'
import { AuthorFooter } from '@/components/commons'

function ContainerLayout({ children }: React.PropsWithChildren) {
    return (
        <article>
            <section className={styles['section-container']}>
                {children}
            </section>
            <AuthorFooter />
        </article>
    )
}

export default ContainerLayout