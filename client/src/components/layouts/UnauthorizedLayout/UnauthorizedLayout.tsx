import React from 'react'
import styles from './UnauthorizedLayout.module.scss'
import { AuthorFooter } from '@/components/commons'

type UnauthorizedProps = {
  children: React.ReactNode
}

function Unauthorized({ children }: UnauthorizedProps) {
  return (
    <>
      <section className={styles["form-main"]}>
        <div className={styles["form-content"]}>
          <div className={styles["box"]}>
            {
              children
            }
          </div>
        </div>
      </section>
      <AuthorFooter className={styles["footer-unauthorized"]} />
    </>
  )
}

export default Unauthorized